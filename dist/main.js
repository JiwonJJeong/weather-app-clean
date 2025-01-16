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
___CSS_LOADER_EXPORT___.push([module.id, `.text{
    color: red;
}

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

/* style current weather area */
.today.weather.container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;

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
    }

    .precip {
        grid-area: 1 / 3 / 2 / 4;
        align-self: end;
    }
}

/* style forecast */
.forecast.box.container{
    display:flex;
    justify-content: space-between;
    border: 2px var(--border-color);

    .forecast.box{
        display: flex;
        flex-direction:column;
        justify-content: center;
    }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,UAAU;AACd;;AAEA;IACI,oCAAoC;IACpC,gCAAgC;IAChC,oBAAoB;IACpB,mCAAmC;IACnC,qBAAqB;IACrB,sBAAsB;AAC1B;;AAEA;;;;IAII,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kDAAkD;AACtD;;AAEA,8CAA8C;AAC9C;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA,+BAA+B;AAC/B;IACI,aAAa;IACb,kCAAkC;IAClC,2BAA2B;IAC3B,qBAAqB;;IAErB;QACI,wBAAwB;QACxB,kBAAkB;;QAElB;YACI,sBAAsB;YACtB,YAAY;QAChB;IACJ;;IAEA;QACI,wBAAwB;IAC5B;;IAEA;QACI,wBAAwB;IAC5B;;IAEA;QACI,wBAAwB;QACxB,eAAe;IACnB;AACJ;;AAEA,mBAAmB;AACnB;IACI,YAAY;IACZ,8BAA8B;IAC9B,+BAA+B;;IAE/B;QACI,aAAa;QACb,qBAAqB;QACrB,uBAAuB;IAC3B;AACJ","sourcesContent":[".text{\n    color: red;\n}\n\n* {\n    --document-background-color: #B1AFFF;\n    --base-background-color: #FFE9D0;\n    --button-color: pink;\n    --content-background-color: #FFFED3;\n    --border-color: black;\n    box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\np {\n    margin: 0;\n    padding: 0;\n}\n\n:root{\n    background-color: var(--document-background-color);\n}\n\n/* section to organize main sections of page */\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n/* style current weather area */\n.today.weather.container{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    justify-items: center;\n\n    .condition{\n        grid-area: 1 / 1 / 3 / 2;\n        align-self: center;\n\n        img{\n            width: 80px !important;\n            height: auto;\n        }\n    }\n\n    .temp{\n        grid-area: 1 / 2 / 2 / 3;\n    }\n\n    .time{\n        grid-area: 2 / 2 / 3 / 3;\n    }\n\n    .precip {\n        grid-area: 1 / 3 / 2 / 4;\n        align-self: end;\n    }\n}\n\n/* style forecast */\n.forecast.box.container{\n    display:flex;\n    justify-content: space-between;\n    border: 2px var(--border-color);\n\n    .forecast.box{\n        display: flex;\n        flex-direction:column;\n        justify-content: center;\n    }\n}"],"sourceRoot":""}]);
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
    const submitButton = createElement("button","location submit");
    return submitButton;
  }

  // bind event listener to the search button
  const bindLocationInput = function(){
    const locationForm = document.querySelector("form.input");
    const submitButton = locationForm.querySelector("button.submit");
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
    const tempminText = createElement("p","tempmin text");
    const tempmaxText = createElement("p","tempmax text");
    tempContainer.append(tempText, tempminText, tempmaxText);
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
    editClassChild(conditionTempTimePrecipContainers[2], "text", dateObject.dayAndDate);
    editClassChild(conditionTempTimePrecipContainers[2], "text", calculateLocalTime(tzoffset));
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
    // repeated for other objects, because nested loops confusing
    for (const [key, value] of Object.entries(tempObject)){
      editClassChild(timeTempConditionsContainers[1], key, `${value}${DEGREE_SYMBOL}`);
    }
    for (const [key, value] of Object.entries(precipObject)){
      if (key == "precipprob"){
        editClassChild(timeTempConditionsContainers[2], key, value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudGV4dHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4qIHtcbiAgICAtLWRvY3VtZW50LWJhY2tncm91bmQtY29sb3I6ICNCMUFGRkY7XG4gICAgLS1iYXNlLWJhY2tncm91bmQtY29sb3I6ICNGRkU5RDA7XG4gICAgLS1idXR0b24tY29sb3I6IHBpbms7XG4gICAgLS1jb250ZW50LWJhY2tncm91bmQtY29sb3I6ICNGRkZFRDM7XG4gICAgLS1ib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmgxLFxuaDIsXG5oMyxcbnAge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG46cm9vdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kb2N1bWVudC1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLyogc2VjdGlvbiB0byBvcmdhbml6ZSBtYWluIHNlY3Rpb25zIG9mIHBhZ2UgKi9cbmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBzdHlsZSBjdXJyZW50IHdlYXRoZXIgYXJlYSAqL1xuLnRvZGF5LndlYXRoZXIuY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG4gICAgLmNvbmRpdGlvbntcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG5cbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50ZW1we1xuICAgICAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XG4gICAgfVxuXG4gICAgLnRpbWV7XG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcbiAgICB9XG5cbiAgICAucHJlY2lwIHtcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0O1xuICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gICAgfVxufVxuXG4vKiBzdHlsZSBmb3JlY2FzdCAqL1xuLmZvcmVjYXN0LmJveC5jb250YWluZXJ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXI6IDJweCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICAgLmZvcmVjYXN0LmJveHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMsb0JBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOztBQUVBOzs7O0lBSUksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtEQUFrRDtBQUN0RDs7QUFFQSw4Q0FBOEM7QUFDOUM7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUEsK0JBQStCO0FBQy9CO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQywyQkFBMkI7SUFDM0IscUJBQXFCOztJQUVyQjtRQUNJLHdCQUF3QjtRQUN4QixrQkFBa0I7O1FBRWxCO1lBQ0ksc0JBQXNCO1lBQ3RCLFlBQVk7UUFDaEI7SUFDSjs7SUFFQTtRQUNJLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLHdCQUF3QjtRQUN4QixlQUFlO0lBQ25CO0FBQ0o7O0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QiwrQkFBK0I7O0lBRS9CO1FBQ0ksYUFBYTtRQUNiLHFCQUFxQjtRQUNyQix1QkFBdUI7SUFDM0I7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGV4dHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuKiB7XFxuICAgIC0tZG9jdW1lbnQtYmFja2dyb3VuZC1jb2xvcjogI0IxQUZGRjtcXG4gICAgLS1iYXNlLWJhY2tncm91bmQtY29sb3I6ICNGRkU5RDA7XFxuICAgIC0tYnV0dG9uLWNvbG9yOiBwaW5rO1xcbiAgICAtLWNvbnRlbnQtYmFja2dyb3VuZC1jb2xvcjogI0ZGRkVEMztcXG4gICAgLS1ib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5wIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZG9jdW1lbnQtYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi8qIHNlY3Rpb24gdG8gb3JnYW5pemUgbWFpbiBzZWN0aW9ucyBvZiBwYWdlICovXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBzdHlsZSBjdXJyZW50IHdlYXRoZXIgYXJlYSAqL1xcbi50b2RheS53ZWF0aGVyLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIC5jb25kaXRpb257XFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAxIC8gMyAvIDI7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICAgICAgICBpbWd7XFxuICAgICAgICAgICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnRlbXB7XFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxuICAgIH1cXG5cXG4gICAgLnRpbWV7XFxuICAgICAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuICAgIH1cXG5cXG4gICAgLnByZWNpcCB7XFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAzIC8gMiAvIDQ7XFxuICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIH1cXG59XFxuXFxuLyogc3R5bGUgZm9yZWNhc3QgKi9cXG4uZm9yZWNhc3QuYm94LmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlcjogMnB4IHZhcigtLWJvcmRlci1jb2xvcik7XFxuXFxuICAgIC5mb3JlY2FzdC5ib3h7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFNUT1JFIGFuZCBTRVQgbG9jYXRpb25cbi8vIGFuZCBHRVQgd2VhdGhlciBpbmZvIGJhc2VkIG9uIGxvY2F0aW9uXG5jb25zb2xlLmxvZyhcIipNT0RVTEUgQ0hFQ0sqIGZyb20gYXBpLmpzXCIpO1xuXG5jb25zdCBhcGlNYW5hZ2VyID0gKGZ1bmN0aW9uKCl7XG4gICAgbGV0IGFwaUtleSA9IFwiaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvbG9uZG9uP2tleT1ZU0xMSzdKREhVN05BUEFMUlM0RFBaOVA5XCJcbiAgICBjb25zdCBhcGlLZXlTdGFydCA9IFwiaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvXCJcbiAgICBjb25zdCBhcGlLZXlFbmQgPSBcIj9rZXk9WVNMTEs3SkRIVTdOQVBBTFJTNERQWjlQOVwiXG5cbiAgICBsZXQgbG9jYXRpb24gPSAnbG9uZG9uJ1xuICAgIGNvbnN0IHNldExvY2F0aW9uID0gZnVuY3Rpb24oaW5wdXRMb2NhdGlvbil7XG4gICAgICAgIGxvY2F0aW9uID0gaW5wdXRMb2NhdGlvbjtcbiAgICAgICAgdXBkYXRlQXBpS2V5KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9jYXRpb24gaXMgbm93IFwiICsgbG9jYXRpb24pO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZUFwaUtleSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGFwaUtleSA9IGFwaUtleVN0YXJ0ICsgbG9jYXRpb24gKyBhcGlLZXlFbmQ7XG4gICAgICAgIHJldHVybiBhcGlLZXk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWVzdEFuZFByb2Nlc3NBcGkgPSBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlLZXksIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyBkaXJlY3QgQVBJIHJlc3BvbnNlXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VKU09OT2JqZWN0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyAvLyByZXR1cm5lZCBhcyBhIEpTT04gb2JqZWN0XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgSlNPTiBvYmplY3QgZnJvbSBBUElcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUpTT05PYmplY3QpO1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkSlNPTiA9IHByb2Nlc3NKU09OKHJlc3BvbnNlSlNPTk9iamVjdCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgY2xlYW5lZCB1cCBvYmplY3RcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9jZXNzZWRKU09OKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzZWRKU09OO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZldGNoIGVycm9yOiAnICsgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTmVlZCB0byBnZXQgXCJyZXNvbHZlZEFkZHJlc3NcIiwgXCJ0em9mZnNldFwiIGFuZC4uLlxuICAgIC8vIEZvciBlYWNoIFwiZGF5c1wiIGZvciA3IGRheXMsIG5lZWQgdG8gZ2V0IFwiZGF0ZXRpbWVcIixcInRlbXBcIixcInRlbXBtYXhcIixcInRlbXBtaW5cIixcInByZWNpcHByb2JcIixcImNvbmRpdGlvbnNcIlxuICAgIGNvbnN0IHByb2Nlc3NKU09OID0gZnVuY3Rpb24gKHdlYXRoZXJKU09OT2JqZWN0KXtcbiAgICAgICAgbGV0IHJlc29sdmVkQWRkcmVzcyA9IHdlYXRoZXJKU09OT2JqZWN0LnJlc29sdmVkQWRkcmVzcztcbiAgICAgICAgbGV0IHR6b2Zmc2V0ID0gd2VhdGhlckpTT05PYmplY3QudHpvZmZzZXQ7XG4gICAgICAgIGxldCBkYXRlQXJyYXkgPSBbXTsgLy8gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIHtkYXlBbmREYXRlfVxuICAgICAgICBsZXQgdGVtcEFycmF5ID0gW107IC8vIGFycmF5IG9mIG9iamVjdHMgd2l0aCB7dGVtcCx0ZW1wbWF4LHRlbXBtaW59XG4gICAgICAgIGxldCBwcmVjaXBBcnJheSA9IFtdOyAvLyBhcnJheSBvZiBvYmplY3RzIHdpdGgge3ByZWNpcCxjb25kaXRpb259XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKXtcbiAgICAgICAgICAgIGxldCBkYXlKU09OID0gd2VhdGhlckpTT05PYmplY3QuZGF5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVPYmplY3QgPSBjb252ZXJ0RGF0ZShkYXlKU09OLmRhdGV0aW1lKTtcbiAgICAgICAgICAgIGRhdGVBcnJheS5wdXNoKGRhdGVPYmplY3QpO1xuICAgICAgICAgICAgY29uc3QgdGVtcE9iamVjdCA9IHtcbiAgICAgICAgICAgICAgICB0ZW1wOiBkYXlKU09OLnRlbXAsXG4gICAgICAgICAgICAgICAgdGVtcG1pbjogZGF5SlNPTi50ZW1wbWluLFxuICAgICAgICAgICAgICAgIHRlbXBtYXg6IGRheUpTT04udGVtcG1heCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRlbXBBcnJheS5wdXNoKHRlbXBPYmplY3QpO1xuICAgICAgICAgICAgY29uc3QgcHJlY2lwT2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgIHByZWNpcHByb2I6IGRheUpTT04ucHJlY2lwcHJvYixcbiAgICAgICAgICAgICAgICBjb25kaXRpb25zOiBkYXlKU09OLmNvbmRpdGlvbnMsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmVjaXBBcnJheS5wdXNoKHByZWNpcE9iamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtyZXNvbHZlZEFkZHJlc3MsIHR6b2Zmc2V0LCBkYXRlQXJyYXksIHRlbXBBcnJheSwgcHJlY2lwQXJyYXl9XG4gICAgfVxuXG4gICAgLy8gY29udmVydHMgWVlZWS1NTS1ERCB0byBEYXlPZldlZWsgRGF5IChsaWtlIFdlZCAxMikgdXNpbmcgRGF0ZSBvYmplY3RzXG4gICAgY29uc3QgY29udmVydERhdGUgPSBmdW5jdGlvbihkYXRlVGltZSl7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlVGltZSk7XG4gICAgICAgIGxldCBkYXRlU3RyaW5nID0gZGF0ZS50b0RhdGVTdHJpbmcoKTsgLy8gb3V0cHV0cyBhcyBXZWQgSnVsIEREIFlZWVlcbiAgICAgICAgY29uc3QgZGF5T2ZNb250aCA9IGRhdGVTdHJpbmcuc2xpY2UoOCwxMCk7XG4gICAgICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGVTdHJpbmcuc2xpY2UoMCwzKTtcbiAgICAgICAgY29uc3QgZGF5QW5kRGF0ZSA9IGRheU9mV2VlayArIFwiIFwiICsgZGF5T2ZNb250aDtcbiAgICAgICAgcmV0dXJuIHtkYXlBbmREYXRlfTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRXZWF0aGVyID0gZnVuY3Rpb24oaW5wdXRMb2NhdGlvbil7XG4gICAgICAgIHNldExvY2F0aW9uKGlucHV0TG9jYXRpb24pO1xuICAgICAgICBjb25zdCBwcm9jZXNzZWRXZWF0aGVyID0gcmVxdWVzdEFuZFByb2Nlc3NBcGkoKTtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NlZFdlYXRoZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXRXZWF0aGVyLCBzZXRMb2NhdGlvbn1cbn0pKCk7XG5cbmV4cG9ydCB7YXBpTWFuYWdlcn07IiwiLy8gaW5pdGlhbGl6ZXMgcGFnZVxuLy8gcHJvY2Vzc2VzIGV2ZW50IGxpc3RlbmVycyBmcm9tIHJlbmRlci5qcyBhbmQgY2FsbHMgYXBpLmpzIGZ1bmN0aW9uc1xuXG5pbXBvcnQgeyBhcGlNYW5hZ2VyIH0gZnJvbSBcIi4vYXBpLmpzXCJcbmltcG9ydCB7IHJlbmRlck1hbmFnZXIgfSBmcm9tIFwiLi9yZW5kZXIuanNcIlxuXG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuY29uc29sZS5sb2coXCIqTU9EVUxFIENIRUNLKiBmcm9tIGluZGV4LmpzXCIpO1xuXG5jb25zdCBwYWdlTWFuYWdlciA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZGVmYXVsdExvY2F0aW9uID0gXCJsb25kb25cIlxuICAgIFxuICAgIGNvbnN0IGluaXQgPSBhc3luYyBmdW5jdGlvbigpe1xuICAgICAgICByZW5kZXJNYW5hZ2VyLmluaXQoKTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckluZm8gPSBhd2FpdCBhcGlNYW5hZ2VyLmdldFdlYXRoZXIoZGVmYXVsdExvY2F0aW9uKTtcbiAgICAgICAgcmVuZGVyTWFuYWdlci5lZGl0V2VhdGhlcih3ZWF0aGVySW5mbyk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3Rm9yZWNhc3QgPSBhc3luYyBmdW5jdGlvbihpbnB1dExvY2F0aW9uKXtcbiAgICAgICAgY29uc3Qgd2VhdGhlckluZm8gPSBhd2FpdCBhcGlNYW5hZ2VyLmdldFdlYXRoZXIoaW5wdXRMb2NhdGlvbik7XG4gICAgICAgIHJlbmRlck1hbmFnZXIuZWRpdFdlYXRoZXIod2VhdGhlckluZm8pO1xuICAgIH1cblxuICAgIHJldHVybiB7aW5pdCwgbmV3Rm9yZWNhc3R9O1xufSgpO1xuXG4vLyBURU1QT1JBUklMWSBhdHRhY2ggdG8gd2luZG93IG9iamVjdCB0byB0ZXN0IG5ld0ZvcmVjYXN0XG53aW5kb3cucGFnZU1hbmFnZXIgPSBwYWdlTWFuYWdlcjtcblxucGFnZU1hbmFnZXIuaW5pdCgpO1xuXG5leHBvcnQge3BhZ2VNYW5hZ2VyfTsiLCIvLyBtb2R1bGUgc3RyaWN0bHkgZm9yIGRpc3BsYXlpbmcgZWxlbWVudHNcbi8vIGFuZCBiaW5kaW5nIGV2ZW50IGxpc3RlbmVycyAocHJvY2Vzc2luZyBkb25lIGVsc2V3aGVyZSlcblxuLy8gXCJyZW5kZXJcIiBtZWFucyB0byBjcmVhdGUgZWxlbWVudCBhbmQgYWx3YXlzIHJldHVybnMgYW4gZWxlbWVudFxuLy8gXCJlZGl0XCIgbWVhbnMgdG8gY2hhbmdlIHRleHQgb3Igc29tZXRoaW5nIGVsc2UgYWJvdXQgZXhpc3RpbmcgZWxlbWVudFxuLy8gXCJhcHBlbmRcIiBtZWFucyB0byBhdHRhY2ggZWxlbWVudHMgdG8gZWFjaG90aGVyIHdpdGhvdXQgcmV0dXJuaW5nIGFuIGVsZW1lbnQgKGF2b2lkIHVzaW5nIGV4Y2VwdCBhdCBoaWdoZXN0IGxldmVsKVxuXG5pbXBvcnQgeyBwYWdlTWFuYWdlciB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmltcG9ydCBTbm93SWNvbiBmcm9tIFwiLi9pbWFnZXMvc25vdy5wbmdcIjtcbmltcG9ydCBDbG91ZEljb24gZnJvbSBcIi4vaW1hZ2VzL3BhcnRseS1jbG91ZHkucG5nXCI7XG5pbXBvcnQgT3ZlcmNhc3RJY29uIGZyb20gXCIuL2ltYWdlcy9jbG91ZHMucG5nXCI7XG5pbXBvcnQgU3VuSWNvbiBmcm9tIFwiLi9pbWFnZXMvc3VuLnBuZ1wiO1xuaW1wb3J0IFJhaW5JY29uIGZyb20gXCIuL2ltYWdlcy9yYWlueS5wbmdcIjtcblxuY29uc29sZS5sb2coXCIqTU9EVUxFIENIRUNLKiBmcm9tIHJlbmRlci5qc1wiKTtcblxuY29uc3QgcmVuZGVyTWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJMb2NhdGlvbklucHV0KCkpO1xuICAgIC8vcmVuZGVySGVhZGVyKCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJDb250ZW50Q29udGFpbmVycygpKTsgLy8gcmVuZGVyIHRoZSBib3hlcyB0byBwdXQgZm9yZWNhc3QgaW5mb1xuICAgIGJpbmRMb2NhdGlvbklucHV0KCk7XG4gIH07XG5cbiAgLy8gaGVscGVyIGZ1bmN0aW9ucyB0byBlYXNpbHkgY3JlYXRlIERPTSBlbGVtZW50c1xuXG4gIGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFnLCBjbGFzc0F0dHJpYnV0ZSwgaW5uZXJUZXh0KSB7XG4gICAgY29uc3QgY3JlYXRlZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgaWYgKGNsYXNzQXR0cmlidXRlICE9PSB1bmRlZmluZWQgJiYgY2xhc3NBdHRyaWJ1dGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNwbGl0Q2xhc3NTdHJpbmdzQXJyYXkgPSBjbGFzc0F0dHJpYnV0ZS5zcGxpdChcIiBcIik7XG4gICAgICBmb3IgKGxldCBzaW5nbGVDbGFzcyBvZiBzcGxpdENsYXNzU3RyaW5nc0FycmF5KSB7XG4gICAgICAgIGNyZWF0ZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoc2luZ2xlQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaW5uZXJUZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNyZWF0ZWRFbGVtZW50LmlubmVyVGV4dCA9IGlubmVyVGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZWRFbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUltYWdlID0gZnVuY3Rpb24gKHNyYywgY2xhc3NTdHJpbmcsIGFsdFRleHQpIHtcbiAgICBjb25zdCBpbWFnZSA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgY2xhc3NTdHJpbmcpO1xuICAgIGltYWdlLnNyYyA9IHNyYztcbiAgICBpbWFnZS5hbHQgPSBhbHRUZXh0O1xuICAgIGltYWdlLnN0eWxlLndpZHRoID0gXCIyOXB4XCI7XG4gICAgcmV0dXJuIGltYWdlO1xuICB9O1xuXG4gIC8vIGZ1bmN0aW9ucyBmb3IgcmVuZGVyaW5nIHRoZSBpbnB1dCBmb3IgbG9jYXRpb25cbiAgY29uc3QgcmVuZGVyTG9jYXRpb25JbnB1dCA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmb3JtIGNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBzZWFyY2hGb3JtID0gY3JlYXRlRWxlbWVudChcImZvcm1cIixcImlucHV0IGZvcm1cIik7XG4gICAgc2VhcmNoRm9ybS5tZXRob2QgPSBcIlBPU1RcIjtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEZvcm0pO1xuICAgIGNvbnN0IGlucHV0QmFyID0gcmVuZGVySW5wdXRCYXIoKTtcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSByZW5kZXJTZWFyY2hCdXR0b24oKTtcbiAgICBzZWFyY2hGb3JtLmFwcGVuZChpbnB1dEJhciwgc2VhcmNoQnV0dG9uKTtcbiAgICByZXR1cm4gZm9ybUNvbnRhaW5lcjtcbiAgfVxuXG4gIGNvbnN0IHJlbmRlcklucHV0QmFyID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBsb2NhdGlvbklucHV0ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFwibG9jYXRpb24gaW5wdXRcIik7XG4gICAgbG9jYXRpb25JbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgbG9jYXRpb25JbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgbG9jYXRpb24uLi5cIjtcbiAgICBsb2NhdGlvbklucHV0Lm5hbWUgPSBcImxvY2F0aW9uSW5wdXRcIjtcbiAgICByZXR1cm4gbG9jYXRpb25JbnB1dDtcbiAgfVxuICBcbiAgY29uc3QgcmVuZGVyU2VhcmNoQnV0dG9uID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsXCJsb2NhdGlvbiBzdWJtaXRcIik7XG4gICAgcmV0dXJuIHN1Ym1pdEJ1dHRvbjtcbiAgfVxuXG4gIC8vIGJpbmQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHNlYXJjaCBidXR0b25cbiAgY29uc3QgYmluZExvY2F0aW9uSW5wdXQgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGxvY2F0aW9uRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtLmlucHV0XCIpO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGxvY2F0aW9uRm9ybS5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLnN1Ym1pdFwiKTtcbiAgICBjb25zdCBsb2NhdGlvbklucHV0ID0gbG9jYXRpb25Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5sb2NhdGlvblwiKTtcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwYWdlTWFuYWdlci5uZXdGb3JlY2FzdChsb2NhdGlvbklucHV0LnZhbHVlKTtcbiAgICAgIGxvY2F0aW9uSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gZnVuY3Rpb25zIGZvciB3ZWF0aGVyIGluZm8gcmVuZGVyaW5nXG4gIGNvbnN0IHJlbmRlckNvbnRlbnRDb250YWluZXJzID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImNvbnRlbnQgY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGxvY2F0aW9uQ29udGFpbmVyID0gcmVuZGVyTG9jYXRpb25UaXRsZUNvbnRhaW5lcigpOyAvLyByZW5kZXIgY29udGFpbmVyIHRvIHB1dCBsb2NhdGlvbiB0aXRsZVxuICAgIGNvbnN0IHRvZGF5V2VhdGhlckNvbnRhaW5lciA9IHJlbmRlclRvZGF5V2VhdGhlckNvbnRhaW5lcigpOyAvLyByZW5kZXJzIGxvdHMgaW5mbyBvbiBjdXJyZW50IHdlYXRoZXIgKyBsb2NhbCB0aW1lXG4gICAgY29uc3QgZm9yZWNhc3RCb3hlcyA9IHJlbmRlckZvcmVjYXN0Qm94ZXMoKTsgLy8gcmVuZGVyIHRoZSA3IGJveGVzICh3aXRoIGVtcHR5IGNvbnRlbnQpIGZvciBmb3JlY2FzdFxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKGxvY2F0aW9uQ29udGFpbmVyLHRvZGF5V2VhdGhlckNvbnRhaW5lciwgZm9yZWNhc3RCb3hlcyk7XG4gICAgcmV0dXJuIGNvbnRlbnRDb250YWluZXI7XG4gIH1cblxuICBsZXQgbG9jYXRpb25UaXRsZTsgLy8gcHVibGljIHZhcmlhYmxlcyB0byBtaW5pbWl6ZSBkaXJlY3QgRE9NIGFjY2Vzc1xuICBjb25zdCByZW5kZXJMb2NhdGlvblRpdGxlQ29udGFpbmVyID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBsb2NhdGlvblRpdGxlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImxvY2F0aW9uIHRpdGxlIGNvbnRhaW5lclwiKTtcbiAgICBsb2NhdGlvblRpdGxlID0gY3JlYXRlRWxlbWVudChcImgyXCIsXCJsb2NhdGlvbiB0aXRsZVwiLFwiZGVmYXVsdCBsb2NhdGlvblwiKTtcbiAgICBsb2NhdGlvblRpdGxlQ29udGFpbmVyLmFwcGVuZChsb2NhdGlvblRpdGxlKTtcbiAgICByZXR1cm4gbG9jYXRpb25UaXRsZUNvbnRhaW5lcjtcbiAgfVxuXG4gIGxldCB0b2RheVdlYXRoZXJDb250YWluZXI7XG4gIGNvbnN0IHJlbmRlclRvZGF5V2VhdGhlckNvbnRhaW5lciA9IGZ1bmN0aW9uKCl7XG4gICAgdG9kYXlXZWF0aGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRvZGF5IHdlYXRoZXIgY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRvZGF5V2VhdGhlckNvbmRpdGlvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJjb25kaXRpb24gY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGNvbmRpdGlvbkljb24gPSBjcmVhdGVJbWFnZShcIlwiLCBcImNvbmRpdGlvbiBpY29uXCIpO1xuICAgIGNvbnN0IGNvbmRpdGlvblRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImNvbmRpdGlvbiB0ZXh0XCIpO1xuICAgIHRvZGF5V2VhdGhlckNvbmRpdGlvbkNvbnRhaW5lci5hcHBlbmQoY29uZGl0aW9uSWNvbiwgY29uZGl0aW9uVGV4dCk7XG4gICAgY29uc3QgdG9kYXlXZWF0aGVyVGVtcENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0ZW1wIGNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0ZW1wVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJ0ZW1wIHRleHRcIik7XG4gICAgY29uc3QgdGVtcG1heFRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLFwidGVtcG1heCB0ZXh0XCIpO1xuICAgIGNvbnN0IHRlbXBtaW5UZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIixcInRlbXBtaW4gdGV4dFwiKTtcbiAgICB0b2RheVdlYXRoZXJUZW1wQ29udGFpbmVyLmFwcGVuZCh0ZW1wVGV4dCwgdGVtcG1heFRleHQsIHRlbXBtaW5UZXh0KTtcbiAgICBjb25zdCB0b2RheVdlYXRoZXJUaW1lQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRpbWUgY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGRheVRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImRheSB0ZXh0XCIpO1xuICAgIGNvbnN0IHRpbWVUZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIixcInRpbWUgdGV4dFwiKTtcbiAgICB0b2RheVdlYXRoZXJUaW1lQ29udGFpbmVyLmFwcGVuZChkYXlUZXh0LCB0aW1lVGV4dCk7XG4gICAgY29uc3QgdG9kYXlXZWF0aGVyUHJlY2lwcHJvYkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcmVjaXAgY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHByZWNpcFRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInByZWNpcCB0ZXh0XCIpO1xuICAgIHRvZGF5V2VhdGhlclByZWNpcHByb2JDb250YWluZXIuYXBwZW5kKHByZWNpcFRleHQpO1xuICAgIHRvZGF5V2VhdGhlckNvbnRhaW5lci5hcHBlbmQodG9kYXlXZWF0aGVyQ29uZGl0aW9uQ29udGFpbmVyLHRvZGF5V2VhdGhlclRlbXBDb250YWluZXIsdG9kYXlXZWF0aGVyVGltZUNvbnRhaW5lcix0b2RheVdlYXRoZXJQcmVjaXBwcm9iQ29udGFpbmVyKTtcbiAgICByZXR1cm4gdG9kYXlXZWF0aGVyQ29udGFpbmVyO1xuICB9XG5cbiAgbGV0IGZvcmVjYXN0Qm94ZXMgPSBbXTtcbiAgY29uc3QgcmVuZGVyRm9yZWNhc3RCb3hlcyA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZm9yZWNhc3RCb3hDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZm9yZWNhc3QgYm94IGNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBmb3JlY2FzdEJveCA9IHJlbmRlckZvcmVjYXN0Qm94KCk7XG4gICAgZm9yZWNhc3RCb3hlc1swXSA9IGZvcmVjYXN0Qm94O1xuICAgIGZvcmVjYXN0Qm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcmVjYXN0Qm94KTtcbiAgICBmb3IgKGxldCBpPTE7IGkgPDc7IGkrKyl7XG4gICAgICBjb25zdCBmb3JlY2FzdEJveENsb25lID0gZm9yZWNhc3RCb3guY2xvbmVOb2RlKHRydWUpO1xuICAgICAgZm9yZWNhc3RCb3hlc1tpXSA9IGZvcmVjYXN0Qm94Q2xvbmU7XG4gICAgICBmb3JlY2FzdEJveENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdEJveENsb25lKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvcmVjYXN0Qm94Q29udGFpbmVyO1xuICB9XG5cbiAgY29uc3QgcmVuZGVyRm9yZWNhc3RCb3ggPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGZvcmVjYXN0Qm94ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLFwiZm9yZWNhc3QgYm94XCIpO1xuICAgIGNvbnN0IGNvbnRlbnRCb3hlcyA9IHJlbmRlckZvcmVjYXN0Q29udGVudEJveGVzKCk7IC8vIHRoaXMgd2lsbCBjcmVhdGUgY29udGFpbmVycyBmb3IgaW5mbyBvZiB0ZW1wLCBtaW4sIG1heCwgcHJlY2lwLCBldGNcbiAgICBmb3JlY2FzdEJveC5hcHBlbmQoLi4uT2JqZWN0LnZhbHVlcyhjb250ZW50Qm94ZXMpKTsgLy8gYXBwZW5kcyBlYWNoIG5vZGUgd2l0aGluIGNvbnRlbnRCb3hlc09iamVjdFxuICAgIHJldHVybiBmb3JlY2FzdEJveDtcbiAgfVxuXG4gIC8vIGNyZWF0ZXMgY29udGFpbmVycyBvciBIVE1MIGVsZW1lbnRzIHdpdGhpbiB0aGUgZm9yZWNhc3QgYm94ZXNcbiAgLy8gLi4uZm9yIGRheU9mV2VlaywgbW9udGhEYXksIHRlbXAsIHRlbXBtaW4sIHRlbXBtYXgsIGNvbmRpdGlvbnMsIHByZWNpcHByb2JcbiAgY29uc3QgcmVuZGVyRm9yZWNhc3RDb250ZW50Qm94ZXMgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IHRpbWVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidGltZSBjb250YWluZXJcIik7XG4gICAgY29uc3QgZGF5QW5kRGF0ZVRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImRheUFuZERhdGUgdGV4dFwiKTtcbiAgICB0aW1lQ29udGFpbmVyLmFwcGVuZChkYXlBbmREYXRlVGV4dCk7XG4gICAgY29uc3QgdGVtcENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0ZW1wIGNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0ZW1wVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJ0ZW1wIHRleHRcIik7XG4gICAgY29uc3QgdGVtcG1pblRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLFwidGVtcG1pbiB0ZXh0XCIpO1xuICAgIGNvbnN0IHRlbXBtYXhUZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIixcInRlbXBtYXggdGV4dFwiKTtcbiAgICB0ZW1wQ29udGFpbmVyLmFwcGVuZCh0ZW1wVGV4dCwgdGVtcG1pblRleHQsIHRlbXBtYXhUZXh0KTtcbiAgICBjb25zdCBjb25kaXRpb25zQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImNvbmRpdGlvbnMgY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGNvbmRpdGlvbnNJbWFnZSA9IGNyZWF0ZUltYWdlKFwiXCIsXCJjb25kaXRpb25zIGltYWdlXCIpOyAvLyBtdXN0IGNvbnZlcnQgY29uZGl0aW9ucyB0ZXh0IHRvIGFuIGltYWdlIHNyYyBpbiBlZGl0aW5nIGxhdGVyXG4gICAgY29uc3QgcHJlY2lwcHJvYlRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInByZWNpcHByb2IgdGV4dFwiKTtcbiAgICBjb25kaXRpb25zQ29udGFpbmVyLmFwcGVuZChjb25kaXRpb25zSW1hZ2UsIHByZWNpcHByb2JUZXh0KTtcbiAgICByZXR1cm4ge3RpbWVDb250YWluZXIsIHRlbXBDb250YWluZXIsIGNvbmRpdGlvbnNDb250YWluZXJ9O1xuICB9XG5cbiAgLy8gRXZlcnl0aGluZyBiZWxvdyB0aGlzIGlzIG1lYW50IHRvIGVkaXQgZXhpc3RpbmcgZWxlbWVudHMgLy9cblxuICAvLyBlZGl0cyB0ZXh0IGNvbnRlbnQgdG8gc2hvdyB3ZWF0aGVyIGluZm9ybWF0aW9uXG4gIC8vIG9yZ2FuaXplcyB3ZWF0aGVySW5mbyB0byBzZW5kIG9ubHkgcmVsZXZhbnQgaW5mbyB0byBlYWNoIGZ1bmN0aW9uXG4gIGNvbnN0IGVkaXRXZWF0aGVyID0gZnVuY3Rpb24od2VhdGhlckluZm8pe1xuICAgIGVkaXRMb2NhdGlvblRpdGxlKHdlYXRoZXJJbmZvLnJlc29sdmVkQWRkcmVzcyk7XG4gICAgZWRpdFRvZGF5V2VhdGhlcih3ZWF0aGVySW5mby50em9mZnNldCwgd2VhdGhlckluZm8uZGF0ZUFycmF5WzBdLHdlYXRoZXJJbmZvLnRlbXBBcnJheVswXSwgd2VhdGhlckluZm8ucHJlY2lwQXJyYXlbMF0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpPDc7IGkrKyl7XG4gICAgICBlZGl0Rm9yZWNhc3RCb3goaSwgd2VhdGhlckluZm8uZGF0ZUFycmF5W2ldLCB3ZWF0aGVySW5mby50ZW1wQXJyYXlbaV0sIHdlYXRoZXJJbmZvLnByZWNpcEFycmF5W2ldKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJUaGlzIGlzIHRoZSB3ZWF0aGVyIHRoYXQgcmVuZGVyLmpzIHNlZXNcIik7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckluZm8pO1xuICB9XG5cbiAgY29uc3QgZWRpdExvY2F0aW9uVGl0bGUgPSBmdW5jdGlvbiAocmVzb2x2ZWRBZGRyZXNzKXtcbiAgICBsb2NhdGlvblRpdGxlLnRleHRDb250ZW50ID0gcmVzb2x2ZWRBZGRyZXNzO1xuICB9XG5cbiAgY29uc3QgREVHUkVFX0ZfU1lNQk9MID0gXCLCsEZcIjtcbiAgY29uc3QgREVHUkVFX0NfU1lNQk9MID0gXCLCsENcIjtcbiAgY29uc3QgREVHUkVFX1NZTUJPTCA9IFwiwrBcIjtcbiAgY29uc3QgZWRpdFRvZGF5V2VhdGhlciA9IGZ1bmN0aW9uKHR6b2Zmc2V0LCBkYXRlT2JqZWN0LCB0ZW1wT2JqZWN0LCBwcmVjaXBPYmplY3Qpe1xuICAgIGNvbnN0IGNvbmRpdGlvblRlbXBUaW1lUHJlY2lwQ29udGFpbmVycyA9IHRvZGF5V2VhdGhlckNvbnRhaW5lci5jaGlsZHJlbjtcbiAgICBlZGl0Q2xhc3NDaGlsZEltYWdlKGNvbmRpdGlvblRlbXBUaW1lUHJlY2lwQ29udGFpbmVyc1swXSwgXCJpY29uXCIsIHByZWNpcE9iamVjdC5jb25kaXRpb25zKTtcbiAgICBlZGl0Q2xhc3NDaGlsZChjb25kaXRpb25UZW1wVGltZVByZWNpcENvbnRhaW5lcnNbMF0sIFwidGV4dFwiLCBwcmVjaXBPYmplY3QuY29uZGl0aW9ucyk7XG4gICAgLy8gZ29lcyB0aHJvdWdoIGVhY2gga2V5LCB2YWx1ZSBwYWlyIGluIHRlbXBPYmplY3QgYW5kIHVwZGF0ZXMgdGV4dCBvbiBub2Rlc1xuICAgIGVkaXRDbGFzc0NoaWxkKGNvbmRpdGlvblRlbXBUaW1lUHJlY2lwQ29udGFpbmVyc1sxXSwgXCJ0ZW1wXCIsIGAke3RlbXBPYmplY3QudGVtcH0ke0RFR1JFRV9GX1NZTUJPTH1gKTtcbiAgICBlZGl0Q2xhc3NDaGlsZChjb25kaXRpb25UZW1wVGltZVByZWNpcENvbnRhaW5lcnNbMV0sIFwidGVtcG1heFwiLCBgTWF4OiAke3RlbXBPYmplY3QudGVtcG1heH0ke0RFR1JFRV9GX1NZTUJPTH1gKTtcbiAgICBlZGl0Q2xhc3NDaGlsZChjb25kaXRpb25UZW1wVGltZVByZWNpcENvbnRhaW5lcnNbMV0sIFwidGVtcG1pblwiLCBgTWluOiAke3RlbXBPYmplY3QudGVtcG1pbn0ke0RFR1JFRV9GX1NZTUJPTH1gKTtcbiAgICBlZGl0Q2xhc3NDaGlsZChjb25kaXRpb25UZW1wVGltZVByZWNpcENvbnRhaW5lcnNbMl0sIFwidGV4dFwiLCBkYXRlT2JqZWN0LmRheUFuZERhdGUpO1xuICAgIGVkaXRDbGFzc0NoaWxkKGNvbmRpdGlvblRlbXBUaW1lUHJlY2lwQ29udGFpbmVyc1syXSwgXCJ0ZXh0XCIsIGNhbGN1bGF0ZUxvY2FsVGltZSh0em9mZnNldCkpO1xuICAgIGVkaXRDbGFzc0NoaWxkKGNvbmRpdGlvblRlbXBUaW1lUHJlY2lwQ29udGFpbmVyc1szXSwgXCJwcmVjaXBcIiwgYFByZWNpcGl0YXRpb246ICR7cHJlY2lwT2JqZWN0LnByZWNpcHByb2J9JWApO1xuICB9XG5cbiAgLy8gbWFudWFsbHkgY2FsY3VsYXRlIHRoZSBsb2NhbCB0aW1lIGF0IHRoZSBsb2NhdGlvbiB1c2luZyBVVEMgdGltZSArLy0gdHpvZmZzZXRcbiAgLy8gcmV0dXJucyBzdHJpbmcgd2l0aCBmb3JtIEhIOk1NIEFNIChvciBQTSlcbiAgY29uc3QgY2FsY3VsYXRlTG9jYWxUaW1lID0gZnVuY3Rpb24odHpvZmZzZXQpe1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAvLyByZXR1cm5zIGxvY2FsIGhvdXIgZnJvbSAwLTIzXG4gICAgY29uc3QgbG9jYWxIb3VyVW5mb3JtYXR0ZWQgPSAoY3VycmVudERhdGUuZ2V0VVRDSG91cnMoKSt0em9mZnNldCklMjQ7XG4gICAgbGV0IEFNUE1TdHJpbmc7XG4gICAgaWYgKE1hdGgudHJ1bmMobG9jYWxIb3VyVW5mb3JtYXR0ZWQvMTIpID09IDApe1xuICAgICAgQU1QTVN0cmluZyA9IFwiQU1cIjtcbiAgICB9IGVsc2V7XG4gICAgICBBTVBNU3RyaW5nID0gXCJQTVwiO1xuICAgIH1cbiAgICBsZXQgbG9jYWxIb3VyID0gKGxvY2FsSG91clVuZm9ybWF0dGVkKSUxMjsgLy8gY29udmVydCAwLTIzIHRvIDAtMTFcbiAgICBpZiAobG9jYWxIb3VyID09IDApe1xuICAgICAgbG9jYWxIb3VyID0gMTI7XG4gICAgfVxuICAgIGNvbnN0IGxvY2FsTWludXRlcyA9IGN1cnJlbnREYXRlLnRvVGltZVN0cmluZygpLnNsaWNlKDIsNSk7IC8vIGNvbnRhaW5zIFwiOk1NXCJcbiAgICBjb25zdCBsb2NhbFRpbWVTdHJpbmcgPSBgJHtsb2NhbEhvdXJ9JHtsb2NhbE1pbnV0ZXN9ICR7QU1QTVN0cmluZ31gO1xuICAgIHJldHVybiBsb2NhbFRpbWVTdHJpbmc7XG4gIH1cblxuICAvLyBlZGl0cyBpbmRpdmlkdWFsIGJveCBhbGwgYXQgb25jZSB0byByZWR1Y2UgYW1vdW50IG9mIHJlZmVyZW5jZXMgdG8gbm9kZXNcbiAgLy8gUGFyYW1ldGVyczogaW5kZXgsIHttb250aERheSwgZGF5T2ZXZWVrfSwge3RlbXAsIHRlbXBtaW4sIHRlbXBtYXh9LCB7cHJlY2lwcHJvYiwgY29uZGl0aW9uc31cbiAgLy8gdGltZVRlbXBDb25kaXRpb25zQ29udGFpbmVycyBpcyBqdXN0IGNoaWxkIG5vZGVzIG9mIHRoZSBmb3JlY2FzdCBib3hcbiAgY29uc3QgZWRpdEZvcmVjYXN0Qm94ID0gZnVuY3Rpb24oaW5kZXgsIGRhdGVPYmplY3QsIHRlbXBPYmplY3QsIHByZWNpcE9iamVjdCl7XG4gICAgY29uc3QgdGltZVRlbXBDb25kaXRpb25zQ29udGFpbmVycyA9IGZvcmVjYXN0Qm94ZXNbaW5kZXhdLmNoaWxkcmVuO1xuICAgIC8vIGdvZXMgdGhyb3VnaCBlYWNoIGtleSwgdmFsdWUgcGFpciBpbiBkYXRlT2JqZWN0IGFuZCB1cGRhdGVzIHRleHQgb24gbm9kZXNcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkYXRlT2JqZWN0KSl7XG4gICAgICBlZGl0Q2xhc3NDaGlsZCh0aW1lVGVtcENvbmRpdGlvbnNDb250YWluZXJzWzBdLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgLy8gcmVwZWF0ZWQgZm9yIG90aGVyIG9iamVjdHMsIGJlY2F1c2UgbmVzdGVkIGxvb3BzIGNvbmZ1c2luZ1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRlbXBPYmplY3QpKXtcbiAgICAgIGVkaXRDbGFzc0NoaWxkKHRpbWVUZW1wQ29uZGl0aW9uc0NvbnRhaW5lcnNbMV0sIGtleSwgYCR7dmFsdWV9JHtERUdSRUVfU1lNQk9MfWApO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcmVjaXBPYmplY3QpKXtcbiAgICAgIGlmIChrZXkgPT0gXCJwcmVjaXBwcm9iXCIpe1xuICAgICAgICBlZGl0Q2xhc3NDaGlsZCh0aW1lVGVtcENvbmRpdGlvbnNDb250YWluZXJzWzJdLCBrZXksIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09IFwiY29uZGl0aW9uc1wiKXtcbiAgICAgICAgZWRpdENsYXNzQ2hpbGRJbWFnZSh0aW1lVGVtcENvbmRpdGlvbnNDb250YWluZXJzWzJdLCBrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGhlbHBlciBmdW5jdGlvbiB0aGF0IGVkaXRzIHRoZSB0ZXh0IG9mIGEgY2hpbGQgbm9kZSBnaXZlbiB0aGUgcGFyZW50IG5vZGUgYW5kIHRoZSBjaGlsZCBub2RlJ3MgY2xhc3NcbiAgLy8gd2hpY2ggY2hpbGQgbm9kZSBkZXRlcm1pbmVkIGJ5IGNsYXNzIGlkZW50aWZpZXJcbiAgY29uc3QgZWRpdENsYXNzQ2hpbGQgPSBmdW5jdGlvbihwYXJlbnROb2RlLCBjbGFzc0lkZW50aWZpZXIsIG5ld1RleHQpe1xuICAgIGNvbnN0IG5vZGVUb0NoYW5nZSA9IHBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NJZGVudGlmaWVyfWApO1xuICAgIG5vZGVUb0NoYW5nZS50ZXh0Q29udGVudCA9IG5ld1RleHQ7XG4gIH1cblxuICBjb25zdCBlZGl0Q2xhc3NDaGlsZEltYWdlID0gZnVuY3Rpb24ocGFyZW50Tm9kZSwgY2xhc3NJZGVudGlmaWVyLCBuZXdDb25kaXRpb25zKXtcbiAgICBjb25zdCBpbWFnZVNyYyA9IGNvbnZlcnRDb25kaXRpb25zVG9TcmMobmV3Q29uZGl0aW9ucyk7XG4gICAgY29uc3Qgbm9kZVRvQ2hhbmdlID0gcGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc0lkZW50aWZpZXJ9YCk7XG4gICAgbm9kZVRvQ2hhbmdlLnNyYyA9IGltYWdlU3JjO1xuICB9XG5cbiAgY29uc3QgY29udmVydENvbmRpdGlvbnNUb1NyYyA9IGZ1bmN0aW9uIChjb25kaXRpb25zU3RyaW5nKXtcbiAgICBpZiAoY29uZGl0aW9uc1N0cmluZy5pbmNsdWRlcyhcIkNsZWFyXCIpKXtcbiAgICAgIHJldHVybiBTdW5JY29uO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uc1N0cmluZy5pbmNsdWRlcyhcIlNub3dcIikpe1xuICAgICAgcmV0dXJuIFNub3dJY29uO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uc1N0cmluZy5pbmNsdWRlcyhcIlJhaW5cIikpe1xuICAgICAgcmV0dXJuIFJhaW5JY29uO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uc1N0cmluZy5pbmNsdWRlcyhcImNsb3VkeVwiKSl7XG4gICAgICByZXR1cm4gQ2xvdWRJY29uO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uc1N0cmluZy5pbmNsdWRlcyhcIk92ZXJjYXN0XCIpKXtcbiAgICAgIHJldHVybiBPdmVyY2FzdEljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYENvbmRpdGlvbiBpcyAke2NvbmRpdGlvbnNTdHJpbmd9IGFuZCBkb2VzIG5vdCBmaXQgYW55IGltYWdlLmApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGluaXQsIGVkaXRXZWF0aGVyIH07XG59KSgpO1xuXG5leHBvcnQgeyByZW5kZXJNYW5hZ2VyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9