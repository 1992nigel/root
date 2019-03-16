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
},{"./assets/frames/stage_wall_lines_90_iphone.svg":[["stage_wall_lines_90_iphone.57b4b272.svg","assets/frames/stage_wall_lines_90_iphone.svg"],"assets/frames/stage_wall_lines_90_iphone.svg"],"./assets/frames/loading/gui_paint_1.svg":[["gui_paint_1.b3b4b027.svg","assets/frames/loading/gui_paint_1.svg"],"assets/frames/loading/gui_paint_1.svg"],"./assets/frames/loading/gui_paint_2.svg":[["gui_paint_2.5b80ea42.svg","assets/frames/loading/gui_paint_2.svg"],"assets/frames/loading/gui_paint_2.svg"],"./assets/frames/loading/gui_paint_3.svg":[["gui_paint_3.2a577129.svg","assets/frames/loading/gui_paint_3.svg"],"assets/frames/loading/gui_paint_3.svg"],"./assets/frames/loading/gui_paint_4.svg":[["gui_paint_4.448e5276.svg","assets/frames/loading/gui_paint_4.svg"],"assets/frames/loading/gui_paint_4.svg"],"./assets/frames/loading/gui_paint_5.svg":[["gui_paint_5.9e35cb70.svg","assets/frames/loading/gui_paint_5.svg"],"assets/frames/loading/gui_paint_5.svg"],"./assets/frames/loading/gui_paint_6.svg":[["gui_paint_6.a5df9901.svg","assets/frames/loading/gui_paint_6.svg"],"assets/frames/loading/gui_paint_6.svg"],"./assets/frames/loading/gui_paint_7.svg":[["gui_paint_7.7e2bf3a5.svg","assets/frames/loading/gui_paint_7.svg"],"assets/frames/loading/gui_paint_7.svg"],"./assets/frames/loading/gui_paint_8.svg":[["gui_paint_8.d23cb745.svg","assets/frames/loading/gui_paint_8.svg"],"assets/frames/loading/gui_paint_8.svg"],"./assets/frames/loading/gui_paint_9.svg":[["gui_paint_9.d3e65220.svg","assets/frames/loading/gui_paint_9.svg"],"assets/frames/loading/gui_paint_9.svg"],"./assets/frames/loading/gui_paint_10.svg":[["gui_paint_10.e96d9610.svg","assets/frames/loading/gui_paint_10.svg"],"assets/frames/loading/gui_paint_10.svg"],"./assets/frames/loading/gui_paint_11.svg":[["gui_paint_11.5e51d7bd.svg","assets/frames/loading/gui_paint_11.svg"],"assets/frames/loading/gui_paint_11.svg"],"./assets/frames/loading/gui_paint_12.svg":[["gui_paint_12.6b3d0d05.svg","assets/frames/loading/gui_paint_12.svg"],"assets/frames/loading/gui_paint_12.svg"],"./assets/frames/loading/gui_paint_hand_1.svg":[["gui_paint_hand_1.622d59fc.svg","assets/frames/loading/gui_paint_hand_1.svg"],"assets/frames/loading/gui_paint_hand_1.svg"],"./assets/frames/loading/gui_paint_hand_2.svg":[["gui_paint_hand_2.8b13694f.svg","assets/frames/loading/gui_paint_hand_2.svg"],"assets/frames/loading/gui_paint_hand_2.svg"],"./assets/frames/loading/gui_paint_hand_3.svg":[["gui_paint_hand_3.639282a0.svg","assets/frames/loading/gui_paint_hand_3.svg"],"assets/frames/loading/gui_paint_hand_3.svg"],"./assets/frames/loading/gui_paint_hand_4.svg":[["gui_paint_hand_4.a4c7e46c.svg","assets/frames/loading/gui_paint_hand_4.svg"],"assets/frames/loading/gui_paint_hand_4.svg"],"./assets/frames/loading/gui_paint_hand_5.svg":[["gui_paint_hand_5.d20c76bf.svg","assets/frames/loading/gui_paint_hand_5.svg"],"assets/frames/loading/gui_paint_hand_5.svg"],"./assets/frames/loading/gui_paint_hand_6.svg":[["gui_paint_hand_6.6132847b.svg","assets/frames/loading/gui_paint_hand_6.svg"],"assets/frames/loading/gui_paint_hand_6.svg"],"./assets/frames/loading/gui_paint_hand_7.svg":[["gui_paint_hand_7.e6dead04.svg","assets/frames/loading/gui_paint_hand_7.svg"],"assets/frames/loading/gui_paint_hand_7.svg"],"./assets/frames/loading/gui_paint_hand_8.svg":[["gui_paint_hand_8.4c9e7fb0.svg","assets/frames/loading/gui_paint_hand_8.svg"],"assets/frames/loading/gui_paint_hand_8.svg"],"./assets/frames/loading/gui_paint_hand_9.svg":[["gui_paint_hand_9.0942c7b7.svg","assets/frames/loading/gui_paint_hand_9.svg"],"assets/frames/loading/gui_paint_hand_9.svg"],"./assets/frames/loading/gui_paint_hand_10.svg":[["gui_paint_hand_10.5acd4a19.svg","assets/frames/loading/gui_paint_hand_10.svg"],"assets/frames/loading/gui_paint_hand_10.svg"],"./assets/frames/loading/gui_paint_hand_11.svg":[["gui_paint_hand_11.4c4ad835.svg","assets/frames/loading/gui_paint_hand_11.svg"],"assets/frames/loading/gui_paint_hand_11.svg"],"./assets/frames/loading/gui_paint_hand_12.svg":[["gui_paint_hand_12.9796e232.svg","assets/frames/loading/gui_paint_hand_12.svg"],"assets/frames/loading/gui_paint_hand_12.svg"],"./assets/frames/loading/gui_paint_hand_13.svg":[["gui_paint_hand_13.174e96ea.svg","assets/frames/loading/gui_paint_hand_13.svg"],"assets/frames/loading/gui_paint_hand_13.svg"],"./assets/frames/loading/gui_paint_hand_14.svg":[["gui_paint_hand_14.bf70ecfc.svg","assets/frames/loading/gui_paint_hand_14.svg"],"assets/frames/loading/gui_paint_hand_14.svg"],"./assets/frames/loading/gui_paint_hand_15.svg":[["gui_paint_hand_15.a134211f.svg","assets/frames/loading/gui_paint_hand_15.svg"],"assets/frames/loading/gui_paint_hand_15.svg"],"./assets/frames/loading/gui_paint_hand_16.svg":[["gui_paint_hand_16.781e6a2a.svg","assets/frames/loading/gui_paint_hand_16.svg"],"assets/frames/loading/gui_paint_hand_16.svg"],"./assets/frames/loading/gui_paint_hand_17.svg":[["gui_paint_hand_17.8d0c7ee4.svg","assets/frames/loading/gui_paint_hand_17.svg"],"assets/frames/loading/gui_paint_hand_17.svg"],"./assets/frames/loading/gui_paint_hand_18.svg":[["gui_paint_hand_18.6e3a0199.svg","assets/frames/loading/gui_paint_hand_18.svg"],"assets/frames/loading/gui_paint_hand_18.svg"],"./assets/frames/loading/gui_paint_hand_19.svg":[["gui_paint_hand_19.c851fb5b.svg","assets/frames/loading/gui_paint_hand_19.svg"],"assets/frames/loading/gui_paint_hand_19.svg"],"./assets/frames/loading/gui_paint_hand_20.svg":[["gui_paint_hand_20.61032117.svg","assets/frames/loading/gui_paint_hand_20.svg"],"assets/frames/loading/gui_paint_hand_20.svg"],"./assets/frames/loading/gui_paint_hand_21.svg":[["gui_paint_hand_21.418ba654.svg","assets/frames/loading/gui_paint_hand_21.svg"],"assets/frames/loading/gui_paint_hand_21.svg"],"./assets/frames/loading/gui_paint_hand_22.svg":[["gui_paint_hand_22.2eb0d082.svg","assets/frames/loading/gui_paint_hand_22.svg"],"assets/frames/loading/gui_paint_hand_22.svg"],"./assets/frames/loading/gui_paint_hand_23.svg":[["gui_paint_hand_23.e6db1316.svg","assets/frames/loading/gui_paint_hand_23.svg"],"assets/frames/loading/gui_paint_hand_23.svg"],"./assets/frames/loading/gui_paint_hand_24.svg":[["gui_paint_hand_24.63e7dc97.svg","assets/frames/loading/gui_paint_hand_24.svg"],"assets/frames/loading/gui_paint_hand_24.svg"],"./assets/frames/loading/gui_draw_hand_1.svg":[["gui_draw_hand_1.b985e4ae.svg","assets/frames/loading/gui_draw_hand_1.svg"],"assets/frames/loading/gui_draw_hand_1.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_1.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_1.96d01f7c.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_1.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_1.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_2.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_2.de61fa3f.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_2.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_2.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_3.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_3.ba61e76b.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_3.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_3.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_4.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_4.0c04cccf.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_4.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_4.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_5.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_5.0148153f.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_5.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_5.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_6.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_6.e3d1a16a.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_6.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_6.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_7.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_7.a9aa315e.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_7.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_7.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_8.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_8.ece82cad.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_8.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_8.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_9.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_9.2554e748.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_9.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_9.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_10.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_10.0e147fbb.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_10.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_10.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_11.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_11.69fad320.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_11.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_11.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_12.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_12.48183fff.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_12.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_12.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_13.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_13.012bcd22.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_13.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_13.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_14.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_14.e0d4bab0.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_14.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_14.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_15.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_15.ea290eae.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_15.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_15.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_16.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_16.97d5898d.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_16.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_16.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_17.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_17.8f7e520b.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_17.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_17.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_18.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_18.7b3de953.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_18.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_18.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_19.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_19.f2a58cac.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_19.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_19.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_20.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_20.c47de1fa.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_20.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_20.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_21.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_21.47e6e876.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_21.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_21.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_22.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_22.6a504572.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_22.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_22.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_23.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_23.4893ea65.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_23.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_23.svg"],"./assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_24.svg":[["nownigel_gui_interaction_hands_0_0_depth_200_24.a1d92fc3.svg","assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_24.svg"],"assets/frames/loading/nownigel_gui_interaction_hands_0_0_depth_200_24.svg"],"./assets/effect/vignette.svg":[["vignette.0e668da4.svg","assets/effect/vignette.svg"],"assets/effect/vignette.svg"],"./assets/accent/noise_1.svg":[["noise_1.af8b8b96.svg","assets/accent/noise_1.svg"],"assets/accent/noise_1.svg"],"./assets/frames/turnaround_particle_think.svg":[["turnaround_particle_think.7c0e872f.svg","assets/frames/turnaround_particle_think.svg"],"assets/frames/turnaround_particle_think.svg"],"./assets/frames/buildings/building_1.svg":[["building_1.726f1846.svg","assets/frames/buildings/building_1.svg"],"assets/frames/buildings/building_1.svg"],"./assets/frames/buildings/park_1.svg":[["park_1.adbba1cd.svg","assets/frames/buildings/park_1.svg"],"assets/frames/buildings/park_1.svg"],"./assets/frames/buildings/city_1.svg":[["city_1.095941fe.svg","assets/frames/buildings/city_1.svg"],"assets/frames/buildings/city_1.svg"],"./assets/frames/buildings/sky_1.svg":[["sky_1.4c2a347e.svg","assets/frames/buildings/sky_1.svg"],"assets/frames/buildings/sky_1.svg"],"./assets/frames/buildings/outside_1.svg":[["outside_1.f19d5b18.svg","assets/frames/buildings/outside_1.svg"],"assets/frames/buildings/outside_1.svg"],"./assets/frames/buildings/indoor_1.svg":[["indoor_1.8a5f48b1.svg","assets/frames/buildings/indoor_1.svg"],"assets/frames/buildings/indoor_1.svg"],"./assets/frames/buildings/cliff_1.svg":[["cliff_1.82e062e0.svg","assets/frames/buildings/cliff_1.svg"],"assets/frames/buildings/cliff_1.svg"],"./assets/frames/buildings/basement_1.svg":[["basement_1.9cb9f5f4.svg","assets/frames/buildings/basement_1.svg"],"assets/frames/buildings/basement_1.svg"],"./assets/frames/stage_grid.svg":[["stage_grid.35bd7fa4.svg","assets/frames/stage_grid.svg"],"assets/frames/stage_grid.svg"],"./assets/frames/stage_perspective.svg":[["stage_perspective.0f6afe98.svg","assets/frames/stage_perspective.svg"],"assets/frames/stage_perspective.svg"],"./assets/frames/stage_ceiling_90.svg":[["stage_ceiling_90.55f16ceb.svg","assets/frames/stage_ceiling_90.svg"],"assets/frames/stage_ceiling_90.svg"],"./assets/frames/stage_ceiling_90_yellow.svg":[["stage_ceiling_90_yellow.a4b3c396.svg","assets/frames/stage_ceiling_90_yellow.svg"],"assets/frames/stage_ceiling_90_yellow.svg"],"./assets/frames/stage_ceiling_90_light_yellow_1.svg":[["stage_ceiling_90_light_yellow_1.0df12f73.svg","assets/frames/stage_ceiling_90_light_yellow_1.svg"],"assets/frames/stage_ceiling_90_light_yellow_1.svg"],"./assets/frames/stage_ceiling_90_dark_yellow_9.svg":[["stage_ceiling_90_dark_yellow_9.a09e6bd9.svg","assets/frames/stage_ceiling_90_dark_yellow_9.svg"],"assets/frames/stage_ceiling_90_dark_yellow_9.svg"],"./assets/frames/stage_floor_90.svg":[["stage_floor_90.c344f6ef.svg","assets/frames/stage_floor_90.svg"],"assets/frames/stage_floor_90.svg"],"./assets/frames/stage_floor_90_yellow.svg":[["stage_floor_90_yellow.b16a3ed2.svg","assets/frames/stage_floor_90_yellow.svg"],"assets/frames/stage_floor_90_yellow.svg"],"./assets/frames/stage_floor_90_light_yellow_1.svg":[["stage_floor_90_light_yellow_1.372610d5.svg","assets/frames/stage_floor_90_light_yellow_1.svg"],"assets/frames/stage_floor_90_light_yellow_1.svg"],"./assets/frames/stage_floor_90_dark_yellow_9.svg":[["stage_floor_90_dark_yellow_9.1d6816d2.svg","assets/frames/stage_floor_90_dark_yellow_9.svg"],"assets/frames/stage_floor_90_dark_yellow_9.svg"],"./assets/frames/stage_wall_left.svg":[["stage_wall_left.8475114d.svg","assets/frames/stage_wall_left.svg"],"assets/frames/stage_wall_left.svg"],"./assets/frames/stage_wall_right.svg":[["stage_wall_right.7cbc6161.svg","assets/frames/stage_wall_right.svg"],"assets/frames/stage_wall_right.svg"],"./assets/frames/stage_office_wall.svg":[["stage_office_wall.009a3f5f.svg","assets/frames/stage_office_wall.svg"],"assets/frames/stage_office_wall.svg"],"./assets/frames/stage_wall_90.svg":[["stage_wall_90.cf987742.svg","assets/frames/stage_wall_90.svg"],"assets/frames/stage_wall_90.svg"],"./assets/frames/stage_wall_90_dark_yellow_9.svg":[["stage_wall_90_dark_yellow_9.85442f50.svg","assets/frames/stage_wall_90_dark_yellow_9.svg"],"assets/frames/stage_wall_90_dark_yellow_9.svg"],"./assets/frames/stage_wall_90_light_yellow_1.svg":[["stage_wall_90_light_yellow_1.bcecc181.svg","assets/frames/stage_wall_90_light_yellow_1.svg"],"assets/frames/stage_wall_90_light_yellow_1.svg"],"./assets/frames/stage_wall_90_yellow.svg":[["stage_wall_90_yellow.99896895.svg","assets/frames/stage_wall_90_yellow.svg"],"assets/frames/stage_wall_90_yellow.svg"],"./assets/frames/stage_wall_lines_90.svg":[["stage_wall_lines_90.80afb6e7.svg","assets/frames/stage_wall_lines_90.svg"],"assets/frames/stage_wall_lines_90.svg"],"./assets/frames/stage_workspace.svg":[["stage_workspace.370535c9.svg","assets/frames/stage_workspace.svg"],"assets/frames/stage_workspace.svg"],"./assets/frames/stage_door_opened.svg":[["stage_door_opened.f4b89b0d.svg","assets/frames/stage_door_opened.svg"],"assets/frames/stage_door_opened.svg"],"./assets/frames/pieces_office_shoplight_on.svg":[["pieces_office_shoplight_on.5cb044c5.svg","assets/frames/pieces_office_shoplight_on.svg"],"assets/frames/pieces_office_shoplight_on.svg"],"./assets/frames/stage_office_items.svg":[["stage_office_items.05cc0d19.svg","assets/frames/stage_office_items.svg"],"assets/frames/stage_office_items.svg"],"./assets/frames/stage_office_items_2.svg":[["stage_office_items_2.9db083d2.svg","assets/frames/stage_office_items_2.svg"],"assets/frames/stage_office_items_2.svg"],"./assets/frames/stage_ladder.svg":[["stage_ladder.7f577c8c.svg","assets/frames/stage_ladder.svg"],"assets/frames/stage_ladder.svg"],"./assets/frames/turnaround_lamp_y_1_x_1.svg":[["turnaround_lamp_y_1_x_1.67250e0e.svg","assets/frames/turnaround_lamp_y_1_x_1.svg"],"assets/frames/turnaround_lamp_y_1_x_1.svg"],"./assets/frames/turnaround_desk_y_1_x_1.svg":[["turnaround_desk_y_1_x_1.20e81d98.svg","assets/frames/turnaround_desk_y_1_x_1.svg"],"assets/frames/turnaround_desk_y_1_x_1.svg"],"./assets/frames/turnaround_nigel_full_body_standing_y_1_x_1.svg":[["turnaround_nigel_full_body_standing_y_1_x_1.e96777af.svg","assets/frames/turnaround_nigel_full_body_standing_y_1_x_1.svg"],"assets/frames/turnaround_nigel_full_body_standing_y_1_x_1.svg"],"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_1.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_1.61a0adee.svg","assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_1.svg"],"assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_1.svg"],"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_2.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_2.ee23fb6b.svg","assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_2.svg"],"assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_2.svg"],"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_3.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_3.45ffa588.svg","assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_3.svg"],"assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_3.svg"],"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_4.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_4.04b099d9.svg","assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_4.svg"],"assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_4.svg"],"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_5.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_5.308d44e6.svg","assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_5.svg"],"assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_5.svg"],"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_6.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_6.ccfb6011.svg","assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_6.svg"],"assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_6.svg"],"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_7.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_7.f6b2400c.svg","assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_7.svg"],"assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_7.svg"],"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_8.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_8.89be9205.svg","assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_8.svg"],"assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_8.svg"],"./assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_9.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_9.aa8a0d70.svg","assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_9.svg"],"assets/frames/walk_left/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_left_9.svg"],"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_1.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_1.3f9aba38.svg","assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_1.svg"],"assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_1.svg"],"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_2.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_2.4b6a02c5.svg","assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_2.svg"],"assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_2.svg"],"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_3.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_3.8633d7ac.svg","assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_3.svg"],"assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_3.svg"],"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_4.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_4.62631e35.svg","assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_4.svg"],"assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_4.svg"],"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_5.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_5.442bd885.svg","assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_5.svg"],"assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_5.svg"],"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_6.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_6.1c4c0aa2.svg","assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_6.svg"],"assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_6.svg"],"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_7.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_7.d9f9249f.svg","assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_7.svg"],"assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_7.svg"],"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_8.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_8.0e02c39d.svg","assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_8.svg"],"assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_8.svg"],"./assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_9.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_9.0cb463cf.svg","assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_9.svg"],"assets/frames/walk_right/nownigel_gui_interaction_man_0_16_depth_200_face_0_walk_right_9.svg"],"./assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_1.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_1.987c9fc2.svg","assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_1.svg"],"assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_1.svg"],"./assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_2.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_2.96eb6ece.svg","assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_2.svg"],"assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_2.svg"],"./assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_3.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_3.45829aa5.svg","assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_3.svg"],"assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_3.svg"],"./assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_4.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_4.f5a38734.svg","assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_4.svg"],"assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_left_4.svg"],"./assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_1.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_1.806b3344.svg","assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_1.svg"],"assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_1.svg"],"./assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_2.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_2.8ae0e885.svg","assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_2.svg"],"assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_2.svg"],"./assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_3.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_3.134821e5.svg","assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_3.svg"],"assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_3.svg"],"./assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_4.svg":[["nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_4.abdea22a.svg","assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_4.svg"],"assets/frames/standing/nownigel_gui_interaction_man_0_16_depth_200_face_0_breathing_right_4.svg"],"./assets/gui/about_type.svg":[["about_type.0baa28b8.svg","assets/gui/about_type.svg"],"assets/gui/about_type.svg"],"./assets/gui/gui_create.svg":[["gui_create.6dc762ee.svg","assets/gui/gui_create.svg"],"assets/gui/gui_create.svg"],"./assets/gui/gui_search.svg":[["gui_search.0248e663.svg","assets/gui/gui_search.svg"],"assets/gui/gui_search.svg"],"./assets/gui/gui_loading.svg":[["gui_loading.9a7d2b66.svg","assets/gui/gui_loading.svg"],"assets/gui/gui_loading.svg"],"./assets/gui/gui_original.svg":[["gui_original.21a3255d.svg","assets/gui/gui_original.svg"],"assets/gui/gui_original.svg"],"./assets/gui/gui_handcrafted.svg":[["gui_handcrafted.453e8264.svg","assets/gui/gui_handcrafted.svg"],"assets/gui/gui_handcrafted.svg"],"./assets/gui/gui_based.svg":[["gui_based.dfd54ae3.svg","assets/gui/gui_based.svg"],"assets/gui/gui_based.svg"],"./assets/gui/gui_logo.svg":[["gui_logo.82c1c1c2.svg","assets/gui/gui_logo.svg"],"assets/gui/gui_logo.svg"],"./assets/gui/gui_logo_type.svg":[["gui_logo_type.337ae418.svg","assets/gui/gui_logo_type.svg"],"assets/gui/gui_logo_type.svg"],"./assets/gui/gui_logo_mark.svg":[["gui_logo_mark.74c41270.svg","assets/gui/gui_logo_mark.svg"],"assets/gui/gui_logo_mark.svg"],"./assets/gui/gui_logo_arrows.svg":[["gui_logo_arrows.80c26d19.svg","assets/gui/gui_logo_arrows.svg"],"assets/gui/gui_logo_arrows.svg"],"./assets/gui/gui_logo_com.svg":[["gui_logo_com.d9cc329d.svg","assets/gui/gui_logo_com.svg"],"assets/gui/gui_logo_com.svg"],"./assets/gui/gui_logo_since.svg":[["gui_logo_since.ee4341ac.svg","assets/gui/gui_logo_since.svg"],"assets/gui/gui_logo_since.svg"],"./assets/gui/gui_logo_icons.svg":[["gui_logo_icons.c4db3905.svg","assets/gui/gui_logo_icons.svg"],"assets/gui/gui_logo_icons.svg"],"./assets/gui/gui_logo_links.svg":[["gui_logo_links.488749ac.svg","assets/gui/gui_logo_links.svg"],"assets/gui/gui_logo_links.svg"],"./assets/gui/gui_hor_line.svg":[["gui_hor_line.c1a42f95.svg","assets/gui/gui_hor_line.svg"],"assets/gui/gui_hor_line.svg"],"./assets/gui/gui_vert_line.svg":[["gui_vert_line.7f49bacb.svg","assets/gui/gui_vert_line.svg"],"assets/gui/gui_vert_line.svg"],"./assets/gui/gui_button_back.svg":[["gui_button_back.99b2b854.svg","assets/gui/gui_button_back.svg"],"assets/gui/gui_button_back.svg"],"./assets/gui/gui_button_start.svg":[["gui_button_start.f4668fec.svg","assets/gui/gui_button_start.svg"],"assets/gui/gui_button_start.svg"],"./assets/gui/gui_or.svg":[["gui_or.35ccad12.svg","assets/gui/gui_or.svg"],"assets/gui/gui_or.svg"],"./assets/gui/gui_button_learn.svg":[["gui_button_learn.cfb8d444.svg","assets/gui/gui_button_learn.svg"],"assets/gui/gui_button_learn.svg"],"./assets/gui/gui_move_note.svg":[["gui_move_note.23e34b87.svg","assets/gui/gui_move_note.svg"],"assets/gui/gui_move_note.svg"],"./assets/gui/gui_made_by.svg":[["gui_made_by.3533edb1.svg","assets/gui/gui_made_by.svg"],"assets/gui/gui_made_by.svg"],"./assets/gui/gui_scroll.svg":[["gui_scroll.3ecf6f58.svg","assets/gui/gui_scroll.svg"],"assets/gui/gui_scroll.svg"],"./assets/gui/gui_wheel.svg":[["gui_wheel.6ea8beb2.svg","assets/gui/gui_wheel.svg"],"assets/gui/gui_wheel.svg"],"./assets/gui/gui_avatar.svg":[["gui_avatar.c0327820.svg","assets/gui/gui_avatar.svg"],"assets/gui/gui_avatar.svg"],"./assets/gui/gui_paint_top.svg":[["gui_paint_top.7b9cdcec.svg","assets/gui/gui_paint_top.svg"],"assets/gui/gui_paint_top.svg"],"./assets/gui/gui_paint_bottom.svg":[["gui_paint_bottom.bd28c509.svg","assets/gui/gui_paint_bottom.svg"],"assets/gui/gui_paint_bottom.svg"],"./assets/gui/gui_paint_right.svg":[["gui_paint_right.ff02e73c.svg","assets/gui/gui_paint_right.svg"],"assets/gui/gui_paint_right.svg"],"./assets/gui/gui_paint_left.svg":[["gui_paint_left.95fe9020.svg","assets/gui/gui_paint_left.svg"],"assets/gui/gui_paint_left.svg"],"./assets/gui/gui_i.svg":[["gui_i.abf26978.svg","assets/gui/gui_i.svg"],"assets/gui/gui_i.svg"],"./assets/gui/gui_i_circle.svg":[["gui_i_circle.76b81b44.svg","assets/gui/gui_i_circle.svg"],"assets/gui/gui_i_circle.svg"],"./assets/gui/gui_circle.svg":[["gui_circle.25bc022e.svg","assets/gui/gui_circle.svg"],"assets/gui/gui_circle.svg"],"./assets/gui/gui_circle_hover.svg":[["gui_circle_hover.a6b1ed17.svg","assets/gui/gui_circle_hover.svg"],"assets/gui/gui_circle_hover.svg"],"./assets/gui/gui_circle_active.svg":[["gui_circle_active.8e5f4bc5.svg","assets/gui/gui_circle_active.svg"],"assets/gui/gui_circle_active.svg"],"./assets/gui/gui_navs_bars.svg":[["gui_navs_bars.1e04c268.svg","assets/gui/gui_navs_bars.svg"],"assets/gui/gui_navs_bars.svg"],"./assets/gui/gui_navs_bars_hover.svg":[["gui_navs_bars_hover.c7efd676.svg","assets/gui/gui_navs_bars_hover.svg"],"assets/gui/gui_navs_bars_hover.svg"],"./assets/gui/gui_dots.svg":[["gui_dots.dcf20746.svg","assets/gui/gui_dots.svg"],"assets/gui/gui_dots.svg"],"./assets/gui/gui_dots_hover.svg":[["gui_dots_hover.7059adf2.svg","assets/gui/gui_dots_hover.svg"],"assets/gui/gui_dots_hover.svg"],"./assets/gui/gui_vert_dots.svg":[["gui_vert_dots.85e8683e.svg","assets/gui/gui_vert_dots.svg"],"assets/gui/gui_vert_dots.svg"],"./assets/gui/gui_vert_dots_hover.svg":[["gui_vert_dots_hover.a55885fd.svg","assets/gui/gui_vert_dots_hover.svg"],"assets/gui/gui_vert_dots_hover.svg"],"./assets/gui/gui_vert_colon.svg":[["gui_vert_colon.5fc4a628.svg","assets/gui/gui_vert_colon.svg"],"assets/gui/gui_vert_colon.svg"],"./assets/gui/gui_vert_colon_hover.svg":[["gui_vert_colon_hover.9d2cb2d9.svg","assets/gui/gui_vert_colon_hover.svg"],"assets/gui/gui_vert_colon_hover.svg"],"./assets/gui/gui_close.svg":[["gui_close.8326933d.svg","assets/gui/gui_close.svg"],"assets/gui/gui_close.svg"],"./assets/gui/gui_close_hover.svg":[["gui_close_hover.e128ef62.svg","assets/gui/gui_close_hover.svg"],"assets/gui/gui_close_hover.svg"],"./assets/gui/gui_logo_social_instagram.svg":[["gui_logo_social_instagram.72971cc4.svg","assets/gui/gui_logo_social_instagram.svg"],"assets/gui/gui_logo_social_instagram.svg"],"./assets/gui/gui_logo_social_twitch.svg":[["gui_logo_social_twitch.c4c4a961.svg","assets/gui/gui_logo_social_twitch.svg"],"assets/gui/gui_logo_social_twitch.svg"],"./assets/gui/gui_logo_social_facebook.svg":[["gui_logo_social_facebook.906eb205.svg","assets/gui/gui_logo_social_facebook.svg"],"assets/gui/gui_logo_social_facebook.svg"],"./assets/gui/gui_logo_social_youtube.svg":[["gui_logo_social_youtube.b5b4ebf4.svg","assets/gui/gui_logo_social_youtube.svg"],"assets/gui/gui_logo_social_youtube.svg"],"./assets/gui/gui_logo_social_twitter.svg":[["gui_logo_social_twitter.6a5e9968.svg","assets/gui/gui_logo_social_twitter.svg"],"assets/gui/gui_logo_social_twitter.svg"],"./assets/gui/gui_audio.svg":[["gui_audio.c0e81a39.svg","assets/gui/gui_audio.svg"],"assets/gui/gui_audio.svg"],"./assets/gui/gui_audio_on.svg":[["gui_audio_on.a3f308f7.svg","assets/gui/gui_audio_on.svg"],"assets/gui/gui_audio_on.svg"],"./assets/gui/gui_audio_off.svg":[["gui_audio_off.8e5b06ce.svg","assets/gui/gui_audio_off.svg"],"assets/gui/gui_audio_off.svg"],"./assets/gui/gui_button_hire.svg":[["gui_button_hire.aa5ee4a7.svg","assets/gui/gui_button_hire.svg"],"assets/gui/gui_button_hire.svg"],"./assets/gui/gui_button_help.svg":[["gui_button_help.033f1f75.svg","assets/gui/gui_button_help.svg"],"assets/gui/gui_button_help.svg"],"./assets/gui/gui_button_signin.svg":[["gui_button_signin.21f7bde2.svg","assets/gui/gui_button_signin.svg"],"assets/gui/gui_button_signin.svg"],"./assets/gui/gui_button_signup.svg":[["gui_button_signup.eb39a8ff.svg","assets/gui/gui_button_signup.svg"],"assets/gui/gui_button_signup.svg"],"./assets/gui/gui_button_signout.svg":[["gui_button_signout.5cf61df1.svg","assets/gui/gui_button_signout.svg"],"assets/gui/gui_button_signout.svg"],"./assets/gui/gui_button_enter.svg":[["gui_button_enter.dd5ce9ea.svg","assets/gui/gui_button_enter.svg"],"assets/gui/gui_button_enter.svg"],"./assets/gui/gui_arrow_left.svg":[["gui_arrow_left.859710f3.svg","assets/gui/gui_arrow_left.svg"],"assets/gui/gui_arrow_left.svg"],"./assets/gui/gui_arrow_top_left.svg":[["gui_arrow_top_left.b4da3972.svg","assets/gui/gui_arrow_top_left.svg"],"assets/gui/gui_arrow_top_left.svg"],"./assets/gui/gui_arrow_bottom_left.svg":[["gui_arrow_bottom_left.41a8ae45.svg","assets/gui/gui_arrow_bottom_left.svg"],"assets/gui/gui_arrow_bottom_left.svg"],"./assets/gui/gui_arrow_top.svg":[["gui_arrow_top.da3b27d8.svg","assets/gui/gui_arrow_top.svg"],"assets/gui/gui_arrow_top.svg"],"./assets/gui/gui_arrow_bottom.svg":[["gui_arrow_bottom.b5b8d38a.svg","assets/gui/gui_arrow_bottom.svg"],"assets/gui/gui_arrow_bottom.svg"],"./assets/gui/gui_arrow_right.svg":[["gui_arrow_right.91b7aa1a.svg","assets/gui/gui_arrow_right.svg"],"assets/gui/gui_arrow_right.svg"],"./assets/gui/gui_arrow_top_right.svg":[["gui_arrow_top_right.69c6805b.svg","assets/gui/gui_arrow_top_right.svg"],"assets/gui/gui_arrow_top_right.svg"],"./assets/gui/gui_arrow_bottom_right.svg":[["gui_arrow_bottom_right.023d6109.svg","assets/gui/gui_arrow_bottom_right.svg"],"assets/gui/gui_arrow_bottom_right.svg"],"_css_loader":"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"partials/elements.js":[function(require,module,exports) {
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

