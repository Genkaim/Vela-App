export default function(global, globalThis, window, $app_exports$, $app_evaluate$){
            var setTimeout = global.setTimeout;
            var setInterval = global.setInterval;
            var clearTimeout = global.clearTimeout;
            var clearInterval = global.clearInterval;
            
            var createPageHandler = function() {
              return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/home/genkaim/桌面/vela-muyu/muyu&cacheDirectory&plugins[]=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/settings/settings.ux?uxType=page":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/home/genkaim/桌面/vela-muyu/muyu&cacheDirectory&plugins[]=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/settings/settings.ux?uxType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _system = _interopRequireDefault($app_require$("@app-module/system.router"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  goAbout(event) {
    _system.default.push({
      uri: '/pages/about'
    });
  },
  goBack(event) {
    _system.default.back();
  },
  changeVirate(e) {
    this.$app.$def.data.enable_vibrate = e.checked;
  },
  changeRp(e) {
    this.$app.$def.data.is_rp = e.checked;
  },
  changeAni(e) {
    this.$app.$def.data.enable_ani = e.checked;
  },
  toConfirm(event) {
    _system.default.push({
      uri: '/pages/confirm'
    });
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

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/settings/settings.ux?uxType=page":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/settings/settings.ux?uxType=page ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = [
  [
    [
      [
        0,
        "header"
      ]
    ],
    {
      "top": "260px",
      "height": "300px",
      "width": "550px",
      "display": "flex",
      "backgroundColor": "rgba(25,25,25,0.7)",
      "borderRadius": "40px"
    }
  ],
  [
    [
      [
        3,
        "bc"
      ]
    ],
    {
      "keyframes": "[{\"opacity\":1,\"time\":0},{\"opacity\":0.5,\"time\":50},{\"opacity\":1,\"time\":100}]"
    }
  ],
  [
    [
      [
        0,
        "about"
      ]
    ],
    {
      "fontSize": "30px",
      "position": "relative",
      "paddingLeft": "20px",
      "right": "-10px",
      "width": "100px",
      "top": "200px",
      "fontWeight": "bold",
      "color": "#FFFFFF",
      "backgroundColor": "rgb(78,78,78)",
      "borderRadius": "35px",
      "height": "174px"
    }
  ],
  [
    [
      [
        0,
        "logo"
      ]
    ],
    {
      "marginTop": "0px",
      "marginRight": "0px",
      "marginBottom": "0px",
      "marginLeft": "0px",
      "position": "relative",
      "top": "60px",
      "left": "-300px"
    }
  ],
  [
    [
      [
        0,
        "line1"
      ]
    ],
    {
      "position": "relative",
      "fontSize": "55px",
      "fontWeight": "bold",
      "left": "280px",
      "top": "-30px",
      "marginTop": "0px",
      "marginRight": "0px",
      "marginBottom": "0px",
      "marginLeft": "0px"
    }
  ],
  [
    [
      [
        0,
        "line2"
      ]
    ],
    {
      "color": "rgb(194,194,194)",
      "fontSize": "30px",
      "fontWeight": "bold",
      "position": "relative",
      "left": "70px",
      "top": "40px"
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
        "clear"
      ]
    ],
    {
      "color": "#FFFFFF",
      "fontSize": "50px",
      "position": "relative",
      "top": "270px",
      "marginTop": "20px",
      "marginBottom": "20px",
      "backgroundColor": "rgb(25,25,25)",
      "width": "500px",
      "height": "100px"
    }
  ],
  [
    [
      [
        0,
        "switch"
      ]
    ],
    {
      "left": "90px",
      "height": "100px",
      "width": "150px",
      "marginTop": "15px",
      "marginRight": "20px"
    }
  ],
  [
    [
      [
        0,
        "rp_switch"
      ]
    ],
    {
      "left": "45px"
    }
  ],
  [
    [
      [
        0,
        "section"
      ],
      [
        0,
        "title"
      ]
    ],
    {
      "fontSize": "51px",
      "position": "relative",
      "marginRight": "10px",
      "marginLeft": "25px",
      "marginTop": "10px",
      "marginBottom": "10px"
    }
  ],
  [
    [
      [
        0,
        "title-about"
      ]
    ],
    {
      "marginLeft": "140px"
    }
  ],
  [
    [
      [
        0,
        "section"
      ]
    ],
    {
      "position": "relative",
      "top": "270px",
      "width": "550px",
      "height": "170px",
      "backgroundColor": "rgb(25,25,25)",
      "paddingLeft": "30px",
      "paddingRight": "30px",
      "paddingTop": "20px",
      "paddingBottom": "20px",
      "borderRadius": "60px",
      "marginLeft": "10px",
      "marginTop": "3px"
    }
  ],
  [
    [
      [
        0,
        "icon-about"
      ]
    ],
    {
      "position": "absolute",
      "left": "-150px",
      "top": "18px",
      "height": "100%",
      "width": "100%",
      "backgroundImage": "/common/icon-about.png"
    }
  ],
  [
    [
      [
        0,
        "icon-help"
      ]
    ],
    {
      "position": "absolute",
      "left": "-150px",
      "top": "18px",
      "height": "100%",
      "width": "100%"
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
        2,
        "text"
      ]
    ],
    {
      "position": "relative",
      "color": "#FFFFFF"
    }
  ],
  [
    [
      [
        0,
        "dsf1"
      ]
    ],
    {
      "position": "relative",
      "top": "280px"
    }
  ]
]

