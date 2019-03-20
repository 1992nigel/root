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
})({"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
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
},{}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
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
},{"./bundle-url":"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./assets/frames/stage_wall_lines_90_iphone.svg":[["stage_wall_lines_90_iphone.57b4b272.svg","assets/frames/stage_wall_lines_90_iphone.svg"],"assets/frames/stage_wall_lines_90_iphone.svg"],"./assets/frames/loading/gui_paint_1.svg":[["gui_paint_1.b3b4b027.svg","assets/frames/loading/gui_paint_1.svg"],"assets/frames/loading/gui_paint_1.svg"],"./assets/frames/loading/gui_paint_2.svg":[["gui_paint_2.5b80ea42.svg","assets/frames/loading/gui_paint_2.svg"],"assets/frames/loading/gui_paint_2.svg"],"./assets/frames/loading/gui_paint_3.svg":[["gui_paint_3.2a577129.svg","assets/frames/loading/gui_paint_3.svg"],"assets/frames/loading/gui_paint_3.svg"],"./assets/frames/loading/gui_paint_4.svg":[["gui_paint_4.448e5276.svg","assets/frames/loading/gui_paint_4.svg"],"assets/frames/loading/gui_paint_4.svg"],"./assets/frames/loading/gui_paint_5.svg":[["gui_paint_5.9e35cb70.svg","assets/frames/loading/gui_paint_5.svg"],"assets/frames/loading/gui_paint_5.svg"],"./assets/frames/loading/gui_paint_6.svg":[["gui_paint_6.a5df9901.svg","assets/frames/loading/gui_paint_6.svg"],"assets/frames/loading/gui_paint_6.svg"],"./assets/frames/loading/gui_paint_7.svg":[["gui_paint_7.7e2bf3a5.svg","assets/frames/loading/gui_paint_7.svg"],"assets/frames/loading/gui_paint_7.svg"],"./assets/frames/loading/gui_paint_8.svg":[["gui_paint_8.d23cb745.svg","assets/frames/loading/gui_paint_8.svg"],"assets/frames/loading/gui_paint_8.svg"],"./assets/frames/loading/gui_paint_9.svg":[["gui_paint_9.d3e65220.svg","assets/frames/loading/gui_paint_9.svg"],"assets/frames/loading/gui_paint_9.svg"],"./assets/frames/loading/gui_paint_10.svg":[["gui_paint_10.e96d9610.svg","assets/frames/loading/gui_paint_10.svg"],"assets/frames/loading/gui_paint_10.svg"],"./assets/frames/loading/gui_paint_11.svg":[["gui_paint_11.5e51d7bd.svg","assets/frames/loading/gui_paint_11.svg"],"assets/frames/loading/gui_paint_11.svg"],"./assets/frames/loading/gui_paint_12.svg":[["gui_paint_12.6b3d0d05.svg","assets/frames/loading/gui_paint_12.svg"],"assets/frames/loading/gui_paint_12.svg"],"./assets/frames/loading/gui_paint_hand_1.svg":[["gui_paint_hand_1.622d59fc.svg","assets/frames/loading/gui_paint_hand_1.svg"],"assets/frames/loading/gui_paint_hand_1.svg"],"./assets/frames/loading/gui_paint_hand_2.svg":[["gui_paint_hand_2.8b13694f.svg","assets/frames/loading/gui_paint_hand_2.svg"],"assets/frames/loading/gui_paint_hand_2.svg"],"./assets/frames/loading/gui_paint_hand_3.svg":[["gui_paint_hand_3.639282a0.svg","assets/frames/loading/gui_paint_hand_3.svg"],"assets/frames/loading/gui_paint_hand_3.svg"],"./assets/frames/loading/gui_paint_hand_4.svg":[["gui_paint_hand_4.a4c7e46c.svg","assets/frames/loading/gui_paint_hand_4.svg"],"assets/frames/loading/gui_paint_hand_4.svg"],"./assets/frames/loading/gui_paint_hand_5.svg":[["gui_paint_hand_5.d20c76bf.svg","assets/frames/loading/gui_paint_hand_5.svg"],"assets/frames/loading/gui_paint_hand_5.svg"],"./assets/frames/loading/gui_paint_hand_6.svg":[["gui_paint_hand_6.6132847b.svg","assets/frames/loading/gui_paint_hand_6.svg"],"assets/frames/loading/gui_paint_hand_6.svg"],"./assets/frames/loading/gui_paint_hand_7.svg":[["gui_paint_hand_7.e6dead04.svg","assets/frames/loading/gui_paint_hand_7.svg"],"assets/frames/loading/gui_paint_hand_7.svg"],"./assets/frames/loading/gui_paint_hand_8.svg":[["gui_paint_hand_8.4c9e7fb0.svg","assets/frames/loading/gui_paint_hand_8.svg"],"assets/frames/loading/gui_paint_hand_8.svg"],"./assets/frames/loading/gui_paint_hand_9.svg":[["gui_paint_hand_9.0942c7b7.svg","assets/frames/loading/gui_paint_hand_9.svg"],"assets/frames/loading/gui_paint_hand_9.svg"],"./assets/frames/loading/gui_paint_hand_10.svg":[["gui_paint_hand_10.5acd4a19.svg","assets/frames/loading/gui_paint_hand_10.svg"],"assets/frames/loading/gui_paint_hand_10.svg"],"./assets/frames/loading/gui_paint_hand_11.svg":[["gui_paint_hand_11.4c4ad835.svg","assets/frames/loading/gui_paint_hand_11.svg"],"assets/frames/loading/gui_paint_hand_11.svg"],"./assets/frames/loading/gui_paint_hand_12.svg":[["gui_paint_hand_12.9796e232.svg","assets/frames/loading/gui_paint_hand_12.svg"],"assets/frames/loading/gui_paint_hand_12.svg"],"./assets/frames/loading/gui_paint_hand_13.svg":[["gui_paint_hand_13.174e96ea.svg","assets/frames/loading/gui_paint_hand_13.svg"],"assets/frames/loading/gui_paint_hand_13.svg"],"./assets/frames/loading/gui_paint_hand_14.svg":[["gui_paint_hand_14.bf70ecfc.svg","assets/frames/loading/gui_paint_hand_14.svg"],"assets/frames/loading/gui_paint_hand_14.svg"],"./assets/frames/loading/gui_paint_hand_15.svg":[["gui_paint_hand_15.a134211f.svg","assets/frames/loading/gui_paint_hand_15.svg"],"assets/frames/loading/gui_paint_hand_15.svg"],"./assets/frames/loading/gui_paint_hand_16.svg":[["gui_paint_hand_16.781e6a2a.svg","assets/frames/loading/gui_paint_hand_16.svg"],"assets/frames/loading/gui_paint_hand_16.svg"],"./assets/frames/loading/gui_paint_hand_17.svg":[["gui_paint_hand_17.8d0c7ee4.svg","assets/frames/loading/gui_paint_hand_17.svg"],"assets/frames/loading/gui_paint_hand_17.svg"],"./assets/frames/loading/gui_paint_hand_18.svg":[["gui_paint_hand_18.6e3a0199.svg","assets/frames/loading/gui_paint_hand_18.svg"],"assets/frames/loading/gui_paint_hand_18.svg"],"./assets/frames/loading/gui_paint_hand_19.svg":[["gui_paint_hand_19.c851fb5b.svg","assets/frames/loading/gui_paint_hand_19.svg"],"assets/frames/loading/gui_paint_hand_19.svg"],"./assets/frames/loading/gui_paint_hand_20.svg":[["gui_paint_hand_20.61032117.svg","assets/frames/loading/gui_paint_hand_20.svg"],"assets/frames/loading/gui_paint_hand_20.svg"],"./assets/frames/loading/gui_paint_hand_21.svg":[["gui_paint_hand_21.418ba654.svg","assets/frames/loading/gui_paint_hand_21.svg"],"assets/frames/loading/gui_paint_hand_21.svg"],"./assets/frames/loading/gui_paint_hand_22.svg":[["gui_paint_hand_22.2eb0d082.svg","assets/frames/loading/gui_paint_hand_22.svg"],"assets/frames/loading/gui_paint_hand_22.svg"],"./assets/frames/loading/gui_paint_hand_23.svg":[["gui_paint_hand_23.e6db1316.svg","assets/frames/loading/gui_paint_hand_23.svg"],"assets/frames/loading/gui_paint_hand_23.svg"],"./assets/frames/loading/gui_paint_hand_24.svg":[["gui_paint_hand_24.63e7dc97.svg","assets/frames/loading/gui_paint_hand_24.svg"],"assets/frames/loading/gui_paint_hand_24.svg"],"./assets/frames/loading/gui_draw_hand_1.svg":[["gui_draw_hand_1.b985e4ae.svg","assets/frames/loading/gui_draw_hand_1.svg"],"assets/frames/loading/gui_draw_hand_1.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_1.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_1.96d01f7c.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_1.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_1.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_2.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_2.de61fa3f.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_2.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_2.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_3.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_3.ba61e76b.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_3.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_3.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_4.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_4.0c04cccf.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_4.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_4.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_5.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_5.0148153f.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_5.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_5.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_6.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_6.e3d1a16a.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_6.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_6.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_7.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_7.a9aa315e.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_7.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_7.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_8.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_8.ece82cad.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_8.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_8.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_9.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_9.2554e748.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_9.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_9.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_10.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_10.0e147fbb.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_10.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_10.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_11.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_11.69fad320.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_11.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_11.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_12.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_12.48183fff.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_12.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_12.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_13.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_13.012bcd22.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_13.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_13.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_14.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_14.e0d4bab0.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_14.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_14.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_15.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_15.ea290eae.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_15.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_15.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_16.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_16.97d5898d.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_16.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_16.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_17.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_17.8f7e520b.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_17.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_17.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_18.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_18.7b3de953.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_18.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_18.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_19.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_19.f2a58cac.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_19.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_19.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_20.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_20.c47de1fa.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_20.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_20.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_21.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_21.47e6e876.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_21.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_21.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_22.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_22.6a504572.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_22.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_22.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_23.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_23.4893ea65.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_23.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_23.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_24.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_24.a1d92fc3.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_24.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_24.svg"],"./assets/effect/vignette.svg":[["vignette.0e668da4.svg","assets/effect/vignette.svg"],"assets/effect/vignette.svg"],"./assets/accent/noise_1.svg":[["noise_1.af8b8b96.svg","assets/accent/noise_1.svg"],"assets/accent/noise_1.svg"],"./assets/frames/turnaround_particle_think.svg":[["turnaround_particle_think.7c0e872f.svg","assets/frames/turnaround_particle_think.svg"],"assets/frames/turnaround_particle_think.svg"],"./assets/frames/buildings/building_1.svg":[["building_1.726f1846.svg","assets/frames/buildings/building_1.svg"],"assets/frames/buildings/building_1.svg"],"./assets/frames/buildings/park_1.svg":[["park_1.adbba1cd.svg","assets/frames/buildings/park_1.svg"],"assets/frames/buildings/park_1.svg"],"./assets/frames/buildings/city_1.svg":[["city_1.095941fe.svg","assets/frames/buildings/city_1.svg"],"assets/frames/buildings/city_1.svg"],"./assets/frames/buildings/sky_1.svg":[["sky_1.4c2a347e.svg","assets/frames/buildings/sky_1.svg"],"assets/frames/buildings/sky_1.svg"],"./assets/frames/buildings/outside_1.svg":[["outside_1.f19d5b18.svg","assets/frames/buildings/outside_1.svg"],"assets/frames/buildings/outside_1.svg"],"./assets/frames/buildings/indoor_1.svg":[["indoor_1.8a5f48b1.svg","assets/frames/buildings/indoor_1.svg"],"assets/frames/buildings/indoor_1.svg"],"./assets/frames/buildings/cliff_1.svg":[["cliff_1.82e062e0.svg","assets/frames/buildings/cliff_1.svg"],"assets/frames/buildings/cliff_1.svg"],"./assets/frames/buildings/basement_1.svg":[["basement_1.9cb9f5f4.svg","assets/frames/buildings/basement_1.svg"],"assets/frames/buildings/basement_1.svg"],"./assets/frames/stage_grid.svg":[["stage_grid.35bd7fa4.svg","assets/frames/stage_grid.svg"],"assets/frames/stage_grid.svg"],"./assets/frames/stage_perspective.svg":[["stage_perspective.0f6afe98.svg","assets/frames/stage_perspective.svg"],"assets/frames/stage_perspective.svg"],"./assets/frames/stage_ceiling_90.svg":[["stage_ceiling_90.55f16ceb.svg","assets/frames/stage_ceiling_90.svg"],"assets/frames/stage_ceiling_90.svg"],"./assets/frames/stage_ceiling_90_yellow.svg":[["stage_ceiling_90_yellow.a4b3c396.svg","assets/frames/stage_ceiling_90_yellow.svg"],"assets/frames/stage_ceiling_90_yellow.svg"],"./assets/frames/stage_ceiling_90_light_yellow_1.svg":[["stage_ceiling_90_light_yellow_1.0df12f73.svg","assets/frames/stage_ceiling_90_light_yellow_1.svg"],"assets/frames/stage_ceiling_90_light_yellow_1.svg"],"./assets/frames/stage_ceiling_90_dark_yellow_9.svg":[["stage_ceiling_90_dark_yellow_9.a09e6bd9.svg","assets/frames/stage_ceiling_90_dark_yellow_9.svg"],"assets/frames/stage_ceiling_90_dark_yellow_9.svg"],"./assets/frames/stage_floor_90.svg":[["stage_floor_90.c344f6ef.svg","assets/frames/stage_floor_90.svg"],"assets/frames/stage_floor_90.svg"],"./assets/frames/stage_floor_90_yellow.svg":[["stage_floor_90_yellow.b16a3ed2.svg","assets/frames/stage_floor_90_yellow.svg"],"assets/frames/stage_floor_90_yellow.svg"],"./assets/frames/stage_floor_90_light_yellow_1.svg":[["stage_floor_90_light_yellow_1.372610d5.svg","assets/frames/stage_floor_90_light_yellow_1.svg"],"assets/frames/stage_floor_90_light_yellow_1.svg"],"./assets/frames/stage_floor_90_dark_yellow_9.svg":[["stage_floor_90_dark_yellow_9.1d6816d2.svg","assets/frames/stage_floor_90_dark_yellow_9.svg"],"assets/frames/stage_floor_90_dark_yellow_9.svg"],"./assets/frames/stage_wall_left.svg":[["stage_wall_left.8475114d.svg","assets/frames/stage_wall_left.svg"],"assets/frames/stage_wall_left.svg"],"./assets/frames/stage_wall_right.svg":[["stage_wall_right.7cbc6161.svg","assets/frames/stage_wall_right.svg"],"assets/frames/stage_wall_right.svg"],"./assets/frames/stage_office_wall.svg":[["stage_office_wall.009a3f5f.svg","assets/frames/stage_office_wall.svg"],"assets/frames/stage_office_wall.svg"],"./assets/frames/stage_wall_90.svg":[["stage_wall_90.cf987742.svg","assets/frames/stage_wall_90.svg"],"assets/frames/stage_wall_90.svg"],"./assets/frames/stage_wall_90_dark_yellow_9.svg":[["stage_wall_90_dark_yellow_9.85442f50.svg","assets/frames/stage_wall_90_dark_yellow_9.svg"],"assets/frames/stage_wall_90_dark_yellow_9.svg"],"./assets/frames/stage_wall_90_light_yellow_1.svg":[["stage_wall_90_light_yellow_1.bcecc181.svg","assets/frames/stage_wall_90_light_yellow_1.svg"],"assets/frames/stage_wall_90_light_yellow_1.svg"],"./assets/frames/stage_wall_90_yellow.svg":[["stage_wall_90_yellow.99896895.svg","assets/frames/stage_wall_90_yellow.svg"],"assets/frames/stage_wall_90_yellow.svg"],"./assets/frames/stage_wall_lines_90.svg":[["stage_wall_lines_90.80afb6e7.svg","assets/frames/stage_wall_lines_90.svg"],"assets/frames/stage_wall_lines_90.svg"],"./assets/frames/stage_workspace.svg":[["stage_workspace.370535c9.svg","assets/frames/stage_workspace.svg"],"assets/frames/stage_workspace.svg"],"./assets/frames/stage_door_opened.svg":[["stage_door_opened.f4b89b0d.svg","assets/frames/stage_door_opened.svg"],"assets/frames/stage_door_opened.svg"],"./assets/frames/pieces_office_shoplight_on.svg":[["pieces_office_shoplight_on.5cb044c5.svg","assets/frames/pieces_office_shoplight_on.svg"],"assets/frames/pieces_office_shoplight_on.svg"],"./assets/frames/stage_office_items.svg":[["stage_office_items.05cc0d19.svg","assets/frames/stage_office_items.svg"],"assets/frames/stage_office_items.svg"],"./assets/frames/stage_office_items_2.svg":[["stage_office_items_2.9db083d2.svg","assets/frames/stage_office_items_2.svg"],"assets/frames/stage_office_items_2.svg"],"./assets/frames/stage_ladder.svg":[["stage_ladder.7f577c8c.svg","assets/frames/stage_ladder.svg"],"assets/frames/stage_ladder.svg"],"./assets/frames/turnaround_lamp_y_1_x_1.svg":[["turnaround_lamp_y_1_x_1.67250e0e.svg","assets/frames/turnaround_lamp_y_1_x_1.svg"],"assets/frames/turnaround_lamp_y_1_x_1.svg"],"./assets/frames/turnaround_desk_y_1_x_1.svg":[["turnaround_desk_y_1_x_1.20e81d98.svg","assets/frames/turnaround_desk_y_1_x_1.svg"],"assets/frames/turnaround_desk_y_1_x_1.svg"],"./assets/frames/turnaround_nigel_full_body_standing_y_1_x_1.svg":[["turnaround_nigel_full_body_standing_y_1_x_1.e96777af.svg","assets/frames/turnaround_nigel_full_body_standing_y_1_x_1.svg"],"assets/frames/turnaround_nigel_full_body_standing_y_1_x_1.svg"],"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_1.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_1.61a0adee.svg","assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_1.svg"],"assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_1.svg"],"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_2.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_2.ee23fb6b.svg","assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_2.svg"],"assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_2.svg"],"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_3.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_3.45ffa588.svg","assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_3.svg"],"assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_3.svg"],"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_4.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_4.04b099d9.svg","assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_4.svg"],"assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_4.svg"],"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_5.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_5.308d44e6.svg","assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_5.svg"],"assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_5.svg"],"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_6.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_6.ccfb6011.svg","assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_6.svg"],"assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_6.svg"],"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_7.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_7.f6b2400c.svg","assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_7.svg"],"assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_7.svg"],"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_8.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_8.89be9205.svg","assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_8.svg"],"assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_8.svg"],"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_9.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_9.aa8a0d70.svg","assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_9.svg"],"assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_9.svg"],"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_1.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_1.3f9aba38.svg","assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_1.svg"],"assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_1.svg"],"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_2.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_2.4b6a02c5.svg","assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_2.svg"],"assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_2.svg"],"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_3.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_3.8633d7ac.svg","assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_3.svg"],"assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_3.svg"],"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_4.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_4.62631e35.svg","assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_4.svg"],"assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_4.svg"],"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_5.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_5.442bd885.svg","assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_5.svg"],"assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_5.svg"],"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_6.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_6.1c4c0aa2.svg","assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_6.svg"],"assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_6.svg"],"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_7.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_7.d9f9249f.svg","assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_7.svg"],"assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_7.svg"],"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_8.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_8.0e02c39d.svg","assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_8.svg"],"assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_8.svg"],"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_9.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_9.0cb463cf.svg","assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_9.svg"],"assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_9.svg"],"./assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_1.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_1.987c9fc2.svg","assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_1.svg"],"assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_1.svg"],"./assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_2.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_2.96eb6ece.svg","assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_2.svg"],"assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_2.svg"],"./assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_3.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_3.45829aa5.svg","assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_3.svg"],"assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_3.svg"],"./assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_4.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_4.f5a38734.svg","assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_4.svg"],"assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_4.svg"],"./assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_1.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_1.806b3344.svg","assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_1.svg"],"assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_1.svg"],"./assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_2.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_2.8ae0e885.svg","assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_2.svg"],"assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_2.svg"],"./assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_3.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_3.134821e5.svg","assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_3.svg"],"assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_3.svg"],"./assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_4.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_4.abdea22a.svg","assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_4.svg"],"assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_4.svg"],"./assets/gui/about_type.svg":[["about_type.0baa28b8.svg","assets/gui/about_type.svg"],"assets/gui/about_type.svg"],"./assets/gui/gui_create.svg":[["gui_create.6dc762ee.svg","assets/gui/gui_create.svg"],"assets/gui/gui_create.svg"],"./assets/gui/gui_search.svg":[["gui_search.0248e663.svg","assets/gui/gui_search.svg"],"assets/gui/gui_search.svg"],"./assets/gui/gui_loading.svg":[["gui_loading.9a7d2b66.svg","assets/gui/gui_loading.svg"],"assets/gui/gui_loading.svg"],"./assets/gui/gui_original.svg":[["gui_original.21a3255d.svg","assets/gui/gui_original.svg"],"assets/gui/gui_original.svg"],"./assets/gui/gui_handcrafted.svg":[["gui_handcrafted.453e8264.svg","assets/gui/gui_handcrafted.svg"],"assets/gui/gui_handcrafted.svg"],"./assets/gui/gui_based.svg":[["gui_based.dfd54ae3.svg","assets/gui/gui_based.svg"],"assets/gui/gui_based.svg"],"./assets/gui/gui_logo.svg":[["gui_logo.82c1c1c2.svg","assets/gui/gui_logo.svg"],"assets/gui/gui_logo.svg"],"./assets/gui/gui_logo_type.svg":[["gui_logo_type.337ae418.svg","assets/gui/gui_logo_type.svg"],"assets/gui/gui_logo_type.svg"],"./assets/gui/gui_logo_mark.svg":[["gui_logo_mark.74c41270.svg","assets/gui/gui_logo_mark.svg"],"assets/gui/gui_logo_mark.svg"],"./assets/gui/gui_logo_arrows.svg":[["gui_logo_arrows.80c26d19.svg","assets/gui/gui_logo_arrows.svg"],"assets/gui/gui_logo_arrows.svg"],"./assets/gui/gui_logo_com.svg":[["gui_logo_com.d9cc329d.svg","assets/gui/gui_logo_com.svg"],"assets/gui/gui_logo_com.svg"],"./assets/gui/gui_logo_since.svg":[["gui_logo_since.ee4341ac.svg","assets/gui/gui_logo_since.svg"],"assets/gui/gui_logo_since.svg"],"./assets/gui/gui_logo_icons.svg":[["gui_logo_icons.c4db3905.svg","assets/gui/gui_logo_icons.svg"],"assets/gui/gui_logo_icons.svg"],"./assets/gui/gui_logo_links.svg":[["gui_logo_links.488749ac.svg","assets/gui/gui_logo_links.svg"],"assets/gui/gui_logo_links.svg"],"./assets/gui/gui_hor_line.svg":[["gui_hor_line.c1a42f95.svg","assets/gui/gui_hor_line.svg"],"assets/gui/gui_hor_line.svg"],"./assets/gui/gui_vert_line.svg":[["gui_vert_line.7f49bacb.svg","assets/gui/gui_vert_line.svg"],"assets/gui/gui_vert_line.svg"],"./assets/gui/gui_button_back.svg":[["gui_button_back.99b2b854.svg","assets/gui/gui_button_back.svg"],"assets/gui/gui_button_back.svg"],"./assets/gui/gui_button_start.svg":[["gui_button_start.f4668fec.svg","assets/gui/gui_button_start.svg"],"assets/gui/gui_button_start.svg"],"./assets/gui/gui_or.svg":[["gui_or.35ccad12.svg","assets/gui/gui_or.svg"],"assets/gui/gui_or.svg"],"./assets/gui/gui_button_learn.svg":[["gui_button_learn.cfb8d444.svg","assets/gui/gui_button_learn.svg"],"assets/gui/gui_button_learn.svg"],"./assets/gui/gui_move_note.svg":[["gui_move_note.23e34b87.svg","assets/gui/gui_move_note.svg"],"assets/gui/gui_move_note.svg"],"./assets/gui/gui_made_by.svg":[["gui_made_by.3533edb1.svg","assets/gui/gui_made_by.svg"],"assets/gui/gui_made_by.svg"],"./assets/gui/gui_scroll.svg":[["gui_scroll.3ecf6f58.svg","assets/gui/gui_scroll.svg"],"assets/gui/gui_scroll.svg"],"./assets/gui/gui_wheel.svg":[["gui_wheel.6ea8beb2.svg","assets/gui/gui_wheel.svg"],"assets/gui/gui_wheel.svg"],"./assets/gui/gui_avatar.svg":[["gui_avatar.c0327820.svg","assets/gui/gui_avatar.svg"],"assets/gui/gui_avatar.svg"],"./assets/gui/gui_paint_top.svg":[["gui_paint_top.7b9cdcec.svg","assets/gui/gui_paint_top.svg"],"assets/gui/gui_paint_top.svg"],"./assets/gui/gui_paint_bottom.svg":[["gui_paint_bottom.bd28c509.svg","assets/gui/gui_paint_bottom.svg"],"assets/gui/gui_paint_bottom.svg"],"./assets/gui/gui_paint_right.svg":[["gui_paint_right.ff02e73c.svg","assets/gui/gui_paint_right.svg"],"assets/gui/gui_paint_right.svg"],"./assets/gui/gui_paint_left.svg":[["gui_paint_left.95fe9020.svg","assets/gui/gui_paint_left.svg"],"assets/gui/gui_paint_left.svg"],"./assets/gui/gui_i.svg":[["gui_i.abf26978.svg","assets/gui/gui_i.svg"],"assets/gui/gui_i.svg"],"./assets/gui/gui_i_circle.svg":[["gui_i_circle.76b81b44.svg","assets/gui/gui_i_circle.svg"],"assets/gui/gui_i_circle.svg"],"./assets/gui/gui_circle.svg":[["gui_circle.25bc022e.svg","assets/gui/gui_circle.svg"],"assets/gui/gui_circle.svg"],"./assets/gui/gui_circle_hover.svg":[["gui_circle_hover.a6b1ed17.svg","assets/gui/gui_circle_hover.svg"],"assets/gui/gui_circle_hover.svg"],"./assets/gui/gui_circle_active.svg":[["gui_circle_active.8e5f4bc5.svg","assets/gui/gui_circle_active.svg"],"assets/gui/gui_circle_active.svg"],"./assets/gui/gui_navs_bars.svg":[["gui_navs_bars.1e04c268.svg","assets/gui/gui_navs_bars.svg"],"assets/gui/gui_navs_bars.svg"],"./assets/gui/gui_navs_bars_hover.svg":[["gui_navs_bars_hover.c7efd676.svg","assets/gui/gui_navs_bars_hover.svg"],"assets/gui/gui_navs_bars_hover.svg"],"./assets/gui/gui_dots.svg":[["gui_dots.dcf20746.svg","assets/gui/gui_dots.svg"],"assets/gui/gui_dots.svg"],"./assets/gui/gui_dots_hover.svg":[["gui_dots_hover.7059adf2.svg","assets/gui/gui_dots_hover.svg"],"assets/gui/gui_dots_hover.svg"],"./assets/gui/gui_vert_dots.svg":[["gui_vert_dots.85e8683e.svg","assets/gui/gui_vert_dots.svg"],"assets/gui/gui_vert_dots.svg"],"./assets/gui/gui_vert_dots_hover.svg":[["gui_vert_dots_hover.a55885fd.svg","assets/gui/gui_vert_dots_hover.svg"],"assets/gui/gui_vert_dots_hover.svg"],"./assets/gui/gui_vert_colon.svg":[["gui_vert_colon.5fc4a628.svg","assets/gui/gui_vert_colon.svg"],"assets/gui/gui_vert_colon.svg"],"./assets/gui/gui_vert_colon_hover.svg":[["gui_vert_colon_hover.9d2cb2d9.svg","assets/gui/gui_vert_colon_hover.svg"],"assets/gui/gui_vert_colon_hover.svg"],"./assets/gui/gui_close.svg":[["gui_close.8326933d.svg","assets/gui/gui_close.svg"],"assets/gui/gui_close.svg"],"./assets/gui/gui_close_hover.svg":[["gui_close_hover.e128ef62.svg","assets/gui/gui_close_hover.svg"],"assets/gui/gui_close_hover.svg"],"./assets/gui/gui_logo_social_instagram.svg":[["gui_logo_social_instagram.72971cc4.svg","assets/gui/gui_logo_social_instagram.svg"],"assets/gui/gui_logo_social_instagram.svg"],"./assets/gui/gui_logo_social_twitch.svg":[["gui_logo_social_twitch.c4c4a961.svg","assets/gui/gui_logo_social_twitch.svg"],"assets/gui/gui_logo_social_twitch.svg"],"./assets/gui/gui_logo_social_facebook.svg":[["gui_logo_social_facebook.906eb205.svg","assets/gui/gui_logo_social_facebook.svg"],"assets/gui/gui_logo_social_facebook.svg"],"./assets/gui/gui_logo_social_youtube.svg":[["gui_logo_social_youtube.b5b4ebf4.svg","assets/gui/gui_logo_social_youtube.svg"],"assets/gui/gui_logo_social_youtube.svg"],"./assets/gui/gui_logo_social_twitter.svg":[["gui_logo_social_twitter.6a5e9968.svg","assets/gui/gui_logo_social_twitter.svg"],"assets/gui/gui_logo_social_twitter.svg"],"./assets/gui/gui_audio.svg":[["gui_audio.c0e81a39.svg","assets/gui/gui_audio.svg"],"assets/gui/gui_audio.svg"],"./assets/gui/gui_audio_on.svg":[["gui_audio_on.a3f308f7.svg","assets/gui/gui_audio_on.svg"],"assets/gui/gui_audio_on.svg"],"./assets/gui/gui_audio_off.svg":[["gui_audio_off.8e5b06ce.svg","assets/gui/gui_audio_off.svg"],"assets/gui/gui_audio_off.svg"],"./assets/gui/gui_button_hire.svg":[["gui_button_hire.aa5ee4a7.svg","assets/gui/gui_button_hire.svg"],"assets/gui/gui_button_hire.svg"],"./assets/gui/gui_button_help.svg":[["gui_button_help.033f1f75.svg","assets/gui/gui_button_help.svg"],"assets/gui/gui_button_help.svg"],"./assets/gui/gui_button_signin.svg":[["gui_button_signin.21f7bde2.svg","assets/gui/gui_button_signin.svg"],"assets/gui/gui_button_signin.svg"],"./assets/gui/gui_button_signup.svg":[["gui_button_signup.eb39a8ff.svg","assets/gui/gui_button_signup.svg"],"assets/gui/gui_button_signup.svg"],"./assets/gui/gui_button_signout.svg":[["gui_button_signout.5cf61df1.svg","assets/gui/gui_button_signout.svg"],"assets/gui/gui_button_signout.svg"],"./assets/gui/gui_button_enter.svg":[["gui_button_enter.dd5ce9ea.svg","assets/gui/gui_button_enter.svg"],"assets/gui/gui_button_enter.svg"],"./assets/gui/gui_arrow_left.svg":[["gui_arrow_left.859710f3.svg","assets/gui/gui_arrow_left.svg"],"assets/gui/gui_arrow_left.svg"],"./assets/gui/gui_arrow_top_left.svg":[["gui_arrow_top_left.b4da3972.svg","assets/gui/gui_arrow_top_left.svg"],"assets/gui/gui_arrow_top_left.svg"],"./assets/gui/gui_arrow_bottom_left.svg":[["gui_arrow_bottom_left.41a8ae45.svg","assets/gui/gui_arrow_bottom_left.svg"],"assets/gui/gui_arrow_bottom_left.svg"],"./assets/gui/gui_arrow_top.svg":[["gui_arrow_top.da3b27d8.svg","assets/gui/gui_arrow_top.svg"],"assets/gui/gui_arrow_top.svg"],"./assets/gui/gui_arrow_bottom.svg":[["gui_arrow_bottom.b5b8d38a.svg","assets/gui/gui_arrow_bottom.svg"],"assets/gui/gui_arrow_bottom.svg"],"./assets/gui/gui_arrow_right.svg":[["gui_arrow_right.91b7aa1a.svg","assets/gui/gui_arrow_right.svg"],"assets/gui/gui_arrow_right.svg"],"./assets/gui/gui_arrow_top_right.svg":[["gui_arrow_top_right.69c6805b.svg","assets/gui/gui_arrow_top_right.svg"],"assets/gui/gui_arrow_top_right.svg"],"./assets/gui/gui_arrow_bottom_right.svg":[["gui_arrow_bottom_right.023d6109.svg","assets/gui/gui_arrow_bottom_right.svg"],"assets/gui/gui_arrow_bottom_right.svg"],"_css_loader":"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"style.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("./style.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import a CSS module
var _default = function _default() {
  console.log(_style.default);
};

exports.default = _default;
},{"./style.scss":"style.scss"}],"fb.js":[function(require,module,exports) {
// Initialization
var config = {
  apiKey: "AIzaSyB8kwtrECmhBW10P4vaKsE9JyE5DdazI-U",
  authDomain: "nownigel-cf9da.firebaseapp.com",
  databaseURL: "https://nownigel-cf9da.firebaseio.com",
  projectId: "nownigel-cf9da",
  storageBucket: "nownigel-cf9da.appspot.com",
  messagingSenderId: "872155363769"
}; // Functions

firebase.initializeApp(config);
},{}],"partials/state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _touch;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var default_state = {
  app: {
    route: 'null'
  },
  data: {
    dev_mode: false,
    time: '',
    firebase: {},
    wordpress: {},
    feature_posts_limit: 1,
    posts_start: 1,
    posts_limit: 7,
    refs: false,
    sort: 'likes',
    view: 'grid',
    feature_style: 'all',
    types: [],
    category: 'all',
    sub_category: 'all',
    tag: 'all',
    content: false,
    user: {},
    score: {
      current: {
        met: 0,
        area: 0
      },
      leaderboard: []
    },
    local: true
  },
  animation: {
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
    touch_8: {
      clientX: 0,
      clientY: 0
    },
    mouse: {
      click: {
        clientX: 0,
        clientY: 0
      },
      clientX: 0,
      clientY: 0,
      up: true,
      down: false,
      drop_start: {
        clientX: 0,
        clientY: 0
      },
      drop_end: {
        clientX: 0,
        clientY: 0
      },
      drop: {
        clientX: 0,
        clientY: 0
      },
      drag: {
        clientX: 0,
        clientY: 0
      },
      pen: {
        clientX: 0,
        clientY: 0
      },
      pencil: {
        clientX: 0,
        clientY: 0
      },
      enter: true,
      leave: false,
      entertimer: 0,
      leavetimer: 0,
      timer: 0,
      automation: {
        increase: true,
        decrease: false
      },
      absolute: 0,
      alpha: 0,
      beta: 0,
      gamma: 0,
      acceleration: {
        x: 0,
        y: 0,
        z: 0
      },
      accelerationIncludingGravity: {
        x: 0,
        y: 0,
        z: 0
      },
      rotationRate: {
        alpha: 0,
        beta: 0,
        gamma: 0
      },
      interval: {
        x: 0,
        y: 0,
        z: 0
      }
    },
    touch: (_touch = {
      radiusX: 0,
      radiusY: 0,
      click: {
        clientX: 0,
        clientY: 0
      },
      start: {
        clientX: 0,
        clientY: 0
      },
      end: {
        clientX: 0,
        clientY: 0
      }
    }, _defineProperty(_touch, "click", {
      clientX: 0,
      clientY: 0
    }), _defineProperty(_touch, "clientX", 0), _defineProperty(_touch, "clientY", 0), _defineProperty(_touch, "up", true), _defineProperty(_touch, "down", false), _defineProperty(_touch, "drop", {
      clientX: 0,
      clientY: 0
    }), _defineProperty(_touch, "drag", {
      clientX: 0,
      clientY: 0
    }), _defineProperty(_touch, "dragDistanceX", 0), _defineProperty(_touch, "dragDistanceY", 0), _defineProperty(_touch, "enter", true), _defineProperty(_touch, "leave", false), _defineProperty(_touch, "entertimer", 0), _defineProperty(_touch, "leavetimer", 0), _defineProperty(_touch, "timer", 0), _defineProperty(_touch, "automation", {
      increase: true,
      decrease: false
    }), _defineProperty(_touch, "absolute", 0), _defineProperty(_touch, "alpha", 0), _defineProperty(_touch, "beta", 0), _defineProperty(_touch, "gamma", 0), _defineProperty(_touch, "acceleration", {
      x: 0,
      y: 0,
      z: 0
    }), _defineProperty(_touch, "accelerationIncludingGravity", {
      x: 0,
      y: 0,
      z: 0
    }), _defineProperty(_touch, "rotationRate", {
      alpha: 0,
      beta: 0,
      gamma: 0
    }), _defineProperty(_touch, "interval", {
      x: 0,
      y: 0,
      z: 0
    }), _touch),
    key: {
      keys: [],
      pressed: {
        key_tildy: false,
        key_1: false,
        key_2: false,
        key_3: false,
        key_4: false,
        key_5: false,
        key_6: false,
        key_7: false,
        key_8: false,
        key_9: false,
        key_0: false,
        key_space: false,
        key_arrow_left: false,
        key_arrow_right: false
      },
      last_key: 0,
      up: true,
      down: false,
      timer: 0,
      automation: {
        increase: true,
        decrease: false
      }
    }
  },
  ux: {
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
  },
  ui: {
    colors: {
      draft: {
        transform: false,
        opacity: false,
        display: false
      },
      two_tone: {
        transform: false,
        opacity: false,
        display: false
      }
    },
    stage: {
      cardboard_color: {
        roomed: false,
        which_roomed: 'center',
        transform: false,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0
      },
      cardboard_bg: {
        roomed: false,
        which_roomed: 'center',
        transform: false,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0
      },
      cardboard_mg: {
        roomed: false,
        which_roomed: 'center',
        transform: false,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0
      },
      cardboard_fg: {
        roomed: false,
        which_roomed: 'center',
        transform: false,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0
      },
      cardboard: {
        scene: 1,
        set: 0,
        roomed: false,
        which_roomed: 'center',
        transform: false,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0
      }
    },
    blog: {
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
    route: {
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
        xaxis: 0,
        yaxis: 0,
        height: 4,
        width: 4,
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
          walking: false,
          running: false,
          stunned: false
        }
      },
      player_2: {
        transform: false,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0,
        height: 4,
        width: 4,
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
      fold: {
        transform: true,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0,
        height: 0,
        width: 0
      },
      top: {
        transform: true,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0,
        height: 0,
        width: 0
      },
      top_left: {
        transform: true,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0,
        height: 0,
        width: 0
      },
      top_right: {
        transform: true,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0,
        height: 0,
        width: 0
      },
      bottom: {
        transform: true,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0,
        height: 0,
        width: 0
      },
      bottom_left: {
        transform: true,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0,
        height: 0,
        width: 0
      },
      bottom_right: {
        transform: true,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0,
        height: 0,
        width: 0
      },
      left: {
        transform: true,
        opacity: false,
        display: false,
        xaxis: 0,
        yaxis: 0,
        height: 0,
        width: 0
      },
      right: {
        transform: true,
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
          transform: true,
          opacity: false,
          display: false
        },
        bottom: {
          transform: true,
          opacity: false,
          display: false
        },
        left: {
          transform: true,
          opacity: false,
          display: false
        },
        right: {
          transform: true,
          opacity: false,
          display: false
        }
      },
      pop: {
        top: {
          transform: true,
          opacity: false,
          display: false
        },
        bottom: {
          transform: true,
          opacity: false,
          display: false
        },
        left: {
          transform: true,
          opacity: false,
          display: false
        },
        right: {
          transform: true,
          opacity: false,
          display: false
        }
      },
      page: {
        top: {
          transform: true,
          opacity: false,
          display: false
        },
        bottom: {
          transform: true,
          opacity: false,
          display: false
        },
        left: {
          transform: true,
          opacity: false,
          display: false
        },
        right: {
          transform: true,
          opacity: false,
          display: false
        }
      },
      fade: {
        top: {
          transform: true,
          opacity: false,
          display: false
        },
        bottom: {
          transform: true,
          opacity: false,
          display: false
        },
        left: {
          transform: true,
          opacity: false,
          display: false
        },
        right: {
          transform: true,
          opacity: false,
          display: false
        }
      },
      gradient: {
        top: {
          transform: true,
          opacity: false,
          display: false
        },
        bottom: {
          transform: true,
          opacity: false,
          display: false
        },
        left: {
          transform: true,
          opacity: false,
          display: false
        },
        right: {
          transform: true,
          opacity: false,
          display: false
        }
      },
      morph: {
        top: {
          transform: true,
          opacity: false,
          display: false
        },
        bottom: {
          transform: true,
          opacity: false,
          display: false
        },
        left: {
          transform: true,
          opacity: false,
          display: false
        },
        right: {
          transform: true,
          opacity: false,
          display: false
        }
      },
      menu: {
        top: {
          transform: true,
          opacity: false,
          display: false
        },
        bottom: {
          transform: true,
          opacity: false,
          display: false
        },
        left: {
          transform: true,
          opacity: false,
          display: false
        },
        right: {
          transform: true,
          opacity: false,
          display: false
        }
      },
      overlay: {
        top: {
          transform: true,
          opacity: false,
          display: false
        },
        bottom: {
          transform: true,
          opacity: false,
          display: false
        },
        left: {
          transform: true,
          opacity: false,
          display: false
        },
        right: {
          transform: true,
          opacity: false,
          display: false
        }
      },
      nav: {
        top: {
          transform: true,
          opacity: false,
          display: false
        },
        bottom: {
          transform: true,
          opacity: false,
          display: false
        },
        left: {
          transform: true,
          opacity: false,
          display: false
        },
        right: {
          transform: true,
          opacity: false,
          display: false
        }
      },
      corner: {
        top: {
          transform: true,
          opacity: false,
          display: false
        },
        bottom: {
          transform: true,
          opacity: false,
          display: false
        },
        left: {
          transform: true,
          opacity: false,
          display: false
        },
        right: {
          transform: true,
          opacity: false,
          display: false
        }
      }
    }
  }
};

