/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
* {
    --document-background-color: #f1c8e9;
    --base-background-color: #D3F6DB;
    --content-background-color: #fffff2;
    --base-background-edge-color: #3790a7;
    box-sizing: border-box;
    --font-size-large: 25px;
    --font-size-larger: 40px;
}

h1,
h2,
h3,
p {
    margin: 0;
    padding: 0;
}

:root{
    background-color: var(--document-background-color);
}

/* section to organize main sections of page */
body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
    align-items: center;
    font-family: Arial, sans-serif;
}

.content.container{
    background-color: var(--base-background-color);
    padding: 20px;
    padding-bottom: 0px;
    display:flex;
    flex-direction:column;
    gap: 10px  20px;
    border-radius: 5px;
    box-shadow: inset 0px 0px 100px 30px var(--base-background-edge-color)
}

/* style form area */
.form.container > form{
    position: relative;
    height: min-content;
    width: min-content;

    input{
        position: static;
        padding: 5px 10px;
        border-radius: 5px;
        border: none;
    }
    img.submit{
        position: absolute;
        max-height: 100% !important;
        width: auto !important;
        padding: 2px;
        right: 3px;
        top: 0;
    }
}

/* style current weather area */
.today.weather.container{
    display: grid;
    grid-template-columns: min-content 1fr max-content;
    grid-template-rows: min-content 1fr;
    margin-right: 15%;
    justify-items: center;
    text-align: center;
    align-items: center;

    .condition{
        grid-area: 2 / 1 / 3 / 2; /* rowS/colS/rowE/colE */

        img{
            width: 80px !important;
            height: auto;
        }
    }

    .temp{
        grid-area: 2 / 2 / 3 / 3;
        display: grid;
        grid-template-rows:min-content min-content;
        grid-template-columns: min-content max-content;
        column-gap: 10px;
        align-items: center;
        
        p.temp.text{
            font-size: var(--font-size-larger);
            grid-area: 1 / 1 / 3 / 2;
        }
    }

    .time{
        grid-area: 1 / 1 / 2 / 3;
        justify-self: start;
        display: flex;
        flex-direction: row;
        font-size: var(--font-size-large);
        gap: 30px;
    }

    .precip {
        grid-area: 2 / 3 / 3 / 4;
    }
}

/* style forecast */
.forecast.box.container{
    display:flex;
    justify-content: space-between;
    border: 2px var(--border-color);
    gap: 4px;
    text-align: center;

    .forecast.box{
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        background-color: var(--content-background-color);
        padding: 2px;

        p.dayAndDate{
            font-size: 20px;
            font-weight: bold;
        }

        p.temp{
            font-size: var(--font-size-large);
        }
    }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":";AACA;IACI,oCAAoC;IACpC,gCAAgC;IAChC,mCAAmC;IACnC,qCAAqC;IACrC,sBAAsB;IACtB,uBAAuB;IACvB,wBAAwB;AAC5B;;AAEA;;;;IAII,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kDAAkD;AACtD;;AAEA,8CAA8C;AAC9C;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;IACT,gBAAgB;IAChB,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,8CAA8C;IAC9C,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,qBAAqB;IACrB,eAAe;IACf,kBAAkB;IAClB;AACJ;;AAEA,oBAAoB;AACpB;IACI,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;;IAElB;QACI,gBAAgB;QAChB,iBAAiB;QACjB,kBAAkB;QAClB,YAAY;IAChB;IACA;QACI,kBAAkB;QAClB,2BAA2B;QAC3B,sBAAsB;QACtB,YAAY;QACZ,UAAU;QACV,MAAM;IACV;AACJ;;AAEA,+BAA+B;AAC/B;IACI,aAAa;IACb,kDAAkD;IAClD,mCAAmC;IACnC,iBAAiB;IACjB,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;;IAEnB;QACI,wBAAwB,EAAE,wBAAwB;;QAElD;YACI,sBAAsB;YACtB,YAAY;QAChB;IACJ;;IAEA;QACI,wBAAwB;QACxB,aAAa;QACb,0CAA0C;QAC1C,8CAA8C;QAC9C,gBAAgB;QAChB,mBAAmB;;QAEnB;YACI,kCAAkC;YAClC,wBAAwB;QAC5B;IACJ;;IAEA;QACI,wBAAwB;QACxB,mBAAmB;QACnB,aAAa;QACb,mBAAmB;QACnB,iCAAiC;QACjC,SAAS;IACb;;IAEA;QACI,wBAAwB;IAC5B;AACJ;;AAEA,mBAAmB;AACnB;IACI,YAAY;IACZ,8BAA8B;IAC9B,+BAA+B;IAC/B,QAAQ;IACR,kBAAkB;;IAElB;QACI,aAAa;QACb,qBAAqB;QACrB,uBAAuB;QACvB,mBAAmB;QACnB,iDAAiD;QACjD,YAAY;;QAEZ;YACI,eAAe;YACf,iBAAiB;QACrB;;QAEA;YACI,iCAAiC;QACrC;IACJ;AACJ","sourcesContent":["\n* {\n    --document-background-color: #f1c8e9;\n    --base-background-color: #D3F6DB;\n    --content-background-color: #fffff2;\n    --base-background-edge-color: #3790a7;\n    box-sizing: border-box;\n    --font-size-large: 25px;\n    --font-size-larger: 40px;\n}\n\nh1,\nh2,\nh3,\np {\n    margin: 0;\n    padding: 0;\n}\n\n:root{\n    background-color: var(--document-background-color);\n}\n\n/* section to organize main sections of page */\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 10px;\n    margin-top: 40px;\n    align-items: center;\n    font-family: Arial, sans-serif;\n}\n\n.content.container{\n    background-color: var(--base-background-color);\n    padding: 20px;\n    padding-bottom: 0px;\n    display:flex;\n    flex-direction:column;\n    gap: 10px  20px;\n    border-radius: 5px;\n    box-shadow: inset 0px 0px 100px 30px var(--base-background-edge-color)\n}\n\n/* style form area */\n.form.container > form{\n    position: relative;\n    height: min-content;\n    width: min-content;\n\n    input{\n        position: static;\n        padding: 5px 10px;\n        border-radius: 5px;\n        border: none;\n    }\n    img.submit{\n        position: absolute;\n        max-height: 100% !important;\n        width: auto !important;\n        padding: 2px;\n        right: 3px;\n        top: 0;\n    }\n}\n\n/* style current weather area */\n.today.weather.container{\n    display: grid;\n    grid-template-columns: min-content 1fr max-content;\n    grid-template-rows: min-content 1fr;\n    margin-right: 15%;\n    justify-items: center;\n    text-align: center;\n    align-items: center;\n\n    .condition{\n        grid-area: 2 / 1 / 3 / 2; /* rowS/colS/rowE/colE */\n\n        img{\n            width: 80px !important;\n            height: auto;\n        }\n    }\n\n    .temp{\n        grid-area: 2 / 2 / 3 / 3;\n        display: grid;\n        grid-template-rows:min-content min-content;\n        grid-template-columns: min-content max-content;\n        column-gap: 10px;\n        align-items: center;\n        \n        p.temp.text{\n            font-size: var(--font-size-larger);\n            grid-area: 1 / 1 / 3 / 2;\n        }\n    }\n\n    .time{\n        grid-area: 1 / 1 / 2 / 3;\n        justify-self: start;\n        display: flex;\n        flex-direction: row;\n        font-size: var(--font-size-large);\n        gap: 30px;\n    }\n\n    .precip {\n        grid-area: 2 / 3 / 3 / 4;\n    }\n}\n\n/* style forecast */\n.forecast.box.container{\n    display:flex;\n    justify-content: space-between;\n    border: 2px var(--border-color);\n    gap: 4px;\n    text-align: center;\n\n    .forecast.box{\n        display: flex;\n        flex-direction:column;\n        justify-content: center;\n        align-items: center;\n        background-color: var(--content-background-color);\n        padding: 2px;\n\n        p.dayAndDate{\n            font-size: 20px;\n            font-weight: bold;\n        }\n\n        p.temp{\n            font-size: var(--font-size-large);\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apiManager: () => (/* binding */ apiManager)
/* harmony export */ });
// STORE and SET location
// and GET weather info based on location
console.log("*MODULE CHECK* from api.js");

