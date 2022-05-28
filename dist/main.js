/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Koulen&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --color-dark: #4a1942;\n    --color-light: #E3BEC6;\n    --color-light-1: #f5f5f4;\n    --color-grey: #b4b4b4;\n    font-family: 'Lato', sans-serif;\n}\n\n* {\n    /* border: 1px solid black; */\n}\n\n/* ---DropdownMenu--- */\n\n.dropdown-menu {\n    padding-top: 1rem;\n    padding-left: 0.5rem;\n    background-color: var(--color-light-1);\n    opacity: 0;\n    pointer-events: none;\n    transform: translateY(-10px);\n    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;\n}\n\n.dropdown.active>.dropdown-menu {\n    opacity: 1;\n    transform: translateY(0);\n    pointer-events: auto;\n}\n\n/* ---TopBar--- */\n#top-bar {\n    display: grid;\n    grid-template-columns: auto auto 1fr auto;\n    align-items: center;\n    justify-items: center;\n    gap: 1rem;\n    height: 44px;\n    padding: 0 2rem;\n    color: var(--color-dark);\n    background-color: var(--color-light);\n    font-family: 'Koulen', cursive;\n    font-size: 1.2rem;\n}\n\n[data-icon].iconify {\n    font-size: 1.2rem;\n    /* color: black; */\n}\n\n[data-icon]:hover {\n    background-color: rgba(0, 0, 0, 0.1);\n}\n\n/* ---Main--- */\n#main {\n    display: flex;\n    flex-direction: column;\n}\n\n/* ---Sidebar--- */\n#sidebar {\n    font-size: 1.1rem;\n    height: calc(100vh - 44px);\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 2rem;\n    padding: 2rem 0 0 2rem;\n    position: fixed;\n    width: 300px;\n    left: 0;\n    overflow: hidden;\n    color: var(--color-dark);\n    background-color: var(--color-light-1);\n    transition: transform 300ms ease-in-out;\n}\n\n.sidebar-inactive {\n    transform: translateX(-300px);\n}\n\n#sidebar>* {\n    cursor: pointer;\n}\n\n#sidebar ul {\n    text-decoration: none;\n    list-style: none;\n    display: grid;\n    gap: 0.5rem;\n}\n\n#sidebar li {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 0.5rem;\n    align-content: center;\n}\n\n#sidebar .project {\n    font-size: 1.1rem;\n    display: grid;\n    grid-template-columns: auto auto 1fr auto;\n    align-items: center;\n    gap: 0.5rem;\n    padding-right: 2rem;\n}\n\n#sidebar [data-icon=\"ic:baseline-expand-more\"] {\n    font-size: 1.4rem;\n}\n\n/* ---App--- */\n#app-container {\n    margin-left: 300px;\n    display: flex;\n    flex-direction: column;\n    padding: 2rem 4rem;\n    transition: margin 300ms ease-in-out;\n}\n\n#app-container.app-sidebar-inactive {\n    margin: 0px;\n}\n\n#app-container .title {\n    font-size: 1.2rem;\n    font-weight: 600;\n    margin-bottom: 0.5rem;\n}\n\n#add-task {\n    display: grid;\n    grid-template-columns: auto 1fr;\n}\n\n#add-task-listener {\n    display: grid;\n    grid-template-columns: auto auto;\n    justify-content: start;\n    gap: 0.25rem;\n    color: var(--color-grey);\n}\n\n#app-container [data-icon=\"akar-icons:plus\"] {\n    color: var(--color-dark);\n}\n\n#add-task:hover>[data-icon=\"akar-icons:plus\"] {\n    background-color: var(--color-dark);\n    color: var(--color-light-1);\n    border-radius: 50%;\n}\n\n#add-task-listener:hover {\n    color: var(--color-dark);\n}\n\n#add-field {\n    display: grid;\n    border: 1px solid var(--color-grey);\n    border-radius: 10px;\n    margin: 0.5rem 0;\n}\n\ntextarea {\n    margin: 0.5rem;\n    border: none;\n    resize: none;\n}\n\n.add-field-buttons {\n    margin: 0.5rem;\n    display: grid;\n    grid-template-columns: auto auto;\n    justify-content: start;\n    gap: 0.5rem;\n}\n\n.add-field-buttons>button {\n    padding: 0.4rem 0.6rem;\n    border-radius: 5px;\n    color: grey;\n    font-weight: 100;\n    border: 1px solid var(--color-grey);\n    background-color: white;\n}\n\n#add-task-button {\n    background-color: var(--color-light);\n    color: var(--color-dark);\n    font-weight: 600;\n}\n\n#check{\n    display:none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;;IAGI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,wBAAwB;IACxB,qBAAqB;IACrB,+BAA+B;AACnC;;AAEA;IACI,6BAA6B;AACjC;;AAEA,uBAAuB;;AAEvB;IACI,iBAAiB;IACjB,oBAAoB;IACpB,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,4BAA4B;IAC5B,kEAAkE;AACtE;;AAEA;IACI,UAAU;IACV,wBAAwB;IACxB,oBAAoB;AACxB;;AAEA,iBAAiB;AACjB;IACI,aAAa;IACb,yCAAyC;IACzC,mBAAmB;IACnB,qBAAqB;IACrB,SAAS;IACT,YAAY;IACZ,eAAe;IACf,wBAAwB;IACxB,oCAAoC;IACpC,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;AACxC;;AAEA,eAAe;AACf;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA,kBAAkB;AAClB;IACI,iBAAiB;IACjB,0BAA0B;IAC1B,aAAa;IACb,4BAA4B;IAC5B,SAAS;IACT,sBAAsB;IACtB,eAAe;IACf,YAAY;IACZ,OAAO;IACP,gBAAgB;IAChB,wBAAwB;IACxB,sCAAsC;IACtC,uCAAuC;AAC3C;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,aAAa;IACb,WAAW;AACf;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,yCAAyC;IACzC,mBAAmB;IACnB,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA,cAAc;AACd;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,sBAAsB;IACtB,YAAY;IACZ,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,mCAAmC;IACnC,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,gCAAgC;IAChC,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,gBAAgB;IAChB,mCAAmC;IACnC,uBAAuB;AAC3B;;AAEA;IACI,oCAAoC;IACpC,wBAAwB;IACxB,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Koulen&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --color-dark: #4a1942;\n    --color-light: #E3BEC6;\n    --color-light-1: #f5f5f4;\n    --color-grey: #b4b4b4;\n    font-family: 'Lato', sans-serif;\n}\n\n* {\n    /* border: 1px solid black; */\n}\n\n/* ---DropdownMenu--- */\n\n.dropdown-menu {\n    padding-top: 1rem;\n    padding-left: 0.5rem;\n    background-color: var(--color-light-1);\n    opacity: 0;\n    pointer-events: none;\n    transform: translateY(-10px);\n    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;\n}\n\n.dropdown.active>.dropdown-menu {\n    opacity: 1;\n    transform: translateY(0);\n    pointer-events: auto;\n}\n\n/* ---TopBar--- */\n#top-bar {\n    display: grid;\n    grid-template-columns: auto auto 1fr auto;\n    align-items: center;\n    justify-items: center;\n    gap: 1rem;\n    height: 44px;\n    padding: 0 2rem;\n    color: var(--color-dark);\n    background-color: var(--color-light);\n    font-family: 'Koulen', cursive;\n    font-size: 1.2rem;\n}\n\n[data-icon].iconify {\n    font-size: 1.2rem;\n    /* color: black; */\n}\n\n[data-icon]:hover {\n    background-color: rgba(0, 0, 0, 0.1);\n}\n\n/* ---Main--- */\n#main {\n    display: flex;\n    flex-direction: column;\n}\n\n/* ---Sidebar--- */\n#sidebar {\n    font-size: 1.1rem;\n    height: calc(100vh - 44px);\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 2rem;\n    padding: 2rem 0 0 2rem;\n    position: fixed;\n    width: 300px;\n    left: 0;\n    overflow: hidden;\n    color: var(--color-dark);\n    background-color: var(--color-light-1);\n    transition: transform 300ms ease-in-out;\n}\n\n.sidebar-inactive {\n    transform: translateX(-300px);\n}\n\n#sidebar>* {\n    cursor: pointer;\n}\n\n#sidebar ul {\n    text-decoration: none;\n    list-style: none;\n    display: grid;\n    gap: 0.5rem;\n}\n\n#sidebar li {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 0.5rem;\n    align-content: center;\n}\n\n#sidebar .project {\n    font-size: 1.1rem;\n    display: grid;\n    grid-template-columns: auto auto 1fr auto;\n    align-items: center;\n    gap: 0.5rem;\n    padding-right: 2rem;\n}\n\n#sidebar [data-icon=\"ic:baseline-expand-more\"] {\n    font-size: 1.4rem;\n}\n\n/* ---App--- */\n#app-container {\n    margin-left: 300px;\n    display: flex;\n    flex-direction: column;\n    padding: 2rem 4rem;\n    transition: margin 300ms ease-in-out;\n}\n\n#app-container.app-sidebar-inactive {\n    margin: 0px;\n}\n\n#app-container .title {\n    font-size: 1.2rem;\n    font-weight: 600;\n    margin-bottom: 0.5rem;\n}\n\n#add-task {\n    display: grid;\n    grid-template-columns: auto 1fr;\n}\n\n#add-task-listener {\n    display: grid;\n    grid-template-columns: auto auto;\n    justify-content: start;\n    gap: 0.25rem;\n    color: var(--color-grey);\n}\n\n#app-container [data-icon=\"akar-icons:plus\"] {\n    color: var(--color-dark);\n}\n\n#add-task:hover>[data-icon=\"akar-icons:plus\"] {\n    background-color: var(--color-dark);\n    color: var(--color-light-1);\n    border-radius: 50%;\n}\n\n#add-task-listener:hover {\n    color: var(--color-dark);\n}\n\n#add-field {\n    display: grid;\n    border: 1px solid var(--color-grey);\n    border-radius: 10px;\n    margin: 0.5rem 0;\n}\n\ntextarea {\n    margin: 0.5rem;\n    border: none;\n    resize: none;\n}\n\n.add-field-buttons {\n    margin: 0.5rem;\n    display: grid;\n    grid-template-columns: auto auto;\n    justify-content: start;\n    gap: 0.5rem;\n}\n\n.add-field-buttons>button {\n    padding: 0.4rem 0.6rem;\n    border-radius: 5px;\n    color: grey;\n    font-weight: 100;\n    border: 1px solid var(--color-grey);\n    background-color: white;\n}\n\n#add-task-button {\n    background-color: var(--color-light);\n    color: var(--color-dark);\n    font-weight: 600;\n}\n\n#check{\n    display:none;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/DOMgeneration.js":
/*!******************************!*\
  !*** ./src/DOMgeneration.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "generateInbox": () => (/* binding */ generateInbox)
