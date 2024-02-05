export default function(global, globalThis, window, $app_exports$, $app_evaluate$){
            var setTimeout = global.setTimeout;
            var setInterval = global.setInterval;
            var clearTimeout = global.clearTimeout;
            var clearInterval = global.clearInterval;
            
            var createPageHandler = function() {
              return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/home/genkaim/桌面/vela-muyu/muyu&cacheDirectory&plugins[]=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/confirm/confirm.ux?uxType=page":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/home/genkaim/桌面/vela-muyu/muyu&cacheDirectory&plugins[]=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/confirm/confirm.ux?uxType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _system = _interopRequireDefault($app_require$("@app-module/system.router"));
var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  goBack(event) {
    _system.default.back();
  },
  clearData(event) {
    this.$app.$def.data.rpCount = 0;
    this.$app.$def.data.nrpCount = 0;
    _system.default.back();
  }
};
exports.default = _default;
const moduleOwn = exports.default || module.exports;
const accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    const accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (const name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/confirm/confirm.ux?uxType=page":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/confirm/confirm.ux?uxType=page ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = [
  [
    [
      [
        0,
        "yes"
      ]
    ],
    {
      "width": "500px",
      "height": "150px",
      "color": "#FFFFFF",
      "fontSize": "40px",
      "fontWeight": "bold",
      "marginTop": "50px",
      "backgroundColor": "rgb(44,44,44)"
    }
  ],
  [
    [
      [
        0,
        "no"
      ]
    ],
    {
      "width": "500px",
      "height": "150px",
      "color": "#FFFFFF",
      "fontSize": "40px",
      "fontWeight": "bold",
      "marginTop": "30px"
    }
  ],
  [
    [
      [
        0,
        "page"
      ]
    ],
    {
      "position": "absolute",
      "backgroundColor": "#000000",
      "display": "flex",
      "flexDirection": "column",
      "justifyContent": "center",
      "alignItems": "center"
    }
  ],
  [
    [
      [
        0,
        "back"
      ]
    ],
    {
      "position": "absolute",
      "left": "0px",
      "top": "10px",
      "backgroundColor": "#000000",
      "color": "#FFFFFF",
      "fontSize": "80px",
      "fontWeight": "bold",
      "backgroundImage": "/common/icon-back.png"
    }
  ],
  [
    [
      [
        0,
        "title"
      ]
    ],
    {
      "color": "#FFFFFF",
      "fontSize": "50px",
      "fontWeight": "bold",
      "top": "5px"
    }
  ]
]

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/confirm/confirm.ux?uxType=page&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/confirm/confirm.ux?uxType=page& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function (vm) {
  const _vm_ = vm || this
  return aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "page"
  ]
}
    }
  ,
		[aiot.__ce__('text', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "title"
  ],
  "value": "确定要清除所有功德吗"
}
    }
  ),aiot.__ce__('input', {
      __vm__: _vm_,
      __opts__: {
  "type": "button",
  "value": "确认",
  "classList": [
    "yes"
  ],
  "events": {
    "click": function (evt) {_vm_.clearData(evt)}
  }
}
    }
  ),aiot.__ce__('input', {
      __vm__: _vm_,
      __opts__: {
  "type": "button",
  "value": "取消",
  "classList": [
    "no"
  ],
  "events": {
    "click": function (evt) {_vm_.goBack(evt)}
  }
}
    }
  )])
}

/***/ }),

/***/ "./src/pages/confirm/confirm.ux?uxType=page":
/*!**************************************************!*\
  !*** ./src/pages/confirm/confirm.ux?uxType=page ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./confirm.ux?uxType=page */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/confirm/confirm.ux?uxType=page")

var $app_script$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../node_modules/babel-loader/lib/index.js?cwd=/home/genkaim/桌面/vela-muyu/muyu&cacheDirectory&plugins[]=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/packager/babel.config.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./confirm.ux?uxType=page */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/home/genkaim/桌面/vela-muyu/muyu&cacheDirectory&plugins[]=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/confirm/confirm.ux?uxType=page")

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./confirm.ux?uxType=page& */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/confirm/confirm.ux?uxType=page&")

$app_script$({}, $app_exports$, $app_require$);
$app_exports$.default.template = $app_template$;
$app_exports$.default.style = $app_style$;
module.exports = $app_exports$.default;

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/confirm/confirm.ux?uxType=page");
/******/ 	
/******/ })()
;
            };
            return createPageHandler();
          };