var menu_sub = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_100 top_0 float_left line_height_5vh font_size_205vh pseudo_arrow_left_outside_white text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <div class=\"position_relative top_0vh left_0vh easing_025 width_100 height_100 text_align_center float_right pseudo_arrow_left_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                     Nigel\n                  </div>\n              </div>\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div  id=\"route_workshop_2\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    Maisie\n                  </div>\n              </div>\n\n           </div>\n        </div>\n    </div>\n\n  </div>\n";
var element_after_sign_in = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_025 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white\">\n        <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n           \n                <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_flex_flow\">\n                    <b>Login user</b><br>\n                    <input type=\"text\" id=\"username\" placeholder=\"username\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <input type=\"text\" id=\"password\" placeholder=\"password\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                      <button id=\"element_user_sign_in\" class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\">login user</button>\n                    </div>\n\n                </div>\n\n           </div>\n        </div>\n     </div>\n\n    <div id=\"route_about_all\" class=\"gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n    <div class=\"position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n        <div id=\"route_about_cta\" class=\"position_relative float_left bg_yellow border_01vh_black pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark\">\n            <p class=\"font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left\">team cta</p>\n        </div>\n\n    </div>\n\n    <h1 class=\"verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_black border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">services</h1>\n\n  </div>\n";
var element_after_sign_up = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_025 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white\">\n        <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n                <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_flex_flow\">\n\n                    <br>\n                    <b>Create new user</b><br>\n                    <input type=\"text\" id=\"new_username\" placeholder=\"new username\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <input type=\"text\" id=\"new_password\" placeholder=\"new password\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                      <button id=\"element_create_user\" class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\">create user</button>\n                    </div>\n\n                    <br>\n                </div>\n\n           </div>\n        </div>\n     </div>\n\n    <div id=\"route_about_all\" class=\"gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n    <div class=\"position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n        <div id=\"route_about_cta\" class=\"position_relative float_left bg_yellow border_01vh_black pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark\">\n            <p class=\"font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left\">team cta</p>\n        </div>\n\n    </div>\n\n    <h1 class=\"verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_black border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">services</h1>\n\n  </div>\n";
var element_after_menu_about = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_025 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white\">\n        <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div id=\"route_about_1\" class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  \n                  <div class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                    <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    Brand\n                  </div>\n\n                  ".concat(menu_sub, "\n\n              </div>\n\n              <div id=\"route_about_2\" class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                     Products\n                  </div>\n                  ").concat(menu_sub, "\n              </div>\n\n              <div id=\"route_about_3\" class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    Office\n                  </div>\n                  ").concat(menu_sub, "\n              </div>\n\n              <div id=\"route_about_4\" class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    Staff\n                  </div>\n                  ").concat(menu_sub, "\n              </div>\n\n              <div id=\"route_about_5\" class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    Locations\n                  </div>\n                  ").concat(menu_sub, "\n              </div>\n\n              <div id=\"route_about_6\" class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    Process\n                  </div>\n                  ").concat(menu_sub, "\n              </div>\n\n\n           </div>\n        </div>\n     </div>\n\n    <div id=\"route_about_all\" class=\"gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n    <div class=\"position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n        <div id=\"route_about_cta\" class=\"position_relative float_left bg_yellow border_01vh_black pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark\">\n            <p class=\"font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left\">team cta</p>\n        </div>\n\n    </div>\n\n    <h1 class=\"verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_black border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">services</h1>\n\n  </div>\n");
var element_after_logo_menu_right = "\n  <div id=\"wp_component_meta\" class=\"position_absolute left_100 top_0 float_left height_1205vh width_85vw hover_show\">\n     <div class=\"position_relative top_0 left_-1vh easing_025 calc_2vh margin_1vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_025 width_100 height_100 text_align_center float_left\">\n          <div class=\" width_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"calc_2vh position_relative float_left padding_1vh bg_white border_01vh_black pseudo_arrow_left_top_outside_white webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                <div class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div  class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n";
var element_after_social_menu_right = "\n  <div id=\"wp_component_meta\" class=\"position_absolute left_100 top_0 float_left height_1205vh width_3705vw hover_show\">\n     <div class=\"position_relative top_0 left_-1vh easing_025 calc_2vh margin_1vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_025 width_100 height_100 text_align_center float_left\">\n          <div class=\" width_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"calc_2vh position_relative float_left padding_1vh bg_white border_01vh_black pseudo_arrow_left_top_outside_white webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                <div class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div  class=\"line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n";
var element_after_logo_menu_bottom = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_025 width_100 height_100 text_align_center float_right pseudo_arrow_top_left_outside_white\">\n        <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n           \n                <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_flex_flow\">\n                    <b>Login user</b><br>\n                    <input type=\"text\" id=\"username\" placeholder=\"username\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <input type=\"text\" id=\"password\" placeholder=\"password\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                      <button id=\"element_user_sign_in\" class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\">create post</button>\n                    </div>\n\n                </div>\n\n           </div>\n        </div>\n     </div>\n\n    <div id=\"route_about_all\" class=\"gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n    <div class=\"position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n        <div id=\"route_about_cta\" class=\"position_relative float_left bg_yellow border_01vh_black pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark\">\n            <p class=\"font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left\">team cta</p>\n        </div>\n\n    </div>\n\n    <h1 class=\"verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_black border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">services</h1>\n\n  </div>\n";
var element_after_dots = "\n    <div id=\"wp_component_meta\" class=\"position_absolute width_25vh top_100 right_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_025 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white\">\n        <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n           \n                <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_flex_flow\">\n                    <b>Login user</b><br>\n                    <input type=\"text\" id=\"username\" placeholder=\"username\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <input type=\"text\" id=\"password\" placeholder=\"password\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                      <button id=\"element_user_sign_in\" class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\">create post</button>\n                    </div>\n\n                </div>\n\n           </div>\n        </div>\n     </div>\n\n    <div id=\"route_about_all\" class=\"gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n    <div class=\"position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n        <div id=\"route_about_cta\" class=\"position_relative float_left bg_yellow border_01vh_black pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark\">\n            <p class=\"font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left\">team cta</p>\n        </div>\n\n    </div>\n\n    <h1 class=\"verticle_text position_absolute top_0 left_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_black border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">services</h1>\n\n  </div>\n";
var element_after_vert_dots = "\n    <div id=\"wp_component_meta\" class=\"position_absolute width_25vh bottom_100 right_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_025 width_100 height_100 text_align_center float_right pseudo_arrow_bottom_right_outside_white\">\n        <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n           \n                <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_flex_flow\">\n                    <b>Login user</b><br>\n                    <input type=\"text\" id=\"username\" placeholder=\"username\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <input type=\"text\" id=\"password\" placeholder=\"password\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                      <button id=\"element_user_sign_in\" class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\">create post</button>\n                    </div>\n\n                </div>\n\n           </div>\n        </div>\n     </div>\n\n    <div id=\"route_about_all\" class=\"gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n    <div class=\"position_absolute top_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n        <div id=\"route_about_cta\" class=\"position_relative float_left bg_yellow border_01vh_black pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark\">\n            <p class=\"font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left\">team cta</p>\n        </div>\n\n    </div>\n\n    <h1 class=\"verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_black border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">services</h1>\n\n  </div>\n";
var element_after_social_type = "\n    <div id=\"wp_component_meta\" class=\"position_absolute width_25vh bottom_100 left_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_025 width_100 height_100 text_align_center float_right pseudo_arrow_bottom_left_outside_white\">\n        <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n           \n                <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_flex_flow\">\n                    <b>Login user</b><br>\n                    <input type=\"text\" id=\"username\" placeholder=\"username\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <input type=\"text\" id=\"password\" placeholder=\"password\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                      <button id=\"element_user_sign_in\" class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\">create post</button>\n                    </div>\n\n                </div>\n\n           </div>\n        </div>\n     </div>\n\n    <div id=\"route_about_all\" class=\"gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n    <div class=\"position_absolute top_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n        <div id=\"route_about_cta\" class=\"position_relative float_left bg_yellow border_01vh_black pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark\">\n            <p class=\"font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left\">team cta</p>\n        </div>\n\n    </div>\n\n    <h1 class=\"verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_black border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">services</h1>\n\n  </div>\n";
var element_after_menu = "\n  <div id=\"wp_component_meta\" class=\"position_absolute left_100 top_100 float_left hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_025 calc_4vh margin_2vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_025 width_100 height_100 text_align_center float_left\">\n          <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"width_100 position_relative float_left padding_1vh bg_white border_01vh_black pseudo_arrow_top_left_outside_white\">\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n                <div  class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    breadcrumbs |\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n";
var element_after_social = "\n  <div id=\"wp_component_meta\" class=\"position_absolute left_0 bottom_100 float_left hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_025 calc_4vh margin_2vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_025 width_100 height_100 text_align_center float_left\">\n          <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"width_100 position_relative float_left padding_1vh bg_white border_01vh_black pseudo_arrow_bottom_left_outside_white\">\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    @nownigel\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n";
var element_after_meta = "\n  <div id=\"wp_component_meta\" class=\"position_absolute right_0 bottom_100 float_left hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_025 calc_4vh margin_2vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_025 width_100 height_100 text_align_center float_left\">\n          <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"width_100 position_relative float_left padding_1vh bg_white border_01vh_black pseudo_arrow_bottom_right_outside_white\">\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    Volume: 1 - 100\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n";
var element_after_search = "\n  <div id=\"wp_component_meta\" class=\"position_absolute left_0 top_100 float_left hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_025 calc_4vh margin_2vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_025 width_100 height_100 text_align_center float_left\">\n          <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"width_100 position_relative float_left padding_1vh bg_white border_01vh_black pseudo_arrow_top_left_outside_white\">\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    type |\n                  </div>\n                </div>\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    tag |\n                  </div>\n                </div>\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    category |\n                  </div>\n                </div>\n\n                <div class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    sub categories |\n                  </div>\n                </div>\n\n                <div  class=\"width_100 line_height_5vh float_left position_relative float_left margin_auto\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    date |\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n";
var element_after_create = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_025 width_100 height_100 text_align_center float_right pseudo_arrow_top_left_outside_white\">\n        <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n           \n                <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_flex_flow\">\n                    <b>Login user</b><br>\n                    <input type=\"text\" id=\"username\" placeholder=\"username\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <input type=\"text\" id=\"password\" placeholder=\"password\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                      <button id=\"element_user_sign_in\" class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\">create post</button>\n                    </div>\n\n                </div>\n\n           </div>\n        </div>\n     </div>\n\n    <div id=\"route_about_all\" class=\"gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n    <div class=\"position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n        <div id=\"route_about_cta\" class=\"position_relative float_left bg_yellow border_01vh_black pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark\">\n            <p class=\"font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left\">team cta</p>\n        </div>\n\n    </div>\n\n    <h1 class=\"verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_black border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">services</h1>\n\n  </div>\n";
var element_user_info = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh right_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_025 width_100 height_100 text_align_center float_right pseudo_arrow_top_right_outside_white\">\n        <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n           \n                <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_flex_flow\">\n                    <b>Login user</b><br>\n                    <input type=\"text\" id=\"username\" placeholder=\"username\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <input type=\"text\" id=\"password\" placeholder=\"password\" class=\"position_relative width_100 float_left\" /><br>\n\n                    <div id=\"wp_component_feature\" class=\"position_relative width_100 bg_white float_left display_flex_flow\">\n                      <button id=\"element_user_sign_in\" class=\"font_size_105vh line_height_2vh padding_1vh bg_yellow margin_1vh\">create post</button>\n                    </div>\n\n                </div>\n\n           </div>\n        </div>\n     </div>\n\n    <div id=\"route_about_all\" class=\"gui_enter_buttons position_absolute top_-5vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n    <div class=\"position_absolute bottom_-3vh left_0 right_0 float_left width_100 webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n        <div id=\"route_about_cta\" class=\"position_relative float_left bg_yellow border_01vh_black pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow border_radius_1vh box_shadow_bottom_left_1vh_dark\">\n            <p class=\"font_size_205vh line_height_4vh padding_1vh_left padding_1vh_right position_relative float_left\">team cta</p>\n        </div>\n\n    </div>\n\n    <h1 class=\"verticle_text position_absolute top_0 right_-5vh font_size_2vh padding_1vh margin_1vh border_01vh_black border_radius_1vh bg_yellow pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">services</h1>\n\n  </div>\n";
var element_after_icon_back = "\n  <div id=\"wp_component_meta\" class=\"position_absolute left_100 top_0 float_left hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_025 calc_4vh margin_2vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_025 width_100 height_100 text_align_center float_left\">\n          <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"width_100 position_relative float_left padding_1vh bg_white border_01vh_black pseudo_arrow_left_outside_white webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                <div class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_location\" class=\"gui_create width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                    ".concat(element_after_menu_about, "\n                  </div>\n                </div>\n\n                <div class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div  id=\"icon_qr\" class=\"gui_create width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                    ").concat(element_after_menu_about, "\n                  </div>\n                </div>\n\n                <div class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_audio\" class=\"gui_create width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                    ").concat(element_after_menu_about, "\n                  </div>\n                </div>\n\n                <div class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_info\" class=\"gui_create width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                    ").concat(element_after_menu_about, "\n                  </div>\n                </div>\n\n                <div  class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_create\" class=\"gui_create width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                    ").concat(element_after_menu_about, "\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n");
var element_after_menu_dashboard = "\n  <div id=\"wp_component_meta\" class=\"position_absolute right_100 top_0 float_left hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_025 calc_2vh margin_1vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_025 width_100 height_100 text_align_center float_right\">\n          <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"width_100 position_relative float_left padding_1vh bg_white border_right_01vh_black pseudo_arrow_right_outside_white webkit_box_pack_center webkit_box_align display_webkit_box\">\n                \n                <div id=\"icon_sign_out\" class=\"display_none width_6025vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div class=\"gui_button_signout width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                    ".concat(element_after_menu_about, "\n                  </div>\n                </div>\n\n                <div id=\"icon_sign_in\" class=\"width_6025vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div class=\"gui_button_signin width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                    ").concat(element_after_sign_in, "\n                  </div>\n                </div>\n\n                <div id=\"icon_sign_up\" class=\"width_6025vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div class=\"gui_button_signup width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                    ").concat(element_after_sign_up, "\n                  </div>\n                </div>\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_twitter\" class=\"gui_twitter width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_twitch\" class=\"gui_twitch width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_facebook\" class=\"gui_facebook width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_youtube\" class=\"gui_youtube width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_instagram\" class=\"gui_instagram width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n");
var element_after_extra = "\n  <div id=\"wp_component_meta\" class=\"position_absolute right_100 top_0 bottom_0 margin_auto float_left hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_025 calc_2vh margin_1vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_025 width_100 height_100 text_align_center float_right\">\n          <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"width_100 position_relative float_left bg_white border_right_01vh_black pseudo_arrow_right_outside_white webkit_box_pack_center webkit_box_align display_webkit_box\">\n                \n                <div id=\"meta_route\" class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div class=\"gui_audio width_100 height_50 float_left position_relative float_left margin_auto\">\n                    ".concat(element_after_meta, "\n                    </div>\n                    \n                  </div>\n                </div>\n                \n                <div id=\"meta_route\" class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div class=\"gui_audio_on width_100 height_50 float_left position_relative float_left margin_auto\">\n                    ").concat(element_after_meta, "\n                    </div>\n                    \n                  </div>\n                </div>\n\n                <div id=\"meta_route\" class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div class=\"gui_audio_off width_100 height_50 float_left position_relative float_left margin_auto\">\n                    ").concat(element_after_meta, "\n                    </div>\n                    \n                  </div>\n                </div>\n\n                <div id=\"meta_route\" class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div class=\"gui_i width_100 height_50 float_left position_relative float_left margin_auto\">\n                    ").concat(element_after_meta, "\n                    </div>\n                    \n                  </div>\n                </div>\n\n                <div id=\"meta_route\" class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div class=\"gui_i_circle width_100 height_50 float_left position_relative float_left margin_auto\">\n                    ").concat(element_after_meta, "\n                    </div>\n                    \n                  </div>\n                </div>\n\n                <div id=\"meta_route\" class=\"width_6025vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div class=\"gui_button_hire width_100 height_50 float_left position_relative float_left margin_auto\">\n                    ").concat(element_after_meta, "\n                    </div>\n                    \n                  </div>\n                </div>\n\n                <div id=\"meta_route\" class=\"width_6025vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div class=\"gui_button_help width_100 height_50 float_left position_relative float_left margin_auto\">\n                    ").concat(element_after_meta, "\n                    </div>\n                    \n                  </div>\n                </div>\n\n                <div id=\"meta_route\" class=\"width_6025vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div class=\"gui_about_type width_100 height_50 float_left position_relative float_left margin_auto\">\n                    ").concat(element_after_meta, "\n                    </div>\n                    \n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n");
var element_after_back_up = "\n  <div id=\"wp_component_meta\" class=\"position_absolute right_100 top_0 float_left hover_show\">\n     <div class=\"position_relative top_0vh left_0vh easing_025 calc_4vh margin_2vh\">\n        <div class=\"position_relative top_0vh left_0vh easing_025 width_100 height_100 text_align_center float_right\">\n          <div class=\" width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark \">\n              <div class=\"width_100 position_relative float_left padding_1vh bg_white border_01vh_black pseudo_arrow_right_outside_white webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_twitter\" class=\"gui_twitter width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_twitch\" class=\"gui_twitch width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_facebook\" class=\"gui_facebook width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_youtube\" class=\"gui_youtube width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n                <div class=\"width_30125vw height_6025vh float_left position_relative float_left margin_auto z_index_7\">\n                  <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                    <div id=\"icon_instagram\" class=\"gui_instagram width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n                  </div>\n                </div>\n\n              </div>\n          </div>\n       </div>\n     </div>\n  </div>\n";
var anchor_menu_left = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_100 top_0 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <div class=\"position_relative top_0vh left_0vh easing_025 width_100 height_100 text_align_center float_right pseudo_arrow_left_top_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    home\n                  </div>\n              </div>\n\n           </div>\n        </div>\n    </div>\n\n  </div>\n";
var anchor_menu_top = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <div class=\"position_relative top_0vh left_0vh easing_025 width_100 height_100 text_align_center float_right pseudo_arrow_bottom_left_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    home\n                  </div>\n              </div>\n\n           </div>\n        </div>\n    </div>\n\n  </div>\n";
var anchor_menu_bottom = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh left_0 top_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <div class=\"position_relative top_0vh left_0vh easing_025 width_100 height_100 text_align_center float_right pseudo_arrow_top_left_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    home\n                  </div>\n              </div>\n\n           </div>\n        </div>\n    </div>\n\n  </div>\n";
var anchor_menu_right = "\n  <div id=\"wp_component_meta\" class=\"position_absolute width_25vh right_100 top_0 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <div class=\"position_relative top_0vh left_0vh easing_025 width_100 height_100 text_align_center float_right pseudo_arrow_top_left_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_black border_radius_1vh\">\n\n              <div class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <div id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    home\n                  </div>\n              </div>\n\n           </div>\n        </div>\n    </div>\n\n  </div>\n";
var element_after_button_menu_left = "\n  <span id=\"wp_component_meta\" class=\"position_absolute width_25vh right_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <span class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_bottom_right_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh\">\n\n              <span class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <span class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                     Our Product\n                  </span>\n              </span>\n\n           </div>\n        </div>\n     </span>\n\n     <div class=\"gui_enter_buttons position_absolute bottom_-6025vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n  </span>\n";
var element_after_button_menu_center = "\n  <span id=\"wp_component_meta\" class=\"position_absolute width_25vh left_100 top_0 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show z_index_1\">\n    \n    <span class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_left_top_outside_white\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh\">\n\n              <span class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <span id=\"route_workshop_1\" class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                    home\n                  </span>\n              </span>\n\n           </div>\n        </div>\n    </span>\n\n  </span>\n";
var element_after_button_menu_right = "\n  <span id=\"wp_component_meta\" class=\"position_absolute width_25vh right_-100 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 hover_show\">\n     <span class=\"position_relative top_0vh left_0vh easing_01 width_100 height_100 text_align_center float_right pseudo_arrow_bottom_left_outside_yellow\">\n        <div class=\"overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n           <div class=\"width_100 position_relative float_left padding_1vh bg_white  border_01vh_dark_yellow_9 border_radius_1vh\">\n\n              <span class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width height_5vh float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                  <span class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                  <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                     Our Product\n                  </span>\n              </span>\n\n\n           </div>\n        </div>\n     </span>\n\n     <div class=\"gui_enter_buttons position_absolute bottom_-6025vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n  </span>\n";

var fold_1 = function fold_1() {
  var content = "\n      <div id=\"fold_1\" class=\"display_none opacity_0 transform_translate3d_top0 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n      \n      </div>\n      ";
  return content;
};

var component_app_content_root = function component_app_content_root() {
  var component = "\n\n      <div id=\"section_1\" class=\"position_relative width_100 height_100vh margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n        <div id=\"cardboard_fold\" class=\"easing_025 width_100 height_100 bottom_0 right_0 position_absolute margin_auto\">\n          \n          <div id=\"top_left\" class=\"easing_01 width_100 height_100 bottom_100 right_100 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"top_right\" class=\"easing_01 width_100 height_100 bottom_100 left_100 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"top\" class=\"easing_01 width_100 height_100 bottom_100 left_0 right_0 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"left\" class=\"easing_01 width_100 height_100 bottom_0 right_100 position_absolute margin_auto\">\n\n          </div>\n\n          <div id=\"left_outside\" class=\"easing_01 width_100 height_100 bottom_0 right_200 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"center\" class=\"easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n            ".concat(fold_1(), "\n\n          </div>\n\n          <div id=\"right\" class=\"easing_01 width_100 height_100 bottom_0 left_100 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"bottom\" class=\"easing_01 width_100 height_100 top_100 left_0 right_0 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"bottom_left\" class=\"easing_01 width_100 height_100 top_100 right_100 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"bottom_right\" class=\"easing_01 width_100 height_100 top_100 left_100 position_absolute margin_auto\">\n\n          </div>\n        \n        </div>\n\n      </div>\n\n      <div id=\"transition_1\" class=\"position_relative width_100 height_100vh top_1vh gui_paint_top float_left display_flex_flow\">\n            \n      </div>\n\n      <div id=\"section_2\" class=\"position_relative width_100 height_100vh bg_yellow margin_auto float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n        <div class=\"position_relative max_width width_100 height_100vh margin_auto float_left\">\n          \n          \n          <script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n          <!-- Responsive Pink -->\n          <ins class=\"adsbygoogle\"\n               style=\"display:block\"\n               data-ad-client=\"ca-pub-3909705375565088\"\n               data-ad-slot=\"6572891219\"\n               data-ad-format=\"auto\"\n               data-full-width-responsive=\"true\"></ins>\n          <script>\n          (adsbygoogle = window.adsbygoogle || []).push({});\n          </script>\n\n        </div>\n      </div>\n\n      <div id=\"section_3\" class=\"position_relative width_100 height_100vh bg_yellow margin_auto float_left display_flex_flow\">\n              \n          <div class=\"gui_logo position_absolute bottom_0 top_0 left_0 right_0 width_50 height_50 margin_auto float_left\">\n          </div>\n\n          <div id=\"wp_component\" class=\"position_absolute top_0 left_-75 width_100 height_100 gui_paint_right float_left display_flex_flow\">\n          </div>\n\n          <div id=\"wp_component\" class=\"position_absolute top_0 right_-75 width_100 height_100 gui_paint_left float_left display_flex_flow\">\n          </div>\n\n\n            <div class=\"easing_025 position_absolute width_100 height_100 bottom_0 left_0 right_0 margin_auto float_left\">\n              \n              <div class=\"easing_025 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_025 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_025 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_025 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_025 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_025 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_025 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_025 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_025 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_025 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_025 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_025 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_025 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_025 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_025 face_nigel position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n              <div class=\"easing_025 face_maisie position_relative width_25 height_25vh bottom_0 left_0 right_0 margin_auto float_left\">\n              </div>\n\n            </div>\n\n      </div>\n\n      <div id=\"section_4\" class=\"position_relative width_100 height_auto bg_yellow margin_auto float_left display_flex_flow\">\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Action #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">Match Loggin & Local</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">Scrolled</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">Scrolled Bottom Blog</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">Timed Nav vanish</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">loaded</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n          <div class=\"position_relative width_33vh height_33vh margin_1vh_top margin_1vh_bottom box_shadow_bottom_left_1vh_dark float_left display_flex_flow\">\n\n            <div class=\"position_relative calc_4vh padding_1vh border_1vh_yellow float_left display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n                <div class=\"position_relative float_left\">\n\n                  <div class=\"position_relative float_left width_100\"><b>Event #1</b></div><br>\n                  <div class=\"position_relative float_left width_100\">loaded + cursor_moved</div><br>\n                  \n                </div>\n                \n            </div>\n\n          </div>\n\n      </div>\n\n      <div id=\"section_5\" class=\"position_relative width_100 height_100vh bg_yellow margin_auto float_left\">\n      \n      </div>\n\n      <div id=\"section_6\" class=\"position_relative width_100 height_100vh bg_yellow margin_auto float_left\">\n      \n      </div>\n\n      <div id=\"section_7\" class=\"position_relative width_100 height_100vh bg_yellow margin_auto float_left\">\n      \n      </div>\n\n      <div id=\"transition_2\" class=\"position_relative width_100 height_100vh gui_paint_bottom top_-1vh margin_auto float_left\">\n      \n      </div>\n\n      <div id=\"section_8\" class=\"position_relative width_100 height_100vh margin_auto float_left\">\n      \n      </div>\n\n  ");
  return component;
};

var element_guis = function element_guis() {
  var element = "\n\n      <div id=\"component_app_gui_toast_top_left\" class=\"display_none opacity_0 easing_025 transform_translate3d_left0 float_left position_fixed top_1205vh left_6025vw margin_auto z_index_8\">\n\n        <div id=\"create_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            \n            <div class=\"gui_create position_relative width_50 height_50 float_left\">\n              ".concat(element_after_create, "\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id=\"component_app_gui_toast_top_right\" class=\"display_none opacity_0 easing_025 transform_translate3d_left0 float_left position_fixed top_1205vh right_6025vw margin_auto z_index_8\">\n\n        <div id=\"create_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            \n            <div class=\"gui_create position_relative width_50 height_50 float_left\">\n              ").concat(element_after_create, "\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id=\"component_app_gui_toast_bottom_left\" class=\"display_none opacity_0 easing_025 transform_translate3d_left0 float_left position_fixed bottom_1205vh left_6025vw margin_auto z_index_8\">\n\n        <div id=\"create_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            \n            <div class=\"gui_create position_relative width_50 height_50 float_left\">\n              ").concat(element_after_create, "\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id=\"component_app_gui_toast_bottom_right\" class=\"display_none opacity_0 easing_025 transform_translate3d_left0 float_left position_fixed bottom_1205vh right_6025vw margin_auto z_index_8\">\n\n        <div id=\"create_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            \n            <div class=\"gui_create position_relative width_50 height_50 float_left\">\n              ").concat(element_after_create, "\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id=\"component_app_gui_top_left\" class=\"display_none opacity_0 easing_025 transform_translate3d_left0 float_left position_fixed top_0 left_0 margin_auto z_index_8\">\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_30125vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div id=\"icon_menu\" class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto width_6025vw height_1205vh float_left transform_translate3d_left0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left\">\n              \n              <div id=\"icon_logo\" class=\"gui_logo position_relative width_100 height_100 margin_auto top_-05vh float_left\">\n                ").concat(element_after_logo_menu_right, "\n                ").concat(element_after_logo_menu_bottom, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"search_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div id=\"icon_search\" class=\"gui_search position_relative width_50 height_50 float_left\">\n                ").concat(element_after_search, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_30125vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div id=\"icon_back\" class=\"gui_arrow_left position_relative width_75 height_50 float_left\">\n                ").concat(element_after_icon_back, "\n              </div>\n\n            </div>\n\n          </div>\n\n      </div>\n\n      <div id=\"component_app_gui_top_center\" class=\"display_none opacity_0 easing_025 transform_translate3d_top0 float_left position_fixed calc_50vh_width top_0 left_0 right_0 margin_auto z_index_8\">\n\n        <div class=\"width_100 height_1205vh float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id=\"component_app_gui_top_right\" class=\"display_none opacity_0 easing_025 transform_translate3d_left0 height_1205vh float_left position_fixed top_0 right_0 margin_auto display_flex_flow z_index_8\">\n        \n        <div id=\"user_related\">\n\n\n          <div id=\"icon_dashboard\" class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              <div id=\"user_thumb\" class=\"gui_avatar width_50 height_50 float_left position_relative float_left margin_auto\"></div>\n              ").concat(element_after_menu_dashboard, "\n              ").concat(element_user_info, "\n            </div>\n          </div>\n\n          <div id=\"gui_route\" class=\"position_relative width_6025vw height_1205vh float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              <div id=\"icon_dots\" class=\"gui_dots position_relative width_50 height_50 float_left\">\n              \n              </div>\n              ").concat(element_after_dots, "\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id=\"component_app_gui_right\" class=\"display_none opacity_0 easing_025 transform_translate3d_left0 width_10vh calc_25vh_height float_left position_fixed bottom_0 top_0 right_0 margin_auto z_index_8 display_webkit_box webkit_box_pack_center webkit_box_align\">\n          \n          <div class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n            <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n              <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                    ").concat(element_after_menu, "\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n              <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                    ").concat(element_after_menu, "\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n              <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                    ").concat(element_after_menu, "\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n              <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                    ").concat(element_after_menu, "\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n              <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                    ").concat(element_after_menu, "\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n              <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                    ").concat(element_after_menu, "\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n\n          </div>\n\n      </div>\n\n      <div id=\"component_app_gui_left\" class=\"display_none opacity_0 easing_025 transform_translate3d_left0 width_10vh calc_25vh_height float_left position_fixed bottom_0 top_0 left_0 margin_auto z_index_8 display_webkit_box webkit_box_pack_center webkit_box_align\">\n\n        <div class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"row\" class=\"transform_translate3d_top0 float_left position_relative width_100 margin_auto\">\n\n            <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_100 height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n              <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                \n                <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                  ").concat(element_after_menu, "\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id=\"component_app_gui_bottom_left\" class=\"display_none opacity_0 easing_025 transform_translate3d_left0 height_1205vh float_left position_fixed bottom_0 left_0 margin_auto z_index_8\">\n        \n        <div id=\"social_route\" class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_about_type width_100 height_50 float_left position_relative float_left margin_auto\"></div>\n              ").concat(element_after_social_type, "\n              ").concat(element_after_social_menu_right, "\n          </div>\n        </div>\n\n        <div id=\"social_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div class=\"gui_vert_colon width_50 height_50 float_left position_relative float_left margin_auto\">").concat(element_after_social, "</div>\n          </div>\n        </div>\n\n        <div id=\"social_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div id=\"icon_twitter\" class=\"gui_twitter width_50 height_50 float_left position_relative float_left margin_auto\">").concat(element_after_social, "</div>\n          </div>\n        </div>\n\n        <div id=\"social_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div id=\"icon_twitch\" class=\"gui_twitch width_50 height_50 float_left position_relative float_left margin_auto\">").concat(element_after_social, "</div>\n          </div>\n        </div>\n\n        <div id=\"social_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div id=\"icon_facebook\" class=\"gui_facebook width_50 height_50 float_left position_relative float_left margin_auto\">").concat(element_after_social, "</div>\n          </div>\n        </div>\n\n        <div id=\"social_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div id=\"icon_youtube\" class=\"gui_youtube width_50 height_50 float_left position_relative float_left margin_auto\">").concat(element_after_social, "</div>\n          </div>\n        </div>\n\n        <div id=\"social_route\" class=\"width_30125vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div id=\"icon_instagram\" class=\"gui_instagram width_50 height_50 float_left position_relative float_left margin_auto\">").concat(element_after_social, "</div>\n          </div>\n        </div>\n\n      </div>\n\n      <div id=\"component_app_gui_bottom_center\" class=\"display_none opacity_0 easing_025 transform_translate3d_top0 height_1205vh float_left position_fixed calc_50vh_width bottom_0 left_0 right_0 margin_auto z_index_8\">\n        \n        <div class=\"width_100 height_1205vh float_left position_relative float_left margin_auto display_webkit_box webkit_box_pack_center webkit_box_align\">\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n\n          <div id=\"gui_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n            <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n              \n              <div class=\"gui_navs_bars position_relative width_50 height_50 float_left\">\n                ").concat(element_after_menu, "\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id=\"component_app_gui_bottom_right\" class=\"display_none opacity_0 easing_025 transform_translate3d_left0 height_1205vh float_left position_fixed bottom_0 right_0 margin_auto display_flex_flow z_index_8\">\n\n        <div id=\"meta_route\" class=\" position_relative margin_auto float_left width_6025vw height_1205vh transform_translate3d_top0 display_webkit_box webkit_box_pack_center webkit_box_align easing_025\">\n\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            \n            <div id=\"icon_up\" class=\"gui_arrow_top position_relative width_75 height_50 float_left\">\n              \n            </div>\n            ").concat(element_after_back_up, "\n\n          </div>\n\n        </div>\n\n        <div id=\"gui_route\" class=\"width_6025vw height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n          <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n            <div id=\"icon_vert_dots\" class=\"gui_vert_dots width_50 height_50 float_left position_relative float_left margin_auto\">\n              \n            </div>\n            ").concat(element_after_vert_dots, "\n              ").concat(element_after_extra, "\n\n          </div>\n        </div>\n\n      </div>\n\n    ");
  return element;
};

var value_ui_controls = "\n\n\n        <div class=\"position_relative width_100 float_left\">\n        <div class=\"position_relative calc_5vh margin_205vh float_left\">\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_10vh line_height_10vh\">events:</div>\n            <div class=\"position_relative font_size_205vh line_height_205vh border_bottom_01vh_light_yellow_0 width_100 display_flex_flow float_left margin_auto\">\n            Usual Events\n            </div>\n\n            <div class=\"position_relative font_size_2vh line_height_205vh border_bottom_01vh_light_yellow_0 width_100 display_flex_flow float_left margin_auto\">\n            time: <div id=\"time\"></div>\n            </div>\n\n\n            <div class=\"position_relative font_size_205vh line_height_205vh border_bottom_01vh_light_yellow_0 width_100 display_flex_flow float_left margin_auto\">\n              64\n            </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n    <div id=\"component_app_status_state_events_mouse_game_bit_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n    <div id=\"component_app_status_state_events_mouse_game_bit_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">mouse:</div>\n\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_client_X: <div id=\"mouse_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_client_Y: <div id=\"mouse_client_Y\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_client_X: <div id=\"mouse_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_client_Y: <div id=\"mouse_client_Y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_up_client_X: <div id=\"mouse_up_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_up_client_Y: <div id=\"mouse_up_client_Y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_down_client_X: <div id=\"mouse_down_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_down_client_Y: <div id=\"mouse_down_client_Y\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            mouse_up: <div id=\"mouse_up\"></div>\n            </p>\n\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            click_position: <div id=\"click_position\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            wheel_direction: <div id=\"wheel_direction\"></div>\n            </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n  <div id=\"component_app_status_state_events_mouse_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n  <div id=\"component_app_status_state_events_mouse_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">mouse down track:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  mousedragDistanceXstart: <div id=\"mousedragDistanceXstart\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  mousedragDistanceYstart: <div id=\"mousedragDistanceYstart\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">mouse up track:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  mousedragDistanceXend: <div id=\"mousedragDistanceXend\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  mousedragDistanceYend: <div id=\"mousedragDistanceYend\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">drag:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  dragX: <div id=\"dragX\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  dragY: <div id=\"dragY\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">pen:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  penX: <div id=\"penX\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  penY: <div id=\"penY\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">pencil:</div>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  pencilX: <div id=\"pencilX\"></div>\n  </p>\n\n  <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n  pencilY: <div id=\"pencilY\"></div>\n  </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">drop:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n  <div id=\"component_app_status_state_events_mouse_drop_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n  <div id=\"component_app_status_state_events_mouse_drop_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">drop_start:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n  <div id=\"component_app_status_state_events_mouse_drop_start_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n  <div id=\"component_app_status_state_events_mouse_drop_start_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">drop_end:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientX: \n  <div id=\"component_app_status_state_events_mouse_drop_end_clientX\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">ClientY: \n  <div id=\"component_app_status_state_events_mouse_drop_end_clientY\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">ux:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">dimensions:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">width: \n  <div id=\"component_app_status_state_ux_dimensions_width\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">height: \n  <div id=\"component_app_status_state_ux_dimensions_height\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">browser:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">width: \n  <div id=\"component_app_status_state_ux_browser_width\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">height: \n  <div id=\"component_app_status_state_ux_browser_height\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_10vh line_height_10vh\">Timer:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            timer_mouse_leave: <div id=\"timer_mouse_leave\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            timer_key_up: <div id=\"timer_key_up\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            timer_mouse_up: <div id=\"timer_mouse_up\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            keys: <div id=\"key_keys\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            last key down: <div id=\"key_key_down\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            last key up: <div id=\"key_key_up\"></div>\n            </p>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">iPhone/iPad:</div>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">Oriontation.Absolute: \n  <div id=\"component_app_status_state_events_mouse_absolute\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Oriontation.Alpha: \n  <div id=\"component_app_status_state_events_mouse_alpha\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Oriontation.Beta: \n  <div id=\"component_app_status_state_events_mouse_beta\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Oriontation.Gamma: \n  <div id=\"component_app_status_state_events_mouse_gamma\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">acceleration.x: \n  <div id=\"component_app_status_state_events_mouse_acceleration_x\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">acceleration.y: \n  <div id=\"component_app_status_state_events_mouse_acceleration_y\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">acceleration.z: \n  <div id=\"component_app_status_state_events_mouse_acceleration_z\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">accelerationIncludingGravity.x: \n  <div id=\"component_app_status_state_events_mouse_accelerationIncludingGravity_x\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">accelerationIncludingGravity.y: \n  <div id=\"component_app_status_state_events_mouse_accelerationIncludingGravity_y\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">accelerationIncludingGravity.z: \n  <div id=\"component_app_status_state_events_mouse_accelerationIncludingGravity_z\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">rotationRate.Alpha: \n  <div id=\"component_app_status_state_events_mouse_rotationRate_alpha\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">rotationRate.Beta: \n  <div id=\"component_app_status_state_events_mouse_rotationRate_beta\" class=\" position_relative display opacity_1\"></div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">rotationRate.Gamma: \n  <div id=\"component_app_status_state_events_mouse_rotationRate_gamma\" class=\" position_relative display opacity_1\"></div>\n  </div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            rotationAngle: <div id=\"rotationAngle\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            radiusX: <div id=\"radiusX\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            radiusY: <div id=\"radiusY\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceX: <div id=\"dragDistanceX\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceY: <div id=\"dragDistanceY\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceXStart: <div id=\"dragDistanceXStart\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceYStart: <div id=\"dragDistanceYStart\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceXEnd: <div id=\"dragDistanceXEnd\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            dragDistanceYEnd: <div id=\"dragDistanceYEnd\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_client_X: <div id=\"touch_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_client_Y: <div id=\"touch_client_Y\"></div>\n            </p>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_page_X: <div id=\"touch_page_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_page_Y: <div id=\"touch_page_Y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touches: <div id=\"touches\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_start_client_X: <div id=\"touch_start_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_start_client_Y: <div id=\"touch_start_client_Y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_start_force: <div id=\"touch_start_force\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_end_client_X: <div id=\"touch_end_client_X\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_end_client_Y: <div id=\"touch_end_client_Y\"></div>\n            </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">iPhone Only:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            touch_end_force: <div id=\"touch_end_force\"></div>\n            </p>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">iPhone/iPad VR:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            last_action: <div id=\"last_action\"></div>\n            </p>\n\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">iPhone/iPad Oriontation:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_alpha: <div id=\"event_alpha\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_beta: <div id=\"event_beta\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_gamma: <div id=\"event_gamma\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_accelerationIncludingGravity_x: <div id=\"event_accelerationIncludingGravity_x\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_accelerationIncludingGravity_y: <div id=\"event_accelerationIncludingGravity_y\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            event_accelerationIncludingGravity_z: <div id=\"event_accelerationIncludingGravity_z\"></div>\n            </p>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">Component API:</div>\n\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_clientHeight (Container Height): <div id=\"scroll_clientHeight\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_clientWidth: <div id=\"scroll_clientWidth\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_scrollHeight (Max Scroll Height): <div id=\"scroll_scrollHeight\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_scrollWidth: <div id=\"scroll_scrollWidth\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_scrollTop (Current Scroll): <div id=\"scroll_scrollTop\"></div>\n            </p>\n            <p class=\"position_relative width_100 display_flex_flow float_left margin_auto\">\n            scroll_scrollLeft: <div id=\"scroll_scrollLeft\"></div>\n            </p>\n\n\n        \n  <div class=\"position_relative width_100 float_left \">\n  UI state:\n  </div>\n  <div class=\"position_relative width_100 float_left\">\n  Route State (Onboarding, Form, Search, Interaction):\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Colors:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">load:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Grid:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Depth:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">90: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">270: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Colors:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">load:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Grid:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Depth:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">90: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">270: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Setting:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Accent:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Effect:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Pieces:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Particles:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Interaction:</div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Players:</div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_1: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <div class=\"width_100 float_left position_relative display opacity_1\">player_2: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div id=\"\" class=\"width_100 float_left position_relative display opacity_1\">Characters:</div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">enemies: \n  <div id=\"\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Route:</div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Materials: \n  <div id=\"route\" class=\" position_relative display opacity_1\">materials</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">Gui:</div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">logo: \n  <div id=\"component_app_status_display_gui_element_logo\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">arrows: \n  <div id=\"component_app_status_display_gui_element_arrows\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1\">buttons: \n  <div id=\"component_app_status_display_gui_element_buttons\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n  <hr>\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_10vh\">Modal:</div>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">pop</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pop_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pop_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pop_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pop_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pop_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pop_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pop_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pop_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pop_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pop_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pop_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pop_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">pip</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pip_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pip_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pip_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pip_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pip_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pip_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pip_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pip_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pip_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_pip_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_pip_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_pip_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">nav</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_nav_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_nav_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_nav_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_nav_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_nav_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_nav_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_nav_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_nav_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_nav_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_nav_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_nav_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_nav_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">page</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_page_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_page_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_page_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_page_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_page_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_page_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_page_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_page_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_page_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_page_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_page_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_page_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">menu</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_menu_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_menu_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_menu_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_menu_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_menu_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_menu_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_menu_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_menu_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_menu_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_menu_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_menu_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_menu_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">morph</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_morph_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_morph_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_morph_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_morph_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_morph_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_morph_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_morph_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_morph_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_morph_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_morph_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_morph_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_morph_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">corner</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_corner_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_corner_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_corner_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_corner_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_corner_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_corner_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_corner_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_corner_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_corner_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_corner_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_corner_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_corner_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">gradient</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_gradient_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_gradient_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_gradient_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_gradient_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_gradient_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_gradient_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_gradient_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_gradient_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_gradient_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_gradient_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_gradient_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_gradient_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">fade</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_fade_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_fade_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_fade_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_fade_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_fade_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_fade_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_fade_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_fade_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_fade_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_fade_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_fade_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_fade_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh\">overlay</div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">top: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_overlay_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_overlay_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_overlay_top\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">bottom: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_overlay_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_overlay_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_overlay_bottom\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">left: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_overlay_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_overlay_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_overlay_left\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <hr>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">right: \n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">display: \n  <div id=\"component_app_status_display_overlay_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">opacity: \n  <div id=\"component_app_status_opacity_overlay_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  <div class=\"width_100 float_left position_relative display opacity_1\">transform: \n  <div id=\"component_app_status_transform_overlay_right\" class=\" position_relative display opacity_1\">null</div>\n  </div>\n\n  </div>\n  </div>\n  ";
var element_nav_top = "\n    <div id=\"component_app_modal_element_nav_top\" class=\"easing_025 display_none opacity_0 easing_025 transform_translate3d_top0 position_fixed top_0 left_0 right_0 margin_auto height_1205vh calc_20vh_width z_index_6 \">\n      \n      <div class=\"position_relative webkit_box_pack_center webkit_box_align display_webkit_box width_100 z_index_1 float_left\">\n          \n        <div class=\"margin_auto position_relative float_left z_index_1 \">\n\n          <div id=\"routes\" class=\"margin_auto position_relative float_left z_index_1 \">\n\n              <div id=\"nav_route\" class=\"width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                  <div id=\"route_about\" class=\"gui_about_type width_100 height_100 float_left position_relative float_left margin_auto\">\n\n                    <div id=\"route_about_icon\" class=\"circle position_absolute right_100 top_0 bottom_0 width_10 height_100 margin_1025vh float_left\">\n                      ".concat(anchor_menu_right, "\n                    </div>\n\n                  </div>\n\n                  ").concat(element_after_menu_about, "\n\n                </div>\n\n              </div>\n\n              <div id=\"nav_route\" class=\"width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                <div id=\"route_team\" class=\"gui_about_type width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n\n                ").concat(element_after_menu_about, "\n\n                </div>\n              </div>\n\n              <div id=\"nav_route\" class=\"width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                <div id=\"route_library\" class=\"gui_about_type width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n\n                ").concat(element_after_menu_about, "\n\n                </div>\n              </div>\n\n              <div id=\"nav_route\" class=\"width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                <div id=\"route_abilities\" class=\"gui_about_type width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n\n                ").concat(element_after_menu_about, "\n                \n                </div>\n              </div>\n\n              <div id=\"nav_route\" class=\"width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                <div id=\"route_partners\" class=\"gui_about_type width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n\n                ").concat(element_after_menu_about, "\n                \n                </div>\n              </div>\n\n              <div id=\"nav_route\" class=\"width_1205vh height_1205vh float_left position_relative float_left margin_auto z_index_7\">\n\n                <div class=\"calc_02vh border_01vh_yellow position_relative float_left display_webkit_box webkit_box_pack_center webkit_box_align\">\n                  \n                <div id=\"route_services\" class=\"gui_about_type width_100 height_100 float_left position_relative float_left margin_auto\"></div>\n\n                ").concat(element_after_menu_about, "\n\n                </div>\n              </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n    ");
var element_nav_left = "\n    <div id=\"component_app_modal_element_nav_left\" class=\"easing_025 transform_translate3d_left0 display_none opacity_0 position_fixed top_0 left_0 bottom_0 height_100 width_10vh z_index_6 margin_auto\">\n      \n      \n    </div>\n    ";
var element_nav_bottom = "\n    <div id=\"component_app_modal_element_nav_bottom\" class=\"easing_025 transform_translate3d_top0 display_none opacity_0 position_fixed bottom_0 left_0 right_0 height_10vh width_100 z_index_6 margin_auto\">\n      \n    </div>\n    ";
var element_nav_right = "\n    <div id=\"component_app_modal_element_nav_right\" class=\"easing_025 transform_translate3d_left0 display_none opacity_0 position_fixed top_0 bottom_0 right_0 height_100 width_10vh z_index_6 margin_auto\">\n      \n    </div>\n    ";
var element_page_top = "\n    <div id=\"component_app_modal_element_page_top\" class=\"easing_025 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 height_100vh width_100 z_index_6 margin_auto\">\n      <div id=\"component_app_modal_element_page_top_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 overflow_hidden z_index_6 margin_auto\">\n        \n      </div>\n\n    </div>\n    ";
var element_page_left = "\n    <div id=\"component_app_modal_element_page_left\" class=\"easing_025 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 height_100vh width_100 z_index_6 margin_auto\">\n      <div id=\"component_app_modal_element_page_left_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 overflow_hidden z_index_6 margin_auto\">\n      \n      </div>\n    </div>\n    ";
var element_page_bottom = "\n    <div id=\"component_app_modal_element_page_bottom\" class=\"easing_025 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 height_100vh width_100 margin_auto z_index_6\">\n      <div id=\"component_app_modal_element_page_bottom_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\"> \n\n      </div>\n    </div>\n    ";
var element_page_right = "\n    <div id=\"component_app_modal_element_page_right\" class=\"easing_025 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 height_100vh width_100 margin_auto z_index_6\">\n      <div id=\"component_app_modal_element_page_right_content\" class=\"position_relative width_100 height_100 bg_white overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left z_index_0 \">\n\n        <div class=\"width_100 display_webkit_box webkit_box_pack_center webkit_box_align float_left position_relative\">\n          <div class=\"width_100 max_width float_left position_relative\">\n\n            <div id=\"page_right_nav_filler\" class=\"width_100 height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_relative\">\n            </div>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">choose title</h1>\n            <input id=\"element_input_filter\" class=\"width_100\" placeholder=\"filter by: title\" type=\"text\" name=\"\"/>\n            <br/>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">choose types</h1>\n            <input id=\"element_input_types\" class=\"width_100\" placeholder=\"adds types\" type=\"text\" name=\"\"/>\n            <div id=\"types\"></div>\n            <br/>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">choose username for post</h1>\n            <input id=\"element_input_post_username\" class=\"width_100\" placeholder=\"element_input_post_username\" type=\"text\" name=\"\"/>\n            <br/>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">choose blog post style</h1>\n            <input id=\"element_input_style\" class=\"width_100\" placeholder=\"element_input_style\" type=\"text\" name=\"\"/>\n            <br/>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">login</h1>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\" id=\"users_username\"></h1>\n            <input id=\"username\" class=\"width_100\" placeholder=\"username\" type=\"text\" name=\"\"/>\n            <br/>\n            <input id=\"password\" class=\"width_100\" placeholder=\"password\" type=\"text\" name=\"\"/>\n            <br/>\n            <div id=\"element_user_sign_in\" class=\"width_100 bg_white color_yellow float_left text_align_center\">sign in</div>\n            <div id=\"element_user_sign_out\" class=\"width_100 bg_white color_yellow float_left text_align_center\">sign out</div>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">Library inputs</h1>\n            <input id=\"create_library_input_title\" class=\"width_100\" placeholder=\"create_library_input_title\" type=\"text\" name=\"\"/>\n            <br/>\n            <input id=\"create_library_input_subtitle\" class=\"width_100\" placeholder=\"create_library_input_subtitle\" type=\"text\" value=\"a placeholder subtitle\" name=\"\"/>\n            <br/>\n            <input id=\"create_library_input_paragraph\" class=\"width_100\" placeholder=\"create_library_input_paragraph\" type=\"text\" value=\"a placeholder paragraph\" name=\"\"/>\n            <br/>\n            <input id=\"create_library_input_category\" class=\"width_100\" placeholder=\"create_library_input_category\" type=\"text\" value=\"a placeholder category\" name=\"\"/>\n            <br/>\n            <input id=\"create_library_input_sub_category\" class=\"width_100\" placeholder=\"create_library_input_sub_category\" type=\"text\" value=\"a placeholder sub category\" name=\"\"/>\n            <br/>\n            <input id=\"create_library_input_feature_style\" class=\"width_100\" placeholder=\"create_library_input_feature_style\" type=\"text\" value=\"a placeholder feature style\" name=\"\"/>\n            <br/>\n            <input id=\"create_library_input_tag\" class=\"width_100\" placeholder=\"create_library_input_tag\" type=\"text\" value=\"a placeholder tag\"name=\"\"/>\n            <br/>\n            <input id=\"create_library_input_type\" class=\"width_100\" placeholder=\"create_library_input_type\" type=\"text\" value=\"a placeholder type\"name=\"\"/>\n            <br/>\n            <input id=\"create_library_input_feature_image_src\" class=\"width_100\" placeholder=\"create_library_input_feature_image_src\" type=\"text\" value=\"https://tinyurl.com/y2j3t4v9\" name=\"\"/>\n            <br/>\n\n            <div id=\"element_input_create_library\" class=\"width_100 bg_white color_yellow float_left text_align_center\">create library post</div>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">Create Roster</h1>\n            <input id=\"new_username\" class=\"width_100\" placeholder=\"username\" type=\"text\" name=\"\"/>\n            <br/>\n            <input id=\"new_password\" class=\"width_100\" placeholder=\"password\" type=\"text\" name=\"\"/>\n            <br/>\n            <div id=\"element_input_create_roster\" class=\"width_100 bg_white color_yellow float_left text_align_center\">create roster user</div>\n\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">services inputs</h1>\n            <input id=\"create_services_input_title\" class=\"width_100\" placeholder=\"create_services_input_title\" type=\"text\" name=\"\"/>\n            <br/>\n            <input id=\"create_services_input_subtitle\" class=\"width_100\" placeholder=\"create_services_input_subtitle\" type=\"text\" value=\"a placeholder subtitle\" name=\"\"/>\n            <br/>\n            <input id=\"create_services_input_paragraph\" class=\"width_100\" placeholder=\"create_services_input_paragraph\" type=\"text\" value=\"a placeholder paragraph\" name=\"\"/>\n            <br/>\n            <input id=\"create_services_input_category\" class=\"width_100\" placeholder=\"create_services_input_category\" type=\"text\" value=\"a placeholder category\" name=\"\"/>\n            <br/>\n            <input id=\"create_services_input_sub_category\" class=\"width_100\" placeholder=\"create_services_input_sub_category\" type=\"text\" value=\"a placeholder sub category\" name=\"\"/>\n            <br/>\n            <input id=\"create_services_input_feature_style\" class=\"width_100\" placeholder=\"create_services_input_feature_style\" type=\"text\" value=\"a placeholder feature style\" name=\"\"/>\n            <br/>\n            <input id=\"create_services_input_tag\" class=\"width_100\" placeholder=\"create_services_input_tag\" type=\"text\" value=\"a placeholder tag\"name=\"\"/>\n            <br/>\n            <input id=\"create_services_input_type\" class=\"width_100\" placeholder=\"create_services_input_type\" type=\"text\" value=\"a placeholder type\"name=\"\"/>\n            <br/>\n            <input id=\"create_services_input_feature_image_src\" class=\"width_100\" placeholder=\"create_services_input_feature_image_src\" type=\"text\" value=\"https://tinyurl.com/y2j3t4v9\" name=\"\"/>\n            <br/>\n            <div id=\"element_input_create_services\" class=\"width_100 bg_white color_yellow float_left text_align_center\">create service post</div>\n\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">abilities inputs</h1>\n            <input id=\"create_abilities_input_title\" class=\"width_100\" placeholder=\"create_abilities_input_title\" type=\"text\" name=\"\"/>\n            <br/>\n            <input id=\"create_abilities_input_subtitle\" class=\"width_100\" placeholder=\"create_abilities_input_subtitle\" type=\"text\" value=\"a placeholder subtitle\" name=\"\"/>\n            <br/>\n            <input id=\"create_abilities_input_paragraph\" class=\"width_100\" placeholder=\"create_abilities_input_paragraph\" type=\"text\" value=\"a placeholder paragraph\" name=\"\"/>\n            <br/>\n            <input id=\"create_abilities_input_category\" class=\"width_100\" placeholder=\"create_abilities_input_category\" type=\"text\" value=\"a placeholder category\" name=\"\"/>\n            <br/>\n            <input id=\"create_abilities_input_sub_category\" class=\"width_100\" placeholder=\"create_abilities_input_sub_category\" type=\"text\" value=\"a placeholder sub category\" name=\"\"/>\n            <br/>\n            <input id=\"create_abilities_input_feature_style\" class=\"width_100\" placeholder=\"create_abilities_input_feature_style\" type=\"text\" value=\"a placeholder feature style\" name=\"\"/>\n            <br/>\n            <input id=\"create_abilities_input_tag\" class=\"width_100\" placeholder=\"create_abilities_input_tag\" type=\"text\" value=\"a placeholder tag\"name=\"\"/>\n            <br/>\n            <input id=\"create_abilities_input_type\" class=\"width_100\" placeholder=\"create_abilities_input_type\" type=\"text\" value=\"a placeholder type\"name=\"\"/>\n            <br/>\n            <input id=\"create_abilities_input_feature_image_src\" class=\"width_100\" placeholder=\"create_abilities_input_feature_image_src\" type=\"text\" value=\"https://tinyurl.com/y2j3t4v9\" name=\"\"/>\n            <br/>\n            <div id=\"element_input_create_abilities\" class=\"width_100 bg_white color_yellow float_left text_align_center\">create abilities post</div>\n\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">skills inputs</h1>\n            <input id=\"create_skills_input_title\" class=\"width_100\" placeholder=\"create_skills_input_title\" type=\"text\" name=\"\"/>\n            <br/>\n            <input id=\"create_skills_input_subtitle\" class=\"width_100\" placeholder=\"create_skills_input_subtitle\" type=\"text\" value=\"a placeholder subtitle\" name=\"\"/>\n            <br/>\n            <input id=\"create_skills_input_paragraph\" class=\"width_100\" placeholder=\"create_skills_input_paragraph\" type=\"text\" value=\"a placeholder paragraph\" name=\"\"/>\n            <br/>\n            <input id=\"create_skills_input_category\" class=\"width_100\" placeholder=\"create_skills_input_category\" type=\"text\" value=\"a placeholder category\" name=\"\"/>\n            <br/>\n            <input id=\"create_skills_input_sub_category\" class=\"width_100\" placeholder=\"create_skills_input_sub_category\" type=\"text\" value=\"a placeholder sub category\" name=\"\"/>\n            <br/>\n            <input id=\"create_skills_input_feature_style\" class=\"width_100\" placeholder=\"create_skills_input_feature_style\" type=\"text\" value=\"a placeholder feature style\" name=\"\"/>\n            <br/>\n            <input id=\"create_skills_input_tag\" class=\"width_100\" placeholder=\"create_skills_input_tag\" type=\"text\" value=\"a placeholder tag\"name=\"\"/>\n            <br/>\n            <input id=\"create_skills_input_type\" class=\"width_100\" placeholder=\"create_skills_input_type\" type=\"text\" value=\"a placeholder type\"name=\"\"/>\n            <br/>\n            <input id=\"create_skills_input_feature_image_src\" class=\"width_100\" placeholder=\"create_skills_input_feature_image_src\" type=\"text\" value=\"https://tinyurl.com/y2j3t4v9\" name=\"\"/>\n            <br/>\n            <div id=\"element_input_create_skills\" class=\"width_100 bg_white color_yellow float_left text_align_center\">create skills post</div>\n\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">partners inputs</h1>\n            <input id=\"create_partners_input_title\" class=\"width_100\" placeholder=\"create_partners_input_title\" type=\"text\" name=\"\"/>\n            <br/>\n            <input id=\"create_partners_input_subtitle\" class=\"width_100\" placeholder=\"create_partners_input_subtitle\" type=\"text\" value=\"a placeholder subtitle\" name=\"\"/>\n            <br/>\n            <input id=\"create_partners_input_paragraph\" class=\"width_100\" placeholder=\"create_partners_input_paragraph\" type=\"text\" value=\"a placeholder paragraph\" name=\"\"/>\n            <br/>\n            <input id=\"create_partners_input_category\" class=\"width_100\" placeholder=\"create_partners_input_category\" type=\"text\" value=\"a placeholder category\" name=\"\"/>\n            <br/>\n            <input id=\"create_partners_input_sub_category\" class=\"width_100\" placeholder=\"create_partners_input_sub_category\" type=\"text\" value=\"a placeholder sub category\" name=\"\"/>\n            <br/>\n            <input id=\"create_partners_input_feature_style\" class=\"width_100\" placeholder=\"create_partners_input_feature_style\" type=\"text\" value=\"a placeholder feature style\" name=\"\"/>\n            <br/>\n            <input id=\"create_partners_input_tag\" class=\"width_100\" placeholder=\"create_partners_input_tag\" type=\"text\" value=\"a placeholder tag\"name=\"\"/>\n            <br/>\n            <input id=\"create_partners_input_type\" class=\"width_100\" placeholder=\"create_partners_input_type\" type=\"text\" value=\"a placeholder type\"name=\"\"/>\n            <br/>\n            <input id=\"create_partners_input_feature_image_src\" class=\"width_100\" placeholder=\"create_partners_input_feature_image_src\" type=\"text\" value=\"https://tinyurl.com/y2j3t4v9\" name=\"\"/>\n            <br/>\n            <div id=\"element_input_create_partners\" class=\"width_100 bg_white color_yellow float_left text_align_center\">create partners post</div>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">Sorting type</h1>\n            <input id=\"element_input_sorting_type\" placeholder=\"choose sorting type\"/>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">user library</h1>\n            <ol id=\"element_ol_firebase_user_library\"></ol>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">user subs library</h1>\n            <ol id=\"element_ol_firebase_user_subs_library\"></ol>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">user liked library</h1>\n            <ol id=\"element_ol_firebase_user_liked_library\"></ol>\n\n            <div id=\"less_posts\" class=\"position_fixed bottom_0 left_0 padding_5vh bg_white color_black\"><div id=\"less_posts_value\"></div>less posts</div>\n            <div id=\"more_posts\" class=\"position_fixed bottom_0 right_0 padding_5vh bg_white color_black\"><div id=\"more_posts_value\"></div>more posts</div>\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">Advance Search: filter library posts By Usernames & Title</h1>\n            <ol id=\"library_posts_advance_filter\"></ol>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">library_feature</h1>\n            <ol id=\"element_ol_firebase_library_feature\"></ol>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">library_after_feature</h1>\n            <ol id=\"element_ol_firebase_library_after_feature\"></ol>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">library (simple search)</h1>\n            <ol id=\"element_ol_firebase_library\"></ol>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">roster</h1>\n            <ol id=\"element_ol_firebase_roster\"></ol>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">partners</h1>\n            <ol id=\"element_ol_firebase_partners\"></ol>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">abilities</h1>\n            <ol id=\"element_ol_firebase_abilities\"></ol>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">services</h1>\n            <ol id=\"element_ol_firebase_services\"></ol>\n\n            <h1 class=\"width_100 font_size_5vh float_left position_relative\">skills</h1>\n            <ol id=\"element_ol_firebase_skills\"></ol>\n\n          </div>\n        </div>\n\n      </div>\n\n        <div id=\"page_right_nav\" class=\"width_100 height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_absolute top_0 left_0 right_0\">\n\n          <div id=\"page_right_nav\" class=\"width_100 height_6025vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_absolute top_100 left_0 right_0 box_shadow_bottom_1vh_dark\">\n\n            <div class=\"calc_02vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_relative bg_yellow border_01vh_dark_pink_5\">\n            </div>\n\n          </div>\n\n          <div id=\"page_right_nav\" class=\"width_100 height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_absolute top_0 left_0 right_0 box_shadow_bottom_1vh_dark\">\n\n            <div class=\"calc_02vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_relative bg_yellow border_01vh_dark_pink_5\">\n            </div>\n\n          </div>\n\n        </div>\n\n        <div id=\"page_right_nav\" class=\"width_100 height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_absolute bottom_0 left_0 right_0\">\n\n          <div id=\"page_right_nav\" class=\"width_100 height_6025vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_absolute bottom_100 left_0 right_0 box_shadow_top_1vh_dark\">\n\n            <div class=\"calc_02vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_relative bg_yellow border_01vh_dark_pink_5\">\n            </div>\n\n          </div>\n\n          <div id=\"page_right_nav\" class=\"width_100 height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_absolute bottom_0 left_0 right_0 box_shadow_top_1vh_dark\">\n\n            <div class=\"calc_02vh display_webkit_box webkit_box_pack_center webkit_box_align float_left position_relative bg_yellow border_01vh_dark_pink_5\">\n            </div>\n\n          </div>\n\n        </div>\n\n    </div>\n    ";
var element_pop_top = "\n    <div id=\"component_app_modal_element_pop_top\" class=\"easing_025 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto overflow_hidden z_index_6\">\n      <div id=\"component_app_modal_element_pop_top_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_25vh max_width border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">\n          \n      </div>\n    </div>\n    ";
var element_pop_left = "\n  <div id=\"component_app_modal_element_pop_left\" class=\"easing_025 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n    <div id=\"component_app_modal_element_pop_left_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_25vh margin_auto max_width \">\n        \n\n\n    </div>\n  </div>\n  ";
var element_pop_bottom = "\n    <div id=\"component_app_modal_element_pop_bottom\" class=\"easing_025 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n      <div id=\"component_app_modal_element_pop_bottom_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_25vh max_width overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 z_index_6 margin_auto bg_white\">\n            \n\n      </div>\n    </div>\n  ";
var element_pop_right = "\n  <div id=\"component_app_modal_element_pop_right\" class=\"easing_025 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n    <div id=\"component_app_modal_element_pop_right_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_25vh max_width overflow_hidden bg_yellow border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_black background_light_yellow_9 z_index_6 margin_auto\">\n      \n\n    </div>\n  </div>\n  ";
var element_pip_top = "\n    <div id=\"component_app_modal_element_pip_top\" class=\"easing_025 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto overflow_hidden z_index_6\">\n      <div id=\"component_app_modal_element_pip_top_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_50vh max_width_500px overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">\n          \n          <div class=\"width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_025 gui_container_8\">\n            \n          </div>\n\n      </div>\n    </div>\n    ";
var element_pip_left = "\n  <div id=\"component_app_modal_element_pip_left\" class=\"easing_025 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n    <div id=\"component_app_modal_element_pip_left_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_50vh max_width_500px overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">\n          \n          <div class=\"width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_025 gui_container_8\">\n            \n          </div>\n\n      </div>\n  </div>\n  ";
var element_pip_bottom = "\n    <div id=\"component_app_modal_element_pip_bottom\" class=\"easing_025 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n      <div id=\"component_app_modal_element_pip_bottom_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_50vh max_width_500px overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">\n          \n          <div class=\"width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_025 gui_container_8\">\n            \n          </div>\n\n      </div>\n    </div>\n  ";
var element_pip_right = "\n  <div id=\"component_app_modal_element_pip_right\" class=\"easing_025 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n    <div id=\"component_app_modal_element_pip_right_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_50vh max_width_500px overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark border_01vh_black background_light_yellow_9 margin_auto pseudo_button_bottom_dark_yellow_8_round pseudo_button_bottom_dark_yellow_8_round_shadow\">\n          \n          <div class=\"width_60 height_60 float_left position_absolute top_0 left_0 bottom_0 right_0 margin_auto easing_025 gui_container_8\">\n            \n          </div>\n\n      </div>\n  </div>\n  ";
var element_morph_top = "\n    <div id=\"component_app_modal_element_morph_top\" class=\"easing_025 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n   ";
var element_morph_left = "\n    <div id=\"component_app_modal_element_morph_left\" class=\"easing_025 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_6\">\n    </div>\n   ";
var element_morph_bottom = "\n    <div id=\"component_app_modal_element_morph_bottom\" class=\"easing_025 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n   ";
var element_morph_right = "\n    <div id=\"component_app_modal_element_morph_right\" class=\"easing_025 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n   ";
var element_corner_top = "\n    <div id=\"component_app_modal_element_corner_top\" class=\"easing_025 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n   ";
var element_corner_left = "\n    <div id=\"component_app_modal_element_corner_left\" class=\"easing_025 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_6\">\n    </div>\n   ";
var element_corner_bottom = "\n    <div id=\"component_app_modal_element_corner_bottom\" class=\"easing_025 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n   ";
var element_corner_right = "\n    <div id=\"component_app_modal_element_corner_right\" class=\"easing_025 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n   ";
var element_menu_top = "\n    <div id=\"component_app_modal_element_menu_top\" class=\"easing_025 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_25vh margin_auto z_index_6\">\n\n    </div>\n   ";
var element_menu_left = "\n    <div id=\"component_app_modal_element_menu_left\" class=\"easing_025 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh_height width_25vw margin_auto z_index_6\">      \n\n        <div class=\"position_relative calc_2vh border_1vh_yellow box_shadow_bottom_left_1vh_dark bg_white overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left\">\n          <div class=\"position_relative calc_5vh padding_205vh float_left\">\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n          </div>\n        </div>\n\n    </div>";
var element_menu_bottom = "\n    <div id=\"component_app_modal_element_menu_bottom\" class=\"easing_025 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh_width height_25vh margin_auto z_index_6\">\n\n        <div class=\"position_relative calc_2vh border_1vh_yellow box_shadow_bottom_left_1vh_dark bg_white overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left\">\n          <div class=\"position_relative calc_5vh padding_205vh float_left\">\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n            <div class=\"font_size_5vh line_height_10vh width_100\"><b class=\"color_yellow\">Nigel:</b> Yo fam</div>\n            <div class=\"font_size_5vh line_height_10vh width_100\">Yo fam<b class=\"color_yellow\">:Nigel</b></div>\n          </div>\n        </div>\n\n    </div>\n    ";
var element_menu_right = "\n    <div id=\"component_app_modal_element_menu_right\" class=\"easing_025 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh_height width_25vw margin_auto z_index_6\">\n       \n        <div class=\"position_relative calc_2vh border_1vh_yellow box_shadow_bottom_left_1vh_dark bg_white overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-white float_left\">\n          <div class=\"position_relative calc_5vh padding_205vh float_left\">\n            ".concat(value_ui_controls, "\n          </div>\n        </div>\n\n    </div>\n    ");
var element_fade_top = "\n    <div id=\"component_app_modal_element_fade_top\" class=\"easing_025 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n    ";
var element_fade_left = "\n    <div id=\"component_app_modal_element_fade_left\" class=\"easing_025 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_6\">\n    </div>\n    ";
var element_fade_bottom = "\n    <div id=\"component_app_modal_element_fade_bottom\" class=\"easing_025 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n    ";
var element_fade_right = "\n    <div id=\"component_app_modal_element_fade_right\" class=\"easing_025 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_6\">\n    </div>\n    ";
var element_overlay_top = "\n    <div id=\"component_app_modal_element_overlay_top\" class=\"easing_025 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n      <div class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n      <div id=\"component_app_modal_element_overlay_top_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n    </div>\n    ";
var element_overlay_left = "\n    <div id=\"component_app_modal_element_overlay_left\" class=\"easing_025 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 width_100 height_100 margin_auto z_index_6\">\n      <div class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n      <div id=\"component_app_modal_element_overlay_left_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n    </div>\n    ";
var element_overlay_bottom = "\n    <div id=\"component_app_modal_element_overlay_bottom\" class=\"easing_025 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 width_100 height_100 margin_auto z_index_6\">\n      <div class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n      <div id=\"component_app_modal_element_overlay_bottom_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n    </div>\n    ";
var element_overlay_right = "\n    <div id=\"component_app_modal_element_overlay_right\" class=\"easing_025 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 width_100 height_100 margin_auto z_index_6\">\n      <div class=\"position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n      <div id=\"component_app_modal_element_overlay_right_content\" class=\"position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_black background_light_yellow_9 margin_auto\">\n      \n      </div>\n    </div>\n    ";
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
},{"../index.js":"index.js"}],"partials/functions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

