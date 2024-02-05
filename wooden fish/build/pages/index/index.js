export default function(global, globalThis, window, $app_exports$, $app_evaluate$){
            var setTimeout = global.setTimeout;
            var setInterval = global.setInterval;
            var clearTimeout = global.clearTimeout;
            var clearInterval = global.clearInterval;
            
            var createPageHandler = function() {
              return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/home/genkaim/桌面/vela-muyu/muyu&cacheDirectory&plugins[]=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/index/index.ux?uxType=page":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/home/genkaim/桌面/vela-muyu/muyu&cacheDirectory&plugins[]=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/index/index.ux?uxType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _system = _interopRequireDefault($app_require$("@app-module/system.prompt"));
var _system2 = _interopRequireDefault($app_require$("@app-module/system.vibrator"));
var _system3 = _interopRequireDefault($app_require$("@app-module/system.router"));
var _system4 = _interopRequireDefault($app_require$("@app-module/system.storage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function stringToBool(str) {
  if (str.toLowerCase() === "true") return true;
  if (str.toLowerCase() === "false") return false;
  throw new Error("Invalid string value for boolean conversion");
}
var _default = {
  public: {
    PlusList: [],
    SmallMuyu: false,
    localCnt: 0,
    nlocalCnt: 0,
    plus: false,
    local_is_rp: false,
    local_enable_ani: false,
    local_enable_vibrate: true,
    str_mes: '功德+1',
    str_vib: 'short',
    list_mes: {
      false: '功德+1',
      true: 'RP++'
    },
    list_vib: {
      false: 'N',
      true: 'short'
    }
  },
  goToSettings(event) {
    _system3.default.push({
      uri: '/pages/settings'
    });
  },
  Show() {
    if (this.PlusList.length <= 3 && this.local_enable_ani) {
      this.PlusList.push({
        uniqueId: this.localCnt
      });
      this.DeletePlus();
    }
  },
  DeletePlus() {
    setTimeout(() => {
      if (this.PlusList.length > 0) {
        this.PlusList.splice(0, 1);
      }
    }, 300);
  },
  ChangeMuyu() {
    if (this.local_enable_ani) {
      this.SmallMuyu = true;
      setTimeout(() => {
        this.SmallMuyu = false;
      }, 200);
    }
  },
  rpPlusPlus(event) {
    this.plus = true;
    this.localCnt++;
    this.Show();
    this.ChangeMuyu();
    this.$app.$def.data.rpCount = this.localCnt;
    setTimeout(() => {
      this.plus = false;
    }, 400);
    if (!this.local_enable_ani) {
      _system.default.showToast({
        message: this.str_mes,
        duration: 200
      });
    }
    this.Show();
    this.ChangeMuyu();
    this.$app.$def.data.rpCount = this.localCnt;
    setTimeout(() => {
      this.plus = false;
    }, 400);
    if (!this.local_enable_ani) {
      _system.default.showToast({
        message: this.str_mes,
        duration: 200
      });
    }
    console.log("vibrated");
    _system2.default.vibrate({
      mode: this.str_vib
    });
  },
  nrpPlusPlus(event) {
    this.plus = true;
    this.nlocalCnt++;
    this.Show();
    this.ChangeMuyu();
    this.$app.$def.data.nrpCount = this.nlocalCnt;
    setTimeout(() => {
      this.plus = false;
    }, 400);
    if (!this.local_enable_ani) {
      _system.default.showToast({
        message: this.str_mes,
        duration: 200
      });
    }
    _system2.default.vibrate({
      mode: this.str_vib
    });
  },
  onInit() {
    var self = this;
    this.localCnt = this.$app.$def.data.rpCount;
    this.nlocalCnt = this.$app.$def.data.nrpCount;
    this.local_is_rp = this.$app.$def.data.is_rp;
    this.local_enable_vibrate = this.$app.$def.data.enable_vibrate;
    this.local_enable_ani = this.$app.$def.data.enable_ani;
    _system4.default.get({
      key: 'genkaim_muyu_cnt',
      success: function (e) {
        e && (self.localCnt = parseInt(e));
      },
      fail: function () {}
    });
    _system4.default.get({
      key: 'genkaim_muyu_ncnt',
      success: function (e) {
        e && (self.nlocalCnt = parseInt(e));
      },
      fail: function () {}
    });
    _system4.default.get({
      key: 'genkaim_config_rp',
      success: function (e) {
        e && (self.local_is_rp = stringToBool(e));
        self.str_mes = self.list_mes[stringToBool(e)];
      },
      fail: function () {}
    });
    _system4.default.get({
      key: 'genkaim_config_vibrate',
      success: function (e) {
        e && (self.local_enable_vibrate = stringToBool(e));
        self.str_vib = self.list_vib[stringToBool(e)];
      },
      fail: function () {}
    });
    _system4.default.get({
      key: 'genkaim_config_ani',
      success: function (e) {
        e && (self.local_enable_ani = stringToBool(e));
      },
      fail: function () {}
    });
  },
  onShow() {
    this.localCnt = this.$app.$def.data.rpCount;
    this.nlocalCnt = this.$app.$def.data.nrpCount;
    this.local_is_rp = this.$app.$def.data.is_rp;
    this.local_enable_vibrate = this.$app.$def.data.enable_vibrate;
    this.local_enable_ani = this.$app.$def.data.enable_ani;
    this.str_mes = this.list_mes[this.local_is_rp];
    this.str_vib = this.list_vib[this.local_enable_vibrate];
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

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/index/index.ux?uxType=page":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/index/index.ux?uxType=page ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = [
  [
    [
      [
        0,
        "control"
      ]
    ],
    {
      "backgroundColor": "rgba(255,255,255,0)",
      "display": "flex",
      "justifyContent": "center",
      "top": "35px",
      "width": "450px",
      "height": "350px"
    }
  ],
  [
    [
      [
        0,
        "trans"
      ]
    ],
    {
      "position": "absolute",
      "right": "-100%",
      "transitionProperty": "right",
      "transitionTimingFunction": "ease-in-out",
      "transitionDuration": "1s",
      "transitionDelay": "0s"
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
      "backgroundColor": "#000000",
      "display": "flex",
      "flexDirection": "column",
      "justifyContent": "center",
      "alignItems": "center",
      "height": "100%"
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
      "position": "absolute",
      "color": "#FFFFFF",
      "display": "flex",
      "justifyContent": "center",
      "fontWeight": "bold",
      "top": "30px",
      "fontSize": "50px"
    }
  ],
  [
    [
      [
        0,
        "cnt"
      ]
    ],
    {
      "position": "absolute",
      "color": "#FFFFFF",
      "display": "flex",
      "justifyContent": "center",
      "fontSize": "70px",
      "bottom": "100px"
    }
  ],
  [
    [
      [
        0,
        "muyu"
      ]
    ],
    {
      "position": "absolute",
      "backgroundColor": "rgba(0,0,0,0)",
      "display": "flex",
      "justifyContent": "center",
      "top": "250px",
      "width": "450px",
      "height": "350px"
    }
  ],
  [
    [
      [
        0,
        "settings"
      ]
    ],
    {
      "position": "absolute",
      "backgroundColor": "rgba(47,47,47,0.003)",
      "top": "10px",
      "right": "10px",
      "height": "100px",
      "width": "100px",
      "backgroundImage": "/common/icon-settings.png"
    }
  ],
  [
    [
      [
        0,
        "showPlus"
      ]
    ],
    {
      "position": "absolute",
      "right": "70px",
      "top": "220px",
      "color": "#FFFFFF",
      "animationName": "moveUp",
      "animationDelay": "0s",
      "animationDuration": "300ms",
      "animationIterationCount": 1
    }
  ],
  [
    [
      [
        3,
        "moveUp"
      ]
    ],
    {
      "keyframes": "[{\"transform\":{\"translateY\":\"0px\"},\"time\":0},{\"transform\":{\"translateY\":\"-50px\"},\"time\":99},{\"visibility\":\"hidden\",\"time\":100}]"
    }
  ]
]

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/index/index.ux?uxType=page&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/index/index.ux?uxType=page& ***!
  \*************************************************************************************************************************************************************************************************************/
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
		[aiot.__ci__({
      __vm__: _vm_,
      __opts__: {
      shown: function () {return _vm_.SmallMuyu},
      
    }
    }
  , function() {
      return aiot.__ce__('image', {
      __vm__: _vm_,
      __opts__: {
  "src": "/pages/index/muyu-s.png",
  "classList": [
    "muyu"
  ]
}
    }
  )
    }),aiot.__ci__({
      __vm__: _vm_,
      __opts__: {
      shown: function () {return !(_vm_.SmallMuyu)},
      
    }
    }
  , function() {
      return aiot.__ce__('image', {
      __vm__: _vm_,
      __opts__: {
  "src": "/pages/index/muyu.png",
  "classList": [
    "muyu"
  ]
}
    }
  )
    }),aiot.__ci__({
      __vm__: _vm_,
      __opts__: {
      shown: function () {return _vm_.local_is_rp},
      
    }
    }
  , function() {
      return aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "control"
  ],
  "events": {
    "click": function (evt) { return _vm_.nrpPlusPlus(evt)}
  }
}
    }
  )
    }),aiot.__ci__({
      __vm__: _vm_,
      __opts__: {
      shown: function () {return !(_vm_.local_is_rp)},
      
    }
    }
  , function() {
      return aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "control"
  ],
  "events": {
    "click": function (evt) { return _vm_.rpPlusPlus(evt)}
  }
}
    }
  )
    }),aiot.__ce__('text', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "title"
  ],
  "value": "电子木鱼"
}
    }
  ),aiot.__ci__({
      __vm__: _vm_,
      __opts__: {
      shown: function () {return _vm_.local_is_rp},
      
    }
    }
  , function() {
      return aiot.__ce__('text', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "cnt"
  ],
  "value": function () {return '' + "RP " + (_vm_.nlocalCnt)}
}
    }
  )
    }),aiot.__ci__({
      __vm__: _vm_,
      __opts__: {
      shown: function () {return !(_vm_.local_is_rp)},
      
    }
    }
  , function() {
      return aiot.__ce__('text', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "cnt"
  ],
  "value": function () {return '' + "功德 " + (_vm_.localCnt)}
}
    }
  )
    }),aiot.__ce__('input', {
      __vm__: _vm_,
      __opts__: {
  "type": "button",
  "classList": [
    "settings"
  ],
  "events": {
    "click": function (evt) { return _vm_.goToSettings(evt)}
  }
}
    }
  ),aiot.__cf__({
      __vm__: _vm_,
      __opts__: {
      exp: function () {return { __list__: _vm_.PlusList, __tid__: "uniqueId" }},
      
    }
    }
  ,
    function($idx, $item) {
      return aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "showPlus"
  ]
}
    }
  ,
		[aiot.__ce__('text', {
      __vm__: _vm_,
      __opts__: {
  "style": {
    "fontWeight": "bold"
  },
  "value": function () {return _vm_.str_mes}
}
    }
  )])
    })])
}

/***/ }),

/***/ "./src/pages/index/index.ux?uxType=page":
/*!**********************************************!*\
  !*** ./src/pages/index/index.ux?uxType=page ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/index/index.ux?uxType=page")

var $app_script$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../node_modules/babel-loader/lib/index.js?cwd=/home/genkaim/桌面/vela-muyu/muyu&cacheDirectory&plugins[]=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/packager/babel.config.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/home/genkaim/桌面/vela-muyu/muyu&cacheDirectory&plugins[]=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/index/index.ux?uxType=page")

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/index/index.ux?uxType=page&")

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/index/index.ux?uxType=page");
/******/ 	
/******/ })()
;
            };
            return createPageHandler();
          };