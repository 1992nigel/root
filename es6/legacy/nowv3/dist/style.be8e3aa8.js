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
})({238:[function(require,module,exports) {
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
},{}],237:[function(require,module,exports) {
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
},{"./bundle-url":238}],2:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./assets/fonts/Amatic-SC/AmaticSC-Regular.ttf":131,"./assets/fonts/Amatic-SC/amaticsc-regular-webfont.woff2":130,"./assets/fonts/Amatic-SC/amaticsc-regular-webfont.woff":132,"./assets/gui/gui_button_hire.svg":6,"./assets/gui/gui_button_help.svg":7,"./assets/gui/gui_button_signin.svg":8,"./assets/gui/gui_button_signup.svg":9,"./assets/gui/gui_button_signout.svg":10,"./assets/gui/nownigel_gui_logo_type.svg":11,"./assets/gui/nownigel_gui_logo_type_1.svg":12,"./assets/gui/nownigel_gui_logo_type_2.svg":13,"./assets/gui/nownigel_gui_logo_type_3.svg":14,"./assets/gui/nownigel_gui_logo_type_4.svg":15,"./assets/gui/nownigel_gui_logo_mark.svg":16,"./assets/gui/hands.svg":17,"./assets/gui/circle.svg":18,"./assets/gui/circle_hover.svg":19,"./assets/gui/gui_logo.svg":20,"./assets/gui/gui_move_note.svg":21,"./assets/gui/gui_logo_navs.svg":22,"./assets/gui/gui_logo_navs_hover.svg":23,"./assets/gui/gui_dots.svg":24,"./assets/gui/gui_dots_hover.svg":25,"./assets/gui/about_type.svg":26,"./assets/gui/gui_button_enter.svg":27,"./assets/gui/gui_button_start.svg":28,"./assets/gui/gui_button_learn.svg":29,"./assets/gui/gui_or.svg":30,"./assets/gui/gui_close.svg":31,"./assets/gui/gui_close_hover.svg":32,"./assets/gui/gui_dash.svg":33,"./assets/gui/gui_user_blank.svg":34,"./assets/gui/gui_search.svg":35,"./assets/gui/gui_scroll.svg":36,"./assets/gui/gui_arrow_left.svg":37,"./assets/gui/gui_arrow_top_left.svg":38,"./assets/gui/gui_arrow_bottom_left.svg":39,"./assets/gui/gui_arrow_top.svg":40,"./assets/gui/gui_arrow_bottom.svg":41,"./assets/gui/gui_arrow_right.svg":42,"./assets/gui/gui_arrow_top_right.svg":43,"./assets/gui/gui_arrow_bottom_right.svg":44,"./assets/gui/accent_noise_1.svg":45,"./assets/gui/accent_noise_2.svg":46,"./assets/gui/accent_noise_3.svg":47,"./assets/gui/accent_noise_4.svg":48,"./assets/effect/effect_vignette.svg":49,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_left.svg":50,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_right.svg":51,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200.svg":52,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_closer.svg":505,"./assets/load/letters_n_1.svg":636,"./assets/load/letters_n_2.svg":637,"./assets/load/letters_n_3.svg":633,"./assets/load/letters_n_4.svg":634,"./assets/load/letters_n_5.svg":649,"./assets/load/letters_n_6.svg":635,"./assets/load/letters_n_7.svg":638,"./assets/load/letters_n_8.svg":639,"./assets/load/letters_n_9.svg":640,"./assets/load/letters_n_10.svg":641,"./assets/load/letters_n_11.svg":642,"./assets/load/letters_n_12.svg":646,"./assets/load/letters_n_13.svg":643,"./assets/load/letters_n_14.svg":644,"./assets/load/letters_n_15.svg":645,"./assets/load/letters_n_16.svg":647,"./assets/load/letters_n_17.svg":648,"./assets/load/letters_n_18.svg":651,"./assets/load/letters_n_19.svg":658,"./assets/load/letters_n_20.svg":650,"./assets/load/letters_n_21.svg":652,"./assets/load/letters_n_22.svg":653,"./assets/load/letters_n_23.svg":654,"./assets/load/letters_n_24.svg":656,"./assets/load/letters_n_25.svg":655,"./assets/load/letters_n_26.svg":657,"./assets/load/letters_n_27.svg":660,"./assets/load/letters_n_28.svg":659,"./assets/load/letters_misc.svg":697,"./assets/load/hand_pencil.svg":682,"./assets/load/hand_pencil_top_right.svg":686,"./assets/load/hand_pencil_top_left.svg":688,"./assets/load/hand_pencil_bottom_right.svg":692,"./assets/frames/attacked_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_left_1.svg":663,"./assets/frames/attacked_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_left_2.svg":666,"./assets/frames/attacked_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_left_3.svg":667,"./assets/frames/attacked_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_left_4.svg":668,"./assets/frames/attacked_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_right_1.svg":675,"./assets/frames/attacked_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_right_2.svg":673,"./assets/frames/attacked_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_right_3.svg":674,"./assets/frames/attacked_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_right_4.svg":672,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_1.svg":133,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_2.svg":134,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_3.svg":135,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_4.svg":136,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_5.svg":137,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_6.svg":138,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_7.svg":139,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_8.svg":141,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_9.svg":140,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_1.svg":142,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_2.svg":143,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_3.svg":144,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_4.svg":145,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_5.svg":146,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_6.svg":147,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_7.svg":148,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_8.svg":149,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_9.svg":150,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0.svg":53,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_1.svg":54,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_2.svg":55,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_3.svg":56,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_4.svg":57,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_5.svg":58,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_6.svg":59,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_7.svg":60,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_8.svg":61,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_9.svg":71,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_10.svg":63,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_11.svg":62,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_12.svg":64,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_13.svg":65,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_14.svg":66,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_15.svg":69,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_16.svg":67,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_17.svg":68,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_18.svg":73,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_19.svg":70,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_20.svg":72,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_21.svg":74,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_22.svg":75,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_23.svg":76,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_24.svg":77,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_25.svg":78,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_26.svg":81,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_27.svg":79,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_28.svg":80,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_29.svg":82,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_30.svg":83,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_31.svg":84,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_32.svg":85,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_33.svg":86,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_34.svg":87,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_35.svg":88,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_36.svg":90,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_37.svg":89,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_38.svg":91,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_39.svg":92,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_40.svg":93,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_41.svg":94,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_42.svg":95,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_43.svg":96,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_44.svg":97,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_45.svg":98,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_46.svg":99,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_47.svg":100,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_48.svg":101,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_49.svg":102,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_50.svg":103,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_51.svg":104,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_52.svg":105,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_53.svg":106,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_54.svg":108,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_55.svg":109,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_56.svg":107,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_57.svg":110,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_58.svg":111,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_59.svg":112,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_60.svg":113,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_61.svg":116,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_62.svg":114,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_63.svg":115,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_64.svg":117,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_1.svg":122,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_2.svg":118,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_3.svg":121,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_4.svg":119,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_1.svg":120,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_2.svg":125,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_3.svg":123,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_4.svg":124,"./assets/frames/sit_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right.svg":153,"./assets/frames/sit_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_1.svg":151,"./assets/frames/sit_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_2.svg":152,"./assets/frames/sit_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_3.svg":154,"./assets/frames/sit_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_4.svg":155,"./assets/frames/sit_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left.svg":156,"./assets/frames/sit_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_1.svg":158,"./assets/frames/sit_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_2.svg":157,"./assets/frames/sit_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_3.svg":159,"./assets/frames/sit_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_4.svg":160,"./assets/frames/prone_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_1.svg":161,"./assets/frames/prone_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_2.svg":162,"./assets/frames/prone_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_3.svg":164,"./assets/frames/prone_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_4.svg":163,"./assets/frames/prone_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_1.svg":166,"./assets/frames/prone_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_2.svg":167,"./assets/frames/prone_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_3.svg":165,"./assets/frames/prone_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_4.svg":168,"./assets/frames/punch_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_1.svg":171,"./assets/frames/punch_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_2.svg":170,"./assets/frames/punch_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_3.svg":169,"./assets/frames/punch_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_4.svg":172,"./assets/frames/punch_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_1.svg":173,"./assets/frames/punch_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_2.svg":177,"./assets/frames/punch_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_3.svg":174,"./assets/frames/punch_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_4.svg":175,"./assets/frames/jump_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_1.svg":176,"./assets/frames/jump_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_2.svg":179,"./assets/frames/jump_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_3.svg":181,"./assets/frames/jump_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_4.svg":178,"./assets/frames/jump_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_1.svg":180,"./assets/frames/jump_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_2.svg":182,"./assets/frames/jump_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_3.svg":184,"./assets/frames/jump_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_4.svg":183,"./assets/frames/float_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_1.svg":185,"./assets/frames/float_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_2.svg":186,"./assets/frames/float_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_3.svg":188,"./assets/frames/float_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_4.svg":187,"./assets/frames/float_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_1.svg":192,"./assets/frames/float_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_2.svg":191,"./assets/frames/float_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_3.svg":189,"./assets/frames/float_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_4.svg":190,"./assets/frames/bend_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_1.svg":194,"./assets/frames/bend_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_2.svg":193,"./assets/frames/bend_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_3.svg":197,"./assets/frames/bend_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_4.svg":195,"./assets/frames/bend_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_1.svg":196,"./assets/frames/bend_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_2.svg":199,"./assets/frames/bend_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_3.svg":198,"./assets/frames/bend_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_4.svg":200,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_1.svg":201,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_2.svg":202,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_3.svg":204,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_4.svg":203,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_5.svg":205,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_6.svg":206,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_7.svg":207,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_8.svg":209,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_9.svg":208,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_10.svg":210,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_11.svg":211,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_12.svg":212,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_13.svg":569,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_14.svg":570,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_15.svg":571,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_16.svg":575,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_17.svg":572,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_18.svg":573,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_19.svg":580,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_20.svg":574,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_21.svg":579,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_22.svg":576,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_23.svg":577,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_24.svg":578,"./assets/frames/loading/painter.svg":554,"./assets/frames/loading/painter_1.svg":559,"./assets/frames/loading/white_wall.svg":545,"./assets/frames/loading/egg_wall.svg":551,"./assets/frames/loading/wall_1.svg":535,"./assets/frames/loading/wall_2.svg":536,"./assets/frames/loading/wall_3.svg":537,"./assets/frames/loading/wall_4.svg":538,"./assets/frames/loading/wall_5.svg":539,"./assets/frames/loading/wall_6.svg":540,"./assets/frames/loading/wall_7.svg":541,"./assets/frames/loading/wall_8.svg":542,"./assets/frames/loading/gui_paint_hand_1.svg":587,"./assets/frames/loading/gui_paint_hand_2.svg":588,"./assets/frames/loading/gui_paint_hand_3.svg":586,"./assets/frames/loading/gui_paint_hand_4.svg":589,"./assets/frames/loading/gui_paint_hand_5.svg":591,"./assets/frames/loading/gui_paint_hand_6.svg":590,"./assets/frames/loading/gui_paint_hand_7.svg":593,"./assets/frames/loading/gui_paint_hand_8.svg":592,"./assets/frames/loading/gui_paint_hand_9.svg":594,"./assets/frames/loading/gui_paint_hand_10.svg":597,"./assets/frames/loading/gui_paint_hand_11.svg":595,"./assets/frames/loading/gui_paint_hand_12.svg":596,"./assets/frames/loading/gui_paint_hand_13.svg":598,"./assets/frames/loading/gui_paint_hand_14.svg":599,"./assets/frames/loading/gui_paint_hand_15.svg":600,"./assets/frames/loading/gui_paint_hand_16.svg":601,"./assets/frames/loading/gui_paint_hand_17.svg":602,"./assets/frames/loading/gui_paint_hand_18.svg":604,"./assets/frames/loading/gui_paint_hand_19.svg":605,"./assets/frames/loading/gui_paint_hand_20.svg":606,"./assets/frames/loading/gui_paint_hand_21.svg":607,"./assets/frames/loading/gui_paint_hand_22.svg":608,"./assets/frames/loading/gui_paint_hand_23.svg":609,"./assets/frames/loading/gui_paint_hand_24.svg":610,"./assets/frames/loading/gui_paint_1.svg":214,"./assets/frames/loading/gui_paint_2.svg":213,"./assets/frames/loading/gui_paint_3.svg":215,"./assets/frames/loading/gui_paint_4.svg":216,"./assets/frames/loading/gui_paint_5.svg":217,"./assets/frames/loading/gui_paint_6.svg":219,"./assets/frames/loading/gui_paint_7.svg":218,"./assets/frames/loading/gui_paint_8.svg":220,"./assets/frames/loading/gui_paint_9.svg":221,"./assets/frames/loading/gui_paint_10.svg":567,"./assets/frames/loading/gui_paint_11.svg":566,"./assets/frames/loading/gui_paint_12.svg":565,"./assets/pieces/particles/particles_health.svg":222,"./assets/pieces/stage/stage_grid.svg":521,"./assets/pieces/stage/stage_perspective.svg":527,"./assets/pieces/stage/stage_workspace.svg":224,"./assets/pieces/stage/stage_floor.svg":223,"./assets/pieces/stage/stage_door_closed.svg":225,"./assets/pieces/stage/stage_door_opened.svg":226,"./assets/pieces/stage/stage_wall.svg":227,"./assets/pieces/stage/stage_lines.svg":228,"./assets/pieces/stage/stage_lines_1.svg":707,"./assets/pieces/stage/stage_lines_2.svg":708,"./assets/pieces/stage/stage_lines_3.svg":709,"./assets/pieces/stage/stage_lines_wall.svg":700,"./assets/gui/gui_paint_top.svg":126,"./assets/gui/gui_paint_bottom.svg":127,"./assets/gui/gui_paint_right.svg":128,"./assets/gui/gui_paint_left.svg":129,"./assets/pieces/faces/face_nigel.svg":229,"./assets/pieces/faces/face_maisie.svg":230,"./assets/pieces/furniture/piece_desk_mg.svg":231,"./assets/pieces/furniture/piece_desk_bg.svg":232,"./assets/pieces/furniture/pieces_office_shoplight_on_bg.svg":234,"./assets/pieces/furniture/pieces_office_shoplight_off_bg.svg":233,"./assets/pieces/furniture/pieces_office_shoplight_off.svg":235,"./assets/pieces/furniture/pieces_office_shoplight_on.svg":236,"./assets/gui_cursor_handdrawn.svg":4,"./assets/gui_cursor_handdrawn_active.svg":5,"_css_loader":237}],710:[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '58009' + '/');
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
},{}],711:[function(require,module,exports) {
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
},{"./bundle-url":238}],0:[function(require,module,exports) {
var b=require(711);b.load([["AmaticSC-Regular.2aacce55.ttf",131],["amaticsc-regular-webfont.f1ad37f2.woff2",130],["amaticsc-regular-webfont.8026775f.woff",132],["gui_button_hire.180025e2.svg",6],["gui_button_help.281676f5.svg",7],["gui_button_signin.f1f4850f.svg",8],["gui_button_signup.39b55f9a.svg",9],["gui_button_signout.e0b72198.svg",10],["nownigel_gui_logo_type.d01c5fce.svg",11],["nownigel_gui_logo_type_1.53bf2f1d.svg",12],["nownigel_gui_logo_type_2.2c5703c0.svg",13],["nownigel_gui_logo_type_3.ae074d98.svg",14],["nownigel_gui_logo_type_4.2efb190b.svg",15],["nownigel_gui_logo_mark.a4349b2a.svg",16],["hands.90fc2cf5.svg",17],["circle.1e401b70.svg",18],["circle_hover.d6e72b7b.svg",19],["gui_logo.46404a27.svg",20],["gui_move_note.0e641229.svg",21],["gui_logo_navs.d06d4fa7.svg",22],["gui_logo_navs_hover.109c9ad5.svg",23],["gui_dots.82e89634.svg",24],["gui_dots_hover.b948d165.svg",25],["about_type.228fe0b9.svg",26],["gui_button_enter.7a68fbbb.svg",27],["gui_button_start.dc8973f7.svg",28],["gui_button_learn.339c5e9f.svg",29],["gui_or.60a78a11.svg",30],["gui_close.8b2cc02c.svg",31],["gui_close_hover.3517b02d.svg",32],["gui_dash.7437af15.svg",33],["gui_user_blank.812209c6.svg",34],["gui_search.2da5f8db.svg",35],["gui_scroll.77355624.svg",36],["gui_arrow_left.7c26c412.svg",37],["gui_arrow_top_left.e184fc62.svg",38],["gui_arrow_bottom_left.5e599f74.svg",39],["gui_arrow_top.341f9da7.svg",40],["gui_arrow_bottom.c961805a.svg",41],["gui_arrow_right.141be5a8.svg",42],["gui_arrow_top_right.f41fe8db.svg",43],["gui_arrow_bottom_right.fe04f92c.svg",44],["accent_noise_1.592a120b.svg",45],["accent_noise_2.0e37fd44.svg",46],["accent_noise_3.1bf2c19f.svg",47],["accent_noise_4.8d707bbf.svg",48],["effect_vignette.26d6f94b.svg",49],["nownigel_gui_interaction_hands_0_0_depth_200_left.80feec92.svg",50],["nownigel_gui_interaction_hands_0_0_depth_200_right.679b878b.svg",51],["nownigel_gui_interaction_hands_0_0_depth_200.77ff1ef3.svg",52],["nownigel_gui_interaction_hands_0_0_depth_200_closer.f4ed0d31.svg",505],["letters_n_1.248625d4.svg",636],["letters_n_2.8c599dd9.svg",637],["letters_n_3.632d41c7.svg",633],["letters_n_4.590f71a5.svg",634],["letters_n_5.580376d4.svg",649],["letters_n_6.5bf53e8a.svg",635],["letters_n_7.8c5c1606.svg",638],["letters_n_8.fc9cd8bf.svg",639],["letters_n_9.c4babdd6.svg",640],["letters_n_10.04134ccf.svg",641],["letters_n_11.7481c304.svg",642],["letters_n_12.63805aa3.svg",646],["letters_n_13.d8ce560f.svg",643],["letters_n_14.cdffdc9e.svg",644],["letters_n_15.adf3faac.svg",645],["letters_n_16.b69d038f.svg",647],["letters_n_17.1f70fb45.svg",648],["letters_n_18.c259d831.svg",651],["letters_n_19.1e10b462.svg",658],["letters_n_20.46b9aab8.svg",650],["letters_n_21.ecb20df4.svg",652],["letters_n_22.7717af92.svg",653],["letters_n_23.dadf6ff9.svg",654],["letters_n_24.15043138.svg",656],["letters_n_25.9a115346.svg",655],["letters_n_26.b5e4fcd1.svg",657],["letters_n_27.73e64ced.svg",660],["letters_n_28.5ccf1804.svg",659],["letters_misc.c14b96ae.svg",697],["hand_pencil.543a9a64.svg",682],["hand_pencil_top_right.ffd49593.svg",686],["hand_pencil_top_left.59c84805.svg",688],["hand_pencil_bottom_right.38543295.svg",692],["nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_left_1.54735cd8.svg",663],["nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_left_2.d67e0831.svg",666],["nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_left_3.2588b75a.svg",667],["nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_left_4.4c52982d.svg",668],["nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_right_1.686322e0.svg",675],["nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_right_2.bde09863.svg",673],["nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_right_3.a99436a0.svg",674],["nownigel_gui_interaction_man_0_16_depth_200_face_0_attacked_right_4.12a6ac62.svg",672],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_1.3ae00ce2.svg",133],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_2.b708698c.svg",134],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_3.1ba788e0.svg",135],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_4.09b44cf8.svg",136],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_5.eaa364cb.svg",137],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_6.827dfd07.svg",138],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_7.b4204b3c.svg",139],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_8.d2b5706a.svg",141],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_9.d24e775f.svg",140],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_1.826877e5.svg",142],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_2.31b18af7.svg",143],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_3.210003b3.svg",144],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_4.411bc6f5.svg",145],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_5.341f697e.svg",146],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_6.1bb8b852.svg",147],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_7.7813097b.svg",148],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_8.89284a0c.svg",149],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_9.ca9c78c0.svg",150],["nownigel_gui_interaction_man_0_16_depth_200_face_0.45b68f34.svg",53],["nownigel_gui_interaction_man_0_16_depth_200_face_1.016ff3d3.svg",54],["nownigel_gui_interaction_man_0_16_depth_200_face_2.81c947af.svg",55],["nownigel_gui_interaction_man_0_16_depth_200_face_3.57c88408.svg",56],["nownigel_gui_interaction_man_0_16_depth_200_face_4.19e22b0c.svg",57],["nownigel_gui_interaction_man_0_16_depth_200_face_5.070759e0.svg",58],["nownigel_gui_interaction_man_0_16_depth_200_face_6.27376045.svg",59],["nownigel_gui_interaction_man_0_16_depth_200_face_7.e60b3293.svg",60],["nownigel_gui_interaction_man_0_16_depth_200_face_8.6bb146f5.svg",61],["nownigel_gui_interaction_man_0_16_depth_200_face_9.f97418c2.svg",71],["nownigel_gui_interaction_man_0_16_depth_200_face_10.84dab9b5.svg",63],["nownigel_gui_interaction_man_0_16_depth_200_face_11.a2291e65.svg",62],["nownigel_gui_interaction_man_0_16_depth_200_face_12.e0517f1c.svg",64],["nownigel_gui_interaction_man_0_16_depth_200_face_13.29115f6d.svg",65],["nownigel_gui_interaction_man_0_16_depth_200_face_14.3f7188dd.svg",66],["nownigel_gui_interaction_man_0_16_depth_200_face_15.b13e6abf.svg",69],["nownigel_gui_interaction_man_0_16_depth_200_face_16.9c82fedd.svg",67],["nownigel_gui_interaction_man_0_16_depth_200_face_17.51c5a89a.svg",68],["nownigel_gui_interaction_man_0_16_depth_200_face_18.75d5731a.svg",73],["nownigel_gui_interaction_man_0_16_depth_200_face_19.292e12d9.svg",70],["nownigel_gui_interaction_man_0_16_depth_200_face_20.d14397f7.svg",72],["nownigel_gui_interaction_man_0_16_depth_200_face_21.caaabb48.svg",74],["nownigel_gui_interaction_man_0_16_depth_200_face_22.bd354f5c.svg",75],["nownigel_gui_interaction_man_0_16_depth_200_face_23.527c8a83.svg",76],["nownigel_gui_interaction_man_0_16_depth_200_face_24.6c514d6d.svg",77],["nownigel_gui_interaction_man_0_16_depth_200_face_25.e8346fec.svg",78],["nownigel_gui_interaction_man_0_16_depth_200_face_26.52f8c8d3.svg",81],["nownigel_gui_interaction_man_0_16_depth_200_face_27.4393a082.svg",79],["nownigel_gui_interaction_man_0_16_depth_200_face_28.4392d73b.svg",80],["nownigel_gui_interaction_man_0_16_depth_200_face_29.1bf74992.svg",82],["nownigel_gui_interaction_man_0_16_depth_200_face_30.5638714e.svg",83],["nownigel_gui_interaction_man_0_16_depth_200_face_31.7d99eec3.svg",84],["nownigel_gui_interaction_man_0_16_depth_200_face_32.5f87debc.svg",85],["nownigel_gui_interaction_man_0_16_depth_200_face_33.3a119006.svg",86],["nownigel_gui_interaction_man_0_16_depth_200_face_34.43862a83.svg",87],["nownigel_gui_interaction_man_0_16_depth_200_face_35.f68a79a9.svg",88],["nownigel_gui_interaction_man_0_16_depth_200_face_36.efc776a6.svg",90],["nownigel_gui_interaction_man_0_16_depth_200_face_37.e0d6f7d5.svg",89],["nownigel_gui_interaction_man_0_16_depth_200_face_38.ebecb5bd.svg",91],["nownigel_gui_interaction_man_0_16_depth_200_face_39.4f087078.svg",92],["nownigel_gui_interaction_man_0_16_depth_200_face_40.3d7a2431.svg",93],["nownigel_gui_interaction_man_0_16_depth_200_face_41.0ed3af55.svg",94],["nownigel_gui_interaction_man_0_16_depth_200_face_42.b203345f.svg",95],["nownigel_gui_interaction_man_0_16_depth_200_face_43.a4c46426.svg",96],["nownigel_gui_interaction_man_0_16_depth_200_face_44.1ebdb8c6.svg",97],["nownigel_gui_interaction_man_0_16_depth_200_face_45.939a00fb.svg",98],["nownigel_gui_interaction_man_0_16_depth_200_face_46.e5f57c5b.svg",99],["nownigel_gui_interaction_man_0_16_depth_200_face_47.49aafa8e.svg",100],["nownigel_gui_interaction_man_0_16_depth_200_face_48.e81b6af2.svg",101],["nownigel_gui_interaction_man_0_16_depth_200_face_49.f8020646.svg",102],["nownigel_gui_interaction_man_0_16_depth_200_face_50.953ef9af.svg",103],["nownigel_gui_interaction_man_0_16_depth_200_face_51.101e1db7.svg",104],["nownigel_gui_interaction_man_0_16_depth_200_face_52.b37199ec.svg",105],["nownigel_gui_interaction_man_0_16_depth_200_face_53.b1ae6b12.svg",106],["nownigel_gui_interaction_man_0_16_depth_200_face_54.9a53a550.svg",108],["nownigel_gui_interaction_man_0_16_depth_200_face_55.c3a14fb7.svg",109],["nownigel_gui_interaction_man_0_16_depth_200_face_56.947d2b6f.svg",107],["nownigel_gui_interaction_man_0_16_depth_200_face_57.bde2d4f0.svg",110],["nownigel_gui_interaction_man_0_16_depth_200_face_58.71fab513.svg",111],["nownigel_gui_interaction_man_0_16_depth_200_face_59.377cf2d5.svg",112],["nownigel_gui_interaction_man_0_16_depth_200_face_60.31d532d7.svg",113],["nownigel_gui_interaction_man_0_16_depth_200_face_61.f7a6490c.svg",116],["nownigel_gui_interaction_man_0_16_depth_200_face_62.ffb1cca9.svg",114],["nownigel_gui_interaction_man_0_16_depth_200_face_63.88b7bf32.svg",115],["nownigel_gui_interaction_man_0_16_depth_200_face_64.6c086313.svg",117],["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_1.eb321389.svg",122],["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_2.bbac7e85.svg",118],["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_3.b480334f.svg",121],["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_4.c747b11b.svg",119],["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_1.83e4ae6c.svg",120],["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_2.00159161.svg",125],["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_3.a37e6cf6.svg",123],["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_4.b052a6b6.svg",124],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right.d9aeb3a0.svg",153],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_1.82e7399e.svg",151],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_2.c76f4b4d.svg",152],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_3.ad8230d2.svg",154],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_4.8420f409.svg",155],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left.19d55f54.svg",156],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_1.72038291.svg",158],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_2.afea0ef2.svg",157],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_3.4643eca9.svg",159],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_4.cb6f7679.svg",160],["nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_1.740343e7.svg",161],["nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_2.9df686f0.svg",162],["nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_3.b662ec2b.svg",164],["nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_4.9f1f7cfc.svg",163],["nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_1.6a911dd2.svg",166],["nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_2.cd4e99f0.svg",167],["nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_3.8ca2cb43.svg",165],["nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_4.a7daba32.svg",168],["nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_1.407484f1.svg",171],["nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_2.cd399212.svg",170],["nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_3.af5de013.svg",169],["nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_4.066a017f.svg",172],["nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_1.2e81dccc.svg",173],["nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_2.67c027c0.svg",177],["nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_3.1636e5c5.svg",174],["nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_4.9c77ca79.svg",175],["nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_1.5fbf9c66.svg",176],["nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_2.85059f24.svg",179],["nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_3.d8b42a08.svg",181],["nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_4.38e54b8d.svg",178],["nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_1.2893b4d5.svg",180],["nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_2.66dea4d2.svg",182],["nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_3.68cd71c4.svg",184],["nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_4.9fe90dca.svg",183],["nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_1.206918cd.svg",185],["nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_2.4d090d61.svg",186],["nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_3.76f256a1.svg",188],["nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_4.bb296807.svg",187],["nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_1.c5385ac9.svg",192],["nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_2.82860643.svg",191],["nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_3.9fc033b4.svg",189],["nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_4.bd2ce721.svg",190],["nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_1.163c8bed.svg",194],["nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_2.1620e378.svg",193],["nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_3.879eedca.svg",197],["nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_4.8d915119.svg",195],["nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_1.94d80ff1.svg",196],["nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_2.b5a556f6.svg",199],["nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_3.f2988bc0.svg",198],["nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_4.d5b1d58a.svg",200],["nownigel_gui_interaction_hands_0_0_depth_200_1.a7d2a646.svg",201],["nownigel_gui_interaction_hands_0_0_depth_200_2.60e4bb6d.svg",202],["nownigel_gui_interaction_hands_0_0_depth_200_3.127ef4d5.svg",204],["nownigel_gui_interaction_hands_0_0_depth_200_4.bb3d567c.svg",203],["nownigel_gui_interaction_hands_0_0_depth_200_5.28ea0be5.svg",205],["nownigel_gui_interaction_hands_0_0_depth_200_6.6225ae98.svg",206],["nownigel_gui_interaction_hands_0_0_depth_200_7.986cade0.svg",207],["nownigel_gui_interaction_hands_0_0_depth_200_8.2b0c9612.svg",209],["nownigel_gui_interaction_hands_0_0_depth_200_9.8a778f27.svg",208],["nownigel_gui_interaction_hands_0_0_depth_200_10.67227946.svg",210],["nownigel_gui_interaction_hands_0_0_depth_200_11.4a29aed2.svg",211],["nownigel_gui_interaction_hands_0_0_depth_200_12.d68608b5.svg",212],["nownigel_gui_interaction_hands_0_0_depth_200_13.003f3544.svg",569],["nownigel_gui_interaction_hands_0_0_depth_200_14.358d0bdb.svg",570],["nownigel_gui_interaction_hands_0_0_depth_200_15.9b2f9c4b.svg",571],["nownigel_gui_interaction_hands_0_0_depth_200_16.dfe7f1b9.svg",575],["nownigel_gui_interaction_hands_0_0_depth_200_17.94fe2df4.svg",572],["nownigel_gui_interaction_hands_0_0_depth_200_18.6f2a08c8.svg",573],["nownigel_gui_interaction_hands_0_0_depth_200_19.7716860d.svg",580],["nownigel_gui_interaction_hands_0_0_depth_200_20.920280f8.svg",574],["nownigel_gui_interaction_hands_0_0_depth_200_21.8a4ed287.svg",579],["nownigel_gui_interaction_hands_0_0_depth_200_22.9fe2876c.svg",576],["nownigel_gui_interaction_hands_0_0_depth_200_23.1f6e2c71.svg",577],["nownigel_gui_interaction_hands_0_0_depth_200_24.99a4f086.svg",578],["painter.5654c5d7.svg",554],["painter_1.f927d5e4.svg",559],["white_wall.55959065.svg",545],["egg_wall.537ce7ea.svg",551],["wall_1.ad428be1.svg",535],["wall_2.dc691bb5.svg",536],["wall_3.68ec3a6a.svg",537],["wall_4.b8aeb95c.svg",538],["wall_5.cbc89c8a.svg",539],["wall_6.04702453.svg",540],["wall_7.54a5aa08.svg",541],["wall_8.18bc9d50.svg",542],["gui_paint_hand_1.0f526dd8.svg",587],["gui_paint_hand_2.1191ac1a.svg",588],["gui_paint_hand_3.43e60db0.svg",586],["gui_paint_hand_4.298cdf3a.svg",589],["gui_paint_hand_5.d85a5b91.svg",591],["gui_paint_hand_6.67a5374f.svg",590],["gui_paint_hand_7.124d5e5f.svg",593],["gui_paint_hand_8.c3d489db.svg",592],["gui_paint_hand_9.0b1793dc.svg",594],["gui_paint_hand_10.9c316b5e.svg",597],["gui_paint_hand_11.7f278d26.svg",595],["gui_paint_hand_12.2d6bf600.svg",596],["gui_paint_hand_13.18378a7d.svg",598],["gui_paint_hand_14.69c0aed6.svg",599],["gui_paint_hand_15.6acb925c.svg",600],["gui_paint_hand_16.0a8b052f.svg",601],["gui_paint_hand_17.b7f799b5.svg",602],["gui_paint_hand_18.a63c8599.svg",604],["gui_paint_hand_19.1534730c.svg",605],["gui_paint_hand_20.d71a0feb.svg",606],["gui_paint_hand_21.03110ce5.svg",607],["gui_paint_hand_22.ff599353.svg",608],["gui_paint_hand_23.c51ec411.svg",609],["gui_paint_hand_24.faa67cd4.svg",610],["gui_paint_1.0d3cab5b.svg",214],["gui_paint_2.c690757c.svg",213],["gui_paint_3.d5707f42.svg",215],["gui_paint_4.9158f493.svg",216],["gui_paint_5.ab750f0d.svg",217],["gui_paint_6.4b0fead1.svg",219],["gui_paint_7.8c711b8e.svg",218],["gui_paint_8.89905dfd.svg",220],["gui_paint_9.3de4b28d.svg",221],["gui_paint_10.b7030b48.svg",567],["gui_paint_11.e2c57bd2.svg",566],["gui_paint_12.7603f7fd.svg",565],["particles_health.8f25696f.svg",222],["stage_grid.e64b9967.svg",521],["stage_perspective.f9e7b2e3.svg",527],["stage_workspace.bd7c26c6.svg",224],["stage_floor.c1e984fa.svg",223],["stage_door_closed.51f683cc.svg",225],["stage_door_opened.c739b875.svg",226],["stage_wall.1fabfec0.svg",227],["stage_lines.32339579.svg",228],["stage_lines_1.7245c668.svg",707],["stage_lines_2.ee2ba8cb.svg",708],["stage_lines_3.eac17043.svg",709],["stage_lines_wall.67a16e61.svg",700],["gui_paint_top.3d01f690.svg",126],["gui_paint_bottom.ce20cb3d.svg",127],["gui_paint_right.d1bb9833.svg",128],["gui_paint_left.e4a1270e.svg",129],["face_nigel.974b1ddb.svg",229],["face_maisie.148a681f.svg",230],["piece_desk_mg.958a3cda.svg",231],["piece_desk_bg.bcdf4c88.svg",232],["pieces_office_shoplight_on_bg.13f11e07.svg",234],["pieces_office_shoplight_off_bg.1c43ff82.svg",233],["pieces_office_shoplight_off.7f3da795.svg",235],["pieces_office_shoplight_on.649090c2.svg",236],["gui_cursor_handdrawn.b8084bd9.svg",4],["gui_cursor_handdrawn_active.77bf8bd3.svg",5]]);
},{}]},{},[710,0], null)