var _elements = _interopRequireDefault(require("./elements"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = '';

var from_Import = function from_Import() {
  console.log('from functions');
}; // 5. Functions


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
    var categories = "";
    var subcategories = "";
    var types = "";
    var usernames = "";
    var tags = "";

    for (var i = 0; i < data.categories; i++) {
      categories += "<a href='#'>".concat(data.categories[i], "</a>");
    }

    for (var i = 0; i < data.subcategories; i++) {
      subcategories += "<a href='#'>".concat(data.subcategories[i], "</a>");
    }

    if (data.usernames != null) {
      for (var usernames_index = 0; usernames_index < data.usernames.length; usernames_index++) {
        usernames += "<a href='#'>".concat(data.usernames[usernames_index].username, "</a>");
      }
    }

    ;

    for (var i = 0; i < data.types; i++) {
      types += "<a href='#'>".concat(data.types[i].title, "</a>");
    }

    for (var i = 0; i < data.tags; i++) {
      tags += "<a href='#'>".concat(data.tags[i], "</a>");
    }

    ELEMENT.innerHTML = "\n        <div id=\"post_component\" class=\"width_100 margin_205vh_top margin_205vh_bottom float_left position_relative display opacity_1\">\n          \n          <div id=\"post_block_1\" style=\"\n           background-image: url(".concat(data.feature_image_src, "); background-size: cover;\" class=\"width_100 height_100 position_relative float_left\">\n          \n            <div id=\"post_block_3\">\n\n              <h1>Meta:</h1>\n              <p class=\"width_100\">title:").concat(data.title, "</p>\n              \n            </div>\n\n          </div>\n\n          <div id=\"post_block_2\" class=\"hover_show\" >\n              <h1>Meta:</h1>\n              <p>title:").concat(data.title, "</p>\n              <p>usernames:").concat(usernames, "</p>\n              <p>types:").concat(types, "</p>\n              <p>type:").concat(data.type, "</p>\n              <p>categories:").concat(categories, "</p>\n              <p>subcategories:").concat(subcategories, "</p>\n              <p>tags:").concat(tags, "</p>\n\n              <h1>Stats:</h1>\n              <p>views:").concat(data.views, "</p>\n              <p>likes:").concat(data.likes, "</p>\n              <p>dislikes:").concat(data.dislikes, "</p>\n\n              <h1>Content:</h1>\n              <p>paragraph:").concat(data.paragraph, "</p>\n              <p>feature_image_src:").concat(data.feature_image_src, "</p>\n          </div>\n\n          <div id=\"post_block_4\" class=\"position_relative width_100 float_left display_flex_flow\">\n            <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">like</button>\n            <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">dislike</button>\n            <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">view</button>\n            <button class=\"font_size_105vh line_height_2vh box_shadow_bottom_1vh_dark border_01vh_dark_pink_5 border_radius_1vh padding_1vh bg_yellow margin_1vh float_left\" id=\"\">delete</button>\n          </div>\n\n        </div>\n\n      ");
  }

  ; // Objects: Firebase Library Items
  // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))

  ELEMENT.children[0].children[2].children[0].addEventListener("click", function (event) {
    _index.default.likeWhoListings('library', data.id);
  });
  ELEMENT.children[0].children[2].children[1].addEventListener("click", function (event) {
    _index.default.dislikeWhoListings('library', data.id);
  });
  ELEMENT.children[0].children[2].children[2].addEventListener("click", function (event) {
    _index.default.viewWhoListings('library', data.id);
  });
  ELEMENT.children[0].children[2].children[3].addEventListener("click", function (event) {
    _index.default.deleteWhoListings('library', data.id);
  }); // view!!!

  ELEMENT.children[0].children[2].children[2].addEventListener("click", function (event) {
    var preview = function preview() {
      // function start (preview)
      var post_preview_from_li_link = '';
      var preview_content = '';
      var preview_scrolling_container = '';
      var preview_bg_container = "\n                    <div class=\"position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_5vh border_radius_1vh bg_yellow border_01vh_dark_yellow_9 z_index_1\">\n                    </div>\n\n                    <div class=\"position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_5vh border_radius_1vh bg_black opacity_01 z_index_1\">                \n                    </div>\n\n                    <div class=\"position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_5vh z_index_1\">\n                 \n                        <div class=\"position_absolute top_0 left_0 margin_auto width_205vh height_205vh z_index_1\">\n                            <div class=\"position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_line_top_left width_50 height_50 z_index_1\">\n                            </div>\n                        </div>\n\n                        <div class=\"position_absolute top_0 right_0 margin_auto width_205vh height_205vh z_index_1\">\n                            <div class=\"position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_line_top_right width_50 height_50 z_index_1\">\n                            </div>\n                        </div>\n\n                        <div class=\"position_absolute bottom_0 left_0 margin_auto width_205vh height_205vh z_index_1\">\n                            <div class=\"position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_line_bottom_left width_50 height_50 z_index_1\">\n                            </div>\n                        </div>\n\n                        <div class=\"position_absolute bottom_0 right_0 margin_auto width_205vh height_205vh z_index_1\">\n                            <div class=\"position_absolute top_0 left_0 bottom_0 right_0 margin_auto gui_line_bottom_right width_50 height_50 z_index_1\">\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <div style=\"background-image: url(".concat(data.feature_image_src, "); background-size: cover;\" class=\"position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_10vh border_radius_1vh bg_yellow border_01vh_dark_yellow_9 z_index_1\">\n                 \n                    </div>\n                  \n                ");
      var preview_title_container = "\n                    <div class=\"position_absolute top_0 left_0 right_0 float_left width_100 height_10vh bg_blue margin_auto z_index_2 text_align_center box_shadow_bottom_1vh_dark font_size_5vh line_height_10vh border_01vh_dark_yellow_9 \">\n                        ".concat(data.title, " ").concat(data.type, "\n                    </div>\n                ");
      var preview_control_container = "<div class=\"position_absolute bottom_-01vh right_0 left_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1\"><div id=\"component_app_modal_element_pop_top_content_close".concat(number, "\" class=\"gui_close width_50 height_100 float_left position_relative\"></div><div id=\"component_app_modal_element_pop_top_content_enter").concat(number, "\" class=\"gui_arrow_left width_50 height_100 float_left position_relative\"></div></div>");
      preview_content = "\n                  <div class=\"position_relative float_left width_100 height_50vh margin_auto\">\n                      ".concat(data.title, " ").concat(data.type, "\n                  </div>\n\n                  <div class=\"position_relative float_left width_100 height_50vh margin_auto\">\n                      ").concat(data.title, " ").concat(data.type, "\n                  </div>\n                  \n                  <div class=\"position_relative float_left width_100 height_50vh margin_auto\">\n                      ").concat(data.title, " ").concat(data.type, "\n                  </div>\n\n                  <div class=\"position_relative float_left width_100 height_50vh margin_auto\">\n                      ").concat(data.title, " ").concat(data.type, "\n                  </div>\n                  \n                  <div class=\"position_relative float_left width_100 height_50vh margin_auto\">\n                      ").concat(data.title, " ").concat(data.type, "\n                  </div>\n\n                  <div class=\"position_relative float_left width_100 height_50vh margin_auto\">\n                      ").concat(data.title, " ").concat(data.type, "\n                  </div>\n                ");
      preview_scrolling_container = _elements.default.element_scroll_y_events('element_scroll_y_events_pop', preview_content);
      post_preview_from_li_link = "<div class=\"position_absolute width_100 height_100 margin_auto\">".concat(preview_bg_container, "\n                <div class=\"position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_5vh border_radius_1vh overflow_hidden margin_205vh z_index_1\">\n                ").concat(preview_title_container, "<div class=\"position_absolute top_0 left_0 right_0 bottom_0 margin_auto calc_10vh z_index_1\">").concat(preview_scrolling_container, "</div></div>").concat(preview_control_container, "</div>");
      preview_container.innerHTML = post_preview_from_li_link;
      state.ui.modal.pop.top.display = true;
      setTimeout(function () {
        state.ui.modal.pop.top.transform = false;
      }, 101); // add event listeners

      setTimeout(function () {
        document.getElementById('component_app_modal_element_pop_top_content_close' + number + '').addEventListener('click', function (event) {
          // function start (Preview close)
          state.ui.modal.pop.top.display = true;
          state.ui.modal.pop.top.transform = true;
        });
        page();
      }, 101);
    };

    var page = function page() {
      // ON TO DETAIL
      document.getElementById('component_app_modal_element_pop_top_content_enter' + number + '').addEventListener('click', function (event) {
        // function start (Detail)
        var post_detail_from_li_link = '';
        var detail_content = "\n                          \n                          <div class=\"position_relative float_left width_100 height_100vh margin_auto\">\n                              PAGE\n                          </div>\n                          \n                          <div class=\"position_relative float_left width_100 height_100vh margin_auto\">\n                              ".concat(data.title, " <div class=\"position_relative float_left width_100 margin_auto\"></div>\n                          </div>\n\n                        ");
        var route_background = "";
        var foreground_content = "";

        var scrolling_container = _elements.default.element_scroll_y_events('element_scroll_y_events_page', detail_content);

        var control_container = "<div class=\"position_absolute bottom_0 top_0 right_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1\"><div id=\"component_app_modal_element_page_top_content_close".concat(number, "\" class=\"gui_close width_50 height_100 float_left position_relative\"></div><div id=\"component_app_modal_element_page_top_content_enter").concat(number, "\" class=\"gui_arrow_left width_50 height_100 float_left position_relative\"></div></div>");
        post_detail_from_li_link = "\n                            <div style=\"background-image: url(".concat(data.feature_image_src, "); background-size: cover;\" id=\"post_detail_from_li_link\" class=\"position_absolute width_100 height_100vh margin_auto\">\n                                \n                                ").concat(route_background, "\n                                <div id=\"scrolling_container\">\n                                ").concat(scrolling_container, "\n                                </div>\n                                ").concat(control_container, "\n                                ").concat(foreground_content, "\n\n                            </div>");
        page_container.innerHTML = post_detail_from_li_link;
        state.ui.modal.page.top.display = true;
        setTimeout(function () {
          state.ui.modal.page.top.transform = false;
        }, 101);
        overlay();
      });
    };

    var overlay = function overlay() {
      // add event listeners
      setTimeout(function () {
        document.getElementById('component_app_modal_element_page_top_content_close' + number + '').addEventListener('click', function (event) {
          // function start (Preview close)
          state.ui.modal.page.top.display = true;
          state.ui.modal.page.top.transform = true;
        }); // ON TO overlay

        document.getElementById('component_app_modal_element_page_top_content_enter' + number + '').addEventListener('click', function (event) {
          // overlay 
          state.ui.modal.overlay.top.display = true;
          state.ui.modal.overlay.top.transform = true; // function start (Detail)

          var post_overlay_from_li_link = '';
          var overlay_content = "\n                                    \n                                    <div class=\"position_relative float_left width_100 height_100vh margin_auto\">\n                                        overlay\n                                    </div>\n                                    \n                                    <div class=\"position_relative float_left width_100 height_100vh margin_auto\">\n                                        ".concat(data.title, " <div class=\"position_relative float_left width_100 margin_auto\"></div>\n                                    </div>\n\n                                ");
          var overlay_scrolling_container = '';
          var control_container = "<div class=\"position_absolute bottom_-01vh right_0 left_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1\"><div id=\"component_app_modal_element_overlay_top_content_close".concat(number, "\" class=\"gui_close width_50 height_100 float_left position_relative\"></div><div id=\"component_app_modal_element_overlay_top_content_enter").concat(number, "\" class=\"gui_arrow_left width_50 height_100 float_left position_relative\"></div></div>");
          overlay_scrolling_container = _elements.default.element_scroll_y_events('element_scroll_y_events_overlay', overlay_content);
          post_overlay_from_li_link = "<div style=\"background-image: url(".concat(data.feature_image_src, "); background-size: cover;\" id=\"post_overlay_from_li_link\" class=\"position_absolute width_100 height_100vh margin_auto\">").concat(overlay_scrolling_container).concat(control_container, "</div>");
          overlay_container.innerHTML = post_overlay_from_li_link;
          state.ui.modal.overlay.top.display = true;
          setTimeout(function () {
            state.ui.modal.overlay.top.transform = false;
          }, 101); // add event listeners

          setTimeout(function () {
            document.getElementById('component_app_modal_element_overlay_top_content_close' + number + '').addEventListener('click', function (event) {
              // function start (Preview close)
              state.ui.modal.overlay.top.display = true;
              state.ui.modal.overlay.top.transform = true;
            }); // ON TO pip

            document.getElementById('component_app_modal_element_overlay_top_content_enter' + number + '').addEventListener('click', function (event) {
              pip();
            });
          }, 101);
        });
      }, 101);
    };

    var pip = function pip() {
      // pip 
      state.ui.modal.pip.bottom.display = true;
      state.ui.modal.pip.bottom.transform = true; // function start (Detail)

      var post_pip_from_li_link = '';
      var pip_content = "\n                    \n                    <div class=\"position_relative float_left width_100 height_100vh margin_auto\">\n                        \n                    </div>\n                    \n                    <div class=\"position_relative float_left width_100 height_100vh margin_auto\">\n                        ".concat(data.title, " <div class=\"position_relative float_left width_100 margin_auto\"></div>\n                    </div>\n\n                ");
      var pip_scrolling_container = '';
      var pip_control_container = "<div class=\"position_absolute bottom_-01vh right_0 left_0 width_10vh height_10vh margin_auto border_radius_1vh_top bg_yellow border_01vh_dark_yellow_9 z_index_1\"><div id=\"component_app_modal_element_pip_bottom_content_close".concat(number, "\" class=\"gui_close width_50 height_100 float_left position_relative\"></div><div id=\"component_app_modal_element_pip_bottom_content_enter").concat(number, "\" class=\"gui_arrow_left width_50 height_100 float_left position_relative\"></div></div>");
      pip_scrolling_container = _elements.default.element_scroll_y_events('element_scroll_y_events_pip', pip_content);
      post_pip_from_li_link = "<div style=\"background-image: url(".concat(data.feature_image_src, "); background-size: cover;\" id=\"post_pip_from_li_link\" class=\"position_absolute width_100 height_100vh margin_auto\">").concat(pip_scrolling_container, "</div>").concat(pip_control_container);
      pip_container.innerHTML = post_pip_from_li_link;
      state.ui.modal.pip.bottom.display = true;
      setTimeout(function () {
        state.ui.modal.pip.bottom.transform = false;
      }, 101); // add event listeners

      setTimeout(function () {
        document.getElementById('component_app_modal_element_pip_bottom_content_close' + number + '').addEventListener('click', function (event) {
          // function start (Preview close)
          state.ui.modal.pip.bottom.display = true;
          state.ui.modal.pip.bottom.transform = true;
        }); // ON TO DONE

        document.getElementById('component_app_modal_element_pip_bottom_content_enter' + number + '').addEventListener('click', function (event) {
          alert('DONE!');
        });
      }, 101);
    }; // function start (Preview)


    var number = Math.floor(Math.random() * 101000000000000 + 1);
    var preview_container = document.getElementById('component_app_modal_element_pop_top_content');
    var page_container = document.getElementById('component_app_modal_element_page_top_content');
    var overlay_container = document.getElementById('component_app_modal_element_overlay_top_content');
    var pip_container = document.getElementById('component_app_modal_element_pip_bottom_content');
    preview();
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
      }, 1);
      return;
    }

    ;
  }

  ;
};

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
      }, 1250);
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
      }, 0); // remove item after buffer

      setTimeout(function () {
        MANIPULATED.classList.remove('display');
        MANIPULATED.classList.add('display_none');
      }, 1250);
      return;
    }

    ;
  }

  ;
};

