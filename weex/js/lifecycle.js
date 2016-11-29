/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/a5e6811f2eeee55937c9d6f7513df528', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/a5e6811f2eeee55937c9d6f7513df528',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "events": {
	    "viewappear": "onviewappear",
	    "viewdisappear": "onviewdisappear"
	  },
	  "children": [
	    {
	      "type": "text",
	      "style": {
	        "fontSize": 80
	      },
	      "attr": {
	        "value": "lifecycle"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "container"
	      ],
	      "style": {
	        "marginTop": 40
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "text"
	          ],
	          "attr": {
	            "value": "init"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "word"
	          ],
	          "attr": {
	            "value": "(在初始化内部变量，并且添加了事件功能后被触发)"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "text"
	          ],
	          "attr": {
	            "value": "↓"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "text"
	          ],
	          "attr": {
	            "value": "created"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "word"
	          ],
	          "attr": {
	            "value": "(完成数据绑定之后，模板编译之前被触发)"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "text"
	          ],
	          "attr": {
	            "value": "↓"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "text"
	          ],
	          "attr": {
	            "value": "ready"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "word"
	          ],
	          "attr": {
	            "value": "(模板已经编译并且生成了 Virtual DOM 之后被触发)"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "text"
	          ],
	          "attr": {
	            "value": "↓"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "text"
	          ],
	          "attr": {
	            "value": "onviewappear"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "word"
	          ],
	          "attr": {
	            "value": "(页面出现)"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "text"
	          ],
	          "attr": {
	            "value": "↓"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "text"
	          ],
	          "attr": {
	            "value": "onviewdisappear"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "word"
	          ],
	          "attr": {
	            "value": "(页面消失)"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "text"
	          ],
	          "attr": {
	            "value": "↓"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "text"
	          ],
	          "attr": {
	            "value": "destroyed"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "word"
	          ],
	          "attr": {
	            "value": "(在页面被销毁时调用)"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "alignItems": "center"
	  },
	  "text": {
	    "fontSize": 56,
	    "color": "#0000FF"
	  },
	  "word": {
	    "fontSize": 28,
	    "color": "#FF0000"
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
		data: function () {return {
			firstName: 'Tom',
			lastName: 'Smith'
		}},
		computed: {
			name: {
				get: function get() {
					return this.firstName + ' ' + this.lastName;
				},
				set: function set(value) {
					var names = value.split(' ');
					this.firstName = names[0];
					this.lastName = names[1];
				}
			}
		},
		methods: {
			onviewappear: function onviewappear(e) {
				console.log('onviewappear');
			},
			onviewdisappear: function onviewdisappear(e) {
				console.log('onviewdisappear');
			}
		},
		init: function init() {
			console.log('init');
		},
		created: function created() {
			console.log('created');
		},
		ready: function ready() {
			console.log('ready');
		},
		destroyed: function destroyed() {
			console.log('destroyed');
		}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);