const apiManager = (function(){
    let apiKey = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=YSLLK7JDHU7NAPALRS4DPZ9P9"
    const apiKeyStart = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
    const apiKeyEnd = "?key=YSLLK7JDHU7NAPALRS4DPZ9P9"

    let location = 'london'
    const setLocation = function(inputLocation){
        location = inputLocation;
        updateApiKey();
        console.log("Location is now " + location);
    }

    const updateApiKey = function(){
        apiKey = apiKeyStart + location + apiKeyEnd;
        return apiKey;
    }

    const requestAndProcessApi = async function (){
        try{
            const response = await fetch(apiKey, {mode: 'cors'});
            console.log("This is direct API response");
            console.log(response);
            const responseJSONObject = await response.json(); // returned as a JSON object
            console.log("This is JSON object from API");
            console.log(responseJSONObject);
            const processedJSON = processJSON(responseJSONObject);
            console.log("This is cleaned up object");
            console.log(processedJSON);
            return processedJSON;
        }
        catch(error){
            console.error('Fetch error: ' + error);
            alert("There was an input error.");
            return error;
        }
    }

    // Need to get "resolvedAddress", "tzoffset" and...
    // For each "days" for 7 days, need to get "datetime","temp","tempmax","tempmin","precipprob","conditions"
    const processJSON = function (weatherJSONObject){
        let resolvedAddress = weatherJSONObject.resolvedAddress;
        let tzoffset = weatherJSONObject.tzoffset;
        let dateArray = []; // array of objects with {dayAndDate}
        let tempArray = []; // array of objects with {temp,tempmax,tempmin}
        let precipArray = []; // array of objects with {precip,condition}
        for (let i = 0; i < 7; i++){
            let dayJSON = weatherJSONObject.days[i];
            const dateObject = convertDate(dayJSON.datetime);
            dateArray.push(dateObject);
            const tempObject = {
                temp: dayJSON.temp,
                tempmin: dayJSON.tempmin,
                tempmax: dayJSON.tempmax,
            }
            tempArray.push(tempObject);
            const precipObject = {
                precipprob: dayJSON.precipprob,
                conditions: dayJSON.conditions,
            }
            precipArray.push(precipObject);
        }
        return {resolvedAddress, tzoffset, dateArray, tempArray, precipArray}
    }

    // converts YYYY-MM-DD to DayOfWeek Day (like Wed 12) using Date objects
    const convertDate = function(dateTime){
        const date = new Date(dateTime);
        let dateString = date.toDateString(); // outputs as Wed Jul DD YYYY
        const dayOfMonth = dateString.slice(8,10);
        const dayOfWeek = dateString.slice(0,3);
        const dayAndDate = dayOfWeek + " " + dayOfMonth;
        return {dayAndDate};
    }

    const getWeather = function(inputLocation){
        setLocation(inputLocation);
        const processedWeather = requestAndProcessApi();
        return processedWeather;
    }

    return {getWeather, setLocation}
})();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pageManager: () => (/* binding */ pageManager)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/api.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
// initializes page
// processes event listeners from render.js and calls api.js functions






console.log("*MODULE CHECK* from index.js");

const pageManager = function(){
    const defaultLocation = "london"
    
    const init = async function(){
        _render_js__WEBPACK_IMPORTED_MODULE_1__.renderManager.init();
        const weatherInfo = await _api_js__WEBPACK_IMPORTED_MODULE_0__.apiManager.getWeather(defaultLocation);
        if (weatherInfo instanceof Error != true){
            _render_js__WEBPACK_IMPORTED_MODULE_1__.renderManager.editWeather(weatherInfo);
        }
    }

    const newForecast = async function(inputLocation){
        const weatherInfo = await _api_js__WEBPACK_IMPORTED_MODULE_0__.apiManager.getWeather(inputLocation);
        if (weatherInfo instanceof Error != true){
            _render_js__WEBPACK_IMPORTED_MODULE_1__.renderManager.editWeather(weatherInfo);
        }
    }

    return {init, newForecast};
}();

// TEMPORARILY attach to window object to test newForecast
window.pageManager = pageManager;

pageManager.init();



/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderManager: () => (/* binding */ renderManager)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _images_snow_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/snow.png */ "./src/images/snow.png");
/* harmony import */ var _images_partly_cloudy_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/partly-cloudy.png */ "./src/images/partly-cloudy.png");
/* harmony import */ var _images_clouds_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/clouds.png */ "./src/images/clouds.png");
/* harmony import */ var _images_sun_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/sun.png */ "./src/images/sun.png");
/* harmony import */ var _images_rainy_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/rainy.png */ "./src/images/rainy.png");
/* harmony import */ var _images_magnifying_glass_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/magnifying-glass.png */ "./src/images/magnifying-glass.png");
// module strictly for displaying elements
// and binding event listeners (processing done elsewhere)

// "render" means to create element and always returns an element
// "edit" means to change text or something else about existing element
// "append" means to attach elements to eachother without returning an element (avoid using except at highest level)










console.log("*MODULE CHECK* from render.js");

const renderManager = (function () {
  const init = function () {
    document.body.appendChild(renderLocationInput());
    document.body.appendChild(renderContentContainers()); // render the boxes to put forecast info
    bindLocationInput();
  };

  // helper functions to easily create DOM elements

  const createElement = function (tag, classAttribute, innerText) {
    const createdElement = document.createElement(tag);
    if (classAttribute !== undefined && classAttribute !== null) {
      const splitClassStringsArray = classAttribute.split(" ");
      for (let singleClass of splitClassStringsArray) {
        createdElement.classList.add(singleClass);
      }
    }
    if (innerText !== undefined) {
      createdElement.innerText = innerText;
    }
    return createdElement;
  };

  const createImage = function (src, classString, altText) {
    const image = createElement("img", classString);
    image.src = src;
    image.alt = altText;
    image.style.width = "29px";
    return image;
  };

  // functions for rendering the input for location
  const renderLocationInput = function(){
    const formContainer = createElement("div", "form container");
    const searchForm = createElement("form","input form");
    searchForm.method = "POST";
    formContainer.appendChild(searchForm);
    const inputBar = renderInputBar();
    const searchButton = renderSearchButton();
    searchForm.append(inputBar, searchButton);
    return formContainer;
  }

  const renderInputBar = function(){
    const locationInput = createElement("input", "location input");
    locationInput.type = "text";
    locationInput.placeholder = "Enter location...";
    locationInput.name = "locationInput";
    return locationInput;
  }
  
  const renderSearchButton = function(){
    const submitButton = createImage(_images_magnifying_glass_png__WEBPACK_IMPORTED_MODULE_6__,"location submit", "submit button");
    return submitButton;
  }

  // bind event listener to the search button
  const bindLocationInput = function(){
    const locationForm = document.querySelector("form.input");
    const submitButton = locationForm.querySelector("img.submit");
    const locationInput = locationForm.querySelector("input.location");
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.pageManager.newForecast(locationInput.value);
      locationInput.value = "";
    });
  }

  // functions for weather info rendering
  const renderContentContainers = function(){
    const contentContainer = createElement("div", "content container");
    const locationContainer = renderLocationTitleContainer(); // render container to put location title
    const todayWeatherContainer = renderTodayWeatherContainer(); // renders lots info on current weather + local time
    const forecastBoxes = renderForecastBoxes(); // render the 7 boxes (with empty content) for forecast
    contentContainer.append(locationContainer,todayWeatherContainer, forecastBoxes);
    return contentContainer;
  }

  let locationTitle; // public variables to minimize direct DOM access
  const renderLocationTitleContainer = function(){
    const locationTitleContainer = createElement("div", "location title container");
    locationTitle = createElement("h2","location title","default location");
    locationTitleContainer.append(locationTitle);
    return locationTitleContainer;
  }

  let todayWeatherContainer;
  const renderTodayWeatherContainer = function(){
    todayWeatherContainer = createElement("div", "today weather container");
    const todayWeatherConditionContainer = createElement("div", "condition container");
    const conditionIcon = createImage("", "condition icon");
    const conditionText = createElement("p", "condition text");
    todayWeatherConditionContainer.append(conditionIcon, conditionText);
    const todayWeatherTempContainer = createElement("div", "temp container");
    const tempText = createElement("p","temp text");
    const tempmaxText = createElement("p","tempmax text");
    const tempminText = createElement("p","tempmin text");
    todayWeatherTempContainer.append(tempText, tempmaxText, tempminText);
    const todayWeatherTimeContainer = createElement("div", "time container");
    const dayText = createElement("p", "day text");
    const timeText = createElement("p","time text");
    todayWeatherTimeContainer.append(dayText, timeText);
    const todayWeatherPrecipprobContainer = createElement("div", "precip container");
    const precipText = createElement("p", "precip text");
    todayWeatherPrecipprobContainer.append(precipText);
    todayWeatherContainer.append(todayWeatherConditionContainer,todayWeatherTempContainer,todayWeatherTimeContainer,todayWeatherPrecipprobContainer);
    return todayWeatherContainer;
  }

  let forecastBoxes = [];
  const renderForecastBoxes = function(){
    const forecastBoxContainer = createElement("div", "forecast box container");
    const forecastBox = renderForecastBox();
    forecastBoxes[0] = forecastBox;
    forecastBoxContainer.appendChild(forecastBox);
    for (let i=1; i <7; i++){
      const forecastBoxClone = forecastBox.cloneNode(true);
      forecastBoxes[i] = forecastBoxClone;
      forecastBoxContainer.appendChild(forecastBoxClone);
    }
    return forecastBoxContainer;
  }

  const renderForecastBox = function(){
    const forecastBox = createElement("div","forecast box");
    const contentBoxes = renderForecastContentBoxes(); // this will create containers for info of temp, min, max, precip, etc
    forecastBox.append(...Object.values(contentBoxes)); // appends each node within contentBoxesObject
    return forecastBox;
  }

  // creates containers or HTML elements within the forecast boxes
  // ...for dayOfWeek, monthDay, temp, tempmin, tempmax, conditions, precipprob
  const renderForecastContentBoxes = function(){
    const timeContainer = createElement("div", "time container");
    const dayAndDateText = createElement("p", "dayAndDate text");
    timeContainer.append(dayAndDateText);
    const tempContainer = createElement("div", "temp container");
    const tempText = createElement("p","temp text");
    const tempminmaxText = createElement("p","tempminmax text");
    tempContainer.append(tempText, tempminmaxText);
    const conditionsContainer = createElement("div", "conditions container");
    const conditionsImage = createImage("","conditions image"); // must convert conditions text to an image src in editing later
    const precipprobText = createElement("p", "precipprob text");
    conditionsContainer.append(conditionsImage, precipprobText);
    return {timeContainer, tempContainer, conditionsContainer};
  }

  // Everything below this is meant to edit existing elements //

  // edits text content to show weather information
  // organizes weatherInfo to send only relevant info to each function
  const editWeather = function(weatherInfo){
    editLocationTitle(weatherInfo.resolvedAddress);
    editTodayWeather(weatherInfo.tzoffset, weatherInfo.dateArray[0],weatherInfo.tempArray[0], weatherInfo.precipArray[0]);
    for (let i = 0; i<7; i++){
      editForecastBox(i, weatherInfo.dateArray[i], weatherInfo.tempArray[i], weatherInfo.precipArray[i]);
    }
    console.log("This is the weather that render.js sees");
    console.log(weatherInfo);
  }

  const editLocationTitle = function (resolvedAddress){
    locationTitle.textContent = resolvedAddress;
  }

  const DEGREE_F_SYMBOL = "°F";
  const DEGREE_SYMBOL = "°";
  const editTodayWeather = function(tzoffset, dateObject, tempObject, precipObject){
    const conditionTempTimePrecipContainers = todayWeatherContainer.children;
    editClassChildImage(conditionTempTimePrecipContainers[0], "icon", precipObject.conditions);
    editClassChild(conditionTempTimePrecipContainers[0], "text", precipObject.conditions);
    // goes through each key, value pair in tempObject and updates text on nodes
    editClassChild(conditionTempTimePrecipContainers[1], "temp", `${tempObject.temp}${DEGREE_F_SYMBOL}`);
    editClassChild(conditionTempTimePrecipContainers[1], "tempmax", `Max: ${tempObject.tempmax}${DEGREE_F_SYMBOL}`);
    editClassChild(conditionTempTimePrecipContainers[1], "tempmin", `Min: ${tempObject.tempmin}${DEGREE_F_SYMBOL}`);
    editClassChild(conditionTempTimePrecipContainers[2], "day", dateObject.dayAndDate);
    editClassChild(conditionTempTimePrecipContainers[2], "time", calculateLocalTime(tzoffset));
    editClassChild(conditionTempTimePrecipContainers[3], "precip", `Precipitation: ${precipObject.precipprob}%`);
  }

  // manually calculate the local time at the location using UTC time +/- tzoffset
  // returns string with form HH:MM AM (or PM)
  const calculateLocalTime = function(tzoffset){
    const currentDate = new Date();
    // returns local hour from 0-23
    const localHourUnformatted = (currentDate.getUTCHours()+tzoffset+24)%24;
    let AMPMString;
    if (Math.trunc(localHourUnformatted/12) == 0){
      AMPMString = "AM";
    } else{
      AMPMString = "PM";
    }
    let localHour = (localHourUnformatted)%12; // convert 0-23 to 0-11
    if (localHour == 0){
      localHour = 12;
    }
    const localMinutes = currentDate.toTimeString().slice(2,5); // contains ":MM"
    const localTimeString = `${localHour}${localMinutes} ${AMPMString}`;
    return localTimeString;
  }

  // edits individual box all at once to reduce amount of references to nodes
  // Parameters: index, {monthDay, dayOfWeek}, {temp, tempmin, tempmax}, {precipprob, conditions}
  // timeTempConditionsContainers is just child nodes of the forecast box
  const editForecastBox = function(index, dateObject, tempObject, precipObject){
    const timeTempConditionsContainers = forecastBoxes[index].children;
    // goes through each key, value pair in dateObject and updates text on nodes
    for (const [key, value] of Object.entries(dateObject)){
      editClassChild(timeTempConditionsContainers[0], key, value);
    }
    editClassChild(timeTempConditionsContainers[1], "temp", `${tempObject.temp}${DEGREE_SYMBOL}`);
    editClassChild(timeTempConditionsContainers[1], "tempminmax", `${tempObject.tempmin}${DEGREE_SYMBOL}-${tempObject.tempmax}${DEGREE_SYMBOL}`);
    // repeated for other objects, because nested loops confusing
    for (const [key, value] of Object.entries(precipObject)){
      if (key == "precipprob"){
        editClassChild(timeTempConditionsContainers[2], key, `${value}%`);
      } else if (key == "conditions"){
        editClassChildImage(timeTempConditionsContainers[2], key, value)
      }
    }
  }

  // helper function that edits the text of a child node given the parent node and the child node's class
  // which child node determined by class identifier
  const editClassChild = function(parentNode, classIdentifier, newText){
    const nodeToChange = parentNode.querySelector(`.${classIdentifier}`);
    nodeToChange.textContent = newText;
  }

  const editClassChildImage = function(parentNode, classIdentifier, newConditions){
    const imageSrc = convertConditionsToSrc(newConditions);
    const nodeToChange = parentNode.querySelector(`.${classIdentifier}`);
    nodeToChange.src = imageSrc;
  }

  const convertConditionsToSrc = function (conditionsString){
    if (conditionsString.includes("Clear")){
      return _images_sun_png__WEBPACK_IMPORTED_MODULE_4__;
    } else if (conditionsString.includes("Snow")){
      return _images_snow_png__WEBPACK_IMPORTED_MODULE_1__;
    } else if (conditionsString.includes("Rain")){
      return _images_rainy_png__WEBPACK_IMPORTED_MODULE_5__;
    } else if (conditionsString.includes("cloudy")){
      return _images_partly_cloudy_png__WEBPACK_IMPORTED_MODULE_2__;
    } else if (conditionsString.includes("Overcast")){
      return _images_clouds_png__WEBPACK_IMPORTED_MODULE_3__;
    } else {
      console.error(`Condition is ${conditionsString} and does not fit any image.`);
      return;
    }
  }

  return { init, editWeather };
})();