var Toggle_sets_display_and_opacity_on_with_no_delay = function Toggle_sets_display_and_opacity_on_with_no_delay(id) {
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

var Toggle_sets_display_and_opacity_off_with_delay = function Toggle_sets_display_and_opacity_off_with_delay(id) {
  var MANIPULATED = document.getElementById(id);

  if (MANIPULATED != null) {
    if (MANIPULATED.classList.contains('display') && MANIPULATED.classList.contains('opacity_1')) {
      // remove item immediatly
      setTimeout(function () {
        MANIPULATED.classList.remove('opacity_1');
        MANIPULATED.classList.add('opacity_0');
      }, 750); // remove item after buffer

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

var Toggle_pieces_display_and_opacity_on_with_no_delay = function Toggle_pieces_display_and_opacity_on_with_no_delay(id) {
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
      }, 1250);
      return;
    }

    ;
  }

  ;
};

var Toggle_pieces_display_and_opacity_off_with_delay = function Toggle_pieces_display_and_opacity_off_with_delay(id) {
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
      }, 1250);
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
  Toggle_stages_display_and_opacity_off_with_delay: Toggle_stages_display_and_opacity_off_with_delay,
  Toggle_pieces_display_and_opacity_on_with_no_delay: Toggle_pieces_display_and_opacity_on_with_no_delay,
  Toggle_pieces_display_and_opacity_off_with_delay: Toggle_pieces_display_and_opacity_off_with_delay,
  Toggle_sets_display_and_opacity_on_with_no_delay: Toggle_sets_display_and_opacity_on_with_no_delay,
  Toggle_sets_display_and_opacity_off_with_delay: Toggle_sets_display_and_opacity_off_with_delay
};
exports.default = _default;
},{"../index.js":"index.js","./elements":"partials/elements.js"}],"partials/state.js":[function(require,module,exports) {
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
},{}],"partials/events.js":[function(require,module,exports) {
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
    root.addEventListener('wheel', function (event) {
      state = _index.default.Handle_return_state(); // console.log('state in events');

      console.log('wheel');

      if (event.deltaY < 0) {
        console.log('wheel up');

        if (document.getElementById('wheel_direction') != null) {
          document.getElementById('wheel_direction').innerHTML = 'up';
          console.log("instance: wheel up");

          _index.default.event_wheel_up();
        }

        ;
      }

      ;

      if (event.deltaY > 0) {
        console.log('wheel down');
        state.ui.root.wheels += 1;
        console.log('wheels: ' + state.ui.root.wheels);

        _index.default.Handle_get_state_from_events();
      }

      ;
    });
    root.addEventListener('mousemove', function (event) {
      state = _index.default.Handle_return_state();
      console.log('mousemove only');
      console.log(event);
      console.log('mousemove: event.clientX: ' + event.clientX);
      console.log('mousemove: event.clientY: ' + event.clientY);
      state.events.mouse.clientX = event.clientX;
      state.events.mouse.clientY = event.clientY;

      if (state.animation.instances.sequence == 13.1 && state.ui.stage.cardboard.set == 1) {
        state.ui.stage.cardboard.set = 2;
        setTimeout(function () {
          state.animation.instances.sequence = 14;

          _index.default.player_1_shrink();
        }, 1);
      } // x axis: 1


      if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 1) {
        console.log('mouse is in clientX:1 x clientY:1 grid');
        state.events.touch_8.clientX = 1;
        state.events.touch_8.clientY = 1;
        state.animation.instances.grid_64 = 1;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 2) {
        console.log('mouse is in clientX:1 x clientY:2 grid');
        state.events.touch_8.clientX = 1;
        state.events.touch_8.clientY = 2;
        state.animation.instances.grid_64 = 9;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 3) {
        console.log('mouse is in clientX:1 x clientY:3 grid');
        state.events.touch_8.clientX = 1;
        state.events.touch_8.clientY = 3;
        state.animation.instances.grid_64 = 17;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 4) {
        console.log('mouse is in clientX:1 x clientY:4 grid');
        state.events.touch_8.clientX = 1;
        state.events.touch_8.clientY = 4;
        state.animation.instances.grid_64 = 25;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 5) {
        console.log('mouse is in clientX:1 x clientY:5 grid');
        state.events.touch_8.clientX = 1;
        state.events.touch_8.clientY = 5;
        state.animation.instances.grid_64 = 33;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 6) {
        console.log('mouse is in clientX:1 x clientY:6 grid');
        state.events.touch_8.clientX = 1;
        state.events.touch_8.clientY = 6;
        state.animation.instances.grid_64 = 41;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 7) {
        console.log('mouse is in clientX:1 x clientY:7 grid');
        state.events.touch_8.clientX = 1;
        state.events.touch_8.clientY = 7;
        state.animation.instances.grid_64 = 49;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 8) {
        console.log('mouse is in clientX:1 x clientY:8 grid');
        state.events.touch_8.clientX = 1;
        state.events.touch_8.clientY = 8;
        state.animation.instances.grid_64 = 57;
      }

      ; // x axis: 2

      if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 1) {
        console.log('mouse is in clientX:2 x clientY:1 grid');
        state.events.touch_8.clientX = 2;
        state.events.touch_8.clientY = 1;
        state.animation.instances.grid_64 = 2;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 2) {
        console.log('mouse is in clientX:2 x clientY:2 grid');
        state.events.touch_8.clientX = 2;
        state.events.touch_8.clientY = 2;
        state.animation.instances.grid_64 = 10;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 3) {
        console.log('mouse is in clientX:2 x clientY:3 grid');
        state.events.touch_8.clientX = 2;
        state.events.touch_8.clientY = 3;
        state.animation.instances.grid_64 = 18;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 4) {
        console.log('mouse is in clientX:2 x clientY:4 grid');
        state.events.touch_8.clientX = 2;
        state.events.touch_8.clientY = 4;
        state.animation.instances.grid_64 = 26;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 5) {
        console.log('mouse is in clientX:2 x clientY:5 grid');
        state.events.touch_8.clientX = 2;
        state.events.touch_8.clientY = 5;
        state.animation.instances.grid_64 = 34;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 6) {
        console.log('mouse is in clientX:2 x clientY:6 grid');
        state.events.touch_8.clientX = 2;
        state.events.touch_8.clientY = 6;
        state.animation.instances.grid_64 = 42;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 7) {
        console.log('mouse is in clientX:2 x clientY:7 grid');
        state.events.touch_8.clientX = 2;
        state.events.touch_8.clientY = 7;
        state.animation.instances.grid_64 = 50;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 8) {
        console.log('mouse is in clientX:2 x clientY:8 grid');
        state.events.touch_8.clientX = 2;
        state.events.touch_8.clientY = 8;
        state.animation.instances.grid_64 = 58;
      }

      ; // x axis: 3

      if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 1) {
        console.log('mouse is in clientX:3 x clientY:1 grid');
        state.events.touch_8.clientX = 3;
        state.events.touch_8.clientY = 1;
        state.animation.instances.grid_64 = 3;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 2) {
        console.log('mouse is in clientX:3 x clientY:2 grid');
        state.events.touch_8.clientX = 3;
        state.events.touch_8.clientY = 2;
        state.animation.instances.grid_64 = 11;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 3) {
        console.log('mouse is in clientX:3 x clientY:3 grid');
        state.events.touch_8.clientX = 3;
        state.events.touch_8.clientY = 3;
        state.animation.instances.grid_64 = 19;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 4) {
        console.log('mouse is in clientX:3 x clientY:4 grid');
        state.events.touch_8.clientX = 3;
        state.events.touch_8.clientY = 4;
        state.animation.instances.grid_64 = 27;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 5) {
        console.log('mouse is in clientX:3 x clientY:5 grid');
        state.events.touch_8.clientX = 3;
        state.events.touch_8.clientY = 5;
        state.animation.instances.grid_64 = 35;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 6) {
        console.log('mouse is in clientX:3 x clientY:6 grid');
        state.events.touch_8.clientX = 3;
        state.events.touch_8.clientY = 6;
        state.animation.instances.grid_64 = 43;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 7) {
        console.log('mouse is in clientX:3 x clientY:7 grid');
        state.events.touch_8.clientX = 3;
        state.events.touch_8.clientY = 7;
        state.animation.instances.grid_64 = 51;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 8) {
        console.log('mouse is in clientX:3 x clientY:8 grid');
        state.events.touch_8.clientX = 3;
        state.events.touch_8.clientY = 8;
        state.animation.instances.grid_64 = 59;
      }

      ; // x axis: 4

      if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 1) {
        console.log('mouse is in clientX:4 x clientY:1 grid');
        state.events.touch_8.clientX = 4;
        state.events.touch_8.clientY = 1;
        state.animation.instances.grid_64 = 4;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 2) {
        console.log('mouse is in clientX:4 x clientY:2 grid');
        state.events.touch_8.clientX = 4;
        state.events.touch_8.clientY = 2;
        state.animation.instances.grid_64 = 12;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 3) {
        console.log('mouse is in clientX:4 x clientY:3 grid');
        state.events.touch_8.clientX = 4;
        state.events.touch_8.clientY = 3;
        state.animation.instances.grid_64 = 20;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 4) {
        console.log('mouse is in clientX:4 x clientY:4 grid');
        state.events.touch_8.clientX = 4;
        state.events.touch_8.clientY = 4;
        state.animation.instances.grid_64 = 28;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 5) {
        console.log('mouse is in clientX:4 x clientY:5 grid');
        state.events.touch_8.clientX = 4;
        state.events.touch_8.clientY = 5;
        state.animation.instances.grid_64 = 36;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 6) {
        console.log('mouse is in clientX:4 x clientY:6 grid');
        state.events.touch_8.clientX = 4;
        state.events.touch_8.clientY = 6;
        state.animation.instances.grid_64 = 44;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 7) {
        console.log('mouse is in clientX:4 x clientY:7 grid');
        state.events.touch_8.clientX = 4;
        state.events.touch_8.clientY = 7;
        state.animation.instances.grid_64 = 52;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 8) {
        console.log('mouse is in clientX:4 x clientY:8 grid');
        state.events.touch_8.clientX = 4;
        state.events.touch_8.clientY = 8;
        state.animation.instances.grid_64 = 60;
      }

      ; // x axis: 5

      if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 1) {
        console.log('mouse is in clientX:5 x clientY:1 grid');
        state.events.touch_8.clientX = 5;
        state.events.touch_8.clientY = 1;
        state.animation.instances.grid_64 = 5;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 2) {
        console.log('mouse is in clientX:5 x clientY:2 grid');
        state.events.touch_8.clientX = 5;
        state.events.touch_8.clientY = 2;
        state.animation.instances.grid_64 = 13;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 3) {
        console.log('mouse is in clientX:5 x clientY:3 grid');
        state.events.touch_8.clientX = 5;
        state.events.touch_8.clientY = 3;
        state.animation.instances.grid_64 = 21;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 4) {
        console.log('mouse is in clientX:5 x clientY:4 grid');
        state.events.touch_8.clientX = 5;
        state.events.touch_8.clientY = 4;
        state.animation.instances.grid_64 = 29;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 5) {
        console.log('mouse is in clientX:5 x clientY:5 grid');
        state.events.touch_8.clientX = 5;
        state.events.touch_8.clientY = 5;
        state.animation.instances.grid_64 = 37;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 6) {
        console.log('mouse is in clientX:5 x clientY:6 grid');
        state.events.touch_8.clientX = 5;
        state.events.touch_8.clientY = 6;
        state.animation.instances.grid_64 = 45;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 7) {
        console.log('mouse is in clientX:5 x clientY:7 grid');
        state.events.touch_8.clientX = 5;
        state.events.touch_8.clientY = 7;
        state.animation.instances.grid_64 = 53;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 8) {
        console.log('mouse is in clientX:5 x clientY:8 grid');
        state.events.touch_8.clientX = 5;
        state.events.touch_8.clientY = 8;
        state.animation.instances.grid_64 = 61;
      }

      ; // x axis: 6

      if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 1) {
        console.log('mouse is in clientX:6 x clientY:1 grid');
        state.events.touch_8.clientX = 6;
        state.events.touch_8.clientY = 1;
        state.animation.instances.grid_64 = 6;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 2) {
        console.log('mouse is in clientX:6 x clientY:2 grid');
        state.events.touch_8.clientX = 6;
        state.events.touch_8.clientY = 2;
        state.animation.instances.grid_64 = 14;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 3) {
        console.log('mouse is in clientX:6 x clientY:3 grid');
        state.events.touch_8.clientX = 6;
        state.events.touch_8.clientY = 3;
        state.animation.instances.grid_64 = 22;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 4) {
        console.log('mouse is in clientX:6 x clientY:4 grid');
        state.events.touch_8.clientX = 6;
        state.events.touch_8.clientY = 4;
        state.animation.instances.grid_64 = 30;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 5) {
        console.log('mouse is in clientX:6 x clientY:5 grid');
        state.events.touch_8.clientX = 6;
        state.events.touch_8.clientY = 5;
        state.animation.instances.grid_64 = 38;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 6) {
        console.log('mouse is in clientX:6 x clientY:6 grid');
        state.events.touch_8.clientX = 6;
        state.events.touch_8.clientY = 6;
        state.animation.instances.grid_64 = 46;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 7) {
        console.log('mouse is in clientX:6 x clientY:7 grid');
        state.events.touch_8.clientX = 6;
        state.events.touch_8.clientY = 7;
        state.animation.instances.grid_64 = 54;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 8) {
        console.log('mouse is in clientX:6 x clientY:8 grid');
        state.events.touch_8.clientX = 6;
        state.events.touch_8.clientY = 8;
        state.animation.instances.grid_64 = 62;
      }

      ; // x axis: 7

      if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 1) {
        console.log('mouse is in clientX:7 x clientY:1 grid');
        state.events.touch_8.clientX = 7;
        state.events.touch_8.clientY = 1;
        state.animation.instances.grid_64 = 7;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 2) {
        console.log('mouse is in clientX:7 x clientY:2 grid');
        state.events.touch_8.clientX = 7;
        state.events.touch_8.clientY = 2;
        state.animation.instances.grid_64 = 15;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 3) {
        console.log('mouse is in clientX:7 x clientY:3 grid');
        state.events.touch_8.clientX = 7;
        state.events.touch_8.clientY = 3;
        state.animation.instances.grid_64 = 23;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 4) {
        console.log('mouse is in clientX:7 x clientY:4 grid');
        state.events.touch_8.clientX = 7;
        state.events.touch_8.clientY = 4;
        state.animation.instances.grid_64 = 31;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 5) {
        console.log('mouse is in clientX:7 x clientY:5 grid');
        state.events.touch_8.clientX = 7;
        state.events.touch_8.clientY = 5;
        state.animation.instances.grid_64 = 39;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 6) {
        console.log('mouse is in clientX:7 x clientY:6 grid');
        state.events.touch_8.clientX = 7;
        state.events.touch_8.clientY = 6;
        state.animation.instances.grid_64 = 47;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 7) {
        console.log('mouse is in clientX:7 x clientY:7 grid');
        state.events.touch_8.clientX = 7;
        state.events.touch_8.clientY = 7;
        state.animation.instances.grid_64 = 55;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 8) {
        console.log('mouse is in clientX:7 x clientY:8 grid');
        state.events.touch_8.clientX = 7;
        state.events.touch_8.clientY = 8;
        state.animation.instances.grid_64 = 63;
      }

      ; // x axis: 8

      if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 1) {
        console.log('mouse is in clientX:8 x clientY:1 grid');
        state.events.touch_8.clientX = 8;
        state.events.touch_8.clientY = 1;
        state.animation.instances.grid_64 = 8;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 2) {
        console.log('mouse is in clientX:8 x clientY:2 grid');
        state.events.touch_8.clientX = 8;
        state.events.touch_8.clientY = 2;
        state.animation.instances.grid_64 = 16;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 3) {
        console.log('mouse is in clientX:8 x clientY:3 grid');
        state.events.touch_8.clientX = 8;
        state.events.touch_8.clientY = 3;
        state.animation.instances.grid_64 = 24;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 4) {
        console.log('mouse is in clientX:8 x clientY:4 grid');
        state.events.touch_8.clientX = 8;
        state.events.touch_8.clientY = 4;
        state.animation.instances.grid_64 = 32;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 5) {
        console.log('mouse is in clientX:8 x clientY:5 grid');
        state.events.touch_8.clientX = 8;
        state.events.touch_8.clientY = 5;
        state.animation.instances.grid_64 = 40;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 6) {
        console.log('mouse is in clientX:8 x clientY:6 grid');
        state.events.touch_8.clientX = 8;
        state.events.touch_8.clientY = 6;
        state.animation.instances.grid_64 = 48;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 7) {
        console.log('mouse is in clientX:8 x clientY:7 grid');
        state.events.touch_8.clientX = 8;
        state.events.touch_8.clientY = 7;
        state.animation.instances.grid_64 = 56;
      }

      ;

      if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 8) {
        console.log('mouse is in clientX:8 x clientY:8 grid');
        state.events.touch_8.clientX = 8;
        state.events.touch_8.clientY = 8;
        state.animation.instances.grid_64 = 64;
      }

      ;

      if (document.getElementById('click_position') != null) {
        document.getElementById('click_position').innerHTML = "mouse is in clientX: ".concat(state.events.touch_8.clientX, " & clientY:").concat(state.events.touch_8.clientY);
      }

      ;

      _index.default.Handle_get_state_from_events();
    });
    root.addEventListener('mousedown', function (event) {
      state = _index.default.Handle_return_state();

      _index.default.Handle_get_state_from_events();
    });
    root.addEventListener('mouseup', function (event) {
      state = _index.default.Handle_return_state();

      _index.default.Handle_get_state_from_events();
    });
    root.addEventListener('mouseenter', function (event) {
      state = _index.default.Handle_return_state();

      _index.default.Handle_get_state_from_events();
    });
    root.addEventListener('mouseleave', function (event) {
      state = _index.default.Handle_return_state();

      _index.default.Handle_get_state_from_events();
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

      ; // esc

      if (keyCode == 27) {
        _index.default.Handle_load_animation();
      }

      ; // NEXT LINE
      // `

      if (keyCode == 192) {
        console.log('tildy');
        state.animation.instances.sequence = 0;
      }

      ; // one

      if (keyCode == 49) {
        console.log('1');
      }

      ; // two

      if (keyCode == 50) {
        console.log('2');
      }

      ; // three

      if (keyCode == 51) {
        console.log('3');
      }

      ; // four

      if (keyCode == 52) {
        console.log('4');
      }

      ; // five

      if (keyCode == 53) {
        console.log('5');
      }

      ; // six

      if (keyCode == 54) {
        console.log('6');
      }

      ; // seven

      if (keyCode == 55) {
        console.log('7');
      }

      ; // eight

      if (keyCode == 56) {
        console.log('8');
      }

      ; // nine

      if (keyCode == 57) {
        console.log('9');
        state.ui.interaction.player_1.display = !state.ui.interaction.player_1.display;
      }

      ; // zero

      if (keyCode == 48) {
        console.log('0');
        state.ui.interaction.player_1.transform = !state.ui.interaction.player_1.transform;
      }

      ; // -

      if (keyCode == 189) {
        state.animation.instances.sequence -= 1;
      }

      ; // =

      if (keyCode == 187) {
        state.animation.instances.sequence += 1;
      }

      ; // delete

      if (keyCode == 8) {
        state.ui.stage.cardboard.set -= 1;
      }

      ; // NEXT LINE
      // tab

      if (keyCode == 9) {
        state.animation.instances.sequence = 0;
      }

      ; // q

      if (keyCode == 81) {
        _index.default.HANDLE_animation_gui_hide();
      }

      ; // w

      if (keyCode == 87) {
        state.ui.interaction.player_1.yaxis += 1 / 8;
      }

      ; //e

      if (keyCode == 69) {}

      ; //r

      if (keyCode == 82) {}

      ; //t

      if (keyCode == 84) {}

      ; //y

      if (keyCode == 89) {}

      ; // u

      if (keyCode == 85) {}

      ; //i

      if (keyCode == 73) {}

      ; //o

      if (keyCode == 79) {}

      ; //p

      if (keyCode == 80) {}

      ; //[

      if (keyCode == 219) {
        _index.default.player_1_shrink();
      }

      ; //]

      if (keyCode == 221) {
        _index.default.player_1_grow();
      }

      ; //\

      if (keyCode == 220) {}

      ; // NEXT LINE
      // caps lock

      if (keyCode == 220) {}

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

      ; // f

      if (keyCode == 70) {}

      ; // g

      if (keyCode == 71) {}

      ; // h

      if (keyCode == 72) {}

      ; // j

      if (keyCode == 74) {}

      ; // k

      if (keyCode == 75) {}

      ; // l

      if (keyCode == 76) {}

      ; // ;

      if (keyCode == 186) {}

      ; // '

      if (keyCode == 222) {}

      ; // enter

      if (keyCode == 13) {
        _index.default.check_local_user();

        state.ui.stage.cardboard.scene += 1;
        state.ui.stage.cardboard.set += 1;

        if (state.ui.stage.cardboard.scene == 7) {
          state.ui.stage.cardboard.scene = 1;
        }

        ;

        if (state.ui.stage.cardboard.set == 13) {
          state.ui.stage.cardboard.set = 1;
        }

        ;
      }

      ; // NEXTLINE
      // shift left

      if (event.code == 'ShiftLeft') {}

      ; // shift right

      if (event.code == 'ShiftRight') {}

      ; // shift

      if (keyCode == 16) {
        _index.default.HANDLE_animation_gui_show();
      }

      ; // z

      if (keyCode == 90) {}

      ; // x

      if (keyCode == 88) {}

      ; // c

      if (keyCode == 67) {}

      ; // v

      if (keyCode == 86) {}

      ; // b

      if (keyCode == 66) {}

      ; // n

      if (keyCode == 78) {}

      ; // m

      if (keyCode == 77) {}

      ; // ,

      if (keyCode == 188) {}

      ; // .

      if (keyCode == 190) {}

      ; // /

      if (keyCode == 191) {}

      ; // NEXT LINE
      // control

      if (keyCode == 17) {}

      ; // alt

      if (keyCode == 18) {}

      ; // command

      if (keyCode == 91) {}

      ; // command right

      if (keyCode == 93) {}

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

      if (document.getElementById('key_keys') != null) {
        document.getElementById('key_keys').innerHTML = state.events.key.keys;
      }

      if (document.getElementById('key_key_down') != null) {
        document.getElementById('key_key_down').innerHTML = event.keyCode;
      }

      _index.default.Handle_get_state_from_events();
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

  ; // Mobile

  if (is_Mobile) {
    root.addEventListener('touchmove', function (event) {
      state = _index.default.Handle_return_state();
      console.log('event.changedTouches[0].page');
      console.log(event.changedTouches[0].pageX);
      console.log(event.changedTouches[0].pageY);
      state.events.touch.enter = true;
      state.events.touch.leave = false;
      state.events.touch.clientX = event.changedTouches[0].clientX;
      state.events.touch.clientY = event.changedTouches[0].clientY; //alert('touchmove');

      console.log('event.changedTouches[0].page');
      console.log(event.changedTouches[0].pageX);
      console.log(event.changedTouches[0].pageY);

      if (document.getElementById('touch_page_X') != null) {
        document.getElementById('touch_page_Y').innerHTML = event.changedTouches[0].pageY;
        document.getElementById('touch_page_X').innerHTML = event.changedTouches[0].pageX;
      }

      ;
      console.log('event.changedTouches[0].client');
      console.log(event.changedTouches[0].clientX);
      console.log(event.changedTouches[0].clientY);

      if (document.getElementById('touch_client_Y') != null) {
        document.getElementById('touch_client_Y').innerHTML = event.changedTouches[0].clientY;
        document.getElementById('touch_client_X').innerHTML = event.changedTouches[0].clientX;
      }

      ; //64
      // x axis: 1

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
        console.log('mouse is in clientX:1 x clientY:1 grid');
        state.events.touch_8.clientX = 1;
        state.events.touch_8.clientY = 1;
        state.animation.instances.grid_64 = 1;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
        console.log('mouse is in clientX:1 x clientY:2 grid');
        state.events.touch_8.clientX = 1;
        state.events.touch_8.clientY = 2;
        state.animation.instances.grid_64 = 9;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
        console.log('mouse is in clientX:1 x clientY:3 grid');
        state.events.touch_8.clientX = 1;
        state.events.touch_8.clientY = 3;
        state.animation.instances.grid_64 = 17;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
        console.log('mouse is in clientX:1 x clientY:4 grid');
        state.events.touch_8.clientX = 1;
        state.events.touch_8.clientY = 4;
        state.animation.instances.grid_64 = 25;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
        console.log('mouse is in clientX:1 x clientY:5 grid');
        state.events.touch_8.clientX = 1;
        state.events.touch_8.clientY = 5;
        state.animation.instances.grid_64 = 33;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
        console.log('mouse is in clientX:1 x clientY:6 grid');
        state.events.touch_8.clientX = 1;
        state.events.touch_8.clientY = 6;
        state.animation.instances.grid_64 = 41;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
        console.log('mouse is in clientX:1 x clientY:7 grid');
        state.events.touch_8.clientX = 1;
        state.events.touch_8.clientY = 7;
        state.animation.instances.grid_64 = 49;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 0 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 1 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
        console.log('mouse is in clientX:1 x clientY:8 grid');
        state.events.touch_8.clientX = 1;
        state.events.touch_8.clientY = 8;
        state.animation.instances.grid_64 = 57;
      }

      ; // x axis: 2

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
        console.log('mouse is in clientX:2 x clientY:1 grid');
        state.events.touch_8.clientX = 2;
        state.events.touch_8.clientY = 1;
        state.animation.instances.grid_64 = 2;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
        console.log('mouse is in clientX:2 x clientY:2 grid');
        state.events.touch_8.clientX = 2;
        state.events.touch_8.clientY = 2;
        state.animation.instances.grid_64 = 10;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
        console.log('mouse is in clientX:2 x clientY:3 grid');
        state.events.touch_8.clientX = 2;
        state.events.touch_8.clientY = 3;
        state.animation.instances.grid_64 = 18;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
        console.log('mouse is in clientX:2 x clientY:4 grid');
        state.events.touch_8.clientX = 2;
        state.events.touch_8.clientY = 4;
        state.animation.instances.grid_64 = 26;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
        console.log('mouse is in clientX:2 x clientY:5 grid');
        state.events.touch_8.clientX = 2;
        state.events.touch_8.clientY = 5;
        state.animation.instances.grid_64 = 34;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
        console.log('mouse is in clientX:2 x clientY:6 grid');
        state.events.touch_8.clientX = 2;
        state.events.touch_8.clientY = 6;
        state.animation.instances.grid_64 = 42;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
        console.log('mouse is in clientX:2 x clientY:7 grid');
        state.events.touch_8.clientX = 2;
        state.events.touch_8.clientY = 7;
        state.animation.instances.grid_64 = 50;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 1 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 2 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
        console.log('mouse is in clientX:2 x clientY:8 grid');
        state.events.touch_8.clientX = 2;
        state.events.touch_8.clientY = 8;
        state.animation.instances.grid_64 = 58;
      }

      ; // x axis: 3

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
        console.log('mouse is in clientX:3 x clientY:1 grid');
        state.events.touch_8.clientX = 3;
        state.events.touch_8.clientY = 1;
        state.animation.instances.grid_64 = 3;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
        console.log('mouse is in clientX:3 x clientY:2 grid');
        state.events.touch_8.clientX = 3;
        state.events.touch_8.clientY = 2;
        state.animation.instances.grid_64 = 11;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
        console.log('mouse is in clientX:3 x clientY:3 grid');
        state.events.touch_8.clientX = 3;
        state.events.touch_8.clientY = 3;
        state.animation.instances.grid_64 = 19;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
        console.log('mouse is in clientX:3 x clientY:4 grid');
        state.events.touch_8.clientX = 3;
        state.events.touch_8.clientY = 4;
        state.animation.instances.grid_64 = 27;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
        console.log('mouse is in clientX:3 x clientY:5 grid');
        state.events.touch_8.clientX = 3;
        state.events.touch_8.clientY = 5;
        state.animation.instances.grid_64 = 35;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
        console.log('mouse is in clientX:3 x clientY:6 grid');
        state.events.touch_8.clientX = 3;
        state.events.touch_8.clientY = 6;
        state.animation.instances.grid_64 = 43;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
        console.log('mouse is in clientX:3 x clientY:7 grid');
        state.events.touch_8.clientX = 3;
        state.events.touch_8.clientY = 7;
        state.animation.instances.grid_64 = 51;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 2 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 3 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
        console.log('mouse is in clientX:3 x clientY:8 grid');
        state.events.touch_8.clientX = 3;
        state.events.touch_8.clientY = 8;
        state.animation.instances.grid_64 = 59;
      }

      ; // x axis: 4

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
        console.log('mouse is in clientX:4 x clientY:1 grid');
        state.events.touch_8.clientX = 4;
        state.events.touch_8.clientY = 1;
        state.animation.instances.grid_64 = 4;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
        console.log('mouse is in clientX:4 x clientY:2 grid');
        state.events.touch_8.clientX = 4;
        state.events.touch_8.clientY = 2;
        state.animation.instances.grid_64 = 12;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
        console.log('mouse is in clientX:4 x clientY:3 grid');
        state.events.touch_8.clientX = 4;
        state.events.touch_8.clientY = 3;
        state.animation.instances.grid_64 = 20;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
        console.log('mouse is in clientX:4 x clientY:4 grid');
        state.events.touch_8.clientX = 4;
        state.events.touch_8.clientY = 4;
        state.animation.instances.grid_64 = 28;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
        console.log('mouse is in clientX:4 x clientY:5 grid');
        state.events.touch_8.clientX = 4;
        state.events.touch_8.clientY = 5;
        state.animation.instances.grid_64 = 36;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
        console.log('mouse is in clientX:4 x clientY:6 grid');
        state.events.touch_8.clientX = 4;
        state.events.touch_8.clientY = 6;
        state.animation.instances.grid_64 = 44;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
        console.log('mouse is in clientX:4 x clientY:7 grid');
        state.events.touch_8.clientX = 4;
        state.events.touch_8.clientY = 7;
        state.animation.instances.grid_64 = 52;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 3 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 4 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
        console.log('mouse is in clientX:4 x clientY:8 grid');
        state.events.touch_8.clientX = 4;
        state.events.touch_8.clientY = 8;
        state.animation.instances.grid_64 = 60;
      }

      ; // x axis: 5

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
        console.log('mouse is in clientX:5 x clientY:1 grid');
        state.events.touch_8.clientX = 5;
        state.events.touch_8.clientY = 1;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
        console.log('mouse is in clientX:5 x clientY:2 grid');
        state.events.touch_8.clientX = 5;
        state.events.touch_8.clientY = 2;
        state.animation.instances.grid_64 = 13;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
        console.log('mouse is in clientX:5 x clientY:3 grid');
        state.events.touch_8.clientX = 5;
        state.events.touch_8.clientY = 3;
        state.animation.instances.grid_64 = 21;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
        console.log('mouse is in clientX:5 x clientY:4 grid');
        state.events.touch_8.clientX = 5;
        state.events.touch_8.clientY = 4;
        state.animation.instances.grid_64 = 29;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
        console.log('mouse is in clientX:5 x clientY:5 grid');
        state.events.touch_8.clientX = 5;
        state.events.touch_8.clientY = 5;
        state.animation.instances.grid_64 = 37;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
        console.log('mouse is in clientX:5 x clientY:6 grid');
        state.events.touch_8.clientX = 5;
        state.events.touch_8.clientY = 6;
        state.animation.instances.grid_64 = 45;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
        console.log('mouse is in clientX:5 x clientY:7 grid');
        state.events.touch_8.clientX = 5;
        state.events.touch_8.clientY = 7;
        state.animation.instances.grid_64 = 53;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 4 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 5 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
        console.log('mouse is in clientX:5 x clientY:8 grid');
        state.events.touch_8.clientX = 5;
        state.events.touch_8.clientY = 8;
        state.animation.instances.grid_64 = 61;
      }

      ; // x axis: 6

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
        console.log('mouse is in clientX:6 x clientY:1 grid');
        state.events.touch_8.clientX = 6;
        state.events.touch_8.clientY = 1;
        state.animation.instances.grid_64 = 6;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
        console.log('mouse is in clientX:6 x clientY:2 grid');
        state.events.touch_8.clientX = 6;
        state.events.touch_8.clientY = 2;
        state.animation.instances.grid_64 = 14;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
        console.log('mouse is in clientX:6 x clientY:3 grid');
        state.events.touch_8.clientX = 6;
        state.events.touch_8.clientY = 3;
        state.animation.instances.grid_64 = 22;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
        console.log('mouse is in clientX:6 x clientY:4 grid');
        state.events.touch_8.clientX = 6;
        state.events.touch_8.clientY = 4;
        state.animation.instances.grid_64 = 30;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
        console.log('mouse is in clientX:6 x clientY:5 grid');
        state.events.touch_8.clientX = 6;
        state.events.touch_8.clientY = 5;
        state.animation.instances.grid_64 = 38;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
        console.log('mouse is in clientX:6 x clientY:6 grid');
        state.events.touch_8.clientX = 6;
        state.events.touch_8.clientY = 6;
        state.animation.instances.grid_64 = 46;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
        console.log('mouse is in clientX:6 x clientY:7 grid');
        state.events.touch_8.clientX = 6;
        state.events.touch_8.clientY = 7;
        state.animation.instances.grid_64 = 54;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 5 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 6 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
        console.log('mouse is in clientX:6 x clientY:8 grid');
        state.events.touch_8.clientX = 6;
        state.events.touch_8.clientY = 8;
        state.animation.instances.grid_64 = 62;
      }

      ; // x axis: 7

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
        console.log('mouse is in clientX:7 x clientY:1 grid');
        state.events.touch_8.clientX = 7;
        state.events.touch_8.clientY = 1;
        state.animation.instances.grid_64 = 7;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
        console.log('mouse is in clientX:7 x clientY:2 grid');
        state.events.touch_8.clientX = 7;
        state.events.touch_8.clientY = 2;
        state.animation.instances.grid_64 = 15;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
        console.log('mouse is in clientX:7 x clientY:3 grid');
        state.events.touch_8.clientX = 7;
        state.events.touch_8.clientY = 3;
        state.animation.instances.grid_64 = 23;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
        console.log('mouse is in clientX:7 x clientY:4 grid');
        state.events.touch_8.clientX = 7;
        state.events.touch_8.clientY = 4;
        state.animation.instances.grid_64 = 31;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
        console.log('mouse is in clientX:7 x clientY:5 grid');
        state.events.touch_8.clientX = 7;
        state.events.touch_8.clientY = 5;
        state.animation.instances.grid_64 = 39;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
        console.log('mouse is in clientX:7 x clientY:6 grid');
        state.events.touch_8.clientX = 7;
        state.events.touch_8.clientY = 6;
        state.animation.instances.grid_64 = 47;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
        console.log('mouse is in clientX:7 x clientY:7 grid');
        state.events.touch_8.clientX = 7;
        state.events.touch_8.clientY = 7;
        state.animation.instances.grid_64 = 55;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 6 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 7 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
        console.log('mouse is in clientX:7 x clientY:8 grid');
        state.events.touch_8.clientX = 7;
        state.events.touch_8.clientY = 8;
        state.animation.instances.grid_64 = 63;
      }

      ; // x axis: 8

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 0 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 1) {
        console.log('mouse is in clientX:8 x clientY:1 grid');
        state.events.touch_8.clientX = 8;
        state.events.touch_8.clientY = 1;
        state.animation.instances.grid_64 = 8;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 1 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 2) {
        console.log('mouse is in clientX:8 x clientY:2 grid');
        state.events.touch_8.clientX = 8;
        state.events.touch_8.clientY = 2;
        state.animation.instances.grid_64 = 16;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 2 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 3) {
        console.log('mouse is in clientX:8 x clientY:3 grid');
        state.events.touch_8.clientX = 8;
        state.events.touch_8.clientY = 3;
        state.animation.instances.grid_64 = 24;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 3 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 4) {
        console.log('mouse is in clientX:8 x clientY:4 grid');
        state.events.touch_8.clientX = 8;
        state.events.touch_8.clientY = 4;
        state.animation.instances.grid_64 = 32;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 4 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 5) {
        console.log('mouse is in clientX:8 x clientY:5 grid');
        state.events.touch_8.clientX = 8;
        state.events.touch_8.clientY = 5;
        state.animation.instances.grid_64 = 40;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 5 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 6) {
        console.log('mouse is in clientX:8 x clientY:6 grid');
        state.events.touch_8.clientX = 8;
        state.events.touch_8.clientY = 6;
        state.animation.instances.grid_64 = 48;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 6 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 7) {
        console.log('mouse is in clientX:8 x clientY:7 grid');
        state.events.touch_8.clientX = 8;
        state.events.touch_8.clientY = 7;
        state.animation.instances.grid_64 = 56;
      }

      ;

      if (state.events.touch.clientX > state.ux.dimensions.width8 * 7 && state.events.touch.clientY > state.ux.dimensions.height8 * 7 && state.events.touch.clientX < state.ux.dimensions.width8 * 8 && state.events.touch.clientY < state.ux.dimensions.height8 * 8) {
        console.log('mouse is in clientX:8 x clientY:8 grid');
        state.events.touch_8.clientX = 8;
        state.events.touch_8.clientY = 8;
        state.animation.instances.grid_64 = 64;
      }

      ;

      _index.default.Handle_get_state_from_events();
    });
    root.addEventListener("touchstart", function (event) {
      state = _index.default.Handle_return_state();
      state.events.touch.enter = true;
      state.events.touch.leave = false;
      state.events.touch.start.clientX = event.changedTouches[0].clientX;
      state.events.touch.start.clientY = event.changedTouches[0].clientY;

      _index.default.Handle_get_state_from_events();
    });
    root.addEventListener("touchend", function (event) {
      state = _index.default.Handle_return_state();
      state.events.touch.enter = false;
      state.events.touch.leave = true;
      state.events.touch.end.clientX = event.changedTouches[0].clientX;
      state.events.touch.end.clientY = event.changedTouches[0].clientY;
      state.events.touch.dragDistanceX = event.changedTouches[0].clientX - state.events.touch.start.clientX;
      state.events.touch.dragDistanceY = event.changedTouches[0].clientY - state.events.touch.start.clientY;
      state.events.touch.drag.clientX = event.changedTouches[0].clientX - state.events.touch.start.clientX;
      state.events.touch.drag.clientY = event.changedTouches[0].clientY - state.events.touch.start.clientY;

      if (document.getElementById('rotationAngle') != null) {
        console.log('event.changedTouches[0].rotationAngle');
        console.log(event.changedTouches[0].rotationAngle);
        document.getElementById('rotationAngle').innerHTML = event.changedTouches[0].rotationAngle;
      }

      ;

      if (document.getElementById('radiusX') != null) {
        console.log('event.changedTouches[0].radius');
        console.log(event.changedTouches[0].radiusX);
        document.getElementById('radiusX').innerHTML = event.changedTouches[0].radiusX;
        state.events.touch.radiusX = event.changedTouches[0].radiusX;
      }

      ;

      if (document.getElementById('radiusY') != null) {
        console.log('event.changedTouches[0].radius');
        console.log(event.changedTouches[0].radiusY);
        document.getElementById('radiusY').innerHTML = event.changedTouches[0].radiusY;
        state.events.touch.radiusY = event.changedTouches[0].radiusX;
      }

      ;

      if (document.getElementById('dragDistanceX') != null) {
        console.log('state.events.touch.dragDistanceX');
        console.log(state.events.touch.dragDistanceX);
        document.getElementById('dragDistanceXStart').innerHTML = state.events.touch.start.clientX;
        document.getElementById('dragDistanceX').innerHTML = state.events.touch.dragDistanceX;
        document.getElementById('dragDistanceXEnd').innerHTML = state.events.touch.end.clientX;
      }

      ;

      if (document.getElementById('dragDistanceY') != null) {
        console.log('state.events.touch.dragDistanceY');
        console.log(state.events.touch.dragDistanceY);
        document.getElementById('dragDistanceYStart').innerHTML = state.events.touch.start.clientY;
        document.getElementById('dragDistanceY').innerHTML = state.events.touch.dragDistanceY;
        document.getElementById('dragDistanceYEnd').innerHTML = state.events.touch.end.clientY;
      }

      ;

      if (state.events.touch.dragDistanceX < -250) {
        alert('dragDistanceX < -250, from right to left / gui'); // gui
        // top

        state.ui.gui.top.display = true;
        state.ui.gui.top.transform = !state.ui.gui.top.transform; // top right

        state.ui.gui.top_right.display = true;
        state.ui.gui.top_right.transform = !state.ui.gui.top_right.transform; // top left

        state.ui.gui.top_left.display = true;
        state.ui.gui.top_left.transform = !state.ui.gui.top_left.transform; // bottom

        state.ui.gui.bottom.display = true;
        state.ui.gui.bottom.transform = !state.ui.gui.bottom.transform; // bottom right

        state.ui.gui.bottom_right.display = true;
        state.ui.gui.bottom_right.transform = !state.ui.gui.bottom_right.transform; // bottom left

        state.ui.gui.bottom_left.display = true;
        state.ui.gui.bottom_left.transform = !state.ui.gui.bottom_left.transform; // right

        state.ui.gui.right.display = true;
        state.ui.gui.right.transform = !state.ui.gui.right.transform; // left

        state.ui.gui.left.display = true;
        state.ui.gui.left.transform = !state.ui.gui.left.transform;
      }

      if (state.events.touch.dragDistanceY < -250) {
        alert('dragDistanceY < -250 from up to down');
      }

      if (state.events.touch.dragDistanceX > 250) {
        alert('dragDistanceX > 250, from left to right / pages'); // model
        //pages

        state.ui.modal.page.right.display = true;
        state.ui.modal.page.right.transform = !state.ui.modal.page.right.transform;
      }

      if (state.events.touch.dragDistanceY > 250) {
        alert('dragDistanceY > 250 from down to up');
      }

      ;

      _index.default.Handle_get_state_from_events();
    });
  }

  ;

  window.ondevicemotion = function (event) {
    state = _index.default.Handle_return_state(); // event.accelerationIncludingGravity.x
    // event.accelerationIncludingGravity.y
    // event.accelerationIncludingGravity.z
    ///alert('event.accelerationIncludingGravity.x: ' + event.accelerationIncludingGravity.x);
    ///alert('event.accelerationIncludingGravity.y: ' + event.accelerationIncludingGravity.y);
    ///alert('event.accelerationIncludingGravity.z: ' + event.accelerationIncludingGravity.z);

    var event_accelerationIncludingGravity_x = event.accelerationIncludingGravity.x;
    var event_accelerationIncludingGravity_y = event.accelerationIncludingGravity.y;
    var event_accelerationIncludingGravity_z = event.accelerationIncludingGravity.z;

    if (document.getElementById('event_accelerationIncludingGravity_x') != null) {
      document.getElementById('event_accelerationIncludingGravity_x').innerHTML = event_accelerationIncludingGravity_x;

      if (event.accelerationIncludingGravity.x > 8) {
        document.getElementById('last_action').innerHTML = 'shook right'; // key_pressed

        alert('shook right/ vr mode');

        _index.default.HANDLE_animation_gui_show();
      }

      ;

      if (event.accelerationIncludingGravity.x < -8) {
        document.getElementById('last_action').innerHTML = 'shook left'; // key_pressed

        alert('shook left/ vr mode');

        _index.default.HANDLE_animation_gui_hide();
      }

      ;
    }

    ;

    if (document.getElementById('event_accelerationIncludingGravity_y') != null) {
      document.getElementById('event_accelerationIncludingGravity_y').innerHTML = event_accelerationIncludingGravity_y;

      if (event.accelerationIncludingGravity.y > 8) {
        document.getElementById('last_action').innerHTML = 'upside down';
      }

      ;

      if (event.accelerationIncludingGravity.y < -8) {
        document.getElementById('last_action').innerHTML = 'rightside up';
      }

      ;
    }

    ;

    if (document.getElementById('event_accelerationIncludingGravity_z') != null) {
      document.getElementById('event_accelerationIncludingGravity_z').innerHTML = event_accelerationIncludingGravity_z;

      if (event.accelerationIncludingGravity.z > 8) {
        document.getElementById('last_action').innerHTML = 'overhead';
      }

      ;

      if (event.accelerationIncludingGravity.z < -8) {
        document.getElementById('last_action').innerHTML = 'laid flat';
      }

      ;
    }

    ;

    _index.default.Handle_get_state_from_events();
  };

  window.ondeviceorientation = function (event) {
    state = _index.default.Handle_return_state(); // event.alpha
    // event.beta
    // event.gamma
    ///alert('event.alpha: ' + event.alpha);
    ///alert('event.beta: ' + event.beta);
    ///alert('event.gamma: ' + event.gamma);

    var event_alpha = event.alpha;
    var event_beta = event.beta;
    var event_gamma = event.gamma;

    if (document.getElementById('event_alpha') != null) {
      document.getElementById('event_alpha').innerHTML = event_alpha;
      state.events.touch.alpha = event_alpha;
    }

    ;

    if (document.getElementById('event_beta') != null) {
      document.getElementById('event_beta').innerHTML = event_beta;
      state.events.touch.beta = event_beta;
    }

    ;

    if (document.getElementById('event_gamma') != null) {
      document.getElementById('event_gamma').innerHTML = event_gamma;
      state.events.touch.gamma = event_gamma;
    }

    ;
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    var success = function success(pos) {
      var crd = pos.coords;

      if (document.getElementById('location') != null) {
        document.getElementById('location').innerHTML = "Your current position is: Latitude : ".concat(crd.latitude, " Longitude: ").concat(crd.longitude, " More or less ").concat(crd.accuracy, " meters.");
      }

      ;
    };

    var error = function error(err) {
      console.warn("ERROR(".concat(err.code, "): ").concat(err.message));
    };

    navigator.geolocation.getCurrentPosition(success, error, options);

    _index.default.Handle_get_state_from_events();
  };
}(), 1000);