var from_Import = function from_Import() {
  console.log('from state');
};

from_Import();
var _default = {
  from_Import: from_Import,
  default_state: default_state
};
exports.default = _default;
},{}],"partials/functions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = '';

var from_Import = function from_Import() {}; // 5. Functions


var Generate_new_fragment = document.createDocumentFragment();

var Generate_new_div = function Generate_new_div(innerHTML, classString, idString, index) {
  var g = document.createElement('div');
  g.setAttribute("id", idString + index);
  g.classList = classString;
  g.innerHTML = innerHTML;
  return g;
};

var Generate_new_link = function Generate_new_link(innerHTML, classString, idString, index) {
  var g = document.createElement('a');
  g.setAttribute("id", idString + index);
  g.classList = classString;
  g.innerHTML = innerHTML;
  return g;
};

var Generate_new_span = function Generate_new_span(innerHTML, classString, idString, index) {
  var g = document.createElement('span');
  g.setAttribute("id", idString + index);
  g.classList = classString;
  g.innerHTML = innerHTML;
  return g;
};

var Generate_new_li = function Generate_new_li(data) {
  console.log(data.title);
  var ELEMENT = document.createElement('li');
  ELEMENT.setAttribute("id", data.title);
  ELEMENT.classList = data.title;
  state = _index.default.Handle_return_state();

  if (data != null) {
    ELEMENT.innerHTML = "\n        <div id=\"post_component\" class=\"width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1\">\n          \n          <div id=\"post_block_1\" style=\"\n           background-image: url(".concat(data.feature_image_src, "); background-size: cover;\" class=\"width_100 height_25vh position_relative float_left\">\n          \n            <div id=\"post_block_3\">\n\n              <h1>Meta:</h1>\n              <p class=\"width_100\">title:").concat(data.id, "</p>\n              \n            </div>\n\n          </div>\n\n          <div id=\"post_block_2\" class=\"hover_show\" >\n              <h1>Meta:</h1>\n              <p>id:").concat(data.id, "</p>\n          </div>\n\n          <div id=\"post_block_4\" class=\"position_relative width_100 float_left display_flex_flow\">\n            <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">like</button>\n            <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">dislike</button>\n            <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">view</button>\n            <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">delete</button>\n          </div>\n\n        </div>\n\n      ");
  }

  ; // Objects: Firebase Library Items
  // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

  ELEMENT.children[0].children[2].children[0].addEventListener("click", function (event) {//from_index.likeWhoListings(data.child, data.id);
  });
  ELEMENT.children[0].children[2].children[1].addEventListener("click", function (event) {//from_index.dislikeWhoListings(data.child, data.id);
  });
  ELEMENT.children[0].children[2].children[2].addEventListener("click", function (event) {//from_index.viewWhoListings(data.child, data.id);
  });
  ELEMENT.children[0].children[2].children[3].addEventListener("click", function (event) {
    _index.default.deleteWhoListings(data.child, data.id);
  }); // view!!!

  ELEMENT.children[0].children[2].children[2].addEventListener("click", function (event) {
    alert('viewed');
  });
  return ELEMENT;
}; // Handles


