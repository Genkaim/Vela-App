export default function(global, globalThis, window, $app_exports$, $app_evaluate$){
  var setTimeout = global.setTimeout;
  var setInterval = global.setInterval;
  var clearTimeout = global.clearTimeout;
  var clearInterval = global.clearInterval;
            
  var $app_define_wrap$ = $app_define_wrap$ || function() {}
  var createAppHandler = function() {
    return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/home/genkaim/桌面/vela-muyu/muyu/src!./node_modules/babel-loader/lib/index.js?cwd=/home/genkaim/桌面/vela-muyu/muyu&cacheDirectory&comments=false&configFile=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/home/genkaim/桌面/vela-muyu/muyu/src!./node_modules/babel-loader/lib/index.js?cwd=/home/genkaim/桌面/vela-muyu/muyu&cacheDirectory&comments=false&configFile=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _system = _interopRequireDefault($app_require$("@app-module/system.storage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function stringToBool(str) {
  if (str.toLowerCase() === "true") return true;
  if (str.toLowerCase() === "false") return false;
  throw new Error("Invalid string value for boolean conversion");
}
var _default = {
  data: {
    rpCount: 0,
    nrpCount: 0,
    is_rp: false,
    enable_vibrate: true,
    enable_ani: false
  },
  onCreate() {
    var self = this;
    _system.default.get({
      key: 'genkaim_muyu_cnt',
      success: function (e) {
        e && (self.data.rpCount = parseInt(e));
      },
      fail: function () {}
    });
    _system.default.get({
      key: 'genkaim_muyu_ncnt',
      success: function (e) {
        e && (self.data.nrpCount = parseInt(e));
      },
      fail: function () {}
    });
    _system.default.get({
      key: 'genkaim_config_rp',
      success: function (e) {
        e && (self.data.is_rp = stringToBool(e));
      },
      fail: function () {}
    });
    _system.default.get({
      key: 'genkaim_config_vibrate',
      success: function (e) {
        e && (self.data.enable_vibrate = stringToBool(e));
      },
      fail: function () {}
    });
    _system.default.get({
      key: 'genkaim_config_ani',
      success: function (e) {
        e && (self.data.enable_ani = stringToBool(e));
      },
      fail: function () {}
    });
  },
  onDestroy() {
    _system.default.set({
      key: 'genkaim_muyu_cnt',
      value: String(this.data.rpCount),
      success: function () {
        console.log('Data saved successfully');
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`);
      }
    });
    _system.default.set({
      key: 'genkaim_muyu_ncnt',
      value: String(this.data.nrpCount),
      success: function () {
        console.log('Data saved successfully');
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`);
      }
    });
    _system.default.set({
      key: 'genkaim_config_rp',
      value: String(this.data.is_rp),
      success: function () {
        console.log('Data saved successfully');
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`);
      }
    });
    _system.default.set({
      key: 'genkaim_config_vibrate',
      value: String(this.data.enable_vibrate),
      success: function () {
        console.log('Data saved successfully');
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`);
      }
    });
    _system.default.set({
      key: 'genkaim_config_ani',
      value: String(this.data.enable_ani),
      success: function () {
        console.log('Data saved successfully');
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`);
      }
    });
  }
};
exports.default = _default;}

/***/ }),

/***/ "./src/manifest.json":
/*!***************************!*\
  !*** ./src/manifest.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"package":"com.genkaim.muyu","name":"电子木鱼","versionName":"1.2.0","versionCode":5,"minPlatformVersion":1000,"icon":"/common/logo.png","deviceTypeList":["watch"],"features":[{"name":"system.storage"},{"name":"system.file"},{"name":"system.prompt"},{"name":"system.vibrator"}],"config":{"logLevel":"log","designWidth":600},"router":{"entry":"pages/index","pages":{"pages/index":{"component":"index"},"pages/settings":{"component":"settings"},"pages/confirm":{"component":"confirm"},"pages/about":{"component":"about"}}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/

  var $app_style$ = {}
  var $app_script$ = __webpack_require__(/*! !../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/home/genkaim/桌面/vela-muyu/muyu/src!../node_modules/babel-loader/lib/index.js?cwd=/home/genkaim/桌面/vela-muyu/muyu&cacheDirectory&comments=false&configFile=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/packager/babel.config.js!../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./app.ux?uxType=app */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/home/genkaim/桌面/vela-muyu/muyu/src!./node_modules/babel-loader/lib/index.js?cwd=/home/genkaim/桌面/vela-muyu/muyu&cacheDirectory&comments=false&configFile=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app")

  $app_script$({}, $app_exports$, $app_require$)
    
  
  $app_exports$.default.style = $app_style$
  $app_exports$.default.manifest = __webpack_require__(/*! ./manifest.json */ "./src/manifest.json")
    
})();

/******/ })()
;
  };
  return createAppHandler();
};