/* harmony export */ });

function generateInbox(title){
    const container = document.querySelector('#app-container');
    container.innerHTML = `
    <div class="title">${title}</div>
    <div id='add-task'>
    <div id='add-task-listener'>
    <span class="iconify" data-icon="akar-icons:plus"></span>
    <div>Add task</div>
    </div>
    <div>
    </div>
    </div>`
}

function addTask(add){
    const container = document.querySelector('#app-container');
    if(add){
        const div = document.createElement('div');
        div.classList.add('add-container');
        div.innerHTML = `
            <div id="add-field-container">
                <div id="add-field">
                    <textarea name="name" id="name" cols="30" rows="1" placeholder="e.g., Read chapter 3"></textarea>
                    <textarea name="description" id="description" cols="30" rows="2" placeholder="Description"></textarea>
                    <div class="add-field-buttons">
                        <button type="button" id="date-button">Due date</button>
                        <button type="button" id="list-button">Inbox</button>
                    </div>
                </div>
                <div class="add-field-buttons">
                    <button id="add-task-button">Add task</button>
                    <button id="cancel-button">Cancel</button>
                </div>
            </div>`;
        container.appendChild(div);
    } else{
        document.querySelector('.add-container').remove();
    }
    // return div;
}



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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DOMgeneration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMgeneration.js */ "./src/DOMgeneration.js");