/***/ }),

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/settings/settings.ux?uxType=page&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/settings/settings.ux?uxType=page& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
		[aiot.__ce__('input', {
      __vm__: _vm_,
      __opts__: {
  "type": "button",
  "value": "",
  "classList": [
    "back"
  ],
  "events": {
    "click": function (evt) {_vm_.goBack(evt)}
  }
}
    }
  ),aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "header"
  ]
}
    }
  ,
		[aiot.__ce__('text', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "line1"
  ],
  "value": "电子木鱼"
}
    }
  ),aiot.__ce__('text', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "line2"
  ],
  "value": "版本1.2.0"
}
    }
  ),aiot.__ce__('image', {
      __vm__: _vm_,
      __opts__: {
  "src": "/common/_logo.png",
  "classList": [
    "logo"
  ]
}
    }
  )]),aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "section"
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
  "value": "开启震动"
}
    }
  ),aiot.__ce__('switch', {
      __vm__: _vm_,
      __opts__: {
  "checked": function () {return _vm_.$app.$def.data.enable_vibrate},
  "classList": [
    "switch"
  ],
  "events": {
    "change": function (evt) {_vm_.changeVirate(evt)}
  }
}
    }
  )]),aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "section"
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
  "value": "使用动画"
}
    }
  ),aiot.__ce__('switch', {
      __vm__: _vm_,
      __opts__: {
  "checked": function () {return _vm_.$app.$def.data.enable_ani},
  "classList": [
    "switch"
  ],
  "events": {
    "change": function (evt) {_vm_.changeAni(evt)}
  }
}
    }
  )]),aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "section"
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
  "value": "信仰rp之神"
}
    }
  ),aiot.__ce__('switch', {
      __vm__: _vm_,
      __opts__: {
  "checked": function () {return _vm_.$app.$def.data.is_rp},
  "classList": [
    "switch",
    "rp_switch"
  ],
  "events": {
    "change": function (evt) {_vm_.changeRp(evt)}
  }
}
    }
  )]),aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "section",
    "button-about"
  ],
  "events": {
    "click": function (evt) {_vm_.goAbout(evt)}
  }
}
    }
  ,
		[aiot.__ce__('div', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "icon-about"
  ]
}
    }
  ),aiot.__ce__('text', {
      __vm__: _vm_,
      __opts__: {
  "classList": [
    "title",
    "title-about"
  ],
  "value": "关于"
}
    }
  )]),aiot.__ce__('input', {
      __vm__: _vm_,
      __opts__: {
  "type": "button",
  "value": "删佛祖的库",
  "classList": [
    "clear"
  ],
  "events": {
    "click": function (evt) {_vm_.toConfirm(evt)}
  }
}
    }
  )])
}

/***/ }),

/***/ "./src/pages/settings/settings.ux?uxType=page":
/*!****************************************************!*\
  !*** ./src/pages/settings/settings.ux?uxType=page ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./settings.ux?uxType=page */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/settings/settings.ux?uxType=page")

var $app_script$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../node_modules/babel-loader/lib/index.js?cwd=/home/genkaim/桌面/vela-muyu/muyu&cacheDirectory&plugins[]=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/packager/babel.config.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./settings.ux?uxType=page */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/home/genkaim/桌面/vela-muyu/muyu&cacheDirectory&plugins[]=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/home/genkaim/桌面/vela-muyu/muyu/node_modules/@aiot-toolkit/packager/babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/settings/settings.ux?uxType=page")

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./settings.ux?uxType=page& */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/settings/settings.ux?uxType=page&")

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/settings/settings.ux?uxType=page");
/******/ 	
/******/ })()
;
            };
            return createPageHandler();
          };