var Toggle_functions_IF_State = function Toggle_functions_IF_State(function_one_if_state_true, function_two_if_state_false, id_tag, Ui_State) {
  // Function Check # 1
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
  var MANIPULATED = document.getElementById(id);

  if (MANIPULATED != null) {
    if (MANIPULATED.classList.contains('display') && MANIPULATED.classList.contains('opacity_1')) {
      // remove item immediatly
      setTimeout(function () {
        MANIPULATED.classList.remove('opacity_1');
        MANIPULATED.classList.add('opacity_0');
      }, 0); // remove item after buffer

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

from_Import();
var _default = {
  from_Import: from_Import,
  Generate_new_link: Generate_new_link,
  Generate_new_fragment: Generate_new_fragment,
  Generate_new_div: Generate_new_div,
  Generate_new_span: Generate_new_span,
  Generate_new_li: Generate_new_li,
  Toggle_functions_IF_State: Toggle_functions_IF_State,
  Toggle_classes_IF_State: Toggle_classes_IF_State,
  Toggle_display_and_opacity_on_with_no_delay: Toggle_display_and_opacity_on_with_no_delay,
  Toggle_display_and_opacity_off_with_delay: Toggle_display_and_opacity_off_with_delay,
  Toggle_stages_display_and_opacity_on_with_no_delay: Toggle_stages_display_and_opacity_on_with_no_delay,
  Toggle_stages_display_and_opacity_off_with_delay: Toggle_stages_display_and_opacity_off_with_delay
};
exports.default = _default;
},{"../index.js":"index.js"}],"partials/elements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = "";

var route_dashboard_not_logged = function route_dashboard_not_logged() {
  var content = "\n        <div id=\"dashboard_posts\" class=\"position_relative width_100 height_100vh bg_green float_left\">\n          please sign in\n        </div>\n      ";
  return content;
};

var route_dashboard = function route_dashboard(data) {
  var content = "\n      <div id=\"route_dashboard\" class=\"position_relative width_100 height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left\">\n\n        <div id=\"post_block_1\" style=\"\n        background-image: url(".concat(data.feature_image_src, "); background-size: cover;\" class=\"width_100 height_100vh position_relative float_left\">\n        </div>\n\n        <div id=\"dashboard_posts\" class=\"position_relative width_100 height_100vh bg_green float_left\">\n        </div>\n\n        <b>your library</b><br>\n        <div id=\"element_ol_firebase_user_library\" class=\"position_relative width_100 float_left\"></div>\n      \n        <b>subs library</b><br>\n        <div id=\"element_ol_firebase_user_subs_library\" class=\"position_relative width_100 float_left\"></div>\n\n      </div>\n      ");
  return content;
};

var element_scroll_y_events = function element_scroll_y_events(id, info) {
  var component = "\n      <div id=\"".concat(id, "\" class=\"position_absolute top_0 width_100 height_100 overflow_y scrollbaryhidden margin_auto float_right display opacity_1\">\n        <div class=\"position_relative width_100 float_left\">\n          ").concat(info, "\n        </div>\n      </div>\n    ");
  setTimeout(function () {
    document.getElementById(id).addEventListener("scroll", function (event) {
      console.log(event); //alert('yup');
      // scrolling

      console.log("event.srcElement.clientWidth: " + event.srcElement.clientWidth);
      console.log("event.srcElement.clientHeight: " + event.srcElement.clientHeight);
      console.log("event.srcElement.scrollLeft: " + event.srcElement.scrollLeft);
      console.log("event.srcElement.scrollTop: " + event.srcElement.scrollTop);
      console.log("event.srcElement.scrollWidth: " + event.srcElement.scrollWidth);
      console.log("event.srcElement.scrollHeight: " + event.srcElement.scrollHeight);
      state = _index.default.Handle_return_state();
      state.ui.route.clientHeight = event.srcElement.clientHeight;
      state.ui.route.clientWidth = event.srcElement.clientWidth;
      state.ui.route.scrollHeight = event.srcElement.scrollHeight;
      state.ui.route.scrollWidth = event.srcElement.scrollWidth;
      state.ui.route.scrollTop = event.srcElement.scrollTop;
      state.ui.route.scrollLeft = event.srcElement.scrollLeft;

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


      if (event.srcElement.scrollTop > state.ui.route.component_app_gui_scroll_y_position) {
        console.log("state.ui.route.component_app_gui_scroll_y_position increasing");
        console.log("instance: wheel up");
      }

      if (event.srcElement.scrollTop < state.ui.route.component_app_gui_scroll_y_position) {
        console.log("state.ui.route.component_app_gui_scroll_y_position decreasing");
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
        alert("component_app_modal_element_page_top_content: instance: footer met");
      }

      state.ui.route.component_app_gui_scroll_y_position = event.srcElement.scrollTop;
      console.log("scroll");
      console.log(event);

      _index.default.Handle_get_state_from_events();
    }, false);
  }, 101);
  return component;
};

var menu_sub = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_100 top_0 float_left line_height_5vh font_size_205vh pseudo_arrow_left_outside_white text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_left_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                     Nigel\n                  </div>\n              </div>\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div  id=\"route_workshop_2\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    Maisie\n                  </div>\n              </div>\n\n           </div>\n        </div>\n    </div>\n\n  </div>\n";
var element_after_sign_in = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white\">\n        <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n           \n                <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_flex_flow\">\n                    <b>Login user</b><br>\n                    <input type=\"text\" id=\"username\" placeholder=\"username\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <input type=\"text\" id=\"password\" placeholder=\"password\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                      <button id=\"element_user_sign_in\" class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\">login user</button>\n                    </div>\n\n                </div>\n\n           </div>\n        </div>\n     </div>\n\n    <div id=\"route_about_all\" class=\"gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n    <div class=\"position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n        <div id=\"route_about_cta\" class=\"position_relative float_left bg_yellow border_01vh_black pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark\">\n            <p class=\"font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left\">team cta</p>\n        </div>\n\n    </div>\n\n    <h1 class=\"verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_black border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">services</h1>\n\n  </div>\n";
var element_after_sign_up = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white\">\n        <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n                <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_flex_flow\">\n\n                    <br>\n                    <b>Create new user</b><br>\n                    <input type=\"text\" id=\"new_username\" placeholder=\"new username\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <input type=\"text\" id=\"new_password\" placeholder=\"new password\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                      <button id=\"element_create_user\" class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\">create user</button>\n                    </div>\n\n                    <br>\n                </div>\n\n           </div>\n        </div>\n     </div>\n\n    <div id=\"route_about_all\" class=\"gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n    <div class=\"position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n        <div id=\"route_about_cta\" class=\"position_relative float_left bg_yellow border_01vh_black pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark\">\n            <p class=\"font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left\">team cta</p>\n        </div>\n\n    </div>\n\n    <h1 class=\"verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_black border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">services</h1>\n\n  </div>\n";
var element_after_menu_about = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white\">\n        <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div id=\"route_about_1\" class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  \n                  <div class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                    <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    Brand\n                  </div>\n\n                  ".concat(menu_sub, "\n\n              </div>\n\n              <div id=\"route_about_2\" class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                     Products\n                  </div>\n                  ").concat(menu_sub, "\n              </div>\n\n              <div id=\"route_about_3\" class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    Office\n                  </div>\n                  ").concat(menu_sub, "\n              </div>\n\n              <div id=\"route_about_4\" class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    Staff\n                  </div>\n                  ").concat(menu_sub, "\n              </div>\n\n              <div id=\"route_about_5\" class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    Locations\n                  </div>\n                  ").concat(menu_sub, "\n              </div>\n\n              <div id=\"route_about_6\" class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    Process\n                  </div>\n                  ").concat(menu_sub, "\n              </div>\n\n\n           </div>\n        </div>\n     </div>\n\n    <div id=\"route_about_all\" class=\"gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n    <div class=\"position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n        <div id=\"route_about_cta\" class=\"position_relative float_left bg_yellow border_01vh_black pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark\">\n            <p class=\"font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left\">team cta</p>\n        </div>\n\n    </div>\n\n    <h1 class=\"verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_black border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">services</h1>\n\n  </div>\n");
var element_after_logo_menu_right = "\n  <div id=\"wp_component_meta\" class=\"position_absolute left_100 top_0 float_left height_1205vh width_85vw hover_show\">\n     <div class=\"position_relative top_0 left_-1vh easing_01 calc_2vh margin_1vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_left\">\n          <div class=\" width_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"calc_2vh position_relative float_left padding_1vh bg_white border_01vh_black pseudo_arrow_left_top_outside_white webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                <div class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div  class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n";
var element_after_social_menu_right = "\n  <div id=\"wp_component_meta\" class=\"position_absolute left_100 top_0 float_left height_1205vh width_3705vw hover_show\">\n     <div class=\"position_relative top_0 left_-1vh easing_01 calc_2vh margin_1vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_left\">\n          <div class=\" width_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"calc_2vh position_relative float_left padding_1vh bg_white border_01vh_black pseudo_arrow_left_top_outside_white webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                <div class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div  class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n";
var element_after_logo_menu_bottom = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_left_outside_white\">\n        <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n           \n                <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_flex_flow\">\n                    <b>Login user</b><br>\n                    <input type=\"text\" id=\"username\" placeholder=\"username\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <input type=\"text\" id=\"password\" placeholder=\"password\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                      <button id=\"element_user_sign_in\" class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\">create post</button>\n                    </div>\n\n                </div>\n\n           </div>\n        </div>\n     </div>\n\n    <div id=\"route_about_all\" class=\"gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n    <div class=\"position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n        <div id=\"route_about_cta\" class=\"position_relative float_left bg_yellow border_01vh_black pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark\">\n            <p class=\"font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left\">team cta</p>\n        </div>\n\n    </div>\n\n    <h1 class=\"verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_black border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">services</h1>\n\n  </div>\n";
var element_after_dots = "\n    <div id=\"wp_component_meta\" class=\"position_absolute width_25vh top_100 right_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white\">\n        <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n           \n                <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_flex_flow\">\n                    <b>Login user</b><br>\n                    <input type=\"text\" id=\"username\" placeholder=\"username\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <input type=\"text\" id=\"password\" placeholder=\"password\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                      <button id=\"element_user_sign_in\" class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\">create post</button>\n                    </div>\n\n                </div>\n\n           </div>\n        </div>\n     </div>\n\n    <div id=\"route_about_all\" class=\"gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n    <div class=\"position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n        <div id=\"route_about_cta\" class=\"position_relative float_left bg_yellow border_01vh_black pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark\">\n            <p class=\"font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left\">team cta</p>\n        </div>\n\n    </div>\n\n    <h1 class=\"verticle_text position_absolute top_0 left_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_black border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">services</h1>\n\n  </div>\n";
var element_after_vert_dots = "\n    <div id=\"wp_component_meta\" class=\"position_absolute width_25vh bottom_100 right_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_bottom_right_outside_white\">\n        <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n           \n                <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_flex_flow\">\n                    <b>Login user</b><br>\n                    <input type=\"text\" id=\"username\" placeholder=\"username\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <input type=\"text\" id=\"password\" placeholder=\"password\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                      <button id=\"element_user_sign_in\" class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\">create post</button>\n                    </div>\n\n                </div>\n\n           </div>\n        </div>\n     </div>\n\n    <div id=\"route_about_all\" class=\"gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n    <div class=\"position_absolute top_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n        <div id=\"route_about_cta\" class=\"position_relative float_left bg_yellow border_01vh_black pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark\">\n            <p class=\"font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left\">team cta</p>\n        </div>\n\n    </div>\n\n    <h1 class=\"verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_black border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">services</h1>\n\n  </div>\n";
var element_after_social_type = "\n    <div id=\"wp_component_meta\" class=\"position_absolute width_25vh bottom_100 left_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_bottom_left_outside_white\">\n        <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n           \n                <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_flex_flow\">\n                    <b>Login user</b><br>\n                    <input type=\"text\" id=\"username\" placeholder=\"username\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <input type=\"text\" id=\"password\" placeholder=\"password\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                      <button id=\"element_user_sign_in\" class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\">create post</button>\n                    </div>\n\n                </div>\n\n           </div>\n        </div>\n     </div>\n\n    <div id=\"route_about_all\" class=\"gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n    <div class=\"position_absolute top_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n        <div id=\"route_about_cta\" class=\"position_relative float_left bg_yellow border_01vh_black pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark\">\n            <p class=\"font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left\">team cta</p>\n        </div>\n\n    </div>\n\n    <h1 class=\"verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_black border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">services</h1>\n\n  </div>\n";
var element_after_menu = "\n  <div id=\"wp_component_meta\" class=\"position_absolute left_100 top_100 float_left hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 calc_4vh margin_2vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_left\">\n          <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"width_100 position_relative float_left padding_1vh bg_white border_01vh_black pseudo_arrow_top_left_outside_white\">\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div  class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n";
var element_after_social = "\n  <div id=\"wp_component_meta\" class=\"position_absolute left_0 bottom_100 float_left hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 calc_4vh margin_2vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_left\">\n          <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"width_100 position_relative float_left padding_1vh bg_white border_01vh_black pseudo_arrow_bottom_left_outside_white\">\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    @nownigel\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n";
var element_after_meta = "\n  <div id=\"wp_component_meta\" class=\"position_absolute right_0 bottom_100 float_left hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 calc_4vh margin_2vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_left\">\n          <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"width_100 position_relative float_left padding_1vh bg_white border_01vh_black pseudo_arrow_bottom_right_outside_white\">\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    Volume: 1 - 100\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n";
var element_after_search = "\n  <div id=\"wp_component_meta\" class=\"position_absolute left_0 top_100 float_left hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 calc_4vh margin_2vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_left\">\n          <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"width_100 position_relative float_left padding_1vh bg_white border_01vh_black pseudo_arrow_top_left_outside_white\">\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    type |\n                  </div>\n                </div>\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    tag |\n                  </div>\n                </div>\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    category |\n                  </div>\n                </div>\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    sub categories |\n                  </div>\n                </div>\n\n                <div  class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    date |\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n";
var element_after_create = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_left_outside_white\">\n        <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n           \n                <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_flex_flow\">\n                    <b>Login user</b><br>\n                    <input type=\"text\" id=\"username\" placeholder=\"username\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <input type=\"text\" id=\"password\" placeholder=\"password\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                      <button id=\"element_user_sign_in\" class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\">create post</button>\n                    </div>\n\n                </div>\n\n           </div>\n        </div>\n     </div>\n\n    <div id=\"route_about_all\" class=\"gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n    <div class=\"position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n        <div id=\"route_about_cta\" class=\"position_relative float_left bg_yellow border_01vh_black pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark\">\n            <p class=\"font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left\">team cta</p>\n        </div>\n\n    </div>\n\n    <h1 class=\"verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_black border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">services</h1>\n\n  </div>\n";
var element_user_info = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white\">\n        <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n           \n                <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_flex_flow\">\n                    <b>Login user</b><br>\n                    <input type=\"text\" id=\"username\" placeholder=\"username\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <input type=\"text\" id=\"password\" placeholder=\"password\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                      <button id=\"element_user_sign_in\" class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\">create post</button>\n                    </div>\n\n                </div>\n\n           </div>\n        </div>\n     </div>\n\n    <div id=\"route_about_all\" class=\"gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n    <div class=\"position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n        <div id=\"route_about_cta\" class=\"position_relative float_left bg_yellow border_01vh_black pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark\">\n            <p class=\"font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left\">team cta</p>\n        </div>\n\n    </div>\n\n    <h1 class=\"verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_black border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">services</h1>\n\n  </div>\n";
var element_after_icon_back = "\n  <div id=\"wp_component_meta\" class=\"position_absolute left_100 top_0 float_left hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 calc_4vh margin_2vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_left\">\n          <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"width_100 position_relative float_left padding_1vh bg_white border_01vh_black pseudo_arrow_left_outside_white webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                <div class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_location\" class=\"gui_create width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                    ".concat(element_after_menu_about, "\n                  </div>\n                </div>\n\n                <div class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div  id=\"icon_qr\" class=\"gui_create width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                    ").concat(element_after_menu_about, "\n                  </div>\n                </div>\n\n                <div class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_audio\" class=\"gui_create width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                    ").concat(element_after_menu_about, "\n                  </div>\n                </div>\n\n                <div class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_info\" class=\"gui_create width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                    ").concat(element_after_menu_about, "\n                  </div>\n                </div>\n\n                <div  class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_create\" class=\"gui_create width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                    ").concat(element_after_menu_about, "\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n");
var element_after_menu_dashboard = "\n  <div id=\"wp_component_meta\" class=\"position_absolute right_100 top_0 float_left hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 calc_2vh margin_1vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right\">\n          <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"width_100 position_relative float_left padding_1vh bg_white border_right_01vh_black pseudo_arrow_right_outside_white webkit_box_pack_center webkit_box_align display_webkit_box\">\n                \n                <div id=\"icon_sign_out\" class=\"display_none width_6025vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div class=\"gui_button_signout width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                    ".concat(element_after_menu_about, "\n                  </div>\n                </div>\n\n                <div id=\"icon_sign_in\" class=\"width_6025vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div class=\"gui_button_signin width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                    ").concat(element_after_sign_in, "\n                  </div>\n                </div>\n\n                <div id=\"icon_sign_up\" class=\"width_6025vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div class=\"gui_button_signup width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                    ").concat(element_after_sign_up, "\n                  </div>\n                </div>\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_twitter\" class=\"gui_twitter width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_twitch\" class=\"gui_twitch width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_facebook\" class=\"gui_facebook width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_youtube\" class=\"gui_youtube width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_instagram\" class=\"gui_instagram width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n");
var element_after_extra = "\n  <div id=\"wp_component_meta\" class=\"position_absolute right_100 top_0 bottom_0 margin_auto float_left hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 calc_2vh margin_1vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right\">\n          <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"width_100 position_relative float_left bg_white border_right_01vh_black pseudo_arrow_right_outside_white webkit_box_pack_center webkit_box_align display_webkit_box\">\n                \n                <div id=\"meta_route\" class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div class=\"gui_audio width_100 height_50 float_left position_relative float_left margin_auto\">\n                    ".concat(element_after_meta, "\n                    </div>\n                    \n                  </div>\n                </div>\n                \n                <div id=\"meta_route\" class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div class=\"gui_audio_on width_100 height_50 float_left position_relative float_left margin_auto\">\n                    ").concat(element_after_meta, "\n                    </div>\n                    \n                  </div>\n                </div>\n\n                <div id=\"meta_route\" class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div class=\"gui_audio_off width_100 height_50 float_left position_relative float_left margin_auto\">\n                    ").concat(element_after_meta, "\n                    </div>\n                    \n                  </div>\n                </div>\n\n                <div id=\"meta_route\" class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div class=\"gui_i width_100 height_50 float_left position_relative float_left margin_auto\">\n                    ").concat(element_after_meta, "\n                    </div>\n                    \n                  </div>\n                </div>\n\n                <div id=\"meta_route\" class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div class=\"gui_i_circle width_100 height_50 float_left position_relative float_left margin_auto\">\n                    ").concat(element_after_meta, "\n                    </div>\n                    \n                  </div>\n                </div>\n\n                <div id=\"meta_route\" class=\"width_6025vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div class=\"gui_button_hire width_100 height_50 float_left position_relative float_left margin_auto\">\n                    ").concat(element_after_meta, "\n                    </div>\n                    \n                  </div>\n                </div>\n\n                <div id=\"meta_route\" class=\"width_6025vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div class=\"gui_button_help width_100 height_50 float_left position_relative float_left margin_auto\">\n                    ").concat(element_after_meta, "\n                    </div>\n                    \n                  </div>\n                </div>\n\n                <div id=\"meta_route\" class=\"width_6025vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div class=\"gui_about_type width_100 height_50 float_left position_relative float_left margin_auto\">\n                    ").concat(element_after_meta, "\n                    </div>\n                    \n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n");
var element_after_back_up = "\n  <div id=\"wp_component_meta\" class=\"position_absolute right_100 top_0 float_left hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_01 calc_4vh margin_2vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right\">\n          <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"width_100 position_relative float_left padding_1vh bg_white border_01vh_black pseudo_arrow_right_outside_white webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_twitter\" class=\"gui_twitter width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_twitch\" class=\"gui_twitch width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_facebook\" class=\"gui_facebook width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_youtube\" class=\"gui_youtube width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_instagram\" class=\"gui_instagram width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n";
var anchor_menu_left = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_100 top_0 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_left_top_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    home\n                  </div>\n              </div>\n\n           </div>\n        </div>\n    </div>\n\n  </div>\n";
var anchor_menu_top = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_bottom_left_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    home\n                  </div>\n              </div>\n\n           </div>\n        </div>\n    </div>\n\n  </div>\n";
var anchor_menu_bottom = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_left_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    home\n                  </div>\n              </div>\n\n           </div>\n        </div>\n    </div>\n\n  </div>\n";
var anchor_menu_right = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh right_100 top_0 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <div class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_top_left_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    home\n                  </div>\n              </div>\n\n           </div>\n        </div>\n    </div>\n\n  </div>\n";
var element_after_button_menu_left = "\n  <span id=\"wp_component_meta\" class=\"position_absolute width_25vh right_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <span class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_bottom_right_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh\">\n\n              <span class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <span class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                     Our Product\n                  </span>\n              </span>\n\n           </div>\n        </div>\n     </span>\n\n     <div class=\"gui_enter_buttons position_absolute bottom_-6025vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n  </span>\n";
var element_after_button_menu_center = "\n  <span id=\"wp_component_meta\" class=\"position_absolute width_25vh left_100 top_0 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <span class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_left_top_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh\">\n\n              <span class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <span id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    home\n                  </span>\n              </span>\n\n           </div>\n        </div>\n    </span>\n\n  </span>\n";
var element_after_button_menu_right = "\n  <span id=\"wp_component_meta\" class=\"position_absolute width_25vh right_-100 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <span class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_bottom_left_outside_yellow\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh\">\n\n              <span class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <span class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                     Our Product\n                  </span>\n              </span>\n\n\n           </div>\n        </div>\n     </span>\n\n     <div class=\"gui_enter_buttons position_absolute bottom_-6025vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n  </span>\n";

var folds = function folds() {
  var content = "\n      <div id=\"folds\" class=\"display_none opacity_0 transform_translate3d_top0 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n      \n      </div>\n      ";
  return content;
};

var component_app_content_root = function component_app_content_root() {
  var component = "\n\n      <div id=\"section_1\" class=\"position_relative width_100 height_100vh margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n        <div id=\"cardboard_fold\" class=\"easing_01 width_100 height_100 bottom_0 right_0 position_absolute margin_auto\">\n          \n          <div id=\"top_left\" class=\"easing_01 width_100 height_100 bottom_100 right_100 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"top_right\" class=\"easing_01 width_100 height_100 bottom_100 left_100 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"top\" class=\"easing_01 width_100 height_100 bottom_100 left_0 right_0 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"left\" class=\"easing_01 width_100 height_100 bottom_0 right_100 position_absolute margin_auto\">\n\n          </div>\n\n          <div id=\"left_outside\" class=\"easing_01 width_100 height_100 bottom_0 right_200 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"center\" class=\"easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n            ".concat(folds(), "\n\n          </div>\n\n          <div id=\"right\" class=\"easing_01 width_100 height_100 bottom_0 left_100 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"bottom\" class=\"easing_01 width_100 height_100 top_100 left_0 right_0 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"bottom_left\" class=\"easing_01 width_100 height_100 top_100 right_100 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"bottom_right\" class=\"easing_01 width_100 height_100 top_100 left_100 position_absolute margin_auto\">\n\n          </div>\n        \n        </div>\n\n      </div>\n\n      <div id=\"transition_1\" class=\"position_relative width_100 height_100vh top_1vh gui_paint_top float_left display_flex_flow\">\n            \n      </div>\n\n      <div id=\"section_2\" class=\"position_relative width_100 height_100vh bg_yellow margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n        <div class=\"position_relative max_width width_100 height_100vh margin_auto float_left\">\n          \n          \n          <script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n          <!-- Responsive Pink -->\n          <ins class=\"adsbygoogle\"\n               style=\"display:block\"\n               data-ad-client=\"ca-pub-3909705375565088\"\n               data-ad-slot=\"6572891219\"\n               data-ad-format=\"auto\"\n               data-full-width-responsive=\"true\"></ins>\n          <script>\n          (adsbygoogle = window.adsbygoogle || []).push({});\n          </script>\n\n        </div>\n      </div>\n\n      <div id=\"section_3\" class=\"position_relative width_100 height_100vh bg_yellow margin_auto float_left display_flex_flow\">\n              \n          <div class=\"gui_logo position_absolute bottom_0 top_0 left_0 right_0 width_50 height_50 margin_auto float_left\">\n          </div>\n\n          <div id=\"wp_component\" class=\"position_absolute top_0 left_-75 width_100 height_100 gui_paint_right float_left display_flex_flow\">\n          </div>\n\n          <div id=\"wp_component\" class=\"position_absolute top_0 right_-75 width_100 height_100 gui_paint_left float_left display_flex_flow\">\n          </div>\n\n\n            <div class=\"easing_01 position_absolute width_100 height_100 bottom_0 left_0 right_0 margin_auto float_left\">\n              \n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_01 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n            </div>\n\n      </div>\n\n      <div id=\"section_4\" class=\"position_relative width_100 height_auto bg_yellow margin_auto float_left display_flex_flow\">\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Action #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">Match Loggin & Local</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">Scrolled</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">Scrolled Bottom Blog</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">Timed Nav vanish</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">loaded</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">loaded + cursor_moved</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n      </div>\n\n      <div id=\"section_5\" class=\"position_relative width_100 height_100vh bg_yellow margin_auto float_left\">\n      \n      </div>\n\n      <div id=\"section_6\" class=\"position_relative width_100 height_100vh bg_yellow margin_auto float_left\">\n      \n      </div>\n\n      <div id=\"section_7\" class=\"position_relative width_100 height_100vh bg_yellow margin_auto float_left\">\n      \n      </div>\n\n      <div id=\"transition_2\" class=\"position_relative width_100 height_100vh gui_paint_bottom top_-1vh margin_auto float_left\">\n      \n      </div>\n\n      <div id=\"section_8\" class=\"position_relative width_100 height_100vh margin_auto float_left\">\n      \n      </div>\n\n  ");
  return component;
};

var element_guis = function element_guis() {
  var element = "\n\n      <div id=\"component_app_gui_toast_top_left\" class=\"display_none opacity_0 easing_01 transform_translate3d_left0 float_left position_fixed top_1205vh left_6025vw margin_auto z_index_8\">\n\n        <div id=\"create_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            \n            <div class=\"gui_create position_relative width_50 height_50 float_left\">\n              ".concat(element_after_create, "\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id=\"component_app_gui_toast_top_right\" class=\"display_none opacity_0 easing_01 transform_translate3d_left0 float_left position_fixed top_1205vh right_6025vw margin_auto z_index_8\">\n\n        <div id=\"create_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            \n            <div class=\"gui_create position_relative width_50 height_50 float_left\">\n              ").concat(element_after_create, "\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id=\"component_app_gui_toast_bottom_left\" class=\"display_none opacity_0 easing_01 transform_translate3d_left0 float_left position_fixed bottom_1205vh left_6025vw margin_auto z_index_8\">\n\n        <div id=\"create_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            \n            <div class=\"gui_create position_relative width_50 height_50 float_left\">\n              ").concat(element_after_create, "\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id=\"component_app_gui_toast_bottom_right\" class=\"display_none opacity_0 easing_01 transform_translate3d_left0 float_left position_fixed bottom_1205vh right_6025vw margin_auto z_index_8\">\n\n        <div id=\"create_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            \n            <div class=\"gui_create position_relative width_50 height_50 float_left\">\n              ").concat(element_after_create, "\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id=\"component_app_gui_top_left\" class=\"display_none opacity_0 easing_01 transform_translate3d_left0 float_left position_fixed top_0 left_0 margin_auto z_index_8\">\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_30125vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div id=\"icon_menu\" class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto width_6025vw height_1205vh float_left transform_translate3d_left0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left\">\n              \n              <div id=\"icon_logo\" class=\"gui_logo position_relative width_100 height_100 margin_auto top_-05vh float_left\">\n                ").concat(element_after_logo_menu_right, "\n                ").concat(element_after_logo_menu_bottom, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"search_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div id=\"icon_search\" class=\"gui_search position_relative width_50 height_50 float_left\">\n                ").concat(element_after_search, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_30125vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div id=\"icon_back\" class=\"gui_arrow_left position_relative width_75 height_50 float_left\">\n                ").concat(element_after_icon_back, "\n              </div>\n\n            </div>\n\n          </div>\n\n      </div>\n\n      <div id=\"component_app_gui_top_center\" class=\"display_none opacity_0 easing_01 transform_translate3d_top0 float_left position_fixed calc_50vh_width top_0 left_0 right_0 margin_auto z_index_8\">\n\n        <div class=\"width_100 height_1205vh float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id=\"component_app_gui_top_right\" class=\"display_none opacity_0 easing_01 transform_translate3d_left0 height_1205vh float_left position_fixed top_0 right_0 margin_auto display_flex_flow z_index_8\">\n        \n        <div id=\"user_related\">\n\n\n          <div id=\"icon_dashboard\" class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              <div id=\"user_thumb\" class=\"gui_avatar width_50 height_50 float_left position_relative float_left margin_auto\"></div>\n              ").concat(element_after_menu_dashboard, "\n              ").concat(element_user_info, "\n            </div>\n          </div>\n\n          <div id=\"gui_route\" class=\"position_relative width_6025vw height_1205vh float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              <div id=\"icon_dots\" class=\"gui_dots position_relative width_50 height_50 float_left\">\n              \n              </div>\n              ").concat(element_after_dots, "\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id=\"component_app_gui_right\" class=\"display_none opacity_0 easing_01 transform_translate3d_left0 width_10vh calc_25vh_height float_left position_fixed bottom_0 top_0 right_0 margin_auto z_index_8 display_webkit_box webkit_box_pack_center webkit_box_align\">\n          \n          <div class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n            <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n              <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                    ").concat(element_after_menu, "\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n              <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                    ").concat(element_after_menu, "\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n              <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                    ").concat(element_after_menu, "\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n              <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                    ").concat(element_after_menu, "\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n              <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                    ").concat(element_after_menu, "\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n              <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                    ").concat(element_after_menu, "\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n\n          </div>\n\n      </div>\n\n      <div id=\"component_app_gui_left\" class=\"display_none opacity_0 easing_01 transform_translate3d_left0 width_10vh calc_25vh_height float_left position_fixed bottom_0 top_0 left_0 margin_auto z_index_8 display_webkit_box webkit_box_pack_center webkit_box_align\">\n\n        <div class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id=\"component_app_gui_bottom_left\" class=\"display_none opacity_0 easing_01 transform_translate3d_left0 height_1205vh float_left position_fixed bottom_0 left_0 margin_auto z_index_8\">\n        \n        <div id=\"social_route\" class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_about_type width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n              ").concat(element_after_social_type, "\n              ").concat(element_after_social_menu_right, "\n          </div>\n        </div>\n\n        <div id=\"social_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_vert_colon width_50 height_50 float_left position_relative float_left margin_auto\">").concat(element_after_social, "</div>\n          </div>\n        </div>\n\n        <div id=\"social_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div id=\"icon_twitter\" class=\"gui_twitter width_50 height_50 float_left position_relative float_left margin_auto\">").concat(element_after_social, "</div>\n          </div>\n        </div>\n\n        <div id=\"social_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div id=\"icon_twitch\" class=\"gui_twitch width_50 height_50 float_left position_relative float_left margin_auto\">").concat(element_after_social, "</div>\n          </div>\n        </div>\n\n        <div id=\"social_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div id=\"icon_facebook\" class=\"gui_facebook width_50 height_50 float_left position_relative float_left margin_auto\">").concat(element_after_social, "</div>\n          </div>\n        </div>\n\n        <div id=\"social_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div id=\"icon_youtube\" class=\"gui_youtube width_50 height_50 float_left position_relative float_left margin_auto\">").concat(element_after_social, "</div>\n          </div>\n        </div>\n\n        <div id=\"social_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div id=\"icon_instagram\" class=\"gui_instagram width_50 height_50 float_left position_relative float_left margin_auto\">").concat(element_after_social, "</div>\n          </div>\n        </div>\n\n      </div>\n\n      <div id=\"component_app_gui_bottom_center\" class=\"display_none opacity_0 easing_01 transform_translate3d_top0 height_1205vh float_left position_fixed calc_50vh_width bottom_0 left_0 right_0 margin_auto z_index_8\">\n        \n        <div class=\"width_100 height_1205vh float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id=\"component_app_gui_bottom_right\" class=\"display_none opacity_0 easing_01 transform_translate3d_left0 height_1205vh float_left position_fixed bottom_0 right_0 margin_auto display_flex_flow z_index_8\">\n\n        <div id=\"meta_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_01\">\n\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            \n            <div id=\"icon_up\" class=\"gui_arrow_top position_relative width_75 height_50 float_left\">\n              \n            </div>\n            ").concat(element_after_back_up, "\n\n          </div>\n\n        </div>\n\n        <div id=\"gui_route\" class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div id=\"icon_vert_dots\" class=\"gui_vert_dots width_50 height_50 float_left position_relative float_left margin_auto\">\n              \n            </div>\n            ").concat(element_after_vert_dots, "\n              ").concat(element_after_extra, "\n\n          </div>\n        </div>\n\n      </div>\n\n    ");
  return element;
};

var value_ui_controls = "\n\n\n        <div class=\"position_relative width_100 float_left\">\n        <div class=\"position_relative calc_5vh margin_205vh float_left\">\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_10vh line_height_10vh\">events:</div>\n            <div class=\"position_relative font_size_205vh line_height_205vh border_bottom_01vh_light_yellow_0 width_100 display_flex_flow float_left margin_auto\">\n            Usual Events\n            </div>\n\n            <div class=\"position_relative font_size_2vh line_height_205vh border_bottom_01vh_light_yellow_0 width_100 display_flex_flow float_left margin_auto\">\n            time: <div id=\"time\"></div>\n            </div>\n\n\n            <div class=\"position_relative font_size_205vh line_height_205vh border_bottom_01vh_light_yellow_0 width_100 display_flex_flow float_left margin_auto\">\n              64\n            </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n    <div id=\"component_app_status_state_events_mouse_game_bit_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n    <div id=\"component_app_status_state_events_mouse_game_bit_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">mouse:</div>\n\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_client_X: <div id=\"mouse_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_client_Y: <div id=\"mouse_client_Y\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_client_X: <div id=\"mouse_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_client_Y: <div id=\"mouse_client_Y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_up_client_X: <div id=\"mouse_up_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_up_client_Y: <div id=\"mouse_up_client_Y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_down_client_X: <div id=\"mouse_down_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_down_client_Y: <div id=\"mouse_down_client_Y\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_up: <div id=\"mouse_up\"></div>\n            </p>\n\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            click_position: <div id=\"click_position\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            wheel_direction: <div id=\"wheel_direction\"></div>\n            </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n  <div id=\"component_app_status_state_events_mouse_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n  <div id=\"component_app_status_state_events_mouse_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">mouse down track:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  mousedragDistanceXstart: <div id=\"mousedragDistanceXstart\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  mousedragDistanceYstart: <div id=\"mousedragDistanceYstart\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">mouse up track:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  mousedragDistanceXend: <div id=\"mousedragDistanceXend\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  mousedragDistanceYend: <div id=\"mousedragDistanceYend\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">drag:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  dragX: <div id=\"dragX\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  dragY: <div id=\"dragY\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">pen:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  penX: <div id=\"penX\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  penY: <div id=\"penY\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">pencil:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  pencilX: <div id=\"pencilX\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  pencilY: <div id=\"pencilY\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">drop:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n  <div id=\"component_app_status_state_events_mouse_drop_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n  <div id=\"component_app_status_state_events_mouse_drop_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">drop_start:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n  <div id=\"component_app_status_state_events_mouse_drop_start_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n  <div id=\"component_app_status_state_events_mouse_drop_start_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">drop_end:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n  <div id=\"component_app_status_state_events_mouse_drop_end_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n  <div id=\"component_app_status_state_events_mouse_drop_end_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">ux:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">dimensions:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">width: \n  <div id=\"component_app_status_state_ux_dimensions_width\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">height: \n  <div id=\"component_app_status_state_ux_dimensions_height\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">browser:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">width: \n  <div id=\"component_app_status_state_ux_browser_width\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">height: \n  <div id=\"component_app_status_state_ux_browser_height\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_10vh line_height_10vh\">Timer:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            timer_mouse_leave: <div id=\"timer_mouse_leave\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            timer_key_up: <div id=\"timer_key_up\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            timer_mouse_up: <div id=\"timer_mouse_up\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            keys: <div id=\"key_keys\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            last key down: <div id=\"key_key_down\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            last key up: <div id=\"key_key_up\"></div>\n            </p>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">iPhone/iPad:</div>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">Oriontation.Absolute: \n  <div id=\"component_app_status_state_events_mouse_absolute\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Oriontation.Alpha: \n  <div id=\"component_app_status_state_events_mouse_alpha\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Oriontation.Beta: \n  <div id=\"component_app_status_state_events_mouse_beta\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Oriontation.Gamma: \n  <div id=\"component_app_status_state_events_mouse_gamma\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">acceleration.x: \n  <div id=\"component_app_status_state_events_mouse_acceleration_x\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">acceleration.y: \n  <div id=\"component_app_status_state_events_mouse_acceleration_y\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">acceleration.z: \n  <div id=\"component_app_status_state_events_mouse_acceleration_z\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">accelerationIncludingGravity.x: \n  <div id=\"component_app_status_state_events_mouse_accelerationIncludingGravity_x\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">accelerationIncludingGravity.y: \n  <div id=\"component_app_status_state_events_mouse_accelerationIncludingGravity_y\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">accelerationIncludingGravity.z: \n  <div id=\"component_app_status_state_events_mouse_accelerationIncludingGravity_z\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">rotationRate.Alpha: \n  <div id=\"component_app_status_state_events_mouse_rotationRate_alpha\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">rotationRate.Beta: \n  <div id=\"component_app_status_state_events_mouse_rotationRate_beta\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">rotationRate.Gamma: \n  <div id=\"component_app_status_state_events_mouse_rotationRate_gamma\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            rotationAngle: <div id=\"rotationAngle\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            radiusX: <div id=\"radiusX\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            radiusY: <div id=\"radiusY\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceX: <div id=\"dragDistanceX\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceY: <div id=\"dragDistanceY\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceXStart: <div id=\"dragDistanceXStart\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceYStart: <div id=\"dragDistanceYStart\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceXEnd: <div id=\"dragDistanceXEnd\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceYEnd: <div id=\"dragDistanceYEnd\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_client_X: <div id=\"touch_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_client_Y: <div id=\"touch_client_Y\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_page_X: <div id=\"touch_page_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_page_Y: <div id=\"touch_page_Y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touches: <div id=\"touches\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_start_client_X: <div id=\"touch_start_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_start_client_Y: <div id=\"touch_start_client_Y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_start_force: <div id=\"touch_start_force\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_end_client_X: <div id=\"touch_end_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_end_client_Y: <div id=\"touch_end_client_Y\"></div>\n            </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">iPhone Only:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_end_force: <div id=\"touch_end_force\"></div>\n            </p>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">iPhone/iPad VR:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            last_action: <div id=\"last_action\"></div>\n            </p>\n\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">iPhone/iPad Oriontation:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_alpha: <div id=\"event_alpha\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_beta: <div id=\"event_beta\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_gamma: <div id=\"event_gamma\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_accelerationIncludingGravity_x: <div id=\"event_accelerationIncludingGravity_x\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_accelerationIncludingGravity_y: <div id=\"event_accelerationIncludingGravity_y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_accelerationIncludingGravity_z: <div id=\"event_accelerationIncludingGravity_z\"></div>\n            </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">Component API:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_clientHeight (Container Height): <div id=\"scroll_clientHeight\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_clientWidth: <div id=\"scroll_clientWidth\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_scrollHeight (Max Scroll Height): <div id=\"scroll_scrollHeight\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_scrollWidth: <div id=\"scroll_scrollWidth\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_scrollTop (Current Scroll): <div id=\"scroll_scrollTop\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_scrollLeft: <div id=\"scroll_scrollLeft\"></div>\n            </p>\n\n\n        \n  <div class=\"position_relative width_100 float_left \">\n  UI state:\n  </div>\n  <div class=\"position_relative width_100 float_left\">\n  Route State (Onboarding, Form, Search, Interaction):\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Colors:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">load:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Grid:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Depth:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">90: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">270: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Colors:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">load:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Grid:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Depth:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">90: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">270: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Setting:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Accent:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Effect:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Pieces:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Particles:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Interaction:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Characters:</div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">enemies: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Route:</div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Materials: \n  <div id=\"route\" class=\" position_relative display opacity_1\">materials</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Gui:</div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">logo: \n  <div id=\"component_app_status_display_gui_element_logo\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">arrows: \n  <div id=\"component_app_status_display_gui_element_arrows\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">buttons: \n  <div id=\"component_app_status_display_gui_element_buttons\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_10vh\">Modal:</div>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">pop</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pop_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pop_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pop_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pop_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pop_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pop_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pop_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pop_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pop_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pop_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pop_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pop_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">pip</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pip_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pip_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pip_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pip_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pip_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pip_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pip_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pip_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pip_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pip_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pip_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pip_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">nav</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_nav_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_nav_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_nav_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_nav_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_nav_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_nav_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_nav_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_nav_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_nav_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_nav_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_nav_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_nav_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">page</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_page_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_page_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_page_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_page_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_page_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_page_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_page_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_page_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_page_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_page_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_page_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_page_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">menu</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_menu_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_menu_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_menu_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_menu_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_menu_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_menu_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_menu_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_menu_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_menu_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_menu_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_menu_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_menu_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">morph</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_morph_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_morph_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_morph_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_morph_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_morph_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_morph_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_morph_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_morph_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_morph_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_morph_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_morph_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_morph_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">corner</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_corner_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_corner_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_corner_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_corner_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_corner_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_corner_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_corner_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_corner_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_corner_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_corner_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_corner_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_corner_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">gradient</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_gradient_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_gradient_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_gradient_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_gradient_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_gradient_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_gradient_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_gradient_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_gradient_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_gradient_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_gradient_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_gradient_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_gradient_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">fade</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_fade_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_fade_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_fade_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_fade_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_fade_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_fade_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_fade_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_fade_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_fade_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_fade_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_fade_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_fade_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">overlay</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_overlay_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_overlay_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_overlay_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_overlay_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_overlay_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_overlay_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_overlay_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_overlay_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_overlay_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_overlay_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_overlay_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_overlay_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  </div>\n  </div>\n  ";
var element_nav_top = "\n    <div id=\"component_app_modal_element_nav_top\" class=\"easing_01 display_none opacity_0 easing_01 transform_translate3d_top0 position_fixed top_0 left_0 right_0 margin_auto height_1205vh calc_20vh_width z_index_6 \">\n      \n      <div class=\"position_relative webkit_box_pack_center webkit_box_align display_webkit_box width_100 z_index_1 float_left\">\n          \n        <div class=\"margin_auto position_relative float_left z_index_1 \">\n\n          <div id=\"routes\" class=\"margin_auto position_relative float_left z_index_1 \">\n\n              <div id=\"nav_route\" class=\"width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div id=\"route_about\" class=\"gui_about_type width_100 height_100 float_left position_relative float_left margin_auto\">\n\n                    <div id=\"route_about_icon\" class=\"circle position_absolute right_100 top_0 bottom_0 width_10 height_100 margin_1025vh float_left\">\n                      ".concat(anchor_menu_right, "\n                    </div>\n\n                  </div>\n\n                  ").concat(element_after_menu_about, "\n\n                </div>\n\n              </div>\n\n              <div id=\"nav_route\" class=\"width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                <div id=\"route_team\" class=\"gui_about_type width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n\n                ").concat(element_after_menu_about, "\n\n                </div>\n              </div>\n\n              <div id=\"nav_route\" class=\"width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                <div id=\"route_library\" class=\"gui_about_type width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n\n                ").concat(element_after_menu_about, "\n\n                </div>\n              </div>\n\n              <div id=\"nav_route\" class=\"width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                <div id=\"route_abilities\" class=\"gui_about_type width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n\n                ").concat(element_after_menu_about, "\n                \n                </div>\n              </div>\n\n              <div id=\"nav_route\" class=\"width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                <div id=\"route_partners\" class=\"gui_about_type width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n\n                ").concat(element_after_menu_about, "\n                \n                </div>\n              </div>\n\n              <div id=\"nav_route\" class=\"width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                <div id=\"route_services\" class=\"gui_about_type width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n\n                ").concat(element_after_menu_about, "\n\n                </div>\n              </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n    ");
var element_nav_left = "\n    <div id=\"component_app_modal_element_nav_left\" class=\"easing_01 transform_translate3d_left0 display_none opacity_0 position_fixed top_0 left_0 bottom_0 height_100 width_10vh z_index_6 margin_auto\">\n      \n      \n    </div>\n    ";
var element_nav_bottom = "\n    <div id=\"component_app_modal_element_nav_bottom\" class=\"easing_01 transform_translate3d_top0 display_none opacity_0 position_fixed bottom_0 left_0 right_0 height_10vh width_100 z_index_6 margin_auto\">\n      \n    </div>\n    ";
var element_nav_right = "\n    <div id=\"component_app_modal_element_nav_right\" class=\"easing_01 transform_translate3d_left0 display_none opacity_0 position_fixed top_0 bottom_0 right_0 height_100 width_10vh z_index_6 margin_auto\">\n      \n    </div>\n    ";
var element_page_top = "\n    <div id=\"component_app_modal_element_page_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 height_100vh width_100 z_index_6 margin_auto\">\n      <div id=\"component_app_modal_element_page_top_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 overflow_hidden z_index_6 margin_auto\">\n        \n      </div>\n\n    </div>\n    ";
var element_page_left = "\n    <div id=\"component_app_modal_element_page_left\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 height_100vh width_100 z_index_6 margin_auto\">\n      <div id=\"component_app_modal_element_page_left_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 overflow_hidden z_index_6 margin_auto\">\n      \n      </div>\n    </div>\n    ";
var element_page_bottom = "\n    <div id=\"component_app_modal_element_page_bottom\" class=\"easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 height_100vh width_100 margin_auto z_index_6\">\n      <div id=\"component_app_modal_element_page_bottom_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\"> \n\n      </div>\n    </div>\n    ";
var element_page_right = "\n    <div id=\"component_app_modal_element_page_right\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 height_100vh width_100 margin_auto z_index_6\">\n      <div id=\"component_app_modal_element_page_right_content\" class=\"position_relative width_100 height_100 bg_white overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left z_index_0 \">\n\n        <div class=\"width_100 display_webkit_box webkit_box_pack_center webkit_box_align float_left position_relative\">\n          <div class=\"width_100 max_width float_left position_relative\">\n\n            <div id=\"page_right_nav_filler\" class=\"width_100 height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_relative\">\n            </div>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">choose title</h1>\n            <input id=\"element_input_filter\" class=\"width_100\" placeholder=\"filter by: title\" type=\"text\" name=\"\"/>\n            <br/>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">choose types</h1>\n            <input id=\"element_input_types\" class=\"width_100\" placeholder=\"adds types\" type=\"text\" name=\"\"/>\n            <div id=\"types\"></div>\n            <br/>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">choose username for post</h1>\n            <input id=\"element_input_post_username\" class=\"width_100\" placeholder=\"element_input_post_username\" type=\"text\" name=\"\"/>\n            <br/>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">choose blog post style</h1>\n            <input id=\"element_input_style\" class=\"width_100\" placeholder=\"element_input_style\" type=\"text\" name=\"\"/>\n            <br/>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">login</h1>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\" id=\"users_username\"></h1>\n            <input id=\"username\" class=\"width_100\" placeholder=\"username\" type=\"text\" name=\"\"/>\n            <br/>\n            <input id=\"password\" class=\"width_100\" placeholder=\"password\" type=\"text\" name=\"\"/>\n            <br/>\n            <div id=\"element_user_sign_in\" class=\"width_100 bg_white color_yellow float_left text_align_center\">sign in</div>\n            <div id=\"element_user_sign_out\" class=\"width_100 bg_white color_yellow float_left text_align_center\">sign out</div>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">Library inputs</h1>\n            <input id=\"create_library_input_title\" class=\"width_100\" placeholder=\"create_library_input_title\" type=\"text\" name=\"\"/>\n            <br/>\n            <input id=\"create_library_input_subtitle\" class=\"width_100\" placeholder=\"create_library_input_subtitle\" type=\"text\" value=\"a placeholder subtitle\" name=\"\"/>\n            <br/>\n            <input id=\"create_library_input_paragraph\" class=\"width_100\" placeholder=\"create_library_input_paragraph\" type=\"text\" value=\"a placeholder paragraph\" name=\"\"/>\n            <br/>\n            <input id=\"create_library_input_category\" class=\"width_100\" placeholder=\"create_library_input_category\" type=\"text\" value=\"a placeholder category\" name=\"\"/>\n            <br/>\n            <input id=\"create_library_input_sub_category\" class=\"width_100\" placeholder=\"create_library_input_sub_category\" type=\"text\" value=\"a placeholder sub category\" name=\"\"/>\n            <br/>\n            <input id=\"create_library_input_feature_style\" class=\"width_100\" placeholder=\"create_library_input_feature_style\" type=\"text\" value=\"a placeholder feature style\" name=\"\"/>\n            <br/>\n            <input id=\"create_library_input_tag\" class=\"width_100\" placeholder=\"create_library_input_tag\" type=\"text\" value=\"a placeholder tag\"name=\"\"/>\n            <br/>\n            <input id=\"create_library_input_type\" class=\"width_100\" placeholder=\"create_library_input_type\" type=\"text\" value=\"a placeholder type\"name=\"\"/>\n            <br/>\n            <input id=\"create_library_input_feature_image_src\" class=\"width_100\" placeholder=\"create_library_input_feature_image_src\" type=\"text\" value=\"https://tinyurl.com/y2j3t4v9\" name=\"\"/>\n            <br/>\n\n            <div id=\"element_input_create_library\" class=\"width_100 bg_white color_yellow float_left text_align_center\">create library post</div>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">Create Roster</h1>\n            <input id=\"new_username\" class=\"width_100\" placeholder=\"username\" type=\"text\" name=\"\"/>\n            <br/>\n            <input id=\"new_password\" class=\"width_100\" placeholder=\"password\" type=\"text\" name=\"\"/>\n            <br/>\n            <div id=\"element_input_create_roster\" class=\"width_100 bg_white color_yellow float_left text_align_center\">create roster user</div>\n\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">services inputs</h1>\n            <input id=\"create_services_input_title\" class=\"width_100\" placeholder=\"create_services_input_title\" type=\"text\" name=\"\"/>\n            <br/>\n            <input id=\"create_services_input_subtitle\" class=\"width_100\" placeholder=\"create_services_input_subtitle\" type=\"text\" value=\"a placeholder subtitle\" name=\"\"/>\n            <br/>\n            <input id=\"create_services_input_paragraph\" class=\"width_100\" placeholder=\"create_services_input_paragraph\" type=\"text\" value=\"a placeholder paragraph\" name=\"\"/>\n            <br/>\n            <input id=\"create_services_input_category\" class=\"width_100\" placeholder=\"create_services_input_category\" type=\"text\" value=\"a placeholder category\" name=\"\"/>\n            <br/>\n            <input id=\"create_services_input_sub_category\" class=\"width_100\" placeholder=\"create_services_input_sub_category\" type=\"text\" value=\"a placeholder sub category\" name=\"\"/>\n            <br/>\n            <input id=\"create_services_input_feature_style\" class=\"width_100\" placeholder=\"create_services_input_feature_style\" type=\"text\" value=\"a placeholder feature style\" name=\"\"/>\n            <br/>\n            <input id=\"create_services_input_tag\" class=\"width_100\" placeholder=\"create_services_input_tag\" type=\"text\" value=\"a placeholder tag\"name=\"\"/>\n            <br/>\n            <input id=\"create_services_input_type\" class=\"width_100\" placeholder=\"create_services_input_type\" type=\"text\" value=\"a placeholder type\"name=\"\"/>\n            <br/>\n            <input id=\"create_services_input_feature_image_src\" class=\"width_100\" placeholder=\"create_services_input_feature_image_src\" type=\"text\" value=\"https://tinyurl.com/y2j3t4v9\" name=\"\"/>\n            <br/>\n            <div id=\"element_input_create_services\" class=\"width_100 bg_white color_yellow float_left text_align_center\">create service post</div>\n\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">abilities inputs</h1>\n            <input id=\"create_abilities_input_title\" class=\"width_100\" placeholder=\"create_abilities_input_title\" type=\"text\" name=\"\"/>\n            <br/>\n            <input id=\"create_abilities_input_subtitle\" class=\"width_100\" placeholder=\"create_abilities_input_subtitle\" type=\"text\" value=\"a placeholder subtitle\" name=\"\"/>\n            <br/>\n            <input id=\"create_abilities_input_paragraph\" class=\"width_100\" placeholder=\"create_abilities_input_paragraph\" type=\"text\" value=\"a placeholder paragraph\" name=\"\"/>\n            <br/>\n            <input id=\"create_abilities_input_category\" class=\"width_100\" placeholder=\"create_abilities_input_category\" type=\"text\" value=\"a placeholder category\" name=\"\"/>\n            <br/>\n            <input id=\"create_abilities_input_sub_category\" class=\"width_100\" placeholder=\"create_abilities_input_sub_category\" type=\"text\" value=\"a placeholder sub category\" name=\"\"/>\n            <br/>\n            <input id=\"create_abilities_input_feature_style\" class=\"width_100\" placeholder=\"create_abilities_input_feature_style\" type=\"text\" value=\"a placeholder feature style\" name=\"\"/>\n            <br/>\n            <input id=\"create_abilities_input_tag\" class=\"width_100\" placeholder=\"create_abilities_input_tag\" type=\"text\" value=\"a placeholder tag\"name=\"\"/>\n            <br/>\n            <input id=\"create_abilities_input_type\" class=\"width_100\" placeholder=\"create_abilities_input_type\" type=\"text\" value=\"a placeholder type\"name=\"\"/>\n            <br/>\n            <input id=\"create_abilities_input_feature_image_src\" class=\"width_100\" placeholder=\"create_abilities_input_feature_image_src\" type=\"text\" value=\"https://tinyurl.com/y2j3t4v9\" name=\"\"/>\n            <br/>\n            <div id=\"element_input_create_abilities\" class=\"width_100 bg_white color_yellow float_left text_align_center\">create abilities post</div>\n\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">skills inputs</h1>\n            <input id=\"create_skills_input_title\" class=\"width_100\" placeholder=\"create_skills_input_title\" type=\"text\" name=\"\"/>\n            <br/>\n            <input id=\"create_skills_input_subtitle\" class=\"width_100\" placeholder=\"create_skills_input_subtitle\" type=\"text\" value=\"a placeholder subtitle\" name=\"\"/>\n            <br/>\n            <input id=\"create_skills_input_paragraph\" class=\"width_100\" placeholder=\"create_skills_input_paragraph\" type=\"text\" value=\"a placeholder paragraph\" name=\"\"/>\n            <br/>\n            <input id=\"create_skills_input_category\" class=\"width_100\" placeholder=\"create_skills_input_category\" type=\"text\" value=\"a placeholder category\" name=\"\"/>\n            <br/>\n            <input id=\"create_skills_input_sub_category\" class=\"width_100\" placeholder=\"create_skills_input_sub_category\" type=\"text\" value=\"a placeholder sub category\" name=\"\"/>\n            <br/>\n            <input id=\"create_skills_input_feature_style\" class=\"width_100\" placeholder=\"create_skills_input_feature_style\" type=\"text\" value=\"a placeholder feature style\" name=\"\"/>\n            <br/>\n            <input id=\"create_skills_input_tag\" class=\"width_100\" placeholder=\"create_skills_input_tag\" type=\"text\" value=\"a placeholder tag\"name=\"\"/>\n            <br/>\n            <input id=\"create_skills_input_type\" class=\"width_100\" placeholder=\"create_skills_input_type\" type=\"text\" value=\"a placeholder type\"name=\"\"/>\n            <br/>\n            <input id=\"create_skills_input_feature_image_src\" class=\"width_100\" placeholder=\"create_skills_input_feature_image_src\" type=\"text\" value=\"https://tinyurl.com/y2j3t4v9\" name=\"\"/>\n            <br/>\n            <div id=\"element_input_create_skills\" class=\"width_100 bg_white color_yellow float_left text_align_center\">create skills post</div>\n\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">partners inputs</h1>\n            <input id=\"create_partners_input_title\" class=\"width_100\" placeholder=\"create_partners_input_title\" type=\"text\" name=\"\"/>\n            <br/>\n            <input id=\"create_partners_input_subtitle\" class=\"width_100\" placeholder=\"create_partners_input_subtitle\" type=\"text\" value=\"a placeholder subtitle\" name=\"\"/>\n            <br/>\n            <input id=\"create_partners_input_paragraph\" class=\"width_100\" placeholder=\"create_partners_input_paragraph\" type=\"text\" value=\"a placeholder paragraph\" name=\"\"/>\n            <br/>\n            <input id=\"create_partners_input_category\" class=\"width_100\" placeholder=\"create_partners_input_category\" type=\"text\" value=\"a placeholder category\" name=\"\"/>\n            <br/>\n            <input id=\"create_partners_input_sub_category\" class=\"width_100\" placeholder=\"create_partners_input_sub_category\" type=\"text\" value=\"a placeholder sub category\" name=\"\"/>\n            <br/>\n            <input id=\"create_partners_input_feature_style\" class=\"width_100\" placeholder=\"create_partners_input_feature_style\" type=\"text\" value=\"a placeholder feature style\" name=\"\"/>\n            <br/>\n            <input id=\"create_partners_input_tag\" class=\"width_100\" placeholder=\"create_partners_input_tag\" type=\"text\" value=\"a placeholder tag\"name=\"\"/>\n            <br/>\n            <input id=\"create_partners_input_type\" class=\"width_100\" placeholder=\"create_partners_input_type\" type=\"text\" value=\"a placeholder type\"name=\"\"/>\n            <br/>\n            <input id=\"create_partners_input_feature_image_src\" class=\"width_100\" placeholder=\"create_partners_input_feature_image_src\" type=\"text\" value=\"https://tinyurl.com/y2j3t4v9\" name=\"\"/>\n            <br/>\n            <div id=\"element_input_create_partners\" class=\"width_100 bg_white color_yellow float_left text_align_center\">create partners post</div>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">Sorting type</h1>\n            <input id=\"element_input_sorting_type\" placeholder=\"choose sorting type\"/>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">user library</h1>\n            <ol id=\"element_ol_firebase_user_library\"></ol>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">user subs library</h1>\n            <ol id=\"element_ol_firebase_user_subs_library\"></ol>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">user liked library</h1>\n            <ol id=\"element_ol_firebase_user_liked_library\"></ol>\n\n            <div id=\"less_posts\" class=\"position_fixed bottom_0 left_0 padding_5vh bg_white color_black\"><div id=\"less_posts_value\"></div>less posts</div>\n            <div id=\"more_posts\" class=\"position_fixed bottom_0 right_0 padding_5vh bg_white color_black\"><div id=\"more_posts_value\"></div>more posts</div>\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">Advance Search: filter library posts By Usernames & Title</h1>\n            <ol id=\"library_posts_advance_filter\"></ol>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">library_feature</h1>\n            <ol id=\"element_ol_firebase_library_feature\"></ol>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">library_after_feature</h1>\n            <ol id=\"element_ol_firebase_library_after_feature\"></ol>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">library (simple search)</h1>\n            <ol id=\"element_ol_firebase_library\"></ol>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">roster</h1>\n            <ol id=\"element_ol_firebase_roster\"></ol>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">partners</h1>\n            <ol id=\"element_ol_firebase_partners\"></ol>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">abilities</h1>\n            <ol id=\"element_ol_firebase_abilities\"></ol>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">services</h1>\n            <ol id=\"element_ol_firebase_services\"></ol>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">skills</h1>\n            <ol id=\"element_ol_firebase_skills\"></ol>\n\n          </div>\n        </div>\n\n      </div>\n\n        <div id=\"page_right_nav\" class=\"width_100 height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_absolute top_0 left_0 right_0\">\n\n          <div id=\"page_right_nav\" class=\"width_100 height_6025vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_absolute top_100 left_0 right_0 box_shadow_bottom_1vh_dark\">\n\n            <div class=\"calc_02vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_relative bg_yellow border_01vh_dark_pink_5\">\n            </div>\n\n          </div>\n\n          <div id=\"page_right_nav\" class=\"width_100 height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_absolute top_0 left_0 right_0 box_shadow_bottom_1vh_dark\">\n\n            <div class=\"calc_02vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_relative bg_yellow border_01vh_dark_pink_5\">\n            </div>\n\n          </div>\n\n        </div>\n\n        <div id=\"page_right_nav\" class=\"width_100 height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_absolute bottom_0 left_0 right_0\">\n\n          <div id=\"page_right_nav\" class=\"width_100 height_6025vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_absolute bottom_100 left_0 right_0 box_shadow_top_1vh_dark\">\n\n            <div class=\"calc_02vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_relative bg_yellow border_01vh_dark_pink_5\">\n            </div>\n\n          </div>\n\n          <div id=\"page_right_nav\" class=\"width_100 height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_absolute bottom_0 left_0 right_0 box_shadow_top_1vh_dark\">\n\n            <div class=\"calc_02vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_relative bg_yellow border_01vh_dark_pink_5\">\n            </div>\n\n          </div>\n\n        </div>\n\n    </div>\n    ";
var element_pop_top = "\n    <div id=\"component_app_modal_element_pop_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto overflow_hidden z_index_6\">\n      <div id=\"component_app_modal_element_pop_top_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_25vh max_width border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">\n          \n      </div>\n    </div>\n    ";
var element_pop_left = "\n  <div id=\"component_app_modal_element_pop_left\" class=\"easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n    <div id=\"component_app_modal_element_pop_left_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_25vh margin_auto max_width \">\n        \n\n\n    </div>\n  </div>\n  ";
var element_pop_bottom = "\n    <div id=\"component_app_modal_element_pop_bottom\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n      <div id=\"component_app_modal_element_pop_bottom_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_25vh max_width overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 z_index_6 margin_auto bg_white\">\n            \n\n      </div>\n    </div>\n  ";
var element_pop_right = "\n  <div id=\"component_app_modal_element_pop_right\" class=\"easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n    <div id=\"component_app_modal_element_pop_right_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_25vh max_width overflow_hidden bg_yellow border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_black background_light_yellow_9 z_index_6 margin_auto\">\n      \n\n    </div>\n  </div>\n  ";
var element_pip_top = "\n    <div id=\"component_app_modal_element_pip_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto overflow_hidden z_index_6\">\n      <div id=\"component_app_modal_element_pip_top_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_50vh max_width_500px overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">\n          \n          <div class=\"width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8\">\n            \n          </div>\n\n      </div>\n    </div>\n    ";
var element_pip_left = "\n  <div id=\"component_app_modal_element_pip_left\" class=\"easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n    <div id=\"component_app_modal_element_pip_left_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_50vh max_width_500px overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">\n          \n          <div class=\"width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8\">\n            \n          </div>\n\n      </div>\n  </div>\n  ";
var element_pip_bottom = "\n    <div id=\"component_app_modal_element_pip_bottom\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n      <div id=\"component_app_modal_element_pip_bottom_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_50vh max_width_500px overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">\n          \n          <div class=\"width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8\">\n            \n          </div>\n\n      </div>\n    </div>\n  ";
var element_pip_right = "\n  <div id=\"component_app_modal_element_pip_right\" class=\"easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n    <div id=\"component_app_modal_element_pip_right_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_50vh max_width_500px overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">\n          \n          <div class=\"width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_01 gui_container_8\">\n            \n          </div>\n\n      </div>\n  </div>\n  ";
var element_morph_top = "\n    <div id=\"component_app_modal_element_morph_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n   ";
var element_morph_left = "\n    <div id=\"component_app_modal_element_morph_left\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_6\">\n    </div>\n   ";
var element_morph_bottom = "\n    <div id=\"component_app_modal_element_morph_bottom\" class=\"easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n   ";
var element_morph_right = "\n    <div id=\"component_app_modal_element_morph_right\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n   ";
var element_corner_top = "\n    <div id=\"component_app_modal_element_corner_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n   ";
var element_corner_left = "\n    <div id=\"component_app_modal_element_corner_left\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_6\">\n    </div>\n   ";
var element_corner_bottom = "\n    <div id=\"component_app_modal_element_corner_bottom\" class=\"easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n   ";
var element_corner_right = "\n    <div id=\"component_app_modal_element_corner_right\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n   ";
var element_menu_top = "\n    <div id=\"component_app_modal_element_menu_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_25vh margin_auto z_index_6\">\n\n    </div>\n   ";
var element_menu_left = "\n    <div id=\"component_app_modal_element_menu_left\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh_height width_25vw margin_auto z_index_6\">      \n\n        <div class=\"position_relative calc_2vh border_1vh_yellow box_shadow_bottom_left_1vh_dark bg_white overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left\">\n          <div class=\"position_relative calc_5vh padding_205vh float_left\">\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n          </div>\n        </div>\n\n    </div>";
var element_menu_bottom = "\n    <div id=\"component_app_modal_element_menu_bottom\" class=\"easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh_width height_25vh margin_auto z_index_6\">\n\n        <div class=\"position_relative calc_2vh border_1vh_yellow box_shadow_bottom_left_1vh_dark bg_white overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left\">\n          <div class=\"position_relative calc_5vh padding_205vh float_left\">\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n          </div>\n        </div>\n\n    </div>\n    ";
var element_menu_right = "\n    <div id=\"component_app_modal_element_menu_right\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh_height width_25vw margin_auto z_index_6\">\n       \n        <div class=\"position_relative calc_2vh border_1vh_yellow box_shadow_bottom_left_1vh_dark bg_white overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left\">\n          <div class=\"position_relative calc_5vh padding_205vh float_left\">\n            ".concat(value_ui_controls, "\n          </div>\n        </div>\n\n    </div>\n    ");
var element_fade_top = "\n    <div id=\"component_app_modal_element_fade_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n    ";
var element_fade_left = "\n    <div id=\"component_app_modal_element_fade_left\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_6\">\n    </div>\n    ";
var element_fade_bottom = "\n    <div id=\"component_app_modal_element_fade_bottom\" class=\"easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n    ";
var element_fade_right = "\n    <div id=\"component_app_modal_element_fade_right\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n    ";
var element_overlay_top = "\n    <div id=\"component_app_modal_element_overlay_top\" class=\"easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n      <div class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n      <div id=\"component_app_modal_element_overlay_top_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n    </div>\n    ";
var element_overlay_left = "\n    <div id=\"component_app_modal_element_overlay_left\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 width_100 height_100 margin_auto z_index_6\">\n      <div class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n      <div id=\"component_app_modal_element_overlay_left_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n    </div>\n    ";
var element_overlay_bottom = "\n    <div id=\"component_app_modal_element_overlay_bottom\" class=\"easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n      <div class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n      <div id=\"component_app_modal_element_overlay_bottom_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n    </div>\n    ";
var element_overlay_right = "\n    <div id=\"component_app_modal_element_overlay_right\" class=\"easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 width_100 height_100 margin_auto z_index_6\">\n      <div class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n      <div id=\"component_app_modal_element_overlay_right_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n    </div>\n    ";
var element_gradient_top = "\n    <div id=\"component_app_modal_element_gradient_top\" class=\"bg_yellow easing_1 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100vw height_100vh margin_auto z_index_6\">\n\n      <div class=\"position_absolute top_100 left_0 right_0 width_100 height_100 overflow_hidden margin_auto\">\n        <div class=\"position_absolute top_-1vh left_0 right_0 width_100 height_100 overflow_hidden margin_auto gui_paint_bottom\"></div>\n      </div>\n\n    </div>\n    ";
var element_gradient_left = "\n    <div id=\"component_app_modal_element_gradient_left\" class=\"bg_yellow easing_1 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 width_100vw height_100vh margin_auto z_index_6\">\n    \n      <div class=\"position_absolute left_100 top_0 bottom_0 width_100 height_100 overflow_hidden margin_auto gui_paint_right\"></div>\n\n</div>\n    ";
var element_gradient_bottom = "\n    <div id=\"component_app_modal_element_gradient_bottom\" class=\"bg_yellow easing_1 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 width_100vw height_100vh margin_auto z_index_6\">\n    \n      <div class=\"position_absolute bottom_100 left_0 right_0 width_100 height_100 overflow_hidden margin_auto gui_paint_top\"></div>\n\n    </div>\n    ";
var element_gradient_right = "\n    <div id=\"component_app_modal_element_gradient_right\" class=\"bg_yellow easing_1 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 width_100vw height_100vh margin_auto z_index_6\">\n    \n      <div class=\"position_absolute right_100 top_0 bottom_0 width_100 height_100 overflow_hidden margin_auto gui_paint_left\"></div>\n    \n    </div>\n    ";
var _default = {
  component_app_content_root: component_app_content_root,
  element_guis: element_guis,
  value_ui_controls: value_ui_controls,
  // routes
  route_dashboard: route_dashboard,
  // modals
  element_nav_top: element_nav_top,
  element_nav_left: element_nav_left,
  element_nav_bottom: element_nav_bottom,
  element_nav_right: element_nav_right,
  element_pip_top: element_pip_top,
  element_pip_left: element_pip_left,
  element_pip_bottom: element_pip_bottom,
  element_pip_right: element_pip_right,
  element_pop_top: element_pop_top,
  element_pop_left: element_pop_left,
  element_pop_bottom: element_pop_bottom,
  element_pop_right: element_pop_right,
  element_page_top: element_page_top,
  element_page_left: element_page_left,
  element_page_bottom: element_page_bottom,
  element_page_right: element_page_right,
  element_menu_top: element_menu_top,
  element_menu_left: element_menu_left,
  element_menu_bottom: element_menu_bottom,
  element_menu_right: element_menu_right,
  element_morph_top: element_morph_top,
  element_morph_left: element_morph_left,
  element_morph_bottom: element_morph_bottom,
  element_morph_right: element_morph_right,
  element_fade_top: element_fade_top,
  element_fade_left: element_fade_left,
  element_fade_bottom: element_fade_bottom,
  element_fade_right: element_fade_right,
  element_gradient_top: element_gradient_top,
  element_gradient_left: element_gradient_left,
  element_gradient_bottom: element_gradient_bottom,
  element_gradient_right: element_gradient_right,
  element_corner_top: element_corner_top,
  element_corner_left: element_corner_left,
  element_corner_bottom: element_corner_bottom,
  element_corner_right: element_corner_right,
  element_overlay_top: element_overlay_top,
  element_overlay_left: element_overlay_left,
  element_overlay_bottom: element_overlay_bottom,
  element_overlay_right: element_overlay_right,
  element_scroll_y_events: element_scroll_y_events,
  element_after_menu_about: element_after_menu_about,
  anchor_menu_left: anchor_menu_left,
  anchor_menu_top: anchor_menu_top,
  anchor_menu_bottom: anchor_menu_bottom,
  anchor_menu_right: anchor_menu_right
};
exports.default = _default;
},{"../index.js":"index.js"}],"partials/defaults.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elements = _interopRequireDefault(require("./elements"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = '';
var colors = [{
  parent: 'component_app_animation_background',
  id: '',
  classList: 'position_fixed top_0 left_0 width_100vw height_100vh',
  innerHTML: "\n  \n      <div id=\"paint_animation_paint_can_svg\" class=\"easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n      </div>\n      <div id=\"paint_animation_paint_can_hand_svg\" class=\"easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n      </div>\n      <div id=\"paint_animation_svg_4\" class=\"easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n      </div>\n\n      <div id=\"cardboard_bg\" class=\"display_none opacity_0 easing_1 width_100 height_100 bottom_0 right_0 position_absolute margin_auto\">\n        \n        <div id=\"top_left\" class=\"easing_01 width_100 height_100 bottom_100 right_100 position_absolute margin_auto\">\n\n        </div>\n        \n        <div id=\"top_right\" class=\"easing_01 width_100 height_100 bottom_100 left_100 position_absolute margin_auto\">\n\n        </div>\n        \n        <div id=\"top\" class=\"easing_01 width_100 height_100 bottom_100 left_0 right_0 position_absolute margin_auto\">\n\n        </div>\n        \n        <div id=\"left\" class=\"easing_01 width_100 height_100 bottom_0 right_100 position_absolute margin_auto\">\n            \n            <div id=\"left_texture\" class=\"opacity_01\">\n              <div class=\"accent_noise_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0\"></div>\n            </div>\n\n            <div id=\"left_stage\" class=\"display_none opacity_0 easing_1\">\n              \n              <div id=\"bg_items\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay2 height_25 width_25 position_absolute top_6205 left_0 margin_auto\"></div>\n                <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay3 height_25 width_25 position_absolute top_6205 left_1205 margin_auto\"></div>\n                <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay4 height_25 width_25 position_absolute top_6205 left_25 margin_auto\"></div>\n                <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay5 height_25 width_25 position_absolute top_6205 left_3705 margin_auto\"></div>\n                <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay6 height_25 width_25 position_absolute top_6205 left_50 margin_auto\"></div>\n                <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay7 height_25 width_25 position_absolute top_6205 left_6205 margin_auto\"></div>\n                <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay8 height_25 width_25 position_absolute top_6205 left_75 margin_auto\"></div>\n              </div>\n\n            </div>\n\n            <div id=\"left_static\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n              <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_6205 left_-1205 margin_auto\"></div>\n              <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay9 height_25 width_25 position_absolute top_6205 left_8705  margin_auto\"></div>\n            </div>\n\n        </div>\n\n        <div id=\"left_outside\" class=\"easing_01 width_100 height_100 bottom_0 right_200 position_absolute margin_auto\">\n\n        </div>\n        \n        <div id=\"center\" class=\"easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n            \n            <div id=\"center_texture\" class=\"opacity_01\">\n              <div class=\"stage_wall_left opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              <div class=\"stage_wall_right opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              <div class=\"stage_ceiling_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              <div class=\"stage_floor_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              <div class=\"stage_wall_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              <div class=\"stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              <div class=\"accent_noise_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0\"></div>\n            </div>\n\n            <div id=\"center_stage\" class=\"display_none opacity_0 easing_1\">\n            \n              <div id=\"bg_items\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay2 height_25 width_25 position_absolute top_6205 left_0 margin_auto\"></div>\n                <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay3 height_25 width_25 position_absolute top_6205 left_1205 margin_auto\"></div>\n                <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay4 height_25 width_25 position_absolute top_6205 left_25 margin_auto\"></div>\n                <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay5 height_25 width_25 position_absolute top_6205 left_3705 margin_auto\"></div>\n                <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay6 height_25 width_25 position_absolute top_6205 left_50 margin_auto\"></div>\n                <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay7 height_25 width_25 position_absolute top_6205 left_6205 margin_auto\"></div>\n                <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay8 height_25 width_25 position_absolute top_6205 left_75 margin_auto\"></div>\n                \n                    <div id=\"npc\" class=\"turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_0 left_-1205 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay2 height_3705 width_3705 position_absolute top_0 left_0 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay3 height_50 width_50 position_absolute top_0 left_1205 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay4 height_25 width_25 position_absolute top_0 left_25 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay5 height_3705 width_3705 position_absolute top_0 left_3705 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay6 height_50 width_50 position_absolute top_0 left_50 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay7 height_25 width_25 position_absolute top_0 left_6205 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay8 height_3705 width_3705 position_absolute top_0 left_75 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay9 height_50 width_50 position_absolute top_0 left_8705 margin_auto\"></div>\n\n              </div>\n\n            </div>\n\n            <div id=\"center_static\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n              <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_6205 left_-1205 margin_auto\"></div>\n              <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay9 height_25 width_25 position_absolute top_6205 left_8705  margin_auto\"></div>\n            </div>\n\n            <div id=\"focus\" class=\"animated1 enterTopBounce delay2 width_100 height_100 position_absolute top_0 left_0 right_0 margin_auto\">\n              <div id=\"double_focus\" class=\"animated1 enterTopBounce delay2 width_100 height_100 position_absolute top_0 left_0 right_0 margin_auto\">\n              <div id=\"fg_set\" class=\"easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                \n                <div id=\"fg_item\" class=\"stage_ladder height_100 width_25 position_absolute top_1205 left_-1205 margin_auto\"></div>\n                  \n                <div id=\"light_container\" class=\"width_50 height_25 position_absolute top_0 left_0 margin_auto\">\n                  <div id=\"light\" class=\"pieces_office_shoplight_on width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                </div>\n\n                <div id=\"light_container\" class=\"width_50 height_25 position_absolute top_0 left_50 margin_auto\">\n                  <div id=\"light\" class=\"pieces_office_shoplight_on width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                </div>\n\n                <div id=\"fg_item\" class=\"stage_ladder height_100 width_25 position_absolute top_1205 right_-1205 margin_auto\"></div>\n                 \n              </div>\n            </div>\n            \n            <div class=\"animated1 enterTopBounce delay2 stage_workspace width_75 height_75 position_absolute top_50 left_0 right_0 margin_auto\"></div>\n\n            <div id=\"mg_interactive\" class=\"transform_translate3d_top0 easing_025 display_none opacity_0 \">\n              <div id=\"interactive_player\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                <div id=\"interactive_player_motion\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto enterTopBounce animated1 delay1\">\n                <div id=\"player\" class=\"frames_turnaround_nigel_full_body_standing_y_1_x_1 width_50 height_50 position_absolute margin_auto\">\n\n                    <span id=\"wp_component_meta\" class=\"position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_auto\">\n                     \n                     <span class=\"position_relative top_0vh left_0vh easing_01 width_100 text_align_center float_right pseudo_arrow_bottom_right_outside_white\">\n                        <div class=\"overflow_hidden width_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n                           <div class=\"width_100 position_relative float_left padding_1vh bg_white border_01vh_dark_yellow_9 border_radius_1vh\">\n\n                              <span class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                                  <span class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                                    <div class=\"webkit_box_pack_center webkit_box_align display_webkit_box width_100 float_left\"><b class=\"float_left position_relative\">y_axis: </b><div id=\"interactive_particle_dialogue_y\" class=\"float_left position_relative\">null</div></div>\n                                    <div class=\"webkit_box_pack_center webkit_box_align display_webkit_box width_100 float_left\"><b class=\"float_left position_relative\">x_axis: </b><div id=\"interactive_particle_dialogue_x\" class=\"float_left position_relative\">null</div></div>\n                                  </span>\n                              </span>\n\n                           </div>\n                        </div>\n                     </span>\n\n                     <div class=\"gui_enter_buttons position_absolute bottom_-6025vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n                    </span>\n\n                </div>\n              </div>\n              </div>\n            </div>\n\n        </div>\n\n        <div id=\"right\" class=\"easing_01 width_100 height_100 bottom_0 left_100 position_absolute margin_auto\">\n          \n            <div id=\"right_texture\" class=\"opacity_01\">\n              <div class=\"accent_noise_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0\"></div>\n            </div>\n\n            <div id=\"right_stage\" class=\"display_none opacity_0 easing_1\">\n              \n              <div id=\"bg_items\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay2 height_25 width_25 position_absolute top_6205 left_0 margin_auto\"></div>\n                <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay3 height_25 width_25 position_absolute top_6205 left_1205 margin_auto\"></div>\n                <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay4 height_25 width_25 position_absolute top_6205 left_25 margin_auto\"></div>\n                <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay5 height_25 width_25 position_absolute top_6205 left_3705 margin_auto\"></div>\n                <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay6 height_25 width_25 position_absolute top_6205 left_50 margin_auto\"></div>\n                <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay7 height_25 width_25 position_absolute top_6205 left_6205 margin_auto\"></div>\n                <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay8 height_25 width_25 position_absolute top_6205 left_75 margin_auto\"></div>\n              </div>\n\n            </div>\n\n            <div id=\"right_static\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n              <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_6205 left_-1205 margin_auto\"></div>\n              <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay9 height_25 width_25 position_absolute top_6205 left_8705  margin_auto\"></div>\n            </div>\n\n        </div>\n        \n        <div id=\"bottom\" class=\"easing_01 width_100 height_100 top_100 left_0 right_0 position_absolute margin_auto\">\n\n        </div>\n        \n        <div id=\"bottom_left\" class=\"easing_01 width_100 height_100 top_100 right_100 position_absolute margin_auto\">\n\n        </div>\n        \n        <div id=\"bottom_right\" class=\"easing_01 width_100 height_100 top_100 left_100 position_absolute margin_auto\">\n\n        </div>\n      \n      </div>\n\n    "
}, {
  parent: 'component_app_animation_midground',
  id: '',
  classList: 'position_fixed top_0 left_0 width_100vw height_100vh',
  innerHTML: "\n      \n\n    "
}, {
  parent: 'component_app_animation_foreground',
  id: '',
  classList: '',
  innerHTML: "\n\n    "
}, {
  parent: 'component_app_content',
  id: '',
  classList: '',
  innerHTML: "\n\n      <div class=\"position_relative width_100 height_100 overflow_y float_left\">\n        \n        <div id=\"fold_filler\" class=\"position_relative width_100 height_100vh margin_auto float_left\">\n          \n          <div id=\"fold\" class=\"position_relative width_100 height_100vh margin_auto float_left display_none opacity_0 easing_01 transform_translate3d_left0 \">\n            <div class=\"position_relative width_100 height_100vh margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n              <div class=\"responsive_desktop_only calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                  <div id=\"logo_motion\" class=\"animated1 fadeIn width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                      \n                    <div id=\"logo_left_container\" class=\"animated1 fadeIn width_50 height_100 position_absolute top_0 bottom_0 right_100 margin_auto\">\n                        <div id=\"logo\" class=\"gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                    </div>\n\n                    <div id=\"logo_center_container\" class=\"animated1 fadeIn width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto\">\n                      <div id=\"logo\" class=\"gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                      <div id=\"logo\" class=\"gui_logo_icons width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                      <div id=\"logo\" class=\"gui_logo_arrows width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                      <div id=\"logo\" class=\"gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                      <div id=\"logo\" class=\"gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                      <div id=\"logo\" class=\"gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                    </div>\n\n                    <div id=\"logo_right_container\" class=\"animated1 fadeIn width_50 height_100 position_absolute top_0 bottom_0 left_100 margin_auto\">\n                      <div id=\"logo\" class=\"gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                    </div>\n\n                    <div id=\"logo_bottom_container\" class=\"animated1 fadeIn width_100 height_50 position_absolute bottom_100 left_0 right_0 margin_auto\">\n\n                      <div id=\"fold_note\" class=\"position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n                          \n                          <div class=\"easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note\">\n                          \n                          </div>\n                      \n                      </div>\n\n                    </div>\n\n                    <div id=\"logo_bottom_container\" class=\"animated1 fadeIn width_100 height_50 position_absolute top_100 left_0 right_0 margin_auto\">\n\n                        <div id=\"fold_buttons\" class=\"position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n\n                              <div class=\"display_flex_flow position_relative width_100 margin_auto float_left\">\n                                \n                                  <div class=\"position_relative margin_auto float_left width_100 display_webkit_box webkit_box_pack_center webkit_box_align\">\n\n                                      <div id=\"gui_start\" class=\"gui_button_start position_relative width_33 height_100 float_left\">\n                                      </div>\n\n                                      <div class=\"gui_or position_relative width_1205 height_100 float_left\">\n                                      </div>\n                                      \n                                      <div id=\"gui_learn\" class=\"gui_button_learn position_relative width_33 height_100 float_left\">\n                                      </div>\n\n                                  </div>\n\n                              </div>\n\n                        </div>\n\n                    </div>\n\n                  </div>\n\n              </div>\n\n              <div class=\"responsive_ipad_only calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                  <div id=\"logo_motion\" class=\"animated1 fadeIn width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                    \n                    <div id=\"logo_left_container\" class=\"animated1 fadeIn width_50 height_100 position_absolute top_0 bottom_0 right_100 margin_auto\">\n                        <div id=\"logo\" class=\"gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                    </div>\n\n                    <div id=\"logo_center_container\" class=\"animated1 fadeIn width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto\">\n                      <div id=\"logo\" class=\"gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                      <div id=\"logo\" class=\"gui_logo_icons width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                      <div id=\"logo\" class=\"gui_logo_arrows width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                      <div id=\"logo\" class=\"gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                      <div id=\"logo\" class=\"gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                      <div id=\"logo\" class=\"gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                    </div>\n\n                    <div id=\"logo_right_container\" class=\"animated1 fadeIn width_50 height_100 position_absolute top_0 bottom_0 left_100 margin_auto\">\n                      <div id=\"logo\" class=\"gui_move_note width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                    </div>\n\n                    <div id=\"logo_bottom_container\" class=\"animated1 fadeIn width_100 height_50 position_absolute bottom_100 left_0 right_0 margin_auto\">\n\n                      <div id=\"fold_note\" class=\"position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n                          \n                          <div class=\"easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note\">\n                          \n                          </div>\n                      \n                      </div>\n\n                    </div>\n\n                    <div id=\"logo_bottom_container\" class=\"animated1 fadeIn width_100 height_50 position_absolute top_100 left_0 right_0 margin_auto\">\n\n                        <div id=\"fold_buttons\" class=\"position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n\n                              <div class=\"display_flex_flow position_relative width_100 margin_auto float_left\">\n                                \n                                  <div class=\"position_relative margin_auto float_left width_100 display_webkit_box webkit_box_pack_center webkit_box_align\">\n\n                                      <div id=\"gui_start\" class=\"gui_button_start position_relative width_33 height_100 float_left\">\n                                      </div>\n\n                                      <div class=\"gui_or position_relative width_1205 height_100 float_left\">\n                                      </div>\n                                      \n                                      <div id=\"gui_learn\" class=\"gui_button_learn position_relative width_33 height_100 float_left\">\n                                      </div>\n\n                                  </div>\n\n                              </div>\n\n                        </div>\n\n                    </div>\n\n                  </div>\n\n              </div>\n\n              <div class=\"responsive_iphone_only calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                  <div id=\"logo_motion\" class=\"animated1 fadeIn width_8705 height_25 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                    \n                    <div id=\"logo_bottom_container\" class=\"animated1 fadeIn width_100 position_absolute bottom_100 left_0 right_0 margin_auto\">\n\n                      <div id=\"logo_bottom_container\" class=\"width_100 height_1205vh position_relative margin_auto\">\n\n                        <div id=\"fold_note\" class=\"position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n                            \n                            <div class=\"easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note\">\n                            \n                            </div>\n                        \n                        </div>\n\n                      </div>\n\n                      <div id=\"logo_bottom_container\" class=\"width_100 height_1205vh position_relative margin_auto\">\n\n                          <div id=\"fold_buttons\" class=\"position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n\n                                <div class=\"display_flex_flow position_relative width_100 margin_auto float_left\">\n                                  \n                                    <div class=\"position_relative margin_auto float_left width_100 display_webkit_box webkit_box_pack_center webkit_box_align\">\n\n                                        <div id=\"gui_start\" class=\"gui_button_start position_relative width_33 height_100 float_left\">\n                                        </div>\n\n                                        <div class=\"gui_or position_relative width_1205 height_100 float_left\">\n                                        </div>\n                                        \n                                        <div id=\"gui_learn\" class=\"gui_button_learn position_relative width_33 height_100 float_left\">\n                                        </div>\n\n                                    </div>\n\n                                </div>\n\n                          </div>\n\n                      </div>\n\n                    </div>\n\n                    <div id=\"logo_center_container\" class=\"animated1 fadeIn width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto\">\n                      <div id=\"logo\" class=\"gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                      <div id=\"logo\" class=\"gui_logo_icons width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                      <div id=\"logo\" class=\"gui_logo_arrows width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                      <div id=\"logo\" class=\"gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                      <div id=\"logo\" class=\"gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                      <div id=\"logo\" class=\"gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                    </div>\n\n                    <div id=\"logo_bottom_container\" class=\"animated1 fadeIn width_100 position_absolute top_100 left_0 right_0 margin_auto\">\n\n                      <div id=\"logo_bottom_container\" class=\"width_100 height_1205vh position_relative margin_auto\">\n\n                          <div id=\"fold_buttons\" class=\"position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n\n                                <div class=\"display_flex_flow position_relative width_100 margin_auto float_left\">\n                                  \n                                    <div class=\"position_relative margin_auto float_left width_100 display_webkit_box webkit_box_pack_center webkit_box_align\">\n\n                                        <div id=\"gui_start\" class=\"gui_button_start position_relative width_33 height_100 float_left\">\n                                        </div>\n\n                                        <div class=\"gui_or position_relative width_1205 height_100 float_left\">\n                                        </div>\n                                        \n                                        <div id=\"gui_learn\" class=\"gui_button_learn position_relative width_33 height_100 float_left\">\n                                        </div>\n\n                                    </div>\n\n                                </div>\n\n                          </div>\n\n                      </div>\n\n                      <div id=\"logo_bottom_container\" class=\"width_100 height_1205vh position_relative margin_auto\">\n\n                        <div id=\"fold_note\" class=\"position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n                            \n                            <div class=\"easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note\">\n                            \n                            </div>\n                        \n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n              </div>\n\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"position_relative width_100 height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left\">\n\n          <h2 id=\"\">element_ol_firebase_skills</h2>\n          <ol id=\"element_ol_firebase_skills\"></ol>\n          <h2 id=\"\">element_ol_firebase_services</h2>\n          <ol id=\"element_ol_firebase_services\"></ol>\n          <h2 id=\"\">element_ol_firebase_partners</h2>\n          <ol id=\"element_ol_firebase_partners\"></ol>\n          <h2 id=\"\">element_ol_firebase_abilities</h2>\n          <ol id=\"element_ol_firebase_abilities\"></ol>\n          <h2 id=\"\">element_ol_firebase_library</h2>\n          <ol id=\"element_ol_firebase_library\"></ol>\n          <h2 id=\"\">element_ol_firebase_roster</h2>\n          <ol id=\"element_ol_firebase_roster\"></ol>\n\n        </div>\n\n      </div>\n\n    "
}, {
  parent: 'component_app_modals',
  id: '',
  classList: '',
  innerHTML: "000"
}, {
  parent: 'component_app_guis',
  id: '',
  classList: '',
  innerHTML: "".concat(_elements.default.element_guis())
}];
var _default = {
  colors: colors
};
exports.default = _default;
},{"./elements":"partials/elements.js"}],"partials/events.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Imports
var state = '';
var dragging = false;
var root = document.getElementById('root');
var is_Desktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
var is_Mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
setTimeout(function () {
  // Desktop
  if (is_Desktop) {
    root.addEventListener('mousemove', function (event) {
      state = _index.default.Handle_return_state();
      console.log('mousemove only');
      console.log(event);
      console.log('mousemove: event.clientX: ' + event.clientX);
      console.log('mousemove: event.clientY: ' + event.clientY);
      state.events.mouse.clientX = event.clientX;
      state.events.mouse.clientY = event.clientY;
    });
    root.addEventListener('keydown', function (event) {
      state = _index.default.Handle_return_state(); // console.log('state in events');

      console.log('keydown');
      var keyCode = event.keyCode;
      console.log('keyCode: ' + keyCode);
      console.log('keys held: ');
      console.log(state.events.key.keys);
      var matched = false;

      for (var i = 0; i < state.events.key.keys.length; i++) {
        if (state.events.key.keys[i] == event.keyCode) {
          matched = true;
        }

        ;
      }

      ;

      if (matched == false) {
        state.events.key.keys.push(event.keyCode);
      }

      ; // w

      if (keyCode == 87) {
        state.ui.interaction.player_1.yaxis += 1 / 8;
      }

      ; //[

      if (keyCode == 219) {
        _index.default.player_1_shrink();
      }

      ; //]

      if (keyCode == 221) {
        _index.default.player_1_grow();
      }

      ; // a

      if (keyCode == 65) {
        state.ui.interaction.player_1.stance = 5;
        state.ui.interaction.player_1.cycles.walking = true;
      }

      ; // s

      if (keyCode == 83) {
        state.ui.interaction.player_1.yaxis -= 1 / 8;
      }

      ; // d

      if (keyCode == 68) {
        state.ui.interaction.player_1.stance = 13;
        state.ui.interaction.player_1.cycles.walking = true;
      }

      ; // esc

      if (keyCode == 27) {
        _index.default.addListings('library');

        _index.default.addListings('roster');

        _index.default.addListings('services');

        _index.default.addListings('partners');

        _index.default.addListings('abilities');

        _index.default.addListings('skills');
      }

      ; // q

      if (keyCode == 81) {
        state.ui.gui.bottom_right.transform = !state.ui.gui.bottom_right.transform;
        state.ui.gui.bottom_right.display = !state.ui.gui.bottom_right.display;
      }

      ; // space

      if (keyCode == 32) {
        event.preventDefault();
      }

      ;

      if (keyCode == 40) {
        console.log('down');
        state.ui.stage.cardboard_color.yaxis -= 1;
        state.ui.stage.cardboard_bg.yaxis -= 1;
        state.ui.stage.cardboard_mg.yaxis -= 1;
        state.ui.stage.cardboard_fg.yaxis -= 1;
        state.ui.stage.cardboard.yaxis -= 1;
      }

      ;

      if (keyCode == 39) {
        console.log('right');
        state.ui.stage.cardboard_color.xaxis -= 1;
        state.ui.stage.cardboard_bg.xaxis -= 1;
        state.ui.stage.cardboard_mg.xaxis -= 1;
        state.ui.stage.cardboard_fg.xaxis -= 1;
        state.ui.stage.cardboard.xaxis -= 1;
      }

      ;

      if (keyCode == 38) {
        console.log('up');
        state.ui.stage.cardboard_color.yaxis += 1;
        state.ui.stage.cardboard_bg.yaxis += 1;
        state.ui.stage.cardboard_mg.yaxis += 1;
        state.ui.stage.cardboard_fg.yaxis += 1;
        state.ui.stage.cardboard.yaxis += 1;
      }

      ;

      if (keyCode == 37) {
        console.log('left');
        state.ui.stage.cardboard_color.xaxis += 1;
        state.ui.stage.cardboard_bg.xaxis += 1;
        state.ui.stage.cardboard_mg.xaxis += 1;
        state.ui.stage.cardboard_fg.xaxis += 1;
        state.ui.stage.cardboard.xaxis += 1;
      }

      ;
    });
    root.addEventListener('keyup', function (event) {
      state = _index.default.Handle_return_state(); // console.log('state in events');

      console.log('keyup');
      state = _index.default.Handle_return_state();
      var keyCode = event.keyCode;
      console.log('event: keyup');
      console.log(event);
      var index = state.events.key.keys.indexOf(event.keyCode); //state.animation.sequence = (state.animation.sequence + 1);
      //alert(state.animation.sequence);

      if (index > -1) {
        state.events.key.keys.splice(index, 1);
      }

      ;

      if (document.getElementById('key_keys') != null) {
        document.getElementById('key_keys').innerHTML = state.events.key.keys;
      }

      if (document.getElementById('key_key_up') != null) {
        document.getElementById('key_key_up').innerHTML = event.keyCode;
      } // a


      if (keyCode == 65) {
        state.ui.interaction.player_1.cycles.walking = false;
        state.ui.interaction.player_1.stance = 5;
      }

      ; // s

      if (keyCode == 83) {}

      ; // d

      if (keyCode == 68) {
        state.ui.interaction.player_1.cycles.walking = false;
        state.ui.interaction.player_1.stance = 13;
      }

      ;

      _index.default.Handle_get_state_from_events();
    });
  }

  ;
}(), 1000);