var Handle_return_state_from_events = function Handle_return_state_from_events() {
  return state;
};

var _default = {
  state: state,
  Handle_return_state_from_events: Handle_return_state_from_events
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
  classList: '',
  innerHTML: "\n\n        <div id=\"cardboard_color\" class=\"easing_1025 width_100 height_100 bottom_0 right_0 position_absolute margin_auto\">\n          \n          <div id=\"top_left\" class=\"easing_01 width_100 height_100 bottom_100 right_100 position_absolute margin_auto bg_yellow\"></div>\n          \n          <div id=\"top_right\" class=\"easing_01 width_100 height_100 bottom_100 left_100 position_absolute margin_auto bg_yellow\"></div>\n          \n          <div id=\"top\" class=\"easing_01 width_100 height_100 bottom_100 left_0 right_0 position_absolute margin_auto bg_yellow\"></div>\n          \n          <div id=\"left\" class=\"easing_01 width_100 height_100 bottom_0 right_100 position_absolute margin_auto bg_yellow\"></div>\n\n          <div id=\"left_outside\" class=\"easing_01 width_100 height_100 bottom_0 right_200 position_absolute margin_auto bg_yellow\"></div>\n          \n          <div id=\"center\" class=\"easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto bg_white\">\n            \n            <div id=\"paint_animation_paint_can_svg\" class=\"easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n            </div>\n            <div id=\"paint_animation_paint_can_hand_svg\" class=\"easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n            </div>\n            <div id=\"paint_animation_svg_4\" class=\"easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n            </div>\n\n          </div>\n\n          <div id=\"right\" class=\"easing_01 width_100 height_100 bottom_0 left_100 position_absolute margin_auto bg_yellow\"></div>\n          \n          <div id=\"bottom\" class=\"easing_01 width_100 height_100 top_100 left_0 right_0 position_absolute margin_auto bg_yellow\"></div>\n          \n          <div id=\"bottom_left\" class=\"easing_01 width_100 height_100 top_100 right_100 position_absolute margin_auto bg_yellow\"></div>\n          \n          <div id=\"bottom_right\" class=\"easing_01 width_100 height_100 top_100 left_100 position_absolute margin_auto bg_yellow\"></div>\n        \n        </div>\n\n        <div id=\"cardboard_bg\" class=\"easing_1 width_100 height_100 bottom_0 right_0 position_absolute margin_auto\">\n          \n          <div id=\"top_left\" class=\"easing_01 width_100 height_100 bottom_100 right_100 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"top_right\" class=\"easing_01 width_100 height_100 bottom_100 left_100 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"top\" class=\"easing_01 width_100 height_100 bottom_100 left_0 right_0 position_absolute margin_auto\">\n\n              <div id=\"bg_stage_set_top\" class=\"easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none\">\n\n                <div class=\"stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                \n              </div>\n\n              <div id=\"bg_stage_set_2_top\" class=\"easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none\">\n\n                <div class=\"bg_yellow easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                \n                <div class=\"stage_wall_left opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                <div class=\"stage_wall_right opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                <div class=\"stage_ceiling_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                <div class=\"stage_floor_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                \n                <div class=\"stage_wall_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n               \n                <div class=\"stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n\n                <div id=\"wall_logo\" class=\"width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                            \n                  <div class=\"calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                      <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                        <div id=\"logo_center_container\" class=\"width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto opacity_05\">\n                          <div id=\"logo\" class=\"gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                          <div id=\"logo\" class=\"gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                          <div id=\"logo\" class=\"gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                          <div id=\"logo\" class=\"gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                        </div>\n\n                      </div>\n\n                  </div>\n\n                </div>\n                \n              </div>\n\n          </div>\n          \n          <div id=\"left\" class=\"easing_01 width_100 height_100 bottom_0 right_100 position_absolute margin_auto\">\n\n              <div id=\"bg_stage_set_left\" class=\"easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none\">\n\n                <div class=\"stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                \n              </div>\n\n\n            <div id=\"bg_stage_set_2_left\" class=\"easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none\">\n\n              <div class=\"bg_yellow easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              \n              <div class=\"stage_wall_left opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              <div class=\"stage_wall_right opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              <div class=\"stage_ceiling_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              <div class=\"stage_floor_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              \n              <div class=\"stage_wall_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n             \n              <div class=\"stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n\n              <div id=\"wall_logo\" class=\"width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                          \n                <div class=\"calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                    <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                      <div id=\"logo_center_container\" class=\"width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto opacity_05\">\n                        <div id=\"logo\" class=\"gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                        <div id=\"logo\" class=\"gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                        <div id=\"logo\" class=\"gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                        <div id=\"logo\" class=\"gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                      </div>\n\n                    </div>\n\n                </div>\n\n              </div>\n              \n            </div>\n\n          </div>\n\n          <div id=\"left_outside\" class=\"easing_01 width_100 height_100 bottom_0 right_200 position_absolute margin_auto\">\n\n              <div id=\"bg_stage_set_left_outside\" class=\"easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none\">\n\n                <div class=\"stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                \n              </div>\n\n              <div id=\"bg_stage_set_2_left_outside\" class=\"easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none\">\n\n                <div class=\"bg_yellow easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                \n                <div class=\"stage_wall_left opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                <div class=\"stage_wall_right opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                <div class=\"stage_ceiling_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                <div class=\"stage_floor_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                \n                <div class=\"stage_wall_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n               \n                <div class=\"stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n\n                <div id=\"wall_logo\" class=\"width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                            \n                  <div class=\"calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                      <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                        <div id=\"logo_center_container\" class=\"width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto opacity_05\">\n                          <div id=\"logo\" class=\"gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                          <div id=\"logo\" class=\"gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                          <div id=\"logo\" class=\"gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                          <div id=\"logo\" class=\"gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                        </div>\n\n                      </div>\n\n                  </div>\n\n                </div>\n                \n              </div>\n\n          </div>\n          \n          <div id=\"center\" class=\"easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n            <div id=\"bg_stage_set_1_center\" class=\"easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none\">\n            \n              <div class=\"bg_yellow easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              \n              <div class=\"stage_wall_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n             \n              <div class=\"stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              \n            </div>\n\n            <div id=\"bg_stage_set_2_center\" class=\"easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none\">\n\n              <div class=\"bg_yellow easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              \n              <div class=\"stage_wall_left opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              <div class=\"stage_wall_right opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              <div class=\"stage_ceiling_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              <div class=\"stage_floor_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              \n              <div class=\"stage_wall_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n             \n              <div class=\"stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n\n              <div id=\"wall_logo\" class=\"width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                          \n                <div class=\"calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                    <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                      <div id=\"logo_center_container\" class=\"width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto opacity_05\">\n                        <div id=\"logo\" class=\"gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                        <div id=\"logo\" class=\"gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                        <div id=\"logo\" class=\"gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                        <div id=\"logo\" class=\"gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                      </div>\n\n                    </div>\n\n                </div>\n\n              </div>\n              \n            </div>\n\n            <div id=\"bg_stage_set_3_center\" class=\"easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none\">\n\n              <div class=\"bg_light_yellow_1 easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              \n              <div class=\"stage_wall_left opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              <div class=\"stage_wall_right opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              <div class=\"stage_ceiling_90_light_yellow_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              <div class=\"stage_floor_90_light_yellow_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              \n              <div class=\"stage_wall_90_light_yellow_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n             \n              <div class=\"stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n\n              <div id=\"wall_logo\" class=\"width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                          \n                <div class=\"calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                    <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                      <div id=\"logo_center_container\" class=\"width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto opacity_05\">\n                        <div id=\"logo\" class=\"gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                        <div id=\"logo\" class=\"gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                        <div id=\"logo\" class=\"gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                        <div id=\"logo\" class=\"gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                      </div>\n\n                    </div>\n\n                </div>\n\n              </div>\n              \n            </div>\n\n            <div id=\"bg_stage_set_4_center\" class=\"easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none\">\n\n              <div class=\"bg_dark_yellow_1 easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              \n              <div class=\"stage_wall_left opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              <div class=\"stage_wall_right opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              <div class=\"stage_ceiling_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              <div class=\"stage_floor_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              \n              <div class=\"stage_wall_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n             \n              <div class=\"stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n\n              <div id=\"wall_logo\" class=\"width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                          \n                <div class=\"calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                    <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                      <div id=\"logo_center_container\" class=\"width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto opacity_05\">\n                        <div id=\"logo\" class=\"gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                        <div id=\"logo\" class=\"gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                        <div id=\"logo\" class=\"gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                        <div id=\"logo\" class=\"gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                      </div>\n\n                    </div>\n\n                </div>\n\n              </div>\n              \n            </div>\n\n            <div id=\"bg_stage_set_5_center\" class=\"easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none\">\n\n              <div class=\"bg_dark_pink_7 easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              \n              <div class=\"stage_wall_left width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              <div class=\"stage_wall_right width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              <div class=\"stage_ceiling_90_dark_yellow_9 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              <div class=\"stage_floor_90_dark_yellow_9 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n              \n              <div class=\"stage_wall_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n             \n              <div class=\"stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n\n              <div id=\"wall_logo\" class=\"width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                          \n                <div class=\"calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                    <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                      <div id=\"logo_center_container\" class=\"width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto opacity_05\">\n                        <div id=\"logo\" class=\"gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                        <div id=\"logo\" class=\"gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                        <div id=\"logo\" class=\"gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                        <div id=\"logo\" class=\"gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                      </div>\n\n                    </div>\n\n                </div>\n\n              </div>\n              \n            </div>\n\n            <div id=\"bg_outside\" class=\"transform_translate3d_top0 easing_025 display_none opacity_0 \">\n              <div id=\"set\" class=\"opacity_05\">\n                <div class=\"outside_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0\"></div>\n              </div>\n            </div>\n\n            <div id=\"bg_sky\" class=\"transform_translate3d_top0 easing_025 display_none opacity_0 \">\n              <div id=\"set\" class=\"opacity_05\">\n                <div class=\"sky_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0\"></div>\n              </div>\n            </div>\n\n            <div id=\"bg_city\" class=\"transform_translate3d_top0 easing_025 display_none opacity_0 \">\n              <div id=\"set\" class=\"opacity_05\">\n                <div class=\"city_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0\"></div>\n              </div>\n            </div>\n            \n            <div id=\"bg_building\" class=\"transform_translate3d_top0 easing_025 display_none opacity_0 \">\n              <div id=\"set\" class=\"opacity_05\">\n                <div class=\"building_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0\"></div>\n              </div>\n            </div>\n\n            <div id=\"bg_park\" class=\"transform_translate3d_top0 easing_025 display_none opacity_0 \">\n              <div id=\"set\" class=\"opacity_05\">\n                <div class=\"park_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0\"></div>\n              </div>\n            </div>\n\n            <div id=\"bg_cliff\" class=\"transform_translate3d_top0 easing_025 display_none opacity_0 \">\n              <div id=\"set\" class=\"opacity_09\">\n                <div class=\"cliff_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0\"></div>\n              </div>\n            </div>\n\n            <div id=\"bg_indoor\" class=\"transform_translate3d_top0 easing_025 display_none opacity_0 \">\n              <div id=\"set\" class=\"opacity_09\">\n                <div class=\"indoor_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0\"></div>\n              </div>\n            </div>\n\n            <div id=\"bg_basement\" class=\"transform_translate3d_top0 easing_025 display_none opacity_0 \">\n              <div id=\"set\" class=\"opacity_09\">\n                <div class=\"basement_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0\"></div>\n              </div>\n            </div>\n\n          </div>\n\n          <div id=\"right\" class=\"easing_01 width_100 height_100 bottom_0 left_100 position_absolute margin_auto\">\n\n              <div id=\"bg_stage_set_right\" class=\"easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none\">\n\n                <div class=\"stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                \n              </div>\n\n              <div id=\"bg_stage_set_2_right\" class=\"easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none\">\n\n                <div class=\"bg_yellow easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                \n                <div class=\"stage_wall_left opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                <div class=\"stage_wall_right opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                <div class=\"stage_ceiling_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                <div class=\"stage_floor_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                \n                <div class=\"stage_wall_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n               \n                <div class=\"stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n\n                <div id=\"wall_logo\" class=\"width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                            \n                  <div class=\"calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                      <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                        <div id=\"logo_center_container\" class=\"width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto opacity_05\">\n                          <div id=\"logo\" class=\"gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                          <div id=\"logo\" class=\"gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                          <div id=\"logo\" class=\"gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                          <div id=\"logo\" class=\"gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                        </div>\n\n                      </div>\n\n                  </div>\n\n                </div>\n                \n              </div>\n\n          </div>\n          \n          <div id=\"bottom\" class=\"easing_01 width_100 height_100 top_100 left_0 right_0 position_absolute margin_auto\">\n\n              <div id=\"bg_stage_set_bottom\" class=\"easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none\">\n\n                <div class=\"stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                \n              </div>\n\n              <div id=\"bg_stage_set_2_bottom\" class=\"easing_025 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none\">\n\n                <div class=\"bg_yellow easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                \n                <div class=\"stage_wall_left opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                <div class=\"stage_wall_right opacity_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                <div class=\"stage_ceiling_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                <div class=\"stage_floor_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                \n                <div class=\"stage_wall_90_yellow width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n               \n                <div class=\"stage_wall_lines_90 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n\n                <div id=\"wall_logo\" class=\"width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                            \n                  <div class=\"calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                      <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                        <div id=\"logo_center_container\" class=\"width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto opacity_05\">\n                          <div id=\"logo\" class=\"gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                          <div id=\"logo\" class=\"gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                          <div id=\"logo\" class=\"gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                          <div id=\"logo\" class=\"gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                        </div>\n\n                      </div>\n\n                  </div>\n\n                </div>\n                \n              </div>\n\n          </div>\n          \n          <div id=\"bottom_left\" class=\"easing_01 width_100 height_100 top_100 right_100 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"bottom_right\" class=\"easing_01 width_100 height_100 top_100 left_100 position_absolute margin_auto\">\n\n          </div>\n        \n        </div>\n    \n        <div id=\"bg_texture\" class=\"transform_translate3d_top0 easing_025 display_none opacity_0 \">\n          <div class=\"opacity_01\">\n            <div class=\"accent_noise_1 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0\"></div>\n          </div>\n        </div>\n\n    "
}, {
  parent: 'component_app_animation_midground',
  id: '',
  classList: '',
  innerHTML: "\n\n        <div id=\"cardboard_mg\" class=\"easing_075 width_100 height_100 bottom_0 right_0 position_absolute margin_auto\">\n          \n          <div id=\"top_left\" class=\"easing_01 width_100 height_100 bottom_100 right_100 position_absolute margin_auto\"></div>\n          \n          <div id=\"top_right\" class=\"easing_01 width_100 height_100 bottom_100 left_100 position_absolute margin_auto\"></div>\n          \n          <div id=\"top\" class=\"easing_01 width_100 height_100 bottom_100 left_0 right_0 position_absolute margin_auto\">\n\n              <div id=\"mg_stage_set_1_top\" class=\"easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none\">\n                \n\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_6205 left_-1205 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay2 height_25 width_25 position_absolute top_6205 left_0 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay3 height_25 width_25 position_absolute top_6205 left_1205 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay4 height_25 width_25 position_absolute top_6205 left_25 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay5 height_25 width_25 position_absolute top_6205 left_3705 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay6 height_25 width_25 position_absolute top_6205 left_50 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay7 height_25 width_25 position_absolute top_6205 left_6205 margin_auto\"></div>\n\n              </div>\n          </div>\n          \n          <div id=\"left\" class=\"easing_01 width_100 height_100 bottom_0 right_100 position_absolute margin_auto\">\n\n\n              <div id=\"mg_stage_set_1_left\" class=\"easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none\">\n                \n\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_6205 left_-1205 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay2 height_25 width_25 position_absolute top_6205 left_0 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay3 height_25 width_25 position_absolute top_6205 left_1205 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay4 height_25 width_25 position_absolute top_6205 left_25 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay5 height_25 width_25 position_absolute top_6205 left_3705 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay6 height_25 width_25 position_absolute top_6205 left_50 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay7 height_25 width_25 position_absolute top_6205 left_6205 margin_auto\"></div>\n\n              </div>\n\n          </div>\n\n          <div id=\"left_outside\" class=\"easing_01 width_100 height_100 bottom_0 right_200 position_absolute margin_auto\">\n\n              <div id=\"mg_stage_set_1_left_outside\" class=\"easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none\">\n                \n\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_6205 left_-1205 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_6205 left_0 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_6205 left_1205 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_6205 left_25 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_6205 left_3705 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_6205 left_50 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_6205 left_6205 margin_auto\"></div>\n\n              </div>\n            </div>\n          \n          <div id=\"center\" class=\"easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n              <div id=\"mg_stage_set_1_center\" class=\"easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none\">\n                \n              </div>\n\n              <div id=\"mg_stage_set_2_center\" class=\"easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none\">\n\n                    <div id=\"npc\" class=\"turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay1 height_25 width_25 position_absolute top_0 left_-1205 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay2 height_3705 width_3705 position_absolute top_0 left_0 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay3 height_50 width_50 position_absolute top_0 left_1205 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay4 height_25 width_25 position_absolute top_0 left_25 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay5 height_3705 width_3705 position_absolute top_0 left_3705 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay6 height_50 width_50 position_absolute top_0 left_50 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay7 height_25 width_25 position_absolute top_0 left_6205 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay8 height_3705 width_3705 position_absolute top_0 left_75 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_lamp_y_1_x_1 animated1 enterTopBounce delay9 height_50 width_50 position_absolute top_0 left_8705 margin_auto\"></div>\n\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay2 height_25 width_25 position_absolute top_6205 left_0 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay3 height_25 width_25 position_absolute top_6205 left_1205 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay4 height_25 width_25 position_absolute top_6205 left_25 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay5 height_25 width_25 position_absolute top_6205 left_3705 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay6 height_25 width_25 position_absolute top_6205 left_50 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay7 height_25 width_25 position_absolute top_6205 left_6205 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 animated1 enterTopBounce delay8 height_25 width_25 position_absolute top_6205 left_75 margin_auto\"></div>\n\n              </div>\n\n\n              <div id=\"mg_stage_set_2_interactive_center\" class=\"easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none\">\n\n                    <div class=\"animated1 enterTopBounce delay2 stage_workspace width_75 height_75 position_absolute top_50 left_0 right_0 margin_auto\"></div>\n\n                </div>\n\n          </div>\n\n          <div id=\"right\" class=\"easing_01 width_100 height_100 bottom_0 left_100 position_absolute margin_auto\">\n\n              <div id=\"mg_stage_set_1_right\" class=\"easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none\">\n                \n\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_-1205 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_0 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_1205 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_25 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_3705 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_50 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_6205 margin_auto\"></div>\n\n              </div>\n          </div>\n          \n          <div id=\"bottom\" class=\"easing_01 width_100 height_100 top_100 left_0 right_0 position_absolute margin_auto\">\n\n              <div id=\"mg_stage_set_1_bottom\" class=\"easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none\">\n                \n\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_-1205 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_0 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_1205 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_25 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_3705 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_50 margin_auto\"></div>\n                    <div id=\"npc\" class=\"turnaround_desk_y_1_x_1 height_25 width_25 position_absolute top_6205 left_6205 margin_auto\"></div>\n\n              </div>\n          </div>\n          \n          <div id=\"bottom_left\" class=\"easing_01 width_100 height_100 top_100 right_100 position_absolute margin_auto\"></div>\n          \n          <div id=\"bottom_right\" class=\"easing_01 width_100 height_100 top_100 left_100 position_absolute margin_auto\"></div>\n        \n        </div>\n\n        <div id=\"mg_interactive\" class=\"transform_translate3d_top0 easing_025 display_none opacity_0 \">\n          <div id=\"interactive_player\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto easing_01 display_none opacity_0\">\n            <div id=\"interactive_player_motion\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto enterTopBounce animated1 delay1\">\n            <div id=\"player\" class=\"frames_turnaround_nigel_full_body_standing_y_1_x_1 width_50 height_50 position_absolute margin_auto\">\n\n                <span id=\"wp_component_meta\" class=\"position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_auto\">\n                 \n                 <span class=\"position_relative top_0vh left_0vh easing_01 width_100 text_align_center float_right pseudo_arrow_bottom_right_outside_white\">\n                    <div class=\"overflow_hidden width_100 position_relative top_0 left_0 display_flex_flow calc_02vh border_radius_1vh box_shadow_bottom_left_1vh_dark box_shadow_hover_none \">\n                       <div class=\"width_100 position_relative float_left padding_1vh bg_white border_01vh_dark_yellow_9 border_radius_1vh\">\n\n                          <span class=\"position_relative bg_yellow margin_1vh border_radius_1vh calc_2vh_width float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n                              <span class=\"font_gaegu font_size_2vh line_height_5vh position_relative float_left\">\n                              <div class=\"z_index_1 gui_arrow_left width_205vh height_205vh float_left position_absolute right_100 top_0 bottom_0 margin_auto\"></div>\n                                <div class=\"webkit_box_pack_center webkit_box_align display_webkit_box width_100 float_left\"><b class=\"float_left position_relative\">y_axis: </b><div id=\"interactive_particle_dialogue_y\" class=\"float_left position_relative\">null</div></div>\n                                <div class=\"webkit_box_pack_center webkit_box_align display_webkit_box width_100 float_left\"><b class=\"float_left position_relative\">x_axis: </b><div id=\"interactive_particle_dialogue_x\" class=\"float_left position_relative\">null</div></div>\n                              </span>\n                          </span>\n\n                       </div>\n                    </div>\n                 </span>\n\n                 <div class=\"gui_enter_buttons position_absolute bottom_-6025vh left_0 right_0 width_10vh height_10vh margin_auto float_left\"></div>\n\n                </span>\n\n            </div>\n          </div>\n          </div>\n        </div>\n\n    "
}, {
  parent: 'component_app_animation_foreground',
  id: '',
  classList: '',
  innerHTML: "\n\n        <div id=\"cardboard_fg\" class=\"easing_05 width_100 height_100 bottom_0 right_0 position_absolute margin_auto\">\n          \n          <div id=\"top_left\" class=\"easing_01 width_100 height_100 bottom_100 right_100 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"top_right\" class=\"easing_01 width_100 height_100 bottom_100 left_100 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"top\" class=\"easing_01 width_100 height_100 bottom_100 left_0 right_0 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"left\" class=\"easing_01 width_100 height_100 bottom_0 right_100 position_absolute margin_auto\">\n\n          </div>\n\n          <div id=\"left_outside\" class=\"easing_01 width_100 height_100 bottom_0 right_200 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"center\" class=\"easing_01 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n           \n            <div id=\"fg_office\" class=\"transform_translate3d_top0 easing_025 display_none opacity_0 \">\n              \n              <div id=\"fg_office_set\" class=\"easing_01 animated1 fadeOut width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto opacity_0 display_none\">\n                \n                <div id=\"focus\" class=\"animated1 enterTopBounce delay2 width_100 height_100 position_absolute top_0 left_0 right_0 margin_auto\">\n                  <div id=\"double_focus\" class=\"animated1 enterTopBounce delay2 width_100 height_100 position_absolute top_0 left_0 right_0 margin_auto\">\n                  <div id=\"fg_set\" class=\"easing_01 width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                    \n                    <div id=\"fg_item\" class=\"stage_ladder height_100 width_25 position_absolute top_1205 left_-1205 margin_auto\"></div>\n                      \n                    <div id=\"light_container\" class=\"width_50 height_25 position_absolute top_0 left_0 margin_auto\">\n                      <div id=\"light\" class=\"pieces_office_shoplight_on width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                    </div>\n\n                    <div id=\"light_container\" class=\"width_50 height_25 position_absolute top_0 left_50 margin_auto\">\n                      <div id=\"light\" class=\"pieces_office_shoplight_on width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                    </div>\n\n                    <div id=\"fg_item\" class=\"stage_ladder height_100 width_25 position_absolute top_1205 right_-1205 margin_auto\"></div>\n                     \n                  </div>\n                </div>\n\n              </div>\n              \n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"right\" class=\"easing_01 width_100 height_100 bottom_0 left_100 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"bottom\" class=\"easing_01 width_100 height_100 top_100 left_0 right_0 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"bottom_left\" class=\"easing_01 width_100 height_100 top_100 right_100 position_absolute margin_auto\">\n\n          </div>\n          \n          <div id=\"bottom_right\" class=\"easing_01 width_100 height_100 top_100 left_100 position_absolute margin_auto\">\n\n          </div>\n        \n        </div>\n\n        <div id=\"draw_hand\" class=\"display_none gui_draw_hand_1 infinite hand_move animated2 width_25 height_25 top_0 left_0 position_absolute margin_auto\">\n        </div>\n\n        <div id=\"fg_effect\" class=\"transform_translate3d_top0 easing_025 display_none opacity_0 \">\n          <div class=\"effect_vignette width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0\"></div>\n        </div>\n\n    "
}, {
  parent: 'component_app_content',
  id: '',
  classList: '',
  innerHTML: "\n\n      ".concat(_elements.default.component_app_content_root(), "\n\n    ")
}, {
  parent: 'component_app_modals',
  id: '',
  classList: '',
  innerHTML: "\n    <div id=\"layer_modals\">\n\n      ".concat(_elements.default.element_page_left, "\n      ").concat(_elements.default.element_page_bottom, "\n      ").concat(_elements.default.element_page_right, "\n\n      ").concat(_elements.default.element_pop_top, "\n      ").concat(_elements.default.element_pop_left, "\n      ").concat(_elements.default.element_pop_bottom, "\n      ").concat(_elements.default.element_pop_right, "\n\n      ").concat(_elements.default.element_page_top, "\n\n      ").concat(_elements.default.element_morph_top, "\n      ").concat(_elements.default.element_morph_left, "\n      ").concat(_elements.default.element_morph_bottom, "\n      ").concat(_elements.default.element_morph_right, "\n\n      ").concat(_elements.default.element_fade_top, "\n      ").concat(_elements.default.element_fade_left, "\n      ").concat(_elements.default.element_fade_bottom, "\n      ").concat(_elements.default.element_fade_right, "\n\n      ").concat(_elements.default.element_gradient_top, "\n      ").concat(_elements.default.element_gradient_left, "\n      ").concat(_elements.default.element_gradient_bottom, "\n      ").concat(_elements.default.element_gradient_right, "\n\n      ").concat(_elements.default.element_corner_top, "\n      ").concat(_elements.default.element_corner_left, "\n      ").concat(_elements.default.element_corner_bottom, "\n      ").concat(_elements.default.element_corner_right, "\n\n      ").concat(_elements.default.element_overlay_top, "\n      ").concat(_elements.default.element_overlay_left, "\n      ").concat(_elements.default.element_overlay_bottom, "\n      ").concat(_elements.default.element_overlay_right, "\n\n      ").concat(_elements.default.element_pip_top, "\n      ").concat(_elements.default.element_pip_left, "\n      ").concat(_elements.default.element_pip_bottom, "\n      ").concat(_elements.default.element_pip_right, "\n\n      ").concat(_elements.default.element_menu_top, "\n      ").concat(_elements.default.element_menu_left, "\n      ").concat(_elements.default.element_menu_bottom, "\n      ").concat(_elements.default.element_menu_right, "\n\n      ").concat(_elements.default.element_nav_top, "\n      ").concat(_elements.default.element_nav_left, "\n      ").concat(_elements.default.element_nav_bottom, "\n      ").concat(_elements.default.element_nav_right, "\n    </div>\n\n    ")
}, {
  parent: 'component_app_guis',
  id: '',
  classList: '',
  innerHTML: "\n\n\n        ".concat(_elements.default.element_guis(), "\n\n        \n          <div id=\"anchor_right\" class=\"transform_translate3d_top0 easing_025 display_none opacity_0 position_fixed top_0 bottom_0 right_6025vw margin_auto float_left width_6025vw height_40vh\">\n       \n            <a href=\"#1\" class=\"gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left\">\n              ").concat(_elements.default.anchor_menu_right, "\n            </a>\n\n            <a href=\"#2\" class=\"gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left\">\n              ").concat(_elements.default.anchor_menu_right, "\n            </a>\n            <a href=\"#3\" class=\"gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left\">\n              ").concat(_elements.default.anchor_menu_right, "\n            </a>\n            <a href=\"#4\" class=\"gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left\">\n              ").concat(_elements.default.anchor_menu_right, "\n            </a>\n            <a href=\"#5\" class=\"gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left\">\n              ").concat(_elements.default.anchor_menu_right, "\n            </a>\n            <a href=\"#6\" class=\"gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left\">\n              ").concat(_elements.default.anchor_menu_right, "\n            </a>\n            <a href=\"#7\" class=\"gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left\">\n              ").concat(_elements.default.anchor_menu_right, "\n            </a>\n            <a href=\"#8\" class=\"gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left\">\n              ").concat(_elements.default.anchor_menu_right, "\n            </a>\n            \n          </div>\n\n          <div id=\"anchor_bottom\" class=\"transform_translate3d_top0 easing_025 display_none opacity_0 position_fixed bottom_1205vh left_0 right_0 margin_auto float_left width_40vw height_6025vh display_webkit_box webkit_box_pack_center webkit_box_align \">\n       \n            <a href=\"#1\" class=\"gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left\">\n              ").concat(_elements.default.anchor_menu_top, "\n            </a>\n            <a href=\"#2\" class=\"gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left\">\n              ").concat(_elements.default.anchor_menu_top, "\n            </a>\n            <a href=\"#3\" class=\"gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left\">\n              ").concat(_elements.default.anchor_menu_top, "\n            </a>\n            <a href=\"#4\" class=\"gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left\">\n              ").concat(_elements.default.anchor_menu_top, "\n            </a>\n            <a href=\"#5\" class=\"gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left\">\n              ").concat(_elements.default.anchor_menu_top, "\n            </a>\n            <a href=\"#6\" class=\"gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left\">\n              ").concat(_elements.default.anchor_menu_top, "\n            </a>\n            <a href=\"#7\" class=\"gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left\">\n              ").concat(_elements.default.anchor_menu_top, "\n            </a>\n            <a href=\"#8\" class=\"gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left\">\n              ").concat(_elements.default.anchor_menu_top, "\n            </a>\n            \n          </div>\n\n          <div id=\"anchor_top\" class=\"transform_translate3d_top0 easing_025 display_none opacity_0 position_fixed top_1205vh left_0 right_0 margin_auto float_left width_40vw height_6025vh display_webkit_box webkit_box_pack_center webkit_box_align \">\n       \n            <a href=\"#1\" class=\"gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left\">\n              ").concat(_elements.default.anchor_menu_bottom, "\n            </a>\n            <a href=\"#2\" class=\"gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left\">\n              ").concat(_elements.default.anchor_menu_bottom, "\n            </a>\n            <a href=\"#3\" class=\"gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left\">\n              ").concat(_elements.default.anchor_menu_bottom, "\n            </a>\n            <a href=\"#4\" class=\"gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left\">\n              ").concat(_elements.default.anchor_menu_bottom, "\n            </a>\n            <a href=\"#5\" class=\"gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left\">\n              ").concat(_elements.default.anchor_menu_bottom, "\n            </a>\n            <a href=\"#6\" class=\"gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left\">\n              ").concat(_elements.default.anchor_menu_bottom, "\n            </a>\n            <a href=\"#7\" class=\"gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left\">\n              ").concat(_elements.default.anchor_menu_bottom, "\n            </a>\n            <a href=\"#8\" class=\"gui_circle gui_close_on_hover position_relative width_1205 height_205vh float_left\">\n              ").concat(_elements.default.anchor_menu_bottom, "\n            </a>\n            \n          </div>\n\n          <div id=\"anchor_left\" class=\"transform_translate3d_top0 easing_025 display_none opacity_0 position_fixed top_0 bottom_0 left_6025vw margin_auto float_left width_6025vw height_40vh\">\n       \n            <a href=\"#section_1\" class=\"gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left\">\n              ").concat(_elements.default.anchor_menu_left, "\n            </a>\n            <a href=\"#section_2\" class=\"gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left\">\n              ").concat(_elements.default.anchor_menu_left, "\n            </a>\n            <a href=\"#section_3\" class=\"gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left\">\n              ").concat(_elements.default.anchor_menu_left, "\n            </a>\n            <a href=\"#section_4\" class=\"gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left\">\n              ").concat(_elements.default.anchor_menu_left, "\n            </a>\n            <a href=\"#section_5\" class=\"gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left\">\n              ").concat(_elements.default.anchor_menu_left, "\n            </a>\n            <a href=\"#section_6\" class=\"gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left\">\n              ").concat(_elements.default.anchor_menu_left, "\n            </a>\n            <a href=\"#section_7\" class=\"gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left\">\n              ").concat(_elements.default.anchor_menu_left, "\n            </a>\n            <a href=\"#section_8\" class=\"gui_circle gui_close_on_hover position_relative width_100 height_205vh margin_205vh_bottom float_left\">\n              ").concat(_elements.default.anchor_menu_left, "\n            </a>\n            \n          </div>\n\n        <div id=\"component_app_gui_arrows\">\n\n          <div id=\"component_app_gui_arrows_top\" class=\"transform_translate3d_top0 easing_025 display_none opacity_0 position_absolute top_1205 left_0 right_0 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n            <div class=\"gui_arrow_top position_relative width_50 height_50 margin_auto float_left\"></div>\n\n          </div>\n\n          <div id=\"component_app_gui_arrows_top_right\" class=\"transform_translate3d_top0 easing_025 display_none opacity_0 position_absolute top_6025 right_6025 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n            <div class=\"gui_arrow_top_right position_relative width_50 height_50 margin_auto float_left\"></div>\n\n          </div>\n\n          <div id=\"component_app_gui_arrows_top_left\" class=\"transform_translate3d_top0 easing_025 display_none opacity_0 position_absolute top_6025 left_6025 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n            <div class=\"gui_arrow_top_left position_relative width_50 height_50 margin_auto float_left\"></div>\n\n          </div>\n\n          <div id=\"component_app_gui_arrows_right\" class=\"transform_translate3d_left0 easing_025 display_none opacity_0 position_absolute top_0 bottom_0 right_6025 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n            <div class=\"gui_arrow_right position_relative width_50 height_50 margin_auto float_left\"></div>\n\n          </div>\n\n          <div id=\"component_app_gui_arrows_left\" class=\"transform_translate3d_left0 easing_025 display_none opacity_0 position_absolute top_0 bottom_0 left_6025 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n            <div class=\"gui_arrow_left position_relative width_50 height_50 margin_auto float_left\"></div>\n\n          </div>\n\n          <div id=\"component_app_gui_arrows_bottom\" class=\"transform_translate3d_top0 easing_025 display_none opacity_0 position_absolute bottom_1205 left_0 right_0 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n            <div class=\"gui_arrow_bottom position_relative width_50 height_50 margin_auto float_left\"></div>\n\n          </div>\n\n          <div id=\"component_app_gui_arrows_bottom_right\" class=\"transform_translate3d_top0 easing_025 display_none opacity_0 position_absolute bottom_6025 right_6025 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n            <div class=\"gui_arrow_bottom_right position_relative width_50 height_50 margin_auto float_left\"></div>\n\n          </div>\n\n          <div id=\"component_app_gui_arrows_bottom_left\" class=\"transform_translate3d_top0 easing_025 display_none opacity_0 position_absolute bottom_6025 left_6025 margin_auto margin_auto float_left width_1205vw height_1205vh display_webkit_box webkit_box_pack_center webkit_box_align \">\n\n            <div class=\"gui_arrow_bottom_left position_relative width_50 height_50 margin_auto float_left\"></div>\n\n          </div>\n\n        </div>\n        \n    ")
}];
var _default = {
  colors: colors
};
exports.default = _default;
},{"./elements":"partials/elements.js"}],"partials/components.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get_components_handled = function get_components_handled() {
  var state = _index.default.Handle_return_state();

  var components = [// anchors
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
  return components;
};

