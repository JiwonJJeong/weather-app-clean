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
    --document-background-color: #B1AFFF;
    --base-background-color: #FFE9D0;
    --alt-font-color: pink;
    --content-background-color: #FFFED3;
    --base-background-edge-color: blue;
    --border-color: black;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":";AACA;IACI,oCAAoC;IACpC,gCAAgC;IAChC,sBAAsB;IACtB,mCAAmC;IACnC,kCAAkC;IAClC,qBAAqB;IACrB,sBAAsB;IACtB,uBAAuB;IACvB,wBAAwB;AAC5B;;AAEA;;;;IAII,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kDAAkD;AACtD;;AAEA,8CAA8C;AAC9C;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;IACT,gBAAgB;IAChB,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,8CAA8C;IAC9C,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,qBAAqB;IACrB,eAAe;IACf,kBAAkB;IAClB;AACJ;;AAEA,oBAAoB;AACpB;IACI,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;;IAElB;QACI,gBAAgB;QAChB,iBAAiB;QACjB,kBAAkB;QAClB,YAAY;IAChB;IACA;QACI,kBAAkB;QAClB,2BAA2B;QAC3B,sBAAsB;QACtB,YAAY;QACZ,UAAU;QACV,MAAM;IACV;AACJ;;AAEA,+BAA+B;AAC/B;IACI,aAAa;IACb,kDAAkD;IAClD,mCAAmC;IACnC,iBAAiB;IACjB,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;;IAEnB;QACI,wBAAwB,EAAE,wBAAwB;;QAElD;YACI,sBAAsB;YACtB,YAAY;QAChB;IACJ;;IAEA;QACI,wBAAwB;QACxB,aAAa;QACb,0CAA0C;QAC1C,8CAA8C;QAC9C,gBAAgB;QAChB,mBAAmB;;QAEnB;YACI,kCAAkC;YAClC,wBAAwB;QAC5B;IACJ;;IAEA;QACI,wBAAwB;QACxB,mBAAmB;QACnB,aAAa;QACb,mBAAmB;QACnB,iCAAiC;QACjC,SAAS;IACb;;IAEA;QACI,wBAAwB;IAC5B;AACJ;;AAEA,mBAAmB;AACnB;IACI,YAAY;IACZ,8BAA8B;IAC9B,+BAA+B;IAC/B,QAAQ;IACR,kBAAkB;;IAElB;QACI,aAAa;QACb,qBAAqB;QACrB,uBAAuB;QACvB,mBAAmB;QACnB,iDAAiD;QACjD,YAAY;;QAEZ;YACI,eAAe;YACf,iBAAiB;QACrB;;QAEA;YACI,iCAAiC;QACrC;IACJ;AACJ","sourcesContent":["\n* {\n    --document-background-color: #B1AFFF;\n    --base-background-color: #FFE9D0;\n    --alt-font-color: pink;\n    --content-background-color: #FFFED3;\n    --base-background-edge-color: blue;\n    --border-color: black;\n    box-sizing: border-box;\n    --font-size-large: 25px;\n    --font-size-larger: 40px;\n}\n\nh1,\nh2,\nh3,\np {\n    margin: 0;\n    padding: 0;\n}\n\n:root{\n    background-color: var(--document-background-color);\n}\n\n/* section to organize main sections of page */\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 10px;\n    margin-top: 40px;\n    align-items: center;\n    font-family: Arial, sans-serif;\n}\n\n.content.container{\n    background-color: var(--base-background-color);\n    padding: 20px;\n    padding-bottom: 0px;\n    display:flex;\n    flex-direction:column;\n    gap: 10px  20px;\n    border-radius: 5px;\n    box-shadow: inset 0px 0px 100px 30px var(--base-background-edge-color)\n}\n\n/* style form area */\n.form.container > form{\n    position: relative;\n    height: min-content;\n    width: min-content;\n\n    input{\n        position: static;\n        padding: 5px 10px;\n        border-radius: 5px;\n        border: none;\n    }\n    img.submit{\n        position: absolute;\n        max-height: 100% !important;\n        width: auto !important;\n        padding: 2px;\n        right: 3px;\n        top: 0;\n    }\n}\n\n/* style current weather area */\n.today.weather.container{\n    display: grid;\n    grid-template-columns: min-content 1fr max-content;\n    grid-template-rows: min-content 1fr;\n    margin-right: 15%;\n    justify-items: center;\n    text-align: center;\n    align-items: center;\n\n    .condition{\n        grid-area: 2 / 1 / 3 / 2; /* rowS/colS/rowE/colE */\n\n        img{\n            width: 80px !important;\n            height: auto;\n        }\n    }\n\n    .temp{\n        grid-area: 2 / 2 / 3 / 3;\n        display: grid;\n        grid-template-rows:min-content min-content;\n        grid-template-columns: min-content max-content;\n        column-gap: 10px;\n        align-items: center;\n        \n        p.temp.text{\n            font-size: var(--font-size-larger);\n            grid-area: 1 / 1 / 3 / 2;\n        }\n    }\n\n    .time{\n        grid-area: 1 / 1 / 2 / 3;\n        justify-self: start;\n        display: flex;\n        flex-direction: row;\n        font-size: var(--font-size-large);\n        gap: 30px;\n    }\n\n    .precip {\n        grid-area: 2 / 3 / 3 / 4;\n    }\n}\n\n/* style forecast */\n.forecast.box.container{\n    display:flex;\n    justify-content: space-between;\n    border: 2px var(--border-color);\n    gap: 4px;\n    text-align: center;\n\n    .forecast.box{\n        display: flex;\n        flex-direction:column;\n        justify-content: center;\n        align-items: center;\n        background-color: var(--content-background-color);\n        padding: 2px;\n\n        p.dayAndDate{\n            font-size: 20px;\n            font-weight: bold;\n        }\n\n        p.temp{\n            font-size: var(--font-size-large);\n        }\n    }\n}"],"sourceRoot":""}]);
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
    const localHourUnformatted = (currentDate.getUTCHours()+tzoffset)%24;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbioge1xuICAgIC0tZG9jdW1lbnQtYmFja2dyb3VuZC1jb2xvcjogI0IxQUZGRjtcbiAgICAtLWJhc2UtYmFja2dyb3VuZC1jb2xvcjogI0ZGRTlEMDtcbiAgICAtLWFsdC1mb250LWNvbG9yOiBwaW5rO1xuICAgIC0tY29udGVudC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRUQzO1xuICAgIC0tYmFzZS1iYWNrZ3JvdW5kLWVkZ2UtY29sb3I6IGJsdWU7XG4gICAgLS1ib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLS1mb250LXNpemUtbGFyZ2U6IDI1cHg7XG4gICAgLS1mb250LXNpemUtbGFyZ2VyOiA0MHB4O1xufVxuXG5oMSxcbmgyLFxuaDMsXG5wIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuOnJvb3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZG9jdW1lbnQtYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbi8qIHNlY3Rpb24gdG8gb3JnYW5pemUgbWFpbiBzZWN0aW9ucyBvZiBwYWdlICovXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250ZW50LmNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWJhY2tncm91bmQtY29sb3IpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGdhcDogMTBweCAgMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMDBweCAzMHB4IHZhcigtLWJhc2UtYmFja2dyb3VuZC1lZGdlLWNvbG9yKVxufVxuXG4vKiBzdHlsZSBmb3JtIGFyZWEgKi9cbi5mb3JtLmNvbnRhaW5lciA+IGZvcm17XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuXG4gICAgaW5wdXR7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gICAgaW1nLnN1Ym1pdHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgcmlnaHQ6IDNweDtcbiAgICAgICAgdG9wOiAwO1xuICAgIH1cbn1cblxuLyogc3R5bGUgY3VycmVudCB3ZWF0aGVyIGFyZWEgKi9cbi50b2RheS53ZWF0aGVyLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyIG1heC1jb250ZW50O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xuICAgIG1hcmdpbi1yaWdodDogMTUlO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5jb25kaXRpb257XG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjsgLyogcm93Uy9jb2xTL3Jvd0UvY29sRSAqL1xuXG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGVtcHtcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6bWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWF4LWNvbnRlbnQ7XG4gICAgICAgIGNvbHVtbi1nYXA6IDEwcHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIFxuICAgICAgICBwLnRlbXAudGV4dHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxhcmdlcik7XG4gICAgICAgICAgICBncmlkLWFyZWE6IDEgLyAxIC8gMyAvIDI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGltZXtcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sYXJnZSk7XG4gICAgICAgIGdhcDogMzBweDtcbiAgICB9XG5cbiAgICAucHJlY2lwIHtcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMyAvIDMgLyA0O1xuICAgIH1cbn1cblxuLyogc3R5bGUgZm9yZWNhc3QgKi9cbi5mb3JlY2FzdC5ib3guY29udGFpbmVye1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyOiAycHggdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBnYXA6IDRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAuZm9yZWNhc3QuYm94e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBwYWRkaW5nOiAycHg7XG5cbiAgICAgICAgcC5kYXlBbmREYXRle1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBwLnRlbXB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sYXJnZSk7XG4gICAgICAgIH1cbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsa0NBQWtDO0lBQ2xDLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtBQUM1Qjs7QUFFQTs7OztJQUlJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrREFBa0Q7QUFDdEQ7O0FBRUEsOENBQThDO0FBQzlDO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksOENBQThDO0lBQzlDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7O0lBRWxCO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLDJCQUEyQjtRQUMzQixzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLFVBQVU7UUFDVixNQUFNO0lBQ1Y7QUFDSjs7QUFFQSwrQkFBK0I7QUFDL0I7SUFDSSxhQUFhO0lBQ2Isa0RBQWtEO0lBQ2xELG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7O0lBRW5CO1FBQ0ksd0JBQXdCLEVBQUUsd0JBQXdCOztRQUVsRDtZQUNJLHNCQUFzQjtZQUN0QixZQUFZO1FBQ2hCO0lBQ0o7O0lBRUE7UUFDSSx3QkFBd0I7UUFDeEIsYUFBYTtRQUNiLDBDQUEwQztRQUMxQyw4Q0FBOEM7UUFDOUMsZ0JBQWdCO1FBQ2hCLG1CQUFtQjs7UUFFbkI7WUFDSSxrQ0FBa0M7WUFDbEMsd0JBQXdCO1FBQzVCO0lBQ0o7O0lBRUE7UUFDSSx3QkFBd0I7UUFDeEIsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsaUNBQWlDO1FBQ2pDLFNBQVM7SUFDYjs7SUFFQTtRQUNJLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLFFBQVE7SUFDUixrQkFBa0I7O0lBRWxCO1FBQ0ksYUFBYTtRQUNiLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGlEQUFpRDtRQUNqRCxZQUFZOztRQUVaO1lBQ0ksZUFBZTtZQUNmLGlCQUFpQjtRQUNyQjs7UUFFQTtZQUNJLGlDQUFpQztRQUNyQztJQUNKO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuKiB7XFxuICAgIC0tZG9jdW1lbnQtYmFja2dyb3VuZC1jb2xvcjogI0IxQUZGRjtcXG4gICAgLS1iYXNlLWJhY2tncm91bmQtY29sb3I6ICNGRkU5RDA7XFxuICAgIC0tYWx0LWZvbnQtY29sb3I6IHBpbms7XFxuICAgIC0tY29udGVudC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRUQzO1xcbiAgICAtLWJhc2UtYmFja2dyb3VuZC1lZGdlLWNvbG9yOiBibHVlO1xcbiAgICAtLWJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC0tZm9udC1zaXplLWxhcmdlOiAyNXB4O1xcbiAgICAtLWZvbnQtc2l6ZS1sYXJnZXI6IDQwcHg7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbnAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kb2N1bWVudC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuLyogc2VjdGlvbiB0byBvcmdhbml6ZSBtYWluIHNlY3Rpb25zIG9mIHBhZ2UgKi9cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29udGVudC5jb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBnYXA6IDEwcHggIDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMDBweCAzMHB4IHZhcigtLWJhc2UtYmFja2dyb3VuZC1lZGdlLWNvbG9yKVxcbn1cXG5cXG4vKiBzdHlsZSBmb3JtIGFyZWEgKi9cXG4uZm9ybS5jb250YWluZXIgPiBmb3Jte1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG5cXG4gICAgaW5wdXR7XFxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgIH1cXG4gICAgaW1nLnN1Ym1pdHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcXG4gICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgICAgICBwYWRkaW5nOiAycHg7XFxuICAgICAgICByaWdodDogM3B4O1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICB9XFxufVxcblxcbi8qIHN0eWxlIGN1cnJlbnQgd2VhdGhlciBhcmVhICovXFxuLnRvZGF5LndlYXRoZXIuY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmciBtYXgtY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgLmNvbmRpdGlvbntcXG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjsgLyogcm93Uy9jb2xTL3Jvd0UvY29sRSAqL1xcblxcbiAgICAgICAgaW1ne1xcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC50ZW1we1xcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czptaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWF4LWNvbnRlbnQ7XFxuICAgICAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIFxcbiAgICAgICAgcC50ZW1wLnRleHR7XFxuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGFyZ2VyKTtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IDEgLyAxIC8gMyAvIDI7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnRpbWV7XFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sYXJnZSk7XFxuICAgICAgICBnYXA6IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByZWNpcCB7XFxuICAgICAgICBncmlkLWFyZWE6IDIgLyAzIC8gMyAvIDQ7XFxuICAgIH1cXG59XFxuXFxuLyogc3R5bGUgZm9yZWNhc3QgKi9cXG4uZm9yZWNhc3QuYm94LmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlcjogMnB4IHZhcigtLWJvcmRlci1jb2xvcik7XFxuICAgIGdhcDogNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIC5mb3JlY2FzdC5ib3h7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgICAgIHBhZGRpbmc6IDJweDtcXG5cXG4gICAgICAgIHAuZGF5QW5kRGF0ZXtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBwLnRlbXB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGFyZ2UpO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBTVE9SRSBhbmQgU0VUIGxvY2F0aW9uXG4vLyBhbmQgR0VUIHdlYXRoZXIgaW5mbyBiYXNlZCBvbiBsb2NhdGlvblxuY29uc29sZS5sb2coXCIqTU9EVUxFIENIRUNLKiBmcm9tIGFwaS5qc1wiKTtcblxuY29uc3QgYXBpTWFuYWdlciA9IChmdW5jdGlvbigpe1xuICAgIGxldCBhcGlLZXkgPSBcImh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lL2xvbmRvbj9rZXk9WVNMTEs3SkRIVTdOQVBBTFJTNERQWjlQOVwiXG4gICAgY29uc3QgYXBpS2V5U3RhcnQgPSBcImh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lL1wiXG4gICAgY29uc3QgYXBpS2V5RW5kID0gXCI/a2V5PVlTTExLN0pESFU3TkFQQUxSUzREUFo5UDlcIlxuXG4gICAgbGV0IGxvY2F0aW9uID0gJ2xvbmRvbidcbiAgICBjb25zdCBzZXRMb2NhdGlvbiA9IGZ1bmN0aW9uKGlucHV0TG9jYXRpb24pe1xuICAgICAgICBsb2NhdGlvbiA9IGlucHV0TG9jYXRpb247XG4gICAgICAgIHVwZGF0ZUFwaUtleSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2F0aW9uIGlzIG5vdyBcIiArIGxvY2F0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVBcGlLZXkgPSBmdW5jdGlvbigpe1xuICAgICAgICBhcGlLZXkgPSBhcGlLZXlTdGFydCArIGxvY2F0aW9uICsgYXBpS2V5RW5kO1xuICAgICAgICByZXR1cm4gYXBpS2V5O1xuICAgIH1cblxuICAgIGNvbnN0IHJlcXVlc3RBbmRQcm9jZXNzQXBpID0gYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpS2V5LCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgZGlyZWN0IEFQSSByZXNwb25zZVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlSlNPTk9iamVjdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgLy8gcmV0dXJuZWQgYXMgYSBKU09OIG9iamVjdFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGlzIEpTT04gb2JqZWN0IGZyb20gQVBJXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VKU09OT2JqZWN0KTtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZEpTT04gPSBwcm9jZXNzSlNPTihyZXNwb25zZUpTT05PYmplY3QpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGlzIGNsZWFuZWQgdXAgb2JqZWN0XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvY2Vzc2VkSlNPTik7XG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzc2VkSlNPTjtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGZXRjaCBlcnJvcjogJyArIGVycm9yKTtcbiAgICAgICAgICAgIGFsZXJ0KFwiVGhlcmUgd2FzIGFuIGlucHV0IGVycm9yLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5lZWQgdG8gZ2V0IFwicmVzb2x2ZWRBZGRyZXNzXCIsIFwidHpvZmZzZXRcIiBhbmQuLi5cbiAgICAvLyBGb3IgZWFjaCBcImRheXNcIiBmb3IgNyBkYXlzLCBuZWVkIHRvIGdldCBcImRhdGV0aW1lXCIsXCJ0ZW1wXCIsXCJ0ZW1wbWF4XCIsXCJ0ZW1wbWluXCIsXCJwcmVjaXBwcm9iXCIsXCJjb25kaXRpb25zXCJcbiAgICBjb25zdCBwcm9jZXNzSlNPTiA9IGZ1bmN0aW9uICh3ZWF0aGVySlNPTk9iamVjdCl7XG4gICAgICAgIGxldCByZXNvbHZlZEFkZHJlc3MgPSB3ZWF0aGVySlNPTk9iamVjdC5yZXNvbHZlZEFkZHJlc3M7XG4gICAgICAgIGxldCB0em9mZnNldCA9IHdlYXRoZXJKU09OT2JqZWN0LnR6b2Zmc2V0O1xuICAgICAgICBsZXQgZGF0ZUFycmF5ID0gW107IC8vIGFycmF5IG9mIG9iamVjdHMgd2l0aCB7ZGF5QW5kRGF0ZX1cbiAgICAgICAgbGV0IHRlbXBBcnJheSA9IFtdOyAvLyBhcnJheSBvZiBvYmplY3RzIHdpdGgge3RlbXAsdGVtcG1heCx0ZW1wbWlufVxuICAgICAgICBsZXQgcHJlY2lwQXJyYXkgPSBbXTsgLy8gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIHtwcmVjaXAsY29uZGl0aW9ufVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKyl7XG4gICAgICAgICAgICBsZXQgZGF5SlNPTiA9IHdlYXRoZXJKU09OT2JqZWN0LmRheXNbaV07XG4gICAgICAgICAgICBjb25zdCBkYXRlT2JqZWN0ID0gY29udmVydERhdGUoZGF5SlNPTi5kYXRldGltZSk7XG4gICAgICAgICAgICBkYXRlQXJyYXkucHVzaChkYXRlT2JqZWN0KTtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBPYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgdGVtcDogZGF5SlNPTi50ZW1wLFxuICAgICAgICAgICAgICAgIHRlbXBtaW46IGRheUpTT04udGVtcG1pbixcbiAgICAgICAgICAgICAgICB0ZW1wbWF4OiBkYXlKU09OLnRlbXBtYXgsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZW1wQXJyYXkucHVzaCh0ZW1wT2JqZWN0KTtcbiAgICAgICAgICAgIGNvbnN0IHByZWNpcE9iamVjdCA9IHtcbiAgICAgICAgICAgICAgICBwcmVjaXBwcm9iOiBkYXlKU09OLnByZWNpcHByb2IsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uczogZGF5SlNPTi5jb25kaXRpb25zLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJlY2lwQXJyYXkucHVzaChwcmVjaXBPYmplY3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7cmVzb2x2ZWRBZGRyZXNzLCB0em9mZnNldCwgZGF0ZUFycmF5LCB0ZW1wQXJyYXksIHByZWNpcEFycmF5fVxuICAgIH1cblxuICAgIC8vIGNvbnZlcnRzIFlZWVktTU0tREQgdG8gRGF5T2ZXZWVrIERheSAobGlrZSBXZWQgMTIpIHVzaW5nIERhdGUgb2JqZWN0c1xuICAgIGNvbnN0IGNvbnZlcnREYXRlID0gZnVuY3Rpb24oZGF0ZVRpbWUpe1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVRpbWUpO1xuICAgICAgICBsZXQgZGF0ZVN0cmluZyA9IGRhdGUudG9EYXRlU3RyaW5nKCk7IC8vIG91dHB1dHMgYXMgV2VkIEp1bCBERCBZWVlZXG4gICAgICAgIGNvbnN0IGRheU9mTW9udGggPSBkYXRlU3RyaW5nLnNsaWNlKDgsMTApO1xuICAgICAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlU3RyaW5nLnNsaWNlKDAsMyk7XG4gICAgICAgIGNvbnN0IGRheUFuZERhdGUgPSBkYXlPZldlZWsgKyBcIiBcIiArIGRheU9mTW9udGg7XG4gICAgICAgIHJldHVybiB7ZGF5QW5kRGF0ZX07XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0V2VhdGhlciA9IGZ1bmN0aW9uKGlucHV0TG9jYXRpb24pe1xuICAgICAgICBzZXRMb2NhdGlvbihpbnB1dExvY2F0aW9uKTtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkV2VhdGhlciA9IHJlcXVlc3RBbmRQcm9jZXNzQXBpKCk7XG4gICAgICAgIHJldHVybiBwcm9jZXNzZWRXZWF0aGVyO1xuICAgIH1cblxuICAgIHJldHVybiB7Z2V0V2VhdGhlciwgc2V0TG9jYXRpb259XG59KSgpO1xuXG5leHBvcnQge2FwaU1hbmFnZXJ9OyIsIi8vIGluaXRpYWxpemVzIHBhZ2Vcbi8vIHByb2Nlc3NlcyBldmVudCBsaXN0ZW5lcnMgZnJvbSByZW5kZXIuanMgYW5kIGNhbGxzIGFwaS5qcyBmdW5jdGlvbnNcblxuaW1wb3J0IHsgYXBpTWFuYWdlciB9IGZyb20gXCIuL2FwaS5qc1wiXG5pbXBvcnQgeyByZW5kZXJNYW5hZ2VyIH0gZnJvbSBcIi4vcmVuZGVyLmpzXCJcblxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmNvbnNvbGUubG9nKFwiKk1PRFVMRSBDSEVDSyogZnJvbSBpbmRleC5qc1wiKTtcblxuY29uc3QgcGFnZU1hbmFnZXIgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGRlZmF1bHRMb2NhdGlvbiA9IFwibG9uZG9uXCJcbiAgICBcbiAgICBjb25zdCBpbml0ID0gYXN5bmMgZnVuY3Rpb24oKXtcbiAgICAgICAgcmVuZGVyTWFuYWdlci5pbml0KCk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJJbmZvID0gYXdhaXQgYXBpTWFuYWdlci5nZXRXZWF0aGVyKGRlZmF1bHRMb2NhdGlvbik7XG4gICAgICAgIGlmICh3ZWF0aGVySW5mbyBpbnN0YW5jZW9mIEVycm9yICE9IHRydWUpe1xuICAgICAgICAgICAgcmVuZGVyTWFuYWdlci5lZGl0V2VhdGhlcih3ZWF0aGVySW5mbyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBuZXdGb3JlY2FzdCA9IGFzeW5jIGZ1bmN0aW9uKGlucHV0TG9jYXRpb24pe1xuICAgICAgICBjb25zdCB3ZWF0aGVySW5mbyA9IGF3YWl0IGFwaU1hbmFnZXIuZ2V0V2VhdGhlcihpbnB1dExvY2F0aW9uKTtcbiAgICAgICAgaWYgKHdlYXRoZXJJbmZvIGluc3RhbmNlb2YgRXJyb3IgIT0gdHJ1ZSl7XG4gICAgICAgICAgICByZW5kZXJNYW5hZ2VyLmVkaXRXZWF0aGVyKHdlYXRoZXJJbmZvKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7aW5pdCwgbmV3Rm9yZWNhc3R9O1xufSgpO1xuXG4vLyBURU1QT1JBUklMWSBhdHRhY2ggdG8gd2luZG93IG9iamVjdCB0byB0ZXN0IG5ld0ZvcmVjYXN0XG53aW5kb3cucGFnZU1hbmFnZXIgPSBwYWdlTWFuYWdlcjtcblxucGFnZU1hbmFnZXIuaW5pdCgpO1xuXG5leHBvcnQge3BhZ2VNYW5hZ2VyfTsiLCIvLyBtb2R1bGUgc3RyaWN0bHkgZm9yIGRpc3BsYXlpbmcgZWxlbWVudHNcbi8vIGFuZCBiaW5kaW5nIGV2ZW50IGxpc3RlbmVycyAocHJvY2Vzc2luZyBkb25lIGVsc2V3aGVyZSlcblxuLy8gXCJyZW5kZXJcIiBtZWFucyB0byBjcmVhdGUgZWxlbWVudCBhbmQgYWx3YXlzIHJldHVybnMgYW4gZWxlbWVudFxuLy8gXCJlZGl0XCIgbWVhbnMgdG8gY2hhbmdlIHRleHQgb3Igc29tZXRoaW5nIGVsc2UgYWJvdXQgZXhpc3RpbmcgZWxlbWVudFxuLy8gXCJhcHBlbmRcIiBtZWFucyB0byBhdHRhY2ggZWxlbWVudHMgdG8gZWFjaG90aGVyIHdpdGhvdXQgcmV0dXJuaW5nIGFuIGVsZW1lbnQgKGF2b2lkIHVzaW5nIGV4Y2VwdCBhdCBoaWdoZXN0IGxldmVsKVxuXG5pbXBvcnQgeyBwYWdlTWFuYWdlciB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmltcG9ydCBTbm93SWNvbiBmcm9tIFwiLi9pbWFnZXMvc25vdy5wbmdcIjtcbmltcG9ydCBDbG91ZEljb24gZnJvbSBcIi4vaW1hZ2VzL3BhcnRseS1jbG91ZHkucG5nXCI7XG5pbXBvcnQgT3ZlcmNhc3RJY29uIGZyb20gXCIuL2ltYWdlcy9jbG91ZHMucG5nXCI7XG5pbXBvcnQgU3VuSWNvbiBmcm9tIFwiLi9pbWFnZXMvc3VuLnBuZ1wiO1xuaW1wb3J0IFJhaW5JY29uIGZyb20gXCIuL2ltYWdlcy9yYWlueS5wbmdcIjtcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCIuL2ltYWdlcy9tYWduaWZ5aW5nLWdsYXNzLnBuZ1wiO1xuXG5jb25zb2xlLmxvZyhcIipNT0RVTEUgQ0hFQ0sqIGZyb20gcmVuZGVyLmpzXCIpO1xuXG5jb25zdCByZW5kZXJNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlckxvY2F0aW9uSW5wdXQoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJDb250ZW50Q29udGFpbmVycygpKTsgLy8gcmVuZGVyIHRoZSBib3hlcyB0byBwdXQgZm9yZWNhc3QgaW5mb1xuICAgIGJpbmRMb2NhdGlvbklucHV0KCk7XG4gIH07XG5cbiAgLy8gaGVscGVyIGZ1bmN0aW9ucyB0byBlYXNpbHkgY3JlYXRlIERPTSBlbGVtZW50c1xuXG4gIGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFnLCBjbGFzc0F0dHJpYnV0ZSwgaW5uZXJUZXh0KSB7XG4gICAgY29uc3QgY3JlYXRlZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgaWYgKGNsYXNzQXR0cmlidXRlICE9PSB1bmRlZmluZWQgJiYgY2xhc3NBdHRyaWJ1dGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNwbGl0Q2xhc3NTdHJpbmdzQXJyYXkgPSBjbGFzc0F0dHJpYnV0ZS5zcGxpdChcIiBcIik7XG4gICAgICBmb3IgKGxldCBzaW5nbGVDbGFzcyBvZiBzcGxpdENsYXNzU3RyaW5nc0FycmF5KSB7XG4gICAgICAgIGNyZWF0ZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoc2luZ2xlQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaW5uZXJUZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNyZWF0ZWRFbGVtZW50LmlubmVyVGV4dCA9IGlubmVyVGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZWRFbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUltYWdlID0gZnVuY3Rpb24gKHNyYywgY2xhc3NTdHJpbmcsIGFsdFRleHQpIHtcbiAgICBjb25zdCBpbWFnZSA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgY2xhc3NTdHJpbmcpO1xuICAgIGltYWdlLnNyYyA9IHNyYztcbiAgICBpbWFnZS5hbHQgPSBhbHRUZXh0O1xuICAgIGltYWdlLnN0eWxlLndpZHRoID0gXCIyOXB4XCI7XG4gICAgcmV0dXJuIGltYWdlO1xuICB9O1xuXG4gIC8vIGZ1bmN0aW9ucyBmb3IgcmVuZGVyaW5nIHRoZSBpbnB1dCBmb3IgbG9jYXRpb25cbiAgY29uc3QgcmVuZGVyTG9jYXRpb25JbnB1dCA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmb3JtIGNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBzZWFyY2hGb3JtID0gY3JlYXRlRWxlbWVudChcImZvcm1cIixcImlucHV0IGZvcm1cIik7XG4gICAgc2VhcmNoRm9ybS5tZXRob2QgPSBcIlBPU1RcIjtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEZvcm0pO1xuICAgIGNvbnN0IGlucHV0QmFyID0gcmVuZGVySW5wdXRCYXIoKTtcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSByZW5kZXJTZWFyY2hCdXR0b24oKTtcbiAgICBzZWFyY2hGb3JtLmFwcGVuZChpbnB1dEJhciwgc2VhcmNoQnV0dG9uKTtcbiAgICByZXR1cm4gZm9ybUNvbnRhaW5lcjtcbiAgfVxuXG4gIGNvbnN0IHJlbmRlcklucHV0QmFyID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBsb2NhdGlvbklucHV0ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFwibG9jYXRpb24gaW5wdXRcIik7XG4gICAgbG9jYXRpb25JbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgbG9jYXRpb25JbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgbG9jYXRpb24uLi5cIjtcbiAgICBsb2NhdGlvbklucHV0Lm5hbWUgPSBcImxvY2F0aW9uSW5wdXRcIjtcbiAgICByZXR1cm4gbG9jYXRpb25JbnB1dDtcbiAgfVxuICBcbiAgY29uc3QgcmVuZGVyU2VhcmNoQnV0dG9uID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBjcmVhdGVJbWFnZShTZWFyY2hJY29uLFwibG9jYXRpb24gc3VibWl0XCIsIFwic3VibWl0IGJ1dHRvblwiKTtcbiAgICByZXR1cm4gc3VibWl0QnV0dG9uO1xuICB9XG5cbiAgLy8gYmluZCBldmVudCBsaXN0ZW5lciB0byB0aGUgc2VhcmNoIGJ1dHRvblxuICBjb25zdCBiaW5kTG9jYXRpb25JbnB1dCA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgbG9jYXRpb25Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0uaW5wdXRcIik7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gbG9jYXRpb25Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbWcuc3VibWl0XCIpO1xuICAgIGNvbnN0IGxvY2F0aW9uSW5wdXQgPSBsb2NhdGlvbkZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0LmxvY2F0aW9uXCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHBhZ2VNYW5hZ2VyLm5ld0ZvcmVjYXN0KGxvY2F0aW9uSW5wdXQudmFsdWUpO1xuICAgICAgbG9jYXRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgfSk7XG4gIH1cblxuICAvLyBmdW5jdGlvbnMgZm9yIHdlYXRoZXIgaW5mbyByZW5kZXJpbmdcbiAgY29uc3QgcmVuZGVyQ29udGVudENvbnRhaW5lcnMgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiY29udGVudCBjb250YWluZXJcIik7XG4gICAgY29uc3QgbG9jYXRpb25Db250YWluZXIgPSByZW5kZXJMb2NhdGlvblRpdGxlQ29udGFpbmVyKCk7IC8vIHJlbmRlciBjb250YWluZXIgdG8gcHV0IGxvY2F0aW9uIHRpdGxlXG4gICAgY29uc3QgdG9kYXlXZWF0aGVyQ29udGFpbmVyID0gcmVuZGVyVG9kYXlXZWF0aGVyQ29udGFpbmVyKCk7IC8vIHJlbmRlcnMgbG90cyBpbmZvIG9uIGN1cnJlbnQgd2VhdGhlciArIGxvY2FsIHRpbWVcbiAgICBjb25zdCBmb3JlY2FzdEJveGVzID0gcmVuZGVyRm9yZWNhc3RCb3hlcygpOyAvLyByZW5kZXIgdGhlIDcgYm94ZXMgKHdpdGggZW1wdHkgY29udGVudCkgZm9yIGZvcmVjYXN0XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmQobG9jYXRpb25Db250YWluZXIsdG9kYXlXZWF0aGVyQ29udGFpbmVyLCBmb3JlY2FzdEJveGVzKTtcbiAgICByZXR1cm4gY29udGVudENvbnRhaW5lcjtcbiAgfVxuXG4gIGxldCBsb2NhdGlvblRpdGxlOyAvLyBwdWJsaWMgdmFyaWFibGVzIHRvIG1pbmltaXplIGRpcmVjdCBET00gYWNjZXNzXG4gIGNvbnN0IHJlbmRlckxvY2F0aW9uVGl0bGVDb250YWluZXIgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGxvY2F0aW9uVGl0bGVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibG9jYXRpb24gdGl0bGUgY29udGFpbmVyXCIpO1xuICAgIGxvY2F0aW9uVGl0bGUgPSBjcmVhdGVFbGVtZW50KFwiaDJcIixcImxvY2F0aW9uIHRpdGxlXCIsXCJkZWZhdWx0IGxvY2F0aW9uXCIpO1xuICAgIGxvY2F0aW9uVGl0bGVDb250YWluZXIuYXBwZW5kKGxvY2F0aW9uVGl0bGUpO1xuICAgIHJldHVybiBsb2NhdGlvblRpdGxlQ29udGFpbmVyO1xuICB9XG5cbiAgbGV0IHRvZGF5V2VhdGhlckNvbnRhaW5lcjtcbiAgY29uc3QgcmVuZGVyVG9kYXlXZWF0aGVyQ29udGFpbmVyID0gZnVuY3Rpb24oKXtcbiAgICB0b2RheVdlYXRoZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidG9kYXkgd2VhdGhlciBjb250YWluZXJcIik7XG4gICAgY29uc3QgdG9kYXlXZWF0aGVyQ29uZGl0aW9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImNvbmRpdGlvbiBjb250YWluZXJcIik7XG4gICAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGNyZWF0ZUltYWdlKFwiXCIsIFwiY29uZGl0aW9uIGljb25cIik7XG4gICAgY29uc3QgY29uZGl0aW9uVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiY29uZGl0aW9uIHRleHRcIik7XG4gICAgdG9kYXlXZWF0aGVyQ29uZGl0aW9uQ29udGFpbmVyLmFwcGVuZChjb25kaXRpb25JY29uLCBjb25kaXRpb25UZXh0KTtcbiAgICBjb25zdCB0b2RheVdlYXRoZXJUZW1wQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRlbXAgY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRlbXBUZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIixcInRlbXAgdGV4dFwiKTtcbiAgICBjb25zdCB0ZW1wbWF4VGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJ0ZW1wbWF4IHRleHRcIik7XG4gICAgY29uc3QgdGVtcG1pblRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLFwidGVtcG1pbiB0ZXh0XCIpO1xuICAgIHRvZGF5V2VhdGhlclRlbXBDb250YWluZXIuYXBwZW5kKHRlbXBUZXh0LCB0ZW1wbWF4VGV4dCwgdGVtcG1pblRleHQpO1xuICAgIGNvbnN0IHRvZGF5V2VhdGhlclRpbWVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidGltZSBjb250YWluZXJcIik7XG4gICAgY29uc3QgZGF5VGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiZGF5IHRleHRcIik7XG4gICAgY29uc3QgdGltZVRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLFwidGltZSB0ZXh0XCIpO1xuICAgIHRvZGF5V2VhdGhlclRpbWVDb250YWluZXIuYXBwZW5kKGRheVRleHQsIHRpbWVUZXh0KTtcbiAgICBjb25zdCB0b2RheVdlYXRoZXJQcmVjaXBwcm9iQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByZWNpcCBjb250YWluZXJcIik7XG4gICAgY29uc3QgcHJlY2lwVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwicHJlY2lwIHRleHRcIik7XG4gICAgdG9kYXlXZWF0aGVyUHJlY2lwcHJvYkNvbnRhaW5lci5hcHBlbmQocHJlY2lwVGV4dCk7XG4gICAgdG9kYXlXZWF0aGVyQ29udGFpbmVyLmFwcGVuZCh0b2RheVdlYXRoZXJDb25kaXRpb25Db250YWluZXIsdG9kYXlXZWF0aGVyVGVtcENvbnRhaW5lcix0b2RheVdlYXRoZXJUaW1lQ29udGFpbmVyLHRvZGF5V2VhdGhlclByZWNpcHByb2JDb250YWluZXIpO1xuICAgIHJldHVybiB0b2RheVdlYXRoZXJDb250YWluZXI7XG4gIH1cblxuICBsZXQgZm9yZWNhc3RCb3hlcyA9IFtdO1xuICBjb25zdCByZW5kZXJGb3JlY2FzdEJveGVzID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBmb3JlY2FzdEJveENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmb3JlY2FzdCBib3ggY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGZvcmVjYXN0Qm94ID0gcmVuZGVyRm9yZWNhc3RCb3goKTtcbiAgICBmb3JlY2FzdEJveGVzWzBdID0gZm9yZWNhc3RCb3g7XG4gICAgZm9yZWNhc3RCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3RCb3gpO1xuICAgIGZvciAobGV0IGk9MTsgaSA8NzsgaSsrKXtcbiAgICAgIGNvbnN0IGZvcmVjYXN0Qm94Q2xvbmUgPSBmb3JlY2FzdEJveC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBmb3JlY2FzdEJveGVzW2ldID0gZm9yZWNhc3RCb3hDbG9uZTtcbiAgICAgIGZvcmVjYXN0Qm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcmVjYXN0Qm94Q2xvbmUpO1xuICAgIH1cbiAgICByZXR1cm4gZm9yZWNhc3RCb3hDb250YWluZXI7XG4gIH1cblxuICBjb25zdCByZW5kZXJGb3JlY2FzdEJveCA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZm9yZWNhc3RCb3ggPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJmb3JlY2FzdCBib3hcIik7XG4gICAgY29uc3QgY29udGVudEJveGVzID0gcmVuZGVyRm9yZWNhc3RDb250ZW50Qm94ZXMoKTsgLy8gdGhpcyB3aWxsIGNyZWF0ZSBjb250YWluZXJzIGZvciBpbmZvIG9mIHRlbXAsIG1pbiwgbWF4LCBwcmVjaXAsIGV0Y1xuICAgIGZvcmVjYXN0Qm94LmFwcGVuZCguLi5PYmplY3QudmFsdWVzKGNvbnRlbnRCb3hlcykpOyAvLyBhcHBlbmRzIGVhY2ggbm9kZSB3aXRoaW4gY29udGVudEJveGVzT2JqZWN0XG4gICAgcmV0dXJuIGZvcmVjYXN0Qm94O1xuICB9XG5cbiAgLy8gY3JlYXRlcyBjb250YWluZXJzIG9yIEhUTUwgZWxlbWVudHMgd2l0aGluIHRoZSBmb3JlY2FzdCBib3hlc1xuICAvLyAuLi5mb3IgZGF5T2ZXZWVrLCBtb250aERheSwgdGVtcCwgdGVtcG1pbiwgdGVtcG1heCwgY29uZGl0aW9ucywgcHJlY2lwcHJvYlxuICBjb25zdCByZW5kZXJGb3JlY2FzdENvbnRlbnRCb3hlcyA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgdGltZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0aW1lIGNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBkYXlBbmREYXRlVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiZGF5QW5kRGF0ZSB0ZXh0XCIpO1xuICAgIHRpbWVDb250YWluZXIuYXBwZW5kKGRheUFuZERhdGVUZXh0KTtcbiAgICBjb25zdCB0ZW1wQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRlbXAgY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRlbXBUZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIixcInRlbXAgdGV4dFwiKTtcbiAgICBjb25zdCB0ZW1wbWlubWF4VGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJ0ZW1wbWlubWF4IHRleHRcIik7XG4gICAgdGVtcENvbnRhaW5lci5hcHBlbmQodGVtcFRleHQsIHRlbXBtaW5tYXhUZXh0KTtcbiAgICBjb25zdCBjb25kaXRpb25zQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImNvbmRpdGlvbnMgY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGNvbmRpdGlvbnNJbWFnZSA9IGNyZWF0ZUltYWdlKFwiXCIsXCJjb25kaXRpb25zIGltYWdlXCIpOyAvLyBtdXN0IGNvbnZlcnQgY29uZGl0aW9ucyB0ZXh0IHRvIGFuIGltYWdlIHNyYyBpbiBlZGl0aW5nIGxhdGVyXG4gICAgY29uc3QgcHJlY2lwcHJvYlRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInByZWNpcHByb2IgdGV4dFwiKTtcbiAgICBjb25kaXRpb25zQ29udGFpbmVyLmFwcGVuZChjb25kaXRpb25zSW1hZ2UsIHByZWNpcHByb2JUZXh0KTtcbiAgICByZXR1cm4ge3RpbWVDb250YWluZXIsIHRlbXBDb250YWluZXIsIGNvbmRpdGlvbnNDb250YWluZXJ9O1xuICB9XG5cbiAgLy8gRXZlcnl0aGluZyBiZWxvdyB0aGlzIGlzIG1lYW50IHRvIGVkaXQgZXhpc3RpbmcgZWxlbWVudHMgLy9cblxuICAvLyBlZGl0cyB0ZXh0IGNvbnRlbnQgdG8gc2hvdyB3ZWF0aGVyIGluZm9ybWF0aW9uXG4gIC8vIG9yZ2FuaXplcyB3ZWF0aGVySW5mbyB0byBzZW5kIG9ubHkgcmVsZXZhbnQgaW5mbyB0byBlYWNoIGZ1bmN0aW9uXG4gIGNvbnN0IGVkaXRXZWF0aGVyID0gZnVuY3Rpb24od2VhdGhlckluZm8pe1xuICAgIGVkaXRMb2NhdGlvblRpdGxlKHdlYXRoZXJJbmZvLnJlc29sdmVkQWRkcmVzcyk7XG4gICAgZWRpdFRvZGF5V2VhdGhlcih3ZWF0aGVySW5mby50em9mZnNldCwgd2VhdGhlckluZm8uZGF0ZUFycmF5WzBdLHdlYXRoZXJJbmZvLnRlbXBBcnJheVswXSwgd2VhdGhlckluZm8ucHJlY2lwQXJyYXlbMF0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpPDc7IGkrKyl7XG4gICAgICBlZGl0Rm9yZWNhc3RCb3goaSwgd2VhdGhlckluZm8uZGF0ZUFycmF5W2ldLCB3ZWF0aGVySW5mby50ZW1wQXJyYXlbaV0sIHdlYXRoZXJJbmZvLnByZWNpcEFycmF5W2ldKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJUaGlzIGlzIHRoZSB3ZWF0aGVyIHRoYXQgcmVuZGVyLmpzIHNlZXNcIik7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckluZm8pO1xuICB9XG5cbiAgY29uc3QgZWRpdExvY2F0aW9uVGl0bGUgPSBmdW5jdGlvbiAocmVzb2x2ZWRBZGRyZXNzKXtcbiAgICBsb2NhdGlvblRpdGxlLnRleHRDb250ZW50ID0gcmVzb2x2ZWRBZGRyZXNzO1xuICB9XG5cbiAgY29uc3QgREVHUkVFX0ZfU1lNQk9MID0gXCLCsEZcIjtcbiAgY29uc3QgREVHUkVFX1NZTUJPTCA9IFwiwrBcIjtcbiAgY29uc3QgZWRpdFRvZGF5V2VhdGhlciA9IGZ1bmN0aW9uKHR6b2Zmc2V0LCBkYXRlT2JqZWN0LCB0ZW1wT2JqZWN0LCBwcmVjaXBPYmplY3Qpe1xuICAgIGNvbnN0IGNvbmRpdGlvblRlbXBUaW1lUHJlY2lwQ29udGFpbmVycyA9IHRvZGF5V2VhdGhlckNvbnRhaW5lci5jaGlsZHJlbjtcbiAgICBlZGl0Q2xhc3NDaGlsZEltYWdlKGNvbmRpdGlvblRlbXBUaW1lUHJlY2lwQ29udGFpbmVyc1swXSwgXCJpY29uXCIsIHByZWNpcE9iamVjdC5jb25kaXRpb25zKTtcbiAgICBlZGl0Q2xhc3NDaGlsZChjb25kaXRpb25UZW1wVGltZVByZWNpcENvbnRhaW5lcnNbMF0sIFwidGV4dFwiLCBwcmVjaXBPYmplY3QuY29uZGl0aW9ucyk7XG4gICAgLy8gZ29lcyB0aHJvdWdoIGVhY2gga2V5LCB2YWx1ZSBwYWlyIGluIHRlbXBPYmplY3QgYW5kIHVwZGF0ZXMgdGV4dCBvbiBub2Rlc1xuICAgIGVkaXRDbGFzc0NoaWxkKGNvbmRpdGlvblRlbXBUaW1lUHJlY2lwQ29udGFpbmVyc1sxXSwgXCJ0ZW1wXCIsIGAke3RlbXBPYmplY3QudGVtcH0ke0RFR1JFRV9GX1NZTUJPTH1gKTtcbiAgICBlZGl0Q2xhc3NDaGlsZChjb25kaXRpb25UZW1wVGltZVByZWNpcENvbnRhaW5lcnNbMV0sIFwidGVtcG1heFwiLCBgTWF4OiAke3RlbXBPYmplY3QudGVtcG1heH0ke0RFR1JFRV9GX1NZTUJPTH1gKTtcbiAgICBlZGl0Q2xhc3NDaGlsZChjb25kaXRpb25UZW1wVGltZVByZWNpcENvbnRhaW5lcnNbMV0sIFwidGVtcG1pblwiLCBgTWluOiAke3RlbXBPYmplY3QudGVtcG1pbn0ke0RFR1JFRV9GX1NZTUJPTH1gKTtcbiAgICBlZGl0Q2xhc3NDaGlsZChjb25kaXRpb25UZW1wVGltZVByZWNpcENvbnRhaW5lcnNbMl0sIFwiZGF5XCIsIGRhdGVPYmplY3QuZGF5QW5kRGF0ZSk7XG4gICAgZWRpdENsYXNzQ2hpbGQoY29uZGl0aW9uVGVtcFRpbWVQcmVjaXBDb250YWluZXJzWzJdLCBcInRpbWVcIiwgY2FsY3VsYXRlTG9jYWxUaW1lKHR6b2Zmc2V0KSk7XG4gICAgZWRpdENsYXNzQ2hpbGQoY29uZGl0aW9uVGVtcFRpbWVQcmVjaXBDb250YWluZXJzWzNdLCBcInByZWNpcFwiLCBgUHJlY2lwaXRhdGlvbjogJHtwcmVjaXBPYmplY3QucHJlY2lwcHJvYn0lYCk7XG4gIH1cblxuICAvLyBtYW51YWxseSBjYWxjdWxhdGUgdGhlIGxvY2FsIHRpbWUgYXQgdGhlIGxvY2F0aW9uIHVzaW5nIFVUQyB0aW1lICsvLSB0em9mZnNldFxuICAvLyByZXR1cm5zIHN0cmluZyB3aXRoIGZvcm0gSEg6TU0gQU0gKG9yIFBNKVxuICBjb25zdCBjYWxjdWxhdGVMb2NhbFRpbWUgPSBmdW5jdGlvbih0em9mZnNldCl7XG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIC8vIHJldHVybnMgbG9jYWwgaG91ciBmcm9tIDAtMjNcbiAgICBjb25zdCBsb2NhbEhvdXJVbmZvcm1hdHRlZCA9IChjdXJyZW50RGF0ZS5nZXRVVENIb3VycygpK3R6b2Zmc2V0KSUyNDtcbiAgICBsZXQgQU1QTVN0cmluZztcbiAgICBpZiAoTWF0aC50cnVuYyhsb2NhbEhvdXJVbmZvcm1hdHRlZC8xMikgPT0gMCl7XG4gICAgICBBTVBNU3RyaW5nID0gXCJBTVwiO1xuICAgIH0gZWxzZXtcbiAgICAgIEFNUE1TdHJpbmcgPSBcIlBNXCI7XG4gICAgfVxuICAgIGxldCBsb2NhbEhvdXIgPSAobG9jYWxIb3VyVW5mb3JtYXR0ZWQpJTEyOyAvLyBjb252ZXJ0IDAtMjMgdG8gMC0xMVxuICAgIGlmIChsb2NhbEhvdXIgPT0gMCl7XG4gICAgICBsb2NhbEhvdXIgPSAxMjtcbiAgICB9XG4gICAgY29uc3QgbG9jYWxNaW51dGVzID0gY3VycmVudERhdGUudG9UaW1lU3RyaW5nKCkuc2xpY2UoMiw1KTsgLy8gY29udGFpbnMgXCI6TU1cIlxuICAgIGNvbnN0IGxvY2FsVGltZVN0cmluZyA9IGAke2xvY2FsSG91cn0ke2xvY2FsTWludXRlc30gJHtBTVBNU3RyaW5nfWA7XG4gICAgcmV0dXJuIGxvY2FsVGltZVN0cmluZztcbiAgfVxuXG4gIC8vIGVkaXRzIGluZGl2aWR1YWwgYm94IGFsbCBhdCBvbmNlIHRvIHJlZHVjZSBhbW91bnQgb2YgcmVmZXJlbmNlcyB0byBub2Rlc1xuICAvLyBQYXJhbWV0ZXJzOiBpbmRleCwge21vbnRoRGF5LCBkYXlPZldlZWt9LCB7dGVtcCwgdGVtcG1pbiwgdGVtcG1heH0sIHtwcmVjaXBwcm9iLCBjb25kaXRpb25zfVxuICAvLyB0aW1lVGVtcENvbmRpdGlvbnNDb250YWluZXJzIGlzIGp1c3QgY2hpbGQgbm9kZXMgb2YgdGhlIGZvcmVjYXN0IGJveFxuICBjb25zdCBlZGl0Rm9yZWNhc3RCb3ggPSBmdW5jdGlvbihpbmRleCwgZGF0ZU9iamVjdCwgdGVtcE9iamVjdCwgcHJlY2lwT2JqZWN0KXtcbiAgICBjb25zdCB0aW1lVGVtcENvbmRpdGlvbnNDb250YWluZXJzID0gZm9yZWNhc3RCb3hlc1tpbmRleF0uY2hpbGRyZW47XG4gICAgLy8gZ29lcyB0aHJvdWdoIGVhY2gga2V5LCB2YWx1ZSBwYWlyIGluIGRhdGVPYmplY3QgYW5kIHVwZGF0ZXMgdGV4dCBvbiBub2Rlc1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGVPYmplY3QpKXtcbiAgICAgIGVkaXRDbGFzc0NoaWxkKHRpbWVUZW1wQ29uZGl0aW9uc0NvbnRhaW5lcnNbMF0sIGtleSwgdmFsdWUpO1xuICAgIH1cbiAgICBlZGl0Q2xhc3NDaGlsZCh0aW1lVGVtcENvbmRpdGlvbnNDb250YWluZXJzWzFdLCBcInRlbXBcIiwgYCR7dGVtcE9iamVjdC50ZW1wfSR7REVHUkVFX1NZTUJPTH1gKTtcbiAgICBlZGl0Q2xhc3NDaGlsZCh0aW1lVGVtcENvbmRpdGlvbnNDb250YWluZXJzWzFdLCBcInRlbXBtaW5tYXhcIiwgYCR7dGVtcE9iamVjdC50ZW1wbWlufSR7REVHUkVFX1NZTUJPTH0tJHt0ZW1wT2JqZWN0LnRlbXBtYXh9JHtERUdSRUVfU1lNQk9MfWApO1xuICAgIC8vIHJlcGVhdGVkIGZvciBvdGhlciBvYmplY3RzLCBiZWNhdXNlIG5lc3RlZCBsb29wcyBjb25mdXNpbmdcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcmVjaXBPYmplY3QpKXtcbiAgICAgIGlmIChrZXkgPT0gXCJwcmVjaXBwcm9iXCIpe1xuICAgICAgICBlZGl0Q2xhc3NDaGlsZCh0aW1lVGVtcENvbmRpdGlvbnNDb250YWluZXJzWzJdLCBrZXksIGAke3ZhbHVlfSVgKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09IFwiY29uZGl0aW9uc1wiKXtcbiAgICAgICAgZWRpdENsYXNzQ2hpbGRJbWFnZSh0aW1lVGVtcENvbmRpdGlvbnNDb250YWluZXJzWzJdLCBrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGhlbHBlciBmdW5jdGlvbiB0aGF0IGVkaXRzIHRoZSB0ZXh0IG9mIGEgY2hpbGQgbm9kZSBnaXZlbiB0aGUgcGFyZW50IG5vZGUgYW5kIHRoZSBjaGlsZCBub2RlJ3MgY2xhc3NcbiAgLy8gd2hpY2ggY2hpbGQgbm9kZSBkZXRlcm1pbmVkIGJ5IGNsYXNzIGlkZW50aWZpZXJcbiAgY29uc3QgZWRpdENsYXNzQ2hpbGQgPSBmdW5jdGlvbihwYXJlbnROb2RlLCBjbGFzc0lkZW50aWZpZXIsIG5ld1RleHQpe1xuICAgIGNvbnN0IG5vZGVUb0NoYW5nZSA9IHBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NJZGVudGlmaWVyfWApO1xuICAgIG5vZGVUb0NoYW5nZS50ZXh0Q29udGVudCA9IG5ld1RleHQ7XG4gIH1cblxuICBjb25zdCBlZGl0Q2xhc3NDaGlsZEltYWdlID0gZnVuY3Rpb24ocGFyZW50Tm9kZSwgY2xhc3NJZGVudGlmaWVyLCBuZXdDb25kaXRpb25zKXtcbiAgICBjb25zdCBpbWFnZVNyYyA9IGNvbnZlcnRDb25kaXRpb25zVG9TcmMobmV3Q29uZGl0aW9ucyk7XG4gICAgY29uc3Qgbm9kZVRvQ2hhbmdlID0gcGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc0lkZW50aWZpZXJ9YCk7XG4gICAgbm9kZVRvQ2hhbmdlLnNyYyA9IGltYWdlU3JjO1xuICB9XG5cbiAgY29uc3QgY29udmVydENvbmRpdGlvbnNUb1NyYyA9IGZ1bmN0aW9uIChjb25kaXRpb25zU3RyaW5nKXtcbiAgICBpZiAoY29uZGl0aW9uc1N0cmluZy5pbmNsdWRlcyhcIkNsZWFyXCIpKXtcbiAgICAgIHJldHVybiBTdW5JY29uO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uc1N0cmluZy5pbmNsdWRlcyhcIlNub3dcIikpe1xuICAgICAgcmV0dXJuIFNub3dJY29uO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uc1N0cmluZy5pbmNsdWRlcyhcIlJhaW5cIikpe1xuICAgICAgcmV0dXJuIFJhaW5JY29uO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uc1N0cmluZy5pbmNsdWRlcyhcImNsb3VkeVwiKSl7XG4gICAgICByZXR1cm4gQ2xvdWRJY29uO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uc1N0cmluZy5pbmNsdWRlcyhcIk92ZXJjYXN0XCIpKXtcbiAgICAgIHJldHVybiBPdmVyY2FzdEljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYENvbmRpdGlvbiBpcyAke2NvbmRpdGlvbnNTdHJpbmd9IGFuZCBkb2VzIG5vdCBmaXQgYW55IGltYWdlLmApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGluaXQsIGVkaXRXZWF0aGVyIH07XG59KSgpO1xuXG5leHBvcnQgeyByZW5kZXJNYW5hZ2VyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9