var Handle_return_state_from_events = function Handle_return_state_from_events() {
  return state;
};

var _default = {
  state: state,
  Handle_return_state_from_events: Handle_return_state_from_events
};
exports.default = _default;
},{"../index.js":"index.js"}],"partials/components.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stage_components = function stage_components() {
  var state = _index.default.Handle_return_state();

  var return_these = [// stage
  {
    component: 'left_stage',
    //component_state_transform: state.ui.gui.fold.transform,
    //component_state_transform_true: 'transform_translate3d_top_100',
    //component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.cardboard_bg.xaxis == 1 && state.ui.stage.cardboard_bg.yaxis == 0 // component_state_opacity:  state.ui.gui.fold.opacity

  }, {
    component: 'center_stage',
    //component_state_transform: state.ui.gui.fold.transform,
    //component_state_transform_true: 'transform_translate3d_top_100',
    //component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.cardboard_bg.xaxis == 0 && state.ui.stage.cardboard_bg.yaxis == 0 // component_state_opacity:  state.ui.gui.fold.opacity

  }, {
    component: 'right_stage',
    //component_state_transform: state.ui.gui.fold.transform,
    //component_state_transform_true: 'transform_translate3d_top_100',
    //component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.cardboard_bg.xaxis == -1 && state.ui.stage.cardboard_bg.yaxis == 0 // component_state_opacity:  state.ui.gui.fold.opacity

  }];
  return return_these;
};