var _default = {
  get_components_handled: get_components_handled
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
var last_set = 0;
var direction = 'down';
var standing_up_frame = 0;
var standing_down_frame = 0;
var standing_left_frame = 0;
var standing_right_frame = 0;

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
},{"../index.js":"index.js"}],"partials/folds.js":[function(require,module,exports) {
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

var Handle_folds = function Handle_folds() {
  state = _index.default.Handle_return_state();

  if (document.getElementById('fold_1') != null) {
    if (state.animation.instances.sequence == 0) {
      console.log('sequence next 1');
      document.getElementById('fold_1').innerHTML = "";
      document.getElementById('root_loading').classList.remove('fadeIn');
      document.getElementById('root_loading').classList.add('fadeOut'); // stops the redraw

      state.animation.instances.sequence = .1;
    }

    ;

    if (state.animation.instances.sequence == 1) {
      document.getElementById('root_loading').classList.add('display_none');
      console.log('sequence next 1');
      document.getElementById('fold_1').innerHTML = "\n\n                    <div id=\"fold_1_loading\" class=\"width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                        <div class=\"calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                            <div id=\"fold_1_loading_motion\" class=\"width_25 height_25 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                                <div id=\"fold_1_loading_center_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                                    \n                                    <div id=\"fold_1_loading_svg\" class=\"gui_made_by width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                                \n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                "; // stops the redraw

      state.animation.instances.sequence = 1.1;
    }

    ;

    if (state.animation.instances.sequence == 2) {
      console.log('sequence next 2');
      document.getElementById('fold_1').innerHTML = "\n\n                    <div id=\"fold_1_loading\" class=\"width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                        <div class=\"calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                            <div id=\"fold_1_loading_motion\" class=\"width_25 height_25 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                                <div id=\"fold_1_loading_center_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                                    \n                                    <div id=\"fold_1_loading_svg\" class=\"gui_original width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                                \n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                "; // stops the redraw

      state.animation.instances.sequence = 2.1;
    }

    ;

    if (state.animation.instances.sequence == 3) {
      console.log('sequence next 3');
      document.getElementById('fold_1').innerHTML = "\n\n                    <div id=\"fold_1_loading\" class=\"width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                        <div class=\"calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                            <div id=\"fold_1_loading_motion\" class=\"width_25 height_25 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                                <div id=\"fold_1_loading_center_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                                    \n                                    <div id=\"fold_1_loading_svg\" class=\"gui_based width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                                \n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                "; // stops the redraw

      state.animation.instances.sequence = 3.1;
    }

    ;

    if (state.animation.instances.sequence == 4) {
      console.log('sequence next 4');
      document.getElementById('fold_1').innerHTML = "\n\n                    <div id=\"fold_1_loading\" class=\"width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                        <div class=\"calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                            <div id=\"fold_1_loading_motion\" class=\"width_25 height_25 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                                <div id=\"fold_1_loading_center_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                                    \n                                    <div id=\"fold_1_loading_svg\" class=\"gui_handcrafted width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                                \n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                "; // stops the redraw

      state.animation.instances.sequence = 4.1;
    }

    ;

    if (state.animation.instances.sequence == 5) {
      console.log('sequence next 5');
      document.getElementById('fold_1').innerHTML = "\n\n                "; // stops the redraw

      state.animation.instances.sequence = 5.1;
    }

    ;

    if (state.animation.instances.sequence == 6) {
      document.getElementById('fold_1').innerHTML = "\n\n                "; // stops the redraw

      state.animation.instances.sequence = 6.1;
    }

    ;

    if (state.animation.instances.sequence == 7) {
      document.getElementById('fold_1').innerHTML = "\n\n                "; // stops the redraw

      state.animation.instances.sequence = 7.1;
    }

    ;

    if (state.animation.instances.sequence == 8) {
      document.getElementById('fold_1').innerHTML = "\n\n                "; // stops the redraw

      state.animation.instances.sequence = 8.1;
    }

    ;

    if (state.animation.instances.sequence == 9) {
      document.getElementById('fold_1').innerHTML = "\n\n                "; // stops the redraw

      state.animation.instances.sequence = 9.1;
    }

    ;

    if (state.animation.instances.sequence == 10) {
      document.getElementById('fold_1').innerHTML = "\n\n                "; // stops the redraw

      state.animation.instances.sequence = 10.1;
    }

    ;

    if (state.animation.instances.sequence == 11) {
      document.getElementById('fold_1').innerHTML = "\n\n                "; // stops the redraw

      state.animation.instances.sequence = 11.1;
    }

    ;

    if (state.animation.instances.sequence == 12) {
      document.getElementById('fold_1').innerHTML = "\n\n                    <div id=\"fold_1_loading\" class=\"width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                                \n                      <div class=\"calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                          <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                            \n                            <div id=\"logo_center_container\" class=\"width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto\">\n                                <div id=\"logo\" class=\"gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                                <div id=\"logo\" class=\"gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                                <div id=\"logo\" class=\"gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                            </div>\n\n                          </div>\n\n                      </div>\n\n                    </div>\n\n                "; // stops the redraw

      state.animation.instances.sequence = 12.1;
    }

    ;

    if (state.animation.instances.sequence == 13) {
      document.getElementById('fold_1').innerHTML = "\n\n                    <div id=\"fold_1_loading\" class=\"width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                                \n                      <div class=\"calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                          <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                            \n                            <div id=\"logo_left_container\" class=\"width_50 height_100 position_absolute top_0 bottom_0 right_100 margin_auto\">\n                              <div id=\"logo\" class=\"gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                            </div>\n\n                            <div id=\"logo_center_container\" class=\"width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto\">\n                              <div id=\"logo\" class=\"gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                              <div id=\"logo\" class=\"gui_logo_icons width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                              <div id=\"logo\" class=\"gui_logo_arrows width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                              <div id=\"logo\" class=\"gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                              <div id=\"logo\" class=\"gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                              <div id=\"logo\" class=\"gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                            </div>\n\n                            <div id=\"logo_right_container\" class=\"width_50 height_100 position_absolute top_0 bottom_0 left_100 margin_auto\">\n                            </div>\n\n                            <div id=\"logo_bottom_container\" class=\"width_100 height_100 position_absolute top_100 left_0 right_0 margin_auto\">\n\n                              <div id=\"fold_note\" class=\"position_absolute width_100 height_50 top_0 left_0 right_0 margin_auto float_left\">\n                                  \n                                  <div class=\"animated1 pulse infinite easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note\">\n                                  \n                                  </div>\n                              \n                              </div>\n\n                            </div>\n\n                          </div>\n\n                      </div>\n\n                    </div>\n\n                "; // stops the redraw

      state.animation.instances.sequence = 13.1;
    }

    ;

    if (state.animation.instances.sequence == 14) {
      document.getElementById('fold_1').innerHTML = "\n\n                    <div id=\"folds_14\" class=\"width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                                \n                      <div class=\"calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                          <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                            \n                            <div id=\"logo_left_container\" class=\"animated1 fadeOut width_50 height_100 position_absolute top_0 bottom_0 right_100 margin_auto\">\n                                <div id=\"logo\" class=\"gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                            </div>\n\n                            <div id=\"logo_center_container\" class=\"animated1 fadeOut width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto\">\n                              <div id=\"logo\" class=\"gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                              <div id=\"logo\" class=\"gui_logo_icons width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                              <div id=\"logo\" class=\"gui_logo_arrows width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                              <div id=\"logo\" class=\"gui_logo_com width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                              <div id=\"logo\" class=\"gui_logo_since width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                              <div id=\"logo\" class=\"gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                            </div>\n\n                            <div id=\"logo_right_container\" class=\"animated1 fadeIn width_50 height_100 position_absolute top_0 bottom_0 left_100 margin_auto\">\n                              <div id=\"logo\" class=\"gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                            </div>\n\n                            <div id=\"logo_bottom_container\" class=\"animated1 fadeOut width_100 height_100 position_absolute top_100 left_0 right_0 margin_auto\">\n\n                              <div id=\"fold_note\" class=\"position_absolute width_100 height_50 top_0 left_0 right_0 margin_auto float_left\">\n                                  \n                                  <div class=\"easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_move_note\">\n                                  \n                                  </div>\n                              \n                              </div>\n\n                            </div>\n\n                            <div id=\"logo_bottom_container\" class=\"animated1 delay1 fadeIn width_100 height_100 position_absolute top_100 left_0 right_0 margin_auto\">\n\n                                <div id=\"fold_buttons\" class=\"position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n\n                                      <div class=\"display_flex_flow position_relative width_100 margin_auto float_left\">\n                                        \n                                          <div class=\"position_relative margin_auto float_left\">\n\n                                              <div id=\"gui_start\" class=\"gui_button_start position_relative  width_1205vh height_10vh float_left\">\n                                              </div>\n\n                                              <div class=\"gui_or position_relative width_10vh height_5vh margin_2vh_top margin_1vh_left margin_1vh_right float_left\">\n                                              </div>\n                                              \n                                              <div id=\"gui_learn\" class=\"gui_button_learn position_relative  width_1205vh height_10vh float_left\">\n                                              </div>\n\n                                          </div>\n\n                                      </div>\n\n                                </div>\n\n                            </div>\n\n                          </div>\n\n                      </div>\n\n                    </div>\n\n                "; // stops the redraw

      state.animation.instances.sequence = 14.1;
    }

    ; // fading from cursor moved to start

    if (state.animation.instances.sequence == 15) {
      document.getElementById('fold_1').innerHTML = "\n\n                    <div id=\"folds_15\" class=\"fadeOut animated1 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                                \n                      <div class=\"calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                          <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                            \n                            <div id=\"logo_left_container\" class=\"width_50 height_100 position_absolute top_0 bottom_0 right_100 margin_auto\">\n                            </div>\n\n                            <div id=\"logo_center_container\" class=\"width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto\">\n                            </div>\n\n                            <div id=\"logo_right_container\" class=\"width_50 height_100 position_absolute top_0 bottom_0 left_100 margin_auto\">\n                              <div id=\"logo\" class=\"gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                            </div>\n\n                            <div id=\"logo_bottom_container\" class=\"width_100 height_100 position_absolute top_100 left_0 right_0 margin_auto\">\n\n                                <div id=\"fold_buttons\" class=\"position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n\n                                      <div class=\"display_flex_flow position_relative width_100 margin_auto float_left\">\n                                        \n                                          <div class=\"position_relative margin_auto float_left\">\n\n                                              <div id=\"gui_start\" class=\"gui_button_start position_relative  width_1205vh height_10vh float_left\">\n                                              </div>\n\n                                              <div class=\"gui_or position_relative width_10vh height_5vh margin_2vh_top margin_1vh_left margin_1vh_right float_left\">\n                                              </div>\n                                              \n                                              <div id=\"gui_learn\" class=\"gui_button_learn position_relative  width_1205vh height_10vh float_left\">\n                                              </div>\n\n                                          </div>\n\n                                      </div>\n\n                                </div>\n\n                            </div>\n\n                          </div>\n\n                      </div>\n\n                    </div>\n\n                ";
      setTimeout(function () {
        state.animation.instances.sequence = 16;
      }, 2000); // stops the redraw

      state.animation.instances.sequence = 15.1;
    }

    ;

    if (state.animation.instances.sequence == 16) {
      document.getElementById('fold_1').innerHTML = "\n                    <div id=\"folds_16\" class=\"fadeIn animated1 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                        \n                      <div class=\"calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n            \n                          <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 left_0 margin_auto\">\n                            \n                            <div id=\"logo_right_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                              <div id=\"logo\" class=\"gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                            </div>\n\n\n                          </div>\n\n                          <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 right_0 margin_auto\">\n                            \n                            <div id=\"logo_center_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                              <div id=\"logo\" class=\"gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                              <div id=\"logo\" class=\"gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                              <div id=\"logo\" class=\"gui_logo_icons width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                            </div>\n\n                          </div>\n\n                          <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute bottom_0 left_0 margin_auto\">\n                            \n                            <div id=\"logo_bottom_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                              <div id=\"fold_buttons\" class=\"position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                                  <div class=\"display_flex_flow position_relative width_100 margin_auto float_left\">\n                                    \n                                      <div class=\"position_relative margin_auto float_left\">\n\n                                          <div id=\"gui_back\" class=\"gui_button_back position_relative  width_1205vh height_10vh float_left\">\n                                          </div>\n                                          <div id=\"gui_enter\" class=\"gui_button_enter position_relative  width_1205vh height_10vh float_left\">\n                                          </div>\n\n                                      </div>\n\n                                  </div>\n\n                              </div>\n\n                            </div>\n\n                          </div>\n\n                          <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute bottom_0 right_0 margin_auto\">\n                              \n                            <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 right_0 margin_auto\">\n                              \n                              <div id=\"logo_bottom_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                                <div id=\"fold_scroll\" class=\"position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n                                    \n                                    <div class=\"easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel\">\n                                    \n                                    </div>\n                                \n                                </div>\n\n                              </div>\n\n                            </div>\n\n                            <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 left_0 margin_auto\">\n                              \n                              <div id=\"logo_bottom_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                                <div id=\"fold_scroll\" class=\"position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n                                    \n                                    <div class=\"easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel\">\n                                    \n                                    </div>\n                                \n                                </div>\n\n                              </div>\n\n                            </div>\n\n                            <div id=\"logo_motion\" class=\"width_100 height_50 position_absolute bottom_0 right_0 margin_auto\">\n                              \n                              <div id=\"logo_bottom_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                                <div id=\"fold_scroll\" class=\"position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n                                    \n                                    <div class=\"easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel\">\n                                    \n                                    </div>\n                                \n                                </div>\n\n                              </div>\n\n                            </div>\n\n                          </div>\n                    </div>\n                </div>\n\n                ";
      setTimeout(function () {// stops the redraw
        //state.animation.instances.sequence = 16;
      }, 1000); // stops the redraw

      state.animation.instances.sequence = 16.1;
    }

    ; // fading start back to cursor moved

    if (state.animation.instances.sequence == 17) {
      document.getElementById('fold_1').innerHTML = "\n                    <div id=\"folds_17\" class=\"fadeOut animated1 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                        \n                      <div class=\"calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n            \n                          <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 left_0 margin_auto\">\n                            \n                            <div id=\"logo_right_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                              <div id=\"logo\" class=\"gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                            </div>\n\n\n                          </div>\n\n                          <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 right_0 margin_auto\">\n                            \n                            <div id=\"logo_center_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                              <div id=\"logo\" class=\"gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                              <div id=\"logo\" class=\"gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                              <div id=\"logo\" class=\"gui_logo_icons width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                            </div>\n\n                          </div>\n\n                          <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute bottom_0 left_0 margin_auto\">\n                            \n                            <div id=\"logo_bottom_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                              <div id=\"fold_buttons\" class=\"position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                                  <div class=\"display_flex_flow position_relative width_100 margin_auto float_left\">\n                                    \n                                      <div class=\"position_relative margin_auto float_left\">\n\n                                          <div id=\"gui_back\" class=\"gui_button_back position_relative  width_1205vh height_10vh float_left\">\n                                          </div>\n                                          <div id=\"gui_enter\" class=\"gui_button_enter position_relative  width_1205vh height_10vh float_left\">\n                                          </div>\n\n                                      </div>\n\n                                  </div>\n\n                              </div>\n\n                            </div>\n\n                          </div>\n\n                          <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute bottom_0 right_0 margin_auto\">\n                              \n                            <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 right_0 margin_auto\">\n                              \n                              <div id=\"logo_bottom_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                                <div id=\"fold_scroll\" class=\"position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n                                    \n                                    <div class=\"easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel\">\n                                    \n                                    </div>\n                                \n                                </div>\n\n                              </div>\n\n                            </div>\n\n                            <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 left_0 margin_auto\">\n                              \n                              <div id=\"logo_bottom_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                                <div id=\"fold_scroll\" class=\"position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n                                    \n                                    <div class=\"easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel\">\n                                    \n                                    </div>\n                                \n                                </div>\n\n                              </div>\n\n                            </div>\n\n                            <div id=\"logo_motion\" class=\"width_100 height_50 position_absolute bottom_0 right_0 margin_auto\">\n                              \n                              <div id=\"logo_bottom_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                                <div id=\"fold_scroll\" class=\"position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n                                    \n                                    <div class=\"easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel\">\n                                    \n                                    </div>\n                                \n                                </div>\n\n                              </div>\n\n                            </div>\n\n                          </div>\n                    </div>\n                </div>\n\n                ";
      setTimeout(function () {
        // stops the redraw
        state.animation.instances.sequence = 18;
      }, 1000); // stops the redraw

      state.animation.instances.sequence = 17.1;
    }

    ;

    if (state.animation.instances.sequence == 18) {
      document.getElementById('fold_1').innerHTML = "\n\n                    <div id=\"folds_18\" class=\"animated1 fadeIn width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                                \n                      <div class=\"calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                          <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                            \n                            <div id=\"logo_left_container\" class=\"width_50 height_100 position_absolute top_0 bottom_0 right_100 margin_auto\">\n                            </div>\n\n                            <div id=\"logo_center_container\" class=\"width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto\">\n                            </div>\n\n                            <div id=\"logo_right_container\" class=\"width_50 height_100 position_absolute top_0 bottom_0 left_100 margin_auto\">\n                              <div id=\"logo\" class=\"gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                            </div>\n\n                            <div id=\"logo_bottom_container\" class=\"width_100 height_100 position_absolute top_100 left_0 right_0 margin_auto\">\n\n                                <div id=\"fold_buttons\" class=\"position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n\n                                      <div class=\"display_flex_flow position_relative width_100 margin_auto float_left\">\n                                        \n                                          <div class=\"position_relative margin_auto float_left\">\n\n                                              <div id=\"gui_start\" class=\"gui_button_start position_relative  width_1205vh height_10vh float_left\">\n                                              </div>\n\n                                              <div class=\"gui_or position_relative width_10vh height_5vh margin_2vh_top margin_1vh_left margin_1vh_right float_left\">\n                                              </div>\n                                              \n                                              <div id=\"gui_learn\" class=\"gui_button_learn position_relative  width_1205vh height_10vh float_left\">\n                                              </div>\n\n                                          </div>\n\n                                      </div>\n\n                                </div>\n\n                            </div>\n\n                          </div>\n\n                      </div>\n\n                    </div>\n\n                "; // stops the redraw

      state.animation.instances.sequence = 18.1;
    }

    ; // fading start to enter game "empty"

    if (state.animation.instances.sequence == 19) {
      document.getElementById('fold_1').innerHTML = "\n                    <div id=\"folds_19\" class=\"fadeOut animated1 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                        \n                      <div class=\"calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n            \n                          <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 left_0 margin_auto\">\n                            \n                            <div id=\"logo_right_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                              <div id=\"logo\" class=\"gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                            </div>\n\n\n                          </div>\n\n                          <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 right_0 margin_auto\">\n                            \n                            <div id=\"logo_center_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                              <div id=\"logo\" class=\"gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                              <div id=\"logo\" class=\"gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                              <div id=\"logo\" class=\"gui_logo_icons width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                            </div>\n\n                          </div>\n\n                          <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute bottom_0 left_0 margin_auto\">\n                            \n                            <div id=\"logo_bottom_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                              <div id=\"fold_buttons\" class=\"position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                                  <div class=\"display_flex_flow position_relative width_100 margin_auto float_left\">\n                                    \n                                      <div class=\"position_relative margin_auto float_left\">\n\n                                          <div id=\"gui_back\" class=\"gui_button_back position_relative  width_1205vh height_10vh float_left\">\n                                          </div>\n                                          <div id=\"gui_enter\" class=\"gui_button_enter position_relative  width_1205vh height_10vh float_left\">\n                                          </div>\n\n                                      </div>\n\n                                  </div>\n\n                              </div>\n\n                            </div>\n\n                          </div>\n\n                          <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute bottom_0 right_0 margin_auto\">\n                              \n                            <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 right_0 margin_auto\">\n                              \n                              <div id=\"logo_bottom_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                                <div id=\"fold_scroll\" class=\"position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n                                    \n                                    <div class=\"easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel\">\n                                    \n                                    </div>\n                                \n                                </div>\n\n                              </div>\n\n                            </div>\n\n                            <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 left_0 margin_auto\">\n                              \n                              <div id=\"logo_bottom_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                                <div id=\"fold_scroll\" class=\"position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n                                    \n                                    <div class=\"easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel\">\n                                    \n                                    </div>\n                                \n                                </div>\n\n                              </div>\n\n                            </div>\n\n                            <div id=\"logo_motion\" class=\"width_100 height_50 position_absolute bottom_0 right_0 margin_auto\">\n                              \n                              <div id=\"logo_bottom_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                                <div id=\"fold_scroll\" class=\"position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n                                    \n                                    <div class=\"easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel\">\n                                    \n                                    </div>\n                                \n                                </div>\n\n                              </div>\n\n                            </div>\n\n                          </div>\n                    </div>\n                </div>\n\n                ";
      setTimeout(function () {// stops the redraw
        //state.animation.instances.sequence = 18;
      }, 1000); // stops the redraw

      state.animation.instances.sequence = 19.1;
    }

    ; // fading from cursor moved to start

    if (state.animation.instances.sequence == 20) {
      document.getElementById('fold_1').innerHTML = "\n\n\n                    <div id=\"folds_20\" class=\"fadeOut animated1 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                                \n                      <div class=\"calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n\n                          <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                            \n                            <div id=\"logo_left_container\" class=\"width_50 height_100 position_absolute top_0 bottom_0 right_100 margin_auto\">\n                            </div>\n\n                            <div id=\"logo_center_container\" class=\"width_100 height_100 position_absolute top_0 bottom_25 left_0 right_0 margin_auto\">\n                            </div>\n\n                            <div id=\"logo_right_container\" class=\"width_50 height_100 position_absolute top_0 bottom_0 left_100 margin_auto\">\n                              <div id=\"logo\" class=\"gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                            </div>\n\n                            <div id=\"logo_bottom_container\" class=\"width_100 height_100 position_absolute top_100 left_0 right_0 margin_auto\">\n\n                                <div id=\"fold_buttons\" class=\"position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n\n                                      <div class=\"display_flex_flow position_relative width_100 margin_auto float_left\">\n                                        \n                                          <div class=\"position_relative margin_auto float_left\">\n\n                                              <div id=\"gui_start\" class=\"gui_button_start position_relative  width_1205vh height_10vh float_left\">\n                                              </div>\n\n                                              <div class=\"gui_or position_relative width_10vh height_5vh margin_2vh_top margin_1vh_left margin_1vh_right float_left\">\n                                              </div>\n                                              \n                                              <div id=\"gui_learn\" class=\"gui_button_learn position_relative  width_1205vh height_10vh float_left\">\n                                              </div>\n\n                                          </div>\n\n                                      </div>\n\n                                </div>\n\n                            </div>\n\n                          </div>\n\n                      </div>\n\n                    </div>\n\n                ";
      setTimeout(function () {
        state.animation.instances.sequence = 21;
      }, 2000); // stops the redraw

      state.animation.instances.sequence = 20.1;
    }

    ;

    if (state.animation.instances.sequence == 21) {
      document.getElementById('fold_1').innerHTML = "\n                    <div id=\"folds_21\" class=\"fadeIn animated1 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                        \n                      <div class=\"calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n            \n                          <div id=\"logo_motion\" class=\"width_25 height_50 position_absolute top_0 left_0 margin_auto\">\n                            \n                            <div id=\"logo_right_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                              <div id=\"logo\" class=\"gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                            </div>\n\n\n                          </div>\n\n                          <div id=\"logo_motion\" class=\"width_75 height_50 position_absolute top_0 right_0 margin_auto\">\n                            \n                            <div id=\"logo_center_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                              <div id=\"logo\" class=\"gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                              <div id=\"logo\" class=\"gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                              <div id=\"logo\" class=\"gui_logo_icons width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                            </div>\n\n                          </div>\n\n                          <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute bottom_0 left_0 margin_auto\">\n                            \n                            <div id=\"logo_bottom_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                              <div id=\"fold_buttons\" class=\"position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                                  <div class=\"display_flex_flow position_relative width_100 margin_auto float_left\">\n                                    \n                                      <div class=\"position_relative margin_auto float_left\">\n\n                                          <div id=\"gui_back_from_learn\" class=\"gui_button_back position_relative  width_1205vh height_10vh float_left\">\n                                          </div>\n                                          <div id=\"gui_enter\" class=\"gui_button_enter position_relative  width_1205vh height_10vh float_left\">\n                                          </div>\n\n                                      </div>\n\n                                  </div>\n\n                              </div>\n\n                            </div>\n\n                          </div>\n\n                          <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute bottom_0 right_0 margin_auto\">\n                              \n                            <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 right_0 margin_auto\">\n                              \n                              <div id=\"logo_bottom_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                                <div id=\"fold_scroll\" class=\"position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n                                    \n                                    <div class=\"easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel\">\n                                    \n                                    </div>\n                                \n                                </div>\n\n                              </div>\n\n                            </div>\n\n                            <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 left_0 margin_auto\">\n                              \n                              <div id=\"logo_bottom_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                                <div id=\"fold_scroll\" class=\"position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n                                    \n                                    <div class=\"easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel\">\n                                    \n                                    </div>\n                                \n                                </div>\n\n                              </div>\n\n                            </div>\n\n                            <div id=\"logo_motion\" class=\"width_100 height_50 position_absolute bottom_0 right_0 margin_auto\">\n                              \n                              <div id=\"logo_bottom_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                                <div id=\"fold_scroll\" class=\"position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n                                    \n                                    <div class=\"easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel\">\n                                    \n                                    </div>\n                                \n                                </div>\n\n                              </div>\n\n                            </div>\n\n                          </div>\n                    </div>\n                </div>\n\n                ";
      setTimeout(function () {// stops the redraw
        //state.animation.instances.sequence = 16;
      }, 1000); // stops the redraw

      state.animation.instances.sequence = 21.1;
    }

    ; // from learn back to home

    if (state.animation.instances.sequence == 22) {
      document.getElementById('fold_1').innerHTML = "\n                    <div id=\"folds_21\" class=\"fadeOut animated1 width_100 height_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n                        \n                      <div class=\"calc_25vh max_width width_100 top_0 bottom_0 left_0 right_0 position_absolute margin_auto\">\n            \n                          <div id=\"logo_motion\" class=\"width_25 height_50 position_absolute top_0 left_0 margin_auto\">\n                            \n                            <div id=\"logo_right_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                              <div id=\"logo\" class=\"gui_logo_links width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                            </div>\n\n\n                          </div>\n\n                          <div id=\"logo_motion\" class=\"width_75 height_50 position_absolute top_0 right_0 margin_auto\">\n                            \n                            <div id=\"logo_center_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n                              <div id=\"logo\" class=\"gui_logo_type width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                              <div id=\"logo\" class=\"gui_logo_mark width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                              <div id=\"logo\" class=\"gui_logo_icons width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\"></div>\n                            </div>\n\n                          </div>\n\n                          <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute bottom_0 left_0 margin_auto\">\n                            \n                            <div id=\"logo_bottom_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                              <div id=\"fold_buttons\" class=\"position_absolute width_100 top_0 bottom_0 left_0 right_0 margin_auto float_left webkit_box_pack_center webkit_box_align display_webkit_box\">\n\n                                  <div class=\"display_flex_flow position_relative width_100 margin_auto float_left\">\n                                    \n                                      <div class=\"position_relative margin_auto float_left\">\n\n                                          <div id=\"gui_back_from_learn\" class=\"gui_button_back position_relative  width_1205vh height_10vh float_left\">\n                                          </div>\n                                          <div id=\"gui_enter\" class=\"gui_button_enter position_relative  width_1205vh height_10vh float_left\">\n                                          </div>\n\n                                      </div>\n\n                                  </div>\n\n                              </div>\n\n                            </div>\n\n                          </div>\n\n                          <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute bottom_0 right_0 margin_auto\">\n                              \n                            <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 right_0 margin_auto\">\n                              \n                              <div id=\"logo_bottom_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                                <div id=\"fold_scroll\" class=\"position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n                                    \n                                    <div class=\"easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel\">\n                                    \n                                    </div>\n                                \n                                </div>\n\n                              </div>\n\n                            </div>\n\n                            <div id=\"logo_motion\" class=\"width_50 height_50 position_absolute top_0 left_0 margin_auto\">\n                              \n                              <div id=\"logo_bottom_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                                <div id=\"fold_scroll\" class=\"position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n                                    \n                                    <div class=\"easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel\">\n                                    \n                                    </div>\n                                \n                                </div>\n\n                              </div>\n\n                            </div>\n\n                            <div id=\"logo_motion\" class=\"width_100 height_50 position_absolute bottom_0 right_0 margin_auto\">\n                              \n                              <div id=\"logo_bottom_container\" class=\"width_100 height_100 position_absolute top_0 bottom_0 left_0 right_0 margin_auto\">\n\n                                <div id=\"fold_scroll\" class=\"position_absolute width_100 height_50 top_0 bottom_0 left_0 right_0 margin_auto float_left\">\n                                    \n                                    <div class=\"easing_01 position_absolute width_50 height_100 top_0 left_0 right_0 bottom_0 margin_auto float_left gui_wheel\">\n                                    \n                                    </div>\n                                \n                                </div>\n\n                              </div>\n\n                            </div>\n\n                          </div>\n                    </div>\n                </div>\n\n                ";
      setTimeout(function () {
        // stops the redraw
        state.animation.instances.sequence = 18;
      }, 1000); // stops the redraw

      state.animation.instances.sequence = 22.1;
    }

    ;
    setTimeout(function () {
      // gui
      if (document.getElementById('gui_back') != null) {
        document.getElementById('gui_back').addEventListener("click", function (event) {
          _index.default.player_1_grow();

          state.animation.instances.start = false;
          state.animation.instances.learn = false;
          setTimeout(function () {
            state.animation.instances.sequence = 17; // fad out && back to cursor moved
          }, 1000);
        });
      }

      ; // gui

      if (document.getElementById('gui_back_from_learn') != null) {
        document.getElementById('gui_back_from_learn').addEventListener("click", function (event) {
          _index.default.player_1_grow();

          state.animation.instances.start = false;
          state.animation.instances.learn = false;
          setTimeout(function () {
            state.animation.instances.sequence = 22; // fad out && back to cursor moved
          }, 1000);
        });
      }

      ; // gui

      if (document.getElementById('gui_enter') != null) {
        document.getElementById('gui_enter').addEventListener("click", function (event) {
          _index.default.player_1_grow();

          state.animation.instances.start = false;
          state.animation.instances.learn = false;
          setTimeout(function () {
            state.animation.instances.sequence = 19; // enter game // fade out
          }, 1000);
        });
      }

      ; // gui

      if (document.getElementById('gui_start') != null) {
        document.getElementById('gui_start').addEventListener("click", function (event) {
          _index.default.player_1_grow();

          state.animation.instances.start = true;
          state.animation.instances.learn = false;
          setTimeout(function () {
            state.animation.instances.sequence = 15;
          }, 1000);
        });
      }

      ;

      if (document.getElementById('gui_learn') != null) {
        document.getElementById('gui_learn').addEventListener("click", function (event) {
          _index.default.player_1_shrink();

          state.animation.instances.start = false;
          state.animation.instances.learn = true;
          setTimeout(function () {
            state.animation.instances.sequence = 20;
          }, 1000);
        });
      }

      ;
    }, 100);
  }

  ;
};

var _default = {
  Handle_folds: Handle_folds
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
},{"../index.js":"index.js"}],"partials/stages.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get_stages_handled = function get_stages_handled() {
  var state = _index.default.Handle_return_state();

  var stages;
  stages = [// bg
  {
    component: 'bg_texture',
    //component_state_transform: state.ui.stage.cardboard.fold == 1.idle,
    //component_state_transform_true: 'transform_translate3d_top_100',
    //component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.animation.instances.loading == false // component_state_opacity:  state.ui.gui.top.opacity

  }, // mg
  {
    component: 'mg_interactive',
    //component_state_transform: state.ui.stage.cardboard.fold == 1.idle,
    //component_state_transform_true: 'transform_translate3d_top_100',
    //component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.animation.instances.loading == false // component_state_opacity:  state.ui.gui.top.opacity

  }, // fg
  {
    component: 'fg_effect',
    //component_state_transform: state.ui.stage.cardboard.fold == 1.idle,
    //component_state_transform_true: 'transform_translate3d_top_100',
    //component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.animation.instances.loading == false // component_state_opacity:  state.ui.gui.top.opacity

  }, // center
  // center - set 1 (before office)
  {
    component: 'bg_stage_set_1_center',
    component_state_transform: state.ui.stage.cardboard.set == 1,
    component_state_transform_true: 'fadeIn',
    component_state_transform_false: 'fadeOut',
    component_state_display: state.ui.stage.cardboard.set == 1 // component_state_opacity:  state.ui.gui.top.opacity

  }, // center - set 2 (yellow office)
  {
    component: 'bg_stage_set_2_center',
    component_state_transform: state.ui.stage.cardboard.set == 2,
    component_state_transform_true: 'fadeIn',
    component_state_transform_false: 'fadeOut',
    component_state_display: state.ui.stage.cardboard.set == 2 // component_state_opacity:  state.ui.gui.top.opacity

  }, // center - set 3 (white office)
  {
    component: 'bg_stage_set_3_center',
    component_state_transform: state.ui.stage.cardboard.set == 3,
    component_state_transform_true: 'fadeIn',
    component_state_transform_false: 'fadeOut',
    component_state_display: state.ui.stage.cardboard.set == 3 // component_state_opacity:  state.ui.gui.top.opacity

  }, // center - set 2 (yellow office)
  {
    component: 'bg_stage_set_4_center',
    component_state_transform: state.ui.stage.cardboard.set == 4,
    component_state_transform_true: 'fadeIn',
    component_state_transform_false: 'fadeOut',
    component_state_display: state.ui.stage.cardboard.set == 4 // component_state_opacity:  state.ui.gui.top.opacity

  }, // center - set 3 (white office)
  {
    component: 'bg_stage_set_5_center',
    component_state_transform: state.ui.stage.cardboard.set == 5,
    component_state_transform_true: 'fadeIn',
    component_state_transform_false: 'fadeOut',
    component_state_display: state.ui.stage.cardboard.set == 5 // component_state_opacity:  state.ui.gui.top.opacity

  }, // top
  // top - set 1 (before office)
  {
    component: 'bg_stage_set_top',
    component_state_transform: state.ui.stage.cardboard.set == 1,
    component_state_transform_true: 'fadeIn',
    component_state_transform_false: 'fadeOut',
    component_state_display: state.ui.stage.cardboard.set == 1 // component_state_opacity:  state.ui.gui.top.opacity

  }, // top - set 2 (yellow office)
  {
    component: 'bg_stage_set_2_top',
    component_state_transform: state.ui.stage.cardboard.set == 2,
    component_state_transform_true: 'fadeIn',
    component_state_transform_false: 'fadeOut',
    component_state_display: state.ui.stage.cardboard.set == 2 // component_state_opacity:  state.ui.gui.top.opacity

  }, // bottom
  // bottom - set 1 (before office)
  {
    component: 'bg_stage_set_bottom',
    component_state_transform: state.ui.stage.cardboard.set == 1,
    component_state_transform_true: 'fadeIn',
    component_state_transform_false: 'fadeOut',
    component_state_display: state.ui.stage.cardboard.set == 1 // component_state_opacity:  state.ui.gui.top.opacity

  }, // bottom - set 2 (yellow office)
  {
    component: 'bg_stage_set_2_bottom',
    component_state_transform: state.ui.stage.cardboard.set == 2,
    component_state_transform_true: 'fadeIn',
    component_state_transform_false: 'fadeOut',
    component_state_display: state.ui.stage.cardboard.set == 2 // component_state_opacity:  state.ui.gui.bottom.opacity

  }, // left
  // left - set 1 (before office)
  {
    component: 'bg_stage_set_left',
    component_state_transform: state.ui.stage.cardboard.set == 1,
    component_state_transform_true: 'fadeIn',
    component_state_transform_false: 'fadeOut',
    component_state_display: state.ui.stage.cardboard.set == 1 // component_state_opacity:  state.ui.gui.top.opacity

  }, // left - set 2 (yellow office)
  {
    component: 'bg_stage_set_2_left',
    component_state_transform: state.ui.stage.cardboard.set == 2,
    component_state_transform_true: 'fadeIn',
    component_state_transform_false: 'fadeOut',
    component_state_display: state.ui.stage.cardboard.set == 2 // component_state_opacity:  state.ui.gui.top.opacity

  }, // left Outside
  // left Outside - set 1 (before office)
  {
    component: 'bg_stage_set_left_outside',
    component_state_transform: state.ui.stage.cardboard.set == 1,
    component_state_transform_true: 'fadeIn',
    component_state_transform_false: 'fadeOut',
    component_state_display: state.ui.stage.cardboard.set == 1 // component_state_opacity:  state.ui.gui.top.opacity

  }, // left Outside - set 2 (yellow office)
  {
    component: 'bg_stage_set_2_left_outside',
    component_state_transform: state.ui.stage.cardboard.set == 2,
    component_state_transform_true: 'fadeIn',
    component_state_transform_false: 'fadeOut',
    component_state_display: state.ui.stage.cardboard.set == 2 // component_state_opacity:  state.ui.gui.top.opacity

  }, // right
  // right - set 1 (before office)
  {
    component: 'bg_stage_set_right',
    component_state_transform: state.ui.stage.cardboard.set == 1,
    component_state_transform_true: 'fadeIn',
    component_state_transform_false: 'fadeOut',
    component_state_display: state.ui.stage.cardboard.set == 1 // component_state_opacity:  state.ui.gui.top.opacity

  }, // right - set 2 (yellow office)
  {
    component: 'bg_stage_set_2_right',
    component_state_transform: state.ui.stage.cardboard.set == 2,
    component_state_transform_true: 'fadeIn',
    component_state_transform_false: 'fadeOut',
    component_state_display: state.ui.stage.cardboard.set == 2 // component_state_opacity:  state.ui.gui.top.opacity

  }];
  return stages;
};

