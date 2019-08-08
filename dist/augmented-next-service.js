(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("service-datasource"), require("service-entity-models"));
	else if(typeof define === 'function' && define.amd)
		define("augmented-next-service", ["service-datasource", "service-entity-models"], factory);
	else if(typeof exports === 'object')
		exports["augmented-next-service"] = factory(require("service-datasource"), require("service-entity-models"));
	else
		root["augmented-next-service"] = factory(root["service-datasource"], root["service-entity-models"]);
})(global, function(__WEBPACK_EXTERNAL_MODULE_service_datasource__, __WEBPACK_EXTERNAL_MODULE_service_entity_models__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _serviceDatasource = __webpack_require__(/*! service-datasource */ "service-datasource");

var _serviceEntityModels = __webpack_require__(/*! service-entity-models */ "service-entity-models");

/**
 * service.js - The Service Core Component<br/>
 * The <b>Service</b> extension adds extensive abilities to the service (Node.js) layer.<br/>
 * This extension adds:<br/>
 * <ul>
 * <li>DataSource</li>
 * <li>Entity</li>
 * <li>Resource</li>
 * </ul>
 *
 * @author Bob Warren
 *
 * @requires augmentedjs-next ("augmentedjs-next" in npm)
 * @requires node
 * @requires http
 * @requires https
 * @requires fs
 * @module Augmented.Service
 * @version 2.0.1
 * @license Apache-2.0
 */

/**
 * The base namespace for all of the Service module.
 * @namespace Service
 * @memberof Augmented
 */
const Service = {};
/**
 * The standard version property
 * @constant VERSION
 * @memberof Augmented.Service
 */

Service.VERSION = "2.0.1";
Service.DataSource = _serviceDatasource.DataSource;
Service.DATASOURCE_STYLE = _serviceDatasource.DATASOURCE_STYLE;
Service.MemoryDataSource = _serviceDatasource.MemoryDataSource;
Service.MongoDataSource = _serviceDatasource.MongoDataSource;
Service.SOLRDataSource = _serviceDatasource.SOLRDataSource;
Service.DataSourceFactory = _serviceDatasource.DataSourceFactory;
Service.ResourceCollection = _serviceEntityModels.ResourceCollection;
Service.EntityCollection = _serviceEntityModels.EntityCollection;
Service.PaginatedResourceCollection = _serviceEntityModels.PaginatedResourceCollection;
Service.PaginationFactory = _serviceEntityModels.PaginationFactory;
Service.PAGINATION_API = _serviceEntityModels.PAGINATION_API;
Service.Entity = _serviceEntityModels.Entity;
Service.Resource = _serviceEntityModels.Resource;
exports.default = Service;

/***/ }),

/***/ "service-datasource":
/*!******************************************************************************************************************************************!*\
  !*** external {"commonjs":"service-datasource","commonjs2":"service-datasource","amd":"service-datasource","root":"service-datasource"} ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_service_datasource__;

/***/ }),

/***/ "service-entity-models":
/*!******************************************************************************************************************************************************!*\
  !*** external {"commonjs":"service-entity-models","commonjs2":"service-entity-models","amd":"service-entity-models","root":"service-entity-models"} ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_service_entity_models__;

/***/ })

/******/ });
});
//# sourceMappingURL=augmented-next-service.js.map