var ui_components = function ui_components() {
  var state = _index.default.Handle_return_state();

  var return_these = [// mg_interactive
  {
    component: 'mg_interactive',
    //component_state_transform: state.ui.gui.fold.transform,
    //component_state_transform_true: 'transform_translate3d_top_100',
    //component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.fold.display // component_state_opacity:  state.ui.gui.fold.opacity

  }, // cardboard_bg
  {
    component: 'cardboard_bg',
    //component_state_transform: state.ui.gui.fold.transform,
    //component_state_transform_true: 'transform_translate3d_top_100',
    //component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.fold.display // component_state_opacity:  state.ui.gui.fold.opacity

  }, // fold
  {
    component: 'fold',
    //component_state_transform: state.ui.gui.fold.transform,
    //component_state_transform_true: 'transform_translate3d_top_100',
    //component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.fold.display // component_state_opacity:  state.ui.gui.fold.opacity

  }, {
    component: 'bg_texture',
    //component_state_transform: state.ui.gui.fold.transform,
    //component_state_transform_true: 'transform_translate3d_top_100',
    //component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.fold.display // component_state_opacity:  state.ui.gui.fold.opacity

  }, // anchors
  {
    component: 'anchor_top',
    component_state_transform: state.ui.gui.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.top.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'anchor_bottom',
    component_state_transform: state.ui.gui.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.bottom.transform // component_state_opacity:  state.ui.gui.bottom.opacity

  }, {
    component: 'anchor_left',
    component_state_transform: state.ui.gui.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: !state.ui.gui.left.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'anchor_right',
    component_state_transform: state.ui.gui.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: !state.ui.gui.right.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, // toast
  {
    component: 'component_app_gui_toast_top_left',
    component_state_transform: state.ui.gui.top_left.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.top_left.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'component_app_gui_toast_top_right',
    component_state_transform: state.ui.gui.top_right.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.top_right.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'component_app_gui_toast_bottom_left',
    component_state_transform: state.ui.gui.bottom_left.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.bottom_left.transform // component_state_opacity:  state.ui.gui.bottom.opacity

  }, {
    component: 'component_app_gui_toast_bottom_right',
    component_state_transform: state.ui.gui.bottom_right.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.bottom_right.transform // component_state_opacity:  state.ui.gui.bottom.opacity

  }, // GUIS
  {
    component: 'component_app_gui_arrows_top',
    component_state_transform: state.ui.gui.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.top.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'component_app_gui_arrows_top_left',
    component_state_transform: state.ui.gui.top_left.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.top_left.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'component_app_gui_arrows_top_right',
    component_state_transform: state.ui.gui.top_right.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.top_right.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'component_app_gui_arrows_bottom',
    component_state_transform: state.ui.gui.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.bottom.transform // component_state_opacity:  state.ui.gui.bottom.opacity

  }, {
    component: 'component_app_gui_arrows_bottom_left',
    component_state_transform: state.ui.gui.bottom_left.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.bottom_left.transform // component_state_opacity:  state.ui.gui.bottom.opacity

  }, {
    component: 'component_app_gui_arrows_bottom_right',
    component_state_transform: state.ui.gui.bottom_right.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: !state.ui.gui.bottom_right.transform // component_state_opacity:  state.ui.gui.bottom.opacity

  }, {
    component: 'component_app_gui_arrows_left',
    component_state_transform: state.ui.gui.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: !state.ui.gui.left.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'component_app_gui_arrows_right',
    component_state_transform: state.ui.gui.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: !state.ui.gui.right.transform // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'component_app_gui_bottom_center',
    component_state_transform: state.ui.gui.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.bottom.display // component_state_opacity:  state.ui.gui.bottom.opacity

  }, {
    component: 'component_app_gui_bottom_left',
    component_state_transform: state.ui.gui.bottom_left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.gui.bottom_left.display // component_state_opacity:  state.ui.gui.bottom_left.opacity

  }, {
    component: 'component_app_gui_bottom_right',
    component_state_transform: state.ui.gui.bottom_right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.gui.bottom_right.display // component_state_opacity:  state.ui.gui.bottom_right.opacity

  }, {
    component: 'component_app_gui_top_center',
    component_state_transform: state.ui.gui.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.top.display // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'component_app_gui_top_left',
    component_state_transform: state.ui.gui.top_left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.gui.top_left.display // component_state_opacity:  state.ui.gui.top_left.opacity

  }, {
    component: 'component_app_gui_top_right',
    component_state_transform: state.ui.gui.top_right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.gui.top_right.display // component_state_opacity:  state.ui.gui.top_right.opacity

  }, {
    component: 'component_app_gui_left',
    component_state_transform: state.ui.gui.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.gui.left.display // component_state_opacity:  state.ui.gui.left.opacity

  }, {
    component: 'component_app_gui_right',
    component_state_transform: state.ui.gui.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.gui.right.display // component_state_opacity:  state.ui.gui.right.opacity

  }, // modal
  {
    component: 'component_app_modal_element_nav_top',
    component_state_transform: state.ui.modal.nav.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.nav.top.display // component_state_opacity:  state.ui.modal.nav.top.opacity

  }, {
    component: 'component_app_modal_element_nav_bottom',
    component_state_transform: state.ui.modal.nav.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.nav.bottom.display // component_state_opacity:  state.ui.modal.nav.bottom.opacity

  }, {
    component: 'component_app_modal_element_nav_left',
    component_state_transform: state.ui.modal.nav.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.nav.left.display // component_state_opacity:  state.ui.modal.nav.left.opacity

  }, {
    component: 'component_app_modal_element_nav_right',
    component_state_transform: state.ui.modal.nav.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.nav.right.display // component_state_opacity:  state.ui.modal.nav.right.opacity

  }, {
    component: 'component_app_modal_element_page_top',
    component_state_transform: state.ui.modal.page.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.page.top.display // component_state_opacity:  state.ui.modal.page.top.opacity

  }, {
    component: 'component_app_modal_element_page_bottom',
    component_state_transform: state.ui.modal.page.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.page.bottom.display // component_state_opacity:  state.ui.modal.page.bottom.opacity

  }, {
    component: 'component_app_modal_element_page_left',
    component_state_transform: state.ui.modal.page.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.page.left.display // component_state_opacity:  state.ui.modal.page.left.opacity

  }, {
    component: 'component_app_modal_element_page_right',
    component_state_transform: state.ui.modal.page.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.page.right.display // component_state_opacity:  state.ui.modal.page.right.opacity

  }, {
    component: 'component_app_modal_element_pop_top',
    component_state_transform: state.ui.modal.pop.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.pop.top.display // component_state_opacity:  state.ui.modal.pop.top.opacity

  }, {
    component: 'component_app_modal_element_pop_bottom',
    component_state_transform: state.ui.modal.pop.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.pop.bottom.display // component_state_opacity:  state.ui.modal.pop.bottom.opacity

  }, {
    component: 'component_app_modal_element_pop_left',
    component_state_transform: state.ui.modal.pop.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.pop.left.display // component_state_opacity:  state.ui.modal.pop.left.opacity

  }, {
    component: 'component_app_modal_element_pop_right',
    component_state_transform: state.ui.modal.pop.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.pop.right.display // component_state_opacity:  state.ui.modal.pop.right.opacity

  }, {
    component: 'component_app_modal_element_pip_top',
    component_state_transform: state.ui.modal.pip.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.pip.top.display // component_state_opacity:  state.ui.modal.pip.top.opacity

  }, {
    component: 'component_app_modal_element_pip_bottom',
    component_state_transform: state.ui.modal.pip.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.pip.bottom.display // component_state_opacity:  state.ui.modal.pip.bottom.opacity

  }, {
    component: 'component_app_modal_element_pip_left',
    component_state_transform: state.ui.modal.pip.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.pip.left.display // component_state_opacity:  state.ui.modal.pip.left.opacity

  }, {
    component: 'component_app_modal_element_pip_right',
    component_state_transform: state.ui.modal.pip.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.pip.right.display // component_state_opacity:  state.ui.modal.pip.right.opacity

  }, {
    component: 'component_app_modal_element_overlay_top',
    component_state_transform: state.ui.modal.overlay.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.overlay.top.display // component_state_opacity:  state.ui.modal.overlay.top.opacity

  }, {
    component: 'component_app_modal_element_overlay_bottom',
    component_state_transform: state.ui.modal.overlay.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.overlay.bottom.display // component_state_opacity:  state.ui.modal.overlay.bottom.opacity

  }, {
    component: 'component_app_modal_element_overlay_left',
    component_state_transform: state.ui.modal.overlay.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.overlay.left.display // component_state_opacity:  state.ui.modal.overlay.left.opacity

  }, {
    component: 'component_app_modal_element_overlay_right',
    component_state_transform: state.ui.modal.overlay.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.overlay.right.display // component_state_opacity:  state.ui.modal.overlay.right.opacity

  }, {
    component: 'component_app_modal_element_gradient_top',
    component_state_transform: state.ui.modal.gradient.top.transform,
    component_state_transform_true: 'transform_translate3d_top_200',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.gradient.top.display // component_state_opacity:  state.ui.modal.gradient.top.opacity

  }, {
    component: 'component_app_modal_element_gradient_bottom',
    component_state_transform: state.ui.modal.gradient.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top200',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.gradient.bottom.display // component_state_opacity:  state.ui.modal.gradient.bottom.opacity

  }, {
    component: 'component_app_modal_element_gradient_left',
    component_state_transform: state.ui.modal.gradient.left.transform,
    component_state_transform_true: 'transform_translate3d_left_200',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.gradient.left.display // component_state_opacity:  state.ui.modal.gradient.left.opacity

  }, {
    component: 'component_app_modal_element_gradient_right',
    component_state_transform: state.ui.modal.gradient.right.transform,
    component_state_transform_true: 'transform_translate3d_left200',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.gradient.right.display // component_state_opacity:  state.ui.modal.gradient.right.opacity

  }, {
    component: 'component_app_modal_element_menu_top',
    component_state_transform: state.ui.modal.menu.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.menu.top.display // component_state_opacity:  state.ui.modal.menu.top.opacity

  }, {
    component: 'component_app_modal_element_menu_bottom',
    component_state_transform: state.ui.modal.menu.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.menu.bottom.display // component_state_opacity:  state.ui.modal.menu.bottom.opacity

  }, {
    component: 'component_app_modal_element_menu_left',
    component_state_transform: state.ui.modal.menu.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.menu.left.display // component_state_opacity:  state.ui.modal.menu.left.opacity

  }, {
    component: 'component_app_modal_element_menu_right',
    component_state_transform: state.ui.modal.menu.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.menu.right.display // component_state_opacity:  state.ui.modal.menu.right.opacity

  }, {
    component: 'component_app_modal_element_fade_top',
    component_state_transform: state.ui.modal.fade.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.fade.top.display // component_state_opacity:  state.ui.modal.fade.top.opacity

  }, {
    component: 'component_app_modal_element_fade_bottom',
    component_state_transform: state.ui.modal.fade.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.fade.bottom.display // component_state_opacity:  state.ui.modal.fade.bottom.opacity

  }, {
    component: 'component_app_modal_element_fade_left',
    component_state_transform: state.ui.modal.fade.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.fade.left.display // component_state_opacity:  state.ui.modal.fade.left.opacity

  }, {
    component: 'component_app_modal_element_fade_right',
    component_state_transform: state.ui.modal.fade.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.fade.right.display // component_state_opacity:  state.ui.modal.fade.right.opacity

  }, {
    component: 'component_app_modal_element_morph_top',
    component_state_transform: state.ui.modal.morph.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.morph.top.display // component_state_opacity:  state.ui.modal.morph.top.opacity

  }, {
    component: 'component_app_modal_element_morph_bottom',
    component_state_transform: state.ui.modal.morph.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.morph.bottom.display // component_state_opacity:  state.ui.modal.morph.bottom.opacity

  }, {
    component: 'component_app_modal_element_morph_left',
    component_state_transform: state.ui.modal.morph.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.morph.left.display // component_state_opacity:  state.ui.modal.morph.left.opacity

  }, {
    component: 'component_app_modal_element_morph_right',
    component_state_transform: state.ui.modal.morph.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.morph.right.display // component_state_opacity:  state.ui.modal.morph.right.opacity

  }, {
    component: 'component_app_modal_element_corner_top',
    component_state_transform: state.ui.modal.corner.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.corner.top.display // component_state_opacity:  state.ui.modal.corner.top.opacity

  }, {
    component: 'component_app_modal_element_corner_bottom',
    component_state_transform: state.ui.modal.corner.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.corner.bottom.display // component_state_opacity:  state.ui.modal.corner.bottom.opacity

  }, {
    component: 'component_app_modal_element_corner_left',
    component_state_transform: state.ui.modal.corner.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.corner.left.display // component_state_opacity:  state.ui.modal.corner.left.opacity

  }, {
    component: 'component_app_modal_element_corner_right',
    component_state_transform: state.ui.modal.corner.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.corner.right.display // component_state_opacity:  state.ui.modal.corner.right.opacity

  }];
  return return_these;
};

var _default = {
  ui_components: ui_components,
  stage_components: stage_components
};
exports.default = _default;
},{"../index.js":"index.js"}],"partials/ui.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = '';