var _default = {
  get_stages_handled: get_stages_handled
};
exports.default = _default;
},{"../index.js":"index.js"}],"partials/pieces.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get_pieces_handled = function get_pieces_handled() {
  var state = _index.default.Handle_return_state();

  var pieces;
  pieces = [// interactive
  // interactive - set 1 (before office)
  {
    component: 'interactive_player',
    component_state_transform: state.ui.interaction.player_1.transform == true,
    component_state_transform_true: 'enterTopBounce',
    component_state_transform_false: 'fadeOut',
    component_state_display: state.ui.interaction.player_1.display == true // component_state_opacity:  state.ui.gui.top.opacity

  }, // interactive
  // interactive - set 2
  {
    component: 'mg_stage_set_2_interactive_center',
    //component_state_transform: (state.animation.instances.start == true),
    //component_state_transform_true: 'enterTopBounce',
    //component_state_transform_false: 'fadeOut',
    component_state_display: state.animation.instances.start == true && state.ui.stage.cardboard.set == 2 // component_state_opacity:  state.ui.gui.top.opacity

  }, // folds
  {
    component: 'fold_1',
    //component_state_transform: state.ui.stage.cardboard.fold == 1.idle,
    //component_state_transform_true: 'transform_translate3d_top_100',
    //component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.cardboard.scene >= 0 // component_state_opacity:  state.ui.gui.top.opacity

  }];
  return pieces;
};

var _default = {
  get_pieces_handled: get_pieces_handled
};
exports.default = _default;
},{"../index.js":"index.js"}],"partials/sets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get_sets_handled = function get_sets_handled() {
  var state = _index.default.Handle_return_state();

  var sets;
  sets = [// interactive
  // interactive - set 1 (before office)
  {
    component: 'mg_stage_set_1_left_outside',
    // component_state_transform: (state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == 1 && state.ui.stage.cardboard_mg.yaxis == 0),
    // component_state_transform_true: 'enterTopBounce',
    // component_state_transform_false: 'fadeOut',
    component_state_display: state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == 2 && state.ui.stage.cardboard_mg.yaxis == 0 // component_state_opacity:  state.ui.gui.top.opacity

  }, // interactive
  // interactive - set 1 (before office)
  {
    component: 'mg_stage_set_1_left',
    // component_state_transform: (state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == 1 && state.ui.stage.cardboard_mg.yaxis == 0),
    // component_state_transform_true: 'enterTopBounce',
    // component_state_transform_false: 'fadeOut',
    component_state_display: state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == 1 && state.ui.stage.cardboard_mg.yaxis == 0 // component_state_opacity:  state.ui.gui.top.opacity

  }, // interactive
  // interactive - set 1 (before office)
  {
    component: 'mg_stage_set_1_center',
    // component_state_transform: (state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == 1 && state.ui.stage.cardboard_mg.yaxis == 0),
    // component_state_transform_true: 'enterTopBounce',
    // component_state_transform_false: 'fadeOut',
    component_state_display: state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == 0 && state.ui.stage.cardboard_mg.yaxis == 0 // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'mg_stage_set_1_right',
    // component_state_transform: (state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == 1 && state.ui.stage.cardboard_mg.yaxis == 0),
    // component_state_transform_true: 'enterTopBounce',
    // component_state_transform_false: 'fadeOut',
    component_state_display: state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == -1 && state.ui.stage.cardboard_mg.yaxis == 0 // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'mg_stage_set_1_top',
    // component_state_transform: (state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == 1 && state.ui.stage.cardboard_mg.yaxis == 0),
    // component_state_transform_true: 'enterTopBounce',
    // component_state_transform_false: 'fadeOut',
    component_state_display: state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == 0 && state.ui.stage.cardboard_mg.yaxis == 1 // component_state_opacity:  state.ui.gui.top.opacity

  }, {
    component: 'mg_stage_set_1_bottom',
    // component_state_transform: (state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == 1 && state.ui.stage.cardboard_mg.yaxis == 0),
    // component_state_transform_true: 'enterTopBounce',
    // component_state_transform_false: 'fadeOut',
    component_state_display: state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == 0 && state.ui.stage.cardboard_mg.yaxis == -1 // component_state_opacity:  state.ui.gui.top.opacity

  }, // set 2
  // interactive
  // interactive - set 1 (before office)
  {
    component: 'mg_stage_set_2_center',
    // component_state_transform: (state.ui.stage.cardboard.set == 1 && state.ui.stage.cardboard_mg.xaxis == 1 && state.ui.stage.cardboard_mg.yaxis == 0),
    // component_state_transform_true: 'enterTopBounce',
    // component_state_transform_false: 'fadeOut',
    component_state_display: state.ui.stage.cardboard.set == 2 && state.ui.stage.cardboard_mg.xaxis == 0 && state.ui.stage.cardboard_mg.yaxis == 0 // component_state_opacity:  state.ui.gui.top.opacity

  }];
  return sets;
};

var _default = {
  get_sets_handled: get_sets_handled
};
exports.default = _default;
},{"../index.js":"index.js"}],"index.js":[function(require,module,exports) {
// Rules
'use strict'; // Imports

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.scss");

var _functions = _interopRequireDefault(require("./partials/functions"));

var _state = _interopRequireDefault(require("./partials/state"));

var _events = _interopRequireDefault(require("./partials/events"));

var _defaults = _interopRequireDefault(require("./partials/defaults"));

var _components = _interopRequireDefault(require("./partials/components"));

var _ui = _interopRequireDefault(require("./partials/ui"));

var _folds = _interopRequireDefault(require("./partials/folds"));

var _interaction = _interopRequireDefault(require("./partials/interaction"));

var _animation = _interopRequireDefault(require("./partials/animation"));

var _stages = _interopRequireDefault(require("./partials/stages"));

var _pieces = _interopRequireDefault(require("./partials/pieces"));

var _sets = _interopRequireDefault(require("./partials/sets"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Declaration
var state;
var functions;
var defaults;
var components;
var stages;
var pieces;
var sets; // Assignment

state = _state.default.default_state;
functions = _functions.default;
defaults = _defaults.default;
components = _components.default;
stages = _stages.default;
pieces = _pieces.default;
sets = _sets.default; // Initialization

var config = {
  apiKey: "AIzaSyB8kwtrECmhBW10P4vaKsE9JyE5DdazI-U",
  authDomain: "nownigel-cf9da.firebaseapp.com",
  databaseURL: "https://nownigel-cf9da.firebaseio.com",
  projectId: "nownigel-cf9da",
  storageBucket: "nownigel-cf9da.appspot.com",
  messagingSenderId: "872155363769"
}; // Functions

firebase.initializeApp(config); // init

console.log('hello world');
var first_load = true;
var sorting_type;

var check_local_user = function check_local_user() {
  // Localize data
  if (localStorage.username == null) {
    console.log('welcome first timer');
    document.getElementById('users_username').innerHTML = 'Welcome <u>new user!</u> Please sign up or Log in.';
    return;
  }

  ; // Localize data

  if (localStorage.username == 'null') {
    console.log('welcome back, login please');
    document.getElementById('users_username').innerHTML = 'Welcome back <u>returning user!</u> please login';
    return;
  }

  ;

  if (localStorage.username != 'null') {
    console.log('weolcome back: ' + localStorage.username);

    for (var i = 0; i < state.data.firebase.gnougn.roster.length; i++) {
      var trying_username = localStorage.username;
      var trying_password = localStorage.password;

      if (state.data.firebase.gnougn.roster[i].username == trying_username) {
        var validate_username = true;
        var validated_user = state.data.firebase.gnougn.roster[i];

        if (validated_user.password == trying_password) {
          var validate_password = true;
          state.data.user = validated_user;
          localStorage.setItem("user", state.data.user);
          localStorage.setItem("username", state.data.user.username);
          localStorage.setItem("password", state.data.user.password);
          sign_in_ui();
        }

        ;
      }

      ;
    }

    ;
  }

  ;
};

var Handle_render = function Handle_render() {
  for (var i = 0; i < defaults.colors.length; i++) {
    console.log('defaults.colors[i]: ' + defaults.colors[i]);
    document.getElementById(defaults.colors[i].parent).innerHTML = '';
    document.getElementById(defaults.colors[i].parent).appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div(defaults.colors[i].innerHTML, defaults.colors[i].classList, defaults.colors[i].id, '')));
  }

  ;
};

var Handle_display_with_delay = function Handle_display_with_delay() {
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

  for (var i = 0; i < stages.length; i++) {
    // console.log(stages[i].component);
    // console.log(stages[i].component_state);
    // colors
    if (document.getElementById(stages[i].component) != null) {
      _functions.default.Toggle_functions_IF_State(_functions.default.Toggle_stages_display_and_opacity_on_with_no_delay, _functions.default.Toggle_stages_display_and_opacity_off_with_delay, stages[i].component, stages[i].component_state_display);
    }

    ;
  }

  ;

  for (var i = 0; i < sets.length; i++) {
    // console.log(sets[i].component);
    // console.log(sets[i].component_state);
    // colors
    if (document.getElementById(sets[i].component) != null) {
      _functions.default.Toggle_functions_IF_State(_functions.default.Toggle_sets_display_and_opacity_on_with_no_delay, _functions.default.Toggle_sets_display_and_opacity_off_with_delay, sets[i].component, sets[i].component_state_display);
    }

    ;
  }

  ;

  for (var i = 0; i < pieces.length; i++) {
    // console.log(pieces[i].component);
    // console.log(pieces[i].component_state);
    // colors
    if (document.getElementById(pieces[i].component) != null) {
      _functions.default.Toggle_functions_IF_State(_functions.default.Toggle_pieces_display_and_opacity_on_with_no_delay, _functions.default.Toggle_pieces_display_and_opacity_off_with_delay, pieces[i].component, pieces[i].component_state_display);
    }

    ;
  }

  ;
};

var Handle_transform = function Handle_transform() {
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

  for (var i = 0; i < stages.length; i++) {
    // console.log(stages[i].component);
    // console.log(stages[i].component_state);
    // colors
    if (document.getElementById(stages[i].component) != null) {
      _functions.default.Toggle_classes_IF_State(stages[i].component_state_transform_false, stages[i].component_state_transform_true, stages[i].component, stages[i].component_state_transform);
    }

    ;
  }

  ;

  for (var i = 0; i < sets.length; i++) {
    // console.log(sets[i].component);
    // console.log(sets[i].component_state);
    // colors
    if (document.getElementById(sets[i].component) != null) {
      _functions.default.Toggle_classes_IF_State(sets[i].component_state_transform_false, sets[i].component_state_transform_true, sets[i].component, sets[i].component_state_transform);
    }

    ;
  }

  ;

  for (var i = 0; i < pieces.length; i++) {
    // console.log(pieces[i].component);
    // console.log(pieces[i].component_state);
    // colors
    if (document.getElementById(pieces[i].component) != null) {
      _functions.default.Toggle_classes_IF_State(pieces[i].component_state_transform_false, pieces[i].component_state_transform_true, pieces[i].component, pieces[i].component_state_transform);
    }

    ;
  }

  ;
};

var Handle_opacity = function Handle_opacity() {
  for (var i = 0; i < components.length; i++) {
    // colors
    if (document.getElementById(components[i].component) != null) {
      _functions.default.Toggle_classes_IF_State('opacity_0', 'opacity_1', components[i].component, components[i].component_state_opacity);
    }

    ;
  }

  ;
};

var sign_in_ui = function sign_in_ui() {
  /*
  // set user avatar
  document.getElementById('user_thumb').style.backgroundImage = 'url(' + state.data.user.feature_image_src + ')'
   // set author page
  document.getElementById('component_app_modal_element_page_right_content').innerHTML = imported_elements.route_dashboard(state.data.user);
   document.getElementById('icon_sign_out').classList.remove('display_none')
  document.getElementById('icon_sign_in').classList.add('display_none')
  document.getElementById('icon_sign_up').classList.add('display_none')
  */
  document.getElementById('users_username').innerHTML = 'Hello ' + "".concat(state.data.user.username) + '!'; // render author data

  Handle_Firebase_Refs_and_Render();
};

var sign_out_ui = function sign_out_ui() {
  document.getElementById('users_username').innerHTML = 'See you next time, ' + "".concat(state.data.user.username);
  state.data.user = default_user;
  localStorage.setItem("user", default_user);
  localStorage.setItem("username", default_user.username);
  localStorage.setItem("password", default_user.password);
  /*
  // set user avatar
  document.getElementById('user_thumb').style.backgroundImage = 'url(' + state.data.user.feature_image_src + ')'
   // set author page
  document.getElementById('component_app_modal_element_page_right_content').innerHTML = imported_elements.route_dashboard_not_logged();
   document.getElementById('icon_sign_out').classList.add('display_none')
  document.getElementById('icon_sign_in').classList.remove('display_none')
  document.getElementById('icon_sign_up').classList.remove('display_none')
  */
  // render author data

  Handle_Firebase_Refs_and_Render();
};

var Handle_check_states = function Handle_check_states() {
  console.log('checked ui'); //console.log('Handle_check_states');

  components = _components.default.get_components_handled();
  stages = _stages.default.get_stages_handled();
  pieces = _pieces.default.get_pieces_handled();
  sets = _sets.default.get_sets_handled();

  _ui.default.Handle_ui();

  _folds.default.Handle_folds();

  _interaction.default.Handle_interaction();

  _animation.default.Handle_animation();

  Handle_display_with_delay();
  Handle_opacity();
  Handle_transform();
};

sorting_type = 'timeup';

var find_sort = function find_sort() {
  if (document.getElementById('element_input_sorting_type').value == 'likesup' || '') {
    sorting_type = 'likesup';
  }

  if (document.getElementById('element_input_sorting_type').value == 'likesdown') {
    sorting_type = 'likesdown';
  }

  if (document.getElementById('element_input_sorting_type').value == 'viewsup') {
    sorting_type = 'viewsup';
  }

  if (document.getElementById('element_input_sorting_type').value == 'viewsdown') {
    sorting_type = 'viewsdown';
  }

  if (document.getElementById('element_input_sorting_type').value == 'timeup') {
    sorting_type = 'timeup';
  }

  if (document.getElementById('element_input_sorting_type').value == 'timedown') {
    sorting_type = 'timedown';
  }

  if (document.getElementById('element_input_sorting_type').value == 'titleup') {
    sorting_type = 'titleup';
  }

  if (document.getElementById('element_input_sorting_type').value == 'titledown') {
    sorting_type = 'titledown';
  }

  if (sorting_type == 'likesup') {
    if (sorting_type == 'likesup') {
      return function (a, b) {
        return a.likes - b.likes;
      };
    }

    ;
  }

  ;

  if (sorting_type == 'likesdown') {
    if (sorting_type == 'likesdown') {
      return function (a, b) {
        return b.likes - a.likes;
      };
    }

    ;
  }

  ;

  if (sorting_type == 'viewsup') {
    if (sorting_type == 'viewsup') {
      return function (a, b) {
        return a.views - b.views;
      };
    }

    ;
  }

  ;

  if (sorting_type == 'viewsdown') {
    if (sorting_type == 'viewsdown') {
      return function (a, b) {
        return b.views - a.views;
      };
    }

    ;
  }

  ;

  if (sorting_type == 'timeup') {
    if (sorting_type == 'timeup') {
      return function (a, b) {
        return b.time - a.time;
      };
    }

    ;
  }

  ;

  if (sorting_type == 'timedown') {
    if (sorting_type == 'timedown') {
      return function (a, b) {
        return a.time - b.time;
      };
    }

    ;
  }

  ;

  if (sorting_type == 'titleup') {
    if (sorting_type == 'titleup') {
      return function (a, b) {
        return b.title - a.title;
      };
    }

    ;
  }

  ;

  if (sorting_type == 'titledown') {
    if (sorting_type == 'titledown') {
      return function (a, b) {
        return a.title - b.title;
      };
    }

    ;
  }

  ;
};

var find_view = function find_view() {
  document.getElementById('root').classList.remove('grid');
  document.getElementById('root').classList.remove('list');
  document.getElementById('root').classList.remove('card');
  document.getElementById('root').classList.remove('full');
  document.getElementById('root').classList.remove('thumbs');

  if (document.getElementById('element_input_style').value == 'grid' || document.getElementById('element_input_style').value == '') {
    document.getElementById('root').classList.add('grid');
  }

  ;

  if (document.getElementById('element_input_style').value == 'card') {
    document.getElementById('root').classList.add('card');
  }

  ;

  if (document.getElementById('element_input_style').value == 'list') {
    document.getElementById('root').classList.add('list');
  }

  ;

  if (document.getElementById('element_input_style').value == 'thumbs') {
    document.getElementById('root').classList.add('thumbs');
  }

  ;

  if (document.getElementById('element_input_style').value == 'full') {
    document.getElementById('root').classList.add('full');
  }

  ;
};

var find_limit = function find_limit() {
  if (document.getElementById('element_input_limit') != null) {
    state.data.posts_limit = document.getElementById('element_input_limit').value;
  }

  ;
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
};
var default_user = {
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
  var default_item = {};

  if (state.data.user.username != null) {
    if (child == 'library') {
      var _default_item;

      default_item = (_default_item = {
        id: 0,
        time: current_second,
        title: document.getElementById('create_library_input_title').value,
        feature_image_src: "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
        subtitle: document.getElementById('create_library_input_subtitle').value,
        paragraph: document.getElementById('create_library_input_paragraph').value,
        categories: ["'".concat(document.getElementById('create_library_input_category').value, "'")],
        subcategories: ["'".concat(document.getElementById('create_library_input_sub_category').value, "'")],
        feature_style: document.getElementById('create_library_input_feature_style').value,
        tags: ["'".concat(document.getElementById('create_library_input_tag').value, "'")],
        types: ["'".concat(document.getElementById('create_library_input_type').value, "'")]
      }, _defineProperty(_default_item, "feature_image_src", document.getElementById('create_library_input_feature_image_src').value), _defineProperty(_default_item, "usernames", [{
        "username": state.data.user.username
      }]), _defineProperty(_default_item, "views", 0), _defineProperty(_default_item, "likes", 0), _defineProperty(_default_item, "dislikes", 0), _default_item);
    }

    ;

    if (child == 'partners') {
      var _default_item2;

      default_item = (_default_item2 = {
        id: 0,
        time: current_second,
        title: document.getElementById('create_partners_input_title').value,
        feature_image_src: "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
        subtitle: document.getElementById('create_partners_input_subtitle').value,
        paragraph: document.getElementById('create_partners_input_paragraph').value,
        categories: ["'".concat(document.getElementById('create_partners_input_category').value, "'")],
        subcategories: ["'".concat(document.getElementById('create_partners_input_sub_category').value, "'")],
        feature_style: document.getElementById('create_partners_input_feature_style').value,
        tags: ["'".concat(document.getElementById('create_partners_input_tag').value, "'")],
        types: ["'".concat(document.getElementById('create_partners_input_type').value, "'")]
      }, _defineProperty(_default_item2, "feature_image_src", document.getElementById('create_partners_input_feature_image_src').value), _defineProperty(_default_item2, "usernames", [{
        "username": state.data.user.username
      }]), _defineProperty(_default_item2, "views", 0), _defineProperty(_default_item2, "likes", 0), _defineProperty(_default_item2, "dislikes", 0), _default_item2);
    }

    ;

    if (child == 'services') {
      var _default_item3;

      default_item = (_default_item3 = {
        id: 0,
        time: current_second,
        title: document.getElementById('create_services_input_title').value,
        feature_image_src: "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
        subtitle: document.getElementById('create_services_input_subtitle').value,
        paragraph: document.getElementById('create_services_input_paragraph').value,
        categories: ["'".concat(document.getElementById('create_services_input_category').value, "'")],
        subcategories: ["'".concat(document.getElementById('create_services_input_sub_category').value, "'")],
        feature_style: document.getElementById('create_services_input_feature_style').value,
        tags: ["'".concat(document.getElementById('create_services_input_tag').value, "'")],
        types: ["'".concat(document.getElementById('create_services_input_type').value, "'")]
      }, _defineProperty(_default_item3, "feature_image_src", document.getElementById('create_services_input_feature_image_src').value), _defineProperty(_default_item3, "usernames", [{
        "username": state.data.user.username
      }]), _defineProperty(_default_item3, "views", 0), _defineProperty(_default_item3, "likes", 0), _defineProperty(_default_item3, "dislikes", 0), _default_item3);
    }

    ;

    if (child == 'abilities') {
      var _default_item4;

      default_item = (_default_item4 = {
        id: 0,
        time: current_second,
        title: document.getElementById('create_abilities_input_title').value,
        feature_image_src: "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
        subtitle: document.getElementById('create_abilities_input_subtitle').value,
        paragraph: document.getElementById('create_abilities_input_paragraph').value,
        categories: ["'".concat(document.getElementById('create_abilities_input_category').value, "'")],
        subcategories: ["'".concat(document.getElementById('create_abilities_input_sub_category').value, "'")],
        feature_style: document.getElementById('create_abilities_input_feature_style').value,
        tags: ["'".concat(document.getElementById('create_abilities_input_tag').value, "'")],
        types: ["'".concat(document.getElementById('create_abilities_input_type').value, "'")]
      }, _defineProperty(_default_item4, "feature_image_src", document.getElementById('create_abilities_input_feature_image_src').value), _defineProperty(_default_item4, "usernames", [{
        "username": state.data.user.username
      }]), _defineProperty(_default_item4, "views", 0), _defineProperty(_default_item4, "likes", 0), _defineProperty(_default_item4, "dislikes", 0), _default_item4);
    }

    ;

    if (child == 'skills') {
      var _default_item5;

      default_item = (_default_item5 = {
        id: 0,
        time: current_second,
        title: document.getElementById('create_skills_input_title').value,
        feature_image_src: "http://animalmade.com/files/images/projects/animal/animal_hero.jpg",
        subtitle: document.getElementById('create_skills_input_subtitle').value,
        paragraph: document.getElementById('create_skills_input_paragraph').value,
        categories: ["'".concat(document.getElementById('create_skills_input_category').value, "'")],
        subcategories: ["'".concat(document.getElementById('create_skills_input_sub_category').value, "'")],
        feature_style: document.getElementById('create_skills_input_feature_style').value,
        tags: ["'".concat(document.getElementById('create_skills_input_tag').value, "'")],
        types: ["'".concat(document.getElementById('create_skills_input_type').value, "'")]
      }, _defineProperty(_default_item5, "feature_image_src", document.getElementById('create_skills_input_feature_image_src').value), _defineProperty(_default_item5, "usernames", [{
        "username": state.data.user.username
      }]), _defineProperty(_default_item5, "views", 0), _defineProperty(_default_item5, "likes", 0), _defineProperty(_default_item5, "dislikes", 0), _default_item5);
    }

    ;
  }

  ;

  if (child == 'roster') {
    default_item = {
      id: 0,
      time: current_second,
      username: document.getElementById('new_username').value,
      password: document.getElementById('new_password').value,
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
  }

  ;
  document.getElementById('create_library_input_title').value = '';
  document.getElementById('create_services_input_title').value = '';
  document.getElementById('create_abilities_input_title').value = '';
  document.getElementById('create_skills_input_title').value = '';
  document.getElementById('create_partners_input_title').value = ''; // Firebase References
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
}; // more_posts


var less_posts = function less_posts() {
  state.data.posts_start -= 1;
  state.data.posts_limit -= 1; // Set firebase data

  document.getElementById('less_posts_value').innerHTML = state.data.posts_start;
  document.getElementById('more_posts_value').innerHTML = state.data.posts_limit;
  setTimeout(function () {
    Handle_Firebase_Refs_and_Render();
  }, 0);
};

var more_posts = function more_posts() {
  state.data.posts_start += 1;
  state.data.posts_limit += 1; // Set firebase data

  document.getElementById('less_posts_value').innerHTML = state.data.posts_start;
  document.getElementById('more_posts_value').innerHTML = state.data.posts_limit;
  setTimeout(function () {
    Handle_Firebase_Refs_and_Render();
  }, 0);
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
}; // Update


var likeWhoListings = function likeWhoListings(child, id) {
  // Firebase References
  // Firebase Database
  var rootRef = firebase.database().ref();
  var gnougnRef = rootRef.child('gnougn');
  var Ref = gnougnRef.child(child);
  console.log(id, 'from likeWhoListings service');
  var changeThisValue;
  Ref.child(id).once('value', function (snap) {
    changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
  });
  changeThisValue.likes += 1;
  Ref.child(id).set(changeThisValue);
  console.log(id); // Set firebase data

  setTimeout(function () {
    Handle_Firebase_Refs_and_Render();
  }, 0);
}; // Update


var dislikeWhoListings = function dislikeWhoListings(child, id) {
  // Firebase References
  // Firebase Database
  var rootRef = firebase.database().ref();
  var gnougnRef = rootRef.child('gnougn');
  var Ref = gnougnRef.child(child);
  console.log(id, 'from likeWhoListings service');
  var changeThisValue;
  Ref.child(id).once('value', function (snap) {
    changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
  });
  changeThisValue.likes -= 1;
  Ref.child(id).set(changeThisValue);
  console.log(id);
  console.log(changeThisValue); // Set firebase data

  setTimeout(function () {
    Handle_Firebase_Refs_and_Render();
  }, 0);
}; // Update


var viewWhoListings = function viewWhoListings(child, id) {
  // Firebase References
  // Firebase Database
  var rootRef = firebase.database().ref();
  var gnougnRef = rootRef.child('gnougn');
  var Ref = gnougnRef.child(child);
  console.log(id, 'from viewWhoListings service');
  var changeThisValue;
  Ref.child(id).once('value', function (snap) {
    changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
  });
  changeThisValue.views += 1;
  Ref.child(id).set(changeThisValue);
  console.log(id); // Set firebase data

  setTimeout(function () {
    Handle_Firebase_Refs_and_Render();
  }, 0);
};

var Handle_firebase_render = function Handle_firebase_render() {
  // render library
  (function () {
    setTimeout(function () {
      if (state.data.firebase != null) {
        // *********************** "Order of operations" ************************
        find_view(); // 3.) get types

        document.getElementById('types').innerHTML = '';

        for (var i = 0; i < state.data.types.length; i++) {
          // 3 options
          document.getElementById('types').innerHTML += "".concat(state.data.types[i].title) + ' ';
        }

        ; // 1.) set array

        var array = state.data.firebase;
        var array_gnougn_library = array.gnougn.library.sort(find_sort());
        var filtered_array_gnougn_library = []; // 3.) filter array

        for (var i = 0; i < array_gnougn_library.length; i++) {
          if (array_gnougn_library[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
            filtered_array_gnougn_library.push(array_gnougn_library[i]);
          }

          ;
        }

        ; // if logged in

        if (localStorage.username != 'null' && !(localStorage.username == 'null') && !(localStorage.username == null)) {
          if (document.getElementById('element_ol_firebase_user_library') != null) {
            document.getElementById('element_ol_firebase_user_library').innerHTML = '';

            for (var i = 0; i < filtered_array_gnougn_library.length; i++) {
              for (var usernames_index = 0; usernames_index < filtered_array_gnougn_library[i].usernames.length; usernames_index++) {
                if (filtered_array_gnougn_library[i].usernames[usernames_index].username == state.data.user.username) {
                  if (i >= state.data.posts_start - state.data.posts_start && i < state.data.posts_limit) {
                    document.getElementById('element_ol_firebase_user_library').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(filtered_array_gnougn_library[i])));
                  }

                  ;
                }

                ;
              }

              ;
            }

            ;
          }

          ;
        }

        ; // library post - filtered by user subs
        // if logged in

        if (localStorage.username != 'null' && !(localStorage.username == 'null') && !(localStorage.username == null)) {
          if (document.getElementById('element_ol_firebase_user_subs_library') != null) {
            document.getElementById('element_ol_firebase_user_subs_library').innerHTML = '';

            for (var subs_index = 0; subs_index < state.data.user.subs.length; subs_index++) {
              // subs name
              document.getElementById('element_ol_firebase_user_subs_library').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_div("<h1><u>".concat(state.data.user.subs[subs_index].username, "</u>'s post</h1>"))));

              for (var i = 0; i < filtered_array_gnougn_library.length; i++) {
                for (var usernames_index = 0; usernames_index < filtered_array_gnougn_library[i].usernames.length; usernames_index++) {
                  if (filtered_array_gnougn_library[i].usernames[usernames_index].username == state.data.user.subs[subs_index].username) {
                    if (i >= state.data.posts_start - state.data.posts_start && i < state.data.posts_limit) {
                      document.getElementById('element_ol_firebase_user_subs_library').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(filtered_array_gnougn_library[i])));
                    }

                    ;
                  }

                  ;
                }

                ;
              }

              ;
            }

            ;
          }

          ;
        }

        ; // library post - filtered by authors & title

        if (document.getElementById('library_posts_advance_filter') != null) {
          document.getElementById('library_posts_advance_filter').innerHTML = '';

          for (var i = 0; i < filtered_array_gnougn_library.length; i++) {
            // if title match
            if (filtered_array_gnougn_library[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
              var does_Type_Match = false;
              var does_Username_Match = false; // if any types match

              for (var type_index = 0; type_index < state.data.types.length; type_index++) {
                if (state.data.types[type_index].title.toString().toLowerCase().includes(filtered_array_gnougn_library[i].type)) {
                  does_Type_Match = true;
                }

                ;
              }

              ;

              if (state.data.types.length <= 0) {
                does_Type_Match = true;
              } // if any usernames match


              for (var usernames_index = 0; usernames_index < filtered_array_gnougn_library[i].usernames.length; usernames_index++) {
                if (filtered_array_gnougn_library[i].usernames[usernames_index].username.toString().toLowerCase().includes(document.getElementById('element_input_post_username').value)) {
                  does_Username_Match = true;
                }

                ;
              }

              ;

              if (does_Type_Match == true && does_Username_Match == true) {
                if (i >= state.data.posts_start - state.data.feature_posts_limit && i < state.data.posts_limit) {
                  document.getElementById('library_posts_advance_filter').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(filtered_array_gnougn_library[i])));
                }

                ;
              }

              ;
              does_Type_Match = false;
              does_Username_Match = false;
            }

            ;
          }

          ;
        }

        ; // feature

        document.getElementById('element_ol_firebase_library_feature').innerHTML = ''; // title filtered after feature

        for (var i = 0; i < array_gnougn_library.length; i++) {
          if (i < state.data.feature_posts_limit) {
            document.getElementById('element_ol_firebase_library_feature').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(array_gnougn_library[i])));
          }

          ;
        }

        ; // Library after feature

        document.getElementById('element_ol_firebase_library_after_feature').innerHTML = ''; // title filtered after feature

        for (var i = 0; i < array_gnougn_library.length; i++) {
          if (i >= state.data.posts_start && i < state.data.posts_limit) {
            document.getElementById('element_ol_firebase_library_after_feature').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(array_gnougn_library[i])));
          }

          ;
        }

        ; // simple searching all by title

        document.getElementById('element_ol_firebase_library').innerHTML = ''; // title filtered after feature

        for (var i = 0; i < filtered_array_gnougn_library.length; i++) {
          if (i >= state.data.posts_start - state.data.feature_posts_limit && i < state.data.posts_limit) {
            document.getElementById('element_ol_firebase_library').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(filtered_array_gnougn_library[i])));
          }

          ;
        }

        ; // Roster
        // 4.) empty ol element

        document.getElementById('element_ol_firebase_roster').innerHTML = ''; // 5.) fill ol element

        for (var i = 0; i < state.data.firebase.gnougn.roster.length; i++) {
          if (i >= state.data.posts_start - state.data.feature_posts_limit && i < state.data.posts_limit) {
            // console.log(state.data.firebase.gnougn.roster[i]);
            document.getElementById('element_ol_firebase_roster').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(state.data.firebase.gnougn.roster[i])));
          }

          ;
        } // partners
        // 4.) empty ol element


        document.getElementById('element_ol_firebase_partners').innerHTML = ''; // 5.) fill ol element

        for (var i = 0; i < state.data.firebase.gnougn.partners.length; i++) {
          if (i >= state.data.posts_start - state.data.feature_posts_limit && i < state.data.posts_limit) {
            // console.log(state.data.firebase.gnougn.partners[i]);
            document.getElementById('element_ol_firebase_partners').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(state.data.firebase.gnougn.partners[i])));
          }

          ;
        } // Abilities
        // 4.) empty ol element


        document.getElementById('element_ol_firebase_abilities').innerHTML = ''; // 5.) fill ol element

        for (var i = 0; i < state.data.firebase.gnougn.abilities.length; i++) {
          if (i >= state.data.posts_start - state.data.feature_posts_limit && i < state.data.posts_limit) {
            // console.log(state.data.firebase.gnougn.abilities[i]);
            document.getElementById('element_ol_firebase_abilities').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(state.data.firebase.gnougn.abilities[i])));
          }

          ;
        } // services
        // 4.) empty ol element


        document.getElementById('element_ol_firebase_services').innerHTML = ''; // 5.) fill ol element

        for (var i = 0; i < state.data.firebase.gnougn.services.length; i++) {
          if (i >= state.data.posts_start - state.data.feature_posts_limit && i < state.data.posts_limit) {
            // console.log(state.data.firebase.gnougn.services[i]);
            document.getElementById('element_ol_firebase_services').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(state.data.firebase.gnougn.services[i])));
          }

          ;
        } // skills
        // 4.) empty ol element


        document.getElementById('element_ol_firebase_skills').innerHTML = ''; // 5.) fill ol element

        for (var i = 0; i < state.data.firebase.gnougn.skills.length; i++) {
          if (i >= state.data.posts_start - state.data.feature_posts_limit && i < state.data.posts_limit) {
            // console.log(state.data.firebase.gnougn.skills[i]);
            document.getElementById('element_ol_firebase_skills').appendChild(_functions.default.Generate_new_fragment.appendChild(_functions.default.Generate_new_li(state.data.firebase.gnougn.skills[i])));
          }

          ;
        }
      }

      ;
    }, 0);
  })();

  state.data.refs = true;
};

