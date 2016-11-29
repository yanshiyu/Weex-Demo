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

	__weex_define__('@weex-component/bfb0c893dd9292110cf7d9d26b4d2531', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/bfb0c893dd9292110cf7d9d26b4d2531',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "list",
	  "children": [
	    {
	      "type": "cell",
	      "append": "tree",
	      "classList": [
	        "cell"
	      ],
	      "repeat": function () {return this.items},
	      "events": {
	        "click": "onclick"
	      },
	      "attr": {
	        "index": function () {return this.$index}
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "container"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "title"
	              ],
	              "attr": {
	                "value": function () {return this.title}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "cell": {
	    "height": 120,
	    "borderBottomColor": "#808080",
	    "borderBottomWidth": 0.5
	  },
	  "container": {
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "title": {
	    "marginTop": 30,
	    "fontSize": 60,
	    "color": "#4a4a4a"
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
		data: function () {return {
			items: [{ name: 'lifecycle.js', title: '生命周期' }, { name: 'hello-world.js', title: 'hello-world' }, { name: 'list-basic.js', title: 'list-basic' }, { name: 'list-demo.js', title: 'list-demo' }, { name: 'coupon.js', title: '优惠券' }, { name: 'web-demo.js', title: 'webView' }, { name: 'slider-demo.js', title: '轮播' }]
		}},
		methods: {
			onclick: function onclick(e) {
				var index = e.target.attr.index;
				var item = this.items[index];
				var event = __weex_require__('@weex-module/event');
				event.openURL(item.name);
			}
		}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);