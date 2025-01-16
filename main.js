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
    const tempminText = createElement("p","tempmin text");
    const tempmaxText = createElement("p","tempmax text");
    todayWeatherTempContainer.append(tempText, tempminText, tempmaxText);
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

  const editTodayWeather = function(tzoffset, dateObject, tempObject, precipObject){
    const conditionTempTimePrecipContainers = todayWeatherContainer.children;
    editClassChildImage(conditionTempTimePrecipContainers[0], "icon", precipObject.conditions);
    editClassChild(conditionTempTimePrecipContainers[0], "text", precipObject.conditions);
    // goes through each key, value pair in tempObject and updates text on nodes
    for (const [key, value] of Object.entries(tempObject)){
      editClassChild(conditionTempTimePrecipContainers[1], key, value);
    }
    editClassChild(conditionTempTimePrecipContainers[2], "text", dateObject.dayAndDate);
    editClassChild(conditionTempTimePrecipContainers[2], "text", calculateLocalTime(tzoffset));
    editClassChild(conditionTempTimePrecipContainers[3], "precip", precipObject.precipprob);
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
      editClassChild(timeTempConditionsContainers[1], key, value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFFBQVEsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksY0FBYyxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksY0FBYyxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sK0JBQStCLGlCQUFpQixHQUFHLE9BQU8sMkNBQTJDLHVDQUF1QywyQkFBMkIsMENBQTBDLDRCQUE0Qiw2QkFBNkIsR0FBRyxzQkFBc0IsZ0JBQWdCLGlCQUFpQixHQUFHLFVBQVUseURBQXlELEdBQUcsMkRBQTJELG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixHQUFHLCtEQUErRCxvQkFBb0IseUNBQXlDLGtDQUFrQyw0QkFBNEIsbUJBQW1CLG1DQUFtQyw2QkFBNkIsZ0JBQWdCLHFDQUFxQywyQkFBMkIsV0FBVyxPQUFPLGNBQWMsbUNBQW1DLE9BQU8sY0FBYyxtQ0FBbUMsT0FBTyxpQkFBaUIsbUNBQW1DLDBCQUEwQixPQUFPLEdBQUcsa0RBQWtELG1CQUFtQixxQ0FBcUMsc0NBQXNDLHNCQUFzQix3QkFBd0IsZ0NBQWdDLGtDQUFrQyxPQUFPLEdBQUcsbUJBQW1CO0FBQ3RoRTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2xGMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0RBQWtELGFBQWE7QUFDL0Q7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMEJBQTBCO0FBQ3RELDRCQUE0QiwwQkFBMEI7QUFDdEQsOEJBQThCLDBCQUEwQjtBQUN4RCx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZEO0FBQ0E7O0FBRXFDO0FBQ007O0FBRXJCOztBQUV0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQWE7QUFDckIsa0NBQWtDLCtDQUFVO0FBQzVDLFFBQVEscURBQWE7QUFDckI7O0FBRUE7QUFDQSxrQ0FBa0MsK0NBQVU7QUFDNUMsUUFBUSxxREFBYTtBQUNyQjs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRDtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUV5Qzs7QUFFQTtBQUNVO0FBQ0o7QUFDUjtBQUNHOztBQUUxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxrREFBVztBQUNqQjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQsaUVBQWlFO0FBQ2pFLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsTUFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RCx3REFBd0Q7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLEtBQUs7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRSwrQkFBK0IsVUFBVSxFQUFFLGNBQWMsRUFBRSxXQUFXO0FBQ3RFO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsb0JBQW9CLEdBQUcsdUJBQXVCLEdBQUc7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsZ0JBQWdCO0FBQ3RFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRCxnQkFBZ0I7QUFDdEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSw0Q0FBTztBQUNwQixNQUFNO0FBQ04sYUFBYSw2Q0FBUTtBQUNyQixNQUFNO0FBQ04sYUFBYSw4Q0FBUTtBQUNyQixNQUFNO0FBQ04sYUFBYSxzREFBUztBQUN0QixNQUFNO0FBQ04sYUFBYSwrQ0FBWTtBQUN6QixNQUFNO0FBQ04sb0NBQW9DLGtCQUFrQjtBQUN0RDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqUnpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnRleHR7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuKiB7XG4gICAgLS1kb2N1bWVudC1iYWNrZ3JvdW5kLWNvbG9yOiAjQjFBRkZGO1xuICAgIC0tYmFzZS1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZFOUQwO1xuICAgIC0tYnV0dG9uLWNvbG9yOiBwaW5rO1xuICAgIC0tY29udGVudC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRUQzO1xuICAgIC0tYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5oMSxcbmgyLFxuaDMsXG5wIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuOnJvb3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZG9jdW1lbnQtYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbi8qIHNlY3Rpb24gdG8gb3JnYW5pemUgbWFpbiBzZWN0aW9ucyBvZiBwYWdlICovXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogc3R5bGUgY3VycmVudCB3ZWF0aGVyIGFyZWEgKi9cbi50b2RheS53ZWF0aGVyLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblxuICAgIC5jb25kaXRpb257XG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMjtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuXG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGVtcHtcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xuICAgIH1cblxuICAgIC50aW1le1xuICAgICAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XG4gICAgfVxuXG4gICAgLnByZWNpcCB7XG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDtcbiAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xuICAgIH1cbn1cblxuLyogc3R5bGUgZm9yZWNhc3QgKi9cbi5mb3JlY2FzdC5ib3guY29udGFpbmVye1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyOiAycHggdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAgIC5mb3JlY2FzdC5ib3h7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZ0NBQWdDO0lBQ2hDLG9CQUFvQjtJQUNwQixtQ0FBbUM7SUFDbkMscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7QUFFQTs7OztJQUlJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrREFBa0Q7QUFDdEQ7O0FBRUEsOENBQThDO0FBQzlDO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBLCtCQUErQjtBQUMvQjtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCLHFCQUFxQjs7SUFFckI7UUFDSSx3QkFBd0I7UUFDeEIsa0JBQWtCOztRQUVsQjtZQUNJLHNCQUFzQjtZQUN0QixZQUFZO1FBQ2hCO0lBQ0o7O0lBRUE7UUFDSSx3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSx3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSx3QkFBd0I7UUFDeEIsZUFBZTtJQUNuQjtBQUNKOztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsK0JBQStCOztJQUUvQjtRQUNJLGFBQWE7UUFDYixxQkFBcUI7UUFDckIsdUJBQXVCO0lBQzNCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRleHR7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbioge1xcbiAgICAtLWRvY3VtZW50LWJhY2tncm91bmQtY29sb3I6ICNCMUFGRkY7XFxuICAgIC0tYmFzZS1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZFOUQwO1xcbiAgICAtLWJ1dHRvbi1jb2xvcjogcGluaztcXG4gICAgLS1jb250ZW50LWJhY2tncm91bmQtY29sb3I6ICNGRkZFRDM7XFxuICAgIC0tYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxucCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRvY3VtZW50LWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4vKiBzZWN0aW9uIHRvIG9yZ2FuaXplIG1haW4gc2VjdGlvbnMgb2YgcGFnZSAqL1xcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogc3R5bGUgY3VycmVudCB3ZWF0aGVyIGFyZWEgKi9cXG4udG9kYXkud2VhdGhlci5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgICAuY29uZGl0aW9ue1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyO1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbiAgICAgICAgaW1ne1xcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC50ZW1we1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcbiAgICB9XFxuXFxuICAgIC50aW1le1xcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcbiAgICB9XFxuXFxuICAgIC5wcmVjaXAge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0O1xcbiAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICB9XFxufVxcblxcbi8qIHN0eWxlIGZvcmVjYXN0ICovXFxuLmZvcmVjYXN0LmJveC5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXI6IDJweCB2YXIoLS1ib3JkZXItY29sb3IpO1xcblxcbiAgICAuZm9yZWNhc3QuYm94e1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBTVE9SRSBhbmQgU0VUIGxvY2F0aW9uXG4vLyBhbmQgR0VUIHdlYXRoZXIgaW5mbyBiYXNlZCBvbiBsb2NhdGlvblxuY29uc29sZS5sb2coXCIqTU9EVUxFIENIRUNLKiBmcm9tIGFwaS5qc1wiKTtcblxuY29uc3QgYXBpTWFuYWdlciA9IChmdW5jdGlvbigpe1xuICAgIGxldCBhcGlLZXkgPSBcImh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lL2xvbmRvbj9rZXk9WVNMTEs3SkRIVTdOQVBBTFJTNERQWjlQOVwiXG4gICAgY29uc3QgYXBpS2V5U3RhcnQgPSBcImh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lL1wiXG4gICAgY29uc3QgYXBpS2V5RW5kID0gXCI/a2V5PVlTTExLN0pESFU3TkFQQUxSUzREUFo5UDlcIlxuXG4gICAgbGV0IGxvY2F0aW9uID0gJ2xvbmRvbidcbiAgICBjb25zdCBzZXRMb2NhdGlvbiA9IGZ1bmN0aW9uKGlucHV0TG9jYXRpb24pe1xuICAgICAgICBsb2NhdGlvbiA9IGlucHV0TG9jYXRpb247XG4gICAgICAgIHVwZGF0ZUFwaUtleSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2F0aW9uIGlzIG5vdyBcIiArIGxvY2F0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVBcGlLZXkgPSBmdW5jdGlvbigpe1xuICAgICAgICBhcGlLZXkgPSBhcGlLZXlTdGFydCArIGxvY2F0aW9uICsgYXBpS2V5RW5kO1xuICAgICAgICByZXR1cm4gYXBpS2V5O1xuICAgIH1cblxuICAgIGNvbnN0IHJlcXVlc3RBbmRQcm9jZXNzQXBpID0gYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpS2V5LCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgZGlyZWN0IEFQSSByZXNwb25zZVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlSlNPTk9iamVjdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgLy8gcmV0dXJuZWQgYXMgYSBKU09OIG9iamVjdFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGlzIEpTT04gb2JqZWN0IGZyb20gQVBJXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VKU09OT2JqZWN0KTtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZEpTT04gPSBwcm9jZXNzSlNPTihyZXNwb25zZUpTT05PYmplY3QpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGlzIGNsZWFuZWQgdXAgb2JqZWN0XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvY2Vzc2VkSlNPTik7XG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzc2VkSlNPTjtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGZXRjaCBlcnJvcjogJyArIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5lZWQgdG8gZ2V0IFwicmVzb2x2ZWRBZGRyZXNzXCIsIFwidHpvZmZzZXRcIiBhbmQuLi5cbiAgICAvLyBGb3IgZWFjaCBcImRheXNcIiBmb3IgNyBkYXlzLCBuZWVkIHRvIGdldCBcImRhdGV0aW1lXCIsXCJ0ZW1wXCIsXCJ0ZW1wbWF4XCIsXCJ0ZW1wbWluXCIsXCJwcmVjaXBwcm9iXCIsXCJjb25kaXRpb25zXCJcbiAgICBjb25zdCBwcm9jZXNzSlNPTiA9IGZ1bmN0aW9uICh3ZWF0aGVySlNPTk9iamVjdCl7XG4gICAgICAgIGxldCByZXNvbHZlZEFkZHJlc3MgPSB3ZWF0aGVySlNPTk9iamVjdC5yZXNvbHZlZEFkZHJlc3M7XG4gICAgICAgIGxldCB0em9mZnNldCA9IHdlYXRoZXJKU09OT2JqZWN0LnR6b2Zmc2V0O1xuICAgICAgICBsZXQgZGF0ZUFycmF5ID0gW107IC8vIGFycmF5IG9mIG9iamVjdHMgd2l0aCB7ZGF5QW5kRGF0ZX1cbiAgICAgICAgbGV0IHRlbXBBcnJheSA9IFtdOyAvLyBhcnJheSBvZiBvYmplY3RzIHdpdGgge3RlbXAsdGVtcG1heCx0ZW1wbWlufVxuICAgICAgICBsZXQgcHJlY2lwQXJyYXkgPSBbXTsgLy8gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIHtwcmVjaXAsY29uZGl0aW9ufVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKyl7XG4gICAgICAgICAgICBsZXQgZGF5SlNPTiA9IHdlYXRoZXJKU09OT2JqZWN0LmRheXNbaV07XG4gICAgICAgICAgICBjb25zdCBkYXRlT2JqZWN0ID0gY29udmVydERhdGUoZGF5SlNPTi5kYXRldGltZSk7XG4gICAgICAgICAgICBkYXRlQXJyYXkucHVzaChkYXRlT2JqZWN0KTtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBPYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgdGVtcDogZGF5SlNPTi50ZW1wLFxuICAgICAgICAgICAgICAgIHRlbXBtaW46IGRheUpTT04udGVtcG1pbixcbiAgICAgICAgICAgICAgICB0ZW1wbWF4OiBkYXlKU09OLnRlbXBtYXgsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZW1wQXJyYXkucHVzaCh0ZW1wT2JqZWN0KTtcbiAgICAgICAgICAgIGNvbnN0IHByZWNpcE9iamVjdCA9IHtcbiAgICAgICAgICAgICAgICBwcmVjaXBwcm9iOiBkYXlKU09OLnByZWNpcHByb2IsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uczogZGF5SlNPTi5jb25kaXRpb25zLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJlY2lwQXJyYXkucHVzaChwcmVjaXBPYmplY3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7cmVzb2x2ZWRBZGRyZXNzLCB0em9mZnNldCwgZGF0ZUFycmF5LCB0ZW1wQXJyYXksIHByZWNpcEFycmF5fVxuICAgIH1cblxuICAgIC8vIGNvbnZlcnRzIFlZWVktTU0tREQgdG8gRGF5T2ZXZWVrIERheSAobGlrZSBXZWQgMTIpIHVzaW5nIERhdGUgb2JqZWN0c1xuICAgIGNvbnN0IGNvbnZlcnREYXRlID0gZnVuY3Rpb24oZGF0ZVRpbWUpe1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVRpbWUpO1xuICAgICAgICBsZXQgZGF0ZVN0cmluZyA9IGRhdGUudG9EYXRlU3RyaW5nKCk7IC8vIG91dHB1dHMgYXMgV2VkIEp1bCBERCBZWVlZXG4gICAgICAgIGNvbnN0IGRheU9mTW9udGggPSBkYXRlU3RyaW5nLnNsaWNlKDgsMTApO1xuICAgICAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlU3RyaW5nLnNsaWNlKDAsMyk7XG4gICAgICAgIGNvbnN0IGRheUFuZERhdGUgPSBkYXlPZldlZWsgKyBcIiBcIiArIGRheU9mTW9udGg7XG4gICAgICAgIHJldHVybiB7ZGF5QW5kRGF0ZX07XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0V2VhdGhlciA9IGZ1bmN0aW9uKGlucHV0TG9jYXRpb24pe1xuICAgICAgICBzZXRMb2NhdGlvbihpbnB1dExvY2F0aW9uKTtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkV2VhdGhlciA9IHJlcXVlc3RBbmRQcm9jZXNzQXBpKCk7XG4gICAgICAgIHJldHVybiBwcm9jZXNzZWRXZWF0aGVyO1xuICAgIH1cblxuICAgIHJldHVybiB7Z2V0V2VhdGhlciwgc2V0TG9jYXRpb259XG59KSgpO1xuXG5leHBvcnQge2FwaU1hbmFnZXJ9OyIsIi8vIGluaXRpYWxpemVzIHBhZ2Vcbi8vIHByb2Nlc3NlcyBldmVudCBsaXN0ZW5lcnMgZnJvbSByZW5kZXIuanMgYW5kIGNhbGxzIGFwaS5qcyBmdW5jdGlvbnNcblxuaW1wb3J0IHsgYXBpTWFuYWdlciB9IGZyb20gXCIuL2FwaS5qc1wiXG5pbXBvcnQgeyByZW5kZXJNYW5hZ2VyIH0gZnJvbSBcIi4vcmVuZGVyLmpzXCJcblxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmNvbnNvbGUubG9nKFwiKk1PRFVMRSBDSEVDSyogZnJvbSBpbmRleC5qc1wiKTtcblxuY29uc3QgcGFnZU1hbmFnZXIgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGRlZmF1bHRMb2NhdGlvbiA9IFwibG9uZG9uXCJcbiAgICBcbiAgICBjb25zdCBpbml0ID0gYXN5bmMgZnVuY3Rpb24oKXtcbiAgICAgICAgcmVuZGVyTWFuYWdlci5pbml0KCk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJJbmZvID0gYXdhaXQgYXBpTWFuYWdlci5nZXRXZWF0aGVyKGRlZmF1bHRMb2NhdGlvbik7XG4gICAgICAgIHJlbmRlck1hbmFnZXIuZWRpdFdlYXRoZXIod2VhdGhlckluZm8pO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0ZvcmVjYXN0ID0gYXN5bmMgZnVuY3Rpb24oaW5wdXRMb2NhdGlvbil7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJJbmZvID0gYXdhaXQgYXBpTWFuYWdlci5nZXRXZWF0aGVyKGlucHV0TG9jYXRpb24pO1xuICAgICAgICByZW5kZXJNYW5hZ2VyLmVkaXRXZWF0aGVyKHdlYXRoZXJJbmZvKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2luaXQsIG5ld0ZvcmVjYXN0fTtcbn0oKTtcblxuLy8gVEVNUE9SQVJJTFkgYXR0YWNoIHRvIHdpbmRvdyBvYmplY3QgdG8gdGVzdCBuZXdGb3JlY2FzdFxud2luZG93LnBhZ2VNYW5hZ2VyID0gcGFnZU1hbmFnZXI7XG5cbnBhZ2VNYW5hZ2VyLmluaXQoKTtcblxuZXhwb3J0IHtwYWdlTWFuYWdlcn07IiwiLy8gbW9kdWxlIHN0cmljdGx5IGZvciBkaXNwbGF5aW5nIGVsZW1lbnRzXG4vLyBhbmQgYmluZGluZyBldmVudCBsaXN0ZW5lcnMgKHByb2Nlc3NpbmcgZG9uZSBlbHNld2hlcmUpXG5cbi8vIFwicmVuZGVyXCIgbWVhbnMgdG8gY3JlYXRlIGVsZW1lbnQgYW5kIGFsd2F5cyByZXR1cm5zIGFuIGVsZW1lbnRcbi8vIFwiZWRpdFwiIG1lYW5zIHRvIGNoYW5nZSB0ZXh0IG9yIHNvbWV0aGluZyBlbHNlIGFib3V0IGV4aXN0aW5nIGVsZW1lbnRcbi8vIFwiYXBwZW5kXCIgbWVhbnMgdG8gYXR0YWNoIGVsZW1lbnRzIHRvIGVhY2hvdGhlciB3aXRob3V0IHJldHVybmluZyBhbiBlbGVtZW50IChhdm9pZCB1c2luZyBleGNlcHQgYXQgaGlnaGVzdCBsZXZlbClcblxuaW1wb3J0IHsgcGFnZU1hbmFnZXIgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5pbXBvcnQgU25vd0ljb24gZnJvbSBcIi4vaW1hZ2VzL3Nub3cucG5nXCI7XG5pbXBvcnQgQ2xvdWRJY29uIGZyb20gXCIuL2ltYWdlcy9wYXJ0bHktY2xvdWR5LnBuZ1wiO1xuaW1wb3J0IE92ZXJjYXN0SWNvbiBmcm9tIFwiLi9pbWFnZXMvY2xvdWRzLnBuZ1wiO1xuaW1wb3J0IFN1bkljb24gZnJvbSBcIi4vaW1hZ2VzL3N1bi5wbmdcIjtcbmltcG9ydCBSYWluSWNvbiBmcm9tIFwiLi9pbWFnZXMvcmFpbnkucG5nXCI7XG5cbmNvbnNvbGUubG9nKFwiKk1PRFVMRSBDSEVDSyogZnJvbSByZW5kZXIuanNcIik7XG5cbmNvbnN0IHJlbmRlck1hbmFnZXIgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyTG9jYXRpb25JbnB1dCgpKTtcbiAgICAvL3JlbmRlckhlYWRlcigpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyQ29udGVudENvbnRhaW5lcnMoKSk7IC8vIHJlbmRlciB0aGUgYm94ZXMgdG8gcHV0IGZvcmVjYXN0IGluZm9cbiAgICBiaW5kTG9jYXRpb25JbnB1dCgpO1xuICB9O1xuXG4gIC8vIGhlbHBlciBmdW5jdGlvbnMgdG8gZWFzaWx5IGNyZWF0ZSBET00gZWxlbWVudHNcblxuICBjb25zdCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHRhZywgY2xhc3NBdHRyaWJ1dGUsIGlubmVyVGV4dCkge1xuICAgIGNvbnN0IGNyZWF0ZWRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGlmIChjbGFzc0F0dHJpYnV0ZSAhPT0gdW5kZWZpbmVkICYmIGNsYXNzQXR0cmlidXRlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzcGxpdENsYXNzU3RyaW5nc0FycmF5ID0gY2xhc3NBdHRyaWJ1dGUuc3BsaXQoXCIgXCIpO1xuICAgICAgZm9yIChsZXQgc2luZ2xlQ2xhc3Mgb2Ygc3BsaXRDbGFzc1N0cmluZ3NBcnJheSkge1xuICAgICAgICBjcmVhdGVkRWxlbWVudC5jbGFzc0xpc3QuYWRkKHNpbmdsZUNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlubmVyVGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjcmVhdGVkRWxlbWVudC5pbm5lclRleHQgPSBpbm5lclRleHQ7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVkRWxlbWVudDtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVJbWFnZSA9IGZ1bmN0aW9uIChzcmMsIGNsYXNzU3RyaW5nLCBhbHRUZXh0KSB7XG4gICAgY29uc3QgaW1hZ2UgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIGNsYXNzU3RyaW5nKTtcbiAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgaW1hZ2UuYWx0ID0gYWx0VGV4dDtcbiAgICBpbWFnZS5zdHlsZS53aWR0aCA9IFwiMjlweFwiO1xuICAgIHJldHVybiBpbWFnZTtcbiAgfTtcblxuICAvLyBmdW5jdGlvbnMgZm9yIHJlbmRlcmluZyB0aGUgaW5wdXQgZm9yIGxvY2F0aW9uXG4gIGNvbnN0IHJlbmRlckxvY2F0aW9uSW5wdXQgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZm9ybSBjb250YWluZXJcIik7XG4gICAgY29uc3Qgc2VhcmNoRm9ybSA9IGNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsXCJpbnB1dCBmb3JtXCIpO1xuICAgIHNlYXJjaEZvcm0ubWV0aG9kID0gXCJQT1NUXCI7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hGb3JtKTtcbiAgICBjb25zdCBpbnB1dEJhciA9IHJlbmRlcklucHV0QmFyKCk7XG4gICAgY29uc3Qgc2VhcmNoQnV0dG9uID0gcmVuZGVyU2VhcmNoQnV0dG9uKCk7XG4gICAgc2VhcmNoRm9ybS5hcHBlbmQoaW5wdXRCYXIsIHNlYXJjaEJ1dHRvbik7XG4gICAgcmV0dXJuIGZvcm1Db250YWluZXI7XG4gIH1cblxuICBjb25zdCByZW5kZXJJbnB1dEJhciA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgbG9jYXRpb25JbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBcImxvY2F0aW9uIGlucHV0XCIpO1xuICAgIGxvY2F0aW9uSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGxvY2F0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIkVudGVyIGxvY2F0aW9uLi4uXCI7XG4gICAgbG9jYXRpb25JbnB1dC5uYW1lID0gXCJsb2NhdGlvbklucHV0XCI7XG4gICAgcmV0dXJuIGxvY2F0aW9uSW5wdXQ7XG4gIH1cbiAgXG4gIGNvbnN0IHJlbmRlclNlYXJjaEJ1dHRvbiA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLFwibG9jYXRpb24gc3VibWl0XCIpO1xuICAgIHJldHVybiBzdWJtaXRCdXR0b247XG4gIH1cblxuICAvLyBiaW5kIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBzZWFyY2ggYnV0dG9uXG4gIGNvbnN0IGJpbmRMb2NhdGlvbklucHV0ID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBsb2NhdGlvbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybS5pbnB1dFwiKTtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBsb2NhdGlvbkZvcm0ucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5zdWJtaXRcIik7XG4gICAgY29uc3QgbG9jYXRpb25JbnB1dCA9IGxvY2F0aW9uRm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXQubG9jYXRpb25cIik7XG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcGFnZU1hbmFnZXIubmV3Rm9yZWNhc3QobG9jYXRpb25JbnB1dC52YWx1ZSk7XG4gICAgICBsb2NhdGlvbklucHV0LnZhbHVlID0gXCJcIjtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9ucyBmb3Igd2VhdGhlciBpbmZvIHJlbmRlcmluZ1xuICBjb25zdCByZW5kZXJDb250ZW50Q29udGFpbmVycyA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJjb250ZW50IGNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBsb2NhdGlvbkNvbnRhaW5lciA9IHJlbmRlckxvY2F0aW9uVGl0bGVDb250YWluZXIoKTsgLy8gcmVuZGVyIGNvbnRhaW5lciB0byBwdXQgbG9jYXRpb24gdGl0bGVcbiAgICBjb25zdCB0b2RheVdlYXRoZXJDb250YWluZXIgPSByZW5kZXJUb2RheVdlYXRoZXJDb250YWluZXIoKTsgLy8gcmVuZGVycyBsb3RzIGluZm8gb24gY3VycmVudCB3ZWF0aGVyICsgbG9jYWwgdGltZVxuICAgIGNvbnN0IGZvcmVjYXN0Qm94ZXMgPSByZW5kZXJGb3JlY2FzdEJveGVzKCk7IC8vIHJlbmRlciB0aGUgNyBib3hlcyAod2l0aCBlbXB0eSBjb250ZW50KSBmb3IgZm9yZWNhc3RcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChsb2NhdGlvbkNvbnRhaW5lcix0b2RheVdlYXRoZXJDb250YWluZXIsIGZvcmVjYXN0Qm94ZXMpO1xuICAgIHJldHVybiBjb250ZW50Q29udGFpbmVyO1xuICB9XG5cbiAgbGV0IGxvY2F0aW9uVGl0bGU7IC8vIHB1YmxpYyB2YXJpYWJsZXMgdG8gbWluaW1pemUgZGlyZWN0IERPTSBhY2Nlc3NcbiAgY29uc3QgcmVuZGVyTG9jYXRpb25UaXRsZUNvbnRhaW5lciA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgbG9jYXRpb25UaXRsZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJsb2NhdGlvbiB0aXRsZSBjb250YWluZXJcIik7XG4gICAgbG9jYXRpb25UaXRsZSA9IGNyZWF0ZUVsZW1lbnQoXCJoMlwiLFwibG9jYXRpb24gdGl0bGVcIixcImRlZmF1bHQgbG9jYXRpb25cIik7XG4gICAgbG9jYXRpb25UaXRsZUNvbnRhaW5lci5hcHBlbmQobG9jYXRpb25UaXRsZSk7XG4gICAgcmV0dXJuIGxvY2F0aW9uVGl0bGVDb250YWluZXI7XG4gIH1cblxuICBsZXQgdG9kYXlXZWF0aGVyQ29udGFpbmVyO1xuICBjb25zdCByZW5kZXJUb2RheVdlYXRoZXJDb250YWluZXIgPSBmdW5jdGlvbigpe1xuICAgIHRvZGF5V2VhdGhlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0b2RheSB3ZWF0aGVyIGNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0b2RheVdlYXRoZXJDb25kaXRpb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiY29uZGl0aW9uIGNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjb25kaXRpb25JY29uID0gY3JlYXRlSW1hZ2UoXCJcIiwgXCJjb25kaXRpb24gaWNvblwiKTtcbiAgICBjb25zdCBjb25kaXRpb25UZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJjb25kaXRpb24gdGV4dFwiKTtcbiAgICB0b2RheVdlYXRoZXJDb25kaXRpb25Db250YWluZXIuYXBwZW5kKGNvbmRpdGlvbkljb24sIGNvbmRpdGlvblRleHQpO1xuICAgIGNvbnN0IHRvZGF5V2VhdGhlclRlbXBDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidGVtcCBjb250YWluZXJcIik7XG4gICAgY29uc3QgdGVtcFRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLFwidGVtcCB0ZXh0XCIpO1xuICAgIGNvbnN0IHRlbXBtaW5UZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIixcInRlbXBtaW4gdGV4dFwiKTtcbiAgICBjb25zdCB0ZW1wbWF4VGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJ0ZW1wbWF4IHRleHRcIik7XG4gICAgdG9kYXlXZWF0aGVyVGVtcENvbnRhaW5lci5hcHBlbmQodGVtcFRleHQsIHRlbXBtaW5UZXh0LCB0ZW1wbWF4VGV4dCk7XG4gICAgY29uc3QgdG9kYXlXZWF0aGVyVGltZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0aW1lIGNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBkYXlUZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJkYXkgdGV4dFwiKTtcbiAgICBjb25zdCB0aW1lVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJ0aW1lIHRleHRcIik7XG4gICAgdG9kYXlXZWF0aGVyVGltZUNvbnRhaW5lci5hcHBlbmQoZGF5VGV4dCwgdGltZVRleHQpO1xuICAgIGNvbnN0IHRvZGF5V2VhdGhlclByZWNpcHByb2JDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJlY2lwIGNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwcmVjaXBUZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJwcmVjaXAgdGV4dFwiKTtcbiAgICB0b2RheVdlYXRoZXJQcmVjaXBwcm9iQ29udGFpbmVyLmFwcGVuZChwcmVjaXBUZXh0KTtcbiAgICB0b2RheVdlYXRoZXJDb250YWluZXIuYXBwZW5kKHRvZGF5V2VhdGhlckNvbmRpdGlvbkNvbnRhaW5lcix0b2RheVdlYXRoZXJUZW1wQ29udGFpbmVyLHRvZGF5V2VhdGhlclRpbWVDb250YWluZXIsdG9kYXlXZWF0aGVyUHJlY2lwcHJvYkNvbnRhaW5lcik7XG4gICAgcmV0dXJuIHRvZGF5V2VhdGhlckNvbnRhaW5lcjtcbiAgfVxuXG4gIGxldCBmb3JlY2FzdEJveGVzID0gW107XG4gIGNvbnN0IHJlbmRlckZvcmVjYXN0Qm94ZXMgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGZvcmVjYXN0Qm94Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZvcmVjYXN0IGJveCBjb250YWluZXJcIik7XG4gICAgY29uc3QgZm9yZWNhc3RCb3ggPSByZW5kZXJGb3JlY2FzdEJveCgpO1xuICAgIGZvcmVjYXN0Qm94ZXNbMF0gPSBmb3JlY2FzdEJveDtcbiAgICBmb3JlY2FzdEJveENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdEJveCk7XG4gICAgZm9yIChsZXQgaT0xOyBpIDw3OyBpKyspe1xuICAgICAgY29uc3QgZm9yZWNhc3RCb3hDbG9uZSA9IGZvcmVjYXN0Qm94LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIGZvcmVjYXN0Qm94ZXNbaV0gPSBmb3JlY2FzdEJveENsb25lO1xuICAgICAgZm9yZWNhc3RCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3RCb3hDbG9uZSk7XG4gICAgfVxuICAgIHJldHVybiBmb3JlY2FzdEJveENvbnRhaW5lcjtcbiAgfVxuXG4gIGNvbnN0IHJlbmRlckZvcmVjYXN0Qm94ID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBmb3JlY2FzdEJveCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcImZvcmVjYXN0IGJveFwiKTtcbiAgICBjb25zdCBjb250ZW50Qm94ZXMgPSByZW5kZXJGb3JlY2FzdENvbnRlbnRCb3hlcygpOyAvLyB0aGlzIHdpbGwgY3JlYXRlIGNvbnRhaW5lcnMgZm9yIGluZm8gb2YgdGVtcCwgbWluLCBtYXgsIHByZWNpcCwgZXRjXG4gICAgZm9yZWNhc3RCb3guYXBwZW5kKC4uLk9iamVjdC52YWx1ZXMoY29udGVudEJveGVzKSk7IC8vIGFwcGVuZHMgZWFjaCBub2RlIHdpdGhpbiBjb250ZW50Qm94ZXNPYmplY3RcbiAgICByZXR1cm4gZm9yZWNhc3RCb3g7XG4gIH1cblxuICAvLyBjcmVhdGVzIGNvbnRhaW5lcnMgb3IgSFRNTCBlbGVtZW50cyB3aXRoaW4gdGhlIGZvcmVjYXN0IGJveGVzXG4gIC8vIC4uLmZvciBkYXlPZldlZWssIG1vbnRoRGF5LCB0ZW1wLCB0ZW1wbWluLCB0ZW1wbWF4LCBjb25kaXRpb25zLCBwcmVjaXBwcm9iXG4gIGNvbnN0IHJlbmRlckZvcmVjYXN0Q29udGVudEJveGVzID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCB0aW1lQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRpbWUgY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGRheUFuZERhdGVUZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJkYXlBbmREYXRlIHRleHRcIik7XG4gICAgdGltZUNvbnRhaW5lci5hcHBlbmQoZGF5QW5kRGF0ZVRleHQpO1xuICAgIGNvbnN0IHRlbXBDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidGVtcCBjb250YWluZXJcIik7XG4gICAgY29uc3QgdGVtcFRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLFwidGVtcCB0ZXh0XCIpO1xuICAgIGNvbnN0IHRlbXBtaW5UZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIixcInRlbXBtaW4gdGV4dFwiKTtcbiAgICBjb25zdCB0ZW1wbWF4VGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJ0ZW1wbWF4IHRleHRcIik7XG4gICAgdGVtcENvbnRhaW5lci5hcHBlbmQodGVtcFRleHQsIHRlbXBtaW5UZXh0LCB0ZW1wbWF4VGV4dCk7XG4gICAgY29uc3QgY29uZGl0aW9uc0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJjb25kaXRpb25zIGNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjb25kaXRpb25zSW1hZ2UgPSBjcmVhdGVJbWFnZShcIlwiLFwiY29uZGl0aW9ucyBpbWFnZVwiKTsgLy8gbXVzdCBjb252ZXJ0IGNvbmRpdGlvbnMgdGV4dCB0byBhbiBpbWFnZSBzcmMgaW4gZWRpdGluZyBsYXRlclxuICAgIGNvbnN0IHByZWNpcHByb2JUZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJwcmVjaXBwcm9iIHRleHRcIik7XG4gICAgY29uZGl0aW9uc0NvbnRhaW5lci5hcHBlbmQoY29uZGl0aW9uc0ltYWdlLCBwcmVjaXBwcm9iVGV4dCk7XG4gICAgcmV0dXJuIHt0aW1lQ29udGFpbmVyLCB0ZW1wQ29udGFpbmVyLCBjb25kaXRpb25zQ29udGFpbmVyfTtcbiAgfVxuXG4gIC8vIEV2ZXJ5dGhpbmcgYmVsb3cgdGhpcyBpcyBtZWFudCB0byBlZGl0IGV4aXN0aW5nIGVsZW1lbnRzIC8vXG5cbiAgLy8gZWRpdHMgdGV4dCBjb250ZW50IHRvIHNob3cgd2VhdGhlciBpbmZvcm1hdGlvblxuICAvLyBvcmdhbml6ZXMgd2VhdGhlckluZm8gdG8gc2VuZCBvbmx5IHJlbGV2YW50IGluZm8gdG8gZWFjaCBmdW5jdGlvblxuICBjb25zdCBlZGl0V2VhdGhlciA9IGZ1bmN0aW9uKHdlYXRoZXJJbmZvKXtcbiAgICBlZGl0TG9jYXRpb25UaXRsZSh3ZWF0aGVySW5mby5yZXNvbHZlZEFkZHJlc3MpO1xuICAgIGVkaXRUb2RheVdlYXRoZXIod2VhdGhlckluZm8udHpvZmZzZXQsIHdlYXRoZXJJbmZvLmRhdGVBcnJheVswXSx3ZWF0aGVySW5mby50ZW1wQXJyYXlbMF0sIHdlYXRoZXJJbmZvLnByZWNpcEFycmF5WzBdKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaTw3OyBpKyspe1xuICAgICAgZWRpdEZvcmVjYXN0Qm94KGksIHdlYXRoZXJJbmZvLmRhdGVBcnJheVtpXSwgd2VhdGhlckluZm8udGVtcEFycmF5W2ldLCB3ZWF0aGVySW5mby5wcmVjaXBBcnJheVtpXSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB0aGUgd2VhdGhlciB0aGF0IHJlbmRlci5qcyBzZWVzXCIpO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJJbmZvKTtcbiAgfVxuXG4gIGNvbnN0IGVkaXRMb2NhdGlvblRpdGxlID0gZnVuY3Rpb24gKHJlc29sdmVkQWRkcmVzcyl7XG4gICAgbG9jYXRpb25UaXRsZS50ZXh0Q29udGVudCA9IHJlc29sdmVkQWRkcmVzcztcbiAgfVxuXG4gIGNvbnN0IGVkaXRUb2RheVdlYXRoZXIgPSBmdW5jdGlvbih0em9mZnNldCwgZGF0ZU9iamVjdCwgdGVtcE9iamVjdCwgcHJlY2lwT2JqZWN0KXtcbiAgICBjb25zdCBjb25kaXRpb25UZW1wVGltZVByZWNpcENvbnRhaW5lcnMgPSB0b2RheVdlYXRoZXJDb250YWluZXIuY2hpbGRyZW47XG4gICAgZWRpdENsYXNzQ2hpbGRJbWFnZShjb25kaXRpb25UZW1wVGltZVByZWNpcENvbnRhaW5lcnNbMF0sIFwiaWNvblwiLCBwcmVjaXBPYmplY3QuY29uZGl0aW9ucyk7XG4gICAgZWRpdENsYXNzQ2hpbGQoY29uZGl0aW9uVGVtcFRpbWVQcmVjaXBDb250YWluZXJzWzBdLCBcInRleHRcIiwgcHJlY2lwT2JqZWN0LmNvbmRpdGlvbnMpO1xuICAgIC8vIGdvZXMgdGhyb3VnaCBlYWNoIGtleSwgdmFsdWUgcGFpciBpbiB0ZW1wT2JqZWN0IGFuZCB1cGRhdGVzIHRleHQgb24gbm9kZXNcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0ZW1wT2JqZWN0KSl7XG4gICAgICBlZGl0Q2xhc3NDaGlsZChjb25kaXRpb25UZW1wVGltZVByZWNpcENvbnRhaW5lcnNbMV0sIGtleSwgdmFsdWUpO1xuICAgIH1cbiAgICBlZGl0Q2xhc3NDaGlsZChjb25kaXRpb25UZW1wVGltZVByZWNpcENvbnRhaW5lcnNbMl0sIFwidGV4dFwiLCBkYXRlT2JqZWN0LmRheUFuZERhdGUpO1xuICAgIGVkaXRDbGFzc0NoaWxkKGNvbmRpdGlvblRlbXBUaW1lUHJlY2lwQ29udGFpbmVyc1syXSwgXCJ0ZXh0XCIsIGNhbGN1bGF0ZUxvY2FsVGltZSh0em9mZnNldCkpO1xuICAgIGVkaXRDbGFzc0NoaWxkKGNvbmRpdGlvblRlbXBUaW1lUHJlY2lwQ29udGFpbmVyc1szXSwgXCJwcmVjaXBcIiwgcHJlY2lwT2JqZWN0LnByZWNpcHByb2IpO1xuICB9XG5cbiAgLy8gbWFudWFsbHkgY2FsY3VsYXRlIHRoZSBsb2NhbCB0aW1lIGF0IHRoZSBsb2NhdGlvbiB1c2luZyBVVEMgdGltZSArLy0gdHpvZmZzZXRcbiAgLy8gcmV0dXJucyBzdHJpbmcgd2l0aCBmb3JtIEhIOk1NIEFNIChvciBQTSlcbiAgY29uc3QgY2FsY3VsYXRlTG9jYWxUaW1lID0gZnVuY3Rpb24odHpvZmZzZXQpe1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAvLyByZXR1cm5zIGxvY2FsIGhvdXIgZnJvbSAwLTIzXG4gICAgY29uc3QgbG9jYWxIb3VyVW5mb3JtYXR0ZWQgPSAoY3VycmVudERhdGUuZ2V0VVRDSG91cnMoKSt0em9mZnNldCklMjQ7XG4gICAgbGV0IEFNUE1TdHJpbmc7XG4gICAgaWYgKE1hdGgudHJ1bmMobG9jYWxIb3VyVW5mb3JtYXR0ZWQvMTIpID09IDApe1xuICAgICAgQU1QTVN0cmluZyA9IFwiQU1cIjtcbiAgICB9IGVsc2V7XG4gICAgICBBTVBNU3RyaW5nID0gXCJQTVwiO1xuICAgIH1cbiAgICBsZXQgbG9jYWxIb3VyID0gKGxvY2FsSG91clVuZm9ybWF0dGVkKSUxMjsgLy8gY29udmVydCAwLTIzIHRvIDAtMTFcbiAgICBpZiAobG9jYWxIb3VyID09IDApe1xuICAgICAgbG9jYWxIb3VyID0gMTI7XG4gICAgfVxuICAgIGNvbnN0IGxvY2FsTWludXRlcyA9IGN1cnJlbnREYXRlLnRvVGltZVN0cmluZygpLnNsaWNlKDIsNSk7IC8vIGNvbnRhaW5zIFwiOk1NXCJcbiAgICBjb25zdCBsb2NhbFRpbWVTdHJpbmcgPSBgJHtsb2NhbEhvdXJ9JHtsb2NhbE1pbnV0ZXN9ICR7QU1QTVN0cmluZ31gO1xuICAgIHJldHVybiBsb2NhbFRpbWVTdHJpbmc7XG4gIH1cblxuICAvLyBlZGl0cyBpbmRpdmlkdWFsIGJveCBhbGwgYXQgb25jZSB0byByZWR1Y2UgYW1vdW50IG9mIHJlZmVyZW5jZXMgdG8gbm9kZXNcbiAgLy8gUGFyYW1ldGVyczogaW5kZXgsIHttb250aERheSwgZGF5T2ZXZWVrfSwge3RlbXAsIHRlbXBtaW4sIHRlbXBtYXh9LCB7cHJlY2lwcHJvYiwgY29uZGl0aW9uc31cbiAgLy8gdGltZVRlbXBDb25kaXRpb25zQ29udGFpbmVycyBpcyBqdXN0IGNoaWxkIG5vZGVzIG9mIHRoZSBmb3JlY2FzdCBib3hcbiAgY29uc3QgZWRpdEZvcmVjYXN0Qm94ID0gZnVuY3Rpb24oaW5kZXgsIGRhdGVPYmplY3QsIHRlbXBPYmplY3QsIHByZWNpcE9iamVjdCl7XG4gICAgY29uc3QgdGltZVRlbXBDb25kaXRpb25zQ29udGFpbmVycyA9IGZvcmVjYXN0Qm94ZXNbaW5kZXhdLmNoaWxkcmVuO1xuICAgIC8vIGdvZXMgdGhyb3VnaCBlYWNoIGtleSwgdmFsdWUgcGFpciBpbiBkYXRlT2JqZWN0IGFuZCB1cGRhdGVzIHRleHQgb24gbm9kZXNcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkYXRlT2JqZWN0KSl7XG4gICAgICBlZGl0Q2xhc3NDaGlsZCh0aW1lVGVtcENvbmRpdGlvbnNDb250YWluZXJzWzBdLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgLy8gcmVwZWF0ZWQgZm9yIG90aGVyIG9iamVjdHMsIGJlY2F1c2UgbmVzdGVkIGxvb3BzIGNvbmZ1c2luZ1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRlbXBPYmplY3QpKXtcbiAgICAgIGVkaXRDbGFzc0NoaWxkKHRpbWVUZW1wQ29uZGl0aW9uc0NvbnRhaW5lcnNbMV0sIGtleSwgdmFsdWUpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcmVjaXBPYmplY3QpKXtcbiAgICAgIGlmIChrZXkgPT0gXCJwcmVjaXBwcm9iXCIpe1xuICAgICAgICBlZGl0Q2xhc3NDaGlsZCh0aW1lVGVtcENvbmRpdGlvbnNDb250YWluZXJzWzJdLCBrZXksIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09IFwiY29uZGl0aW9uc1wiKXtcbiAgICAgICAgZWRpdENsYXNzQ2hpbGRJbWFnZSh0aW1lVGVtcENvbmRpdGlvbnNDb250YWluZXJzWzJdLCBrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGhlbHBlciBmdW5jdGlvbiB0aGF0IGVkaXRzIHRoZSB0ZXh0IG9mIGEgY2hpbGQgbm9kZSBnaXZlbiB0aGUgcGFyZW50IG5vZGUgYW5kIHRoZSBjaGlsZCBub2RlJ3MgY2xhc3NcbiAgLy8gd2hpY2ggY2hpbGQgbm9kZSBkZXRlcm1pbmVkIGJ5IGNsYXNzIGlkZW50aWZpZXJcbiAgY29uc3QgZWRpdENsYXNzQ2hpbGQgPSBmdW5jdGlvbihwYXJlbnROb2RlLCBjbGFzc0lkZW50aWZpZXIsIG5ld1RleHQpe1xuICAgIGNvbnN0IG5vZGVUb0NoYW5nZSA9IHBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NJZGVudGlmaWVyfWApO1xuICAgIG5vZGVUb0NoYW5nZS50ZXh0Q29udGVudCA9IG5ld1RleHQ7XG4gIH1cblxuICBjb25zdCBlZGl0Q2xhc3NDaGlsZEltYWdlID0gZnVuY3Rpb24ocGFyZW50Tm9kZSwgY2xhc3NJZGVudGlmaWVyLCBuZXdDb25kaXRpb25zKXtcbiAgICBjb25zdCBpbWFnZVNyYyA9IGNvbnZlcnRDb25kaXRpb25zVG9TcmMobmV3Q29uZGl0aW9ucyk7XG4gICAgY29uc3Qgbm9kZVRvQ2hhbmdlID0gcGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc0lkZW50aWZpZXJ9YCk7XG4gICAgbm9kZVRvQ2hhbmdlLnNyYyA9IGltYWdlU3JjO1xuICB9XG5cbiAgY29uc3QgY29udmVydENvbmRpdGlvbnNUb1NyYyA9IGZ1bmN0aW9uIChjb25kaXRpb25zU3RyaW5nKXtcbiAgICBpZiAoY29uZGl0aW9uc1N0cmluZy5pbmNsdWRlcyhcIkNsZWFyXCIpKXtcbiAgICAgIHJldHVybiBTdW5JY29uO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uc1N0cmluZy5pbmNsdWRlcyhcIlNub3dcIikpe1xuICAgICAgcmV0dXJuIFNub3dJY29uO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uc1N0cmluZy5pbmNsdWRlcyhcIlJhaW5cIikpe1xuICAgICAgcmV0dXJuIFJhaW5JY29uO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uc1N0cmluZy5pbmNsdWRlcyhcImNsb3VkeVwiKSl7XG4gICAgICByZXR1cm4gQ2xvdWRJY29uO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uc1N0cmluZy5pbmNsdWRlcyhcIk92ZXJjYXN0XCIpKXtcbiAgICAgIHJldHVybiBPdmVyY2FzdEljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYENvbmRpdGlvbiBpcyAke2NvbmRpdGlvbnNTdHJpbmd9IGFuZCBkb2VzIG5vdCBmaXQgYW55IGltYWdlLmApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGluaXQsIGVkaXRXZWF0aGVyIH07XG59KSgpO1xuXG5leHBvcnQgeyByZW5kZXJNYW5hZ2VyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9