var Handle_Repeat_Firebase_Validation = function Handle_Repeat_Firebase_Validation() {
  setInterval(function () {
    // repeat until refs are set
    if (state.data.refs == false) {
      var temp = state.data.firebase; // console.log('firbase objects -> firbase array');

      if (temp.gnougn.abilities != null) {
        // abilities
        // set objects to array - part 1
        var result_abilities = Object.keys(temp.gnougn.abilities).map(function (key) {
          return temp.gnougn.abilities[key];
        }); // set objects to array - part 2

        temp.gnougn.abilities = result_abilities; // console.log('abilities');
        // console.log(temp.gnougn.abilities);
      }

      ;

      if (temp.gnougn.library != null) {
        // library
        // set objects to array - part 1
        var result_library = Object.keys(temp.gnougn.library).map(function (key) {
          return temp.gnougn.library[key];
        }); // set objects to array - part 2

        temp.gnougn.library = result_library; // console.log('library');
        // console.log(temp.gnougn.library);
      }

      ;

      if (temp.gnougn.partners != null) {
        // partners
        // set objects to array - part 1
        var result_partners = Object.keys(temp.gnougn.partners).map(function (key) {
          return temp.gnougn.partners[key];
        }); // set objects to array - part 2

        temp.gnougn.partners = result_partners; // console.log('partners');
        // console.log(temp.gnougn.partners);
      }

      ;

      if (temp.gnougn.services != null) {
        // services
        // set objects to array - part 1
        var result_services = Object.keys(temp.gnougn.services).map(function (key) {
          return temp.gnougn.services[key];
        }); // set objects to array - part 2

        temp.gnougn.services = result_services; // console.log('services');
        // console.log(temp.gnougn.services);
      }

      ;

      if (temp.gnougn.roster != null) {
        // roster
        // set objects to array - part 1
        var result_roster = Object.keys(temp.gnougn.roster).map(function (key) {
          return temp.gnougn.roster[key];
        }); // set objects to array - part 2

        temp.gnougn.roster = result_roster; // console.log('roster');
        // console.log(temp.gnougn.roster);
      }

      ;

      if (temp.gnougn.skills != null) {
        // skills
        // set objects to array - part 1
        var result_skills = Object.keys(temp.gnougn.skills).map(function (key) {
          return temp.gnougn.skills[key];
        }); // set objects to array - part 2

        temp.gnougn.skills = result_skills; // console.log('skills');
        // console.log(temp.gnougn.skills);
      }

      ; // Render listtings to front_end if firebase respondes

      if (temp.gnougn.skills != null) {
        console.log(temp.gnougn);
        setTimeout(function () {
          state.data.refs = true;

          if (first_load == true) {
            first_load = false;
            console.clear();
            clearInterval(Handle_Repeat_Firebase_Validation()); // check ui state

            setTimeout(function () {
              console.log('done firebase update');
              Handle_load_animation(); // re_check

              setInterval(function () {
                Handle_check_states();
              }, 1000 / state.animation.framerate);
            }, 0); // check ui state

            setTimeout(function () {
              Handle_firebase_render();
              HANDLE_animation_gui_hide();
              Handle_EventListeners();
            }, 100);
          }

          ;
        }, 0);
      }

      ;
    }

    ;
  }, 0);
};

var Handle_Firebase_Refs_and_Render = function Handle_Firebase_Refs_and_Render() {
  console.log('Handle_Firebase_Refs');
  var rootRef = firebase.database().ref();
  var gnougnRef = rootRef.child('gnougn');
  var wordpressRef = gnougnRef.child('wordpress');
  console.log('Handle_Firebase_Refs');

  (function () {
    rootRef.on('value', function (snapshot) {
      var obj = snapshot.val();
      state.data.firebase = obj;
      console.log('state.data.firebase');
      console.log(state.data.firebase);
    });
    state.data.refs = false;
  })();

  Handle_Repeat_Firebase_Validation();
};

var Handle_return_state = function Handle_return_state() {
  return state;
};

var Handle_get_state_from_events = function Handle_get_state_from_events() {
  state = _events.default.Handle_return_state_from_events(); //values_update();
};

var Handle_EventListeners = function Handle_EventListeners() {
  // defaults
  if (document.getElementById('component_app_content') != null) {
    document.getElementById('component_app_content').addEventListener("scroll", function (event) {
      console.log(event); //alert('yup');
      // scrolling

      console.log('event.srcElement.clientWidth: ' + event.srcElement.clientWidth);
      console.log('event.srcElement.clientHeight: ' + event.srcElement.clientHeight);
      console.log('event.srcElement.scrollLeft: ' + event.srcElement.scrollLeft);
      console.log('event.srcElement.scrollTop: ' + event.srcElement.scrollTop);
      console.log('event.srcElement.scrollWidth: ' + event.srcElement.scrollWidth);
      console.log('event.srcElement.scrollHeight: ' + event.srcElement.scrollHeight);
      state.ui.root.clientHeight = event.srcElement.clientHeight;
      state.ui.root.clientWidth = event.srcElement.clientWidth;
      state.ui.root.scrollHeight = event.srcElement.scrollHeight;
      state.ui.root.scrollWidth = event.srcElement.scrollWidth;
      state.ui.root.scrollTop = event.srcElement.scrollTop;
      state.ui.root.scrollLeft = event.srcElement.scrollLeft;
      var currY = event.srcElement.scrollTop / (event.srcElement.scrollHeight - event.srcElement.clientHeight) * 100;
      console.log(currY);

      if (currY == 0) {
        state.animation.instances.scrolled_top = true;
        state.animation.instances.scrolled_bottom = false;

        if (state.animation.instances.scrolled_top == true) {
          alert('scrolled_top met');
        }

        ;
      }

      ;

      if (currY == 100) {
        state.animation.instances.scrolled_top = false;
        state.animation.instances.scrolled_bottom = true;

        if (state.animation.instances.scrolled_bottom == true) {
          alert('scrolled_bottom met');
        }

        ;
      }

      ;

      if (document.getElementById('scroll_clientHeight') != null) {
        document.getElementById('scroll_clientHeight').innerHTML = event.srcElement.clientHeight;
      }

      if (document.getElementById('scroll_clientWidth') != null) {
        document.getElementById('scroll_clientWidth').innerHTML = event.srcElement.clientWidth;
      }

      if (document.getElementById('scroll_scrollHeight') != null) {
        document.getElementById('scroll_scrollHeight').innerHTML = event.srcElement.scrollHeight;
      }

      if (document.getElementById('scroll_scrollWidth') != null) {
        document.getElementById('scroll_scrollWidth').innerHTML = event.srcElement.scrollWidth;
      }

      if (document.getElementById('scroll_scrollTop') != null) {
        document.getElementById('scroll_scrollTop').innerHTML = event.srcElement.scrollTop;
      }

      ;

      if (document.getElementById('scroll_scrollLeft') != null) {
        document.getElementById('scroll_scrollLeft').innerHTML = event.srcElement.scrollLeft;
      } // instances      


      if (event.srcElement.scrollTop > state.ui.root.component_app_gui_scroll_y_position) {
        console.log('state.ui.root.component_app_gui_scroll_y_position increasing');
        console.log("instance: wheel up");
      }

      if (event.srcElement.scrollTop < state.ui.root.component_app_gui_scroll_y_position) {
        console.log('state.ui.root.component_app_gui_scroll_y_position decreasing');
        console.log("instance: wheel down");
      }

      if (event.srcElement.scrollTop === 0) {
        console.log("instance: top of page"); // gui change
      }

      if (event.srcElement.scrollTop > 1 && !(event.srcElement.scrollHeight < event.srcElement.scrollTop + event.srcElement.offsetHeight)) {
        console.log('instance: scrolling started'); // gui change
      }

      if (event.srcElement.scrollTop < event.srcElement.clientHeight) {
        console.log('instance: inside lead'); // gui change
      }

      ;

      if (event.srcElement.scrollTop > event.srcElement.clientHeight) {
        console.log('instance: past lead'); // gui change
      }

      if (event.srcElement.scrollHeight - event.srcElement.clientHeight > event.srcElement.scrollTop + event.srcElement.offsetHeight) {
        console.log('instance: 100vh before bottom not met'); // gui change
      }

      ;

      if (event.srcElement.scrollHeight - event.srcElement.clientHeight < event.srcElement.scrollTop + event.srcElement.offsetHeight) {
        console.log('instance: 100vh before bottom met'); // gui change
      }

      ;

      if (event.srcElement.scrollHeight - event.srcElement.scrollTop === event.srcElement.clientHeight) {
        alert("instance: footer met");
      }

      state.ui.root.component_app_gui_scroll_y_position = event.srcElement.scrollTop;
    }, false);
  } // Gui Button Actions


  if (document.getElementById('icon_logo') != null) {
    document.getElementById('icon_logo').addEventListener("click", function (event) {
      state.ui.stage.cardboard.set = 0;
    });
  }

  ; // Gui Button Actions

  if (document.getElementById('search_route') != null) {
    document.getElementById('search_route').addEventListener("click", function (event) {
      alert('yo');

      if (document.getElementById('icon_search').classList.contains('gui_search')) {
        // style
        document.getElementById('icon_search').classList.remove('gui_search');
        document.getElementById('icon_search').classList.add('gui_close'); // model
        //pages

        state.ui.modal.page.right.display = true;
        state.ui.modal.page.right.transform = false;
      } else {
        // search closed
        // style
        document.getElementById('icon_search').classList.remove('gui_close');
        document.getElementById('icon_search').classList.add('gui_search'); // nav

        state.ui.modal.page.right.display = true;
        state.ui.modal.page.right.transform = true;
      }

      ;
    });
  }

  ; // Gui Button Actions

  if (document.getElementById('icon_menu') != null) {
    document.getElementById('icon_menu').addEventListener("click", function (event) {
      if (document.getElementById('icon_menu').classList.contains('gui_navs_bars')) {
        // style
        document.getElementById('icon_menu').classList.remove('gui_navs_bars');
        document.getElementById('icon_menu').classList.add('gui_close'); // navs

        state.ui.modal.nav.top.display = true;
        state.ui.modal.nav.top.transform = true;
      } else {
        // menu closed
        // style
        document.getElementById('icon_menu').classList.remove('gui_close');
        document.getElementById('icon_menu').classList.add('gui_navs_bars'); // nav

        state.ui.modal.nav.top.display = true;
        state.ui.modal.nav.top.transform = false;
      }

      ;
    });
  }

  ;

  if (document.getElementById('icon_dots') != null) {
    document.getElementById('icon_dots').addEventListener("click", function (event) {
      if (document.getElementById('icon_dots').classList.contains('gui_dots')) {
        // style
        document.getElementById('icon_dots').classList.remove('gui_dots');
        document.getElementById('icon_dots').classList.add('gui_close'); // menu

        state.ui.modal.menu.right.display = true;
        setTimeout(function () {
          state.ui.modal.menu.right.transform = false;
        }, 101);
      } else {
        // menu closed
        // style
        document.getElementById('icon_dots').classList.remove('gui_close');
        document.getElementById('icon_dots').classList.add('gui_dots'); // menu

        state.ui.modal.menu.right.transform = true;
        setTimeout(function () {
          state.ui.modal.menu.right.display = false;
        }, 101);
      }

      ;
    });
  }

  ; // filter by title

  if (document.getElementById('element_input_filter') != null) {
    document.getElementById('element_input_filter').addEventListener('keydown', function (event) {
      // filter library
      setTimeout(function () {
        Handle_Firebase_Refs_and_Render();
      }, 0);
    });
  }

  ; // filter by title

  if (document.getElementById('element_input_types') != null) {
    document.getElementById('element_input_types').addEventListener('keydown', function (event) {
      if (event.keyCode == 13) {
        state.data.types.push({
          title: document.getElementById('element_input_types').value
        }); // filter library

        setTimeout(function () {
          Handle_Firebase_Refs_and_Render();
        }, 0);
      }

      ;
    });
  }

  ; // filter by title

  if (document.getElementById('element_input_post_username') != null) {
    document.getElementById('element_input_post_username').addEventListener('keydown', function (event) {
      // filter library
      setTimeout(function () {
        Handle_Firebase_Refs_and_Render();
      }, 0);
    });
  }

  ; // sort

  if (document.getElementById('element_input_sorting_type') != null) {
    document.getElementById('element_input_sorting_type').addEventListener('keydown', function (event) {
      // filter library
      setTimeout(function () {
        Handle_Firebase_Refs_and_Render();
      }, 0);
    });
  }

  ; // less_posts post

  if (document.getElementById('less_posts') != null) {
    document.getElementById('less_posts').addEventListener('click', function (event) {
      less_posts();
    });
  }

  ; // more_posts post

  if (document.getElementById('more_posts') != null) {
    document.getElementById('more_posts').addEventListener('click', function (event) {
      more_posts();
    });
  }

  ; // create post

  if (document.getElementById('element_input_create_library') != null) {
    document.getElementById('element_input_create_library').addEventListener('click', function (event) {
      addListings('library');
    });
  }

  ; // create user

  if (document.getElementById('element_input_create_roster') != null) {
    document.getElementById('element_input_create_roster').addEventListener('click', function (event) {
      if (document.getElementById('new_username').value == '') {
        console.log('new username needed');
      }

      ;

      if (document.getElementById('new_password').value == '') {
        console.log('new password needed');
      }

      ;

      if (document.getElementById('new_username').value != '' && document.getElementById('new_password').value != '') {
        addListings('roster');
        document.getElementById('new_username').value = '';
        document.getElementById('new_password').value = '';
      }

      ;
    });
  }

  ; // create services

  if (document.getElementById('element_input_create_services') != null) {
    document.getElementById('element_input_create_services').addEventListener('click', function (event) {
      addListings('services');
    });
  }

  ; // create partners

  if (document.getElementById('element_input_create_partners') != null) {
    document.getElementById('element_input_create_partners').addEventListener('click', function (event) {
      addListings('partners');
    });
  }

  ; // create abilities

  if (document.getElementById('element_input_create_abilities') != null) {
    document.getElementById('element_input_create_abilities').addEventListener('click', function (event) {
      addListings('abilities');
    });
  }

  ; // create skills

  if (document.getElementById('element_input_create_skills') != null) {
    document.getElementById('element_input_create_skills').addEventListener('click', function (event) {
      addListings('skills');
    });
  }

  ; // sign_in

  if (document.getElementById('element_user_sign_in') != null) {
    document.getElementById('element_user_sign_in').addEventListener('click', function (event) {
      for (var i = 0; i < state.data.firebase.gnougn.roster.length; i++) {
        var trying_username = document.getElementById('username').value;
        var trying_password = document.getElementById('password').value;

        if (state.data.firebase.gnougn.roster[i].username == trying_username) {
          var validate_username = true;
          var validated_user = state.data.firebase.gnougn.roster[i];

          if (validated_user.password == trying_password) {
            var validate_password = true;
            state.data.user = validated_user;
            localStorage.setItem("user", state.data.user);
            localStorage.setItem("username", state.data.user.username);
            localStorage.setItem("password", state.data.user.password);
            sign_in_ui();
          }

          ;
        }

        ;
      }

      ;
    });
  }

  ; // sign_out

  if (document.getElementById('element_user_sign_out') != null) {
    document.getElementById('element_user_sign_out').addEventListener('click', function (event) {
      sign_out_ui();
    });
  }

  ;
};

var Handle_Timers = function Handle_Timers() {
  // start timer
  (function () {
    var int = 0;
    setInterval(function () {
      console.log(state.events.key.keys); // desktop

      if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        if (state.events.key.keys.length == 0) {
          state.events.key.up = true;
          state.events.key.down = false;
        }

        ;

        if (state.events.key.keys.length != 0) {
          state.events.key.up = false;
          state.events.key.down = true;
        }

        ;

        if (state.events.key.up == true) {
          state.events.key.timer -= 1;
          console.log('state.events.key.timer: ' + state.events.key.timer);

          if (document.getElementById('timer_key_up') != null) {
            document.getElementById('timer_key_up').innerHTML = state.events.key.timer;
          }
        }

        if (state.events.key.up == false) {
          state.events.key.timer += 1;
          console.log('state.events.key.timer: ' + state.events.key.timer);

          if (document.getElementById('timer_key_up') != null) {
            document.getElementById('timer_key_up').innerHTML = state.events.key.timer;
          }
        }

        if (state.events.mouse.up == true) {
          state.events.mouse.timer -= 1;
          console.log('state.events.mouse.timer: ' + state.events.mouse.timer);

          if (document.getElementById('timer_mouse_up') != null) {
            document.getElementById('timer_mouse_up').innerHTML = state.events.mouse.timer;
          }
        }

        if (state.events.mouse.up == false) {
          state.events.mouse.timer += 1;
          console.log('state.events.mouse.timer: ' + state.events.mouse.timer);

          if (document.getElementById('timer_mouse_up') != null) {
            document.getElementById('timer_mouse_up').innerHTML = state.events.mouse.timer;
          }
        }

        if (state.events.mouse.enter == true) {
          state.events.mouse.leavetimer = 0;
          console.log('state.events.mouse.leavetimer: ' + state.events.mouse.leavetimer);

          if (document.getElementById('timer_mouse_leave') != null) {
            document.getElementById('timer_mouse_leave').innerHTML = state.events.mouse.leavetimer;
          }
        }

        if (state.events.mouse.enter == false) {
          state.events.mouse.leavetimer += 1;
          console.log('state.events.mouse.leavetimer: ' + state.events.mouse.leavetimer);

          if (document.getElementById('timer_mouse_leave') != null) {
            document.getElementById('timer_mouse_leave').innerHTML = state.events.mouse.leavetimer;
          }
        }

        if (state.events.mouse.leavetimer == 5) {
          console.log('timeout active');
        }

        ;
      }

      ; // Mobile

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        if (state.events.touch.enter == true) {
          state.events.touch.leavetimer = 0;
          console.log('state.events.touch.leavetimer: ' + state.events.touch.leavetimer);

          if (document.getElementById('timer_mouse_leave') != null) {
            document.getElementById('timer_mouse_leave').innerHTML = state.events.touch.leavetimer;
          }
        }

        if (state.events.touch.enter == false) {
          state.events.touch.leavetimer += 1;
          console.log('state.events.touch.leavetimer: ' + state.events.touch.leavetimer);

          if (document.getElementById('timer_mouse_leave') != null) {
            document.getElementById('timer_mouse_leave').innerHTML = state.events.touch.leavetimer;
          }
        }

        if (state.events.touch.leavetimer == 30) {
          console.log('timeout active');
        }

        ;

        if (state.events.touch.leavetimer == 60) {
          console.log('timeout active');
        }

        ;
      }

      ;
      int += 1;
      console.log(int);
    }, 1000);
  })(); // console.log(state.ui.interaction.dice);
  // console.log(state.ui.interaction.random);


  (function () {
    setInterval(function () {
      if (document.getElementById('time') != null) {
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var date = new Date();
        state.data.time = 'Today is ' + days[date.getDay()] + ', ' + months[date.getMonth()] + ', ' + date.getDay() + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();
        console.log(state.data.time);
        document.getElementById('time').innerText = state.data.time;
      }

      ;
    }, 1000);
  })();
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

var player_1_grow = function player_1_grow() {
  state.ui.interaction.player_1.cycles.growth = !state.ui.interaction.player_1.cycles.growth;
  state.ui.interaction.player_1.cycles.shrink = false;
};

var player_1_shrink = function player_1_shrink() {
  state.ui.interaction.player_1.cycles.shrink = !state.ui.interaction.player_1.cycles.shrink;
  state.ui.interaction.player_1.cycles.growth = false;
};

var HANDLE_load_order = function HANDLE_load_order() {
  state.animation.instances.loading = true;
  state.animation.instances.sequence = 0;
  state.ui.stage.cardboard.scene = 1; // overall site frames by 24 frames

  (function () {
    var interval = 24 * -3;
    setInterval(function () {
      // before "96 frames (4 seconds)"
      if (interval == 24 * -3) {
        HANDLE_pre_loader();
      }

      ; // After "48 frames" exc..

      if (interval == 0) {
        Handle_Firebase_Refs_and_Render();
      }

      ;
      interval += 1; //console.log('current frame is: ' + interval);
    }, 1000 / state.animation.framerate);
  })();
};

var Handle_load_animation = function Handle_load_animation() {
  Handle_render();
  check_local_user();
  Handle_Timers();
  state.animation.instances.loading = true;
  state.animation.instances.sequence = 0; // overall site frames by 24 frames

  (function () {
    var interval = 24 * -3;
    setInterval(function () {
      // before "96 frames (4 seconds)"
      if (interval == 24 * -3) {
        state.animation.instances.loading = true;
        state.ui.stage.cardboard.scene = 1;
        state.animation.instances.sequence = 0;
        /* 500 ms */
        // wheels

        (function () {
          var frame = 1;
          setInterval(function () {
            (function () {
              state.ui.root.wheels = 0;
              state.ui.root.wheel = 'still';
            })();
          }, 50);
        })();
      }

      ;

      if (interval == 24 * -2) {
        if (document.getElementById('bar') != null) {
          document.getElementById('bar').classList.remove('width_8705');
          document.getElementById('bar').classList.add('width_100');
        }

        ;
      }

      ;

      if (interval == 24 * -1) {
        if (document.getElementById('bar_container') != null) {
          document.getElementById('bar_container').classList.remove('enterBottom');
          document.getElementById('bar_container').classList.add('fadeOut');
        }

        ;
      }

      ; // After "48 frames" exc..

      if (interval == 24 * 0) {
        if (document.getElementById('bar_container') != null) {
          document.getElementById('bar_container').classList.add('display_none');
        }

        ;
        state.animation.instances.loading = false;
        HANDLE_animation_paint_hand();
        Handle_loading_sequence();
      }

      ;
      interval += 1; //console.log('current frame is: ' + interval);
    }, 1000 / state.animation.framerate);
  })();
};

var Handle_loading_sequence = function Handle_loading_sequence() {
  // overall site frames by 24 frames
  (function () {
    var interval = 24 * -2;
    setInterval(function () {
      // After "48 frames" exc..
      if (interval == 24 * 0) {
        state.animation.instances.sequence = 0;
      }

      ; // 5 seconds of loading for preloading images

      if (interval == 24 * 1) {
        state.animation.instances.sequence = 1;
      }

      ; // 5 seconds of loading for preloading images

      if (interval == 24 * 2) {
        state.animation.instances.sequence = 2;
      }

      ; // 5 seconds of loading for preloading images

      if (interval == 24 * 3) {
        state.animation.instances.sequence = 3;
      }

      ; // 5 seconds of loading for preloading images

      if (interval == 24 * 4) {
        state.animation.instances.sequence = 4;
        state.ui.interaction.player_1.display = true;
      }

      ;

      if (interval == 24 * 5) {
        state.animation.instances.sequence = 5;
      }

      ;

      if (interval == 24 * 6) {
        state.animation.instances.sequence = 6;

        if (document.getElementById('draw_hand') != null) {
          document.getElementById('draw_hand').classList.remove('display_none');
        }

        ;
      }

      ;

      if (interval == 24 * 7) {
        state.animation.instances.sequence = 7;
      }

      ;

      if (interval == 24 * 8) {
        state.animation.instances.sequence = 8;
        state.ui.stage.cardboard.set = 1;
      }

      ;

      if (interval == 24 * 9) {
        state.animation.instances.sequence = 9;

        if (document.getElementById('draw_hand') != null) {
          document.getElementById('draw_hand').classList.add('display_none');
        }

        ;
      }

      ;

      if (interval == 24 * 10) {
        state.animation.instances.sequence = 10;
        player_1_grow();
      }

      ;

      if (interval == 24 * 11) {
        state.animation.instances.sequence = 11;
      }

      ;

      if (interval == 24 * 12) {
        state.animation.instances.sequence = 12;
      }

      ;

      if (interval == 24 * 13) {
        state.animation.instances.sequence = 13;
      }

      ;
      interval += 1; //console.log('current frame is: ' + interval);
    }, 1000 / state.animation.framerate);
  })();
};

var HANDLE_animation_gui_hide = function HANDLE_animation_gui_hide() {
  // modals
  state.ui.gui.top_left.transform = true;
  state.ui.gui.top.transform = true;
  state.ui.gui.top_right.transform = true;
  state.ui.gui.bottom_left.transform = true;
  state.ui.gui.bottom.transform = true;
  state.ui.gui.bottom_right.transform = true;
  state.ui.gui.right.transform = true;
  state.ui.gui.left.transform = true;
  setTimeout(function () {
    // modals
    state.ui.gui.top_left.display = false;
    state.ui.gui.top.display = false;
    state.ui.gui.top_right.display = false;
    state.ui.gui.bottom_left.display = false;
    state.ui.gui.bottom.display = false;
    state.ui.gui.bottom_right.display = false;
    state.ui.gui.right.display = false;
    state.ui.gui.left.display = false;
  }, 101);
};

var HANDLE_animation_gui_show = function HANDLE_animation_gui_show() {
  // modals
  state.ui.gui.top_left.display = true;
  state.ui.gui.top.display = true;
  state.ui.gui.top_right.display = true;
  state.ui.gui.bottom_left.display = true;
  state.ui.gui.bottom.display = true;
  state.ui.gui.bottom_right.display = true;
  state.ui.gui.right.display = true;
  state.ui.gui.left.display = true;
  setTimeout(function () {
    state.ui.gui.top_left.transform = false;
    state.ui.gui.top.transform = false;
    state.ui.gui.top_right.transform = false;
    state.ui.gui.bottom_left.transform = false;
    state.ui.gui.bottom.transform = false;
    state.ui.gui.bottom_right.transform = false;
    state.ui.gui.right.transform = false;
    state.ui.gui.left.transform = false;
  }, 101);
}; // resize


var resize = function resize() {}; // Lifecycle hooks


var onload = function onload() {
  // garage('monster', 'monster');
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
  HANDLE_load_order();
};

window.onload = function () {
  console.log('onload');
  onload();
};

window.onresize = function () {
  console.log('resize');
  resize();
}; // Exports


var _default = {
  Handle_get_state_from_events: Handle_get_state_from_events,
  Handle_return_state: Handle_return_state,
  addListings: addListings,
  deleteWhoListings: deleteWhoListings,
  likeWhoListings: likeWhoListings,
  dislikeWhoListings: dislikeWhoListings,
  viewWhoListings: viewWhoListings,
  check_local_user: check_local_user,
  HANDLE_animation_gui_hide: HANDLE_animation_gui_hide,
  HANDLE_animation_gui_show: HANDLE_animation_gui_show,
  Handle_load_animation: Handle_load_animation,
  player_1_grow: player_1_grow,
  player_1_shrink: player_1_shrink
};
exports.default = _default;
},{"./style.scss":"style.scss","./partials/functions":"partials/functions.js","./partials/state":"partials/state.js","./partials/events":"partials/events.js","./partials/defaults":"partials/defaults.js","./partials/components":"partials/components.js","./partials/ui":"partials/ui.js","./partials/folds":"partials/folds.js","./partials/interaction":"partials/interaction.js","./partials/animation":"partials/animation.js","./partials/stages":"partials/stages.js","./partials/pieces":"partials/pieces.js","./partials/sets":"partials/sets.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52787" + '/');

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
//# sourceMappingURL=/nownigel.com.e31bb0bc.map