console.log("It's working")
document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

    let currentDropdown;
    if(isDropdownButton){
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }

    // document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
    //     if (dropdown === currentDropdown) return
    //     dropdown.classList.remove('active');
    // })
}, false)

const toggleDropdownMenu= (()=>{
    const button = document.querySelector('#menu-button');
    const sidebar = document.querySelector('#sidebar');
    const appContainer = document.querySelector('#app-container');
    button.addEventListener('click', ()=>{
        sidebar.classList.toggle('sidebar-inactive');
        appContainer.classList.toggle('app-sidebar-inactive');
    })
})()
// ---DOM
;(0,_DOMgeneration_js__WEBPACK_IMPORTED_MODULE_1__.generateInbox)('Inbox');

// 

const addTaskButton = (()=>{
    const node = document.querySelector('#add-task-listener')
    let toggle = true;
    node.addEventListener('click',taskListener);
    const createEventListener = ()=>{
        const node = document.querySelector('#add-task-listener')
        node.addEventListener('click',taskListener);
        console.log('add')
        // taskListener();
    }
    const removeEvent = ()=>{
        const node = document.querySelector('#add-task-listener')
        node.removeEventListener('click',taskListener);
        console.log('remove');
    }
    function taskListener(){
        console.log(toggle)
        ;(0,_DOMgeneration_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(toggle);
        toggle = !toggle;
    }
    return {removeEvent, createEventListener}
})()

const inboxButton = (()=>{
    document.querySelector('#inbox-button')
        .addEventListener('click',()=>{
            addTaskButton.removeEvent();
            (0,_DOMgeneration_js__WEBPACK_IMPORTED_MODULE_1__.generateInbox)('Inbox');
            addTaskButton.createEventListener();
        });
})()

const todayButton = (()=>{
    document.querySelector('#today-button')
        .addEventListener('click',()=>{
            ;(0,_DOMgeneration_js__WEBPACK_IMPORTED_MODULE_1__.generateInbox)('Today');
        });
})()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0EsaUVBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQU87QUFDZjtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdFQUFhO0FBQ3pCO0FBQ0EsU0FBUztBQUNULENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpRUFBYTtBQUN6QixTQUFTO0FBQ1QsQ0FBQyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01nZW5lcmF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUtvdWxlbiZmYW1pbHk9TGF0bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1jb2xvci1kYXJrOiAjNGExOTQyO1xcbiAgICAtLWNvbG9yLWxpZ2h0OiAjRTNCRUM2O1xcbiAgICAtLWNvbG9yLWxpZ2h0LTE6ICNmNWY1ZjQ7XFxuICAgIC0tY29sb3ItZ3JleTogI2I0YjRiNDtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuKiB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbn1cXG5cXG4vKiAtLS1Ecm9wZG93bk1lbnUtLS0gKi9cXG5cXG4uZHJvcGRvd24tbWVudSB7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQtMSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5kcm9wZG93bi5hY3RpdmU+LmRyb3Bkb3duLW1lbnUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG4vKiAtLS1Ub3BCYXItLS0gKi9cXG4jdG9wLWJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIDFmciBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgaGVpZ2h0OiA0NHB4O1xcbiAgICBwYWRkaW5nOiAwIDJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xcbiAgICBmb250LWZhbWlseTogJ0tvdWxlbicsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5bZGF0YS1pY29uXS5pY29uaWZ5IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIC8qIGNvbG9yOiBibGFjazsgKi9cXG59XFxuXFxuW2RhdGEtaWNvbl06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi8qIC0tLU1haW4tLS0gKi9cXG4jbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi8qIC0tLVNpZGViYXItLS0gKi9cXG4jc2lkZWJhciB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0NHB4KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBwYWRkaW5nOiAycmVtIDAgMCAycmVtO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbGVmdDogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmspO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodC0xKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc2lkZWJhci1pbmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwcHgpO1xcbn1cXG5cXG4jc2lkZWJhcj4qIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2lkZWJhciB1bCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbiNzaWRlYmFyIGxpIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3NpZGViYXIgLnByb2plY3Qge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gMWZyIGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbn1cXG5cXG4jc2lkZWJhciBbZGF0YS1pY29uPVxcXCJpYzpiYXNlbGluZS1leHBhbmQtbW9yZVxcXCJdIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi8qIC0tLUFwcC0tLSAqL1xcbiNhcHAtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAycmVtIDRyZW07XFxuICAgIHRyYW5zaXRpb246IG1hcmdpbiAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI2FwcC1jb250YWluZXIuYXBwLXNpZGViYXItaW5hY3RpdmUge1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuI2FwcC1jb250YWluZXIgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuI2FkZC10YXNrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG59XFxuXFxuI2FkZC10YXNrLWxpc3RlbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGdhcDogMC4yNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbn1cXG5cXG4jYXBwLWNvbnRhaW5lciBbZGF0YS1pY29uPVxcXCJha2FyLWljb25zOnBsdXNcXFwiXSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrKTtcXG59XFxuXFxuI2FkZC10YXNrOmhvdmVyPltkYXRhLWljb249XFxcImFrYXItaWNvbnM6cGx1c1xcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGFyayk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodC0xKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4jYWRkLXRhc2stbGlzdGVuZXI6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGFyayk7XFxufVxcblxcbiNhZGQtZmllbGQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBtYXJnaW46IDAuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5hZGQtZmllbGQtYnV0dG9ucyB7XFxuICAgIG1hcmdpbjogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5hZGQtZmllbGQtYnV0dG9ucz5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAwLjRyZW0gMC42cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ncmV5KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiNhZGQtdGFzay1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodCk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI2NoZWNre1xcbiAgICBkaXNwbGF5Om5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztJQUdJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQSx1QkFBdUI7O0FBRXZCO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixzQ0FBc0M7SUFDdEMsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsa0VBQWtFO0FBQ3RFOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixvQkFBb0I7QUFDeEI7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksYUFBYTtJQUNiLHlDQUF5QztJQUN6QyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxZQUFZO0lBQ1osZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixvQ0FBb0M7SUFDcEMsOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUEsZUFBZTtBQUNmO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQSxrQkFBa0I7QUFDbEI7SUFDSSxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsU0FBUztJQUNULHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsWUFBWTtJQUNaLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLHNDQUFzQztJQUN0Qyx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUEsY0FBYztBQUNkO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyx3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Lb3VsZW4mZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tY29sb3ItZGFyazogIzRhMTk0MjtcXG4gICAgLS1jb2xvci1saWdodDogI0UzQkVDNjtcXG4gICAgLS1jb2xvci1saWdodC0xOiAjZjVmNWY0O1xcbiAgICAtLWNvbG9yLWdyZXk6ICNiNGI0YjQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbioge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cXG59XFxuXFxuLyogLS0tRHJvcGRvd25NZW51LS0tICovXFxuXFxuLmRyb3Bkb3duLW1lbnUge1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LTEpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZHJvcGRvd24uYWN0aXZlPi5kcm9wZG93bi1tZW51IHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLyogLS0tVG9wQmFyLS0tICovXFxuI3RvcC1iYXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byAxZnIgYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGhlaWdodDogNDRweDtcXG4gICAgcGFkZGluZzogMCAycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGFyayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0KTtcXG4gICAgZm9udC1mYW1pbHk6ICdLb3VsZW4nLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuW2RhdGEtaWNvbl0uaWNvbmlmeSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAvKiBjb2xvcjogYmxhY2s7ICovXFxufVxcblxcbltkYXRhLWljb25dOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4vKiAtLS1NYWluLS0tICovXFxuI21haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKiAtLS1TaWRlYmFyLS0tICovXFxuI3NpZGViYXIge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDRweCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgcGFkZGluZzogMnJlbSAwIDAgMnJlbTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQtMSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnNpZGViYXItaW5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwMHB4KTtcXG59XFxuXFxuI3NpZGViYXI+KiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3NpZGViYXIgdWwge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jc2lkZWJhciBsaSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNzaWRlYmFyIC5wcm9qZWN0IHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIDFmciBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcXG59XFxuXFxuI3NpZGViYXIgW2RhdGEtaWNvbj1cXFwiaWM6YmFzZWxpbmUtZXhwYW5kLW1vcmVcXFwiXSB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4vKiAtLS1BcHAtLS0gKi9cXG4jYXBwLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMnJlbSA0cmVtO1xcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNhcHAtY29udGFpbmVyLmFwcC1zaWRlYmFyLWluYWN0aXZlIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbiNhcHAtY29udGFpbmVyIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbiNhZGQtdGFzayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxufVxcblxcbiNhZGQtdGFzay1saXN0ZW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6IDAuMjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG59XFxuXFxuI2FwcC1jb250YWluZXIgW2RhdGEtaWNvbj1cXFwiYWthci1pY29uczpwbHVzXFxcIl0ge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGFyayk7XFxufVxcblxcbiNhZGQtdGFzazpob3Zlcj5bZGF0YS1pY29uPVxcXCJha2FyLWljb25zOnBsdXNcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhcmspO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQtMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuI2FkZC10YXNrLWxpc3RlbmVyOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmspO1xcbn1cXG5cXG4jYWRkLWZpZWxkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogMC41cmVtIDA7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uYWRkLWZpZWxkLWJ1dHRvbnMge1xcbiAgICBtYXJnaW46IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uYWRkLWZpZWxkLWJ1dHRvbnM+YnV0dG9uIHtcXG4gICAgcGFkZGluZzogMC40cmVtIDAuNnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jYWRkLXRhc2stYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGFyayk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNjaGVja3tcXG4gICAgZGlzcGxheTpub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuZnVuY3Rpb24gZ2VuZXJhdGVJbmJveCh0aXRsZSl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcC1jb250YWluZXInKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPiR7dGl0bGV9PC9kaXY+XG4gICAgPGRpdiBpZD0nYWRkLXRhc2snPlxuICAgIDxkaXYgaWQ9J2FkZC10YXNrLWxpc3RlbmVyJz5cbiAgICA8c3BhbiBjbGFzcz1cImljb25pZnlcIiBkYXRhLWljb249XCJha2FyLWljb25zOnBsdXNcIj48L3NwYW4+XG4gICAgPGRpdj5BZGQgdGFzazwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+YFxufVxuXG5mdW5jdGlvbiBhZGRUYXNrKGFkZCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcC1jb250YWluZXInKTtcbiAgICBpZihhZGQpe1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2FkZC1jb250YWluZXInKTtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhZGQtZmllbGQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImFkZC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBjb2xzPVwiMzBcIiByb3dzPVwiMVwiIHBsYWNlaG9sZGVyPVwiZS5nLiwgUmVhZCBjaGFwdGVyIDNcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvblwiIGNvbHM9XCIzMFwiIHJvd3M9XCIyXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtZmllbGQtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkYXRlLWJ1dHRvblwiPkR1ZSBkYXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImxpc3QtYnV0dG9uXCI+SW5ib3g8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1maWVsZC1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhZGQtdGFzay1idXR0b25cIj5BZGQgdGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2FuY2VsLWJ1dHRvblwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSBlbHNle1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWNvbnRhaW5lcicpLnJlbW92ZSgpO1xuICAgIH1cbiAgICAvLyByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQge2dlbmVyYXRlSW5ib3gsIGFkZFRhc2t9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtnZW5lcmF0ZUluYm94LGFkZFRhc2t9IGZyb20gJy4vRE9NZ2VuZXJhdGlvbi5qcydcblxuY29uc29sZS5sb2coXCJJdCdzIHdvcmtpbmdcIilcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgY29uc3QgaXNEcm9wZG93bkJ1dHRvbiA9IGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS1kcm9wZG93bi1idXR0b25dXCIpO1xuICAgIGlmKCFpc0Ryb3Bkb3duQnV0dG9uICYmIGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWRyb3Bkb3duXScpICE9IG51bGwpIHJldHVybjtcblxuICAgIGxldCBjdXJyZW50RHJvcGRvd247XG4gICAgaWYoaXNEcm9wZG93bkJ1dHRvbil7XG4gICAgICAgIGN1cnJlbnREcm9wZG93biA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWRyb3Bkb3duXScpO1xuICAgICAgICBjdXJyZW50RHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZHJvcGRvd25dLmFjdGl2ZScpLmZvckVhY2goZHJvcGRvd24gPT4ge1xuICAgIC8vICAgICBpZiAoZHJvcGRvd24gPT09IGN1cnJlbnREcm9wZG93bikgcmV0dXJuXG4gICAgLy8gICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIC8vIH0pXG59LCBmYWxzZSlcblxuY29uc3QgdG9nZ2xlRHJvcGRvd25NZW51PSAoKCk9PntcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS1idXR0b24nKTtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGViYXInKTtcbiAgICBjb25zdCBhcHBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwLWNvbnRhaW5lcicpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2lkZWJhci1pbmFjdGl2ZScpO1xuICAgICAgICBhcHBDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYXBwLXNpZGViYXItaW5hY3RpdmUnKTtcbiAgICB9KVxufSkoKVxuLy8gLS0tRE9NXG5nZW5lcmF0ZUluYm94KCdJbmJveCcpO1xuXG4vLyBcblxuY29uc3QgYWRkVGFza0J1dHRvbiA9ICgoKT0+e1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stbGlzdGVuZXInKVxuICAgIGxldCB0b2dnbGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRhc2tMaXN0ZW5lcik7XG4gICAgY29uc3QgY3JlYXRlRXZlbnRMaXN0ZW5lciA9ICgpPT57XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stbGlzdGVuZXInKVxuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0YXNrTGlzdGVuZXIpO1xuICAgICAgICBjb25zb2xlLmxvZygnYWRkJylcbiAgICAgICAgLy8gdGFza0xpc3RlbmVyKCk7XG4gICAgfVxuICAgIGNvbnN0IHJlbW92ZUV2ZW50ID0gKCk9PntcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1saXN0ZW5lcicpXG4gICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLHRhc2tMaXN0ZW5lcik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmUnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGFza0xpc3RlbmVyKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvZ2dsZSlcbiAgICAgICAgYWRkVGFzayh0b2dnbGUpO1xuICAgICAgICB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH1cbiAgICByZXR1cm4ge3JlbW92ZUV2ZW50LCBjcmVhdGVFdmVudExpc3RlbmVyfVxufSkoKVxuXG5jb25zdCBpbmJveEJ1dHRvbiA9ICgoKT0+e1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmJveC1idXR0b24nKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBhZGRUYXNrQnV0dG9uLnJlbW92ZUV2ZW50KCk7XG4gICAgICAgICAgICBnZW5lcmF0ZUluYm94KCdJbmJveCcpO1xuICAgICAgICAgICAgYWRkVGFza0J1dHRvbi5jcmVhdGVFdmVudExpc3RlbmVyKCk7XG4gICAgICAgIH0pO1xufSkoKVxuXG5jb25zdCB0b2RheUJ1dHRvbiA9ICgoKT0+e1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheS1idXR0b24nKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBnZW5lcmF0ZUluYm94KCdUb2RheScpO1xuICAgICAgICB9KTtcbn0pKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=