var Handle_ui = function Handle_ui() {
  state = _index.default.Handle_return_state(); //stage
  // Enneagon

  if (document.getElementById('cardboard_color') != null) {
    document.getElementById('cardboard_color').style = "transform: translate3d(" + state.ui.stage.cardboard_color.xaxis * 100 + "%, " + state.ui.stage.cardboard_color.yaxis * 100 + "%, 0);";
  }

  ;

  if (document.getElementById('cardboard_bg') != null) {
    document.getElementById('cardboard_bg').style = "transform: translate3d(" + state.ui.stage.cardboard_bg.xaxis * 100 + "%, " + state.ui.stage.cardboard_bg.yaxis * 100 + "%, 0);";
  }

  ;

  if (document.getElementById('cardboard_mg') != null) {
    document.getElementById('cardboard_mg').style = "transform: translate3d(" + state.ui.stage.cardboard_mg.xaxis * 100 + "%, " + state.ui.stage.cardboard_mg.yaxis * 100 + "%, 0);";
  }

  ;

  if (document.getElementById('cardboard_fg') != null) {
    document.getElementById('cardboard_fg').style = "transform: translate3d(" + state.ui.stage.cardboard_fg.xaxis * 100 + "%, " + state.ui.stage.cardboard_fg.yaxis * 100 + "%, 0);";
  }

  ;

  if (document.getElementById('cardboard_fold') != null) {
    document.getElementById('cardboard_fold').style = "transform: translate3d(" + state.ui.stage.cardboard.xaxis * 100 + "%, " + state.ui.stage.cardboard.yaxis * 100 + "%, 0);";
  }

  ; // y 1 x axis 1

  if (state.animation.instances.grid_64 === 1) {
    state.ui.interaction.parallax.yaxis = -4;
    state.ui.interaction.parallax.xaxis = -4;
  } // y 1 x axis 2


  if (state.animation.instances.grid_64 === 2) {
    state.ui.interaction.parallax.yaxis = -4;
    state.ui.interaction.parallax.xaxis = -3;
  } // y 1 x axis 3


  if (state.animation.instances.grid_64 === 3) {
    state.ui.interaction.parallax.yaxis = -4;
    state.ui.interaction.parallax.xaxis = -2;
  } // y 1 x axis 4


  if (state.animation.instances.grid_64 === 4) {
    state.ui.interaction.parallax.yaxis = -4;
    state.ui.interaction.parallax.xaxis = -1;
  } // y 1 x axis 5


  if (state.animation.instances.grid_64 === 5) {
    state.ui.interaction.parallax.yaxis = -4;
    state.ui.interaction.parallax.xaxis = 1;
  } // y 1 x axis 6


  if (state.animation.instances.grid_64 === 6) {
    state.ui.interaction.parallax.yaxis = -4;
    state.ui.interaction.parallax.xaxis = 2;
  } // y 1 x axis 7


  if (state.animation.instances.grid_64 === 7) {
    state.ui.interaction.parallax.yaxis = -4;
    state.ui.interaction.parallax.xaxis = 3;
  } // y 1 x axis 8


  if (state.animation.instances.grid_64 === 8) {
    state.ui.interaction.parallax.yaxis = -4;
    state.ui.interaction.parallax.xaxis = 4;
  } // y 2 x axis 1


  if (state.animation.instances.grid_64 == 9) {
    state.ui.interaction.parallax.yaxis = -3;
    state.ui.interaction.parallax.xaxis = -4;
  }

  ; // y 2 x axis 1

  if (state.animation.instances.grid_64 == 10) {
    state.ui.interaction.parallax.yaxis = -3;
    state.ui.interaction.parallax.xaxis = -3;
  }

  ; // y 2 x axis 1

  if (state.animation.instances.grid_64 == 11) {
    state.ui.interaction.parallax.yaxis = -3;
    state.ui.interaction.parallax.xaxis = -2;
  }

  ; // y 2 x axis 1

  if (state.animation.instances.grid_64 == 12) {
    state.ui.interaction.parallax.yaxis = -3;
    state.ui.interaction.parallax.xaxis = -1;
  }

  ; // y 2 x axis 1

  if (state.animation.instances.grid_64 == 13) {
    state.ui.interaction.parallax.yaxis = -3;
    state.ui.interaction.parallax.xaxis = 1;
  }

  ; // y 2 x axis 1

  if (state.animation.instances.grid_64 == 14) {
    state.ui.interaction.parallax.yaxis = -3;
    state.ui.interaction.parallax.xaxis = 2;
  }

  ; // y 2 x axis 1

  if (state.animation.instances.grid_64 == 15) {
    state.ui.interaction.parallax.yaxis = -3;
    state.ui.interaction.parallax.xaxis = 3;
  }

  ; // y 2 x axis 1

  if (state.animation.instances.grid_64 == 16) {
    state.ui.interaction.parallax.yaxis = -3;
    state.ui.interaction.parallax.xaxis = 4;
  }

  ; // y 3 x axis 1

  if (state.animation.instances.grid_64 == 17) {
    state.ui.interaction.parallax.yaxis = -2;
    state.ui.interaction.parallax.xaxis = -4;
  }

  ; // y 3 x axis 1

  if (state.animation.instances.grid_64 == 18) {
    state.ui.interaction.parallax.yaxis = -2;
    state.ui.interaction.parallax.xaxis = -3;
  }

  ; // y 3 x axis 1

  if (state.animation.instances.grid_64 == 19) {
    state.ui.interaction.parallax.yaxis = -2;
    state.ui.interaction.parallax.xaxis = -2;
  }

  ; // y 3 x axis 1

  if (state.animation.instances.grid_64 == 20) {
    state.ui.interaction.parallax.yaxis = -2;
    state.ui.interaction.parallax.xaxis = -1;
  }

  ; // y 3 x axis 1

  if (state.animation.instances.grid_64 == 21) {
    state.ui.interaction.parallax.yaxis = -2;
    state.ui.interaction.parallax.xaxis = 1;
  }

  ; // y 3 x axis 1

  if (state.animation.instances.grid_64 == 22) {
    state.ui.interaction.parallax.yaxis = -2;
    state.ui.interaction.parallax.xaxis = 2;
  }

  ; // y 3 x axis 1

  if (state.animation.instances.grid_64 == 23) {
    state.ui.interaction.parallax.yaxis = -2;
    state.ui.interaction.parallax.xaxis = 3;
  }

  ; // y 3 x axis 1

  if (state.animation.instances.grid_64 == 24) {
    state.ui.interaction.parallax.yaxis = -2;
    state.ui.interaction.parallax.xaxis = 4;
  }

  ; // y 4 x axis 1

  if (state.animation.instances.grid_64 == 25) {
    state.ui.interaction.parallax.yaxis = -1;
    state.ui.interaction.parallax.xaxis = -4;
  }

  ; // y 4 x axis 1

  if (state.animation.instances.grid_64 == 26) {
    state.ui.interaction.parallax.yaxis = -1;
    state.ui.interaction.parallax.xaxis = -3;
  }

  ; // y 4 x axis 1

  if (state.animation.instances.grid_64 == 27) {
    state.ui.interaction.parallax.yaxis = -1;
    state.ui.interaction.parallax.xaxis = -2;
  }

  ; // y 4 x axis 1

  if (state.animation.instances.grid_64 == 28) {
    state.ui.interaction.parallax.yaxis = -1;
    state.ui.interaction.parallax.xaxis = -1;
  }

  ; // y 4 x axis 1

  if (state.animation.instances.grid_64 == 29) {
    state.ui.interaction.parallax.yaxis = -1;
    state.ui.interaction.parallax.xaxis = 1;
  }

  ; // y 4 x axis 1

  if (state.animation.instances.grid_64 == 30) {
    state.ui.interaction.parallax.yaxis = -1;
    state.ui.interaction.parallax.xaxis = 2;
  }

  ; // y 4 x axis 1

  if (state.animation.instances.grid_64 == 31) {
    state.ui.interaction.parallax.yaxis = -1;
    state.ui.interaction.parallax.xaxis = 3;
  }

  ; // y 4 x axis 1

  if (state.animation.instances.grid_64 == 32) {
    state.ui.interaction.parallax.yaxis = -1;
    state.ui.interaction.parallax.xaxis = 4;
  }

  ; // y 5 x axis 1

  if (state.animation.instances.grid_64 == 34) {
    state.ui.interaction.parallax.yaxis = 1;
    state.ui.interaction.parallax.xaxis = -4;
  }

  ; // y 5 x axis 1

  if (state.animation.instances.grid_64 == 34) {
    state.ui.interaction.parallax.yaxis = 1;
    state.ui.interaction.parallax.xaxis = -3;
  }

  ; // y 5 x axis 1

  if (state.animation.instances.grid_64 == 35) {
    state.ui.interaction.parallax.yaxis = 1;
    state.ui.interaction.parallax.xaxis = -2;
  }

  ; // y 5 x axis 1

  if (state.animation.instances.grid_64 == 36) {
    state.ui.interaction.parallax.yaxis = 1;
    state.ui.interaction.parallax.xaxis = -1;
  }

  ; // y 5 x axis 1

  if (state.animation.instances.grid_64 == 37) {
    state.ui.interaction.parallax.yaxis = 1;
    state.ui.interaction.parallax.xaxis = 1;
  }

  ; // y 5 x axis 1

  if (state.animation.instances.grid_64 == 38) {
    state.ui.interaction.parallax.yaxis = 1;
    state.ui.interaction.parallax.xaxis = 2;
  }

  ; // y 5 x axis 1

  if (state.animation.instances.grid_64 == 39) {
    state.ui.interaction.parallax.yaxis = 1;
    state.ui.interaction.parallax.xaxis = 3;
  }

  ; // y 5 x axis 1

  if (state.animation.instances.grid_64 == 40) {
    state.ui.interaction.parallax.yaxis = 1;
    state.ui.interaction.parallax.xaxis = 4;
  }

  ; // y 6 x axis 1

  if (state.animation.instances.grid_64 == 41) {
    state.ui.interaction.parallax.yaxis = 2;
    state.ui.interaction.parallax.xaxis = -4;
  }

  ; // y 6 x axis 1

  if (state.animation.instances.grid_64 == 42) {
    state.ui.interaction.parallax.yaxis = 2;
    state.ui.interaction.parallax.xaxis = -3;
  }

  ; // y 6 x axis 1

  if (state.animation.instances.grid_64 == 43) {
    state.ui.interaction.parallax.yaxis = 2;
    state.ui.interaction.parallax.xaxis = -2;
  }

  ; // y 6 x axis 1

  if (state.animation.instances.grid_64 == 44) {
    state.ui.interaction.parallax.yaxis = 2;
    state.ui.interaction.parallax.xaxis = -1;
  }

  ; // y 6 x axis 1

  if (state.animation.instances.grid_64 == 45) {
    state.ui.interaction.parallax.yaxis = 2;
    state.ui.interaction.parallax.xaxis = 1;
  }

  ; // y 6 x axis 1

  if (state.animation.instances.grid_64 == 46) {
    state.ui.interaction.parallax.yaxis = 2;
    state.ui.interaction.parallax.xaxis = 2;
  }

  ; // y 6 x axis 1

  if (state.animation.instances.grid_64 == 47) {
    state.ui.interaction.parallax.yaxis = 2;
    state.ui.interaction.parallax.xaxis = 3;
  }

  ; // y 6 x axis 1

  if (state.animation.instances.grid_64 == 48) {
    state.ui.interaction.parallax.yaxis = 2;
    state.ui.interaction.parallax.xaxis = 4;
  }

  ; // y 7 x axis 1

  if (state.animation.instances.grid_64 == 49) {
    state.ui.interaction.parallax.yaxis = 3;
    state.ui.interaction.parallax.xaxis = -4;
  }

  ; // y 7 x axis 1

  if (state.animation.instances.grid_64 == 50) {
    state.ui.interaction.parallax.yaxis = 3;
    state.ui.interaction.parallax.xaxis = -3;
  }

  ; // y 7 x axis 1

  if (state.animation.instances.grid_64 == 51) {
    state.ui.interaction.parallax.yaxis = 3;
    state.ui.interaction.parallax.xaxis = -2;
  }

  ; // y 7 x axis 1

  if (state.animation.instances.grid_64 == 52) {
    state.ui.interaction.parallax.yaxis = 3;
    state.ui.interaction.parallax.xaxis = -1;
  }

  ; // y 7 x axis 1

  if (state.animation.instances.grid_64 == 53) {
    state.ui.interaction.parallax.yaxis = 3;
    state.ui.interaction.parallax.xaxis = 1;
  }

  ; // y 7 x axis 1

  if (state.animation.instances.grid_64 == 54) {
    state.ui.interaction.parallax.yaxis = 3;
    state.ui.interaction.parallax.xaxis = 2;
  }

  ; // y 7 x axis 1

  if (state.animation.instances.grid_64 == 55) {
    state.ui.interaction.parallax.yaxis = 3;
    state.ui.interaction.parallax.xaxis = 3;
  }

  ; // y 7 x axis 1

  if (state.animation.instances.grid_64 == 56) {
    state.ui.interaction.parallax.yaxis = 3;
    state.ui.interaction.parallax.xaxis = 4;
  }

  ; // y 8 x axis 1

  if (state.animation.instances.grid_64 == 57) {
    state.ui.interaction.parallax.yaxis = 4;
    state.ui.interaction.parallax.xaxis = -4;
  }

  ; // y 8 x axis 1

  if (state.animation.instances.grid_64 == 58) {
    state.ui.interaction.parallax.yaxis = 4;
    state.ui.interaction.parallax.xaxis = -3;
  }

  ; // y 8 x axis 1

  if (state.animation.instances.grid_64 == 59) {
    state.ui.interaction.parallax.yaxis = 4;
    state.ui.interaction.parallax.xaxis = -2;
  }

  ; // y 8 x axis 1

  if (state.animation.instances.grid_64 == 60) {
    state.ui.interaction.parallax.yaxis = 4;
    state.ui.interaction.parallax.xaxis = -1;
  }

  ; // y 8 x axis 1

  if (state.animation.instances.grid_64 == 61) {
    state.ui.interaction.parallax.yaxis = 4;
    state.ui.interaction.parallax.xaxis = 1;
  }

  ; // y 8 x axis 1

  if (state.animation.instances.grid_64 == 62) {
    state.ui.interaction.parallax.yaxis = 4;
    state.ui.interaction.parallax.xaxis = 2;
  }

  ; // y 8 x axis 1

  if (state.animation.instances.grid_64 == 63) {
    state.ui.interaction.parallax.yaxis = 4;
    state.ui.interaction.parallax.xaxis = 3;
  }

  ; // y 8 x axis 1

  if (state.animation.instances.grid_64 == 64) {
    state.ui.interaction.parallax.yaxis = 4;
    state.ui.interaction.parallax.xaxis = 4;
  }

  ;

  if (document.getElementById('bg_room_set') != null) {
    document.getElementById('bg_room_set').style = "transform: translate3d(" + state.ui.interaction.parallax.xaxis * 1.2 + "%, " + state.ui.interaction.parallax.yaxis * 1.2 + "%, 0);";
  }

  ;

  if (document.getElementById('bg_office_set') != null) {
    document.getElementById('bg_office_set').style = "transform: translate3d(" + state.ui.interaction.parallax.xaxis * 1 + "%, " + state.ui.interaction.parallax.yaxis * 1 + "%, 0);";
  }

  ;

  if (document.getElementById('npm_set') != null) {
    document.getElementById('npm_set').style = "transform: translate3d(" + state.ui.interaction.parallax.xaxis * .8 + "%, " + state.ui.interaction.parallax.yaxis * .8 + "%, 0);";
  }

  ;

  if (document.getElementById('npc_set') != null) {
    document.getElementById('npc_set').style = "transform: translate3d(" + state.ui.interaction.parallax.xaxis * .6 + "%, " + state.ui.interaction.parallax.yaxis * .6 + "%, 0);";
  }

  ;

  if (document.getElementById('mg_set') != null) {
    document.getElementById('mg_set').style = "transform: translate3d(" + state.ui.interaction.parallax.xaxis * .4 + "%, " + state.ui.interaction.parallax.yaxis * .4 + "%, 0);";
  }

  ;

  if (document.getElementById('fg_set') != null) {
    document.getElementById('fg_set').style = "transform: translate3d(" + state.ui.interaction.parallax.xaxis * .2 + "%, " + state.ui.interaction.parallax.yaxis * .2 + "%, 0);";
  }

  ;

  if (document.getElementById('interactive') != null) {
    document.getElementById('interactive').style = "transform: translate3d(" + state.ui.interaction.parallax.xaxis * 0 + "%, " + state.ui.interaction.parallax.yaxis * 0 + "%, 0);";
  }

  ;
};

