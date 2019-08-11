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
})({312:[function(require,module,exports) {
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
},{}],311:[function(require,module,exports) {
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
},{"./bundle-url":312}],2:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./assets/fonts/Amatic-SC/AmaticSC-Regular.ttf":292,"./assets/fonts/Amatic-SC/amaticsc-regular-webfont.woff2":293,"./assets/fonts/Amatic-SC/amaticsc-regular-webfont.woff":294,"./assets/svg/pageend2-9bottomright.svg":4,"./assets/svg/pageend2-9bottomleft.svg":5,"./assets/svg/pageend2-9topright.svg":6,"./assets/svg/pageend2-9topleft.svg":7,"./assets/gui/gui_bg_corner_top_left.svg":8,"./assets/gui/gui_qr.svg":9,"./assets/gui/gui_qr_icon.svg":10,"./assets/gui/search.svg":11,"./assets/gui/create.svg":12,"./assets/gui/gui_paint_top.svg":13,"./assets/gui/gui_paint_bottom.svg":14,"./assets/gui/gui_paint_right.svg":15,"./assets/gui/gui_paint_left.svg":16,"./assets/gui/gui_paint_1.svg":17,"./assets/gui/gui_paint_2.svg":18,"./assets/gui/gui_paint_3.svg":19,"./assets/gui/gui_paint_4.svg":20,"./assets/gui/gui_paint_5.svg":21,"./assets/gui/gui_paint_6.svg":22,"./assets/gui/gui_paint_7.svg":23,"./assets/gui/gui_paint_8.svg":24,"./assets/gui/gui_machines.svg":25,"./assets/gui/nownigel_gui_logo_combo.svg":26,"./assets/gui/nownigel_gui_logo_mark.svg":27,"./assets/gui/nownigel_gui_logo_mark_only.svg":28,"./assets/gui/nownigel_gui_logo_buttons.svg":29,"./assets/gui/nownigel_gui_logo_type.svg":30,"./assets/gui/nownigel_gui_logo_type_light.svg":31,"./assets/gui/gui_logo_type_light.svg":32,"./assets/gui/gui_logo_type_light_1.svg":33,"./assets/gui/gui_logo_type_light_2.svg":34,"./assets/gui/gui_logo_type_light_3.svg":35,"./assets/gui/gui_logo_type_light_4.svg":36,"./assets/gui/gui_logo_type_light_5.svg":37,"./assets/gui/gui_logo_type_light_6.svg":38,"./assets/gui/gui_logo_type_light_7.svg":39,"./assets/gui/gui_logo_type_light_8.svg":40,"./assets/gui/gui_audio.svg":41,"./assets/gui/gui_line_top_left.svg":42,"./assets/gui/gui_line_bottom_left.svg":43,"./assets/gui/gui_line_bottom_right.svg":44,"./assets/gui/gui_line_top_right.svg":45,"./assets/gui/gui_audio_on.svg":46,"./assets/gui/gui_audio_off.svg":47,"./assets/gui/gui_logo_links.svg":48,"./assets/gui/gui_logo_words.svg":49,"./assets/gui/location.svg":50,"./assets/gui/dj_body_1.svg":51,"./assets/gui/dj_body_2.svg":52,"./assets/gui/imac.svg":53,"./assets/gui/camera.svg":54,"./assets/gui/gui_logo_navs.svg":55,"./assets/gui/gui_logo_socials.svg":56,"./assets/gui/gui_logo_social_instagram.svg":57,"./assets/gui/gui_logo_social_twitch.svg":58,"./assets/gui/gui_logo_social_facebook.svg":59,"./assets/gui/gui_logo_social_youtube.svg":60,"./assets/gui/gui_logo_social_twitter.svg":61,"./assets/gui/dj_gui_interaction_body_1.svg":62,"./assets/gui/dj_gui_interaction_body_33.svg":63,"./assets/gui/dj_gui_interaction_body_2.svg":64,"./assets/gui/dj_gui_interaction_body_3.svg":65,"./assets/gui/dj_gui_interaction_body_4.svg":66,"./assets/gui/dj_gui_interaction_body_5.svg":67,"./assets/gui/dj_gui_interaction_body_6.svg":68,"./assets/gui/dj_gui_interaction_body_7.svg":69,"./assets/gui/dj_gui_interaction_body_8.svg":70,"./assets/gui/dj_gui_interaction_body_9.svg":71,"./assets/gui/nownigel_gui_interaction_portfolio.svg":72,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200.svg":73,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_1.svg":74,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_2.svg":75,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_3.svg":76,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_4.svg":77,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_5.svg":78,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_6.svg":79,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_7.svg":80,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_8.svg":81,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_9.svg":82,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_10.svg":83,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_11.svg":84,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_12.svg":85,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_25.svg":86,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_50.svg":87,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_100.svg":88,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200.svg":89,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_0.svg":90,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_1.svg":91,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_2.svg":92,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_3.svg":93,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_4.svg":94,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_5.svg":95,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_6.svg":96,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_7.svg":97,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_8.svg":98,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_9.svg":99,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_10.svg":100,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_11.svg":101,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_12.svg":102,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_13.svg":103,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_14.svg":104,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_15.svg":105,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_16.svg":106,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_17.svg":107,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_18.svg":108,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_19.svg":109,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_20.svg":110,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_21.svg":111,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_22.svg":112,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_23.svg":113,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_24.svg":114,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_25.svg":115,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_26.svg":116,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_27.svg":117,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_28.svg":118,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_29.svg":119,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_30.svg":120,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_31.svg":121,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_32.svg":122,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_33.svg":123,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_34.svg":124,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_35.svg":125,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_36.svg":126,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_37.svg":127,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_38.svg":128,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_39.svg":129,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_40.svg":130,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_41.svg":131,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_42.svg":132,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_43.svg":133,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_44.svg":134,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_45.svg":135,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_46.svg":137,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_47.svg":136,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_48.svg":138,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_49.svg":139,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_50.svg":142,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_51.svg":140,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_52.svg":141,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_53.svg":143,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_54.svg":144,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_55.svg":145,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_56.svg":146,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_57.svg":147,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_58.svg":148,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_59.svg":149,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_60.svg":150,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_61.svg":151,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_62.svg":153,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_63.svg":152,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_64.svg":154,"./assets/gui/gui_interaction_man_0_0_depth_200.svg":155,"./assets/gui/gui_interaction_man_0_0_depth_200_phungi.svg":171,"./assets/gui/gui_paint_corner_center_1.svg":156,"./assets/gui/gui_paint_corner_center_2.svg":157,"./assets/gui/gui_paint_corner_center_3.svg":158,"./assets/gui/gui_paint_corner_bottom_left.svg":160,"./assets/gui/gui_paint_corner_bottom_right.svg":159,"./assets/gui/gui_paint_corner_top_left.svg":161,"./assets/gui/gui_paint_corner_top_right.svg":163,"./assets/gui/gui_corner_top.svg":162,"./assets/gui/gui_corner_bottom.svg":164,"./assets/gui/gui_corner_top_left.svg":166,"./assets/gui/gui_corner_top_right.svg":165,"./assets/gui/gui_corner_bottom_left.svg":167,"./assets/gui/gui_corner_bottom_right.svg":168,"./assets/gui/load_bar_1.svg":169,"./assets/gui/load_bar_2.svg":170,"./assets/gui/load_bar_3.svg":173,"./assets/gui/load_bar_4.svg":172,"./assets/gui/load_bar_5.svg":174,"./assets/gui/page_bottom_waves_1.svg":175,"./assets/gui/page_bottom_waves_2.svg":176,"./assets/gui/page_bottom_waves_3.svg":177,"./assets/gui/page_bottom_waves_4.svg":178,"./assets/gui/gui_logo_bubble.svg":181,"./assets/gui/gui_button_hire.svg":179,"./assets/gui/button_note.svg":180,"./assets/gui/gui_since.svg":183,"./assets/gui/move_note.svg":182,"./assets/gui/container_8.svg":185,"./assets/gui/container_9.svg":184,"./assets/gui/circle.svg":186,"./assets/gui/gui_i.svg":187,"./assets/gui/gui_close.svg":188,"./assets/gui/gui_circle.svg":189,"./assets/gui/gui_menu.svg":190,"./assets/gui/gui_scroll.svg":191,"./assets/gui/gui_logo.svg":192,"./assets/gui/gui_logo_knewest.svg":193,"./assets/gui/gui_logo_phugazi.svg":194,"./assets/gui/gui_logo_coffee.svg":195,"./assets/gui/gui_logo_fungi.svg":196,"./assets/gui/gui_logo_fish.svg":197,"./assets/gui/gui_logo_fly.svg":198,"./assets/gui/gui_logo_maisiemaybe.svg":199,"./assets/gui/gui_logo_colorleague.svg":200,"./assets/gui/gui_arrow_left.svg":201,"./assets/gui/gui_arrow_top_left.svg":202,"./assets/gui/gui_arrow_down_left.svg":203,"./assets/gui/gui_arrow_top.svg":204,"./assets/gui/gui_arrow_down.svg":206,"./assets/gui/gui_arrow_right.svg":205,"./assets/gui/gui_arrow_top_right.svg":207,"./assets/gui/gui_arrow_down_right.svg":209,"./assets/gui/gui_logo_combo.svg":208,"./assets/gui/gui_logo_combo_layers.svg":210,"./assets/gui/gui_key.svg":211,"./assets/gui/gui_keyhole.svg":212,"./assets/grid/grid_cross.svg":213,"./assets/grid/grid_depth.svg":214,"./assets/grid/grid_depth_90.svg":215,"./assets/grid/grid_depth_180.svg":216,"./assets/grid/grid_depth_270.svg":217,"./assets/grid/grid_depth_360.svg":218,"./assets/grid/grid_depth_450.svg":219,"./assets/grid/grid_depth_540.svg":220,"./assets/grid/grid_depth_630.svg":221,"./assets/grid/grid_depth_720.svg":222,"./assets/grid/grid_depth_90_floor.svg":223,"./assets/grid/grid_depth_180_floor.svg":224,"./assets/grid/grid_depth_270_floor.svg":225,"./assets/grid/grid_depth_360_floor.svg":226,"./assets/grid/grid_depth_450_floor.svg":227,"./assets/grid/grid_depth_540_floor.svg":228,"./assets/grid/grid_depth_630_floor.svg":229,"./assets/grid/grid_depth_720_floor.svg":230,"./assets/pieces/piece_workspace.svg":231,"./assets/pieces/piece_workspace_1.svg":232,"./assets/pieces/piece_workspace_2.svg":233,"./assets/pieces/piece_workspace_3.svg":234,"./assets/pieces/piece_workspace_4.svg":235,"./assets/pieces/piece_workspace_5.svg":236,"./assets/pieces/piece_workspace_6.svg":237,"./assets/pieces/piece_workspace_desk.svg":238,"./assets/pieces/piece_workspace_macbook.svg":239,"./assets/pieces/piece_workspace_monitor.svg":240,"./assets/pieces/piece_workspace_imac.svg":241,"./assets/pieces/piece_workspace_imac_on.svg":242,"./assets/pieces/piece_workspace_books_1_0_0.svg":243,"./assets/pieces/piece_workspace_books_2_0_0.svg":244,"./assets/pieces/piece_workspace_chair_1_0_0.svg":245,"./assets/pieces/piece_workspace_chair_2_0_0.svg":246,"./assets/pieces/piece_workspace_chair_sitting_0_0.svg":247,"./assets/pieces/piece_workspace_desk_0_0.svg":248,"./assets/pieces/piece_workspace_imac_0_0.svg":249,"./assets/pieces/piece_workspace_mic_0_0.svg":250,"./assets/pieces/piece_workspace_monitor_0_0.svg":251,"./assets/pieces/piece_workspace_scarlett_0_0.svg":252,"./assets/pieces/piece_workspace_speaker_1_0_0.svg":253,"./assets/pieces/piece_workspace_speaker_2_0_0.svg":254,"./assets/pieces/piece_workspace_speaker_3_0_0.svg":255,"./assets/pieces/pieces_office_shoplight_on_bg.svg":256,"./assets/pieces/pieces_office_shoplight_off.svg":257,"./assets/pieces/pieces_office_shoplight_on.svg":258,"./assets/pieces/piece_desk_mg.svg":259,"./assets/pieces/piece_desk_bg.svg":260,"./assets/interaction/interaction_hands.svg":261,"./assets/interaction/interaction_options.svg":262,"./assets/interaction/interaction_hand.svg":263,"./assets/accent/accent_noise_1.svg":264,"./assets/accent/accent_noise_2.svg":265,"./assets/accent/accent_noise_3.svg":266,"./assets/accent/accent_noise_4.svg":267,"./assets/gui/gui_logo_type.svg":268,"./assets/gui/gui_logo_buttons.svg":269,"./assets/gui/gui_enter_buttons.svg":270,"./assets/gui/gui_hand_up.svg":271,"./assets/gui/gui_start_buttons.svg":272,"./assets/gui/gui_or.svg":273,"./assets/gui/gui_learn_buttons.svg":274,"./assets/gui/gui_button_help.svg":275,"./assets/gui/gui_button_register.svg":276,"./assets/gui/gui_learn_buttons_login.svg":277,"./assets/gui/gui_learn_buttons_sign_up.svg":278,"./assets/gui/gui_learn_buttons_sign_out.svg":279,"./assets/gui/hands.svg":280,"./assets/gui/stage_floor.svg":281,"./assets/gui/stage_door_closed.svg":282,"./assets/gui/stage_door_opened.svg":283,"./assets/gui/stage_wall.svg":284,"./assets/gui/stage_lines.svg":285,"./assets/gui/gui_particles_computer_corner.svg":286,"./assets/gui/gui_particles_computer_corner_closeup.svg":287,"./assets/gui/gui_particles_computer_corner_closeup_white.svg":288,"./assets/effect/effect_vignette.svg":289,"./assets/icons/tools/angular.svg":295,"./assets/icons/social/instagram_handdrawn.svg":296,"./assets/icons/social/twitch_handdrawn.svg":297,"./assets/icons/social/twitter_handdrawn.svg":298,"./assets/icons/social/youtube_handdrawn.svg":299,"./assets/icons/social/facebook_handdrawn.svg":300,"./assets/icons/social/search_handdrawn.svg":301,"./assets/icons/social/nownigel_icon_social_home.svg":302,"./assets/icons/social/home_type.svg":303,"./assets/icons/social/team_type.svg":304,"./assets/icons/social/library_type.svg":306,"./assets/icons/social/partners_type.svg":305,"./assets/icons/social/services_type.svg":307,"./assets/icons/social/workshop_type.svg":308,"./assets/icons/social/abilities_type.svg":309,"./assets/icons/social/about_type.svg":310,"./assets/gui/gui_cursor_handdrawn.svg":290,"./assets/gui/gui_cursor_handdrawn_active.svg":291,"_css_loader":311}],321:[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '49290' + '/');
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
},{}],323:[function(require,module,exports) {
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
},{"./bundle-url":312}],0:[function(require,module,exports) {
var b=require(323);b.load([["AmaticSC-Regular.2aacce55.ttf",292],["amaticsc-regular-webfont.f1ad37f2.woff2",293],["amaticsc-regular-webfont.8026775f.woff",294],["pageend2-9bottomright.195f2806.svg",4],["pageend2-9bottomleft.1a1067fe.svg",5],["pageend2-9topright.407a57d4.svg",6],["pageend2-9topleft.11329a37.svg",7],["gui_bg_corner_top_left.2921b692.svg",8],["gui_qr.138e47cf.svg",9],["gui_qr_icon.f77d5f9e.svg",10],["search.ca0b1ff7.svg",11],["create.4596acfa.svg",12],["gui_paint_top.3d01f690.svg",13],["gui_paint_bottom.ce20cb3d.svg",14],["gui_paint_right.d1bb9833.svg",15],["gui_paint_left.e4a1270e.svg",16],["gui_paint_1.8a95e1da.svg",17],["gui_paint_2.fa2bd9f9.svg",18],["gui_paint_3.23db18a5.svg",19],["gui_paint_4.ac7ce4ba.svg",20],["gui_paint_5.92819528.svg",21],["gui_paint_6.c6cfffe3.svg",22],["gui_paint_7.8bab7856.svg",23],["gui_paint_8.243084f3.svg",24],["gui_machines.58b82e57.svg",25],["nownigel_gui_logo_combo.d039d86f.svg",26],["nownigel_gui_logo_mark.a4349b2a.svg",27],["nownigel_gui_logo_mark_only.ef638552.svg",28],["nownigel_gui_logo_buttons.417119f6.svg",29],["nownigel_gui_logo_type.d01c5fce.svg",30],["nownigel_gui_logo_type_light.dc7b7f9a.svg",31],["gui_logo_type_light.e2e4ed1a.svg",32],["gui_logo_type_light_1.4a481406.svg",33],["gui_logo_type_light_2.2580a250.svg",34],["gui_logo_type_light_3.9270c12f.svg",35],["gui_logo_type_light_4.57f34e3c.svg",36],["gui_logo_type_light_5.d6cad5bd.svg",37],["gui_logo_type_light_6.046ae371.svg",38],["gui_logo_type_light_7.30d8d772.svg",39],["gui_logo_type_light_8.c54211b1.svg",40],["gui_audio.e7b365c9.svg",41],["gui_line_top_left.2e46bea0.svg",42],["gui_line_bottom_left.d3ac5dbf.svg",43],["gui_line_bottom_right.18a7f5bb.svg",44],["gui_line_top_right.458e3f61.svg",45],["gui_audio_on.562b21aa.svg",46],["gui_audio_off.fe6af782.svg",47],["gui_logo_links.5c7586b2.svg",48],["gui_logo_words.32d0274a.svg",49],["location.f005ff48.svg",50],["dj_body_1.077b1dbc.svg",51],["dj_body_2.8a065c83.svg",52],["imac.61c594ef.svg",53],["camera.9a0cb94b.svg",54],["gui_logo_navs.d06d4fa7.svg",55],["gui_logo_socials.f1822a30.svg",56],["gui_logo_social_instagram.c739d0f4.svg",57],["gui_logo_social_twitch.7b70d191.svg",58],["gui_logo_social_facebook.49d64ff1.svg",59],["gui_logo_social_youtube.67a8b5f2.svg",60],["gui_logo_social_twitter.16fe6c43.svg",61],["dj_gui_interaction_body_1.bbf3fd0a.svg",62],["dj_gui_interaction_body_33.aa77f538.svg",63],["dj_gui_interaction_body_2.6a51622f.svg",64],["dj_gui_interaction_body_3.076bd334.svg",65],["dj_gui_interaction_body_4.90ce343e.svg",66],["dj_gui_interaction_body_5.e6a6a210.svg",67],["dj_gui_interaction_body_6.48ab7016.svg",68],["dj_gui_interaction_body_7.455125b1.svg",69],["dj_gui_interaction_body_8.e8c1add5.svg",70],["dj_gui_interaction_body_9.99b89929.svg",71],["nownigel_gui_interaction_portfolio.c3814343.svg",72],["nownigel_gui_interaction_hands_0_0_depth_200.77ff1ef3.svg",73],["nownigel_gui_interaction_hands_0_0_depth_200_1.314e6745.svg",74],["nownigel_gui_interaction_hands_0_0_depth_200_2.46dfa5e2.svg",75],["nownigel_gui_interaction_hands_0_0_depth_200_3.984a275a.svg",76],["nownigel_gui_interaction_hands_0_0_depth_200_4.476ff273.svg",77],["nownigel_gui_interaction_hands_0_0_depth_200_5.7bc83dc8.svg",78],["nownigel_gui_interaction_hands_0_0_depth_200_6.d6377bb7.svg",79],["nownigel_gui_interaction_hands_0_0_depth_200_7.aa8759c3.svg",80],["nownigel_gui_interaction_hands_0_0_depth_200_8.2b4420b1.svg",81],["nownigel_gui_interaction_hands_0_0_depth_200_9.e9277d1b.svg",82],["nownigel_gui_interaction_hands_0_0_depth_200_10.c775defc.svg",83],["nownigel_gui_interaction_hands_0_0_depth_200_11.cf2c976f.svg",84],["nownigel_gui_interaction_hands_0_0_depth_200_12.78681f58.svg",85],["nownigel_gui_interaction_man_0_16_depth_25.33d0120c.svg",86],["nownigel_gui_interaction_man_0_16_depth_50.d4f1bdb0.svg",87],["nownigel_gui_interaction_man_0_16_depth_100.f139b2ad.svg",88],["nownigel_gui_interaction_man_0_16_depth_200.ef1e3677.svg",89],["nownigel_gui_interaction_man_0_16_depth_200_face_0.482feb09.svg",90],["nownigel_gui_interaction_man_0_16_depth_200_face_1.cf78fe84.svg",91],["nownigel_gui_interaction_man_0_16_depth_200_face_2.ed146d1a.svg",92],["nownigel_gui_interaction_man_0_16_depth_200_face_3.c4bedd18.svg",93],["nownigel_gui_interaction_man_0_16_depth_200_face_4.36deb49a.svg",94],["nownigel_gui_interaction_man_0_16_depth_200_face_5.45e04c3b.svg",95],["nownigel_gui_interaction_man_0_16_depth_200_face_6.ec2f5d09.svg",96],["nownigel_gui_interaction_man_0_16_depth_200_face_7.144f5aaf.svg",97],["nownigel_gui_interaction_man_0_16_depth_200_face_8.7491a258.svg",98],["nownigel_gui_interaction_man_0_16_depth_200_face_9.aec9e7ff.svg",99],["nownigel_gui_interaction_man_0_16_depth_200_face_10.c6df295b.svg",100],["nownigel_gui_interaction_man_0_16_depth_200_face_11.bfb690e2.svg",101],["nownigel_gui_interaction_man_0_16_depth_200_face_12.1be181ab.svg",102],["nownigel_gui_interaction_man_0_16_depth_200_face_13.e5c0f75c.svg",103],["nownigel_gui_interaction_man_0_16_depth_200_face_14.0f683b47.svg",104],["nownigel_gui_interaction_man_0_16_depth_200_face_15.b8319360.svg",105],["nownigel_gui_interaction_man_0_16_depth_200_face_16.c4781f9c.svg",106],["nownigel_gui_interaction_man_0_16_depth_200_face_17.360e7e58.svg",107],["nownigel_gui_interaction_man_0_16_depth_200_face_18.c60d435d.svg",108],["nownigel_gui_interaction_man_0_16_depth_200_face_19.877d301c.svg",109],["nownigel_gui_interaction_man_0_16_depth_200_face_20.0b79c8b6.svg",110],["nownigel_gui_interaction_man_0_16_depth_200_face_21.51951b57.svg",111],["nownigel_gui_interaction_man_0_16_depth_200_face_22.7581d64a.svg",112],["nownigel_gui_interaction_man_0_16_depth_200_face_23.857459b2.svg",113],["nownigel_gui_interaction_man_0_16_depth_200_face_24.58852979.svg",114],["nownigel_gui_interaction_man_0_16_depth_200_face_25.ab7e9382.svg",115],["nownigel_gui_interaction_man_0_16_depth_200_face_26.9c07727e.svg",116],["nownigel_gui_interaction_man_0_16_depth_200_face_27.e53993a3.svg",117],["nownigel_gui_interaction_man_0_16_depth_200_face_28.26b566bf.svg",118],["nownigel_gui_interaction_man_0_16_depth_200_face_29.c204db8b.svg",119],["nownigel_gui_interaction_man_0_16_depth_200_face_30.9402d2e6.svg",120],["nownigel_gui_interaction_man_0_16_depth_200_face_31.a39b5e24.svg",121],["nownigel_gui_interaction_man_0_16_depth_200_face_32.09529929.svg",122],["nownigel_gui_interaction_man_0_16_depth_200_face_33.a02fcabd.svg",123],["nownigel_gui_interaction_man_0_16_depth_200_face_34.844b9f3b.svg",124],["nownigel_gui_interaction_man_0_16_depth_200_face_35.cfd4ca88.svg",125],["nownigel_gui_interaction_man_0_16_depth_200_face_36.42214941.svg",126],["nownigel_gui_interaction_man_0_16_depth_200_face_37.9cbb07f7.svg",127],["nownigel_gui_interaction_man_0_16_depth_200_face_38.a60f7c7b.svg",128],["nownigel_gui_interaction_man_0_16_depth_200_face_39.252bc32d.svg",129],["nownigel_gui_interaction_man_0_16_depth_200_face_40.b428ef08.svg",130],["nownigel_gui_interaction_man_0_16_depth_200_face_41.f0843cf9.svg",131],["nownigel_gui_interaction_man_0_16_depth_200_face_42.05825702.svg",132],["nownigel_gui_interaction_man_0_16_depth_200_face_43.0abc662e.svg",133],["nownigel_gui_interaction_man_0_16_depth_200_face_44.bf8188cb.svg",134],["nownigel_gui_interaction_man_0_16_depth_200_face_45.2fde0bf3.svg",135],["nownigel_gui_interaction_man_0_16_depth_200_face_46.5f65d3bf.svg",137],["nownigel_gui_interaction_man_0_16_depth_200_face_47.14a8f4da.svg",136],["nownigel_gui_interaction_man_0_16_depth_200_face_48.80e1243f.svg",138],["nownigel_gui_interaction_man_0_16_depth_200_face_49.fd9fa260.svg",139],["nownigel_gui_interaction_man_0_16_depth_200_face_50.72eb9e43.svg",142],["nownigel_gui_interaction_man_0_16_depth_200_face_51.8b1fe2ac.svg",140],["nownigel_gui_interaction_man_0_16_depth_200_face_52.2161d83f.svg",141],["nownigel_gui_interaction_man_0_16_depth_200_face_53.5ad05d43.svg",143],["nownigel_gui_interaction_man_0_16_depth_200_face_54.6e5e54cf.svg",144],["nownigel_gui_interaction_man_0_16_depth_200_face_55.0befc20f.svg",145],["nownigel_gui_interaction_man_0_16_depth_200_face_56.5abe61e6.svg",146],["nownigel_gui_interaction_man_0_16_depth_200_face_57.eb20d122.svg",147],["nownigel_gui_interaction_man_0_16_depth_200_face_58.2c364802.svg",148],["nownigel_gui_interaction_man_0_16_depth_200_face_59.3050317c.svg",149],["nownigel_gui_interaction_man_0_16_depth_200_face_60.10a5a31a.svg",150],["nownigel_gui_interaction_man_0_16_depth_200_face_61.091c8b55.svg",151],["nownigel_gui_interaction_man_0_16_depth_200_face_62.82f75e9f.svg",153],["nownigel_gui_interaction_man_0_16_depth_200_face_63.0c6d67ab.svg",152],["nownigel_gui_interaction_man_0_16_depth_200_face_64.11779672.svg",154],["gui_interaction_man_0_0_depth_200.477ef884.svg",155],["gui_interaction_man_0_0_depth_200_phungi.d74f6e23.svg",171],["gui_paint_corner_center_1.3e7a5e16.svg",156],["gui_paint_corner_center_2.9637d154.svg",157],["gui_paint_corner_center_3.ecf1cedb.svg",158],["gui_paint_corner_bottom_left.41cc3063.svg",160],["gui_paint_corner_bottom_right.62511b8f.svg",159],["gui_paint_corner_top_left.bb510952.svg",161],["gui_paint_corner_top_right.f79494f9.svg",163],["gui_corner_top.80975f25.svg",162],["gui_corner_bottom.a1bb5d64.svg",164],["gui_corner_top_left.1407fea5.svg",166],["gui_corner_top_right.2235d18b.svg",165],["gui_corner_bottom_left.109bebb4.svg",167],["gui_corner_bottom_right.2aff6389.svg",168],["load_bar_1.9d593425.svg",169],["load_bar_2.0b089da5.svg",170],["load_bar_3.77e53a5d.svg",173],["load_bar_4.cc4ae03e.svg",172],["load_bar_5.39eeea8a.svg",174],["page_bottom_waves_1.15f07550.svg",175],["page_bottom_waves_2.2f451218.svg",176],["page_bottom_waves_3.62321383.svg",177],["page_bottom_waves_4.7a3e6aa4.svg",178],["gui_logo_bubble.f09bc581.svg",181],["gui_button_hire.180025e2.svg",179],["button_note.496e87cb.svg",180],["gui_since.63acaa03.svg",183],["move_note.28ee1d03.svg",182],["container_8.9b1d2530.svg",185],["container_9.3a59c04c.svg",184],["circle.1e401b70.svg",186],["gui_i.b26a3154.svg",187],["gui_close.8b2cc02c.svg",188],["gui_circle.19e6f57b.svg",189],["gui_menu.380885e6.svg",190],["gui_scroll.77355624.svg",191],["gui_logo.46404a27.svg",192],["gui_logo_knewest.44aebfff.svg",193],["gui_logo_phugazi.1b1083fd.svg",194],["gui_logo_coffee.c34177d1.svg",195],["gui_logo_fungi.c4770215.svg",196],["gui_logo_fish.8185a880.svg",197],["gui_logo_fly.c4347d45.svg",198],["gui_logo_maisiemaybe.a619145b.svg",199],["gui_logo_colorleague.004d4a2c.svg",200],["gui_arrow_left.7c26c412.svg",201],["gui_arrow_top_left.e184fc62.svg",202],["gui_arrow_down_left.4f0070c4.svg",203],["gui_arrow_top.341f9da7.svg",204],["gui_arrow_down.df687a81.svg",206],["gui_arrow_right.141be5a8.svg",205],["gui_arrow_top_right.f41fe8db.svg",207],["gui_arrow_down_right.1164338b.svg",209],["gui_logo_combo.55275c84.svg",208],["gui_logo_combo_layers.2f820859.svg",210],["gui_key.91469dd4.svg",211],["gui_keyhole.9f8317a1.svg",212],["grid_cross.4caecb18.svg",213],["grid_depth.4b8b418d.svg",214],["grid_depth_90.a8ed3f82.svg",215],["grid_depth_180.d227272f.svg",216],["grid_depth_270.65124451.svg",217],["grid_depth_360.a67cd17b.svg",218],["grid_depth_450.352953f3.svg",219],["grid_depth_540.c19cdb87.svg",220],["grid_depth_630.140c0e08.svg",221],["grid_depth_720.f4e9604a.svg",222],["grid_depth_90_floor.98616a1a.svg",223],["grid_depth_180_floor.2c939363.svg",224],["grid_depth_270_floor.84b14e87.svg",225],["grid_depth_360_floor.bdb2df2f.svg",226],["grid_depth_450_floor.8ba5b2d5.svg",227],["grid_depth_540_floor.29e44f68.svg",228],["grid_depth_630_floor.6670a334.svg",229],["grid_depth_720_floor.c3cc51ce.svg",230],["piece_workspace.c57d29b4.svg",231],["piece_workspace_1.c1f22cf7.svg",232],["piece_workspace_2.f067afbe.svg",233],["piece_workspace_3.08e627b6.svg",234],["piece_workspace_4.9fb1661c.svg",235],["piece_workspace_5.aedad9fd.svg",236],["piece_workspace_6.af11a6d2.svg",237],["piece_workspace_desk.0fab5e10.svg",238],["piece_workspace_macbook.a217c16d.svg",239],["piece_workspace_monitor.0b10886f.svg",240],["piece_workspace_imac.3b976c2d.svg",241],["piece_workspace_imac_on.9d1ab936.svg",242],["piece_workspace_books_1_0_0.dd99096e.svg",243],["piece_workspace_books_2_0_0.b430ace8.svg",244],["piece_workspace_chair_1_0_0.5d4ebef0.svg",245],["piece_workspace_chair_2_0_0.bddfc4fb.svg",246],["piece_workspace_chair_sitting_0_0.c3e0ed63.svg",247],["piece_workspace_desk_0_0.3d06bd34.svg",248],["piece_workspace_imac_0_0.74d5d0dc.svg",249],["piece_workspace_mic_0_0.909d4c55.svg",250],["piece_workspace_monitor_0_0.bf7d3915.svg",251],["piece_workspace_scarlett_0_0.fe7384cf.svg",252],["piece_workspace_speaker_1_0_0.fef26622.svg",253],["piece_workspace_speaker_2_0_0.c8e209c9.svg",254],["piece_workspace_speaker_3_0_0.95629842.svg",255],["pieces_office_shoplight_on_bg.da0bc172.svg",256],["pieces_office_shoplight_off.5995e789.svg",257],["pieces_office_shoplight_on.9bde2234.svg",258],["piece_desk_mg.78451a18.svg",259],["piece_desk_bg.cc581252.svg",260],["interaction_hands.3e753e5b.svg",261],["interaction_options.e48983d5.svg",262],["interaction_hand.0093540c.svg",263],["accent_noise_1.d5da8a76.svg",264],["accent_noise_2.7c6f6921.svg",265],["accent_noise_3.c83dc356.svg",266],["accent_noise_4.161f22f8.svg",267],["gui_logo_type.07c39222.svg",268],["gui_logo_buttons.0c316692.svg",269],["gui_enter_buttons.d51f3754.svg",270],["gui_hand_up.119e77f8.svg",271],["gui_start_buttons.2fc2ff21.svg",272],["gui_or.60a78a11.svg",273],["gui_learn_buttons.3343e8ed.svg",274],["gui_button_help.281676f5.svg",275],["gui_button_register.74b33ca6.svg",276],["gui_learn_buttons_login.d24b3880.svg",277],["gui_learn_buttons_sign_up.53243f01.svg",278],["gui_learn_buttons_sign_out.c78fff57.svg",279],["hands.90fc2cf5.svg",280],["stage_floor.8e483397.svg",281],["stage_door_closed.7da39e54.svg",282],["stage_door_opened.e1d9544e.svg",283],["stage_wall.9ebad8f0.svg",284],["stage_lines.66ef0cdb.svg",285],["gui_particles_computer_corner.6f42bbb4.svg",286],["gui_particles_computer_corner_closeup.84c5877f.svg",287],["gui_particles_computer_corner_closeup_white.3016b49f.svg",288],["effect_vignette.26d6f94b.svg",289],["angular.d50db73a.svg",295],["instagram_handdrawn.02b852bd.svg",296],["twitch_handdrawn.15716aa5.svg",297],["twitter_handdrawn.e94c421e.svg",298],["youtube_handdrawn.75a96356.svg",299],["facebook_handdrawn.bbe6d759.svg",300],["search_handdrawn.dbb5b85a.svg",301],["nownigel_icon_social_home.8efddafc.svg",302],["home_type.e2ecc837.svg",303],["team_type.8af5a1d6.svg",304],["library_type.e5806c45.svg",306],["partners_type.48e85341.svg",305],["services_type.275b2135.svg",307],["workshop_type.4ff7b443.svg",308],["abilities_type.4c2ba627.svg",309],["about_type.8ca411a2.svg",310],["gui_cursor_handdrawn.80f2f56a.svg",290],["gui_cursor_handdrawn_active.3722352a.svg",291]]);
},{}]},{},[321,0], null)