/***/ }),

/***/ "./src/images/clouds.png":
/*!*******************************!*\
  !*** ./src/images/clouds.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16e3a8915aa09ea517dc.png";

/***/ }),

/***/ "./src/images/magnifying-glass.png":
/*!*****************************************!*\
  !*** ./src/images/magnifying-glass.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "222fd03c4741aad48675.png";

/***/ }),

/***/ "./src/images/partly-cloudy.png":
/*!**************************************!*\
  !*** ./src/images/partly-cloudy.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8af0012d8baf65a404d2.png";

/***/ }),

/***/ "./src/images/rainy.png":
/*!******************************!*\
  !*** ./src/images/rainy.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2414d5c902a15b0bbbea.png";

/***/ }),

/***/ "./src/images/snow.png":
/*!*****************************!*\
  !*** ./src/images/snow.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5fb7fd269b4b1176e176.png";

/***/ }),

/***/ "./src/images/sun.png":
/*!****************************!*\
  !*** ./src/images/sun.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e084c7323a6f30ebee93.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxuKiB7XG4gICAgLS1kb2N1bWVudC1iYWNrZ3JvdW5kLWNvbG9yOiAjZjFjOGU5O1xuICAgIC0tYmFzZS1iYWNrZ3JvdW5kLWNvbG9yOiAjRDNGNkRCO1xuICAgIC0tY29udGVudC1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmYyO1xuICAgIC0tYmFzZS1iYWNrZ3JvdW5kLWVkZ2UtY29sb3I6ICMzNzkwYTc7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtLWZvbnQtc2l6ZS1sYXJnZTogMjVweDtcbiAgICAtLWZvbnQtc2l6ZS1sYXJnZXI6IDQwcHg7XG59XG5cbmgxLFxuaDIsXG5oMyxcbnAge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG46cm9vdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kb2N1bWVudC1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLyogc2VjdGlvbiB0byBvcmdhbml6ZSBtYWluIHNlY3Rpb25zIG9mIHBhZ2UgKi9cbmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLmNvbnRlbnQuY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgZ2FwOiAxMHB4ICAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwMHB4IDMwcHggdmFyKC0tYmFzZS1iYWNrZ3JvdW5kLWVkZ2UtY29sb3IpXG59XG5cbi8qIHN0eWxlIGZvcm0gYXJlYSAqL1xuLmZvcm0uY29udGFpbmVyID4gZm9ybXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG5cbiAgICBpbnB1dHtcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgICBpbWcuc3VibWl0e1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICByaWdodDogM3B4O1xuICAgICAgICB0b3A6IDA7XG4gICAgfVxufVxuXG4vKiBzdHlsZSBjdXJyZW50IHdlYXRoZXIgYXJlYSAqL1xuLnRvZGF5LndlYXRoZXIuY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnIgbWF4LWNvbnRlbnQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNSU7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmNvbmRpdGlvbntcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyOyAvKiByb3dTL2NvbFMvcm93RS9jb2xFICovXG5cbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50ZW1we1xuICAgICAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czptaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtYXgtY29udGVudDtcbiAgICAgICAgY29sdW1uLWdhcDogMTBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgXG4gICAgICAgIHAudGVtcC50ZXh0e1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGFyZ2VyKTtcbiAgICAgICAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50aW1le1xuICAgICAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XG4gICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxhcmdlKTtcbiAgICAgICAgZ2FwOiAzMHB4O1xuICAgIH1cblxuICAgIC5wcmVjaXAge1xuICAgICAgICBncmlkLWFyZWE6IDIgLyAzIC8gMyAvIDQ7XG4gICAgfVxufVxuXG4vKiBzdHlsZSBmb3JlY2FzdCAqL1xuLmZvcmVjYXN0LmJveC5jb250YWluZXJ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXI6IDJweCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGdhcDogNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5mb3JlY2FzdC5ib3h7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIHBhZGRpbmc6IDJweDtcblxuICAgICAgICBwLmRheUFuZERhdGV7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAudGVtcHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxhcmdlKTtcbiAgICAgICAgfVxuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMsbUNBQW1DO0lBQ25DLHFDQUFxQztJQUNyQyxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtBQUM1Qjs7QUFFQTs7OztJQUlJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrREFBa0Q7QUFDdEQ7O0FBRUEsOENBQThDO0FBQzlDO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksOENBQThDO0lBQzlDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7O0lBRWxCO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLDJCQUEyQjtRQUMzQixzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLFVBQVU7UUFDVixNQUFNO0lBQ1Y7QUFDSjs7QUFFQSwrQkFBK0I7QUFDL0I7SUFDSSxhQUFhO0lBQ2Isa0RBQWtEO0lBQ2xELG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7O0lBRW5CO1FBQ0ksd0JBQXdCLEVBQUUsd0JBQXdCOztRQUVsRDtZQUNJLHNCQUFzQjtZQUN0QixZQUFZO1FBQ2hCO0lBQ0o7O0lBRUE7UUFDSSx3QkFBd0I7UUFDeEIsYUFBYTtRQUNiLDBDQUEwQztRQUMxQyw4Q0FBOEM7UUFDOUMsZ0JBQWdCO1FBQ2hCLG1CQUFtQjs7UUFFbkI7WUFDSSxrQ0FBa0M7WUFDbEMsd0JBQXdCO1FBQzVCO0lBQ0o7O0lBRUE7UUFDSSx3QkFBd0I7UUFDeEIsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsaUNBQWlDO1FBQ2pDLFNBQVM7SUFDYjs7SUFFQTtRQUNJLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLFFBQVE7SUFDUixrQkFBa0I7O0lBRWxCO1FBQ0ksYUFBYTtRQUNiLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGlEQUFpRDtRQUNqRCxZQUFZOztRQUVaO1lBQ0ksZUFBZTtZQUNmLGlCQUFpQjtRQUNyQjs7UUFFQTtZQUNJLGlDQUFpQztRQUNyQztJQUNKO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuKiB7XFxuICAgIC0tZG9jdW1lbnQtYmFja2dyb3VuZC1jb2xvcjogI2YxYzhlOTtcXG4gICAgLS1iYXNlLWJhY2tncm91bmQtY29sb3I6ICNEM0Y2REI7XFxuICAgIC0tY29udGVudC1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmYyO1xcbiAgICAtLWJhc2UtYmFja2dyb3VuZC1lZGdlLWNvbG9yOiAjMzc5MGE3O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtLWZvbnQtc2l6ZS1sYXJnZTogMjVweDtcXG4gICAgLS1mb250LXNpemUtbGFyZ2VyOiA0MHB4O1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5wIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZG9jdW1lbnQtYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi8qIHNlY3Rpb24gdG8gb3JnYW5pemUgbWFpbiBzZWN0aW9ucyBvZiBwYWdlICovXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRlbnQuY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4ICAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTAwcHggMzBweCB2YXIoLS1iYXNlLWJhY2tncm91bmQtZWRnZS1jb2xvcilcXG59XFxuXFxuLyogc3R5bGUgZm9ybSBhcmVhICovXFxuLmZvcm0uY29udGFpbmVyID4gZm9ybXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuXFxuICAgIGlucHV0e1xcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxuICAgIGltZy5zdWJtaXR7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XFxuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcbiAgICAgICAgcGFkZGluZzogMnB4O1xcbiAgICAgICAgcmlnaHQ6IDNweDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgfVxcbn1cXG5cXG4vKiBzdHlsZSBjdXJyZW50IHdlYXRoZXIgYXJlYSAqL1xcbi50b2RheS53ZWF0aGVyLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnIgbWF4LWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIC5jb25kaXRpb257XFxuICAgICAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7IC8qIHJvd1MvY29sUy9yb3dFL2NvbEUgKi9cXG5cXG4gICAgICAgIGltZ3tcXG4gICAgICAgICAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAudGVtcHtcXG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6bWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1heC1jb250ZW50O1xcbiAgICAgICAgY29sdW1uLWdhcDogMTBweDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBcXG4gICAgICAgIHAudGVtcC50ZXh0e1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxhcmdlcik7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC50aW1le1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGFyZ2UpO1xcbiAgICAgICAgZ2FwOiAzMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wcmVjaXAge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMyAvIDMgLyA0O1xcbiAgICB9XFxufVxcblxcbi8qIHN0eWxlIGZvcmVjYXN0ICovXFxuLmZvcmVjYXN0LmJveC5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXI6IDJweCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICBnYXA6IDRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAuZm9yZWNhc3QuYm94e1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgICAgICBwYWRkaW5nOiAycHg7XFxuXFxuICAgICAgICBwLmRheUFuZERhdGV7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgcC50ZW1we1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxhcmdlKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gU1RPUkUgYW5kIFNFVCBsb2NhdGlvblxuLy8gYW5kIEdFVCB3ZWF0aGVyIGluZm8gYmFzZWQgb24gbG9jYXRpb25cbmNvbnNvbGUubG9nKFwiKk1PRFVMRSBDSEVDSyogZnJvbSBhcGkuanNcIik7XG5cbmNvbnN0IGFwaU1hbmFnZXIgPSAoZnVuY3Rpb24oKXtcbiAgICBsZXQgYXBpS2V5ID0gXCJodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS9sb25kb24/a2V5PVlTTExLN0pESFU3TkFQQUxSUzREUFo5UDlcIlxuICAgIGNvbnN0IGFwaUtleVN0YXJ0ID0gXCJodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS9cIlxuICAgIGNvbnN0IGFwaUtleUVuZCA9IFwiP2tleT1ZU0xMSzdKREhVN05BUEFMUlM0RFBaOVA5XCJcblxuICAgIGxldCBsb2NhdGlvbiA9ICdsb25kb24nXG4gICAgY29uc3Qgc2V0TG9jYXRpb24gPSBmdW5jdGlvbihpbnB1dExvY2F0aW9uKXtcbiAgICAgICAgbG9jYXRpb24gPSBpbnB1dExvY2F0aW9uO1xuICAgICAgICB1cGRhdGVBcGlLZXkoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2NhdGlvbiBpcyBub3cgXCIgKyBsb2NhdGlvbik7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlQXBpS2V5ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgYXBpS2V5ID0gYXBpS2V5U3RhcnQgKyBsb2NhdGlvbiArIGFwaUtleUVuZDtcbiAgICAgICAgcmV0dXJuIGFwaUtleTtcbiAgICB9XG5cbiAgICBjb25zdCByZXF1ZXN0QW5kUHJvY2Vzc0FwaSA9IGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaUtleSwge21vZGU6ICdjb3JzJ30pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGlzIGRpcmVjdCBBUEkgcmVzcG9uc2VcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZUpTT05PYmplY3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7IC8vIHJldHVybmVkIGFzIGEgSlNPTiBvYmplY3RcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyBKU09OIG9iamVjdCBmcm9tIEFQSVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlSlNPTk9iamVjdCk7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZWRKU09OID0gcHJvY2Vzc0pTT04ocmVzcG9uc2VKU09OT2JqZWN0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyBjbGVhbmVkIHVwIG9iamVjdFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2Nlc3NlZEpTT04pO1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NlZEpTT047XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmV0Y2ggZXJyb3I6ICcgKyBlcnJvcik7XG4gICAgICAgICAgICBhbGVydChcIlRoZXJlIHdhcyBhbiBpbnB1dCBlcnJvci5cIik7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOZWVkIHRvIGdldCBcInJlc29sdmVkQWRkcmVzc1wiLCBcInR6b2Zmc2V0XCIgYW5kLi4uXG4gICAgLy8gRm9yIGVhY2ggXCJkYXlzXCIgZm9yIDcgZGF5cywgbmVlZCB0byBnZXQgXCJkYXRldGltZVwiLFwidGVtcFwiLFwidGVtcG1heFwiLFwidGVtcG1pblwiLFwicHJlY2lwcHJvYlwiLFwiY29uZGl0aW9uc1wiXG4gICAgY29uc3QgcHJvY2Vzc0pTT04gPSBmdW5jdGlvbiAod2VhdGhlckpTT05PYmplY3Qpe1xuICAgICAgICBsZXQgcmVzb2x2ZWRBZGRyZXNzID0gd2VhdGhlckpTT05PYmplY3QucmVzb2x2ZWRBZGRyZXNzO1xuICAgICAgICBsZXQgdHpvZmZzZXQgPSB3ZWF0aGVySlNPTk9iamVjdC50em9mZnNldDtcbiAgICAgICAgbGV0IGRhdGVBcnJheSA9IFtdOyAvLyBhcnJheSBvZiBvYmplY3RzIHdpdGgge2RheUFuZERhdGV9XG4gICAgICAgIGxldCB0ZW1wQXJyYXkgPSBbXTsgLy8gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIHt0ZW1wLHRlbXBtYXgsdGVtcG1pbn1cbiAgICAgICAgbGV0IHByZWNpcEFycmF5ID0gW107IC8vIGFycmF5IG9mIG9iamVjdHMgd2l0aCB7cHJlY2lwLGNvbmRpdGlvbn1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspe1xuICAgICAgICAgICAgbGV0IGRheUpTT04gPSB3ZWF0aGVySlNPTk9iamVjdC5kYXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgZGF0ZU9iamVjdCA9IGNvbnZlcnREYXRlKGRheUpTT04uZGF0ZXRpbWUpO1xuICAgICAgICAgICAgZGF0ZUFycmF5LnB1c2goZGF0ZU9iamVjdCk7XG4gICAgICAgICAgICBjb25zdCB0ZW1wT2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgIHRlbXA6IGRheUpTT04udGVtcCxcbiAgICAgICAgICAgICAgICB0ZW1wbWluOiBkYXlKU09OLnRlbXBtaW4sXG4gICAgICAgICAgICAgICAgdGVtcG1heDogZGF5SlNPTi50ZW1wbWF4LFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGVtcEFycmF5LnB1c2godGVtcE9iamVjdCk7XG4gICAgICAgICAgICBjb25zdCBwcmVjaXBPYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgcHJlY2lwcHJvYjogZGF5SlNPTi5wcmVjaXBwcm9iLFxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbnM6IGRheUpTT04uY29uZGl0aW9ucyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZWNpcEFycmF5LnB1c2gocHJlY2lwT2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge3Jlc29sdmVkQWRkcmVzcywgdHpvZmZzZXQsIGRhdGVBcnJheSwgdGVtcEFycmF5LCBwcmVjaXBBcnJheX1cbiAgICB9XG5cbiAgICAvLyBjb252ZXJ0cyBZWVlZLU1NLUREIHRvIERheU9mV2VlayBEYXkgKGxpa2UgV2VkIDEyKSB1c2luZyBEYXRlIG9iamVjdHNcbiAgICBjb25zdCBjb252ZXJ0RGF0ZSA9IGZ1bmN0aW9uKGRhdGVUaW1lKXtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVUaW1lKTtcbiAgICAgICAgbGV0IGRhdGVTdHJpbmcgPSBkYXRlLnRvRGF0ZVN0cmluZygpOyAvLyBvdXRwdXRzIGFzIFdlZCBKdWwgREQgWVlZWVxuICAgICAgICBjb25zdCBkYXlPZk1vbnRoID0gZGF0ZVN0cmluZy5zbGljZSg4LDEwKTtcbiAgICAgICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZVN0cmluZy5zbGljZSgwLDMpO1xuICAgICAgICBjb25zdCBkYXlBbmREYXRlID0gZGF5T2ZXZWVrICsgXCIgXCIgKyBkYXlPZk1vbnRoO1xuICAgICAgICByZXR1cm4ge2RheUFuZERhdGV9O1xuICAgIH1cblxuICAgIGNvbnN0IGdldFdlYXRoZXIgPSBmdW5jdGlvbihpbnB1dExvY2F0aW9uKXtcbiAgICAgICAgc2V0TG9jYXRpb24oaW5wdXRMb2NhdGlvbik7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZFdlYXRoZXIgPSByZXF1ZXN0QW5kUHJvY2Vzc0FwaSgpO1xuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkV2VhdGhlcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge2dldFdlYXRoZXIsIHNldExvY2F0aW9ufVxufSkoKTtcblxuZXhwb3J0IHthcGlNYW5hZ2VyfTsiLCIvLyBpbml0aWFsaXplcyBwYWdlXG4vLyBwcm9jZXNzZXMgZXZlbnQgbGlzdGVuZXJzIGZyb20gcmVuZGVyLmpzIGFuZCBjYWxscyBhcGkuanMgZnVuY3Rpb25zXG5cbmltcG9ydCB7IGFwaU1hbmFnZXIgfSBmcm9tIFwiLi9hcGkuanNcIlxuaW1wb3J0IHsgcmVuZGVyTWFuYWdlciB9IGZyb20gXCIuL3JlbmRlci5qc1wiXG5cbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5jb25zb2xlLmxvZyhcIipNT0RVTEUgQ0hFQ0sqIGZyb20gaW5kZXguanNcIik7XG5cbmNvbnN0IHBhZ2VNYW5hZ2VyID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBkZWZhdWx0TG9jYXRpb24gPSBcImxvbmRvblwiXG4gICAgXG4gICAgY29uc3QgaW5pdCA9IGFzeW5jIGZ1bmN0aW9uKCl7XG4gICAgICAgIHJlbmRlck1hbmFnZXIuaW5pdCgpO1xuICAgICAgICBjb25zdCB3ZWF0aGVySW5mbyA9IGF3YWl0IGFwaU1hbmFnZXIuZ2V0V2VhdGhlcihkZWZhdWx0TG9jYXRpb24pO1xuICAgICAgICBpZiAod2VhdGhlckluZm8gaW5zdGFuY2VvZiBFcnJvciAhPSB0cnVlKXtcbiAgICAgICAgICAgIHJlbmRlck1hbmFnZXIuZWRpdFdlYXRoZXIod2VhdGhlckluZm8pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbmV3Rm9yZWNhc3QgPSBhc3luYyBmdW5jdGlvbihpbnB1dExvY2F0aW9uKXtcbiAgICAgICAgY29uc3Qgd2VhdGhlckluZm8gPSBhd2FpdCBhcGlNYW5hZ2VyLmdldFdlYXRoZXIoaW5wdXRMb2NhdGlvbik7XG4gICAgICAgIGlmICh3ZWF0aGVySW5mbyBpbnN0YW5jZW9mIEVycm9yICE9IHRydWUpe1xuICAgICAgICAgICAgcmVuZGVyTWFuYWdlci5lZGl0V2VhdGhlcih3ZWF0aGVySW5mbyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge2luaXQsIG5ld0ZvcmVjYXN0fTtcbn0oKTtcblxuLy8gVEVNUE9SQVJJTFkgYXR0YWNoIHRvIHdpbmRvdyBvYmplY3QgdG8gdGVzdCBuZXdGb3JlY2FzdFxud2luZG93LnBhZ2VNYW5hZ2VyID0gcGFnZU1hbmFnZXI7XG5cbnBhZ2VNYW5hZ2VyLmluaXQoKTtcblxuZXhwb3J0IHtwYWdlTWFuYWdlcn07IiwiLy8gbW9kdWxlIHN0cmljdGx5IGZvciBkaXNwbGF5aW5nIGVsZW1lbnRzXG4vLyBhbmQgYmluZGluZyBldmVudCBsaXN0ZW5lcnMgKHByb2Nlc3NpbmcgZG9uZSBlbHNld2hlcmUpXG5cbi8vIFwicmVuZGVyXCIgbWVhbnMgdG8gY3JlYXRlIGVsZW1lbnQgYW5kIGFsd2F5cyByZXR1cm5zIGFuIGVsZW1lbnRcbi8vIFwiZWRpdFwiIG1lYW5zIHRvIGNoYW5nZSB0ZXh0IG9yIHNvbWV0aGluZyBlbHNlIGFib3V0IGV4aXN0aW5nIGVsZW1lbnRcbi8vIFwiYXBwZW5kXCIgbWVhbnMgdG8gYXR0YWNoIGVsZW1lbnRzIHRvIGVhY2hvdGhlciB3aXRob3V0IHJldHVybmluZyBhbiBlbGVtZW50IChhdm9pZCB1c2luZyBleGNlcHQgYXQgaGlnaGVzdCBsZXZlbClcblxuaW1wb3J0IHsgcGFnZU1hbmFnZXIgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5pbXBvcnQgU25vd0ljb24gZnJvbSBcIi4vaW1hZ2VzL3Nub3cucG5nXCI7XG5pbXBvcnQgQ2xvdWRJY29uIGZyb20gXCIuL2ltYWdlcy9wYXJ0bHktY2xvdWR5LnBuZ1wiO1xuaW1wb3J0IE92ZXJjYXN0SWNvbiBmcm9tIFwiLi9pbWFnZXMvY2xvdWRzLnBuZ1wiO1xuaW1wb3J0IFN1bkljb24gZnJvbSBcIi4vaW1hZ2VzL3N1bi5wbmdcIjtcbmltcG9ydCBSYWluSWNvbiBmcm9tIFwiLi9pbWFnZXMvcmFpbnkucG5nXCI7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiLi9pbWFnZXMvbWFnbmlmeWluZy1nbGFzcy5wbmdcIjtcblxuY29uc29sZS5sb2coXCIqTU9EVUxFIENIRUNLKiBmcm9tIHJlbmRlci5qc1wiKTtcblxuY29uc3QgcmVuZGVyTWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJMb2NhdGlvbklucHV0KCkpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyQ29udGVudENvbnRhaW5lcnMoKSk7IC8vIHJlbmRlciB0aGUgYm94ZXMgdG8gcHV0IGZvcmVjYXN0IGluZm9cbiAgICBiaW5kTG9jYXRpb25JbnB1dCgpO1xuICB9O1xuXG4gIC8vIGhlbHBlciBmdW5jdGlvbnMgdG8gZWFzaWx5IGNyZWF0ZSBET00gZWxlbWVudHNcblxuICBjb25zdCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHRhZywgY2xhc3NBdHRyaWJ1dGUsIGlubmVyVGV4dCkge1xuICAgIGNvbnN0IGNyZWF0ZWRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGlmIChjbGFzc0F0dHJpYnV0ZSAhPT0gdW5kZWZpbmVkICYmIGNsYXNzQXR0cmlidXRlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzcGxpdENsYXNzU3RyaW5nc0FycmF5ID0gY2xhc3NBdHRyaWJ1dGUuc3BsaXQoXCIgXCIpO1xuICAgICAgZm9yIChsZXQgc2luZ2xlQ2xhc3Mgb2Ygc3BsaXRDbGFzc1N0cmluZ3NBcnJheSkge1xuICAgICAgICBjcmVhdGVkRWxlbWVudC5jbGFzc0xpc3QuYWRkKHNpbmdsZUNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlubmVyVGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjcmVhdGVkRWxlbWVudC5pbm5lclRleHQgPSBpbm5lclRleHQ7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVkRWxlbWVudDtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVJbWFnZSA9IGZ1bmN0aW9uIChzcmMsIGNsYXNzU3RyaW5nLCBhbHRUZXh0KSB7XG4gICAgY29uc3QgaW1hZ2UgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIGNsYXNzU3RyaW5nKTtcbiAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgaW1hZ2UuYWx0ID0gYWx0VGV4dDtcbiAgICBpbWFnZS5zdHlsZS53aWR0aCA9IFwiMjlweFwiO1xuICAgIHJldHVybiBpbWFnZTtcbiAgfTtcblxuICAvLyBmdW5jdGlvbnMgZm9yIHJlbmRlcmluZyB0aGUgaW5wdXQgZm9yIGxvY2F0aW9uXG4gIGNvbnN0IHJlbmRlckxvY2F0aW9uSW5wdXQgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZm9ybSBjb250YWluZXJcIik7XG4gICAgY29uc3Qgc2VhcmNoRm9ybSA9IGNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsXCJpbnB1dCBmb3JtXCIpO1xuICAgIHNlYXJjaEZvcm0ubWV0aG9kID0gXCJQT1NUXCI7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hGb3JtKTtcbiAgICBjb25zdCBpbnB1dEJhciA9IHJlbmRlcklucHV0QmFyKCk7XG4gICAgY29uc3Qgc2VhcmNoQnV0dG9uID0gcmVuZGVyU2VhcmNoQnV0dG9uKCk7XG4gICAgc2VhcmNoRm9ybS5hcHBlbmQoaW5wdXRCYXIsIHNlYXJjaEJ1dHRvbik7XG4gICAgcmV0dXJuIGZvcm1Db250YWluZXI7XG4gIH1cblxuICBjb25zdCByZW5kZXJJbnB1dEJhciA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgbG9jYXRpb25JbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBcImxvY2F0aW9uIGlucHV0XCIpO1xuICAgIGxvY2F0aW9uSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGxvY2F0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIkVudGVyIGxvY2F0aW9uLi4uXCI7XG4gICAgbG9jYXRpb25JbnB1dC5uYW1lID0gXCJsb2NhdGlvbklucHV0XCI7XG4gICAgcmV0dXJuIGxvY2F0aW9uSW5wdXQ7XG4gIH1cbiAgXG4gIGNvbnN0IHJlbmRlclNlYXJjaEJ1dHRvbiA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gY3JlYXRlSW1hZ2UoU2VhcmNoSWNvbixcImxvY2F0aW9uIHN1Ym1pdFwiLCBcInN1Ym1pdCBidXR0b25cIik7XG4gICAgcmV0dXJuIHN1Ym1pdEJ1dHRvbjtcbiAgfVxuXG4gIC8vIGJpbmQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHNlYXJjaCBidXR0b25cbiAgY29uc3QgYmluZExvY2F0aW9uSW5wdXQgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGxvY2F0aW9uRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtLmlucHV0XCIpO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGxvY2F0aW9uRm9ybS5xdWVyeVNlbGVjdG9yKFwiaW1nLnN1Ym1pdFwiKTtcbiAgICBjb25zdCBsb2NhdGlvbklucHV0ID0gbG9jYXRpb25Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5sb2NhdGlvblwiKTtcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwYWdlTWFuYWdlci5uZXdGb3JlY2FzdChsb2NhdGlvbklucHV0LnZhbHVlKTtcbiAgICAgIGxvY2F0aW9uSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gZnVuY3Rpb25zIGZvciB3ZWF0aGVyIGluZm8gcmVuZGVyaW5nXG4gIGNvbnN0IHJlbmRlckNvbnRlbnRDb250YWluZXJzID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImNvbnRlbnQgY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGxvY2F0aW9uQ29udGFpbmVyID0gcmVuZGVyTG9jYXRpb25UaXRsZUNvbnRhaW5lcigpOyAvLyByZW5kZXIgY29udGFpbmVyIHRvIHB1dCBsb2NhdGlvbiB0aXRsZVxuICAgIGNvbnN0IHRvZGF5V2VhdGhlckNvbnRhaW5lciA9IHJlbmRlclRvZGF5V2VhdGhlckNvbnRhaW5lcigpOyAvLyByZW5kZXJzIGxvdHMgaW5mbyBvbiBjdXJyZW50IHdlYXRoZXIgKyBsb2NhbCB0aW1lXG4gICAgY29uc3QgZm9yZWNhc3RCb3hlcyA9IHJlbmRlckZvcmVjYXN0Qm94ZXMoKTsgLy8gcmVuZGVyIHRoZSA3IGJveGVzICh3aXRoIGVtcHR5IGNvbnRlbnQpIGZvciBmb3JlY2FzdFxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKGxvY2F0aW9uQ29udGFpbmVyLHRvZGF5V2VhdGhlckNvbnRhaW5lciwgZm9yZWNhc3RCb3hlcyk7XG4gICAgcmV0dXJuIGNvbnRlbnRDb250YWluZXI7XG4gIH1cblxuICBsZXQgbG9jYXRpb25UaXRsZTsgLy8gcHVibGljIHZhcmlhYmxlcyB0byBtaW5pbWl6ZSBkaXJlY3QgRE9NIGFjY2Vzc1xuICBjb25zdCByZW5kZXJMb2NhdGlvblRpdGxlQ29udGFpbmVyID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBsb2NhdGlvblRpdGxlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImxvY2F0aW9uIHRpdGxlIGNvbnRhaW5lclwiKTtcbiAgICBsb2NhdGlvblRpdGxlID0gY3JlYXRlRWxlbWVudChcImgyXCIsXCJsb2NhdGlvbiB0aXRsZVwiLFwiZGVmYXVsdCBsb2NhdGlvblwiKTtcbiAgICBsb2NhdGlvblRpdGxlQ29udGFpbmVyLmFwcGVuZChsb2NhdGlvblRpdGxlKTtcbiAgICByZXR1cm4gbG9jYXRpb25UaXRsZUNvbnRhaW5lcjtcbiAgfVxuXG4gIGxldCB0b2RheVdlYXRoZXJDb250YWluZXI7XG4gIGNvbnN0IHJlbmRlclRvZGF5V2VhdGhlckNvbnRhaW5lciA9IGZ1bmN0aW9uKCl7XG4gICAgdG9kYXlXZWF0aGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRvZGF5IHdlYXRoZXIgY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRvZGF5V2VhdGhlckNvbmRpdGlvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJjb25kaXRpb24gY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGNvbmRpdGlvbkljb24gPSBjcmVhdGVJbWFnZShcIlwiLCBcImNvbmRpdGlvbiBpY29uXCIpO1xuICAgIGNvbnN0IGNvbmRpdGlvblRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImNvbmRpdGlvbiB0ZXh0XCIpO1xuICAgIHRvZGF5V2VhdGhlckNvbmRpdGlvbkNvbnRhaW5lci5hcHBlbmQoY29uZGl0aW9uSWNvbiwgY29uZGl0aW9uVGV4dCk7XG4gICAgY29uc3QgdG9kYXlXZWF0aGVyVGVtcENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0ZW1wIGNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0ZW1wVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJ0ZW1wIHRleHRcIik7XG4gICAgY29uc3QgdGVtcG1heFRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLFwidGVtcG1heCB0ZXh0XCIpO1xuICAgIGNvbnN0IHRlbXBtaW5UZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIixcInRlbXBtaW4gdGV4dFwiKTtcbiAgICB0b2RheVdlYXRoZXJUZW1wQ29udGFpbmVyLmFwcGVuZCh0ZW1wVGV4dCwgdGVtcG1heFRleHQsIHRlbXBtaW5UZXh0KTtcbiAgICBjb25zdCB0b2RheVdlYXRoZXJUaW1lQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRpbWUgY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGRheVRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImRheSB0ZXh0XCIpO1xuICAgIGNvbnN0IHRpbWVUZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIixcInRpbWUgdGV4dFwiKTtcbiAgICB0b2RheVdlYXRoZXJUaW1lQ29udGFpbmVyLmFwcGVuZChkYXlUZXh0LCB0aW1lVGV4dCk7XG4gICAgY29uc3QgdG9kYXlXZWF0aGVyUHJlY2lwcHJvYkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcmVjaXAgY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHByZWNpcFRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInByZWNpcCB0ZXh0XCIpO1xuICAgIHRvZGF5V2VhdGhlclByZWNpcHByb2JDb250YWluZXIuYXBwZW5kKHByZWNpcFRleHQpO1xuICAgIHRvZGF5V2VhdGhlckNvbnRhaW5lci5hcHBlbmQodG9kYXlXZWF0aGVyQ29uZGl0aW9uQ29udGFpbmVyLHRvZGF5V2VhdGhlclRlbXBDb250YWluZXIsdG9kYXlXZWF0aGVyVGltZUNvbnRhaW5lcix0b2RheVdlYXRoZXJQcmVjaXBwcm9iQ29udGFpbmVyKTtcbiAgICByZXR1cm4gdG9kYXlXZWF0aGVyQ29udGFpbmVyO1xuICB9XG5cbiAgbGV0IGZvcmVjYXN0Qm94ZXMgPSBbXTtcbiAgY29uc3QgcmVuZGVyRm9yZWNhc3RCb3hlcyA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZm9yZWNhc3RCb3hDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZm9yZWNhc3QgYm94IGNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBmb3JlY2FzdEJveCA9IHJlbmRlckZvcmVjYXN0Qm94KCk7XG4gICAgZm9yZWNhc3RCb3hlc1swXSA9IGZvcmVjYXN0Qm94O1xuICAgIGZvcmVjYXN0Qm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcmVjYXN0Qm94KTtcbiAgICBmb3IgKGxldCBpPTE7IGkgPDc7IGkrKyl7XG4gICAgICBjb25zdCBmb3JlY2FzdEJveENsb25lID0gZm9yZWNhc3RCb3guY2xvbmVOb2RlKHRydWUpO1xuICAgICAgZm9yZWNhc3RCb3hlc1tpXSA9IGZvcmVjYXN0Qm94Q2xvbmU7XG4gICAgICBmb3JlY2FzdEJveENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdEJveENsb25lKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvcmVjYXN0Qm94Q29udGFpbmVyO1xuICB9XG5cbiAgY29uc3QgcmVuZGVyRm9yZWNhc3RCb3ggPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGZvcmVjYXN0Qm94ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLFwiZm9yZWNhc3QgYm94XCIpO1xuICAgIGNvbnN0IGNvbnRlbnRCb3hlcyA9IHJlbmRlckZvcmVjYXN0Q29udGVudEJveGVzKCk7IC8vIHRoaXMgd2lsbCBjcmVhdGUgY29udGFpbmVycyBmb3IgaW5mbyBvZiB0ZW1wLCBtaW4sIG1heCwgcHJlY2lwLCBldGNcbiAgICBmb3JlY2FzdEJveC5hcHBlbmQoLi4uT2JqZWN0LnZhbHVlcyhjb250ZW50Qm94ZXMpKTsgLy8gYXBwZW5kcyBlYWNoIG5vZGUgd2l0aGluIGNvbnRlbnRCb3hlc09iamVjdFxuICAgIHJldHVybiBmb3JlY2FzdEJveDtcbiAgfVxuXG4gIC8vIGNyZWF0ZXMgY29udGFpbmVycyBvciBIVE1MIGVsZW1lbnRzIHdpdGhpbiB0aGUgZm9yZWNhc3QgYm94ZXNcbiAgLy8gLi4uZm9yIGRheU9mV2VlaywgbW9udGhEYXksIHRlbXAsIHRlbXBtaW4sIHRlbXBtYXgsIGNvbmRpdGlvbnMsIHByZWNpcHByb2JcbiAgY29uc3QgcmVuZGVyRm9yZWNhc3RDb250ZW50Qm94ZXMgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IHRpbWVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidGltZSBjb250YWluZXJcIik7XG4gICAgY29uc3QgZGF5QW5kRGF0ZVRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImRheUFuZERhdGUgdGV4dFwiKTtcbiAgICB0aW1lQ29udGFpbmVyLmFwcGVuZChkYXlBbmREYXRlVGV4dCk7XG4gICAgY29uc3QgdGVtcENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0ZW1wIGNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0ZW1wVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJ0ZW1wIHRleHRcIik7XG4gICAgY29uc3QgdGVtcG1pbm1heFRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLFwidGVtcG1pbm1heCB0ZXh0XCIpO1xuICAgIHRlbXBDb250YWluZXIuYXBwZW5kKHRlbXBUZXh0LCB0ZW1wbWlubWF4VGV4dCk7XG4gICAgY29uc3QgY29uZGl0aW9uc0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJjb25kaXRpb25zIGNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjb25kaXRpb25zSW1hZ2UgPSBjcmVhdGVJbWFnZShcIlwiLFwiY29uZGl0aW9ucyBpbWFnZVwiKTsgLy8gbXVzdCBjb252ZXJ0IGNvbmRpdGlvbnMgdGV4dCB0byBhbiBpbWFnZSBzcmMgaW4gZWRpdGluZyBsYXRlclxuICAgIGNvbnN0IHByZWNpcHByb2JUZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJwcmVjaXBwcm9iIHRleHRcIik7XG4gICAgY29uZGl0aW9uc0NvbnRhaW5lci5hcHBlbmQoY29uZGl0aW9uc0ltYWdlLCBwcmVjaXBwcm9iVGV4dCk7XG4gICAgcmV0dXJuIHt0aW1lQ29udGFpbmVyLCB0ZW1wQ29udGFpbmVyLCBjb25kaXRpb25zQ29udGFpbmVyfTtcbiAgfVxuXG4gIC8vIEV2ZXJ5dGhpbmcgYmVsb3cgdGhpcyBpcyBtZWFudCB0byBlZGl0IGV4aXN0aW5nIGVsZW1lbnRzIC8vXG5cbiAgLy8gZWRpdHMgdGV4dCBjb250ZW50IHRvIHNob3cgd2VhdGhlciBpbmZvcm1hdGlvblxuICAvLyBvcmdhbml6ZXMgd2VhdGhlckluZm8gdG8gc2VuZCBvbmx5IHJlbGV2YW50IGluZm8gdG8gZWFjaCBmdW5jdGlvblxuICBjb25zdCBlZGl0V2VhdGhlciA9IGZ1bmN0aW9uKHdlYXRoZXJJbmZvKXtcbiAgICBlZGl0TG9jYXRpb25UaXRsZSh3ZWF0aGVySW5mby5yZXNvbHZlZEFkZHJlc3MpO1xuICAgIGVkaXRUb2RheVdlYXRoZXIod2VhdGhlckluZm8udHpvZmZzZXQsIHdlYXRoZXJJbmZvLmRhdGVBcnJheVswXSx3ZWF0aGVySW5mby50ZW1wQXJyYXlbMF0sIHdlYXRoZXJJbmZvLnByZWNpcEFycmF5WzBdKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaTw3OyBpKyspe1xuICAgICAgZWRpdEZvcmVjYXN0Qm94KGksIHdlYXRoZXJJbmZvLmRhdGVBcnJheVtpXSwgd2VhdGhlckluZm8udGVtcEFycmF5W2ldLCB3ZWF0aGVySW5mby5wcmVjaXBBcnJheVtpXSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB0aGUgd2VhdGhlciB0aGF0IHJlbmRlci5qcyBzZWVzXCIpO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJJbmZvKTtcbiAgfVxuXG4gIGNvbnN0IGVkaXRMb2NhdGlvblRpdGxlID0gZnVuY3Rpb24gKHJlc29sdmVkQWRkcmVzcyl7XG4gICAgbG9jYXRpb25UaXRsZS50ZXh0Q29udGVudCA9IHJlc29sdmVkQWRkcmVzcztcbiAgfVxuXG4gIGNvbnN0IERFR1JFRV9GX1NZTUJPTCA9IFwiwrBGXCI7XG4gIGNvbnN0IERFR1JFRV9TWU1CT0wgPSBcIsKwXCI7XG4gIGNvbnN0IGVkaXRUb2RheVdlYXRoZXIgPSBmdW5jdGlvbih0em9mZnNldCwgZGF0ZU9iamVjdCwgdGVtcE9iamVjdCwgcHJlY2lwT2JqZWN0KXtcbiAgICBjb25zdCBjb25kaXRpb25UZW1wVGltZVByZWNpcENvbnRhaW5lcnMgPSB0b2RheVdlYXRoZXJDb250YWluZXIuY2hpbGRyZW47XG4gICAgZWRpdENsYXNzQ2hpbGRJbWFnZShjb25kaXRpb25UZW1wVGltZVByZWNpcENvbnRhaW5lcnNbMF0sIFwiaWNvblwiLCBwcmVjaXBPYmplY3QuY29uZGl0aW9ucyk7XG4gICAgZWRpdENsYXNzQ2hpbGQoY29uZGl0aW9uVGVtcFRpbWVQcmVjaXBDb250YWluZXJzWzBdLCBcInRleHRcIiwgcHJlY2lwT2JqZWN0LmNvbmRpdGlvbnMpO1xuICAgIC8vIGdvZXMgdGhyb3VnaCBlYWNoIGtleSwgdmFsdWUgcGFpciBpbiB0ZW1wT2JqZWN0IGFuZCB1cGRhdGVzIHRleHQgb24gbm9kZXNcbiAgICBlZGl0Q2xhc3NDaGlsZChjb25kaXRpb25UZW1wVGltZVByZWNpcENvbnRhaW5lcnNbMV0sIFwidGVtcFwiLCBgJHt0ZW1wT2JqZWN0LnRlbXB9JHtERUdSRUVfRl9TWU1CT0x9YCk7XG4gICAgZWRpdENsYXNzQ2hpbGQoY29uZGl0aW9uVGVtcFRpbWVQcmVjaXBDb250YWluZXJzWzFdLCBcInRlbXBtYXhcIiwgYE1heDogJHt0ZW1wT2JqZWN0LnRlbXBtYXh9JHtERUdSRUVfRl9TWU1CT0x9YCk7XG4gICAgZWRpdENsYXNzQ2hpbGQoY29uZGl0aW9uVGVtcFRpbWVQcmVjaXBDb250YWluZXJzWzFdLCBcInRlbXBtaW5cIiwgYE1pbjogJHt0ZW1wT2JqZWN0LnRlbXBtaW59JHtERUdSRUVfRl9TWU1CT0x9YCk7XG4gICAgZWRpdENsYXNzQ2hpbGQoY29uZGl0aW9uVGVtcFRpbWVQcmVjaXBDb250YWluZXJzWzJdLCBcImRheVwiLCBkYXRlT2JqZWN0LmRheUFuZERhdGUpO1xuICAgIGVkaXRDbGFzc0NoaWxkKGNvbmRpdGlvblRlbXBUaW1lUHJlY2lwQ29udGFpbmVyc1syXSwgXCJ0aW1lXCIsIGNhbGN1bGF0ZUxvY2FsVGltZSh0em9mZnNldCkpO1xuICAgIGVkaXRDbGFzc0NoaWxkKGNvbmRpdGlvblRlbXBUaW1lUHJlY2lwQ29udGFpbmVyc1szXSwgXCJwcmVjaXBcIiwgYFByZWNpcGl0YXRpb246ICR7cHJlY2lwT2JqZWN0LnByZWNpcHByb2J9JWApO1xuICB9XG5cbiAgLy8gbWFudWFsbHkgY2FsY3VsYXRlIHRoZSBsb2NhbCB0aW1lIGF0IHRoZSBsb2NhdGlvbiB1c2luZyBVVEMgdGltZSArLy0gdHpvZmZzZXRcbiAgLy8gcmV0dXJucyBzdHJpbmcgd2l0aCBmb3JtIEhIOk1NIEFNIChvciBQTSlcbiAgY29uc3QgY2FsY3VsYXRlTG9jYWxUaW1lID0gZnVuY3Rpb24odHpvZmZzZXQpe1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAvLyByZXR1cm5zIGxvY2FsIGhvdXIgZnJvbSAwLTIzXG4gICAgY29uc3QgbG9jYWxIb3VyVW5mb3JtYXR0ZWQgPSAoY3VycmVudERhdGUuZ2V0VVRDSG91cnMoKSt0em9mZnNldCsyNCklMjQ7XG4gICAgbGV0IEFNUE1TdHJpbmc7XG4gICAgaWYgKE1hdGgudHJ1bmMobG9jYWxIb3VyVW5mb3JtYXR0ZWQvMTIpID09IDApe1xuICAgICAgQU1QTVN0cmluZyA9IFwiQU1cIjtcbiAgICB9IGVsc2V7XG4gICAgICBBTVBNU3RyaW5nID0gXCJQTVwiO1xuICAgIH1cbiAgICBsZXQgbG9jYWxIb3VyID0gKGxvY2FsSG91clVuZm9ybWF0dGVkKSUxMjsgLy8gY29udmVydCAwLTIzIHRvIDAtMTFcbiAgICBpZiAobG9jYWxIb3VyID09IDApe1xuICAgICAgbG9jYWxIb3VyID0gMTI7XG4gICAgfVxuICAgIGNvbnN0IGxvY2FsTWludXRlcyA9IGN1cnJlbnREYXRlLnRvVGltZVN0cmluZygpLnNsaWNlKDIsNSk7IC8vIGNvbnRhaW5zIFwiOk1NXCJcbiAgICBjb25zdCBsb2NhbFRpbWVTdHJpbmcgPSBgJHtsb2NhbEhvdXJ9JHtsb2NhbE1pbnV0ZXN9ICR7QU1QTVN0cmluZ31gO1xuICAgIHJldHVybiBsb2NhbFRpbWVTdHJpbmc7XG4gIH1cblxuICAvLyBlZGl0cyBpbmRpdmlkdWFsIGJveCBhbGwgYXQgb25jZSB0byByZWR1Y2UgYW1vdW50IG9mIHJlZmVyZW5jZXMgdG8gbm9kZXNcbiAgLy8gUGFyYW1ldGVyczogaW5kZXgsIHttb250aERheSwgZGF5T2ZXZWVrfSwge3RlbXAsIHRlbXBtaW4sIHRlbXBtYXh9LCB7cHJlY2lwcHJvYiwgY29uZGl0aW9uc31cbiAgLy8gdGltZVRlbXBDb25kaXRpb25zQ29udGFpbmVycyBpcyBqdXN0IGNoaWxkIG5vZGVzIG9mIHRoZSBmb3JlY2FzdCBib3hcbiAgY29uc3QgZWRpdEZvcmVjYXN0Qm94ID0gZnVuY3Rpb24oaW5kZXgsIGRhdGVPYmplY3QsIHRlbXBPYmplY3QsIHByZWNpcE9iamVjdCl7XG4gICAgY29uc3QgdGltZVRlbXBDb25kaXRpb25zQ29udGFpbmVycyA9IGZvcmVjYXN0Qm94ZXNbaW5kZXhdLmNoaWxkcmVuO1xuICAgIC8vIGdvZXMgdGhyb3VnaCBlYWNoIGtleSwgdmFsdWUgcGFpciBpbiBkYXRlT2JqZWN0IGFuZCB1cGRhdGVzIHRleHQgb24gbm9kZXNcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkYXRlT2JqZWN0KSl7XG4gICAgICBlZGl0Q2xhc3NDaGlsZCh0aW1lVGVtcENvbmRpdGlvbnNDb250YWluZXJzWzBdLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgZWRpdENsYXNzQ2hpbGQodGltZVRlbXBDb25kaXRpb25zQ29udGFpbmVyc1sxXSwgXCJ0ZW1wXCIsIGAke3RlbXBPYmplY3QudGVtcH0ke0RFR1JFRV9TWU1CT0x9YCk7XG4gICAgZWRpdENsYXNzQ2hpbGQodGltZVRlbXBDb25kaXRpb25zQ29udGFpbmVyc1sxXSwgXCJ0ZW1wbWlubWF4XCIsIGAke3RlbXBPYmplY3QudGVtcG1pbn0ke0RFR1JFRV9TWU1CT0x9LSR7dGVtcE9iamVjdC50ZW1wbWF4fSR7REVHUkVFX1NZTUJPTH1gKTtcbiAgICAvLyByZXBlYXRlZCBmb3Igb3RoZXIgb2JqZWN0cywgYmVjYXVzZSBuZXN0ZWQgbG9vcHMgY29uZnVzaW5nXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJlY2lwT2JqZWN0KSl7XG4gICAgICBpZiAoa2V5ID09IFwicHJlY2lwcHJvYlwiKXtcbiAgICAgICAgZWRpdENsYXNzQ2hpbGQodGltZVRlbXBDb25kaXRpb25zQ29udGFpbmVyc1syXSwga2V5LCBgJHt2YWx1ZX0lYCk7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PSBcImNvbmRpdGlvbnNcIil7XG4gICAgICAgIGVkaXRDbGFzc0NoaWxkSW1hZ2UodGltZVRlbXBDb25kaXRpb25zQ29udGFpbmVyc1syXSwga2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBoZWxwZXIgZnVuY3Rpb24gdGhhdCBlZGl0cyB0aGUgdGV4dCBvZiBhIGNoaWxkIG5vZGUgZ2l2ZW4gdGhlIHBhcmVudCBub2RlIGFuZCB0aGUgY2hpbGQgbm9kZSdzIGNsYXNzXG4gIC8vIHdoaWNoIGNoaWxkIG5vZGUgZGV0ZXJtaW5lZCBieSBjbGFzcyBpZGVudGlmaWVyXG4gIGNvbnN0IGVkaXRDbGFzc0NoaWxkID0gZnVuY3Rpb24ocGFyZW50Tm9kZSwgY2xhc3NJZGVudGlmaWVyLCBuZXdUZXh0KXtcbiAgICBjb25zdCBub2RlVG9DaGFuZ2UgPSBwYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzSWRlbnRpZmllcn1gKTtcbiAgICBub2RlVG9DaGFuZ2UudGV4dENvbnRlbnQgPSBuZXdUZXh0O1xuICB9XG5cbiAgY29uc3QgZWRpdENsYXNzQ2hpbGRJbWFnZSA9IGZ1bmN0aW9uKHBhcmVudE5vZGUsIGNsYXNzSWRlbnRpZmllciwgbmV3Q29uZGl0aW9ucyl7XG4gICAgY29uc3QgaW1hZ2VTcmMgPSBjb252ZXJ0Q29uZGl0aW9uc1RvU3JjKG5ld0NvbmRpdGlvbnMpO1xuICAgIGNvbnN0IG5vZGVUb0NoYW5nZSA9IHBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NJZGVudGlmaWVyfWApO1xuICAgIG5vZGVUb0NoYW5nZS5zcmMgPSBpbWFnZVNyYztcbiAgfVxuXG4gIGNvbnN0IGNvbnZlcnRDb25kaXRpb25zVG9TcmMgPSBmdW5jdGlvbiAoY29uZGl0aW9uc1N0cmluZyl7XG4gICAgaWYgKGNvbmRpdGlvbnNTdHJpbmcuaW5jbHVkZXMoXCJDbGVhclwiKSl7XG4gICAgICByZXR1cm4gU3VuSWNvbjtcbiAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbnNTdHJpbmcuaW5jbHVkZXMoXCJTbm93XCIpKXtcbiAgICAgIHJldHVybiBTbm93SWNvbjtcbiAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbnNTdHJpbmcuaW5jbHVkZXMoXCJSYWluXCIpKXtcbiAgICAgIHJldHVybiBSYWluSWNvbjtcbiAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbnNTdHJpbmcuaW5jbHVkZXMoXCJjbG91ZHlcIikpe1xuICAgICAgcmV0dXJuIENsb3VkSWNvbjtcbiAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbnNTdHJpbmcuaW5jbHVkZXMoXCJPdmVyY2FzdFwiKSl7XG4gICAgICByZXR1cm4gT3ZlcmNhc3RJY29uO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBDb25kaXRpb24gaXMgJHtjb25kaXRpb25zU3RyaW5nfSBhbmQgZG9lcyBub3QgZml0IGFueSBpbWFnZS5gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBpbml0LCBlZGl0V2VhdGhlciB9O1xufSkoKTtcblxuZXhwb3J0IHsgcmVuZGVyTWFuYWdlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==