var _default = {
  Handle_ui: Handle_ui
};
exports.default = _default;
},{"../index.js":"index.js"}],"partials/interaction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = '';
var last_set = 0;
var direction = 'down';
var standing_up_frame = 0;
var standing_down_frame = 0;
var standing_left_frame = 0;
var standing_right_frame = 0;

var Handle_interaction = function Handle_interaction() {
  state = _index.default.Handle_return_state(); // y

  if (state.ui.stage.cardboard.yaxis == -1) {
    if (state.ui.interaction.player_1.yaxis >= 0 && state.ui.interaction.player_1.yaxis < 1) {
      document.getElementById('interactive_particle_dialogue_y').innerHTML = '0 - 1';
    }

    if (state.ui.interaction.player_1.yaxis >= 1 && state.ui.interaction.player_1.yaxis < 2) {
      document.getElementById('interactive_particle_dialogue_y').innerHTML = '1 - 2 ';
    }

    if (state.ui.interaction.player_1.yaxis >= 2 && state.ui.interaction.player_1.yaxis < 3) {
      document.getElementById('interactive_particle_dialogue_y').innerHTML = '2 - 3';
    }

    if (state.ui.interaction.player_1.yaxis >= 3 && state.ui.interaction.player_1.yaxis < 4) {
      document.getElementById('interactive_particle_dialogue_y').innerHTML = '3 - 4 ';
    }

    if (state.ui.interaction.player_1.yaxis >= 4 && state.ui.interaction.player_1.yaxis < 5) {
      document.getElementById('interactive_particle_dialogue_y').innerHTML = '4 - 5';
    }

    if (state.ui.interaction.player_1.yaxis >= 5 && state.ui.interaction.player_1.yaxis < 6) {
      document.getElementById('interactive_particle_dialogue_y').innerHTML = '5 - 6 ';
    }

    if (state.ui.interaction.player_1.yaxis >= 6 && state.ui.interaction.player_1.yaxis < 7) {
      document.getElementById('interactive_particle_dialogue_y').innerHTML = '6 - 7';
    }

    if (state.ui.interaction.player_1.yaxis >= 7 && state.ui.interaction.player_1.yaxis < 8) {
      document.getElementById('interactive_particle_dialogue_y').innerHTML = '7 - 8 ';
    }
  }

  if (state.ui.stage.cardboard.yaxis == 0) {
    if (state.ui.interaction.player_1.yaxis >= 0 && state.ui.interaction.player_1.yaxis < 1) {
      document.getElementById('interactive_particle_dialogue_y').innerHTML = '8 - 9';
    }

    if (state.ui.interaction.player_1.yaxis >= 1 && state.ui.interaction.player_1.yaxis < 2) {
      document.getElementById('interactive_particle_dialogue_y').innerHTML = '9 - 10 ';
    }

    if (state.ui.interaction.player_1.yaxis >= 2 && state.ui.interaction.player_1.yaxis < 3) {
      document.getElementById('interactive_particle_dialogue_y').innerHTML = '10 - 11';
    }

    if (state.ui.interaction.player_1.yaxis >= 3 && state.ui.interaction.player_1.yaxis < 4) {
      document.getElementById('interactive_particle_dialogue_y').innerHTML = '11 - 12';
    }

    if (state.ui.interaction.player_1.yaxis >= 4 && state.ui.interaction.player_1.yaxis < 5) {
      document.getElementById('interactive_particle_dialogue_y').innerHTML = '12 - 13';
    }

    if (state.ui.interaction.player_1.yaxis >= 5 && state.ui.interaction.player_1.yaxis < 6) {
      document.getElementById('interactive_particle_dialogue_y').innerHTML = '13 - 14';
    }

    if (state.ui.interaction.player_1.yaxis >= 6 && state.ui.interaction.player_1.yaxis < 7) {
      document.getElementById('interactive_particle_dialogue_y').innerHTML = '14 - 15';
    }

    if (state.ui.interaction.player_1.yaxis >= 7 && state.ui.interaction.player_1.yaxis < 8) {
      document.getElementById('interactive_particle_dialogue_y').innerHTML = '15 - 16';
    }
  }

  if (state.ui.stage.cardboard.yaxis == 1) {
    if (state.ui.interaction.player_1.yaxis >= 0 && state.ui.interaction.player_1.yaxis < 1) {
      document.getElementById('interactive_particle_dialogue_y').innerHTML = '16 - 17';
    }

    if (state.ui.interaction.player_1.yaxis >= 1 && state.ui.interaction.player_1.yaxis < 2) {
      document.getElementById('interactive_particle_dialogue_y').innerHTML = '17 - 18';
    }

    if (state.ui.interaction.player_1.yaxis >= 2 && state.ui.interaction.player_1.yaxis < 3) {
      document.getElementById('interactive_particle_dialogue_y').innerHTML = '18 - 19';
    }

    if (state.ui.interaction.player_1.yaxis >= 3 && state.ui.interaction.player_1.yaxis < 4) {
      document.getElementById('interactive_particle_dialogue_y').innerHTML = '19 - 20';
    }

    if (state.ui.interaction.player_1.yaxis >= 4 && state.ui.interaction.player_1.yaxis < 5) {
      document.getElementById('interactive_particle_dialogue_y').innerHTML = '20 - 21';
    }

    if (state.ui.interaction.player_1.yaxis >= 5 && state.ui.interaction.player_1.yaxis < 6) {
      document.getElementById('interactive_particle_dialogue_y').innerHTML = '21 - 22';
    }

    if (state.ui.interaction.player_1.yaxis >= 6 && state.ui.interaction.player_1.yaxis < 7) {
      document.getElementById('interactive_particle_dialogue_y').innerHTML = '22 - 23';
    }

    if (state.ui.interaction.player_1.yaxis >= 7 && state.ui.interaction.player_1.yaxis < 8) {
      document.getElementById('interactive_particle_dialogue_y').innerHTML = '23 - 24';
    }
  }

  ; // x

  if (state.ui.stage.cardboard.xaxis == 1) {
    if (state.ui.interaction.player_1.xaxis >= 0 && state.ui.interaction.player_1.xaxis < 1) {
      document.getElementById('interactive_particle_dialogue_x').innerHTML = '0 - 1';
    }

    if (state.ui.interaction.player_1.xaxis >= 1 && state.ui.interaction.player_1.xaxis < 2) {
      document.getElementById('interactive_particle_dialogue_x').innerHTML = '1 - 2 ';
    }

    if (state.ui.interaction.player_1.xaxis >= 2 && state.ui.interaction.player_1.xaxis < 3) {
      document.getElementById('interactive_particle_dialogue_x').innerHTML = '2 - 3';
    }

    if (state.ui.interaction.player_1.xaxis >= 3 && state.ui.interaction.player_1.xaxis < 4) {
      document.getElementById('interactive_particle_dialogue_x').innerHTML = '3 - 4 ';
    }

    if (state.ui.interaction.player_1.xaxis >= 4 && state.ui.interaction.player_1.xaxis < 5) {
      document.getElementById('interactive_particle_dialogue_x').innerHTML = '4 - 5';
    }

    if (state.ui.interaction.player_1.xaxis >= 5 && state.ui.interaction.player_1.xaxis < 6) {
      document.getElementById('interactive_particle_dialogue_x').innerHTML = '5 - 6 ';
    }

    if (state.ui.interaction.player_1.xaxis >= 6 && state.ui.interaction.player_1.xaxis < 7) {
      document.getElementById('interactive_particle_dialogue_x').innerHTML = '6 - 7';
    }

    if (state.ui.interaction.player_1.xaxis >= 7 && state.ui.interaction.player_1.xaxis < 8) {
      document.getElementById('interactive_particle_dialogue_x').innerHTML = '7 - 8 ';
    }
  }

  if (state.ui.stage.cardboard.xaxis == 0) {
    if (state.ui.interaction.player_1.xaxis >= 0 && state.ui.interaction.player_1.xaxis < 1) {
      document.getElementById('interactive_particle_dialogue_x').innerHTML = '8 - 9';
    }

    if (state.ui.interaction.player_1.xaxis >= 1 && state.ui.interaction.player_1.xaxis < 2) {
      document.getElementById('interactive_particle_dialogue_x').innerHTML = '9 - 10 ';
    }

    if (state.ui.interaction.player_1.xaxis >= 2 && state.ui.interaction.player_1.xaxis < 3) {
      document.getElementById('interactive_particle_dialogue_x').innerHTML = '10 - 11';
    }

    if (state.ui.interaction.player_1.xaxis >= 3 && state.ui.interaction.player_1.xaxis < 4) {
      document.getElementById('interactive_particle_dialogue_x').innerHTML = '11 - 12';
    }

    if (state.ui.interaction.player_1.xaxis >= 4 && state.ui.interaction.player_1.xaxis < 5) {
      document.getElementById('interactive_particle_dialogue_x').innerHTML = '12 - 13';
    }

    if (state.ui.interaction.player_1.xaxis >= 5 && state.ui.interaction.player_1.xaxis < 6) {
      document.getElementById('interactive_particle_dialogue_x').innerHTML = '13 - 14';
    }

    if (state.ui.interaction.player_1.xaxis >= 6 && state.ui.interaction.player_1.xaxis < 7) {
      document.getElementById('interactive_particle_dialogue_x').innerHTML = '14 - 15';
    }

    if (state.ui.interaction.player_1.xaxis >= 7 && state.ui.interaction.player_1.xaxis < 8) {
      document.getElementById('interactive_particle_dialogue_x').innerHTML = '15 - 16';
    }
  }

  if (state.ui.stage.cardboard.xaxis == -1) {
    if (state.ui.interaction.player_1.xaxis >= 0 && state.ui.interaction.player_1.xaxis < 1) {
      document.getElementById('interactive_particle_dialogue_x').innerHTML = '16 - 17';
    }

    if (state.ui.interaction.player_1.xaxis >= 1 && state.ui.interaction.player_1.xaxis < 2) {
      document.getElementById('interactive_particle_dialogue_x').innerHTML = '17 - 18';
    }

    if (state.ui.interaction.player_1.xaxis >= 2 && state.ui.interaction.player_1.xaxis < 3) {
      document.getElementById('interactive_particle_dialogue_x').innerHTML = '18 - 19';
    }

    if (state.ui.interaction.player_1.xaxis >= 3 && state.ui.interaction.player_1.xaxis < 4) {
      document.getElementById('interactive_particle_dialogue_x').innerHTML = '19 - 20';
    }

    if (state.ui.interaction.player_1.xaxis >= 4 && state.ui.interaction.player_1.xaxis < 5) {
      document.getElementById('interactive_particle_dialogue_x').innerHTML = '20 - 21';
    }

    if (state.ui.interaction.player_1.xaxis >= 5 && state.ui.interaction.player_1.xaxis < 6) {
      document.getElementById('interactive_particle_dialogue_x').innerHTML = '21 - 22';
    }

    if (state.ui.interaction.player_1.xaxis >= 6 && state.ui.interaction.player_1.xaxis < 7) {
      document.getElementById('interactive_particle_dialogue_x').innerHTML = '22 - 23';
    }

    if (state.ui.interaction.player_1.xaxis >= 7 && state.ui.interaction.player_1.xaxis < 8) {
      document.getElementById('interactive_particle_dialogue_x').innerHTML = '23 - 24';
    }
  }

  ;

  if (last_set > state.ui.stage.cardboard.set) {
    direction = 'up';
  }

  if (last_set < state.ui.stage.cardboard.set) {
    direction = 'down';
  }

  if (last_set == state.ui.stage.cardboard.set && direction == 'up') {
    last_set += 1;
  }

  if (last_set == state.ui.stage.cardboard.set && direction == 'down') {
    last_set -= 1;
  }

  last_set = state.ui.stage.cardboard.set;
};

var _default = {
  Handle_interaction: Handle_interaction
};
exports.default = _default;
},{"../index.js":"index.js"}],"partials/animation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = '';
var last_set = 0;
var direction = 'down';
var standing_up_frame = 0;
var standing_down_frame = 0;
var standing_left_frame = 0;
var standing_right_frame = 0;
var walking_left_frame = 0;
var walking_right_frame = 0;

var Handle_animation = function Handle_animation() {
  state = _index.default.Handle_return_state(); // stance: up

  if (state.ui.interaction.player_1.stance == 13) {
    // standing up loop
    if (state.ui.interaction.player_1.idle.standing && !state.ui.interaction.player_1.cycles.walking) {
      if (document.getElementById('player') != null) {
        document.getElementById('player').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_' + standing_left_frame + ' position_absolute margin_auto ';

        if (standing_left_frame == 4) {
          standing_left_frame = 0;
        }

        ;
        standing_left_frame += 1;
      }

      ;
    }

    ;
  }

  ; // stance: down

  if (state.ui.interaction.player_1.stance == 5) {
    // standing down loop 
    if (state.ui.interaction.player_1.idle.standing && !state.ui.interaction.player_1.cycles.walking) {
      if (document.getElementById('player') != null) {
        document.getElementById('player').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_' + standing_right_frame + ' position_absolute margin_auto ';

        if (standing_right_frame == 4) {
          standing_right_frame = 0;
        }

        ;
        standing_right_frame += 1;
      }

      ;
    }

    ;
  }

  ; // walking: left

  if (state.ui.interaction.player_1.stance == 13) {
    // standing walking loop
    if (state.ui.interaction.player_1.idle.standing && state.ui.interaction.player_1.cycles.walking) {
      if (document.getElementById('player') != null) {
        document.getElementById('player').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_' + walking_left_frame + ' position_absolute margin_auto ';

        if (walking_left_frame == 9) {
          walking_left_frame = 0;
        }

        ;
        walking_left_frame += 1;
      }

      ;
      state.ui.interaction.player_1.xaxis += 1 / 8;
    }

    ;
  }

  ; // walking: right

  if (state.ui.interaction.player_1.stance == 5) {
    // standing walking loop 
    if (state.ui.interaction.player_1.idle.standing && state.ui.interaction.player_1.cycles.walking) {
      if (document.getElementById('player') != null) {
        document.getElementById('player').classList = 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_' + walking_right_frame + ' position_absolute margin_auto ';

        if (walking_right_frame == 9) {
          walking_right_frame = 0;
        }

        ;
        walking_right_frame += 1;
        state.ui.interaction.player_1.xaxis -= 1 / 8;
      }

      ;
    }

    ;
  }

  ; // center of set 3 ie: office room

  if (state.ui.interaction.player_1.xaxis < 5 && state.ui.interaction.player_1.xaxis > 4 && state.ui.stage.cardboard.set == 3 && state.ui.stage.cardboard_fg.yaxis == 0 && state.ui.stage.cardboard_fg.xaxis == 0) {
    console.log('door');
  }

  ;

  if (state.ui.interaction.player_1.xaxis < 4 && state.ui.interaction.player_1.xaxis > 2 && state.ui.stage.cardboard.set == 3 && state.ui.stage.cardboard_fg.yaxis == 0 && state.ui.stage.cardboard_fg.xaxis == 0) {
    console.log('main desk');
  }

  ; // interaction
  // - game
  // - player_1

  if (document.getElementById('player') != null) {
    document.getElementById('player').style = 'height: ' + state.ui.interaction.player_1.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.interaction.player_1.width * state.ux.dimensions.width8 + 'px;' + 'bottom: ' + state.ui.interaction.player_1.yaxis * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.ui.interaction.player_1.xaxis * state.ux.dimensions.width8 + 'px;';
  }

  ; // player 1
  // skrink (drawn in size)

  if (state.ui.interaction.player_1.cycles.shrink == true) {
    state.ui.interaction.player_1.stance = 5;

    if (state.ui.interaction.player_1.width > 1) {
      state.ui.interaction.player_1.width -= 1 / 8;
    }

    ;

    if (state.ui.interaction.player_1.height > 1) {
      state.ui.interaction.player_1.height -= 1 / 8;
    }

    ;

    if (state.ui.interaction.player_1.yaxis < 8 / 8) {
      state.ui.interaction.player_1.yaxis += 1 / 8;
    }

    ;

    if (state.ui.interaction.player_1.xaxis < 0) {
      state.ui.interaction.player_1.xaxis = 0;
    }

    ;
    state.ui.interaction.player_1.cycles.walking = true;

    if (state.ui.interaction.player_1.cycles.shrink == true && state.ui.interaction.player_1.width == 1 && state.ui.interaction.player_1.height == 1 && state.ui.interaction.player_1.yaxis == 8 / 8 && state.ui.interaction.player_1.xaxis == 0) {
      state.ui.interaction.player_1.stance = 13;
      state.ui.interaction.player_1.cycles.walking = false;
      state.ui.interaction.player_1.cycles.shrink = false;
    }

    ;
  }

  ;
  /* skrink to 2
  if ( state.ui.interaction.player_1.cycles.shrink == true) {
      
      if (state.ui.interaction.player_1.width > 2) {
          state.ui.interaction.player_1.width -= (1/8);
      };
      
      if (state.ui.interaction.player_1.height > 2) {
          state.ui.interaction.player_1.height -= (1/8);
      };
       if (state.ui.interaction.player_1.yaxis < (3/8)) {
          state.ui.interaction.player_1.yaxis += (1/8);
      };
       if (state.ui.interaction.player_1.xaxis > -1) {
          state.ui.interaction.player_1.xaxis -= (1/8);
      };
       if (
      state.ui.interaction.player_1.cycles.shrink == true &&
      state.ui.interaction.player_1.width == 2 &&
      state.ui.interaction.player_1.height == 2 &&
      state.ui.interaction.player_1.yaxis == (3/8) &&
      state.ui.interaction.player_1.xaxis == -1) {
          state.ui.interaction.player_1.cycles.shrink = false;
      };
  };
  */

  /* skrink to 4
  if ( state.ui.interaction.player_1.cycles.shrink == true) {
      
      if (state.ui.interaction.player_1.width > 4) {
          state.ui.interaction.player_1.width -= (1/8);
      };
      
      if (state.ui.interaction.player_1.height > 4) {
          state.ui.interaction.player_1.height -= (1/8);
      };
       if (state.ui.interaction.player_1.yaxis < (3/8)) {
          state.ui.interaction.player_1.yaxis += (1/8);
      };
       if (state.ui.interaction.player_1.xaxis > -1) {
          state.ui.interaction.player_1.xaxis -= (1/8);
      };
       if (
      state.ui.interaction.player_1.cycles.shrink == true &&
      state.ui.interaction.player_1.width == 4 &&
      state.ui.interaction.player_1.height == 4 &&
      state.ui.interaction.player_1.yaxis == (3/8) &&
      state.ui.interaction.player_1.xaxis == -1) {
          state.ui.interaction.player_1.cycles.shrink = false;
      };
  };
  */
  // growth (walk into focus)

  if (state.ui.interaction.player_1.cycles.growth == true) {
    state.ui.interaction.player_1.stance = 13;

    if (state.ui.interaction.player_1.width < 8) {
      state.ui.interaction.player_1.width += 1 / 8;
    }

    ;

    if (state.ui.interaction.player_1.height < 8) {
      state.ui.interaction.player_1.height += 1 / 8;
    }

    ;

    if (state.ui.interaction.player_1.yaxis > -4) {
      state.ui.interaction.player_1.yaxis -= 1 / 8;
    }

    ;

    if (state.ui.interaction.player_1.xaxis > 3) {
      state.ui.interaction.player_1.xaxis = 3;
    }

    ;
    state.ui.interaction.player_1.cycles.walking = true;

    if (state.ui.interaction.player_1.cycles.growth == true && state.ui.interaction.player_1.width == 8 && state.ui.interaction.player_1.height == 8 && state.ui.interaction.player_1.yaxis == -4 && state.ui.interaction.player_1.xaxis == 3) {
      state.ui.interaction.player_1.stance = 5;
      state.ui.interaction.player_1.cycles.walking = false;
      state.ui.interaction.player_1.cycles.growth = false;
    }

    ;
  }

  ;
  /*
  if ( state.ui.interaction.player_1.cycles.growth == true) {
      
      if (state.ui.interaction.player_1.width < 8) {
          state.ui.interaction.player_1.width += (1/8);
      };
      
      if (state.ui.interaction.player_1.height < 8) {
          state.ui.interaction.player_1.height += (1/8);
      };
       if (state.ui.interaction.player_1.yaxis > -4) {
          state.ui.interaction.player_1.yaxis -= (1/8);
      };
       if (state.ui.interaction.player_1.xaxis < 3) {
          state.ui.interaction.player_1.xaxis += (1/8);
      };
       if (
      state.ui.interaction.player_1.cycles.growth == true &&
      state.ui.interaction.player_1.width == 8 &&
      state.ui.interaction.player_1.height == 8 &&
      state.ui.interaction.player_1.yaxis == -4 &&
      state.ui.interaction.player_1.xaxis == 3) {
          state.ui.interaction.player_1.cycles.growth = false;
      };
   };
  */
};

