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
})({941:[function(require,module,exports) {
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
},{}],932:[function(require,module,exports) {
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
},{"./bundle-url":941}],5:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./assets/fonts/Amatic-SC/AmaticSC-Regular.ttf":606,"./assets/fonts/Amatic-SC/amaticsc-regular-webfont.woff2":607,"./assets/fonts/Amatic-SC/amaticsc-regular-webfont.woff":608,"./assets/svg/pageend2-9bottomright.svg":318,"./assets/svg/pageend2-9bottomleft.svg":319,"./assets/svg/pageend2-9topright.svg":320,"./assets/svg/pageend2-9topleft.svg":321,"./assets/gui/gui_bg_corner_top_left.svg":322,"./assets/gui/gui_qr.svg":323,"./assets/gui/gui_qr_icon.svg":324,"./assets/gui/search.svg":325,"./assets/gui/create.svg":326,"./assets/gui/gui_paint_top.svg":327,"./assets/gui/gui_paint_bottom.svg":328,"./assets/gui/gui_paint_right.svg":329,"./assets/gui/gui_paint_left.svg":330,"./assets/gui/gui_paint_1.svg":331,"./assets/gui/gui_paint_2.svg":332,"./assets/gui/gui_paint_3.svg":333,"./assets/gui/gui_paint_4.svg":334,"./assets/gui/gui_paint_5.svg":335,"./assets/gui/gui_paint_6.svg":336,"./assets/gui/gui_paint_7.svg":337,"./assets/gui/gui_paint_8.svg":338,"./assets/gui/gui_machines.svg":339,"./assets/gui/nownigel_gui_logo_combo.svg":340,"./assets/gui/nownigel_gui_logo_mark.svg":341,"./assets/gui/nownigel_gui_logo_mark_only.svg":342,"./assets/gui/nownigel_gui_logo_buttons.svg":343,"./assets/gui/nownigel_gui_logo_type.svg":344,"./assets/gui/nownigel_gui_logo_type_light.svg":345,"./assets/gui/gui_logo_type_light.svg":346,"./assets/gui/gui_logo_type_light_1.svg":347,"./assets/gui/gui_logo_type_light_2.svg":348,"./assets/gui/gui_logo_type_light_3.svg":349,"./assets/gui/gui_logo_type_light_4.svg":350,"./assets/gui/gui_logo_type_light_5.svg":351,"./assets/gui/gui_logo_type_light_6.svg":352,"./assets/gui/gui_logo_type_light_7.svg":353,"./assets/gui/gui_logo_type_light_8.svg":354,"./assets/gui/gui_audio.svg":355,"./assets/gui/gui_line_top_left.svg":356,"./assets/gui/gui_line_bottom_left.svg":357,"./assets/gui/gui_line_bottom_right.svg":358,"./assets/gui/gui_line_top_right.svg":359,"./assets/gui/gui_audio_on.svg":360,"./assets/gui/gui_audio_off.svg":361,"./assets/gui/gui_logo_links.svg":362,"./assets/gui/gui_logo_words.svg":363,"./assets/gui/location.svg":364,"./assets/gui/dj_body_1.svg":365,"./assets/gui/dj_body_2.svg":366,"./assets/gui/imac.svg":367,"./assets/gui/camera.svg":368,"./assets/gui/gui_logo_navs.svg":369,"./assets/gui/gui_logo_socials.svg":370,"./assets/gui/gui_logo_social_instagram.svg":371,"./assets/gui/gui_logo_social_twitch.svg":372,"./assets/gui/gui_logo_social_facebook.svg":373,"./assets/gui/gui_logo_social_youtube.svg":374,"./assets/gui/gui_logo_social_twitter.svg":375,"./assets/gui/dj_gui_interaction_body_1.svg":376,"./assets/gui/dj_gui_interaction_body_33.svg":377,"./assets/gui/dj_gui_interaction_body_2.svg":378,"./assets/gui/dj_gui_interaction_body_3.svg":379,"./assets/gui/dj_gui_interaction_body_4.svg":380,"./assets/gui/dj_gui_interaction_body_5.svg":381,"./assets/gui/dj_gui_interaction_body_6.svg":382,"./assets/gui/dj_gui_interaction_body_7.svg":383,"./assets/gui/dj_gui_interaction_body_8.svg":384,"./assets/gui/dj_gui_interaction_body_9.svg":385,"./assets/gui/nownigel_gui_interaction_portfolio.svg":386,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200.svg":387,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_1.svg":388,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_2.svg":389,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_3.svg":390,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_4.svg":391,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_5.svg":392,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_6.svg":393,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_7.svg":394,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_8.svg":395,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_9.svg":396,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_10.svg":397,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_11.svg":398,"./assets/gui/nownigel_gui_interaction_hands_0_0_depth_200_12.svg":399,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_25.svg":400,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_50.svg":401,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_100.svg":402,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200.svg":403,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_0.svg":404,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_1.svg":405,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_2.svg":406,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_3.svg":407,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_4.svg":408,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_5.svg":409,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_6.svg":410,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_7.svg":411,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_8.svg":412,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_9.svg":413,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_10.svg":414,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_11.svg":415,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_12.svg":416,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_13.svg":417,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_14.svg":418,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_15.svg":419,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_16.svg":420,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_17.svg":421,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_18.svg":422,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_19.svg":423,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_20.svg":424,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_21.svg":425,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_22.svg":426,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_23.svg":427,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_24.svg":428,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_25.svg":429,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_26.svg":430,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_27.svg":431,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_28.svg":432,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_29.svg":433,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_30.svg":434,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_31.svg":435,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_32.svg":436,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_33.svg":437,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_34.svg":438,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_35.svg":439,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_36.svg":440,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_37.svg":441,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_38.svg":442,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_39.svg":443,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_40.svg":444,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_41.svg":445,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_42.svg":446,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_43.svg":447,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_44.svg":448,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_45.svg":449,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_46.svg":450,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_47.svg":451,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_48.svg":452,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_49.svg":453,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_50.svg":454,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_51.svg":455,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_52.svg":456,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_53.svg":457,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_54.svg":458,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_55.svg":459,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_56.svg":460,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_57.svg":461,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_58.svg":462,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_59.svg":463,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_60.svg":464,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_61.svg":465,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_62.svg":466,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_63.svg":467,"./assets/gui/nownigel_gui_interaction_man_0_16_depth_200_face_64.svg":468,"./assets/gui/gui_interaction_man_0_0_depth_200.svg":469,"./assets/gui/gui_interaction_man_0_0_depth_200_phungi.svg":470,"./assets/gui/gui_paint_corner_center_1.svg":471,"./assets/gui/gui_paint_corner_center_2.svg":472,"./assets/gui/gui_paint_corner_center_3.svg":473,"./assets/gui/gui_paint_corner_bottom_left.svg":474,"./assets/gui/gui_paint_corner_bottom_right.svg":475,"./assets/gui/gui_paint_corner_top_left.svg":476,"./assets/gui/gui_paint_corner_top_right.svg":477,"./assets/gui/gui_corner_top.svg":478,"./assets/gui/gui_corner_bottom.svg":479,"./assets/gui/gui_corner_top_left.svg":480,"./assets/gui/gui_corner_top_right.svg":481,"./assets/gui/gui_corner_bottom_left.svg":482,"./assets/gui/gui_corner_bottom_right.svg":483,"./assets/gui/load_bar_1.svg":484,"./assets/gui/load_bar_2.svg":485,"./assets/gui/load_bar_3.svg":486,"./assets/gui/load_bar_4.svg":487,"./assets/gui/load_bar_5.svg":488,"./assets/gui/page_bottom_waves_1.svg":489,"./assets/gui/page_bottom_waves_2.svg":490,"./assets/gui/page_bottom_waves_3.svg":491,"./assets/gui/page_bottom_waves_4.svg":492,"./assets/gui/gui_logo_bubble.svg":493,"./assets/gui/gui_button_hire.svg":494,"./assets/gui/button_note.svg":495,"./assets/gui/gui_since.svg":496,"./assets/gui/move_note.svg":497,"./assets/gui/container_8.svg":498,"./assets/gui/container_9.svg":499,"./assets/gui/circle.svg":500,"./assets/gui/gui_i.svg":501,"./assets/gui/gui_close.svg":502,"./assets/gui/gui_circle.svg":503,"./assets/gui/gui_menu.svg":504,"./assets/gui/gui_scroll.svg":505,"./assets/gui/gui_logo.svg":506,"./assets/gui/gui_logo_knewest.svg":507,"./assets/gui/gui_logo_phugazi.svg":508,"./assets/gui/gui_logo_coffee.svg":509,"./assets/gui/gui_logo_fungi.svg":510,"./assets/gui/gui_logo_fish.svg":511,"./assets/gui/gui_logo_fly.svg":512,"./assets/gui/gui_logo_maisiemaybe.svg":513,"./assets/gui/gui_logo_colorleague.svg":514,"./assets/gui/gui_arrow_left.svg":515,"./assets/gui/gui_arrow_top_left.svg":516,"./assets/gui/gui_arrow_down_left.svg":517,"./assets/gui/gui_arrow_top.svg":518,"./assets/gui/gui_arrow_down.svg":519,"./assets/gui/gui_arrow_right.svg":520,"./assets/gui/gui_arrow_top_right.svg":521,"./assets/gui/gui_arrow_down_right.svg":522,"./assets/gui/gui_logo_combo.svg":523,"./assets/gui/gui_logo_combo_layers.svg":524,"./assets/gui/gui_key.svg":525,"./assets/gui/gui_keyhole.svg":526,"./assets/grid/grid_cross.svg":527,"./assets/grid/grid_depth.svg":528,"./assets/grid/grid_depth_90.svg":529,"./assets/grid/grid_depth_180.svg":530,"./assets/grid/grid_depth_270.svg":531,"./assets/grid/grid_depth_360.svg":532,"./assets/grid/grid_depth_450.svg":533,"./assets/grid/grid_depth_540.svg":534,"./assets/grid/grid_depth_630.svg":535,"./assets/grid/grid_depth_720.svg":536,"./assets/grid/grid_depth_90_floor.svg":537,"./assets/grid/grid_depth_180_floor.svg":538,"./assets/grid/grid_depth_270_floor.svg":539,"./assets/grid/grid_depth_360_floor.svg":540,"./assets/grid/grid_depth_450_floor.svg":541,"./assets/grid/grid_depth_540_floor.svg":542,"./assets/grid/grid_depth_630_floor.svg":543,"./assets/grid/grid_depth_720_floor.svg":544,"./assets/pieces/piece_workspace.svg":545,"./assets/pieces/piece_workspace_1.svg":546,"./assets/pieces/piece_workspace_2.svg":547,"./assets/pieces/piece_workspace_3.svg":548,"./assets/pieces/piece_workspace_4.svg":549,"./assets/pieces/piece_workspace_5.svg":550,"./assets/pieces/piece_workspace_6.svg":551,"./assets/pieces/piece_workspace_desk.svg":552,"./assets/pieces/piece_workspace_macbook.svg":553,"./assets/pieces/piece_workspace_monitor.svg":554,"./assets/pieces/piece_workspace_imac.svg":555,"./assets/pieces/piece_workspace_imac_on.svg":556,"./assets/pieces/piece_workspace_books_1_0_0.svg":557,"./assets/pieces/piece_workspace_books_2_0_0.svg":558,"./assets/pieces/piece_workspace_chair_1_0_0.svg":559,"./assets/pieces/piece_workspace_chair_2_0_0.svg":560,"./assets/pieces/piece_workspace_chair_sitting_0_0.svg":561,"./assets/pieces/piece_workspace_desk_0_0.svg":562,"./assets/pieces/piece_workspace_imac_0_0.svg":563,"./assets/pieces/piece_workspace_mic_0_0.svg":564,"./assets/pieces/piece_workspace_monitor_0_0.svg":565,"./assets/pieces/piece_workspace_scarlett_0_0.svg":566,"./assets/pieces/piece_workspace_speaker_1_0_0.svg":567,"./assets/pieces/piece_workspace_speaker_2_0_0.svg":568,"./assets/pieces/piece_workspace_speaker_3_0_0.svg":569,"./assets/pieces/pieces_office_shoplight_on_bg.svg":570,"./assets/pieces/pieces_office_shoplight_off.svg":571,"./assets/pieces/pieces_office_shoplight_on.svg":572,"./assets/pieces/piece_desk_mg.svg":573,"./assets/pieces/piece_desk_bg.svg":574,"./assets/interaction/interaction_hands.svg":575,"./assets/interaction/interaction_options.svg":576,"./assets/interaction/interaction_hand.svg":577,"./assets/accent/accent_noise_1.svg":578,"./assets/accent/accent_noise_2.svg":579,"./assets/accent/accent_noise_3.svg":580,"./assets/accent/accent_noise_4.svg":581,"./assets/gui/gui_logo_type.svg":582,"./assets/gui/gui_logo_buttons.svg":583,"./assets/gui/gui_enter_buttons.svg":584,"./assets/gui/gui_hand_up.svg":585,"./assets/gui/gui_start_buttons.svg":586,"./assets/gui/gui_or.svg":587,"./assets/gui/gui_learn_buttons.svg":588,"./assets/gui/gui_button_help.svg":589,"./assets/gui/gui_button_register.svg":590,"./assets/gui/gui_learn_buttons_login.svg":591,"./assets/gui/gui_learn_buttons_sign_up.svg":592,"./assets/gui/gui_learn_buttons_sign_out.svg":593,"./assets/gui/hands.svg":594,"./assets/gui/stage_floor.svg":595,"./assets/gui/stage_door_closed.svg":596,"./assets/gui/stage_door_opened.svg":597,"./assets/gui/stage_wall.svg":598,"./assets/gui/stage_lines.svg":599,"./assets/gui/gui_particles_computer_corner.svg":600,"./assets/gui/gui_particles_computer_corner_closeup.svg":601,"./assets/gui/gui_particles_computer_corner_closeup_white.svg":602,"./assets/effect/effect_vignette.svg":603,"./assets/icons/tools/angular.svg":624,"./assets/icons/social/instagram_handdrawn.svg":609,"./assets/icons/social/twitch_handdrawn.svg":610,"./assets/icons/social/twitter_handdrawn.svg":611,"./assets/icons/social/youtube_handdrawn.svg":612,"./assets/icons/social/facebook_handdrawn.svg":613,"./assets/icons/social/search_handdrawn.svg":614,"./assets/icons/social/nownigel_icon_social_home.svg":615,"./assets/icons/social/home_type.svg":616,"./assets/icons/social/team_type.svg":617,"./assets/icons/social/library_type.svg":618,"./assets/icons/social/partners_type.svg":619,"./assets/icons/social/services_type.svg":620,"./assets/icons/social/workshop_type.svg":621,"./assets/icons/social/abilities_type.svg":622,"./assets/icons/social/about_type.svg":623,"./assets/gui/gui_cursor_handdrawn.svg":604,"./assets/gui/gui_cursor_handdrawn_active.svg":605,"_css_loader":932}],942:[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '57057' + '/');
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
},{}],943:[function(require,module,exports) {
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
},{"./bundle-url":941}],0:[function(require,module,exports) {
var b=require(943);b.load([["AmaticSC-Regular.a7427bf9.ttf",606],["amaticsc-regular-webfont.0bd45f5a.woff2",607],["amaticsc-regular-webfont.4868b59a.woff",608],["pageend2-9bottomright.5035c960.svg",318],["pageend2-9bottomleft.b05388b9.svg",319],["pageend2-9topright.695a0601.svg",320],["pageend2-9topleft.7fa425eb.svg",321],["gui_bg_corner_top_left.59446fd4.svg",322],["gui_qr.b29fefac.svg",323],["gui_qr_icon.b68e460c.svg",324],["search.2de9b038.svg",325],["create.32f9962f.svg",326],["gui_paint_top.f3d0d5c6.svg",327],["gui_paint_bottom.8304a0ac.svg",328],["gui_paint_right.30f23b36.svg",329],["gui_paint_left.a77e35db.svg",330],["gui_paint_1.772614e6.svg",331],["gui_paint_2.41c896f0.svg",332],["gui_paint_3.172436a9.svg",333],["gui_paint_4.70e34781.svg",334],["gui_paint_5.18a7ba39.svg",335],["gui_paint_6.3109c3e8.svg",336],["gui_paint_7.5a536956.svg",337],["gui_paint_8.13ae182c.svg",338],["gui_machines.fc1e06f7.svg",339],["nownigel_gui_logo_combo.14f67354.svg",340],["nownigel_gui_logo_mark.1641d7b5.svg",341],["nownigel_gui_logo_mark_only.5d44b99e.svg",342],["nownigel_gui_logo_buttons.7adf4e3d.svg",343],["nownigel_gui_logo_type.31f28a27.svg",344],["nownigel_gui_logo_type_light.8da92693.svg",345],["gui_logo_type_light.c9afa83f.svg",346],["gui_logo_type_light_1.d522dc34.svg",347],["gui_logo_type_light_2.ef9d549a.svg",348],["gui_logo_type_light_3.4e168579.svg",349],["gui_logo_type_light_4.d8f11fed.svg",350],["gui_logo_type_light_5.b5788d6e.svg",351],["gui_logo_type_light_6.943d8bd7.svg",352],["gui_logo_type_light_7.5226653e.svg",353],["gui_logo_type_light_8.18ba9266.svg",354],["gui_audio.b24c69d1.svg",355],["gui_line_top_left.26efa96b.svg",356],["gui_line_bottom_left.639de980.svg",357],["gui_line_bottom_right.387ad904.svg",358],["gui_line_top_right.a64a657c.svg",359],["gui_audio_on.44e32a3e.svg",360],["gui_audio_off.b254e2ce.svg",361],["gui_logo_links.be73ff85.svg",362],["gui_logo_words.7f0b5983.svg",363],["location.9e8a0cdc.svg",364],["dj_body_1.85eb8ba6.svg",365],["dj_body_2.2bce08f3.svg",366],["imac.eef77f0e.svg",367],["camera.ae99811e.svg",368],["gui_logo_navs.a20204f4.svg",369],["gui_logo_socials.0896e80f.svg",370],["gui_logo_social_instagram.98e62615.svg",371],["gui_logo_social_twitch.f85669e9.svg",372],["gui_logo_social_facebook.5da5e3bb.svg",373],["gui_logo_social_youtube.6ec89445.svg",374],["gui_logo_social_twitter.4fd39326.svg",375],["dj_gui_interaction_body_1.fd9d3184.svg",376],["dj_gui_interaction_body_33.7861e25f.svg",377],["dj_gui_interaction_body_2.cbda56e7.svg",378],["dj_gui_interaction_body_3.04c578ce.svg",379],["dj_gui_interaction_body_4.11303395.svg",380],["dj_gui_interaction_body_5.4f25d67d.svg",381],["dj_gui_interaction_body_6.bf29fcc4.svg",382],["dj_gui_interaction_body_7.de69128f.svg",383],["dj_gui_interaction_body_8.327adb38.svg",384],["dj_gui_interaction_body_9.d06827ca.svg",385],["nownigel_gui_interaction_portfolio.cd467b2e.svg",386],["nownigel_gui_interaction_hands_0_0_depth_200.fb868b2a.svg",387],["nownigel_gui_interaction_hands_0_0_depth_200_1.65ad96a6.svg",388],["nownigel_gui_interaction_hands_0_0_depth_200_2.b416f2db.svg",389],["nownigel_gui_interaction_hands_0_0_depth_200_3.9bc3e497.svg",390],["nownigel_gui_interaction_hands_0_0_depth_200_4.306d5a29.svg",391],["nownigel_gui_interaction_hands_0_0_depth_200_5.47366608.svg",392],["nownigel_gui_interaction_hands_0_0_depth_200_6.f0cbb5ff.svg",393],["nownigel_gui_interaction_hands_0_0_depth_200_7.1ea0dd8f.svg",394],["nownigel_gui_interaction_hands_0_0_depth_200_8.42e515ac.svg",395],["nownigel_gui_interaction_hands_0_0_depth_200_9.056ed0ec.svg",396],["nownigel_gui_interaction_hands_0_0_depth_200_10.c9ac5833.svg",397],["nownigel_gui_interaction_hands_0_0_depth_200_11.7fc5c7ac.svg",398],["nownigel_gui_interaction_hands_0_0_depth_200_12.a54781d5.svg",399],["nownigel_gui_interaction_man_0_16_depth_25.8312f021.svg",400],["nownigel_gui_interaction_man_0_16_depth_50.8026bd31.svg",401],["nownigel_gui_interaction_man_0_16_depth_100.07d00adf.svg",402],["nownigel_gui_interaction_man_0_16_depth_200.caf74336.svg",403],["nownigel_gui_interaction_man_0_16_depth_200_face_0.e1d0b027.svg",404],["nownigel_gui_interaction_man_0_16_depth_200_face_1.e2ec6044.svg",405],["nownigel_gui_interaction_man_0_16_depth_200_face_2.e81ba13a.svg",406],["nownigel_gui_interaction_man_0_16_depth_200_face_3.1791ea61.svg",407],["nownigel_gui_interaction_man_0_16_depth_200_face_4.313500bd.svg",408],["nownigel_gui_interaction_man_0_16_depth_200_face_5.6c0f4021.svg",409],["nownigel_gui_interaction_man_0_16_depth_200_face_6.10055a25.svg",410],["nownigel_gui_interaction_man_0_16_depth_200_face_7.ebe77aa5.svg",411],["nownigel_gui_interaction_man_0_16_depth_200_face_8.dc89ebf8.svg",412],["nownigel_gui_interaction_man_0_16_depth_200_face_9.01534821.svg",413],["nownigel_gui_interaction_man_0_16_depth_200_face_10.052b49dd.svg",414],["nownigel_gui_interaction_man_0_16_depth_200_face_11.0ceda726.svg",415],["nownigel_gui_interaction_man_0_16_depth_200_face_12.4b911816.svg",416],["nownigel_gui_interaction_man_0_16_depth_200_face_13.abd3bf04.svg",417],["nownigel_gui_interaction_man_0_16_depth_200_face_14.ce5859cf.svg",418],["nownigel_gui_interaction_man_0_16_depth_200_face_15.72ff0192.svg",419],["nownigel_gui_interaction_man_0_16_depth_200_face_16.430f1929.svg",420],["nownigel_gui_interaction_man_0_16_depth_200_face_17.663ff9aa.svg",421],["nownigel_gui_interaction_man_0_16_depth_200_face_18.b82e42ea.svg",422],["nownigel_gui_interaction_man_0_16_depth_200_face_19.f10ba9b3.svg",423],["nownigel_gui_interaction_man_0_16_depth_200_face_20.feb38e54.svg",424],["nownigel_gui_interaction_man_0_16_depth_200_face_21.17e27adb.svg",425],["nownigel_gui_interaction_man_0_16_depth_200_face_22.31d2fcf0.svg",426],["nownigel_gui_interaction_man_0_16_depth_200_face_23.2b3f8581.svg",427],["nownigel_gui_interaction_man_0_16_depth_200_face_24.669b5c2a.svg",428],["nownigel_gui_interaction_man_0_16_depth_200_face_25.5733a07d.svg",429],["nownigel_gui_interaction_man_0_16_depth_200_face_26.e44dab31.svg",430],["nownigel_gui_interaction_man_0_16_depth_200_face_27.780c3adc.svg",431],["nownigel_gui_interaction_man_0_16_depth_200_face_28.5e78c997.svg",432],["nownigel_gui_interaction_man_0_16_depth_200_face_29.10843e2c.svg",433],["nownigel_gui_interaction_man_0_16_depth_200_face_30.4492dc36.svg",434],["nownigel_gui_interaction_man_0_16_depth_200_face_31.f95c3a1a.svg",435],["nownigel_gui_interaction_man_0_16_depth_200_face_32.e2e9d068.svg",436],["nownigel_gui_interaction_man_0_16_depth_200_face_33.1d52143f.svg",437],["nownigel_gui_interaction_man_0_16_depth_200_face_34.38797ea9.svg",438],["nownigel_gui_interaction_man_0_16_depth_200_face_35.04d2ee0f.svg",439],["nownigel_gui_interaction_man_0_16_depth_200_face_36.59a1f4b0.svg",440],["nownigel_gui_interaction_man_0_16_depth_200_face_37.cf3cf639.svg",441],["nownigel_gui_interaction_man_0_16_depth_200_face_38.ad720938.svg",442],["nownigel_gui_interaction_man_0_16_depth_200_face_39.b31ef497.svg",443],["nownigel_gui_interaction_man_0_16_depth_200_face_40.2492b15e.svg",444],["nownigel_gui_interaction_man_0_16_depth_200_face_41.3e483a64.svg",445],["nownigel_gui_interaction_man_0_16_depth_200_face_42.0d2aec07.svg",446],["nownigel_gui_interaction_man_0_16_depth_200_face_43.15c1fba6.svg",447],["nownigel_gui_interaction_man_0_16_depth_200_face_44.bfe1412e.svg",448],["nownigel_gui_interaction_man_0_16_depth_200_face_45.335388c4.svg",449],["nownigel_gui_interaction_man_0_16_depth_200_face_46.2d199667.svg",450],["nownigel_gui_interaction_man_0_16_depth_200_face_47.bce28b29.svg",451],["nownigel_gui_interaction_man_0_16_depth_200_face_48.7a5f7dac.svg",452],["nownigel_gui_interaction_man_0_16_depth_200_face_49.52ff3142.svg",453],["nownigel_gui_interaction_man_0_16_depth_200_face_50.9d27f24b.svg",454],["nownigel_gui_interaction_man_0_16_depth_200_face_51.e3d456ca.svg",455],["nownigel_gui_interaction_man_0_16_depth_200_face_52.b66eee06.svg",456],["nownigel_gui_interaction_man_0_16_depth_200_face_53.962b30fe.svg",457],["nownigel_gui_interaction_man_0_16_depth_200_face_54.ea7eb2a5.svg",458],["nownigel_gui_interaction_man_0_16_depth_200_face_55.4fb70404.svg",459],["nownigel_gui_interaction_man_0_16_depth_200_face_56.8b6bbb14.svg",460],["nownigel_gui_interaction_man_0_16_depth_200_face_57.09b67538.svg",461],["nownigel_gui_interaction_man_0_16_depth_200_face_58.dfe92e27.svg",462],["nownigel_gui_interaction_man_0_16_depth_200_face_59.92b4f5a7.svg",463],["nownigel_gui_interaction_man_0_16_depth_200_face_60.84c937a9.svg",464],["nownigel_gui_interaction_man_0_16_depth_200_face_61.13ebc7cc.svg",465],["nownigel_gui_interaction_man_0_16_depth_200_face_62.379d39e2.svg",466],["nownigel_gui_interaction_man_0_16_depth_200_face_63.f0a6c199.svg",467],["nownigel_gui_interaction_man_0_16_depth_200_face_64.4e45eb75.svg",468],["gui_interaction_man_0_0_depth_200.3f5f45ed.svg",469],["gui_interaction_man_0_0_depth_200_phungi.42176b92.svg",470],["gui_paint_corner_center_1.b83961fa.svg",471],["gui_paint_corner_center_2.9eaf0fb8.svg",472],["gui_paint_corner_center_3.7487e331.svg",473],["gui_paint_corner_bottom_left.bfd7a87c.svg",474],["gui_paint_corner_bottom_right.dd73e7e0.svg",475],["gui_paint_corner_top_left.357fb30a.svg",476],["gui_paint_corner_top_right.7a58e3da.svg",477],["gui_corner_top.4ae87527.svg",478],["gui_corner_bottom.56d43666.svg",479],["gui_corner_top_left.60cf4c1e.svg",480],["gui_corner_top_right.12500c5e.svg",481],["gui_corner_bottom_left.2324e473.svg",482],["gui_corner_bottom_right.47424ff9.svg",483],["load_bar_1.8a0cb9a9.svg",484],["load_bar_2.516d370d.svg",485],["load_bar_3.d97f6712.svg",486],["load_bar_4.7ba5ed06.svg",487],["load_bar_5.af9e712c.svg",488],["page_bottom_waves_1.fcc4dfb0.svg",489],["page_bottom_waves_2.3a83bc51.svg",490],["page_bottom_waves_3.6b2b7209.svg",491],["page_bottom_waves_4.36272bed.svg",492],["gui_logo_bubble.91de88fd.svg",493],["gui_button_hire.ca9593d8.svg",494],["button_note.3cc8e5e6.svg",495],["gui_since.f006c85d.svg",496],["move_note.ebadd3ed.svg",497],["container_8.b3467235.svg",498],["container_9.25c583dd.svg",499],["circle.82c6338b.svg",500],["gui_i.fe995a37.svg",501],["gui_close.b32fe0ad.svg",502],["gui_circle.449b8df2.svg",503],["gui_menu.b6748b4c.svg",504],["gui_scroll.f2e00e05.svg",505],["gui_logo.2e91ed4f.svg",506],["gui_logo_knewest.61e720eb.svg",507],["gui_logo_phugazi.bbfb5dcc.svg",508],["gui_logo_coffee.2e7c75a0.svg",509],["gui_logo_fungi.28f1ffec.svg",510],["gui_logo_fish.6506a0ba.svg",511],["gui_logo_fly.184cfc1c.svg",512],["gui_logo_maisiemaybe.ceb3a960.svg",513],["gui_logo_colorleague.0117bfb9.svg",514],["gui_arrow_left.cc77e66e.svg",515],["gui_arrow_top_left.2998403b.svg",516],["gui_arrow_down_left.ee790967.svg",517],["gui_arrow_top.7c710da1.svg",518],["gui_arrow_down.e25053b7.svg",519],["gui_arrow_right.f38f4a33.svg",520],["gui_arrow_top_right.5abe7b30.svg",521],["gui_arrow_down_right.98f78dfe.svg",522],["gui_logo_combo.222c7a09.svg",523],["gui_logo_combo_layers.ef195199.svg",524],["gui_key.05349a6e.svg",525],["gui_keyhole.0d7d7d17.svg",526],["grid_cross.98808e33.svg",527],["grid_depth.a1d2c155.svg",528],["grid_depth_90.385456e1.svg",529],["grid_depth_180.425578bb.svg",530],["grid_depth_270.bd8bb59f.svg",531],["grid_depth_360.132ef2b2.svg",532],["grid_depth_450.b1d974d1.svg",533],["grid_depth_540.8b011be3.svg",534],["grid_depth_630.8e9f85c1.svg",535],["grid_depth_720.25c06a1e.svg",536],["grid_depth_90_floor.23fd2a16.svg",537],["grid_depth_180_floor.9cb945b2.svg",538],["grid_depth_270_floor.b184322a.svg",539],["grid_depth_360_floor.8bc27e07.svg",540],["grid_depth_450_floor.7ffa8205.svg",541],["grid_depth_540_floor.491f27d4.svg",542],["grid_depth_630_floor.bbaa99fa.svg",543],["grid_depth_720_floor.f81099d7.svg",544],["piece_workspace.a70942e3.svg",545],["piece_workspace_1.a308aaae.svg",546],["piece_workspace_2.d3b32a77.svg",547],["piece_workspace_3.29b93af5.svg",548],["piece_workspace_4.8c686113.svg",549],["piece_workspace_5.49650ce8.svg",550],["piece_workspace_6.1931d8ba.svg",551],["piece_workspace_desk.8143760f.svg",552],["piece_workspace_macbook.b897aa9d.svg",553],["piece_workspace_monitor.6232d1e5.svg",554],["piece_workspace_imac.3061f03d.svg",555],["piece_workspace_imac_on.378b1b1c.svg",556],["piece_workspace_books_1_0_0.da27e637.svg",557],["piece_workspace_books_2_0_0.c63da17c.svg",558],["piece_workspace_chair_1_0_0.2ef6137e.svg",559],["piece_workspace_chair_2_0_0.ae1a8d6d.svg",560],["piece_workspace_chair_sitting_0_0.dbb76f5c.svg",561],["piece_workspace_desk_0_0.da20ea7c.svg",562],["piece_workspace_imac_0_0.6b4c2f6e.svg",563],["piece_workspace_mic_0_0.7e9e5d6b.svg",564],["piece_workspace_monitor_0_0.d19c0f13.svg",565],["piece_workspace_scarlett_0_0.98ad2485.svg",566],["piece_workspace_speaker_1_0_0.a96e987f.svg",567],["piece_workspace_speaker_2_0_0.101159f8.svg",568],["piece_workspace_speaker_3_0_0.9923f4ae.svg",569],["pieces_office_shoplight_on_bg.411df94e.svg",570],["pieces_office_shoplight_off.14f47cc8.svg",571],["pieces_office_shoplight_on.f5ab17e8.svg",572],["piece_desk_mg.5a276494.svg",573],["piece_desk_bg.6562b661.svg",574],["interaction_hands.57813691.svg",575],["interaction_options.199fe921.svg",576],["interaction_hand.23d82f19.svg",577],["accent_noise_1.93345503.svg",578],["accent_noise_2.b8d0efb1.svg",579],["accent_noise_3.d97a7b2f.svg",580],["accent_noise_4.1a0244e0.svg",581],["gui_logo_type.caf8972c.svg",582],["gui_logo_buttons.96109d01.svg",583],["gui_enter_buttons.b33dad2f.svg",584],["gui_hand_up.89a6074c.svg",585],["gui_start_buttons.d3e3fb6f.svg",586],["gui_or.26f56e0f.svg",587],["gui_learn_buttons.98e5919a.svg",588],["gui_button_help.fb0ac9b6.svg",589],["gui_button_register.7928f260.svg",590],["gui_learn_buttons_login.fcdb9c7d.svg",591],["gui_learn_buttons_sign_up.1bb8d4ac.svg",592],["gui_learn_buttons_sign_out.db622e5c.svg",593],["hands.54138791.svg",594],["stage_floor.31d13e65.svg",595],["stage_door_closed.900c91a4.svg",596],["stage_door_opened.a8f14c92.svg",597],["stage_wall.f6897b65.svg",598],["stage_lines.936f5691.svg",599],["gui_particles_computer_corner.c0a47721.svg",600],["gui_particles_computer_corner_closeup.9537b2f7.svg",601],["gui_particles_computer_corner_closeup_white.a6d51783.svg",602],["effect_vignette.801c55ce.svg",603],["angular.317d263f.svg",624],["instagram_handdrawn.9705b88d.svg",609],["twitch_handdrawn.32be8e27.svg",610],["twitter_handdrawn.ade89f04.svg",611],["youtube_handdrawn.db1fac92.svg",612],["facebook_handdrawn.5f32836b.svg",613],["search_handdrawn.5f5eb127.svg",614],["nownigel_icon_social_home.4416a4bd.svg",615],["home_type.0fc8478f.svg",616],["team_type.f32ffa8d.svg",617],["library_type.60427c78.svg",618],["partners_type.8dcf5a82.svg",619],["services_type.dc2871ff.svg",620],["workshop_type.9fbfc858.svg",621],["abilities_type.8a5df1a5.svg",622],["about_type.8a6a5410.svg",623],["gui_cursor_handdrawn.b689f7dc.svg",604],["gui_cursor_handdrawn_active.590ac61b.svg",605]]);
},{}]},{},[942,0], null)