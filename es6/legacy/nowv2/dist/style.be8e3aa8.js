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
})({227:[function(require,module,exports) {
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
},{}],226:[function(require,module,exports) {
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
},{"./bundle-url":227}],2:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./assets/fonts/Amatic-SC/AmaticSC-Regular.ttf":121,"./assets/fonts/Amatic-SC/amaticsc-regular-webfont.woff2":122,"./assets/fonts/Amatic-SC/amaticsc-regular-webfont.woff":123,"./assets/gui/gui_button_signin.svg":6,"./assets/gui/gui_button_signup.svg":7,"./assets/gui/gui_button_signout.svg":8,"./assets/gui/nownigel_gui_logo_type.svg":9,"./assets/gui/nownigel_gui_logo_type_1.svg":10,"./assets/gui/nownigel_gui_logo_type_2.svg":12,"./assets/gui/nownigel_gui_logo_type_3.svg":11,"./assets/gui/nownigel_gui_logo_type_4.svg":13,"./assets/gui/nownigel_gui_logo_mark.svg":14,"./assets/gui/hands.svg":15,"./assets/gui/circle.svg":17,"./assets/gui/circle_hover.svg":16,"./assets/gui/gui_logo.svg":18,"./assets/gui/gui_move_note.svg":19,"./assets/gui/gui_logo_navs.svg":20,"./assets/gui/gui_logo_navs_hover.svg":22,"./assets/gui/about_type.svg":21,"./assets/gui/gui_button_enter.svg":23,"./assets/gui/gui_button_start.svg":24,"./assets/gui/gui_button_learn.svg":25,"./assets/gui/gui_or.svg":27,"./assets/gui/gui_close.svg":26,"./assets/gui/gui_close_hover.svg":28,"./assets/gui/gui_dash.svg":29,"./assets/gui/gui_search.svg":30,"./assets/gui/gui_arrow_left.svg":32,"./assets/gui/gui_arrow_top_left.svg":31,"./assets/gui/gui_arrow_bottom_left.svg":33,"./assets/gui/gui_arrow_top.svg":34,"./assets/gui/gui_arrow_bottom.svg":35,"./assets/gui/gui_arrow_right.svg":37,"./assets/gui/gui_arrow_top_right.svg":36,"./assets/gui/gui_arrow_bottom_right.svg":38,"./assets/gui/accent_noise_1.svg":39,"./assets/gui/accent_noise_2.svg":40,"./assets/gui/accent_noise_3.svg":42,"./assets/gui/accent_noise_4.svg":41,"./assets/effect/effect_vignette.svg":43,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_1.svg":124,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_2.svg":125,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_3.svg":127,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_4.svg":126,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_5.svg":128,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_6.svg":129,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_7.svg":130,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_8.svg":132,"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_9.svg":131,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_1.svg":133,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_2.svg":134,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_3.svg":135,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_4.svg":137,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_5.svg":136,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_6.svg":138,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_7.svg":139,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_8.svg":140,"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_9.svg":141,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0.svg":44,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_1.svg":45,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_2.svg":46,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_3.svg":47,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_4.svg":48,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_5.svg":49,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_6.svg":50,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_7.svg":51,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_8.svg":52,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_9.svg":53,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_10.svg":54,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_11.svg":55,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_12.svg":56,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_13.svg":57,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_14.svg":58,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_15.svg":59,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_16.svg":60,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_17.svg":61,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_18.svg":62,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_19.svg":63,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_20.svg":64,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_21.svg":65,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_22.svg":66,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_23.svg":67,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_24.svg":68,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_25.svg":69,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_26.svg":70,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_27.svg":71,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_28.svg":72,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_29.svg":73,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_30.svg":74,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_31.svg":75,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_32.svg":76,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_33.svg":77,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_34.svg":78,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_35.svg":79,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_36.svg":80,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_37.svg":81,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_38.svg":82,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_39.svg":83,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_40.svg":84,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_41.svg":85,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_42.svg":86,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_43.svg":87,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_44.svg":88,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_45.svg":89,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_46.svg":90,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_47.svg":91,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_48.svg":92,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_49.svg":93,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_50.svg":94,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_51.svg":95,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_52.svg":96,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_53.svg":97,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_54.svg":98,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_55.svg":99,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_56.svg":100,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_57.svg":101,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_58.svg":102,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_59.svg":103,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_60.svg":104,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_61.svg":105,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_62.svg":106,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_63.svg":107,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_64.svg":108,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_1.svg":109,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_2.svg":110,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_3.svg":111,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_4.svg":112,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_1.svg":113,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_2.svg":114,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_3.svg":115,"./assets/frames/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_4.svg":116,"./assets/frames/sit_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right.svg":142,"./assets/frames/sit_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_1.svg":143,"./assets/frames/sit_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_2.svg":144,"./assets/frames/sit_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_3.svg":145,"./assets/frames/sit_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_4.svg":146,"./assets/frames/sit_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left.svg":147,"./assets/frames/sit_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_1.svg":148,"./assets/frames/sit_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_2.svg":149,"./assets/frames/sit_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_3.svg":150,"./assets/frames/sit_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_4.svg":151,"./assets/frames/prone_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_1.svg":152,"./assets/frames/prone_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_2.svg":153,"./assets/frames/prone_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_3.svg":154,"./assets/frames/prone_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_4.svg":155,"./assets/frames/prone_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_1.svg":156,"./assets/frames/prone_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_2.svg":157,"./assets/frames/prone_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_3.svg":158,"./assets/frames/prone_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_4.svg":159,"./assets/frames/punch_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_1.svg":160,"./assets/frames/punch_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_2.svg":161,"./assets/frames/punch_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_3.svg":162,"./assets/frames/punch_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_4.svg":163,"./assets/frames/punch_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_1.svg":164,"./assets/frames/punch_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_2.svg":165,"./assets/frames/punch_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_3.svg":166,"./assets/frames/punch_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_4.svg":167,"./assets/frames/jump_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_1.svg":168,"./assets/frames/jump_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_2.svg":169,"./assets/frames/jump_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_3.svg":170,"./assets/frames/jump_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_4.svg":171,"./assets/frames/jump_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_1.svg":172,"./assets/frames/jump_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_2.svg":173,"./assets/frames/jump_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_3.svg":174,"./assets/frames/jump_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_4.svg":175,"./assets/frames/float_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_1.svg":176,"./assets/frames/float_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_2.svg":177,"./assets/frames/float_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_3.svg":178,"./assets/frames/float_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_4.svg":179,"./assets/frames/float_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_1.svg":180,"./assets/frames/float_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_2.svg":181,"./assets/frames/float_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_3.svg":182,"./assets/frames/float_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_4.svg":183,"./assets/frames/bend_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_1.svg":184,"./assets/frames/bend_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_2.svg":185,"./assets/frames/bend_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_3.svg":186,"./assets/frames/bend_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_4.svg":187,"./assets/frames/bend_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_1.svg":188,"./assets/frames/bend_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_2.svg":189,"./assets/frames/bend_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_3.svg":190,"./assets/frames/bend_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_4.svg":191,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_1.svg":192,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_2.svg":193,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_3.svg":194,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_4.svg":195,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_5.svg":196,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_6.svg":197,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_7.svg":198,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_8.svg":199,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_9.svg":200,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_10.svg":201,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_11.svg":202,"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_12.svg":203,"./assets/frames/loading/gui_paint_1.svg":204,"./assets/frames/loading/gui_paint_2.svg":206,"./assets/frames/loading/gui_paint_3.svg":205,"./assets/frames/loading/gui_paint_4.svg":208,"./assets/frames/loading/gui_paint_5.svg":207,"./assets/frames/loading/gui_paint_6.svg":209,"./assets/frames/loading/gui_paint_7.svg":210,"./assets/frames/loading/gui_paint_8.svg":211,"./assets/frames/loading/gui_paint_9.svg":212,"./assets/pieces/particles/particles_health.svg":213,"./assets/pieces/stage/stage_workspace.svg":214,"./assets/pieces/stage/stage_floor.svg":215,"./assets/pieces/stage/stage_door_closed.svg":216,"./assets/pieces/stage/stage_door_opened.svg":217,"./assets/pieces/stage/stage_wall.svg":218,"./assets/pieces/stage/stage_lines.svg":219,"./assets/gui/gui_paint_top.svg":117,"./assets/gui/gui_paint_bottom.svg":118,"./assets/gui/gui_paint_right.svg":119,"./assets/gui/gui_paint_left.svg":120,"./assets/pieces/furniture/piece_desk_mg.svg":220,"./assets/pieces/furniture/piece_desk_bg.svg":221,"./assets/pieces/furniture/pieces_office_shoplight_on_bg.svg":222,"./assets/pieces/furniture/pieces_office_shoplight_off_bg.svg":223,"./assets/pieces/furniture/pieces_office_shoplight_off.svg":224,"./assets/pieces/furniture/pieces_office_shoplight_on.svg":225,"./assets/gui_cursor_handdrawn.svg":4,"./assets/gui_cursor_handdrawn_active.svg":5,"_css_loader":226}],236:[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '55875' + '/');
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
},{}],238:[function(require,module,exports) {
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
},{"./bundle-url":227}],0:[function(require,module,exports) {
var b=require(238);b.load([["AmaticSC-Regular.2aacce55.ttf",121],["amaticsc-regular-webfont.f1ad37f2.woff2",122],["amaticsc-regular-webfont.8026775f.woff",123],["gui_button_signin.f1f4850f.svg",6],["gui_button_signup.39b55f9a.svg",7],["gui_button_signout.e0b72198.svg",8],["nownigel_gui_logo_type.d01c5fce.svg",9],["nownigel_gui_logo_type_1.53bf2f1d.svg",10],["nownigel_gui_logo_type_2.2c5703c0.svg",12],["nownigel_gui_logo_type_3.ae074d98.svg",11],["nownigel_gui_logo_type_4.2efb190b.svg",13],["nownigel_gui_logo_mark.a4349b2a.svg",14],["hands.90fc2cf5.svg",15],["circle.1e401b70.svg",17],["circle_hover.d6e72b7b.svg",16],["gui_logo.46404a27.svg",18],["gui_move_note.0e641229.svg",19],["gui_logo_navs.d06d4fa7.svg",20],["gui_logo_navs_hover.109c9ad5.svg",22],["about_type.228fe0b9.svg",21],["gui_button_enter.7a68fbbb.svg",23],["gui_button_start.dc8973f7.svg",24],["gui_button_learn.339c5e9f.svg",25],["gui_or.60a78a11.svg",27],["gui_close.8b2cc02c.svg",26],["gui_close_hover.3517b02d.svg",28],["gui_dash.7437af15.svg",29],["gui_search.2da5f8db.svg",30],["gui_arrow_left.7c26c412.svg",32],["gui_arrow_top_left.e184fc62.svg",31],["gui_arrow_bottom_left.5e599f74.svg",33],["gui_arrow_top.341f9da7.svg",34],["gui_arrow_bottom.c961805a.svg",35],["gui_arrow_right.141be5a8.svg",37],["gui_arrow_top_right.f41fe8db.svg",36],["gui_arrow_bottom_right.fe04f92c.svg",38],["accent_noise_1.592a120b.svg",39],["accent_noise_2.0e37fd44.svg",40],["accent_noise_3.1bf2c19f.svg",42],["accent_noise_4.8d707bbf.svg",41],["effect_vignette.26d6f94b.svg",43],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_1.3ae00ce2.svg",124],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_2.b708698c.svg",125],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_3.1ba788e0.svg",127],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_4.09b44cf8.svg",126],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_5.eaa364cb.svg",128],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_6.827dfd07.svg",129],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_7.b4204b3c.svg",130],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_8.d2b5706a.svg",132],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_9.d24e775f.svg",131],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_1.826877e5.svg",133],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_2.31b18af7.svg",134],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_3.210003b3.svg",135],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_4.411bc6f5.svg",137],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_5.341f697e.svg",136],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_6.1bb8b852.svg",138],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_7.7813097b.svg",139],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_8.89284a0c.svg",140],["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_9.ca9c78c0.svg",141],["nownigel_gui_interaction_man_0_16_depth_200_face_0.45b68f34.svg",44],["nownigel_gui_interaction_man_0_16_depth_200_face_1.016ff3d3.svg",45],["nownigel_gui_interaction_man_0_16_depth_200_face_2.81c947af.svg",46],["nownigel_gui_interaction_man_0_16_depth_200_face_3.57c88408.svg",47],["nownigel_gui_interaction_man_0_16_depth_200_face_4.19e22b0c.svg",48],["nownigel_gui_interaction_man_0_16_depth_200_face_5.070759e0.svg",49],["nownigel_gui_interaction_man_0_16_depth_200_face_6.27376045.svg",50],["nownigel_gui_interaction_man_0_16_depth_200_face_7.e60b3293.svg",51],["nownigel_gui_interaction_man_0_16_depth_200_face_8.6bb146f5.svg",52],["nownigel_gui_interaction_man_0_16_depth_200_face_9.f97418c2.svg",53],["nownigel_gui_interaction_man_0_16_depth_200_face_10.84dab9b5.svg",54],["nownigel_gui_interaction_man_0_16_depth_200_face_11.a2291e65.svg",55],["nownigel_gui_interaction_man_0_16_depth_200_face_12.e0517f1c.svg",56],["nownigel_gui_interaction_man_0_16_depth_200_face_13.29115f6d.svg",57],["nownigel_gui_interaction_man_0_16_depth_200_face_14.3f7188dd.svg",58],["nownigel_gui_interaction_man_0_16_depth_200_face_15.b13e6abf.svg",59],["nownigel_gui_interaction_man_0_16_depth_200_face_16.9c82fedd.svg",60],["nownigel_gui_interaction_man_0_16_depth_200_face_17.51c5a89a.svg",61],["nownigel_gui_interaction_man_0_16_depth_200_face_18.75d5731a.svg",62],["nownigel_gui_interaction_man_0_16_depth_200_face_19.292e12d9.svg",63],["nownigel_gui_interaction_man_0_16_depth_200_face_20.d14397f7.svg",64],["nownigel_gui_interaction_man_0_16_depth_200_face_21.caaabb48.svg",65],["nownigel_gui_interaction_man_0_16_depth_200_face_22.bd354f5c.svg",66],["nownigel_gui_interaction_man_0_16_depth_200_face_23.527c8a83.svg",67],["nownigel_gui_interaction_man_0_16_depth_200_face_24.6c514d6d.svg",68],["nownigel_gui_interaction_man_0_16_depth_200_face_25.e8346fec.svg",69],["nownigel_gui_interaction_man_0_16_depth_200_face_26.52f8c8d3.svg",70],["nownigel_gui_interaction_man_0_16_depth_200_face_27.4393a082.svg",71],["nownigel_gui_interaction_man_0_16_depth_200_face_28.4392d73b.svg",72],["nownigel_gui_interaction_man_0_16_depth_200_face_29.1bf74992.svg",73],["nownigel_gui_interaction_man_0_16_depth_200_face_30.5638714e.svg",74],["nownigel_gui_interaction_man_0_16_depth_200_face_31.7d99eec3.svg",75],["nownigel_gui_interaction_man_0_16_depth_200_face_32.5f87debc.svg",76],["nownigel_gui_interaction_man_0_16_depth_200_face_33.3a119006.svg",77],["nownigel_gui_interaction_man_0_16_depth_200_face_34.43862a83.svg",78],["nownigel_gui_interaction_man_0_16_depth_200_face_35.f68a79a9.svg",79],["nownigel_gui_interaction_man_0_16_depth_200_face_36.efc776a6.svg",80],["nownigel_gui_interaction_man_0_16_depth_200_face_37.e0d6f7d5.svg",81],["nownigel_gui_interaction_man_0_16_depth_200_face_38.ebecb5bd.svg",82],["nownigel_gui_interaction_man_0_16_depth_200_face_39.4f087078.svg",83],["nownigel_gui_interaction_man_0_16_depth_200_face_40.3d7a2431.svg",84],["nownigel_gui_interaction_man_0_16_depth_200_face_41.0ed3af55.svg",85],["nownigel_gui_interaction_man_0_16_depth_200_face_42.b203345f.svg",86],["nownigel_gui_interaction_man_0_16_depth_200_face_43.a4c46426.svg",87],["nownigel_gui_interaction_man_0_16_depth_200_face_44.1ebdb8c6.svg",88],["nownigel_gui_interaction_man_0_16_depth_200_face_45.939a00fb.svg",89],["nownigel_gui_interaction_man_0_16_depth_200_face_46.e5f57c5b.svg",90],["nownigel_gui_interaction_man_0_16_depth_200_face_47.49aafa8e.svg",91],["nownigel_gui_interaction_man_0_16_depth_200_face_48.e81b6af2.svg",92],["nownigel_gui_interaction_man_0_16_depth_200_face_49.f8020646.svg",93],["nownigel_gui_interaction_man_0_16_depth_200_face_50.953ef9af.svg",94],["nownigel_gui_interaction_man_0_16_depth_200_face_51.101e1db7.svg",95],["nownigel_gui_interaction_man_0_16_depth_200_face_52.b37199ec.svg",96],["nownigel_gui_interaction_man_0_16_depth_200_face_53.b1ae6b12.svg",97],["nownigel_gui_interaction_man_0_16_depth_200_face_54.9a53a550.svg",98],["nownigel_gui_interaction_man_0_16_depth_200_face_55.c3a14fb7.svg",99],["nownigel_gui_interaction_man_0_16_depth_200_face_56.947d2b6f.svg",100],["nownigel_gui_interaction_man_0_16_depth_200_face_57.bde2d4f0.svg",101],["nownigel_gui_interaction_man_0_16_depth_200_face_58.71fab513.svg",102],["nownigel_gui_interaction_man_0_16_depth_200_face_59.377cf2d5.svg",103],["nownigel_gui_interaction_man_0_16_depth_200_face_60.31d532d7.svg",104],["nownigel_gui_interaction_man_0_16_depth_200_face_61.f7a6490c.svg",105],["nownigel_gui_interaction_man_0_16_depth_200_face_62.ffb1cca9.svg",106],["nownigel_gui_interaction_man_0_16_depth_200_face_63.88b7bf32.svg",107],["nownigel_gui_interaction_man_0_16_depth_200_face_64.6c086313.svg",108],["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_1.eb321389.svg",109],["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_2.bbac7e85.svg",110],["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_3.b480334f.svg",111],["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_4.c747b11b.svg",112],["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_1.83e4ae6c.svg",113],["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_2.00159161.svg",114],["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_3.a37e6cf6.svg",115],["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_4.b052a6b6.svg",116],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right.d9aeb3a0.svg",142],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_1.82e7399e.svg",143],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_2.c76f4b4d.svg",144],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_3.ad8230d2.svg",145],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_right_4.8420f409.svg",146],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left.19d55f54.svg",147],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_1.72038291.svg",148],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_2.afea0ef2.svg",149],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_3.4643eca9.svg",150],["nownigel_gui_interaction_man_0_16_depth_200_face_0_sit_left_4.cb6f7679.svg",151],["nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_1.740343e7.svg",152],["nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_2.9df686f0.svg",153],["nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_3.b662ec2b.svg",154],["nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_right_4.9f1f7cfc.svg",155],["nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_1.6a911dd2.svg",156],["nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_2.cd4e99f0.svg",157],["nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_3.8ca2cb43.svg",158],["nownigel_gui_interaction_man_0_16_depth_200_face_0_prone_left_4.a7daba32.svg",159],["nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_1.407484f1.svg",160],["nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_2.cd399212.svg",161],["nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_3.af5de013.svg",162],["nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_right_4.066a017f.svg",163],["nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_1.2e81dccc.svg",164],["nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_2.67c027c0.svg",165],["nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_3.1636e5c5.svg",166],["nownigel_gui_interaction_man_0_16_depth_200_face_0_punch_left_4.9c77ca79.svg",167],["nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_1.5fbf9c66.svg",168],["nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_2.85059f24.svg",169],["nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_3.d8b42a08.svg",170],["nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_right_4.38e54b8d.svg",171],["nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_1.2893b4d5.svg",172],["nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_2.66dea4d2.svg",173],["nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_3.68cd71c4.svg",174],["nownigel_gui_interaction_man_0_16_depth_200_face_0_jump_left_4.9fe90dca.svg",175],["nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_1.206918cd.svg",176],["nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_2.4d090d61.svg",177],["nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_3.76f256a1.svg",178],["nownigel_gui_interaction_man_0_16_depth_200_face_0_float_right_4.bb296807.svg",179],["nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_1.c5385ac9.svg",180],["nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_2.82860643.svg",181],["nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_3.9fc033b4.svg",182],["nownigel_gui_interaction_man_0_16_depth_200_face_0_float_left_4.bd2ce721.svg",183],["nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_1.163c8bed.svg",184],["nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_2.1620e378.svg",185],["nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_3.879eedca.svg",186],["nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_right_4.8d915119.svg",187],["nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_1.94d80ff1.svg",188],["nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_2.b5a556f6.svg",189],["nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_3.f2988bc0.svg",190],["nownigel_gui_interaction_man_0_16_depth_200_face_0_bend_left_4.d5b1d58a.svg",191],["nownigel_gui_interaction_hands_0_0_depth_200_1.a7d2a646.svg",192],["nownigel_gui_interaction_hands_0_0_depth_200_2.60e4bb6d.svg",193],["nownigel_gui_interaction_hands_0_0_depth_200_3.127ef4d5.svg",194],["nownigel_gui_interaction_hands_0_0_depth_200_4.bb3d567c.svg",195],["nownigel_gui_interaction_hands_0_0_depth_200_5.28ea0be5.svg",196],["nownigel_gui_interaction_hands_0_0_depth_200_6.6225ae98.svg",197],["nownigel_gui_interaction_hands_0_0_depth_200_7.986cade0.svg",198],["nownigel_gui_interaction_hands_0_0_depth_200_8.2b0c9612.svg",199],["nownigel_gui_interaction_hands_0_0_depth_200_9.8a778f27.svg",200],["nownigel_gui_interaction_hands_0_0_depth_200_10.67227946.svg",201],["nownigel_gui_interaction_hands_0_0_depth_200_11.4a29aed2.svg",202],["nownigel_gui_interaction_hands_0_0_depth_200_12.d68608b5.svg",203],["gui_paint_1.0d3cab5b.svg",204],["gui_paint_2.c690757c.svg",206],["gui_paint_3.d5707f42.svg",205],["gui_paint_4.9158f493.svg",208],["gui_paint_5.ab750f0d.svg",207],["gui_paint_6.4b0fead1.svg",209],["gui_paint_7.8c711b8e.svg",210],["gui_paint_8.89905dfd.svg",211],["gui_paint_9.3de4b28d.svg",212],["particles_health.8f25696f.svg",213],["stage_workspace.bd7c26c6.svg",214],["stage_floor.c1e984fa.svg",215],["stage_door_closed.51f683cc.svg",216],["stage_door_opened.c739b875.svg",217],["stage_wall.1fabfec0.svg",218],["stage_lines.32339579.svg",219],["gui_paint_top.3d01f690.svg",117],["gui_paint_bottom.ce20cb3d.svg",118],["gui_paint_right.d1bb9833.svg",119],["gui_paint_left.e4a1270e.svg",120],["piece_desk_mg.958a3cda.svg",220],["piece_desk_bg.bcdf4c88.svg",221],["pieces_office_shoplight_on_bg.13f11e07.svg",222],["pieces_office_shoplight_off_bg.1c43ff82.svg",223],["pieces_office_shoplight_off.7f3da795.svg",224],["pieces_office_shoplight_on.649090c2.svg",225],["gui_cursor_handdrawn.b8084bd9.svg",4],["gui_cursor_handdrawn_active.77bf8bd3.svg",5]]);
},{}]},{},[236,0], null)