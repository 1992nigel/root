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
},{}],"index.js":[function(require,module,exports) {
// Rules
'use strict'; // Imports

var _style = _interopRequireDefault(require("./style"));

var _fb = _interopRequireDefault(require("./fb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _style.default)();
},{"./style":"style.js","./fb":"fb.js"}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55559" + '/');

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