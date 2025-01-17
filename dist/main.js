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
    --button-color: pink;
    --content-background-color: #FFFED3;
    --border-color: black;
    box-sizing: border-box;
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
    align-items: center;
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
    grid-template-columns: min-content 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    background-color: var(--base-background-color);
    border-radius: 5px;
    text-align: center;
    padding: 20px;

    .condition{
        grid-area: 1 / 1 / 3 / 2;
        align-self: center;

        img{
            width: 80px !important;
            height: auto;
        }
    }

    .temp{
        grid-area: 1 / 2 / 2 / 3;
    }

    .time{
        grid-area: 2 / 2 / 3 / 3;
        align-self: center;
    }

    .precip {
        grid-area: 1 / 3 / 3 / 4;
        align-self:center;
    }
}

/* style forecast */
.forecast.box.container{
    display:flex;
    justify-content: space-between;
    border: 2px var(--border-color);
    gap: 2px;
    text-align: center;

    .forecast.box{
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        background-color: var(--content-background-color);
        padding: 2px;
        border-radius: 3px;

        p.dayAndDate{
            font-size: 20px;
            font-weight: bold;
        }

        p.temp{
            font-size: 25px;
        }
    }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":";AACA;IACI,oCAAoC;IACpC,gCAAgC;IAChC,oBAAoB;IACpB,mCAAmC;IACnC,qBAAqB;IACrB,sBAAsB;AAC1B;;AAEA;;;;IAII,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kDAAkD;AACtD;;AAEA,8CAA8C;AAC9C;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA,oBAAoB;AACpB;IACI,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;;IAElB;QACI,gBAAgB;QAChB,iBAAiB;QACjB,kBAAkB;QAClB,YAAY;IAChB;IACA;QACI,kBAAkB;QAClB,2BAA2B;QAC3B,sBAAsB;QACtB,YAAY;QACZ,UAAU;QACV,MAAM;IACV;AACJ;;AAEA,+BAA+B;AAC/B;IACI,aAAa;IACb,0CAA0C;IAC1C,2BAA2B;IAC3B,qBAAqB;IACrB,8CAA8C;IAC9C,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;;IAEb;QACI,wBAAwB;QACxB,kBAAkB;;QAElB;YACI,sBAAsB;YACtB,YAAY;QAChB;IACJ;;IAEA;QACI,wBAAwB;IAC5B;;IAEA;QACI,wBAAwB;QACxB,kBAAkB;IACtB;;IAEA;QACI,wBAAwB;QACxB,iBAAiB;IACrB;AACJ;;AAEA,mBAAmB;AACnB;IACI,YAAY;IACZ,8BAA8B;IAC9B,+BAA+B;IAC/B,QAAQ;IACR,kBAAkB;;IAElB;QACI,aAAa;QACb,qBAAqB;QACrB,uBAAuB;QACvB,mBAAmB;QACnB,iDAAiD;QACjD,YAAY;QACZ,kBAAkB;;QAElB;YACI,eAAe;YACf,iBAAiB;QACrB;;QAEA;YACI,eAAe;QACnB;IACJ;AACJ","sourcesContent":["\n* {\n    --document-background-color: #B1AFFF;\n    --base-background-color: #FFE9D0;\n    --button-color: pink;\n    --content-background-color: #FFFED3;\n    --border-color: black;\n    box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\np {\n    margin: 0;\n    padding: 0;\n}\n\n:root{\n    background-color: var(--document-background-color);\n}\n\n/* section to organize main sections of page */\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n/* style form area */\n.form.container > form{\n    position: relative;\n    height: min-content;\n    width: min-content;\n\n    input{\n        position: static;\n        padding: 5px 10px;\n        border-radius: 5px;\n        border: none;\n    }\n    img.submit{\n        position: absolute;\n        max-height: 100% !important;\n        width: auto !important;\n        padding: 2px;\n        right: 3px;\n        top: 0;\n    }\n}\n\n/* style current weather area */\n.today.weather.container{\n    display: grid;\n    grid-template-columns: min-content 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    justify-items: center;\n    background-color: var(--base-background-color);\n    border-radius: 5px;\n    text-align: center;\n    padding: 20px;\n\n    .condition{\n        grid-area: 1 / 1 / 3 / 2;\n        align-self: center;\n\n        img{\n            width: 80px !important;\n            height: auto;\n        }\n    }\n\n    .temp{\n        grid-area: 1 / 2 / 2 / 3;\n    }\n\n    .time{\n        grid-area: 2 / 2 / 3 / 3;\n        align-self: center;\n    }\n\n    .precip {\n        grid-area: 1 / 3 / 3 / 4;\n        align-self:center;\n    }\n}\n\n/* style forecast */\n.forecast.box.container{\n    display:flex;\n    justify-content: space-between;\n    border: 2px var(--border-color);\n    gap: 2px;\n    text-align: center;\n\n    .forecast.box{\n        display: flex;\n        flex-direction:column;\n        justify-content: center;\n        align-items: center;\n        background-color: var(--content-background-color);\n        padding: 2px;\n        border-radius: 3px;\n\n        p.dayAndDate{\n            font-size: 20px;\n            font-weight: bold;\n        }\n\n        p.temp{\n            font-size: 25px;\n        }\n    }\n}"],"sourceRoot":""}]);
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
        _render_js__WEBPACK_IMPORTED_MODULE_1__.renderManager.editWeather(weatherInfo);
    }

    const newForecast = async function(inputLocation){
        const weatherInfo = await _api_js__WEBPACK_IMPORTED_MODULE_0__.apiManager.getWeather(inputLocation);
        _render_js__WEBPACK_IMPORTED_MODULE_1__.renderManager.editWeather(weatherInfo);
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
    //renderHeader();
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
  const DEGREE_C_SYMBOL = "°C";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxnQkFBZ0I7QUFDdEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNELGdCQUFnQjtBQUN0RTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLDRDQUFPO0FBQ3BCLE1BQU07QUFDTixhQUFhLDZDQUFRO0FBQ3JCLE1BQU07QUFDTixhQUFhLDhDQUFRO0FBQ3JCLE1BQU07QUFDTixhQUFhLHNEQUFTO0FBQ3RCLE1BQU07QUFDTixhQUFhLCtDQUFZO0FBQ3pCLE1BQU07QUFDTixvQ0FBb0Msa0JBQWtCO0FBQ3REO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuUnpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG4qIHtcbiAgICAtLWRvY3VtZW50LWJhY2tncm91bmQtY29sb3I6ICNCMUFGRkY7XG4gICAgLS1iYXNlLWJhY2tncm91bmQtY29sb3I6ICNGRkU5RDA7XG4gICAgLS1idXR0b24tY29sb3I6IHBpbms7XG4gICAgLS1jb250ZW50LWJhY2tncm91bmQtY29sb3I6ICNGRkZFRDM7XG4gICAgLS1ib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmgxLFxuaDIsXG5oMyxcbnAge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG46cm9vdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kb2N1bWVudC1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLyogc2VjdGlvbiB0byBvcmdhbml6ZSBtYWluIHNlY3Rpb25zIG9mIHBhZ2UgKi9cbmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBzdHlsZSBmb3JtIGFyZWEgKi9cbi5mb3JtLmNvbnRhaW5lciA+IGZvcm17XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuXG4gICAgaW5wdXR7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gICAgaW1nLnN1Ym1pdHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgcmlnaHQ6IDNweDtcbiAgICAgICAgdG9wOiAwO1xuICAgIH1cbn1cblxuLyogc3R5bGUgY3VycmVudCB3ZWF0aGVyIGFyZWEgKi9cbi50b2RheS53ZWF0aGVyLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgLmNvbmRpdGlvbntcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG5cbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50ZW1we1xuICAgICAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XG4gICAgfVxuXG4gICAgLnRpbWV7XG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cblxuICAgIC5wcmVjaXAge1xuICAgICAgICBncmlkLWFyZWE6IDEgLyAzIC8gMyAvIDQ7XG4gICAgICAgIGFsaWduLXNlbGY6Y2VudGVyO1xuICAgIH1cbn1cblxuLyogc3R5bGUgZm9yZWNhc3QgKi9cbi5mb3JlY2FzdC5ib3guY29udGFpbmVye1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyOiAycHggdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBnYXA6IDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAuZm9yZWNhc3QuYm94e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcblxuICAgICAgICBwLmRheUFuZERhdGV7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAudGVtcHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgfVxuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMsb0JBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOztBQUVBOzs7O0lBSUksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtEQUFrRDtBQUN0RDs7QUFFQSw4Q0FBOEM7QUFDOUM7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7O0lBRWxCO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLDJCQUEyQjtRQUMzQixzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLFVBQVU7UUFDVixNQUFNO0lBQ1Y7QUFDSjs7QUFFQSwrQkFBK0I7QUFDL0I7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsOENBQThDO0lBQzlDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTs7SUFFYjtRQUNJLHdCQUF3QjtRQUN4QixrQkFBa0I7O1FBRWxCO1lBQ0ksc0JBQXNCO1lBQ3RCLFlBQVk7UUFDaEI7SUFDSjs7SUFFQTtRQUNJLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLHdCQUF3QjtRQUN4QixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSx3QkFBd0I7UUFDeEIsaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsUUFBUTtJQUNSLGtCQUFrQjs7SUFFbEI7UUFDSSxhQUFhO1FBQ2IscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsaURBQWlEO1FBQ2pELFlBQVk7UUFDWixrQkFBa0I7O1FBRWxCO1lBQ0ksZUFBZTtZQUNmLGlCQUFpQjtRQUNyQjs7UUFFQTtZQUNJLGVBQWU7UUFDbkI7SUFDSjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbioge1xcbiAgICAtLWRvY3VtZW50LWJhY2tncm91bmQtY29sb3I6ICNCMUFGRkY7XFxuICAgIC0tYmFzZS1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZFOUQwO1xcbiAgICAtLWJ1dHRvbi1jb2xvcjogcGluaztcXG4gICAgLS1jb250ZW50LWJhY2tncm91bmQtY29sb3I6ICNGRkZFRDM7XFxuICAgIC0tYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxucCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRvY3VtZW50LWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4vKiBzZWN0aW9uIHRvIG9yZ2FuaXplIG1haW4gc2VjdGlvbnMgb2YgcGFnZSAqL1xcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogc3R5bGUgZm9ybSBhcmVhICovXFxuLmZvcm0uY29udGFpbmVyID4gZm9ybXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuXFxuICAgIGlucHV0e1xcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxuICAgIGltZy5zdWJtaXR7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XFxuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcbiAgICAgICAgcGFkZGluZzogMnB4O1xcbiAgICAgICAgcmlnaHQ6IDNweDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgfVxcbn1cXG5cXG4vKiBzdHlsZSBjdXJyZW50IHdlYXRoZXIgYXJlYSAqL1xcbi50b2RheS53ZWF0aGVyLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxuICAgIC5jb25kaXRpb257XFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAxIC8gMyAvIDI7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICAgICAgICBpbWd7XFxuICAgICAgICAgICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnRlbXB7XFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxuICAgIH1cXG5cXG4gICAgLnRpbWV7XFxuICAgICAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnByZWNpcCB7XFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAzIC8gMyAvIDQ7XFxuICAgICAgICBhbGlnbi1zZWxmOmNlbnRlcjtcXG4gICAgfVxcbn1cXG5cXG4vKiBzdHlsZSBmb3JlY2FzdCAqL1xcbi5mb3JlY2FzdC5ib3guY29udGFpbmVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyOiAycHggdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gICAgZ2FwOiAycHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgLmZvcmVjYXN0LmJveHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICAgICAgcGFkZGluZzogMnB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcblxcbiAgICAgICAgcC5kYXlBbmREYXRle1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHAudGVtcHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgICAgICB9XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFNUT1JFIGFuZCBTRVQgbG9jYXRpb25cbi8vIGFuZCBHRVQgd2VhdGhlciBpbmZvIGJhc2VkIG9uIGxvY2F0aW9uXG5jb25zb2xlLmxvZyhcIipNT0RVTEUgQ0hFQ0sqIGZyb20gYXBpLmpzXCIpO1xuXG5jb25zdCBhcGlNYW5hZ2VyID0gKGZ1bmN0aW9uKCl7XG4gICAgbGV0IGFwaUtleSA9IFwiaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvbG9uZG9uP2tleT1ZU0xMSzdKREhVN05BUEFMUlM0RFBaOVA5XCJcbiAgICBjb25zdCBhcGlLZXlTdGFydCA9IFwiaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvXCJcbiAgICBjb25zdCBhcGlLZXlFbmQgPSBcIj9rZXk9WVNMTEs3SkRIVTdOQVBBTFJTNERQWjlQOVwiXG5cbiAgICBsZXQgbG9jYXRpb24gPSAnbG9uZG9uJ1xuICAgIGNvbnN0IHNldExvY2F0aW9uID0gZnVuY3Rpb24oaW5wdXRMb2NhdGlvbil7XG4gICAgICAgIGxvY2F0aW9uID0gaW5wdXRMb2NhdGlvbjtcbiAgICAgICAgdXBkYXRlQXBpS2V5KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9jYXRpb24gaXMgbm93IFwiICsgbG9jYXRpb24pO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZUFwaUtleSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGFwaUtleSA9IGFwaUtleVN0YXJ0ICsgbG9jYXRpb24gKyBhcGlLZXlFbmQ7XG4gICAgICAgIHJldHVybiBhcGlLZXk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWVzdEFuZFByb2Nlc3NBcGkgPSBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlLZXksIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyBkaXJlY3QgQVBJIHJlc3BvbnNlXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VKU09OT2JqZWN0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyAvLyByZXR1cm5lZCBhcyBhIEpTT04gb2JqZWN0XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgSlNPTiBvYmplY3QgZnJvbSBBUElcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUpTT05PYmplY3QpO1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkSlNPTiA9IHByb2Nlc3NKU09OKHJlc3BvbnNlSlNPTk9iamVjdCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgY2xlYW5lZCB1cCBvYmplY3RcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9jZXNzZWRKU09OKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzZWRKU09OO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZldGNoIGVycm9yOiAnICsgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTmVlZCB0byBnZXQgXCJyZXNvbHZlZEFkZHJlc3NcIiwgXCJ0em9mZnNldFwiIGFuZC4uLlxuICAgIC8vIEZvciBlYWNoIFwiZGF5c1wiIGZvciA3IGRheXMsIG5lZWQgdG8gZ2V0IFwiZGF0ZXRpbWVcIixcInRlbXBcIixcInRlbXBtYXhcIixcInRlbXBtaW5cIixcInByZWNpcHByb2JcIixcImNvbmRpdGlvbnNcIlxuICAgIGNvbnN0IHByb2Nlc3NKU09OID0gZnVuY3Rpb24gKHdlYXRoZXJKU09OT2JqZWN0KXtcbiAgICAgICAgbGV0IHJlc29sdmVkQWRkcmVzcyA9IHdlYXRoZXJKU09OT2JqZWN0LnJlc29sdmVkQWRkcmVzcztcbiAgICAgICAgbGV0IHR6b2Zmc2V0ID0gd2VhdGhlckpTT05PYmplY3QudHpvZmZzZXQ7XG4gICAgICAgIGxldCBkYXRlQXJyYXkgPSBbXTsgLy8gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIHtkYXlBbmREYXRlfVxuICAgICAgICBsZXQgdGVtcEFycmF5ID0gW107IC8vIGFycmF5IG9mIG9iamVjdHMgd2l0aCB7dGVtcCx0ZW1wbWF4LHRlbXBtaW59XG4gICAgICAgIGxldCBwcmVjaXBBcnJheSA9IFtdOyAvLyBhcnJheSBvZiBvYmplY3RzIHdpdGgge3ByZWNpcCxjb25kaXRpb259XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKXtcbiAgICAgICAgICAgIGxldCBkYXlKU09OID0gd2VhdGhlckpTT05PYmplY3QuZGF5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVPYmplY3QgPSBjb252ZXJ0RGF0ZShkYXlKU09OLmRhdGV0aW1lKTtcbiAgICAgICAgICAgIGRhdGVBcnJheS5wdXNoKGRhdGVPYmplY3QpO1xuICAgICAgICAgICAgY29uc3QgdGVtcE9iamVjdCA9IHtcbiAgICAgICAgICAgICAgICB0ZW1wOiBkYXlKU09OLnRlbXAsXG4gICAgICAgICAgICAgICAgdGVtcG1pbjogZGF5SlNPTi50ZW1wbWluLFxuICAgICAgICAgICAgICAgIHRlbXBtYXg6IGRheUpTT04udGVtcG1heCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRlbXBBcnJheS5wdXNoKHRlbXBPYmplY3QpO1xuICAgICAgICAgICAgY29uc3QgcHJlY2lwT2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgIHByZWNpcHByb2I6IGRheUpTT04ucHJlY2lwcHJvYixcbiAgICAgICAgICAgICAgICBjb25kaXRpb25zOiBkYXlKU09OLmNvbmRpdGlvbnMsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmVjaXBBcnJheS5wdXNoKHByZWNpcE9iamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtyZXNvbHZlZEFkZHJlc3MsIHR6b2Zmc2V0LCBkYXRlQXJyYXksIHRlbXBBcnJheSwgcHJlY2lwQXJyYXl9XG4gICAgfVxuXG4gICAgLy8gY29udmVydHMgWVlZWS1NTS1ERCB0byBEYXlPZldlZWsgRGF5IChsaWtlIFdlZCAxMikgdXNpbmcgRGF0ZSBvYmplY3RzXG4gICAgY29uc3QgY29udmVydERhdGUgPSBmdW5jdGlvbihkYXRlVGltZSl7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlVGltZSk7XG4gICAgICAgIGxldCBkYXRlU3RyaW5nID0gZGF0ZS50b0RhdGVTdHJpbmcoKTsgLy8gb3V0cHV0cyBhcyBXZWQgSnVsIEREIFlZWVlcbiAgICAgICAgY29uc3QgZGF5T2ZNb250aCA9IGRhdGVTdHJpbmcuc2xpY2UoOCwxMCk7XG4gICAgICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGVTdHJpbmcuc2xpY2UoMCwzKTtcbiAgICAgICAgY29uc3QgZGF5QW5kRGF0ZSA9IGRheU9mV2VlayArIFwiIFwiICsgZGF5T2ZNb250aDtcbiAgICAgICAgcmV0dXJuIHtkYXlBbmREYXRlfTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRXZWF0aGVyID0gZnVuY3Rpb24oaW5wdXRMb2NhdGlvbil7XG4gICAgICAgIHNldExvY2F0aW9uKGlucHV0TG9jYXRpb24pO1xuICAgICAgICBjb25zdCBwcm9jZXNzZWRXZWF0aGVyID0gcmVxdWVzdEFuZFByb2Nlc3NBcGkoKTtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NlZFdlYXRoZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXRXZWF0aGVyLCBzZXRMb2NhdGlvbn1cbn0pKCk7XG5cbmV4cG9ydCB7YXBpTWFuYWdlcn07IiwiLy8gaW5pdGlhbGl6ZXMgcGFnZVxuLy8gcHJvY2Vzc2VzIGV2ZW50IGxpc3RlbmVycyBmcm9tIHJlbmRlci5qcyBhbmQgY2FsbHMgYXBpLmpzIGZ1bmN0aW9uc1xuXG5pbXBvcnQgeyBhcGlNYW5hZ2VyIH0gZnJvbSBcIi4vYXBpLmpzXCJcbmltcG9ydCB7IHJlbmRlck1hbmFnZXIgfSBmcm9tIFwiLi9yZW5kZXIuanNcIlxuXG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuY29uc29sZS5sb2coXCIqTU9EVUxFIENIRUNLKiBmcm9tIGluZGV4LmpzXCIpO1xuXG5jb25zdCBwYWdlTWFuYWdlciA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZGVmYXVsdExvY2F0aW9uID0gXCJsb25kb25cIlxuICAgIFxuICAgIGNvbnN0IGluaXQgPSBhc3luYyBmdW5jdGlvbigpe1xuICAgICAgICByZW5kZXJNYW5hZ2VyLmluaXQoKTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckluZm8gPSBhd2FpdCBhcGlNYW5hZ2VyLmdldFdlYXRoZXIoZGVmYXVsdExvY2F0aW9uKTtcbiAgICAgICAgcmVuZGVyTWFuYWdlci5lZGl0V2VhdGhlcih3ZWF0aGVySW5mbyk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3Rm9yZWNhc3QgPSBhc3luYyBmdW5jdGlvbihpbnB1dExvY2F0aW9uKXtcbiAgICAgICAgY29uc3Qgd2VhdGhlckluZm8gPSBhd2FpdCBhcGlNYW5hZ2VyLmdldFdlYXRoZXIoaW5wdXRMb2NhdGlvbik7XG4gICAgICAgIHJlbmRlck1hbmFnZXIuZWRpdFdlYXRoZXIod2VhdGhlckluZm8pO1xuICAgIH1cblxuICAgIHJldHVybiB7aW5pdCwgbmV3Rm9yZWNhc3R9O1xufSgpO1xuXG4vLyBURU1QT1JBUklMWSBhdHRhY2ggdG8gd2luZG93IG9iamVjdCB0byB0ZXN0IG5ld0ZvcmVjYXN0XG53aW5kb3cucGFnZU1hbmFnZXIgPSBwYWdlTWFuYWdlcjtcblxucGFnZU1hbmFnZXIuaW5pdCgpO1xuXG5leHBvcnQge3BhZ2VNYW5hZ2VyfTsiLCIvLyBtb2R1bGUgc3RyaWN0bHkgZm9yIGRpc3BsYXlpbmcgZWxlbWVudHNcbi8vIGFuZCBiaW5kaW5nIGV2ZW50IGxpc3RlbmVycyAocHJvY2Vzc2luZyBkb25lIGVsc2V3aGVyZSlcblxuLy8gXCJyZW5kZXJcIiBtZWFucyB0byBjcmVhdGUgZWxlbWVudCBhbmQgYWx3YXlzIHJldHVybnMgYW4gZWxlbWVudFxuLy8gXCJlZGl0XCIgbWVhbnMgdG8gY2hhbmdlIHRleHQgb3Igc29tZXRoaW5nIGVsc2UgYWJvdXQgZXhpc3RpbmcgZWxlbWVudFxuLy8gXCJhcHBlbmRcIiBtZWFucyB0byBhdHRhY2ggZWxlbWVudHMgdG8gZWFjaG90aGVyIHdpdGhvdXQgcmV0dXJuaW5nIGFuIGVsZW1lbnQgKGF2b2lkIHVzaW5nIGV4Y2VwdCBhdCBoaWdoZXN0IGxldmVsKVxuXG5pbXBvcnQgeyBwYWdlTWFuYWdlciB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmltcG9ydCBTbm93SWNvbiBmcm9tIFwiLi9pbWFnZXMvc25vdy5wbmdcIjtcbmltcG9ydCBDbG91ZEljb24gZnJvbSBcIi4vaW1hZ2VzL3BhcnRseS1jbG91ZHkucG5nXCI7XG5pbXBvcnQgT3ZlcmNhc3RJY29uIGZyb20gXCIuL2ltYWdlcy9jbG91ZHMucG5nXCI7XG5pbXBvcnQgU3VuSWNvbiBmcm9tIFwiLi9pbWFnZXMvc3VuLnBuZ1wiO1xuaW1wb3J0IFJhaW5JY29uIGZyb20gXCIuL2ltYWdlcy9yYWlueS5wbmdcIjtcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCIuL2ltYWdlcy9tYWduaWZ5aW5nLWdsYXNzLnBuZ1wiO1xuXG5jb25zb2xlLmxvZyhcIipNT0RVTEUgQ0hFQ0sqIGZyb20gcmVuZGVyLmpzXCIpO1xuXG5jb25zdCByZW5kZXJNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlckxvY2F0aW9uSW5wdXQoKSk7XG4gICAgLy9yZW5kZXJIZWFkZXIoKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlckNvbnRlbnRDb250YWluZXJzKCkpOyAvLyByZW5kZXIgdGhlIGJveGVzIHRvIHB1dCBmb3JlY2FzdCBpbmZvXG4gICAgYmluZExvY2F0aW9uSW5wdXQoKTtcbiAgfTtcblxuICAvLyBoZWxwZXIgZnVuY3Rpb25zIHRvIGVhc2lseSBjcmVhdGUgRE9NIGVsZW1lbnRzXG5cbiAgY29uc3QgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWcsIGNsYXNzQXR0cmlidXRlLCBpbm5lclRleHQpIHtcbiAgICBjb25zdCBjcmVhdGVkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBpZiAoY2xhc3NBdHRyaWJ1dGUgIT09IHVuZGVmaW5lZCAmJiBjbGFzc0F0dHJpYnV0ZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3BsaXRDbGFzc1N0cmluZ3NBcnJheSA9IGNsYXNzQXR0cmlidXRlLnNwbGl0KFwiIFwiKTtcbiAgICAgIGZvciAobGV0IHNpbmdsZUNsYXNzIG9mIHNwbGl0Q2xhc3NTdHJpbmdzQXJyYXkpIHtcbiAgICAgICAgY3JlYXRlZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChzaW5nbGVDbGFzcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpbm5lclRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY3JlYXRlZEVsZW1lbnQuaW5uZXJUZXh0ID0gaW5uZXJUZXh0O1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlZEVsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlSW1hZ2UgPSBmdW5jdGlvbiAoc3JjLCBjbGFzc1N0cmluZywgYWx0VGV4dCkge1xuICAgIGNvbnN0IGltYWdlID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBjbGFzc1N0cmluZyk7XG4gICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgIGltYWdlLmFsdCA9IGFsdFRleHQ7XG4gICAgaW1hZ2Uuc3R5bGUud2lkdGggPSBcIjI5cHhcIjtcbiAgICByZXR1cm4gaW1hZ2U7XG4gIH07XG5cbiAgLy8gZnVuY3Rpb25zIGZvciByZW5kZXJpbmcgdGhlIGlucHV0IGZvciBsb2NhdGlvblxuICBjb25zdCByZW5kZXJMb2NhdGlvbklucHV0ID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZvcm0gY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHNlYXJjaEZvcm0gPSBjcmVhdGVFbGVtZW50KFwiZm9ybVwiLFwiaW5wdXQgZm9ybVwiKTtcbiAgICBzZWFyY2hGb3JtLm1ldGhvZCA9IFwiUE9TVFwiO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoRm9ybSk7XG4gICAgY29uc3QgaW5wdXRCYXIgPSByZW5kZXJJbnB1dEJhcigpO1xuICAgIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IHJlbmRlclNlYXJjaEJ1dHRvbigpO1xuICAgIHNlYXJjaEZvcm0uYXBwZW5kKGlucHV0QmFyLCBzZWFyY2hCdXR0b24pO1xuICAgIHJldHVybiBmb3JtQ29udGFpbmVyO1xuICB9XG5cbiAgY29uc3QgcmVuZGVySW5wdXRCYXIgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGxvY2F0aW9uSW5wdXQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJsb2NhdGlvbiBpbnB1dFwiKTtcbiAgICBsb2NhdGlvbklucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBsb2NhdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciBsb2NhdGlvbi4uLlwiO1xuICAgIGxvY2F0aW9uSW5wdXQubmFtZSA9IFwibG9jYXRpb25JbnB1dFwiO1xuICAgIHJldHVybiBsb2NhdGlvbklucHV0O1xuICB9XG4gIFxuICBjb25zdCByZW5kZXJTZWFyY2hCdXR0b24gPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGNyZWF0ZUltYWdlKFNlYXJjaEljb24sXCJsb2NhdGlvbiBzdWJtaXRcIiwgXCJzdWJtaXQgYnV0dG9uXCIpO1xuICAgIHJldHVybiBzdWJtaXRCdXR0b247XG4gIH1cblxuICAvLyBiaW5kIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBzZWFyY2ggYnV0dG9uXG4gIGNvbnN0IGJpbmRMb2NhdGlvbklucHV0ID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBsb2NhdGlvbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybS5pbnB1dFwiKTtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBsb2NhdGlvbkZvcm0ucXVlcnlTZWxlY3RvcihcImltZy5zdWJtaXRcIik7XG4gICAgY29uc3QgbG9jYXRpb25JbnB1dCA9IGxvY2F0aW9uRm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXQubG9jYXRpb25cIik7XG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcGFnZU1hbmFnZXIubmV3Rm9yZWNhc3QobG9jYXRpb25JbnB1dC52YWx1ZSk7XG4gICAgICBsb2NhdGlvbklucHV0LnZhbHVlID0gXCJcIjtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9ucyBmb3Igd2VhdGhlciBpbmZvIHJlbmRlcmluZ1xuICBjb25zdCByZW5kZXJDb250ZW50Q29udGFpbmVycyA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJjb250ZW50IGNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBsb2NhdGlvbkNvbnRhaW5lciA9IHJlbmRlckxvY2F0aW9uVGl0bGVDb250YWluZXIoKTsgLy8gcmVuZGVyIGNvbnRhaW5lciB0byBwdXQgbG9jYXRpb24gdGl0bGVcbiAgICBjb25zdCB0b2RheVdlYXRoZXJDb250YWluZXIgPSByZW5kZXJUb2RheVdlYXRoZXJDb250YWluZXIoKTsgLy8gcmVuZGVycyBsb3RzIGluZm8gb24gY3VycmVudCB3ZWF0aGVyICsgbG9jYWwgdGltZVxuICAgIGNvbnN0IGZvcmVjYXN0Qm94ZXMgPSByZW5kZXJGb3JlY2FzdEJveGVzKCk7IC8vIHJlbmRlciB0aGUgNyBib3hlcyAod2l0aCBlbXB0eSBjb250ZW50KSBmb3IgZm9yZWNhc3RcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChsb2NhdGlvbkNvbnRhaW5lcix0b2RheVdlYXRoZXJDb250YWluZXIsIGZvcmVjYXN0Qm94ZXMpO1xuICAgIHJldHVybiBjb250ZW50Q29udGFpbmVyO1xuICB9XG5cbiAgbGV0IGxvY2F0aW9uVGl0bGU7IC8vIHB1YmxpYyB2YXJpYWJsZXMgdG8gbWluaW1pemUgZGlyZWN0IERPTSBhY2Nlc3NcbiAgY29uc3QgcmVuZGVyTG9jYXRpb25UaXRsZUNvbnRhaW5lciA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgbG9jYXRpb25UaXRsZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJsb2NhdGlvbiB0aXRsZSBjb250YWluZXJcIik7XG4gICAgbG9jYXRpb25UaXRsZSA9IGNyZWF0ZUVsZW1lbnQoXCJoMlwiLFwibG9jYXRpb24gdGl0bGVcIixcImRlZmF1bHQgbG9jYXRpb25cIik7XG4gICAgbG9jYXRpb25UaXRsZUNvbnRhaW5lci5hcHBlbmQobG9jYXRpb25UaXRsZSk7XG4gICAgcmV0dXJuIGxvY2F0aW9uVGl0bGVDb250YWluZXI7XG4gIH1cblxuICBsZXQgdG9kYXlXZWF0aGVyQ29udGFpbmVyO1xuICBjb25zdCByZW5kZXJUb2RheVdlYXRoZXJDb250YWluZXIgPSBmdW5jdGlvbigpe1xuICAgIHRvZGF5V2VhdGhlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0b2RheSB3ZWF0aGVyIGNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0b2RheVdlYXRoZXJDb25kaXRpb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiY29uZGl0aW9uIGNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjb25kaXRpb25JY29uID0gY3JlYXRlSW1hZ2UoXCJcIiwgXCJjb25kaXRpb24gaWNvblwiKTtcbiAgICBjb25zdCBjb25kaXRpb25UZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJjb25kaXRpb24gdGV4dFwiKTtcbiAgICB0b2RheVdlYXRoZXJDb25kaXRpb25Db250YWluZXIuYXBwZW5kKGNvbmRpdGlvbkljb24sIGNvbmRpdGlvblRleHQpO1xuICAgIGNvbnN0IHRvZGF5V2VhdGhlclRlbXBDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidGVtcCBjb250YWluZXJcIik7XG4gICAgY29uc3QgdGVtcFRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLFwidGVtcCB0ZXh0XCIpO1xuICAgIGNvbnN0IHRlbXBtYXhUZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIixcInRlbXBtYXggdGV4dFwiKTtcbiAgICBjb25zdCB0ZW1wbWluVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJ0ZW1wbWluIHRleHRcIik7XG4gICAgdG9kYXlXZWF0aGVyVGVtcENvbnRhaW5lci5hcHBlbmQodGVtcFRleHQsIHRlbXBtYXhUZXh0LCB0ZW1wbWluVGV4dCk7XG4gICAgY29uc3QgdG9kYXlXZWF0aGVyVGltZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0aW1lIGNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBkYXlUZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJkYXkgdGV4dFwiKTtcbiAgICBjb25zdCB0aW1lVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJ0aW1lIHRleHRcIik7XG4gICAgdG9kYXlXZWF0aGVyVGltZUNvbnRhaW5lci5hcHBlbmQoZGF5VGV4dCwgdGltZVRleHQpO1xuICAgIGNvbnN0IHRvZGF5V2VhdGhlclByZWNpcHByb2JDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJlY2lwIGNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwcmVjaXBUZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJwcmVjaXAgdGV4dFwiKTtcbiAgICB0b2RheVdlYXRoZXJQcmVjaXBwcm9iQ29udGFpbmVyLmFwcGVuZChwcmVjaXBUZXh0KTtcbiAgICB0b2RheVdlYXRoZXJDb250YWluZXIuYXBwZW5kKHRvZGF5V2VhdGhlckNvbmRpdGlvbkNvbnRhaW5lcix0b2RheVdlYXRoZXJUZW1wQ29udGFpbmVyLHRvZGF5V2VhdGhlclRpbWVDb250YWluZXIsdG9kYXlXZWF0aGVyUHJlY2lwcHJvYkNvbnRhaW5lcik7XG4gICAgcmV0dXJuIHRvZGF5V2VhdGhlckNvbnRhaW5lcjtcbiAgfVxuXG4gIGxldCBmb3JlY2FzdEJveGVzID0gW107XG4gIGNvbnN0IHJlbmRlckZvcmVjYXN0Qm94ZXMgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGZvcmVjYXN0Qm94Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZvcmVjYXN0IGJveCBjb250YWluZXJcIik7XG4gICAgY29uc3QgZm9yZWNhc3RCb3ggPSByZW5kZXJGb3JlY2FzdEJveCgpO1xuICAgIGZvcmVjYXN0Qm94ZXNbMF0gPSBmb3JlY2FzdEJveDtcbiAgICBmb3JlY2FzdEJveENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdEJveCk7XG4gICAgZm9yIChsZXQgaT0xOyBpIDw3OyBpKyspe1xuICAgICAgY29uc3QgZm9yZWNhc3RCb3hDbG9uZSA9IGZvcmVjYXN0Qm94LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIGZvcmVjYXN0Qm94ZXNbaV0gPSBmb3JlY2FzdEJveENsb25lO1xuICAgICAgZm9yZWNhc3RCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3RCb3hDbG9uZSk7XG4gICAgfVxuICAgIHJldHVybiBmb3JlY2FzdEJveENvbnRhaW5lcjtcbiAgfVxuXG4gIGNvbnN0IHJlbmRlckZvcmVjYXN0Qm94ID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBmb3JlY2FzdEJveCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcImZvcmVjYXN0IGJveFwiKTtcbiAgICBjb25zdCBjb250ZW50Qm94ZXMgPSByZW5kZXJGb3JlY2FzdENvbnRlbnRCb3hlcygpOyAvLyB0aGlzIHdpbGwgY3JlYXRlIGNvbnRhaW5lcnMgZm9yIGluZm8gb2YgdGVtcCwgbWluLCBtYXgsIHByZWNpcCwgZXRjXG4gICAgZm9yZWNhc3RCb3guYXBwZW5kKC4uLk9iamVjdC52YWx1ZXMoY29udGVudEJveGVzKSk7IC8vIGFwcGVuZHMgZWFjaCBub2RlIHdpdGhpbiBjb250ZW50Qm94ZXNPYmplY3RcbiAgICByZXR1cm4gZm9yZWNhc3RCb3g7XG4gIH1cblxuICAvLyBjcmVhdGVzIGNvbnRhaW5lcnMgb3IgSFRNTCBlbGVtZW50cyB3aXRoaW4gdGhlIGZvcmVjYXN0IGJveGVzXG4gIC8vIC4uLmZvciBkYXlPZldlZWssIG1vbnRoRGF5LCB0ZW1wLCB0ZW1wbWluLCB0ZW1wbWF4LCBjb25kaXRpb25zLCBwcmVjaXBwcm9iXG4gIGNvbnN0IHJlbmRlckZvcmVjYXN0Q29udGVudEJveGVzID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCB0aW1lQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRpbWUgY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGRheUFuZERhdGVUZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJkYXlBbmREYXRlIHRleHRcIik7XG4gICAgdGltZUNvbnRhaW5lci5hcHBlbmQoZGF5QW5kRGF0ZVRleHQpO1xuICAgIGNvbnN0IHRlbXBDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidGVtcCBjb250YWluZXJcIik7XG4gICAgY29uc3QgdGVtcFRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLFwidGVtcCB0ZXh0XCIpO1xuICAgIGNvbnN0IHRlbXBtaW5tYXhUZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIixcInRlbXBtaW5tYXggdGV4dFwiKTtcbiAgICB0ZW1wQ29udGFpbmVyLmFwcGVuZCh0ZW1wVGV4dCwgdGVtcG1pbm1heFRleHQpO1xuICAgIGNvbnN0IGNvbmRpdGlvbnNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiY29uZGl0aW9ucyBjb250YWluZXJcIik7XG4gICAgY29uc3QgY29uZGl0aW9uc0ltYWdlID0gY3JlYXRlSW1hZ2UoXCJcIixcImNvbmRpdGlvbnMgaW1hZ2VcIik7IC8vIG11c3QgY29udmVydCBjb25kaXRpb25zIHRleHQgdG8gYW4gaW1hZ2Ugc3JjIGluIGVkaXRpbmcgbGF0ZXJcbiAgICBjb25zdCBwcmVjaXBwcm9iVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwicHJlY2lwcHJvYiB0ZXh0XCIpO1xuICAgIGNvbmRpdGlvbnNDb250YWluZXIuYXBwZW5kKGNvbmRpdGlvbnNJbWFnZSwgcHJlY2lwcHJvYlRleHQpO1xuICAgIHJldHVybiB7dGltZUNvbnRhaW5lciwgdGVtcENvbnRhaW5lciwgY29uZGl0aW9uc0NvbnRhaW5lcn07XG4gIH1cblxuICAvLyBFdmVyeXRoaW5nIGJlbG93IHRoaXMgaXMgbWVhbnQgdG8gZWRpdCBleGlzdGluZyBlbGVtZW50cyAvL1xuXG4gIC8vIGVkaXRzIHRleHQgY29udGVudCB0byBzaG93IHdlYXRoZXIgaW5mb3JtYXRpb25cbiAgLy8gb3JnYW5pemVzIHdlYXRoZXJJbmZvIHRvIHNlbmQgb25seSByZWxldmFudCBpbmZvIHRvIGVhY2ggZnVuY3Rpb25cbiAgY29uc3QgZWRpdFdlYXRoZXIgPSBmdW5jdGlvbih3ZWF0aGVySW5mbyl7XG4gICAgZWRpdExvY2F0aW9uVGl0bGUod2VhdGhlckluZm8ucmVzb2x2ZWRBZGRyZXNzKTtcbiAgICBlZGl0VG9kYXlXZWF0aGVyKHdlYXRoZXJJbmZvLnR6b2Zmc2V0LCB3ZWF0aGVySW5mby5kYXRlQXJyYXlbMF0sd2VhdGhlckluZm8udGVtcEFycmF5WzBdLCB3ZWF0aGVySW5mby5wcmVjaXBBcnJheVswXSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGk8NzsgaSsrKXtcbiAgICAgIGVkaXRGb3JlY2FzdEJveChpLCB3ZWF0aGVySW5mby5kYXRlQXJyYXlbaV0sIHdlYXRoZXJJbmZvLnRlbXBBcnJheVtpXSwgd2VhdGhlckluZm8ucHJlY2lwQXJyYXlbaV0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgdGhlIHdlYXRoZXIgdGhhdCByZW5kZXIuanMgc2Vlc1wiKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVySW5mbyk7XG4gIH1cblxuICBjb25zdCBlZGl0TG9jYXRpb25UaXRsZSA9IGZ1bmN0aW9uIChyZXNvbHZlZEFkZHJlc3Mpe1xuICAgIGxvY2F0aW9uVGl0bGUudGV4dENvbnRlbnQgPSByZXNvbHZlZEFkZHJlc3M7XG4gIH1cblxuICBjb25zdCBERUdSRUVfRl9TWU1CT0wgPSBcIsKwRlwiO1xuICBjb25zdCBERUdSRUVfQ19TWU1CT0wgPSBcIsKwQ1wiO1xuICBjb25zdCBERUdSRUVfU1lNQk9MID0gXCLCsFwiO1xuICBjb25zdCBlZGl0VG9kYXlXZWF0aGVyID0gZnVuY3Rpb24odHpvZmZzZXQsIGRhdGVPYmplY3QsIHRlbXBPYmplY3QsIHByZWNpcE9iamVjdCl7XG4gICAgY29uc3QgY29uZGl0aW9uVGVtcFRpbWVQcmVjaXBDb250YWluZXJzID0gdG9kYXlXZWF0aGVyQ29udGFpbmVyLmNoaWxkcmVuO1xuICAgIGVkaXRDbGFzc0NoaWxkSW1hZ2UoY29uZGl0aW9uVGVtcFRpbWVQcmVjaXBDb250YWluZXJzWzBdLCBcImljb25cIiwgcHJlY2lwT2JqZWN0LmNvbmRpdGlvbnMpO1xuICAgIGVkaXRDbGFzc0NoaWxkKGNvbmRpdGlvblRlbXBUaW1lUHJlY2lwQ29udGFpbmVyc1swXSwgXCJ0ZXh0XCIsIHByZWNpcE9iamVjdC5jb25kaXRpb25zKTtcbiAgICAvLyBnb2VzIHRocm91Z2ggZWFjaCBrZXksIHZhbHVlIHBhaXIgaW4gdGVtcE9iamVjdCBhbmQgdXBkYXRlcyB0ZXh0IG9uIG5vZGVzXG4gICAgZWRpdENsYXNzQ2hpbGQoY29uZGl0aW9uVGVtcFRpbWVQcmVjaXBDb250YWluZXJzWzFdLCBcInRlbXBcIiwgYCR7dGVtcE9iamVjdC50ZW1wfSR7REVHUkVFX0ZfU1lNQk9MfWApO1xuICAgIGVkaXRDbGFzc0NoaWxkKGNvbmRpdGlvblRlbXBUaW1lUHJlY2lwQ29udGFpbmVyc1sxXSwgXCJ0ZW1wbWF4XCIsIGBNYXg6ICR7dGVtcE9iamVjdC50ZW1wbWF4fSR7REVHUkVFX0ZfU1lNQk9MfWApO1xuICAgIGVkaXRDbGFzc0NoaWxkKGNvbmRpdGlvblRlbXBUaW1lUHJlY2lwQ29udGFpbmVyc1sxXSwgXCJ0ZW1wbWluXCIsIGBNaW46ICR7dGVtcE9iamVjdC50ZW1wbWlufSR7REVHUkVFX0ZfU1lNQk9MfWApO1xuICAgIGVkaXRDbGFzc0NoaWxkKGNvbmRpdGlvblRlbXBUaW1lUHJlY2lwQ29udGFpbmVyc1syXSwgXCJkYXlcIiwgZGF0ZU9iamVjdC5kYXlBbmREYXRlKTtcbiAgICBlZGl0Q2xhc3NDaGlsZChjb25kaXRpb25UZW1wVGltZVByZWNpcENvbnRhaW5lcnNbMl0sIFwidGltZVwiLCBjYWxjdWxhdGVMb2NhbFRpbWUodHpvZmZzZXQpKTtcbiAgICBlZGl0Q2xhc3NDaGlsZChjb25kaXRpb25UZW1wVGltZVByZWNpcENvbnRhaW5lcnNbM10sIFwicHJlY2lwXCIsIGBQcmVjaXBpdGF0aW9uOiAke3ByZWNpcE9iamVjdC5wcmVjaXBwcm9ifSVgKTtcbiAgfVxuXG4gIC8vIG1hbnVhbGx5IGNhbGN1bGF0ZSB0aGUgbG9jYWwgdGltZSBhdCB0aGUgbG9jYXRpb24gdXNpbmcgVVRDIHRpbWUgKy8tIHR6b2Zmc2V0XG4gIC8vIHJldHVybnMgc3RyaW5nIHdpdGggZm9ybSBISDpNTSBBTSAob3IgUE0pXG4gIGNvbnN0IGNhbGN1bGF0ZUxvY2FsVGltZSA9IGZ1bmN0aW9uKHR6b2Zmc2V0KXtcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgLy8gcmV0dXJucyBsb2NhbCBob3VyIGZyb20gMC0yM1xuICAgIGNvbnN0IGxvY2FsSG91clVuZm9ybWF0dGVkID0gKGN1cnJlbnREYXRlLmdldFVUQ0hvdXJzKCkrdHpvZmZzZXQpJTI0O1xuICAgIGxldCBBTVBNU3RyaW5nO1xuICAgIGlmIChNYXRoLnRydW5jKGxvY2FsSG91clVuZm9ybWF0dGVkLzEyKSA9PSAwKXtcbiAgICAgIEFNUE1TdHJpbmcgPSBcIkFNXCI7XG4gICAgfSBlbHNle1xuICAgICAgQU1QTVN0cmluZyA9IFwiUE1cIjtcbiAgICB9XG4gICAgbGV0IGxvY2FsSG91ciA9IChsb2NhbEhvdXJVbmZvcm1hdHRlZCklMTI7IC8vIGNvbnZlcnQgMC0yMyB0byAwLTExXG4gICAgaWYgKGxvY2FsSG91ciA9PSAwKXtcbiAgICAgIGxvY2FsSG91ciA9IDEyO1xuICAgIH1cbiAgICBjb25zdCBsb2NhbE1pbnV0ZXMgPSBjdXJyZW50RGF0ZS50b1RpbWVTdHJpbmcoKS5zbGljZSgyLDUpOyAvLyBjb250YWlucyBcIjpNTVwiXG4gICAgY29uc3QgbG9jYWxUaW1lU3RyaW5nID0gYCR7bG9jYWxIb3VyfSR7bG9jYWxNaW51dGVzfSAke0FNUE1TdHJpbmd9YDtcbiAgICByZXR1cm4gbG9jYWxUaW1lU3RyaW5nO1xuICB9XG5cbiAgLy8gZWRpdHMgaW5kaXZpZHVhbCBib3ggYWxsIGF0IG9uY2UgdG8gcmVkdWNlIGFtb3VudCBvZiByZWZlcmVuY2VzIHRvIG5vZGVzXG4gIC8vIFBhcmFtZXRlcnM6IGluZGV4LCB7bW9udGhEYXksIGRheU9mV2Vla30sIHt0ZW1wLCB0ZW1wbWluLCB0ZW1wbWF4fSwge3ByZWNpcHByb2IsIGNvbmRpdGlvbnN9XG4gIC8vIHRpbWVUZW1wQ29uZGl0aW9uc0NvbnRhaW5lcnMgaXMganVzdCBjaGlsZCBub2RlcyBvZiB0aGUgZm9yZWNhc3QgYm94XG4gIGNvbnN0IGVkaXRGb3JlY2FzdEJveCA9IGZ1bmN0aW9uKGluZGV4LCBkYXRlT2JqZWN0LCB0ZW1wT2JqZWN0LCBwcmVjaXBPYmplY3Qpe1xuICAgIGNvbnN0IHRpbWVUZW1wQ29uZGl0aW9uc0NvbnRhaW5lcnMgPSBmb3JlY2FzdEJveGVzW2luZGV4XS5jaGlsZHJlbjtcbiAgICAvLyBnb2VzIHRocm91Z2ggZWFjaCBrZXksIHZhbHVlIHBhaXIgaW4gZGF0ZU9iamVjdCBhbmQgdXBkYXRlcyB0ZXh0IG9uIG5vZGVzXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGF0ZU9iamVjdCkpe1xuICAgICAgZWRpdENsYXNzQ2hpbGQodGltZVRlbXBDb25kaXRpb25zQ29udGFpbmVyc1swXSwga2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIGVkaXRDbGFzc0NoaWxkKHRpbWVUZW1wQ29uZGl0aW9uc0NvbnRhaW5lcnNbMV0sIFwidGVtcFwiLCBgJHt0ZW1wT2JqZWN0LnRlbXB9JHtERUdSRUVfU1lNQk9MfWApO1xuICAgIGVkaXRDbGFzc0NoaWxkKHRpbWVUZW1wQ29uZGl0aW9uc0NvbnRhaW5lcnNbMV0sIFwidGVtcG1pbm1heFwiLCBgJHt0ZW1wT2JqZWN0LnRlbXBtaW59JHtERUdSRUVfU1lNQk9MfS0ke3RlbXBPYmplY3QudGVtcG1heH0ke0RFR1JFRV9TWU1CT0x9YCk7XG4gICAgLy8gcmVwZWF0ZWQgZm9yIG90aGVyIG9iamVjdHMsIGJlY2F1c2UgbmVzdGVkIGxvb3BzIGNvbmZ1c2luZ1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByZWNpcE9iamVjdCkpe1xuICAgICAgaWYgKGtleSA9PSBcInByZWNpcHByb2JcIil7XG4gICAgICAgIGVkaXRDbGFzc0NoaWxkKHRpbWVUZW1wQ29uZGl0aW9uc0NvbnRhaW5lcnNbMl0sIGtleSwgYCR7dmFsdWV9JWApO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT0gXCJjb25kaXRpb25zXCIpe1xuICAgICAgICBlZGl0Q2xhc3NDaGlsZEltYWdlKHRpbWVUZW1wQ29uZGl0aW9uc0NvbnRhaW5lcnNbMl0sIGtleSwgdmFsdWUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gaGVscGVyIGZ1bmN0aW9uIHRoYXQgZWRpdHMgdGhlIHRleHQgb2YgYSBjaGlsZCBub2RlIGdpdmVuIHRoZSBwYXJlbnQgbm9kZSBhbmQgdGhlIGNoaWxkIG5vZGUncyBjbGFzc1xuICAvLyB3aGljaCBjaGlsZCBub2RlIGRldGVybWluZWQgYnkgY2xhc3MgaWRlbnRpZmllclxuICBjb25zdCBlZGl0Q2xhc3NDaGlsZCA9IGZ1bmN0aW9uKHBhcmVudE5vZGUsIGNsYXNzSWRlbnRpZmllciwgbmV3VGV4dCl7XG4gICAgY29uc3Qgbm9kZVRvQ2hhbmdlID0gcGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc0lkZW50aWZpZXJ9YCk7XG4gICAgbm9kZVRvQ2hhbmdlLnRleHRDb250ZW50ID0gbmV3VGV4dDtcbiAgfVxuXG4gIGNvbnN0IGVkaXRDbGFzc0NoaWxkSW1hZ2UgPSBmdW5jdGlvbihwYXJlbnROb2RlLCBjbGFzc0lkZW50aWZpZXIsIG5ld0NvbmRpdGlvbnMpe1xuICAgIGNvbnN0IGltYWdlU3JjID0gY29udmVydENvbmRpdGlvbnNUb1NyYyhuZXdDb25kaXRpb25zKTtcbiAgICBjb25zdCBub2RlVG9DaGFuZ2UgPSBwYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzSWRlbnRpZmllcn1gKTtcbiAgICBub2RlVG9DaGFuZ2Uuc3JjID0gaW1hZ2VTcmM7XG4gIH1cblxuICBjb25zdCBjb252ZXJ0Q29uZGl0aW9uc1RvU3JjID0gZnVuY3Rpb24gKGNvbmRpdGlvbnNTdHJpbmcpe1xuICAgIGlmIChjb25kaXRpb25zU3RyaW5nLmluY2x1ZGVzKFwiQ2xlYXJcIikpe1xuICAgICAgcmV0dXJuIFN1bkljb247XG4gICAgfSBlbHNlIGlmIChjb25kaXRpb25zU3RyaW5nLmluY2x1ZGVzKFwiU25vd1wiKSl7XG4gICAgICByZXR1cm4gU25vd0ljb247XG4gICAgfSBlbHNlIGlmIChjb25kaXRpb25zU3RyaW5nLmluY2x1ZGVzKFwiUmFpblwiKSl7XG4gICAgICByZXR1cm4gUmFpbkljb247XG4gICAgfSBlbHNlIGlmIChjb25kaXRpb25zU3RyaW5nLmluY2x1ZGVzKFwiY2xvdWR5XCIpKXtcbiAgICAgIHJldHVybiBDbG91ZEljb247XG4gICAgfSBlbHNlIGlmIChjb25kaXRpb25zU3RyaW5nLmluY2x1ZGVzKFwiT3ZlcmNhc3RcIikpe1xuICAgICAgcmV0dXJuIE92ZXJjYXN0SWNvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihgQ29uZGl0aW9uIGlzICR7Y29uZGl0aW9uc1N0cmluZ30gYW5kIGRvZXMgbm90IGZpdCBhbnkgaW1hZ2UuYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCwgZWRpdFdlYXRoZXIgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHJlbmRlck1hbmFnZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=