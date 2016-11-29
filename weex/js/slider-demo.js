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

	__weex_define__('@weex-component/ea00558822ca80d406637eef273e2b65', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/ea00558822ca80d406637eef273e2b65',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "flexDirection": "column"
	  },
	  "children": [
	    {
	      "type": "slider",
	      "attr": {
	        "autoPlay": "true"
	      },
	      "events": {
	        "change": "change"
	      },
	      "style": {
	        "width": 750,
	        "height": 700
	      },
	      "children": [
	        {
	          "type": "image",
	          "repeat": function () {return this.list},
	          "attr": {
	            "src": function () {return this.url}
	          },
	          "style": {
	            "width": 750,
	            "height": 700
	          }
	        },
	        {
	          "type": "indicator",
	          "classList": [
	            "indicator"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "detail"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "title"
	              ],
	              "attr": {
	                "lines": "2",
	                "value": "我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介"
	              }
	            },
	            {
	              "type": "div",
	              "classList": [
	                "share"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "image"
	                  ],
	                  "attr": {
	                    "src": "//ww4.sinaimg.cn/square/c328505fgw1f9epyiw4msj20140150p9.jpg"
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "marginTop": 10,
	                    "textAlign": "center",
	                    "fontSize": 26
	                  },
	                  "attr": {
	                    "value": "分享"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "detail"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "marginTop": 20,
	                "marginLeft": 30,
	                "height": 40,
	                "fontSize": 28,
	                "color": "#333333"
	              },
	              "attr": {
	                "value": "安少福利:"
	              }
	            },
	            {
	              "type": "text",
	              "style": {
	                "marginTop": 20,
	                "marginLeft": 2,
	                "height": 40,
	                "fontSize": 28,
	                "color": "#CFA767"
	              },
	              "attr": {
	                "value": "￥"
	              }
	            },
	            {
	              "type": "text",
	              "style": {
	                "marginTop": 0,
	                "marginLeft": 8,
	                "height": 60,
	                "fontSize": 50,
	                "color": "#CFA767"
	              },
	              "attr": {
	                "value": "1949.0"
	              }
	            },
	            {
	              "type": "text",
	              "style": {
	                "marginTop": 30,
	                "marginLeft": 24,
	                "height": 30,
	                "fontSize": 24,
	                "color": "#333333"
	              },
	              "attr": {
	                "value": "优惠券可减免"
	              }
	            },
	            {
	              "type": "text",
	              "style": {
	                "marginTop": 30,
	                "marginLeft": 8,
	                "height": 30,
	                "fontSize": 24,
	                "color": "#CFA767"
	              },
	              "attr": {
	                "value": "优惠券可减免"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "detail"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "marginTop": 44,
	                "marginLeft": 30,
	                "width": 274,
	                "height": 1,
	                "backgroundColor": "#666666",
	                "textAlign": "center"
	              },
	              "attr": {
	                "value": "____________"
	              }
	            },
	            {
	              "type": "text",
	              "style": {
	                "marginTop": 30,
	                "marginLeft": 20,
	                "width": 150,
	                "height": 40,
	                "fontSize": 30,
	                "color": "#333333",
	                "textAlign": "center"
	              },
	              "attr": {
	                "value": "商品详情"
	              }
	            },
	            {
	              "type": "text",
	              "style": {
	                "marginTop": 44,
	                "marginLeft": 20,
	                "marginRight": 30,
	                "height": 1,
	                "textAlign": "center",
	                "backgroundColor": "#666666"
	              },
	              "attr": {
	                "value": "________________"
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
	  "detail": {
	    "flexDirection": "row"
	  },
	  "indicator": {
	    "width": 714,
	    "height": 100,
	    "position": "absolute",
	    "bottom": 1,
	    "left": 1,
	    "itemColor": "#CFA767",
	    "itemSelectedColor": "#A8A8A8",
	    "itemSize": 20
	  },
	  "title": {
	    "flex": 1,
	    "marginTop": 40,
	    "marginLeft": 30,
	    "marginRight": 20,
	    "height": 80,
	    "fontSize": 26,
	    "color": "#666666",
	    "lineHeight": 36
	  },
	  "share": {
	    "marginTop": 40,
	    "marginRight": 20,
	    "height": 100,
	    "width": 100
	  },
	  "image": {
	    "marginLeft": 25,
	    "marginTop": 10,
	    "height": 50,
	    "width": 50
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	module.exports = {
	  data: function () {return {
	    list: [{ url: "http://ww3.sinaimg.cn/mw690/c328505fgw1f9fxk3nb3kj20fo0e0myl.jpg" }, { url: "http://ww2.sinaimg.cn/mw690/c328505fgw1f9fxk4g4buj20fo0e03zj.jpg" }, { url: "http://ww4.sinaimg.cn/mw690/c328505fgw1f9fxk7ccy5j20fo0e0myk.jpg" }],
	    indexTitle: ''
	  }},
	  methods: {
	    change: function change(e) {
	      var index = e.index;
	      var title = ['水果怎么吃才更有营养', '饭菜如何搭配', '虾的多种做法'];
	      this.indexTitle = title[index];
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);