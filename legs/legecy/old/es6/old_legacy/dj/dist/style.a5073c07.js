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
})({405:[function(require,module,exports) {
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
},{}],404:[function(require,module,exports) {
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
},{"./bundle-url":405}],2:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./assets/fonts/Amatic-SC/AmaticSC-Regular.ttf":384,"./assets/fonts/Amatic-SC/amaticsc-regular-webfont.woff2":386,"./assets/fonts/Amatic-SC/amaticsc-regular-webfont.woff":385,"./assets/photos/dj1.JPG":4,"./assets/photos/dj2.JPG":85,"./assets/photos/dj3.JPG":5,"./assets/photos/dj4.JPG":6,"./assets/photos/dj5.JPG":7,"./assets/photos/dj6.JPG":8,"./assets/photos/dj7.JPG":9,"./assets/photos/dj8.JPG":10,"./assets/photos/person1.jpg":11,"./assets/photos/person2.jpg":12,"./assets/photos/person3.jpg":13,"./assets/photos/person4.jpg":16,"./assets/photos/person5.jpg":14,"./assets/photos/person6.jpg":15,"./assets/photos/person7.jpg":17,"./assets/photos/person8.jpg":18,"./assets/photos/person9.jpg":19,"./assets/photos/person10.jpg":20,"./assets/photos/person11.jpg":21,"./assets/photos/person12.jpg":23,"./assets/photos/person13.jpg":22,"./assets/photos/person14.jpg":24,"./assets/photos/person15.jpg":25,"./assets/photos/person16.jpg":27,"./assets/photos/person17.jpg":26,"./assets/photos/person18.jpg":28,"./assets/photos/person19.jpg":29,"./assets/photos/person20.jpg":30,"./assets/photos/person21.jpg":31,"./assets/photos/person22.jpg":32,"./assets/photos/person23.jpg":33,"./assets/photos/person24.jpg":34,"./assets/photos/person25.jpg":36,"./assets/photos/person26.jpg":35,"./assets/photos/person27.jpg":37,"./assets/photos/person28.jpg":38,"./assets/photos/person29.jpg":39,"./assets/photos/person30.jpg":40,"./assets/photos/person31.jpg":42,"./assets/photos/person32.jpg":41,"./assets/photos/person33.jpg":43,"./assets/photos/person34.jpg":45,"./assets/photos/person35.jpg":44,"./assets/photos/person36.jpg":46,"./assets/photos/person37.jpg":48,"./assets/photos/person38.jpg":47,"./assets/photos/person39.jpg":49,"./assets/photos/person40.jpg":52,"./assets/photos/person41.jpg":50,"./assets/photos/person42.jpg":51,"./assets/photos/person43.jpg":53,"./assets/photos/person44.jpg":54,"./assets/photos/person45.jpg":55,"./assets/photos/person46.jpg":56,"./assets/photos/person47.jpg":58,"./assets/photos/person48.jpg":57,"./assets/photos/person49.jpg":61,"./assets/photos/person50.jpg":59,"./assets/photos/person51.jpg":60,"./assets/photos/person52.jpg":62,"./assets/photos/person53.jpg":63,"./assets/photos/person54.jpg":64,"./assets/photos/person55.jpg":65,"./assets/photos/person56.jpg":66,"./assets/photos/person57.jpg":67,"./assets/photos/person58.jpg":69,"./assets/photos/person59.jpg":68,"./assets/photos/person60.jpg":70,"./assets/photos/person61.jpg":71,"./assets/photos/person62.jpg":72,"./assets/photos/person63.jpg":73,"./assets/photos/person64.jpg":74,"./assets/photos/person65.jpg":75,"./assets/photos/person66.jpg":76,"./assets/photos/person67.jpg":77,"./assets/photos/person68.jpg":78,"./assets/photos/person69.jpg":79,"./assets/svg/pageend2-9bottomright.svg":80,"./assets/svg/pageend2-9bottomleft.svg":81,"./assets/svg/pageend2-9topright.svg":82,"./assets/svg/pageend2-9topleft.svg":83,"./assets/gui/gui_map_ga.svg":84,"./assets/gui/gui_loading_machine_1.svg":93,"./assets/gui/gui_loading_machine_2.svg":86,"./assets/gui/gui_loading_machine_3.svg":87,"./assets/gui/gui_loading_machine_4.svg":88,"./assets/gui/gui_intro_machine_1.svg":90,"./assets/gui/gui_intro_machine_2.svg":89,"./assets/gui/gui_intro_machine_3.svg":91,"./assets/gui/gui_intro_machine_4.svg":92,"./assets/gui/gui_intro_machine_5.svg":95,"./assets/gui/gui_intro_machine_6.svg":94,"./assets/gui/gui_intro_machine_7.svg":96,"./assets/gui/gui_intro_machine_8.svg":97,"./assets/gui/gui_bg_corner_top_left.svg":98,"./assets/gui/gui_qr.svg":99,"./assets/gui/gui_qr_icon.svg":100,"./assets/gui/search.svg":101,"./assets/gui/create.svg":102,"./assets/gui/gui_paint_1.svg":104,"./assets/gui/gui_paint_2.svg":103,"./assets/gui/gui_paint_3.svg":106,"./assets/gui/gui_paint_4.svg":105,"./assets/gui/gui_paint_5.svg":107,"./assets/gui/gui_paint_6.svg":108,"./assets/gui/gui_paint_7.svg":109,"./assets/gui/gui_paint_8.svg":110,"./assets/gui/gui_machines.svg":111,"./assets/gui/nownigel_gui_logo_combo.svg":112,"./assets/gui/nownigel_gui_logo_mark.svg":113,"./assets/gui/nownigel_gui_logo_mark_only.svg":114,"./assets/gui/nownigel_gui_logo_buttons.svg":115,"./assets/gui/nownigel_gui_logo_type.svg":116,"./assets/gui/nownigel_gui_logo_type_light.svg":117,"./assets/gui/gui_logo_type_light.svg":118,"./assets/gui/gui_logo_type_light_1.svg":119,"./assets/gui/gui_logo_type_light_2.svg":120,"./assets/gui/gui_logo_type_light_3.svg":121,"./assets/gui/gui_logo_type_light_4.svg":122,"./assets/gui/gui_logo_type_light_5.svg":123,"./assets/gui/gui_logo_type_light_6.svg":124,"./assets/gui/gui_logo_type_light_7.svg":125,"./assets/gui/gui_logo_type_light_8.svg":126,"./assets/gui/gui_audio.svg":127,"./assets/gui/gui_line_top_left.svg":130,"./assets/gui/gui_line_bottom_left.svg":128,"./assets/gui/gui_line_bottom_right.svg":129,"./assets/gui/gui_line_top_right.svg":132,"./assets/gui/gui_audio_on.svg":131,"./assets/gui/gui_audio_off.svg":136,"./assets/gui/gui_logo_links.svg":133,"./assets/gui/gui_logo_words.svg":134,"./assets/gui/location.svg":135,"./assets/gui/dj_body_1.svg":137,"./assets/gui/dj_body_2.svg":138,"./assets/gui/imac.svg":139,"./assets/gui/camera.svg":140,"./assets/gui/gui_logo_navs.svg":141,"./assets/gui/gui_logo_socials.svg":143,"./assets/gui/gui_logo_social_instagram.svg":142,"./assets/gui/gui_logo_social_twitch.svg":144,"./assets/gui/gui_logo_social_facebook.svg":148,"./assets/gui/gui_logo_social_youtube.svg":146,"./assets/gui/gui_logo_social_twitter.svg":145,"./assets/gui/dj_gui_interaction_body_1.svg":147,"./assets/gui/dj_gui_interaction_body_33.svg":149,"./assets/gui/dj_gui_interaction_body_2.svg":151,"./assets/gui/dj_gui_interaction_body_3.svg":150,"./assets/gui/dj_gui_interaction_body_4.svg":153,"./assets/gui/dj_gui_interaction_body_5.svg":152,"./assets/gui/dj_gui_interaction_body_6.svg":154,"./assets/gui/dj_gui_interaction_body_7.svg":155,"./assets/gui/dj_gui_interaction_body_8.svg":158,"./assets/gui/dj_gui_interaction_body_9.svg":156,"./assets/gui/nownigel_gui_interaction_portfolio.svg":157,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200.svg":159,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_left.svg":160,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_right.svg":161,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_1.svg":162,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_2.svg":163,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_3.svg":165,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_4.svg":164,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_5.svg":166,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_6.svg":168,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_7.svg":167,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_8.svg":169,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_9.svg":236,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_10.svg":171,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_11.svg":170,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_12.svg":172,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_25.svg":173,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_50.svg":174,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_100.svg":175,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200.svg":177,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_0.svg":176,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_1.svg":178,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_2.svg":180,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_3.svg":179,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_4.svg":181,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_5.svg":182,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_6.svg":183,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_7.svg":184,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_8.svg":186,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_9.svg":185,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_10.svg":187,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_11.svg":188,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_12.svg":189,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_13.svg":190,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_14.svg":191,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_15.svg":193,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_16.svg":192,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_17.svg":194,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_18.svg":195,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_19.svg":196,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_20.svg":197,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_21.svg":199,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_22.svg":198,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_23.svg":200,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_24.svg":201,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_25.svg":202,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_26.svg":203,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_27.svg":204,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_28.svg":205,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_29.svg":206,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_30.svg":207,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_31.svg":208,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_32.svg":209,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_33.svg":210,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_34.svg":211,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_35.svg":212,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_36.svg":213,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_37.svg":214,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_38.svg":215,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_39.svg":216,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_40.svg":217,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_41.svg":218,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_42.svg":219,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_43.svg":220,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_44.svg":221,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_45.svg":222,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_46.svg":223,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_47.svg":224,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_48.svg":225,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_49.svg":226,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_50.svg":227,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_51.svg":228,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_52.svg":229,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_53.svg":230,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_54.svg":231,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_55.svg":232,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_56.svg":233,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_57.svg":234,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_58.svg":235,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_59.svg":237,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_60.svg":238,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_61.svg":239,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_62.svg":240,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_63.svg":241,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_64.svg":242,"./assets/gui/gui_interaction_man_0_0_depth_200.svg":243,"./assets/gui/gui_interaction_man_0_0_depth_200_phungi.svg":244,"./assets/gui/gui_paint_corner_center_1.svg":245,"./assets/gui/gui_paint_corner_center_2.svg":246,"./assets/gui/gui_paint_corner_center_3.svg":247,"./assets/gui/gui_paint_corner_bottom_left.svg":248,"./assets/gui/gui_paint_corner_bottom_right.svg":249,"./assets/gui/gui_paint_corner_top_left.svg":250,"./assets/gui/gui_paint_corner_top_right.svg":251,"./assets/gui/gui_corner_top.svg":252,"./assets/gui/gui_corner_bottom.svg":253,"./assets/gui/gui_corner_top_left.svg":254,"./assets/gui/gui_corner_top_right.svg":255,"./assets/gui/gui_corner_bottom_left.svg":256,"./assets/gui/gui_corner_bottom_right.svg":257,"./assets/gui/load_bar_1.svg":258,"./assets/gui/load_bar_2.svg":260,"./assets/gui/load_bar_3.svg":261,"./assets/gui/load_bar_4.svg":259,"./assets/gui/load_bar_5.svg":262,"./assets/gui/page_bottom_waves_1.svg":263,"./assets/gui/page_bottom_waves_2.svg":264,"./assets/gui/page_bottom_waves_3.svg":265,"./assets/gui/page_bottom_waves_4.svg":266,"./assets/gui/gui_logo_bubble.svg":267,"./assets/gui/gui_button_contact.svg":268,"./assets/gui/gui_button_hire.svg":269,"./assets/gui/gui_button_hire_2.svg":270,"./assets/gui/button_note.svg":271,"./assets/gui/gui_since.svg":272,"./assets/gui/move_note.svg":273,"./assets/gui/container_8.svg":274,"./assets/gui/container_9.svg":276,"./assets/gui/circle.svg":275,"./assets/gui/gui_i.svg":296,"./assets/gui/gui_close.svg":277,"./assets/gui/gui_circle.svg":278,"./assets/gui/gui_menu.svg":279,"./assets/gui/gui_scroll.svg":280,"./assets/gui/gui_loading_1.svg":281,"./assets/gui/gui_loading_2.svg":282,"./assets/gui/gui_loading_3.svg":283,"./assets/gui/gui_loading_4.svg":284,"./assets/gui/gui_loading_5.svg":285,"./assets/gui/gui_loading_6.svg":286,"./assets/gui/gui_loading_7.svg":287,"./assets/gui/dj_gui_logo.svg":288,"./assets/gui/dj_gui_logo_1.svg":289,"./assets/gui/dj_gui_logo_2.svg":290,"./assets/gui/dj_gui_logo_3.svg":291,"./assets/gui/dj_gui_logo_4.svg":292,"./assets/gui/gui_logo_knewest.svg":293,"./assets/gui/gui_logo_phugazi.svg":294,"./assets/gui/gui_logo_coffee.svg":295,"./assets/gui/gui_logo_fungi.svg":298,"./assets/gui/gui_logo_fish.svg":297,"./assets/gui/gui_logo_fly.svg":299,"./assets/gui/gui_logo_maisiemaybe.svg":300,"./assets/gui/gui_logo_colorleague.svg":301,"./assets/gui/gui_arrow_left.svg":302,"./assets/gui/gui_arrow_top_left.svg":303,"./assets/gui/gui_arrow_down_left.svg":305,"./assets/gui/gui_arrow_top.svg":304,"./assets/gui/gui_arrow_down.svg":306,"./assets/gui/gui_arrow_right.svg":309,"./assets/gui/gui_arrow_top_right.svg":307,"./assets/gui/gui_arrow_down_right.svg":308,"./assets/gui/gui_logo_combo.svg":310,"./assets/gui/gui_logo_combo_layers.svg":312,"./assets/gui/gui_key.svg":311,"./assets/gui/gui_keyhole.svg":313,"./assets/grid/grid_cross.svg":314,"./assets/grid/grid_depth.svg":316,"./assets/grid/grid_depth_90.svg":315,"./assets/grid/grid_depth_180.svg":318,"./assets/grid/grid_depth_270.svg":317,"./assets/grid/grid_depth_360.svg":319,"./assets/grid/grid_depth_450.svg":320,"./assets/grid/grid_depth_540.svg":321,"./assets/grid/grid_depth_630.svg":322,"./assets/grid/grid_depth_720.svg":325,"./assets/grid/grid_depth_90_floor.svg":323,"./assets/grid/grid_depth_180_floor.svg":324,"./assets/grid/grid_depth_270_floor.svg":326,"./assets/grid/grid_depth_360_floor.svg":327,"./assets/grid/grid_depth_450_floor.svg":328,"./assets/grid/grid_depth_540_floor.svg":329,"./assets/grid/grid_depth_630_floor.svg":330,"./assets/grid/grid_depth_720_floor.svg":331,"./assets/pieces/piece_workspace.svg":332,"./assets/pieces/piece_workspace_1.svg":333,"./assets/pieces/piece_workspace_2.svg":334,"./assets/pieces/piece_workspace_3.svg":335,"./assets/pieces/piece_workspace_4.svg":337,"./assets/pieces/piece_workspace_5.svg":336,"./assets/pieces/piece_workspace_6.svg":338,"./assets/pieces/piece_workspace_desk.svg":340,"./assets/pieces/piece_workspace_macbook.svg":339,"./assets/pieces/piece_workspace_monitor.svg":341,"./assets/pieces/piece_workspace_imac.svg":343,"./assets/pieces/piece_workspace_books_1_0_0.svg":342,"./assets/pieces/piece_workspace_books_2_0_0.svg":344,"./assets/pieces/piece_workspace_chair_1_0_0.svg":345,"./assets/pieces/piece_workspace_chair_2_0_0.svg":347,"./assets/pieces/piece_workspace_chair_sitting_0_0.svg":346,"./assets/pieces/piece_workspace_desk_0_0.svg":348,"./assets/pieces/piece_workspace_imac_0_0.svg":350,"./assets/pieces/piece_workspace_mic_0_0.svg":349,"./assets/pieces/piece_workspace_monitor_0_0.svg":351,"./assets/pieces/piece_workspace_scarlett_0_0.svg":352,"./assets/pieces/piece_workspace_speaker_1_0_0.svg":353,"./assets/pieces/piece_workspace_speaker_2_0_0.svg":354,"./assets/pieces/piece_workspace_speaker_3_0_0.svg":355,"./assets/pieces/pieces_office_shoplight_off.svg":356,"./assets/pieces/pieces_office_shoplight_on.svg":357,"./assets/interaction/interaction_hands.svg":358,"./assets/interaction/interaction_options.svg":360,"./assets/interaction/interaction_hand.svg":359,"./assets/accent/accent_noise_1.svg":361,"./assets/accent/accent_noise_2.svg":362,"./assets/accent/accent_noise_3.svg":373,"./assets/accent/accent_noise_4.svg":363,"./assets/gui/gui_logo_type.svg":364,"./assets/gui/gui_logo_buttons.svg":365,"./assets/gui/gui_enter_buttons.svg":366,"./assets/gui/gui_hand_up.svg":367,"./assets/gui/gui_start_buttons.svg":368,"./assets/gui/gui_learn_buttons.svg":369,"./assets/gui/gui_button_help.svg":370,"./assets/gui/gui_button_register.svg":380,"./assets/gui/gui_learn_buttons_login.svg":371,"./assets/gui/gui_learn_buttons_sign_up.svg":372,"./assets/gui/gui_learn_buttons_sign_out.svg":374,"./assets/gui/hands.svg":376,"./assets/gui/stage.svg":375,"./assets/gui/gui_particles_computer_corner.svg":377,"./assets/gui/gui_particles_computer_corner_closeup.svg":378,"./assets/gui/gui_particles_computer_corner_closeup_white.svg":379,"./assets/effect/effect_vignette.svg":381,"./assets/icons/social/follies.png":388,"./assets/icons/tools/angular.svg":387,"./assets/icons/social/instagram_handdrawn.svg":390,"./assets/icons/social/twitch_handdrawn.svg":400,"./assets/icons/social/twitter_handdrawn.svg":389,"./assets/icons/social/youtube_handdrawn.svg":391,"./assets/icons/social/facebook_handdrawn.svg":392,"./assets/icons/social/search_handdrawn.svg":393,"./assets/icons/social/nownigel_icon_social_home.svg":394,"./assets/icons/social/home_type.svg":395,"./assets/icons/social/team_type.svg":396,"./assets/icons/social/library_type.svg":403,"./assets/icons/social/partners_type.svg":397,"./assets/icons/social/services_type.svg":398,"./assets/icons/social/workshop_type.svg":399,"./assets/icons/social/abilities_type.svg":401,"./assets/icons/social/about_type.svg":402,"./assets/gui/gui_cursor_handdrawn.svg":382,"./assets/gui/gui_cursor_handdrawn_active.svg":383,"_css_loader":404}],414:[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '59332' + '/');
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
},{}],416:[function(require,module,exports) {
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
},{"./bundle-url":405}],0:[function(require,module,exports) {
var b=require(416);b.load([["AmaticSC-Regular.7186ebc1.ttf",384],["amaticsc-regular-webfont.ee86ff8d.woff2",386],["amaticsc-regular-webfont.5e661306.woff",385],["dj1.f97cfbfc.JPG",4],["dj2.2e69d367.JPG",85],["dj3.77d91c2e.JPG",5],["dj4.52d3dfcb.JPG",6],["dj5.ab452210.JPG",7],["dj6.c5b9a7e3.JPG",8],["dj7.b9ab08ef.JPG",9],["dj8.82303040.JPG",10],["person1.22238159.jpg",11],["person2.bd50a14b.jpg",12],["person3.3d9123fa.jpg",13],["person4.4c81847b.jpg",16],["person5.19bc7055.jpg",14],["person6.c96fe849.jpg",15],["person7.782f7af2.jpg",17],["person8.65628b17.jpg",18],["person9.46db8f58.jpg",19],["person10.63461a1f.jpg",20],["person11.89492d1a.jpg",21],["person12.1d715ea1.jpg",23],["person13.7c340569.jpg",22],["person14.3681b58e.jpg",24],["person15.79928016.jpg",25],["person16.5f1930cb.jpg",27],["person17.7919aacc.jpg",26],["person18.556e08f4.jpg",28],["person19.33d853fa.jpg",29],["person20.b62aecbe.jpg",30],["person21.ef13be42.jpg",31],["person22.691f8cb3.jpg",32],["person23.c1bec4d7.jpg",33],["person24.4283198d.jpg",34],["person25.6bb11f86.jpg",36],["person26.b05f6037.jpg",35],["person27.59f28dbd.jpg",37],["person28.2e8d0d5a.jpg",38],["person29.1bba003f.jpg",39],["person30.2da011e0.jpg",40],["person31.c74fce0e.jpg",42],["person32.ccd1458f.jpg",41],["person33.c061772a.jpg",43],["person34.4ed9ddf7.jpg",45],["person35.8b16064b.jpg",44],["person36.eb1350dc.jpg",46],["person37.fb7ee031.jpg",48],["person38.3513cf2a.jpg",47],["person39.be7ede41.jpg",49],["person40.0e544216.jpg",52],["person41.7ce36075.jpg",50],["person42.d33947f9.jpg",51],["person43.e9581e33.jpg",53],["person44.e4029df5.jpg",54],["person45.c5614dd1.jpg",55],["person46.777379de.jpg",56],["person47.cdaee004.jpg",58],["person48.98855800.jpg",57],["person49.f9c5e77c.jpg",61],["person50.4ba32f35.jpg",59],["person51.8a47d8f8.jpg",60],["person52.b7f58a19.jpg",62],["person53.c22392a2.jpg",63],["person54.516569fb.jpg",64],["person55.88285714.jpg",65],["person56.cdda9cbb.jpg",66],["person57.a86762cc.jpg",67],["person58.70c9e6fd.jpg",69],["person59.1de0f329.jpg",68],["person60.d2736930.jpg",70],["person61.54b27320.jpg",71],["person62.946faece.jpg",72],["person63.01126d1a.jpg",73],["person64.db30ed9b.jpg",74],["person65.1ae14356.jpg",75],["person66.6fca7a49.jpg",76],["person67.912fbf58.jpg",77],["person68.e37a7fbf.jpg",78],["person69.dca66691.jpg",79],["pageend2-9bottomright.d86d8ddc.svg",80],["pageend2-9bottomleft.1dcb6ca7.svg",81],["pageend2-9topright.80d731eb.svg",82],["pageend2-9topleft.26759f6e.svg",83],["gui_map_ga.d7b5335a.svg",84],["gui_loading_machine_1.acd1c860.svg",93],["gui_loading_machine_2.7d1f5fd4.svg",86],["gui_loading_machine_3.ed13c667.svg",87],["gui_loading_machine_4.ea13d6e5.svg",88],["gui_intro_machine_1.1447f743.svg",90],["gui_intro_machine_2.9669281e.svg",89],["gui_intro_machine_3.df56d3d7.svg",91],["gui_intro_machine_4.0f2706c0.svg",92],["gui_intro_machine_5.99fcaffb.svg",95],["gui_intro_machine_6.20c20dd3.svg",94],["gui_intro_machine_7.344e2430.svg",96],["gui_intro_machine_8.86346dcb.svg",97],["gui_bg_corner_top_left.75b2644e.svg",98],["gui_qr.67f0aa3f.svg",99],["gui_qr_icon.7fa30f7c.svg",100],["search.2f8bdcfe.svg",101],["create.f9983c6a.svg",102],["gui_paint_1.f5b5ef01.svg",104],["gui_paint_2.41ab02c9.svg",103],["gui_paint_3.2cdb9a1e.svg",106],["gui_paint_4.63a20e96.svg",105],["gui_paint_5.79e84c4c.svg",107],["gui_paint_6.91382c96.svg",108],["gui_paint_7.43c516e8.svg",109],["gui_paint_8.5636e6b8.svg",110],["gui_machines.b72b0bab.svg",111],["nownigel_gui_logo_combo.55d28303.svg",112],["nownigel_gui_logo_mark.cb9dcb16.svg",113],["nownigel_gui_logo_mark_only.7c470b33.svg",114],["nownigel_gui_logo_buttons.44575ab6.svg",115],["nownigel_gui_logo_type.f2be35ca.svg",116],["nownigel_gui_logo_type_light.ae6dd259.svg",117],["gui_logo_type_light.19090d9b.svg",118],["gui_logo_type_light_1.a00d9cac.svg",119],["gui_logo_type_light_2.b5afe4df.svg",120],["gui_logo_type_light_3.45eb61d8.svg",121],["gui_logo_type_light_4.693abb6a.svg",122],["gui_logo_type_light_5.745931d1.svg",123],["gui_logo_type_light_6.4c3f1dea.svg",124],["gui_logo_type_light_7.3fd23863.svg",125],["gui_logo_type_light_8.a067a1eb.svg",126],["gui_audio.2e7260ac.svg",127],["gui_line_top_left.281d27a2.svg",130],["gui_line_bottom_left.83bca4ba.svg",128],["gui_line_bottom_right.1ca325de.svg",129],["gui_line_top_right.4e54d042.svg",132],["gui_audio_on.c5ad4665.svg",131],["gui_audio_off.14126b3f.svg",136],["gui_logo_links.a126972e.svg",133],["gui_logo_words.54d764b1.svg",134],["location.3abe693f.svg",135],["dj_body_1.243db044.svg",137],["dj_body_2.cc170ba8.svg",138],["imac.0e6a8372.svg",139],["camera.f043f432.svg",140],["gui_logo_navs.e109c89e.svg",141],["gui_logo_socials.591925f5.svg",143],["gui_logo_social_instagram.ae40c37a.svg",142],["gui_logo_social_twitch.dbdfb288.svg",144],["gui_logo_social_facebook.4e077bc7.svg",148],["gui_logo_social_youtube.9c9d700e.svg",146],["gui_logo_social_twitter.f421470f.svg",145],["dj_gui_interaction_body_1.1aab9fcf.svg",147],["dj_gui_interaction_body_33.113be551.svg",149],["dj_gui_interaction_body_2.65b41777.svg",151],["dj_gui_interaction_body_3.7b506027.svg",150],["dj_gui_interaction_body_4.a714c5c5.svg",153],["dj_gui_interaction_body_5.cd40a35e.svg",152],["dj_gui_interaction_body_6.30b64d12.svg",154],["dj_gui_interaction_body_7.1df52dee.svg",155],["dj_gui_interaction_body_8.93b1fa95.svg",158],["dj_gui_interaction_body_9.48f18162.svg",156],["nownigel_gui_interaction_portfolio.efbefae8.svg",157],["nownigel_gui_interaction_hands_0_0_depth_200.22a8d8de.svg",159],["nownigel_gui_interaction_hands_0_0_depth_200_left.92bc3159.svg",160],["nownigel_gui_interaction_hands_0_0_depth_200_right.e061dd94.svg",161],["nownigel_gui_interaction_hands_0_0_depth_200_1.95a68ff9.svg",162],["nownigel_gui_interaction_hands_0_0_depth_200_2.fa0f8467.svg",163],["nownigel_gui_interaction_hands_0_0_depth_200_3.3668c356.svg",165],["nownigel_gui_interaction_hands_0_0_depth_200_4.169c4cca.svg",164],["nownigel_gui_interaction_hands_0_0_depth_200_5.7a457f58.svg",166],["nownigel_gui_interaction_hands_0_0_depth_200_6.59702bdd.svg",168],["nownigel_gui_interaction_hands_0_0_depth_200_7.c195f396.svg",167],["nownigel_gui_interaction_hands_0_0_depth_200_8.dcebd3d0.svg",169],["nownigel_gui_interaction_hands_0_0_depth_200_9.ac9bc26b.svg",236],["nownigel_gui_interaction_hands_0_0_depth_200_10.d71e1788.svg",171],["nownigel_gui_interaction_hands_0_0_depth_200_11.c56ffc5d.svg",170],["nownigel_gui_interaction_hands_0_0_depth_200_12.a820be7c.svg",172],["nownigel_gui_interaction_man_0_16_depth_25.c8a99d04.svg",173],["nownigel_gui_interaction_man_0_16_depth_50.6ea161f7.svg",174],["nownigel_gui_interaction_man_0_16_depth_100.d29dc2f2.svg",175],["nownigel_gui_interaction_man_0_16_depth_200.a0667a73.svg",177],["nownigel_gui_interaction_man_0_16_depth_200_face_0.ab347aad.svg",176],["nownigel_gui_interaction_man_0_16_depth_200_face_1.4b877635.svg",178],["nownigel_gui_interaction_man_0_16_depth_200_face_2.879351b3.svg",180],["nownigel_gui_interaction_man_0_16_depth_200_face_3.f23faebc.svg",179],["nownigel_gui_interaction_man_0_16_depth_200_face_4.c05010a9.svg",181],["nownigel_gui_interaction_man_0_16_depth_200_face_5.1c0d3256.svg",182],["nownigel_gui_interaction_man_0_16_depth_200_face_6.a45edfd6.svg",183],["nownigel_gui_interaction_man_0_16_depth_200_face_7.63d91913.svg",184],["nownigel_gui_interaction_man_0_16_depth_200_face_8.9ff1796f.svg",186],["nownigel_gui_interaction_man_0_16_depth_200_face_9.1d715f70.svg",185],["nownigel_gui_interaction_man_0_16_depth_200_face_10.267a8506.svg",187],["nownigel_gui_interaction_man_0_16_depth_200_face_11.ad51d97d.svg",188],["nownigel_gui_interaction_man_0_16_depth_200_face_12.b498223a.svg",189],["nownigel_gui_interaction_man_0_16_depth_200_face_13.441f6f03.svg",190],["nownigel_gui_interaction_man_0_16_depth_200_face_14.8f148831.svg",191],["nownigel_gui_interaction_man_0_16_depth_200_face_15.d68b901c.svg",193],["nownigel_gui_interaction_man_0_16_depth_200_face_16.cd6fd186.svg",192],["nownigel_gui_interaction_man_0_16_depth_200_face_17.a05a0bca.svg",194],["nownigel_gui_interaction_man_0_16_depth_200_face_18.bb754e6b.svg",195],["nownigel_gui_interaction_man_0_16_depth_200_face_19.edad137d.svg",196],["nownigel_gui_interaction_man_0_16_depth_200_face_20.e930c919.svg",197],["nownigel_gui_interaction_man_0_16_depth_200_face_21.734646b5.svg",199],["nownigel_gui_interaction_man_0_16_depth_200_face_22.22244618.svg",198],["nownigel_gui_interaction_man_0_16_depth_200_face_23.f0340afd.svg",200],["nownigel_gui_interaction_man_0_16_depth_200_face_24.06f911ee.svg",201],["nownigel_gui_interaction_man_0_16_depth_200_face_25.c5d3019e.svg",202],["nownigel_gui_interaction_man_0_16_depth_200_face_26.cfcaa3ae.svg",203],["nownigel_gui_interaction_man_0_16_depth_200_face_27.28c4aed1.svg",204],["nownigel_gui_interaction_man_0_16_depth_200_face_28.9a02d7ac.svg",205],["nownigel_gui_interaction_man_0_16_depth_200_face_29.a14954c3.svg",206],["nownigel_gui_interaction_man_0_16_depth_200_face_30.37acafab.svg",207],["nownigel_gui_interaction_man_0_16_depth_200_face_31.3bc57d05.svg",208],["nownigel_gui_interaction_man_0_16_depth_200_face_32.b70305f7.svg",209],["nownigel_gui_interaction_man_0_16_depth_200_face_33.f7c4655f.svg",210],["nownigel_gui_interaction_man_0_16_depth_200_face_34.27f954fe.svg",211],["nownigel_gui_interaction_man_0_16_depth_200_face_35.d96f49d0.svg",212],["nownigel_gui_interaction_man_0_16_depth_200_face_36.e0ad4896.svg",213],["nownigel_gui_interaction_man_0_16_depth_200_face_37.86152ded.svg",214],["nownigel_gui_interaction_man_0_16_depth_200_face_38.3df2b629.svg",215],["nownigel_gui_interaction_man_0_16_depth_200_face_39.1442fb33.svg",216],["nownigel_gui_interaction_man_0_16_depth_200_face_40.a0765eba.svg",217],["nownigel_gui_interaction_man_0_16_depth_200_face_41.7b28568c.svg",218],["nownigel_gui_interaction_man_0_16_depth_200_face_42.692d763a.svg",219],["nownigel_gui_interaction_man_0_16_depth_200_face_43.5dd26af1.svg",220],["nownigel_gui_interaction_man_0_16_depth_200_face_44.8b02a09b.svg",221],["nownigel_gui_interaction_man_0_16_depth_200_face_45.ffc983f3.svg",222],["nownigel_gui_interaction_man_0_16_depth_200_face_46.4b96528e.svg",223],["nownigel_gui_interaction_man_0_16_depth_200_face_47.9c281779.svg",224],["nownigel_gui_interaction_man_0_16_depth_200_face_48.bcbd349f.svg",225],["nownigel_gui_interaction_man_0_16_depth_200_face_49.6732f1ce.svg",226],["nownigel_gui_interaction_man_0_16_depth_200_face_50.370200cf.svg",227],["nownigel_gui_interaction_man_0_16_depth_200_face_51.2899a5a0.svg",228],["nownigel_gui_interaction_man_0_16_depth_200_face_52.a11b0646.svg",229],["nownigel_gui_interaction_man_0_16_depth_200_face_53.f45a13cf.svg",230],["nownigel_gui_interaction_man_0_16_depth_200_face_54.5ece1f38.svg",231],["nownigel_gui_interaction_man_0_16_depth_200_face_55.e1b648c6.svg",232],["nownigel_gui_interaction_man_0_16_depth_200_face_56.8e501667.svg",233],["nownigel_gui_interaction_man_0_16_depth_200_face_57.f1140e86.svg",234],["nownigel_gui_interaction_man_0_16_depth_200_face_58.20574f32.svg",235],["nownigel_gui_interaction_man_0_16_depth_200_face_59.e215d515.svg",237],["nownigel_gui_interaction_man_0_16_depth_200_face_60.21e26f3d.svg",238],["nownigel_gui_interaction_man_0_16_depth_200_face_61.a59c97f0.svg",239],["nownigel_gui_interaction_man_0_16_depth_200_face_62.d26f41f7.svg",240],["nownigel_gui_interaction_man_0_16_depth_200_face_63.9eb4a120.svg",241],["nownigel_gui_interaction_man_0_16_depth_200_face_64.23933a5e.svg",242],["gui_interaction_man_0_0_depth_200.1fff6fcd.svg",243],["gui_interaction_man_0_0_depth_200_phungi.2b990218.svg",244],["gui_paint_corner_center_1.9b7e494b.svg",245],["gui_paint_corner_center_2.0ff4e3d6.svg",246],["gui_paint_corner_center_3.4230ee11.svg",247],["gui_paint_corner_bottom_left.4b3ac33c.svg",248],["gui_paint_corner_bottom_right.0f34da59.svg",249],["gui_paint_corner_top_left.7f0d89b4.svg",250],["gui_paint_corner_top_right.d27e297a.svg",251],["gui_corner_top.8d6aeb6c.svg",252],["gui_corner_bottom.e078c275.svg",253],["gui_corner_top_left.700d3d9b.svg",254],["gui_corner_top_right.d5c70dd7.svg",255],["gui_corner_bottom_left.401170c4.svg",256],["gui_corner_bottom_right.f4d898a8.svg",257],["load_bar_1.69cb20d9.svg",258],["load_bar_2.9ac16b9f.svg",260],["load_bar_3.ebdde4c8.svg",261],["load_bar_4.86303209.svg",259],["load_bar_5.cebb3ae3.svg",262],["page_bottom_waves_1.2a74c6c5.svg",263],["page_bottom_waves_2.6debee89.svg",264],["page_bottom_waves_3.e2d855d1.svg",265],["page_bottom_waves_4.9f5b79ac.svg",266],["gui_logo_bubble.25d8e9da.svg",267],["gui_button_contact.c1009456.svg",268],["gui_button_hire.772f540b.svg",269],["gui_button_hire_2.ed5866ae.svg",270],["button_note.b92955b8.svg",271],["gui_since.f4aa7b56.svg",272],["move_note.3e30b6d0.svg",273],["container_8.c672bea1.svg",274],["container_9.9457afb0.svg",276],["circle.97c9b4aa.svg",275],["gui_i.596dfd49.svg",296],["gui_close.f391cc3e.svg",277],["gui_circle.4df5b88e.svg",278],["gui_menu.98d411b5.svg",279],["gui_scroll.b839f705.svg",280],["gui_loading_1.a019bf14.svg",281],["gui_loading_2.5721e74d.svg",282],["gui_loading_3.a9306b3d.svg",283],["gui_loading_4.7b07b464.svg",284],["gui_loading_5.62e0d283.svg",285],["gui_loading_6.b0487d5f.svg",286],["gui_loading_7.ba27587c.svg",287],["dj_gui_logo.d0628324.svg",288],["dj_gui_logo_1.3db50bdb.svg",289],["dj_gui_logo_2.c6a16b1a.svg",290],["dj_gui_logo_3.11c4b546.svg",291],["dj_gui_logo_4.b2e96bb4.svg",292],["gui_logo_knewest.7d9da5d0.svg",293],["gui_logo_phugazi.27fd27b3.svg",294],["gui_logo_coffee.c7bc272a.svg",295],["gui_logo_fungi.b4624dfa.svg",298],["gui_logo_fish.51f4ae13.svg",297],["gui_logo_fly.b15b17e9.svg",299],["gui_logo_maisiemaybe.f2e15571.svg",300],["gui_logo_colorleague.dca9052e.svg",301],["gui_arrow_left.3951cb47.svg",302],["gui_arrow_top_left.90549473.svg",303],["gui_arrow_down_left.00f8b123.svg",305],["gui_arrow_top.b8643d25.svg",304],["gui_arrow_down.11bd2477.svg",306],["gui_arrow_right.8cb78612.svg",309],["gui_arrow_top_right.8efe69c3.svg",307],["gui_arrow_down_right.268c713d.svg",308],["gui_logo_combo.67035ddc.svg",310],["gui_logo_combo_layers.fc73b7a5.svg",312],["gui_key.fcb4f53d.svg",311],["gui_keyhole.59f8c724.svg",313],["grid_cross.46932b3d.svg",314],["grid_depth.d34c95ae.svg",316],["grid_depth_90.af837cac.svg",315],["grid_depth_180.e85f9bd2.svg",318],["grid_depth_270.931e2a7a.svg",317],["grid_depth_360.00ac42c7.svg",319],["grid_depth_450.cc90892a.svg",320],["grid_depth_540.cea67347.svg",321],["grid_depth_630.433cffff.svg",322],["grid_depth_720.43615c5a.svg",325],["grid_depth_90_floor.68054b95.svg",323],["grid_depth_180_floor.b7e1c056.svg",324],["grid_depth_270_floor.2f4a8006.svg",326],["grid_depth_360_floor.356adf38.svg",327],["grid_depth_450_floor.0ad1a688.svg",328],["grid_depth_540_floor.9498351a.svg",329],["grid_depth_630_floor.0c45ada0.svg",330],["grid_depth_720_floor.00d8c679.svg",331],["piece_workspace.93756a7c.svg",332],["piece_workspace_1.c672d4c7.svg",333],["piece_workspace_2.0fb3bcff.svg",334],["piece_workspace_3.4e4332c4.svg",335],["piece_workspace_4.fa8013c1.svg",337],["piece_workspace_5.b4fe3346.svg",336],["piece_workspace_6.eff07dc7.svg",338],["piece_workspace_desk.1290d1b6.svg",340],["piece_workspace_macbook.3c3911f4.svg",339],["piece_workspace_monitor.9c0c2813.svg",341],["piece_workspace_imac.81dc23dc.svg",343],["piece_workspace_books_1_0_0.295fade3.svg",342],["piece_workspace_books_2_0_0.e6626cd3.svg",344],["piece_workspace_chair_1_0_0.a79042dc.svg",345],["piece_workspace_chair_2_0_0.2dc12ab8.svg",347],["piece_workspace_chair_sitting_0_0.5a960e0f.svg",346],["piece_workspace_desk_0_0.ea436682.svg",348],["piece_workspace_imac_0_0.a23d2b27.svg",350],["piece_workspace_mic_0_0.b03843bd.svg",349],["piece_workspace_monitor_0_0.eadcb6cc.svg",351],["piece_workspace_scarlett_0_0.6190c01e.svg",352],["piece_workspace_speaker_1_0_0.23ce6c8d.svg",353],["piece_workspace_speaker_2_0_0.a21bfb18.svg",354],["piece_workspace_speaker_3_0_0.7be3f933.svg",355],["pieces_office_shoplight_off.b236e405.svg",356],["pieces_office_shoplight_on.95a74c5b.svg",357],["interaction_hands.adf0ec85.svg",358],["interaction_options.6831d269.svg",360],["interaction_hand.38e62bfb.svg",359],["accent_noise_1.f7c7cc63.svg",361],["accent_noise_2.ff105b8c.svg",362],["accent_noise_3.44c20859.svg",373],["accent_noise_4.89ee89bb.svg",363],["gui_logo_type.4a219ae2.svg",364],["gui_logo_buttons.06082bde.svg",365],["gui_enter_buttons.8e92d0ec.svg",366],["gui_hand_up.63be66fa.svg",367],["gui_start_buttons.07589795.svg",368],["gui_learn_buttons.0b8e6654.svg",369],["gui_button_help.a2389250.svg",370],["gui_button_register.1ce3aeec.svg",380],["gui_learn_buttons_login.459f559f.svg",371],["gui_learn_buttons_sign_up.c7231639.svg",372],["gui_learn_buttons_sign_out.7960e517.svg",374],["hands.eddb4d46.svg",376],["stage.1a929f04.svg",375],["gui_particles_computer_corner.934f8788.svg",377],["gui_particles_computer_corner_closeup.d4cd9d3b.svg",378],["gui_particles_computer_corner_closeup_white.5c2c0bba.svg",379],["effect_vignette.9ddb8097.svg",381],["follies.d8d1b802.png",388],["angular.a3ab9d05.svg",387],["instagram_handdrawn.eb1a0fd0.svg",390],["twitch_handdrawn.f651f54c.svg",400],["twitter_handdrawn.df5b77b2.svg",389],["youtube_handdrawn.2c568582.svg",391],["facebook_handdrawn.ed4e4543.svg",392],["search_handdrawn.f1a80919.svg",393],["nownigel_icon_social_home.77f679ab.svg",394],["home_type.f27a53e0.svg",395],["team_type.84fd1572.svg",396],["library_type.f4b8a92a.svg",403],["partners_type.b3b0fa6d.svg",397],["services_type.713327e3.svg",398],["workshop_type.51ef99f1.svg",399],["abilities_type.6f4991e2.svg",401],["about_type.4862aa8d.svg",402],["gui_cursor_handdrawn.e90737d3.svg",382],["gui_cursor_handdrawn_active.aed7a195.svg",383]]);
},{}]},{},[414,0], null)