var _default = {
  Handle_animation: Handle_animation
};
exports.default = _default;
},{"../index.js":"index.js"}],"index.js":[function(require,module,exports) {
// Rules
'use strict'; // Imports

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("./style"));

var _fb = _interopRequireDefault(require("./fb"));

var _state = _interopRequireDefault(require("./partials/state"));

var _functions = _interopRequireDefault(require("./partials/functions"));

var _defaults = _interopRequireDefault(require("./partials/defaults"));

var _events = _interopRequireDefault(require("./partials/events"));

var _components = _interopRequireDefault(require("./partials/components"));

var _ui = _interopRequireDefault(require("./partials/ui"));

var _interaction = _interopRequireDefault(require("./partials/interaction"));

var _animation = _interopRequireDefault(require("./partials/animation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Declaration
var state;
var functions;
var defaults;
var events;
var components;
var ui_components;
var stage_components;
var rootRef;
var gnougnRef;
var wordpressRef;
var fb_response;
var fb_writeable;
var first_load; // Assignment

state = _state.default.default_state;
defaults = _defaults.default;
events = _events.default;
functions = _functions.default;
components = _components.default;
fb_writeable = true;
first_load = true;

var Handle_render_view = function Handle_render_view() {
  for (var i = 0; i < defaults.colors.length; i++) {
    console.log('defaults.colors[i]: ' + defaults.colors[i]);
    document.getElementById(defaults.colors[i].parent).innerHTML = '';
    document.getElementById(defaults.colors[i].parent).appendChild(functions.Generate_new_fragment.appendChild(functions.Generate_new_div(defaults.colors[i].innerHTML, defaults.colors[i].classList, defaults.colors[i].id, '')));
  }

  ;
};

var Handle_transform = function Handle_transform() {
  for (var i = 0; i < ui_components.length; i++) {
    if (document.getElementById(ui_components[i].component) != null) {
      _functions.default.Toggle_classes_IF_State(ui_components[i].component_state_transform_false, ui_components[i].component_state_transform_true, ui_components[i].component, ui_components[i].component_state_transform);
    }

    ;
  }

  ;

  for (var i = 0; i < stage_components.length; i++) {
    if (document.getElementById(stage_components[i].component) != null) {
      _functions.default.Toggle_classes_IF_State(stage_components[i].component_state_transform_false, stage_components[i].component_state_transform_true, stage_components[i].component, stage_components[i].component_state_transform);
    }

    ;
  }

  ;
};

var Handle_display_with_delay = function Handle_display_with_delay() {
  for (var i = 0; i < ui_components.length; i++) {
    if (document.getElementById(ui_components[i].component) != null) {
      _functions.default.Toggle_functions_IF_State(_functions.default.Toggle_display_and_opacity_on_with_no_delay, _functions.default.Toggle_display_and_opacity_off_with_delay, ui_components[i].component, ui_components[i].component_state_display);
    }

    ;
  }

  ;

  for (var i = 0; i < stage_components.length; i++) {
    if (document.getElementById(stage_components[i].component) != null) {
      _functions.default.Toggle_functions_IF_State(_functions.default.Toggle_stages_display_and_opacity_on_with_no_delay, _functions.default.Toggle_stages_display_and_opacity_off_with_delay, stage_components[i].component, stage_components[i].component_state_display);
    }

    ;
  }

  ;
};

var Handle_check_states = function Handle_check_states() {
  console.log('checked ui_components');
  ui_components = components.ui_components();
  console.log('checked stage_components');
  stage_components = components.stage_components();
  Handle_display_with_delay();
  Handle_transform();

  _ui.default.Handle_ui();

  _interaction.default.Handle_interaction();

  _animation.default.Handle_animation();
};

var Handle_return_state = function Handle_return_state() {
  return state;
};

var Handle_get_state_from_events = function Handle_get_state_from_events() {
  state = _events.default.Handle_return_state_from_events();
};

var HANDLE_animation_paint_hand = function HANDLE_animation_paint_hand() {
  (function () {
    var loop = false;
    var current_frame = 1;
    var start_animation = setInterval(function () {
      var MANIPULATED = document.getElementById('paint_animation_paint_can_hand_svg');

      if (MANIPULATED != null) {
        MANIPULATED.innerHTML = '';

        if (current_frame == 1) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_1';
        }

        ;

        if (current_frame == 2) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_2';
        }

        ;

        if (current_frame == 3) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_3';
        }

        ;

        if (current_frame == 4) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_4';
        }

        ;

        if (current_frame == 5) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_5';
        }

        ;

        if (current_frame == 6) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_6';
        }

        ;

        if (current_frame == 7) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_7';
        }

        ;

        if (current_frame == 8) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_8';
        }

        ;

        if (current_frame == 9) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_9';
        }

        ;

        if (current_frame == 10) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_10';
        }

        ;

        if (current_frame == 11) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_11';
        }

        ;

        if (current_frame == 12) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_12';
          HANDLE_animation_paint_drop();
        }

        ;

        if (current_frame == 13) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_13';
        }

        ;

        if (current_frame == 14) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_14';
        }

        ;

        if (current_frame == 15) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_15';
        }

        ;

        if (current_frame == 16) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_16';
        }

        ;

        if (current_frame == 17) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_17';
        }

        ;

        if (current_frame == 18) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_18';
        }

        ;

        if (current_frame == 19) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_19';
        }

        ;

        if (current_frame == 20) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_20';
        }

        ;

        if (current_frame == 21) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_21';
        }

        ;

        if (current_frame == 22) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_22';
        }

        ;

        if (current_frame == 23) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_23';
        }

        ;

        if (current_frame == 24) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_hand_24';
        }

        ;

        if (current_frame == 25) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' ';

          if (loop == true) {
            current_frame = 0;
          }

          ;

          if (loop == false) {
            clearInterval(start_animation);
          }

          ;
        }

        ;
        current_frame += 1;
      }
    }, 1000 / state.animation.framerate);
  })();
};

var HANDLE_animation_paint_drop = function HANDLE_animation_paint_drop() {
  (function () {
    var loop = false;
    var current_frame = 1;
    var start_animation = setInterval(function () {
      var MANIPULATED = document.getElementById('paint_animation_paint_can_svg');

      if (MANIPULATED != null) {
        MANIPULATED.innerHTML = '';

        if (current_frame == 1) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_1';
        }

        ;

        if (current_frame == 2) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_2';
        }

        ;

        if (current_frame == 3) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_3';
        }

        ;

        if (current_frame == 4) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_4';
        }

        ;

        if (current_frame == 5) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_5';
        }

        ;

        if (current_frame == 6) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_6';
        }

        ;

        if (current_frame == 7) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_7';
        }

        ;

        if (current_frame == 8) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_8';
        }

        ;

        if (current_frame == 9) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_9';
        }

        ;

        if (current_frame == 10) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_10';
        }

        ;

        if (current_frame == 11) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_11';
        }

        ;

        if (current_frame == 12) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_12';
        }

        ;

        if (current_frame == 13) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_13';
        }

        ;

        if (current_frame == 14) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_14';
        }

        ;

        if (current_frame == 15) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_15';
        }

        ;

        if (current_frame == 16) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_16';
        }

        ;

        if (current_frame == 17) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_17';
        }

        ;

        if (current_frame == 18) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_18';
        }

        ;

        if (current_frame == 19) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_19';
        }

        ;

        if (current_frame == 20) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_20';
        }

        ;

        if (current_frame == 21) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_21';
        }

        ;

        if (current_frame == 22) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_22';
          HANDLE_animation_paint_wall();
        }

        ;

        if (current_frame == 23) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_23';
        }

        ;

        if (current_frame == 24) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' nownigel_gui_interaction_hands_0_0_depth_200_24';
        }

        ;

        if (current_frame == 25) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' ';

          if (loop == true) {
            current_frame = 0;
          }

          ;

          if (loop == false) {
            clearInterval(start_animation);
          }

          ;
        }

        ;
        current_frame += 1;
      }
    }, 1000 / state.animation.framerate);
  })();
};

var HANDLE_animation_paint_wall = function HANDLE_animation_paint_wall() {
  (function () {
    var loop = false;
    var current_frame = 1;
    var start_animation = setInterval(function () {
      var MANIPULATED = document.getElementById('paint_animation_svg_4');

      if (MANIPULATED != null) {
        MANIPULATED.innerHTML = '';

        if (current_frame == 1) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_1';
        }

        ;

        if (current_frame == 2) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_2';
        }

        ;

        if (current_frame == 3) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_3';
        }

        ;

        if (current_frame == 4) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_4';
        }

        ;

        if (current_frame == 5) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_5';
        }

        ;

        if (current_frame == 6) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_6';
        }

        ;

        if (current_frame == 7) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_7';
        }

        ;

        if (current_frame == 8) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_8';
        }

        ;

        if (current_frame == 9) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_9';
        }

        ;

        if (current_frame == 10) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_10';
        }

        ;

        if (current_frame == 11) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_11';
        }

        ;

        if (current_frame == 12) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' gui_paint_12';
        }

        ;

        if (current_frame == 13) {
          MANIPULATED.classList = 'position_absolute bottom_0 top_0 left_0 right_0 width_100 height_100 margin_auto float_left ' + ' bg_yellow';

          if (loop == true) {
            current_frame = 0;
          }

          ;

          if (loop == false) {
            setTimeout(function () {
              state.ui.gui.fold.transform = !state.ui.gui.fold.transform;
              state.ui.gui.fold.display = !state.ui.gui.fold.display;
            }, 1000);
            clearInterval(start_animation);
          }

          ;
        }

        ;
        current_frame += 1;
      }
    }, 1000 / state.animation.framerate);
  })();
};

var Handle_Repeat_Firebase_Validation = setInterval(function () {
  if (fb_writeable) {
    fb_response = state.data.firebase;

    if (fb_response.gnougn.library != null) {
      // only once! after firebase responds
      if (first_load == true) {
        first_load = false; // overall site frames by 24 frames

        (function () {
          var interval = 24 * -3;
          setInterval(function () {
            if (interval == 24 * -2) {
              if (document.getElementById('bar') != null) {
                document.getElementById('bar').classList.remove('width_8705');
                document.getElementById('bar').classList.add('width_100');
                document.getElementById('root_loading').classList.remove('fadeIn');
                document.getElementById('root_loading').classList.add('fadeOut');
              }

              ;
            }

            ;

            if (interval == 24 * -1) {
              if (document.getElementById('bar_container') != null) {
                document.getElementById('bar_container').classList.remove('enterBottom');
                document.getElementById('bar_container').classList.add('fadeOut');
                HANDLE_animation_paint_hand();
              }

              ;
            }

            ; // After "48 frames" exc..

            if (interval == 24 * 0) {
              if (document.getElementById('bar_container') != null) {
                document.getElementById('bar_container').classList.add('display_none');
                document.getElementById('root_loading').classList.add('display_none');
              }

              ;
            }

            ; // After "48 frames" exc..

            if (interval == 24 * 1) {// display fold here
            }

            ;
            interval += 1; //console.log('current frame is: ' + interval);
          }, 1000 / 24);
        })();
      }

      ;
      fb_writeable = false; // once firebase server responds, instead of a clearInterval, we use -> !writable

      console.log('Handle_Repeat_Firebase_Validation'); // arrat made from object key

      var result_library = Object.keys(fb_response.gnougn.library).map(function (key) {
        return fb_response.gnougn.library[key];
      });
      fb_response.gnougn.library = result_library; // arrat made from object key

      var result_abilities = Object.keys(fb_response.gnougn.abilities).map(function (key) {
        return fb_response.gnougn.abilities[key];
      });
      fb_response.gnougn.abilities = result_abilities; // arrat made from object key

      var result_partners = Object.keys(fb_response.gnougn.partners).map(function (key) {
        return fb_response.gnougn.partners[key];
      });
      fb_response.gnougn.partners = result_partners; // arrat made from object key

      var result_services = Object.keys(fb_response.gnougn.services).map(function (key) {
        return fb_response.gnougn.services[key];
      });
      fb_response.gnougn.services = result_services; // arrat made from object key

      var result_roster = Object.keys(fb_response.gnougn.roster).map(function (key) {
        return fb_response.gnougn.roster[key];
      });
      fb_response.gnougn.roster = result_roster; // arrat made from object key

      var result_skills = Object.keys(fb_response.gnougn.skills).map(function (key) {
        return fb_response.gnougn.skills[key];
      });
      fb_response.gnougn.skills = result_skills;
      setTimeout(function () {
        Handle_firebase_render();
        console.log('contected!');
      }, 4000);
      console.log(fb_response.gnougn);
    }

    ;
  }

  ;
}, 0);

var Handle_firebase_render = function Handle_firebase_render() {
  // render library
  (function () {
    setTimeout(function () {
      if (fb_response != null) {
        for (var i = 0; i < fb_response.gnougn.library.length; i++) {
          // console.log(state.data.firebase.gnougn.roster[i]);
          document.getElementById('element_ol_firebase_library').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(fb_response.gnougn.library[i])));
        }

        ;

        for (var i = 0; i < fb_response.gnougn.roster.length; i++) {
          // console.log(state.data.firebase.gnougn.roster[i]);
          document.getElementById('element_ol_firebase_roster').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(fb_response.gnougn.roster[i])));
        }

        ;

        for (var i = 0; i < fb_response.gnougn.abilities.length; i++) {
          // console.log(state.data.firebase.gnougn.abilities[i]);
          document.getElementById('element_ol_firebase_abilities').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(fb_response.gnougn.abilities[i])));
        }

        ;

        for (var i = 0; i < fb_response.gnougn.skills.length; i++) {
          // console.log(state.data.firebase.gnougn.skills[i]);
          document.getElementById('element_ol_firebase_skills').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(fb_response.gnougn.skills[i])));
        }

        ;

        for (var i = 0; i < fb_response.gnougn.services.length; i++) {
          // console.log(state.data.firebase.gnougn.services[i]);
          document.getElementById('element_ol_firebase_services').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(fb_response.gnougn.services[i])));
        }

        ;

        for (var i = 0; i < fb_response.gnougn.partners.length; i++) {
          // console.log(state.data.firebase.gnougn.partners[i]);
          document.getElementById('element_ol_firebase_partners').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(fb_response.gnougn.partners[i])));
        }

        ;
      }

      ;
    }, 1);
  })();
};

var Handle_Firebase_Refs_and_Render = function Handle_Firebase_Refs_and_Render() {
  if (document.getElementById('element_ol_firebase_skills') != null) {
    document.getElementById('element_ol_firebase_skills').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_services') != null) {
    document.getElementById('element_ol_firebase_services').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_partners') != null) {
    document.getElementById('element_ol_firebase_partners').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_abilities') != null) {
    document.getElementById('element_ol_firebase_abilities').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_library') != null) {
    document.getElementById('element_ol_firebase_library').innerHTML = '';
  }

  ;

  if (document.getElementById('element_ol_firebase_roster') != null) {
    document.getElementById('element_ol_firebase_roster').innerHTML = '';
  }

  ;
  fb_writeable = true;
  rootRef = firebase.database().ref();
  gnougnRef = rootRef.child('gnougn');
  wordpressRef = gnougnRef.child('wordpress');
  fb_response = {};

  (function () {
    rootRef.on('value', function (snapshot) {
      var obj = snapshot.val();
      state.data.firebase = obj;
      console.log('state.data.firebase');
      console.log(state.data.firebase);
    });
  })();

  (function () {
    setTimeout(function () {
      Handle_Repeat_Firebase_Validation;
    }, 100);
  })();
}; // Closures


var default_post = {
  "dislikes": 0,
  "feature_image_src": "http://nownigel.com/photos/gui_user_blank.svg",
  "id": "007",
  "likes": 0,
  "password": "null",
  "subs": [{
    "username": "null"
  }],
  "time": 1.550374996382E9,
  "title": "nigel johnson",
  "categories": ["null"],
  "subcategories": ["null"],
  "tags": ["null"],
  "types": [{
    "title": "null"
  }],
  "username": "null",
  "views": 0
}; // Create

var addListings = function addListings(child) {
  var current_second = new Date().getTime() / 1000;
  var default_item = {
    id: 0,
    child: child,
    time: current_second,
    username: 'xxx',
    password: 'xxx',
    feature_image_src: "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
    views: 0,
    likes: 0,
    dislikes: 0,
    subs: [{
      username: "nully"
    }],
    categories: ["null"],
    subcategories: ["null"],
    tags: ["null"],
    types: [{
      "title": "null"
    }]
  };

  if (child == 'roster') {}

  ; // Firebase References
  // Firebase Database

  var rootRef = firebase.database().ref();
  var gnougnRef = rootRef.child('gnougn');
  var Ref = gnougnRef.child(child);
  Ref.push(default_item).then(function (snap) {
    var key = snap.key;
    console.log('from addListing' + key); // update created item with snap.key

    Ref.child(key).update({
      id: key
    }); // Set firebase data

    setTimeout(function () {
      Handle_Firebase_Refs_and_Render();
    }, 0);
  });
}; // Delete


var deleteWhoListings = function deleteWhoListings(child, id) {
  // Firebase References
  // Firebase Database
  var rootRef = firebase.database().ref();
  var gnougnRef = rootRef.child('gnougn');
  var Ref = gnougnRef.child(child);
  console.log(id, 'from deleteWhoListings service');
  Ref.child(id).remove(); // Set firebase data

  setTimeout(function () {
    Handle_Firebase_Refs_and_Render();
  }, 0);
};

var player_1_grow = function player_1_grow() {
  state.ui.interaction.player_1.cycles.growth = !state.ui.interaction.player_1.cycles.growth;
  state.ui.interaction.player_1.cycles.shrink = false;
};

var player_1_shrink = function player_1_shrink() {
  state.ui.interaction.player_1.cycles.shrink = !state.ui.interaction.player_1.cycles.shrink;
  state.ui.interaction.player_1.cycles.growth = false;
};

var HANDLE_pre_loader = function HANDLE_pre_loader() {
  (function () {
    var loop = false;
    var loops = 0;
    var current_frame = 1;
    var start_animation = setInterval(function () {
      var MANIPULATED = document.getElementById('preloader');

      if (MANIPULATED != null) {
        if (current_frame == 1) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_1';
        }

        ;

        if (current_frame == 2) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_2';
        }

        ;

        if (current_frame == 3) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_3';
        }

        ;

        if (current_frame == 4) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_4';
        }

        ;

        if (current_frame == 5) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_5';
        }

        ;

        if (current_frame == 6) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_6';
        }

        ;

        if (current_frame == 7) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_7';
        }

        ;

        if (current_frame == 8) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_8';
        }

        ;

        if (current_frame == 9) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_9';
        }

        ;

        if (current_frame == 10) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_10';
        }

        ;

        if (current_frame == 11) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_11';
        }

        ;

        if (current_frame == 12) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_12';
        }

        ;

        if (current_frame == 13) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_13';
        }

        ;

        if (current_frame == 14) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_14';
        }

        ;

        if (current_frame == 15) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_15';
        }

        ;

        if (current_frame == 16) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_16';
        }

        ;

        if (current_frame == 17) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_17';
        }

        ;

        if (current_frame == 18) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_18';
        }

        ;

        if (current_frame == 19) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_19';
        }

        ;

        if (current_frame == 20) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_20';
        }

        ;

        if (current_frame == 21) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_21';
        }

        ;

        if (current_frame == 22) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_22';
        }

        ;

        if (current_frame == 23) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_23';
        }

        ;

        if (current_frame == 24) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_hand_24';
        }

        ;

        if (current_frame == 25) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_1';
        }

        ;

        if (current_frame == 26) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_2';
        }

        ;

        if (current_frame == 27) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_3';
        }

        ;

        if (current_frame == 28) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_4';
        }

        ;

        if (current_frame == 29) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_5';
        }

        ;

        if (current_frame == 30) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_6';
        }

        ;

        if (current_frame == 31) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_7';
        }

        ;

        if (current_frame == 32) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_8';
        }

        ;

        if (current_frame == 33) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_9';
        }

        ;

        if (current_frame == 34) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_10';
        }

        ;

        if (current_frame == 35) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_11';
        }

        ;

        if (current_frame == 36) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_12';
        }

        ;

        if (current_frame == 37) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_13';
        }

        ;

        if (current_frame == 38) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_14';
        }

        ;

        if (current_frame == 39) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_15';
        }

        ;

        if (current_frame == 40) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_16';
        }

        ;

        if (current_frame == 41) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_17';
        }

        ;

        if (current_frame == 42) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_18';
        }

        ;

        if (current_frame == 43) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_19';
        }

        ;

        if (current_frame == 44) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_20';
        }

        ;

        if (current_frame == 45) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_21';
        }

        ;

        if (current_frame == 46) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_22';
        }

        ;

        if (current_frame == 47) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_23';
        }

        ;

        if (current_frame == 48) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_hands_0_0_depth_200_24';
        }

        ;

        if (current_frame == 49) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_1';
        }

        ;

        if (current_frame == 50) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_2';
        }

        ;

        if (current_frame == 51) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_3';
        }

        ;

        if (current_frame == 52) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_4';
        }

        ;

        if (current_frame == 53) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_5';
        }

        ;

        if (current_frame == 54) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_6';
        }

        ;

        if (current_frame == 55) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_7';
        }

        ;

        if (current_frame == 56) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_8';
        }

        ;

        if (current_frame == 57) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_9';
        }

        ;

        if (current_frame == 58) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_10';
        }

        ;

        if (current_frame == 59) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_11';
        }

        ;

        if (current_frame == 60) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'gui_paint_12';
        }

        ;

        if (current_frame == 61) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_1';
        }

        ;

        if (current_frame == 62) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_2';
        }

        ;

        if (current_frame == 63) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_3';
        }

        ;

        if (current_frame == 64) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_4';
        }

        ;

        if (current_frame == 65) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_5';
        }

        ;

        if (current_frame == 66) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_6';
        }

        ;

        if (current_frame == 67) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_7';
        }

        ;

        if (current_frame == 68) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_8';
        }

        ;

        if (current_frame == 69) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_9';
        }

        ;

        if (current_frame == 70) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_1';
        }

        ;

        if (current_frame == 71) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_2';
        }

        ;

        if (current_frame == 72) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_3';
        }

        ;

        if (current_frame == 73) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_4';
        }

        ;

        if (current_frame == 74) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_5';
        }

        ;

        if (current_frame == 75) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_6';
        }

        ;

        if (current_frame == 76) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_7';
        }

        ;

        if (current_frame == 77) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_8';
        }

        ;

        if (current_frame == 78) {
          MANIPULATED.classList = ' position_absolute bottom_-100 right_-100 width_5vh height_5vh margin_auto float_left opacity_0 ' + 'nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_9';
        }

        ;

        if (current_frame == 86) {
          if (loop == true) {
            current_frame = 0;
            loops += 1;
          }

          ;

          if (loop == false) {
            clearInterval(start_animation);
          }

          ;
        }

        ;
        current_frame += 1;
      }
    }, 1000 / state.animation.framerate);
  })();
};

var HANDLE_inital_load = function HANDLE_inital_load() {
  // overall site frames by 24 frames
  (function () {
    var interval = 24 * -3;
    setInterval(function () {
      // before "72 frames (3 seconds)"
      if (interval == 24 * -3) {
        HANDLE_pre_loader();
      }

      ; // After "48 frames" exc..

      if (interval == 0) {
        Handle_render_view();
        Handle_Firebase_Refs_and_Render();
      }

      ;
      interval += 1; //console.log('current frame is: ' + interval);
    }, 1000 / 24);
  })();
};

var onload = function onload() {
  (0, _style.default)(); // garage('monster', 'monster');

  console.log(localStorage);
  console.log(localStorage.user);
  console.log(window);
  console.log(screen);
  console.log(screen.height);
  console.log(screen.width);
  console.log(navigator);
  console.log(history);
  console.log(history.length);
  console.log(location);
  console.log(location.pathname);
  HANDLE_inital_load();

  (function () {
    setInterval(function () {
      Handle_check_states();
    }, 1000 / 24);
  })();
};

window.onload = function () {
  console.log('onload');
  onload();
}; // Exports


var _default = {
  Handle_return_state: Handle_return_state,
  Handle_Firebase_Refs_and_Render: Handle_Firebase_Refs_and_Render,
  addListings: addListings,
  deleteWhoListings: deleteWhoListings,
  player_1_grow: player_1_grow,
  player_1_shrink: player_1_shrink
};
exports.default = _default;
},{"./style":"style.js","./fb":"fb.js","./partials/state":"partials/state.js","./partials/functions":"partials/functions.js","./partials/defaults":"partials/defaults.js","./partials/events":"partials/events.js","./partials/components":"partials/components.js","./partials/ui":"partials/ui.js","./partials/interaction":"partials/interaction.js","./partials/animation":"partials/animation.js"}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64230" + '/');

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
},{}]},{},["../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/package.e31bb0bc.map