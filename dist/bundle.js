(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var bind = __webpack_require__(3);
var isBuffer = __webpack_require__(14);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(16);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(4);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(4);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {/* Ignore */}
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(17);
var buildURL = __webpack_require__(19);
var parseHeaders = __webpack_require__(20);
var isURLSameOrigin = __webpack_require__(21);
var createError = __webpack_require__(5);
var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(22);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || request.readyState !== 4 && !xDomain) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(23);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(18);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _removeHtmlTags = __webpack_require__(31);

var _removeHtmlTags2 = _interopRequireDefault(_removeHtmlTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// TODO: https://github.com/bobby-brennan/rss-parser/issues/20
var rssParser = __webpack_require__(32);

var CryptoScanParser = function () {
  function CryptoScanParser(config) {
    _classCallCheck(this, CryptoScanParser);

    this.config = config;
  }

  _createClass(CryptoScanParser, [{
    key: 'parseRSSFeed',
    value: async function parseRSSFeed(list, rssUrl) {
      var _this = this;

      // Parse all feed url

      if (!list) return [];
      var result = [];

      return new Promise(function (resolve) {
        list.map(function (item) {
          var url = rssUrl.replace('%SLUG%', item.slug);
          var filterBy = item.filterBy;

          rssParser.parseURL(url, function (err, parsed) {
            if (parsed && parsed.feed && parsed.feed.entries) {
              parsed.feed.entries.map(function (entry) {
                // Filter entry

                if (_this._filterEntry(entry, filterBy)) {
                  result.push({
                    title: entry.title,
                    url: entry.link,
                    date: entry.pubDate,
                    text: (0, _removeHtmlTags2.default)(entry.content),
                    author: entry.author
                  });
                }
              });
            }

            resolve(result);
          });
        });
      });
    }
  }, {
    key: '_filterEntry',
    value: function _filterEntry(entry) {
      var filterBy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      // Filter rss entries by users name, regexes and keywords
      var users = filterBy.users,
          regexes = filterBy.regexes,
          keywords = filterBy.keywords;


      var filtered = true;

      // Filter by user name
      if (users && !users.includes(entry.author)) {
        filtered = false;
      }

      return filtered;
    }
  }]);

  return CryptoScanParser;
}();

exports.default = CryptoScanParser;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function () {};
Timeout.prototype.close = function () {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(33);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CryptoScanParser = undefined;

var _core = __webpack_require__(11);

var _core2 = _interopRequireDefault(_core);

var _parser = __webpack_require__(8);

var _parser2 = _interopRequireDefault(_parser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CryptoScanParser = _parser2.default;
exports.default = _core2.default;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(12);

var _axios2 = _interopRequireDefault(_axios);

var _parser = __webpack_require__(8);

var _parser2 = _interopRequireDefault(_parser);

var _constants = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CryptoScanCore = function (_CryptoScanParser) {
  _inherits(CryptoScanCore, _CryptoScanParser);

  function CryptoScanCore(config) {
    _classCallCheck(this, CryptoScanCore);

    var _this = _possibleConstructorReturn(this, (CryptoScanCore.__proto__ || Object.getPrototypeOf(CryptoScanCore)).call(this, config));

    _this.config = config;
    _this.feedByToken = {};
    _this.priceByToken = {};
    return _this;
  }

  _createClass(CryptoScanCore, [{
    key: 'getTokenFeed',
    value: async function getTokenFeed(coinmarketSlug) {
      var tokenData = this._getTokenData(coinmarketSlug);

      if (tokenData && tokenData.feed) {
        var feed = tokenData.feed || {};
        var redditFeed = await this.parseRSSFeed(feed.reddit, _constants.REDDIT_RSS_URL);
        var twitterFeed = await this.parseRSSFeed(feed.twitter, _constants.TWITTER_RSS_URL);

        return {
          twitter: twitterFeed,
          reddit: redditFeed
        };
      }
    }
  }, {
    key: 'getTokensPrice',
    value: async function getTokensPrice() {
      var coinmarketData = await _axios2.default.get(_constants.COINMARKET_TICKER_ENDPOINT, {
        params: {
          limit: 0
        }
      });

      return coinmarketData.data;
    }
  }, {
    key: 'getTokenPrice',
    value: async function getTokenPrice(coinmarketSlug) {
      var coinmarketData = await _axios2.default.get(_constants.COINMARKET_TICKER_ENDPOINT + '/' + coinmarketSlug, {
        params: {
          limit: 0
        }
      });

      if (coinmarketData.data && coinmarketData.data[0]) {
        return coinmarketData.data[0];
      }
    }
  }, {
    key: 'getTokenGraph',
    value: async function getTokenGraph(coinmarketSlug, startTimestamp, endTimestamp) {
      var endpoint = _constants.COINMARKET_GRAPH_ENDPOINT + '/' + coinmarketSlug + '/' + startTimestamp + '000/' + endTimestamp + '000';
      var coinmarketData = await _axios2.default.get(endpoint);
      return coinmarketData.data;
    }
  }, {
    key: '_getTokenData',
    value: function _getTokenData(coinmarketSlug) {
      var list = this.config.list;
      var tokenData = list.filter(function (item) {
        return item.coinmarketSlug === coinmarketSlug;
      })[0];

      return tokenData;
    }
  }]);

  return CryptoScanCore;
}(_parser2.default);

exports.default = CryptoScanCore;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(13);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(3);
var Axios = __webpack_require__(15);
var defaults = __webpack_require__(1);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(7);
axios.CancelToken = __webpack_require__(29);
axios.isCancel = __webpack_require__(6);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(30);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};

function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(1);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(24);
var dispatchRequest = __webpack_require__(25);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(5);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error();
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
  // initialize result and counter
  var block, charCode, idx = 0, map = chars;
  // if the next str index does not exist:
  //   change the mapping table to "="
  //   check if d has no fractional digits
  str.charAt(idx | 0) || (map = '=', idx % 1);
  // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },

    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(26);
var isCancel = __webpack_require__(6);
var defaults = __webpack_require__(1);
var isAbsoluteURL = __webpack_require__(27);
var combineURLs = __webpack_require__(28);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(config.data, config.headers, config.transformRequest);

  // Flatten headers
  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(response.data, response.headers, config.transformResponse);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
  );
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(7);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  // Remove all html tags

  return text.replace(/<\/?[^>]+(>|$)/g, '');
};

;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 44);
  /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.6

  (function () {
    var XMLCData,
        XMLComment,
        XMLDeclaration,
        XMLDocType,
        XMLElement,
        XMLNode,
        XMLProcessingInstruction,
        XMLRaw,
        XMLText,
        isEmpty,
        isFunction,
        isObject,
        ref,
        hasProp = {}.hasOwnProperty;

    ref = __webpack_require__(2), isObject = ref.isObject, isFunction = ref.isFunction, isEmpty = ref.isEmpty;

    XMLElement = null;

    XMLCData = null;

    XMLComment = null;

    XMLDeclaration = null;

    XMLDocType = null;

    XMLRaw = null;

    XMLText = null;

    XMLProcessingInstruction = null;

    module.exports = XMLNode = function () {
      function XMLNode(parent) {
        this.parent = parent;
        if (this.parent) {
          this.options = this.parent.options;
          this.stringify = this.parent.stringify;
        }
        this.children = [];
        if (!XMLElement) {
          XMLElement = __webpack_require__(9);
          XMLCData = __webpack_require__(10);
          XMLComment = __webpack_require__(11);
          XMLDeclaration = __webpack_require__(12);
          XMLDocType = __webpack_require__(13);
          XMLRaw = __webpack_require__(18);
          XMLText = __webpack_require__(19);
          XMLProcessingInstruction = __webpack_require__(20);
        }
      }

      XMLNode.prototype.element = function (name, attributes, text) {
        var childNode, item, j, k, key, lastChild, len, len1, ref1, val;
        lastChild = null;
        if (attributes == null) {
          attributes = {};
        }
        attributes = attributes.valueOf();
        if (!isObject(attributes)) {
          ref1 = [attributes, text], text = ref1[0], attributes = ref1[1];
        }
        if (name != null) {
          name = name.valueOf();
        }
        if (Array.isArray(name)) {
          for (j = 0, len = name.length; j < len; j++) {
            item = name[j];
            lastChild = this.element(item);
          }
        } else if (isFunction(name)) {
          lastChild = this.element(name.apply());
        } else if (isObject(name)) {
          for (key in name) {
            if (!hasProp.call(name, key)) continue;
            val = name[key];
            if (isFunction(val)) {
              val = val.apply();
            }
            if (isObject(val) && isEmpty(val)) {
              val = null;
            }
            if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
              lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
            } else if (!this.options.separateArrayItems && Array.isArray(val)) {
              for (k = 0, len1 = val.length; k < len1; k++) {
                item = val[k];
                childNode = {};
                childNode[key] = item;
                lastChild = this.element(childNode);
              }
            } else if (isObject(val)) {
              lastChild = this.element(key);
              lastChild.element(val);
            } else {
              lastChild = this.element(key, val);
            }
          }
        } else {
          if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
            lastChild = this.text(text);
          } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
            lastChild = this.cdata(text);
          } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
            lastChild = this.comment(text);
          } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
            lastChild = this.raw(text);
          } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && name.indexOf(this.stringify.convertPIKey) === 0) {
            lastChild = this.instruction(name.substr(this.stringify.convertPIKey.length), text);
          } else {
            lastChild = this.node(name, attributes, text);
          }
        }
        if (lastChild == null) {
          throw new Error("Could not create any elements with: " + name);
        }
        return lastChild;
      };

      XMLNode.prototype.insertBefore = function (name, attributes, text) {
        var child, i, removed;
        if (this.isRoot) {
          throw new Error("Cannot insert elements at root level");
        }
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i);
        child = this.parent.element(name, attributes, text);
        Array.prototype.push.apply(this.parent.children, removed);
        return child;
      };

      XMLNode.prototype.insertAfter = function (name, attributes, text) {
        var child, i, removed;
        if (this.isRoot) {
          throw new Error("Cannot insert elements at root level");
        }
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i + 1);
        child = this.parent.element(name, attributes, text);
        Array.prototype.push.apply(this.parent.children, removed);
        return child;
      };

      XMLNode.prototype.remove = function () {
        var i, ref1;
        if (this.isRoot) {
          throw new Error("Cannot remove the root element");
        }
        i = this.parent.children.indexOf(this);
        [].splice.apply(this.parent.children, [i, i - i + 1].concat(ref1 = [])), ref1;
        return this.parent;
      };

      XMLNode.prototype.node = function (name, attributes, text) {
        var child, ref1;
        if (name != null) {
          name = name.valueOf();
        }
        attributes || (attributes = {});
        attributes = attributes.valueOf();
        if (!isObject(attributes)) {
          ref1 = [attributes, text], text = ref1[0], attributes = ref1[1];
        }
        child = new XMLElement(this, name, attributes);
        if (text != null) {
          child.text(text);
        }
        this.children.push(child);
        return child;
      };

      XMLNode.prototype.text = function (value) {
        var child;
        child = new XMLText(this, value);
        this.children.push(child);
        return this;
      };

      XMLNode.prototype.cdata = function (value) {
        var child;
        child = new XMLCData(this, value);
        this.children.push(child);
        return this;
      };

      XMLNode.prototype.comment = function (value) {
        var child;
        child = new XMLComment(this, value);
        this.children.push(child);
        return this;
      };

      XMLNode.prototype.commentBefore = function (value) {
        var child, i, removed;
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i);
        child = this.parent.comment(value);
        Array.prototype.push.apply(this.parent.children, removed);
        return this;
      };

      XMLNode.prototype.commentAfter = function (value) {
        var child, i, removed;
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i + 1);
        child = this.parent.comment(value);
        Array.prototype.push.apply(this.parent.children, removed);
        return this;
      };

      XMLNode.prototype.raw = function (value) {
        var child;
        child = new XMLRaw(this, value);
        this.children.push(child);
        return this;
      };

      XMLNode.prototype.instruction = function (target, value) {
        var insTarget, insValue, instruction, j, len;
        if (target != null) {
          target = target.valueOf();
        }
        if (value != null) {
          value = value.valueOf();
        }
        if (Array.isArray(target)) {
          for (j = 0, len = target.length; j < len; j++) {
            insTarget = target[j];
            this.instruction(insTarget);
          }
        } else if (isObject(target)) {
          for (insTarget in target) {
            if (!hasProp.call(target, insTarget)) continue;
            insValue = target[insTarget];
            this.instruction(insTarget, insValue);
          }
        } else {
          if (isFunction(value)) {
            value = value.apply();
          }
          instruction = new XMLProcessingInstruction(this, target, value);
          this.children.push(instruction);
        }
        return this;
      };

      XMLNode.prototype.instructionBefore = function (target, value) {
        var child, i, removed;
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i);
        child = this.parent.instruction(target, value);
        Array.prototype.push.apply(this.parent.children, removed);
        return this;
      };

      XMLNode.prototype.instructionAfter = function (target, value) {
        var child, i, removed;
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i + 1);
        child = this.parent.instruction(target, value);
        Array.prototype.push.apply(this.parent.children, removed);
        return this;
      };

      XMLNode.prototype.declaration = function (version, encoding, standalone) {
        var doc, xmldec;
        doc = this.document();
        xmldec = new XMLDeclaration(doc, version, encoding, standalone);
        if (doc.children[0] instanceof XMLDeclaration) {
          doc.children[0] = xmldec;
        } else {
          doc.children.unshift(xmldec);
        }
        return doc.root() || doc;
      };

      XMLNode.prototype.doctype = function (pubID, sysID) {
        var child, doc, doctype, i, j, k, len, len1, ref1, ref2;
        doc = this.document();
        doctype = new XMLDocType(doc, pubID, sysID);
        ref1 = doc.children;
        for (i = j = 0, len = ref1.length; j < len; i = ++j) {
          child = ref1[i];
          if (child instanceof XMLDocType) {
            doc.children[i] = doctype;
            return doctype;
          }
        }
        ref2 = doc.children;
        for (i = k = 0, len1 = ref2.length; k < len1; i = ++k) {
          child = ref2[i];
          if (child.isRoot) {
            doc.children.splice(i, 0, doctype);
            return doctype;
          }
        }
        doc.children.push(doctype);
        return doctype;
      };

      XMLNode.prototype.up = function () {
        if (this.isRoot) {
          throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
        }
        return this.parent;
      };

      XMLNode.prototype.root = function () {
        var node;
        node = this;
        while (node) {
          if (node.isDocument) {
            return node.rootObject;
          } else if (node.isRoot) {
            return node;
          } else {
            node = node.parent;
          }
        }
      };

      XMLNode.prototype.document = function () {
        var node;
        node = this;
        while (node) {
          if (node.isDocument) {
            return node;
          } else {
            node = node.parent;
          }
        }
      };

      XMLNode.prototype.end = function (options) {
        return this.document().end(options);
      };

      XMLNode.prototype.prev = function () {
        var i;
        i = this.parent.children.indexOf(this);
        if (i < 1) {
          throw new Error("Already at the first node");
        }
        return this.parent.children[i - 1];
      };

      XMLNode.prototype.next = function () {
        var i;
        i = this.parent.children.indexOf(this);
        if (i === -1 || i === this.parent.children.length - 1) {
          throw new Error("Already at the last node");
        }
        return this.parent.children[i + 1];
      };

      XMLNode.prototype.importDocument = function (doc) {
        var clonedRoot;
        clonedRoot = doc.root().clone();
        clonedRoot.parent = this;
        clonedRoot.isRoot = false;
        this.children.push(clonedRoot);
        return this;
      };

      XMLNode.prototype.ele = function (name, attributes, text) {
        return this.element(name, attributes, text);
      };

      XMLNode.prototype.nod = function (name, attributes, text) {
        return this.node(name, attributes, text);
      };

      XMLNode.prototype.txt = function (value) {
        return this.text(value);
      };

      XMLNode.prototype.dat = function (value) {
        return this.cdata(value);
      };

      XMLNode.prototype.com = function (value) {
        return this.comment(value);
      };

      XMLNode.prototype.ins = function (target, value) {
        return this.instruction(target, value);
      };

      XMLNode.prototype.doc = function () {
        return this.document();
      };

      XMLNode.prototype.dec = function (version, encoding, standalone) {
        return this.declaration(version, encoding, standalone);
      };

      XMLNode.prototype.dtd = function (pubID, sysID) {
        return this.doctype(pubID, sysID);
      };

      XMLNode.prototype.e = function (name, attributes, text) {
        return this.element(name, attributes, text);
      };

      XMLNode.prototype.n = function (name, attributes, text) {
        return this.node(name, attributes, text);
      };

      XMLNode.prototype.t = function (value) {
        return this.text(value);
      };

      XMLNode.prototype.d = function (value) {
        return this.cdata(value);
      };

      XMLNode.prototype.c = function (value) {
        return this.comment(value);
      };

      XMLNode.prototype.r = function (value) {
        return this.raw(value);
      };

      XMLNode.prototype.i = function (target, value) {
        return this.instruction(target, value);
      };

      XMLNode.prototype.u = function () {
        return this.up();
      };

      XMLNode.prototype.importXMLBuilder = function (doc) {
        return this.importDocument(doc);
      };

      return XMLNode;
    }();
  }).call(undefined);

  /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  };

  var g;

  // This works in non-strict mode
  g = function () {
    return this;
  }();

  try {
    // This works if eval is allowed (see CSP)
    g = g || Function("return this")() || (1, eval)("this");
  } catch (e) {
    // This works if the window reference is available
    if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
  }

  // g can still be undefined, but nothing to do about it...
  // We return undefined, instead of nothing here, so it's
  // easier to handle this case. if(!global) { ...}

  module.exports = g;

  /***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  };

  // Generated by CoffeeScript 1.12.6
  (function () {
    var assign,
        isArray,
        isEmpty,
        isFunction,
        isObject,
        isPlainObject,
        slice = [].slice,
        hasProp = {}.hasOwnProperty;

    assign = function assign() {
      var i, key, len, source, sources, target;
      target = arguments[0], sources = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (isFunction(Object.assign)) {
        Object.assign.apply(null, arguments);
      } else {
        for (i = 0, len = sources.length; i < len; i++) {
          source = sources[i];
          if (source != null) {
            for (key in source) {
              if (!hasProp.call(source, key)) continue;
              target[key] = source[key];
            }
          }
        }
      }
      return target;
    };

    isFunction = function isFunction(val) {
      return !!val && Object.prototype.toString.call(val) === '[object Function]';
    };

    isObject = function isObject(val) {
      var ref;
      return !!val && ((ref = typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'function' || ref === 'object');
    };

    isArray = function isArray(val) {
      if (isFunction(Array.isArray)) {
        return Array.isArray(val);
      } else {
        return Object.prototype.toString.call(val) === '[object Array]';
      }
    };

    isEmpty = function isEmpty(val) {
      var key;
      if (isArray(val)) {
        return !val.length;
      } else {
        for (key in val) {
          if (!hasProp.call(val, key)) continue;
          return false;
        }
        return true;
      }
    };

    isPlainObject = function isPlainObject(val) {
      var ctor, proto;
      return isObject(val) && (proto = Object.getPrototypeOf(val)) && (ctor = proto.constructor) && typeof ctor === 'function' && ctor instanceof ctor && Function.prototype.toString.call(ctor) === Function.prototype.toString.call(Object);
    };

    module.exports.assign = assign;

    module.exports.isFunction = isFunction;

    module.exports.isObject = isObject;

    module.exports.isArray = isArray;

    module.exports.isEmpty = isEmpty;

    module.exports.isPlainObject = isPlainObject;
  }).call(undefined);

  /***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  if (typeof Object.create === 'function') {
    // implementation from standard node.js 'util' module
    module.exports = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    };
  } else {
    // old school shim for old browsers
    module.exports = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function TempCtor() {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    };
  }

  /***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  /* WEBPACK VAR INJECTION */
  (function (global) {
    /*!
    * The buffer module from node.js, for the browser.
    *
    * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
    * @license  MIT
    */
    /* eslint-disable no-proto */

    var base64 = __webpack_require__(67);
    var ieee754 = __webpack_require__(68);
    var isArray = __webpack_require__(35);

    exports.Buffer = Buffer;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;

    /**
     * If `Buffer.TYPED_ARRAY_SUPPORT`:
     *   === true    Use Uint8Array implementation (fastest)
     *   === false   Use Object implementation (most compatible, even IE6)
     *
     * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
     * Opera 11.6+, iOS 4.2+.
     *
     * Due to various browser bugs, sometimes the Object implementation will be used even
     * when the browser supports typed arrays.
     *
     * Note:
     *
     *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
     *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
     *
     *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
     *
     *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
     *     incorrect length in some situations.
    
     * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
     * get the Object implementation, which is slower but behaves correctly.
     */
    Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

    /*
     * Export kMaxLength after typed array support is determined.
     */
    exports.kMaxLength = kMaxLength();

    function typedArraySupport() {
      try {
        var arr = new Uint8Array(1);
        arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
            return 42;
          } };
        return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
      } catch (e) {
        return false;
      }
    }

    function kMaxLength() {
      return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
    }

    function createBuffer(that, length) {
      if (kMaxLength() < length) {
        throw new RangeError('Invalid typed array length');
      }
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = new Uint8Array(length);
        that.__proto__ = Buffer.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        if (that === null) {
          that = new Buffer(length);
        }
        that.length = length;
      }

      return that;
    }

    /**
     * The Buffer constructor returns instances of `Uint8Array` that have their
     * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
     * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
     * and the `Uint8Array` methods. Square bracket notation works as expected -- it
     * returns a single octet.
     *
     * The `Uint8Array` prototype remains unmodified.
     */

    function Buffer(arg, encodingOrOffset, length) {
      if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
        return new Buffer(arg, encodingOrOffset, length);
      }

      // Common case.
      if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') {
          throw new Error('If encoding is specified then the first argument must be a string');
        }
        return allocUnsafe(this, arg);
      }
      return from(this, arg, encodingOrOffset, length);
    }

    Buffer.poolSize = 8192; // not used by this implementation

    // TODO: Legacy, not needed anymore. Remove in next major version.
    Buffer._augment = function (arr) {
      arr.__proto__ = Buffer.prototype;
      return arr;
    };

    function from(that, value, encodingOrOffset, length) {
      if (typeof value === 'number') {
        throw new TypeError('"value" argument must not be a number');
      }

      if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
        return fromArrayBuffer(that, value, encodingOrOffset, length);
      }

      if (typeof value === 'string') {
        return fromString(that, value, encodingOrOffset);
      }

      return fromObject(that, value);
    }

    /**
     * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
     * if value is a number.
     * Buffer.from(str[, encoding])
     * Buffer.from(array)
     * Buffer.from(buffer)
     * Buffer.from(arrayBuffer[, byteOffset[, length]])
     **/
    Buffer.from = function (value, encodingOrOffset, length) {
      return from(null, value, encodingOrOffset, length);
    };

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      Buffer.prototype.__proto__ = Uint8Array.prototype;
      Buffer.__proto__ = Uint8Array;
      if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
        // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
        Object.defineProperty(Buffer, Symbol.species, {
          value: null,
          configurable: true
        });
      }
    }

    function assertSize(size) {
      if (typeof size !== 'number') {
        throw new TypeError('"size" argument must be a number');
      } else if (size < 0) {
        throw new RangeError('"size" argument must not be negative');
      }
    }

    function alloc(that, size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(that, size);
      }
      if (fill !== undefined) {
        // Only pay attention to encoding if it's a string. This
        // prevents accidentally sending in a number that would
        // be interpretted as a start offset.
        return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
      }
      return createBuffer(that, size);
    }

    /**
     * Creates a new filled Buffer instance.
     * alloc(size[, fill[, encoding]])
     **/
    Buffer.alloc = function (size, fill, encoding) {
      return alloc(null, size, fill, encoding);
    };

    function allocUnsafe(that, size) {
      assertSize(size);
      that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
      if (!Buffer.TYPED_ARRAY_SUPPORT) {
        for (var i = 0; i < size; ++i) {
          that[i] = 0;
        }
      }
      return that;
    }

    /**
     * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
     * */
    Buffer.allocUnsafe = function (size) {
      return allocUnsafe(null, size);
    };
    /**
     * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
     */
    Buffer.allocUnsafeSlow = function (size) {
      return allocUnsafe(null, size);
    };

    function fromString(that, string, encoding) {
      if (typeof encoding !== 'string' || encoding === '') {
        encoding = 'utf8';
      }

      if (!Buffer.isEncoding(encoding)) {
        throw new TypeError('"encoding" must be a valid string encoding');
      }

      var length = byteLength(string, encoding) | 0;
      that = createBuffer(that, length);

      var actual = that.write(string, encoding);

      if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        that = that.slice(0, actual);
      }

      return that;
    }

    function fromArrayLike(that, array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0;
      that = createBuffer(that, length);
      for (var i = 0; i < length; i += 1) {
        that[i] = array[i] & 255;
      }
      return that;
    }

    function fromArrayBuffer(that, array, byteOffset, length) {
      array.byteLength; // this throws if `array` is not a valid ArrayBuffer

      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('\'offset\' is out of bounds');
      }

      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('\'length\' is out of bounds');
      }

      if (byteOffset === undefined && length === undefined) {
        array = new Uint8Array(array);
      } else if (length === undefined) {
        array = new Uint8Array(array, byteOffset);
      } else {
        array = new Uint8Array(array, byteOffset, length);
      }

      if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = array;
        that.__proto__ = Buffer.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        that = fromArrayLike(that, array);
      }
      return that;
    }

    function fromObject(that, obj) {
      if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        that = createBuffer(that, len);

        if (that.length === 0) {
          return that;
        }

        obj.copy(that, 0, 0, len);
        return that;
      }

      if (obj) {
        if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
          if (typeof obj.length !== 'number' || isnan(obj.length)) {
            return createBuffer(that, 0);
          }
          return fromArrayLike(that, obj);
        }

        if (obj.type === 'Buffer' && isArray(obj.data)) {
          return fromArrayLike(that, obj.data);
        }
      }

      throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
    }

    function checked(length) {
      // Note: cannot use `length < kMaxLength()` here because that fails when
      // length is NaN (which is otherwise coerced to zero.)
      if (length >= kMaxLength()) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
      }
      return length | 0;
    }

    function SlowBuffer(length) {
      if (+length != length) {
        // eslint-disable-line eqeqeq
        length = 0;
      }
      return Buffer.alloc(+length);
    }

    Buffer.isBuffer = function isBuffer(b) {
      return !!(b != null && b._isBuffer);
    };

    Buffer.compare = function compare(a, b) {
      if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
        throw new TypeError('Arguments must be Buffers');
      }

      if (a === b) return 0;

      var x = a.length;
      var y = b.length;

      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }

      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };

    Buffer.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return true;
        default:
          return false;
      }
    };

    Buffer.concat = function concat(list, length) {
      if (!isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }

      if (list.length === 0) {
        return Buffer.alloc(0);
      }

      var i;
      if (length === undefined) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }

      var buffer = Buffer.allocUnsafe(length);
      var pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (!Buffer.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        buf.copy(buffer, pos);
        pos += buf.length;
      }
      return buffer;
    };

    function byteLength(string, encoding) {
      if (Buffer.isBuffer(string)) {
        return string.length;
      }
      if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== 'string') {
        string = '' + string;
      }

      var len = string.length;
      if (len === 0) return 0;

      // Use a for loop to avoid recursion
      var loweredCase = false;
      for (;;) {
        switch (encoding) {
          case 'ascii':
          case 'latin1':
          case 'binary':
            return len;
          case 'utf8':
          case 'utf-8':
          case undefined:
            return utf8ToBytes(string).length;
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return len * 2;
          case 'hex':
            return len >>> 1;
          case 'base64':
            return base64ToBytes(string).length;
          default:
            if (loweredCase) return utf8ToBytes(string).length; // assume utf8
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer.byteLength = byteLength;

    function slowToString(encoding, start, end) {
      var loweredCase = false;

      // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
      // property of a typed array.

      // This behaves neither like String nor Uint8Array in that we set start/end
      // to their upper/lower bounds if the value passed is out of range.
      // undefined is handled specially as per ECMA-262 6th Edition,
      // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
      if (start === undefined || start < 0) {
        start = 0;
      }
      // Return early if start > this.length. Done here to prevent potential uint32
      // coercion fail below.
      if (start > this.length) {
        return '';
      }

      if (end === undefined || end > this.length) {
        end = this.length;
      }

      if (end <= 0) {
        return '';
      }

      // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
      end >>>= 0;
      start >>>= 0;

      if (end <= start) {
        return '';
      }

      if (!encoding) encoding = 'utf8';

      while (true) {
        switch (encoding) {
          case 'hex':
            return hexSlice(this, start, end);

          case 'utf8':
          case 'utf-8':
            return utf8Slice(this, start, end);

          case 'ascii':
            return asciiSlice(this, start, end);

          case 'latin1':
          case 'binary':
            return latin1Slice(this, start, end);

          case 'base64':
            return base64Slice(this, start, end);

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return utf16leSlice(this, start, end);

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
        }
      }
    }

    // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
    // Buffer instances.
    Buffer.prototype._isBuffer = true;

    function swap(b, n, m) {
      var i = b[n];
      b[n] = b[m];
      b[m] = i;
    }

    Buffer.prototype.swap16 = function swap16() {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits');
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };

    Buffer.prototype.swap32 = function swap32() {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits');
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };

    Buffer.prototype.swap64 = function swap64() {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits');
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };

    Buffer.prototype.toString = function toString() {
      var length = this.length | 0;
      if (length === 0) return '';
      if (arguments.length === 0) return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };

    Buffer.prototype.equals = function equals(b) {
      if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
      if (this === b) return true;
      return Buffer.compare(this, b) === 0;
    };

    Buffer.prototype.inspect = function inspect() {
      var str = '';
      var max = exports.INSPECT_MAX_BYTES;
      if (this.length > 0) {
        str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
        if (this.length > max) str += ' ... ';
      }
      return '<Buffer ' + str + '>';
    };

    Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (!Buffer.isBuffer(target)) {
        throw new TypeError('Argument must be a Buffer');
      }

      if (start === undefined) {
        start = 0;
      }
      if (end === undefined) {
        end = target ? target.length : 0;
      }
      if (thisStart === undefined) {
        thisStart = 0;
      }
      if (thisEnd === undefined) {
        thisEnd = this.length;
      }

      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError('out of range index');
      }

      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }

      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;

      if (this === target) return 0;

      var x = thisEnd - thisStart;
      var y = end - start;
      var len = Math.min(x, y);

      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);

      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }

      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };

    // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
    // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
    //
    // Arguments:
    // - buffer - a Buffer to search
    // - val - a string, Buffer, or number
    // - byteOffset - an index into `buffer`; will be clamped to an int32
    // - encoding - an optional encoding, relevant is val is a string
    // - dir - true for indexOf, false for lastIndexOf
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      // Empty buffer means no match
      if (buffer.length === 0) return -1;

      // Normalize byteOffset
      if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff;
      } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000;
      }
      byteOffset = +byteOffset; // Coerce to Number.
      if (isNaN(byteOffset)) {
        // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
        byteOffset = dir ? 0 : buffer.length - 1;
      }

      // Normalize byteOffset: negative offsets start from the end of the buffer
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir) return -1;else byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;else return -1;
      }

      // Normalize val
      if (typeof val === 'string') {
        val = Buffer.from(val, encoding);
      }

      // Finally, search either indexOf (if dir is true) or lastIndexOf
      if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === 'number') {
        val = val & 0xFF; // Search for a byte value [0-255]
        if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }

      throw new TypeError('val must be string, number or Buffer');
    }

    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      var indexSize = 1;
      var arrLength = arr.length;
      var valLength = val.length;

      if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }

      function read(buf, i) {
        if (indexSize === 1) {
          return buf[i];
        } else {
          return buf.readUInt16BE(i * indexSize);
        }
      }

      var i;
      if (dir) {
        var foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          var found = true;
          for (var j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found) return i;
        }
      }

      return -1;
    }

    Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };

    Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };

    Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };

    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }

      // must be an even number of digits
      var strLen = string.length;
      if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

      if (length > strLen / 2) {
        length = strLen / 2;
      }
      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (isNaN(parsed)) return i;
        buf[offset + i] = parsed;
      }
      return i;
    }

    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }

    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }

    function latin1Write(buf, string, offset, length) {
      return asciiWrite(buf, string, offset, length);
    }

    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }

    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }

    Buffer.prototype.write = function write(string, offset, length, encoding) {
      // Buffer#write(string)
      if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
        // Buffer#write(string, encoding)
      } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
        // Buffer#write(string, offset[, length][, encoding])
      } else if (isFinite(offset)) {
        offset = offset | 0;
        if (isFinite(length)) {
          length = length | 0;
          if (encoding === undefined) encoding = 'utf8';
        } else {
          encoding = length;
          length = undefined;
        }
        // legacy write(string, encoding, offset, length) - remove in v0.13
      } else {
        throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
      }

      var remaining = this.length - offset;
      if (length === undefined || length > remaining) length = remaining;

      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds');
      }

      if (!encoding) encoding = 'utf8';

      var loweredCase = false;
      for (;;) {
        switch (encoding) {
          case 'hex':
            return hexWrite(this, string, offset, length);

          case 'utf8':
          case 'utf-8':
            return utf8Write(this, string, offset, length);

          case 'ascii':
            return asciiWrite(this, string, offset, length);

          case 'latin1':
          case 'binary':
            return latin1Write(this, string, offset, length);

          case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return ucs2Write(this, string, offset, length);

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };

    Buffer.prototype.toJSON = function toJSON() {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };

    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }

    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      var res = [];

      var i = start;
      while (i < end) {
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;

          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 0x80) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                if (tempCodePoint > 0x7F) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }

        if (codePoint === null) {
          // we did not generate a valid codePoint so insert a
          // replacement char (U+FFFD) and advance only 1 byte
          codePoint = 0xFFFD;
          bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
          // encode to utf16 (surrogate pair dance)
          codePoint -= 0x10000;
          res.push(codePoint >>> 10 & 0x3FF | 0xD800);
          codePoint = 0xDC00 | codePoint & 0x3FF;
        }

        res.push(codePoint);
        i += bytesPerSequence;
      }

      return decodeCodePointsArray(res);
    }

    // Based on http://stackoverflow.com/a/22747272/680742, the browser with
    // the lowest limit is Chrome, with 0x10000 args.
    // We go 1 magnitude less, for safety
    var MAX_ARGUMENTS_LENGTH = 0x1000;

    function decodeCodePointsArray(codePoints) {
      var len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
      }

      // Decode in chunks to avoid "call stack size exceeded".
      var res = '';
      var i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
      }
      return res;
    }

    function asciiSlice(buf, start, end) {
      var ret = '';
      end = Math.min(buf.length, end);

      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 0x7F);
      }
      return ret;
    }

    function latin1Slice(buf, start, end) {
      var ret = '';
      end = Math.min(buf.length, end);

      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret;
    }

    function hexSlice(buf, start, end) {
      var len = buf.length;

      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;

      var out = '';
      for (var i = start; i < end; ++i) {
        out += toHex(buf[i]);
      }
      return out;
    }

    function utf16leSlice(buf, start, end) {
      var bytes = buf.slice(start, end);
      var res = '';
      for (var i = 0; i < bytes.length; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res;
    }

    Buffer.prototype.slice = function slice(start, end) {
      var len = this.length;
      start = ~~start;
      end = end === undefined ? len : ~~end;

      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }

      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }

      if (end < start) end = start;

      var newBuf;
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        newBuf.__proto__ = Buffer.prototype;
      } else {
        var sliceLen = end - start;
        newBuf = new Buffer(sliceLen, undefined);
        for (var i = 0; i < sliceLen; ++i) {
          newBuf[i] = this[i + start];
        }
      }

      return newBuf;
    };

    /*
     * Need to make sure that buffer isn't trying to write out of bounds.
     */
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
      if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
    }

    Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);

      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
      }

      return val;
    };

    Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        checkOffset(offset, byteLength, this.length);
      }

      var val = this[offset + --byteLength];
      var mul = 1;
      while (byteLength > 0 && (mul *= 0x100)) {
        val += this[offset + --byteLength] * mul;
      }

      return val;
    };

    Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset];
    };

    Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };

    Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };

    Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);

      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
    };

    Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);

      return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };

    Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);

      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
      }
      mul *= 0x80;

      if (val >= mul) val -= Math.pow(2, 8 * byteLength);

      return val;
    };

    Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);

      var i = byteLength;
      var mul = 1;
      var val = this[offset + --i];
      while (i > 0 && (mul *= 0x100)) {
        val += this[offset + --i] * mul;
      }
      mul *= 0x80;

      if (val >= mul) val -= Math.pow(2, 8 * byteLength);

      return val;
    };

    Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 0x80)) return this[offset];
      return (0xff - this[offset] + 1) * -1;
    };

    Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset] | this[offset + 1] << 8;
      return val & 0x8000 ? val | 0xFFFF0000 : val;
    };

    Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | this[offset] << 8;
      return val & 0x8000 ? val | 0xFFFF0000 : val;
    };

    Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);

      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };

    Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);

      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };

    Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };

    Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };

    Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };

    Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };

    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length) throw new RangeError('Index out of range');
    }

    Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
      }

      var mul = 1;
      var i = 0;
      this[offset] = value & 0xFF;
      while (++i < byteLength && (mul *= 0x100)) {
        this[offset + i] = value / mul & 0xFF;
      }

      return offset + byteLength;
    };

    Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
      }

      var i = byteLength - 1;
      var mul = 1;
      this[offset + i] = value & 0xFF;
      while (--i >= 0 && (mul *= 0x100)) {
        this[offset + i] = value / mul & 0xFF;
      }

      return offset + byteLength;
    };

    Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
      if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
      this[offset] = value & 0xff;
      return offset + 1;
    };

    function objectWriteUInt16(buf, value, offset, littleEndian) {
      if (value < 0) value = 0xffff + value + 1;
      for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
        buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
      }
    }

    Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2;
    };

    Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 0xff;
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2;
    };

    function objectWriteUInt32(buf, value, offset, littleEndian) {
      if (value < 0) value = 0xffffffff + value + 1;
      for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
        buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
      }
    }

    Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 0xff;
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4;
    };

    Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 0xff;
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4;
    };

    Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);

        checkInt(this, value, offset, byteLength, limit - 1, -limit);
      }

      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 0xFF;
      while (++i < byteLength && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
      }

      return offset + byteLength;
    };

    Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);

        checkInt(this, value, offset, byteLength, limit - 1, -limit);
      }

      var i = byteLength - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value & 0xFF;
      while (--i >= 0 && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
      }

      return offset + byteLength;
    };

    Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
      if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
      if (value < 0) value = 0xff + value + 1;
      this[offset] = value & 0xff;
      return offset + 1;
    };

    Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2;
    };

    Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 0xff;
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2;
    };

    Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4;
    };

    Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
      if (value < 0) value = 0xffffffff + value + 1;
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 0xff;
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4;
    };

    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError('Index out of range');
      if (offset < 0) throw new RangeError('Index out of range');
    }

    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }

    Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };

    Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };

    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }

    Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };

    Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };

    // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
    Buffer.prototype.copy = function copy(target, targetStart, start, end) {
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;

      // Copy 0 bytes; we're done
      if (end === start) return 0;
      if (target.length === 0 || this.length === 0) return 0;

      // Fatal error conditions
      if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds');
      }
      if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
      if (end < 0) throw new RangeError('sourceEnd out of bounds');

      // Are we oob?
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }

      var len = end - start;
      var i;

      if (this === target && start < targetStart && targetStart < end) {
        // descending copy from end
        for (i = len - 1; i >= 0; --i) {
          target[i + targetStart] = this[i + start];
        }
      } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
        // ascending copy from start
        for (i = 0; i < len; ++i) {
          target[i + targetStart] = this[i + start];
        }
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
      }

      return len;
    };

    // Usage:
    //    buffer.fill(number[, offset[, end]])
    //    buffer.fill(buffer[, offset[, end]])
    //    buffer.fill(string[, offset[, end]][, encoding])
    Buffer.prototype.fill = function fill(val, start, end, encoding) {
      // Handle string cases:
      if (typeof val === 'string') {
        if (typeof start === 'string') {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === 'string') {
          encoding = end;
          end = this.length;
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0);
          if (code < 256) {
            val = code;
          }
        }
        if (encoding !== undefined && typeof encoding !== 'string') {
          throw new TypeError('encoding must be a string');
        }
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
          throw new TypeError('Unknown encoding: ' + encoding);
        }
      } else if (typeof val === 'number') {
        val = val & 255;
      }

      // Invalid ranges are not set to a default, so can range check early.
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index');
      }

      if (end <= start) {
        return this;
      }

      start = start >>> 0;
      end = end === undefined ? this.length : end >>> 0;

      if (!val) val = 0;

      var i;
      if (typeof val === 'number') {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
        var len = bytes.length;
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }

      return this;
    };

    // HELPER FUNCTIONS
    // ================

    var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

    function base64clean(str) {
      // Node strips out invalid characters like \n and \t from the string, base64-js does not
      str = stringtrim(str).replace(INVALID_BASE64_RE, '');
      // Node converts strings with length < 2 to ''
      if (str.length < 2) return '';
      // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
      while (str.length % 4 !== 0) {
        str = str + '=';
      }
      return str;
    }

    function stringtrim(str) {
      if (str.trim) return str.trim();
      return str.replace(/^\s+|\s+$/g, '');
    }

    function toHex(n) {
      if (n < 16) return '0' + n.toString(16);
      return n.toString(16);
    }

    function utf8ToBytes(string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];

      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);

        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
          // last char was a lead
          if (!leadSurrogate) {
            // no lead yet
            if (codePoint > 0xDBFF) {
              // unexpected trail
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              continue;
            } else if (i + 1 === length) {
              // unpaired lead
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              continue;
            }

            // valid lead
            leadSurrogate = codePoint;

            continue;
          }

          // 2 leads in a row
          if (codePoint < 0xDC00) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            leadSurrogate = codePoint;
            continue;
          }

          // valid surrogate pair
          codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) {
          // valid bmp char, but last char was a lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }

        leadSurrogate = null;

        // encode utf8
        if (codePoint < 0x80) {
          if ((units -= 1) < 0) break;
          bytes.push(codePoint);
        } else if (codePoint < 0x800) {
          if ((units -= 2) < 0) break;
          bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
          if ((units -= 3) < 0) break;
          bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
          if ((units -= 4) < 0) break;
          bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else {
          throw new Error('Invalid code point');
        }
      }

      return bytes;
    }

    function asciiToBytes(str) {
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        // Node's code seems to be doing this and not & 0x7F..
        byteArray.push(str.charCodeAt(i) & 0xFF);
      }
      return byteArray;
    }

    function utf16leToBytes(str, units) {
      var c, hi, lo;
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break;

        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }

      return byteArray;
    }

    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }

    function blitBuffer(src, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
      }
      return i;
    }

    function isnan(val) {
      return val !== val; // eslint-disable-line no-self-compare
    }
    /* WEBPACK VAR INJECTION */
  }).call(exports, __webpack_require__(1));

  /***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  // a duplex stream is just a stream that is both readable and writable.
  // Since JS doesn't have multiple prototypal inheritance, this class
  // prototypally inherits from Readable, and then parasitically from
  // Writable.


  /*<replacement>*/

  var processNextTick = __webpack_require__(22);
  /*</replacement>*/

  /*<replacement>*/
  var objectKeys = Object.keys || function (obj) {
    var keys = [];
    for (var key in obj) {
      keys.push(key);
    }return keys;
  };
  /*</replacement>*/

  module.exports = Duplex;

  /*<replacement>*/
  var util = __webpack_require__(8);
  util.inherits = __webpack_require__(3);
  /*</replacement>*/

  var Readable = __webpack_require__(36);
  var Writable = __webpack_require__(26);

  util.inherits(Duplex, Readable);

  var keys = objectKeys(Writable.prototype);
  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }

  function Duplex(options) {
    if (!(this instanceof Duplex)) return new Duplex(options);

    Readable.call(this, options);
    Writable.call(this, options);

    if (options && options.readable === false) this.readable = false;

    if (options && options.writable === false) this.writable = false;

    this.allowHalfOpen = true;
    if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

    this.once('end', onend);
  }

  // the no-half-open enforcer
  function onend() {
    // if we allow half-open state, or if the writable side ended,
    // then we're ok.
    if (this.allowHalfOpen || this._writableState.ended) return;

    // no more data can be written.
    // But allow more writes to happen in this tick.
    processNextTick(onEndNT, this);
  }

  function onEndNT(self) {
    self.end();
  }

  Object.defineProperty(Duplex.prototype, 'destroyed', {
    get: function get() {
      if (this._readableState === undefined || this._writableState === undefined) {
        return false;
      }
      return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set(value) {
      // we ignore the value if the stream
      // has not been initialized yet
      if (this._readableState === undefined || this._writableState === undefined) {
        return;
      }

      // backward compatibility, the user is explicitly
      // managing destroyed
      this._readableState.destroyed = value;
      this._writableState.destroyed = value;
    }
  });

  Duplex.prototype._destroy = function (err, cb) {
    this.push(null);
    this.end();

    processNextTick(cb, err);
  };

  function forEach(xs, f) {
    for (var i = 0, l = xs.length; i < l; i++) {
      f(xs[i], i);
    }
  }

  /***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // shim for using process in browser

  var process = module.exports = {};

  // cached from whatever global is present so that test runners that stub it
  // don't break things.  But we need to wrap it in a try catch in case it is
  // wrapped in strict mode code which doesn't define any globals.  It's inside a
  // function because try/catches deoptimize in certain engines.

  var cachedSetTimeout;
  var cachedClearTimeout;

  function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
  }
  function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
  }
  (function () {
    try {
      if (typeof setTimeout === 'function') {
        cachedSetTimeout = setTimeout;
      } else {
        cachedSetTimeout = defaultSetTimout;
      }
    } catch (e) {
      cachedSetTimeout = defaultSetTimout;
    }
    try {
      if (typeof clearTimeout === 'function') {
        cachedClearTimeout = clearTimeout;
      } else {
        cachedClearTimeout = defaultClearTimeout;
      }
    } catch (e) {
      cachedClearTimeout = defaultClearTimeout;
    }
  })();
  function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
      //normal enviroments in sane situations
      return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
      cachedSetTimeout = setTimeout;
      return setTimeout(fun, 0);
    }
    try {
      // when when somebody has screwed with setTimeout but no I.E. maddness
      return cachedSetTimeout(fun, 0);
    } catch (e) {
      try {
        // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
        return cachedSetTimeout.call(null, fun, 0);
      } catch (e) {
        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
        return cachedSetTimeout.call(this, fun, 0);
      }
    }
  }
  function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
      //normal enviroments in sane situations
      return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
      cachedClearTimeout = clearTimeout;
      return clearTimeout(marker);
    }
    try {
      // when when somebody has screwed with setTimeout but no I.E. maddness
      return cachedClearTimeout(marker);
    } catch (e) {
      try {
        // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
        return cachedClearTimeout.call(null, marker);
      } catch (e) {
        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
        // Some versions of I.E. have different rules for clearTimeout vs setTimeout
        return cachedClearTimeout.call(this, marker);
      }
    }
  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;

  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }

  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
  }

  process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      runTimeout(drainQueue);
    }
  };

  // v8 likes predictible objects
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function () {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = ''; // empty string to avoid regexp issues
  process.versions = {};

  function noop() {}

  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.prependListener = noop;
  process.prependOnceListener = noop;

  process.listeners = function (name) {
    return [];
  };

  process.binding = function (name) {
    throw new Error('process.binding is not supported');
  };

  process.cwd = function () {
    return '/';
  };
  process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function () {
    return 0;
  };

  /***/
},
/* 7 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  exports = module.exports = __webpack_require__(36);
  exports.Stream = exports;
  exports.Readable = exports;
  exports.Writable = __webpack_require__(26);
  exports.Duplex = __webpack_require__(5);
  exports.Transform = __webpack_require__(40);
  exports.PassThrough = __webpack_require__(74);

  /***/
},
/* 8 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  /* WEBPACK VAR INJECTION */
  (function (Buffer) {

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
      return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };

    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.

    // NOTE: These type checking functions intentionally don't use `instanceof`
    // because it is fragile and can be easily faked with `Object.create()`.

    function isArray(arg) {
      if (Array.isArray) {
        return Array.isArray(arg);
      }
      return objectToString(arg) === '[object Array]';
    }
    exports.isArray = isArray;

    function isBoolean(arg) {
      return typeof arg === 'boolean';
    }
    exports.isBoolean = isBoolean;

    function isNull(arg) {
      return arg === null;
    }
    exports.isNull = isNull;

    function isNullOrUndefined(arg) {
      return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined;

    function isNumber(arg) {
      return typeof arg === 'number';
    }
    exports.isNumber = isNumber;

    function isString(arg) {
      return typeof arg === 'string';
    }
    exports.isString = isString;

    function isSymbol(arg) {
      return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol';
    }
    exports.isSymbol = isSymbol;

    function isUndefined(arg) {
      return arg === void 0;
    }
    exports.isUndefined = isUndefined;

    function isRegExp(re) {
      return objectToString(re) === '[object RegExp]';
    }
    exports.isRegExp = isRegExp;

    function isObject(arg) {
      return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
    }
    exports.isObject = isObject;

    function isDate(d) {
      return objectToString(d) === '[object Date]';
    }
    exports.isDate = isDate;

    function isError(e) {
      return objectToString(e) === '[object Error]' || e instanceof Error;
    }
    exports.isError = isError;

    function isFunction(arg) {
      return typeof arg === 'function';
    }
    exports.isFunction = isFunction;

    function isPrimitive(arg) {
      return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol' || // ES6 symbol
      typeof arg === 'undefined';
    }
    exports.isPrimitive = isPrimitive;

    exports.isBuffer = Buffer.isBuffer;

    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
    /* WEBPACK VAR INJECTION */
  }).call(exports, __webpack_require__(4).Buffer);

  /***/
},
/* 9 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.6

  (function () {
    var XMLAttribute,
        XMLElement,
        XMLNode,
        isFunction,
        isObject,
        ref,
        extend = function extend(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }function ctor() {
        this.constructor = child;
      }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
    },
        hasProp = {}.hasOwnProperty;

    ref = __webpack_require__(2), isObject = ref.isObject, isFunction = ref.isFunction;

    XMLNode = __webpack_require__(0);

    XMLAttribute = __webpack_require__(32);

    module.exports = XMLElement = function (superClass) {
      extend(XMLElement, superClass);

      function XMLElement(parent, name, attributes) {
        XMLElement.__super__.constructor.call(this, parent);
        if (name == null) {
          throw new Error("Missing element name");
        }
        this.name = this.stringify.eleName(name);
        this.attributes = {};
        if (attributes != null) {
          this.attribute(attributes);
        }
        if (parent.isDocument) {
          this.isRoot = true;
          this.documentObject = parent;
          parent.rootObject = this;
        }
      }

      XMLElement.prototype.clone = function () {
        var att, attName, clonedSelf, ref1;
        clonedSelf = Object.create(this);
        if (clonedSelf.isRoot) {
          clonedSelf.documentObject = null;
        }
        clonedSelf.attributes = {};
        ref1 = this.attributes;
        for (attName in ref1) {
          if (!hasProp.call(ref1, attName)) continue;
          att = ref1[attName];
          clonedSelf.attributes[attName] = att.clone();
        }
        clonedSelf.children = [];
        this.children.forEach(function (child) {
          var clonedChild;
          clonedChild = child.clone();
          clonedChild.parent = clonedSelf;
          return clonedSelf.children.push(clonedChild);
        });
        return clonedSelf;
      };

      XMLElement.prototype.attribute = function (name, value) {
        var attName, attValue;
        if (name != null) {
          name = name.valueOf();
        }
        if (isObject(name)) {
          for (attName in name) {
            if (!hasProp.call(name, attName)) continue;
            attValue = name[attName];
            this.attribute(attName, attValue);
          }
        } else {
          if (isFunction(value)) {
            value = value.apply();
          }
          if (!this.options.skipNullAttributes || value != null) {
            this.attributes[name] = new XMLAttribute(this, name, value);
          }
        }
        return this;
      };

      XMLElement.prototype.removeAttribute = function (name) {
        var attName, i, len;
        if (name == null) {
          throw new Error("Missing attribute name");
        }
        name = name.valueOf();
        if (Array.isArray(name)) {
          for (i = 0, len = name.length; i < len; i++) {
            attName = name[i];
            delete this.attributes[attName];
          }
        } else {
          delete this.attributes[name];
        }
        return this;
      };

      XMLElement.prototype.toString = function (options) {
        return this.options.writer.set(options).element(this);
      };

      XMLElement.prototype.att = function (name, value) {
        return this.attribute(name, value);
      };

      XMLElement.prototype.a = function (name, value) {
        return this.attribute(name, value);
      };

      return XMLElement;
    }(XMLNode);
  }).call(undefined);

  /***/
},
/* 10 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.6

  (function () {
    var XMLCData,
        XMLNode,
        extend = function extend(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }function ctor() {
        this.constructor = child;
      }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
    },
        hasProp = {}.hasOwnProperty;

    XMLNode = __webpack_require__(0);

    module.exports = XMLCData = function (superClass) {
      extend(XMLCData, superClass);

      function XMLCData(parent, text) {
        XMLCData.__super__.constructor.call(this, parent);
        if (text == null) {
          throw new Error("Missing CDATA text");
        }
        this.text = this.stringify.cdata(text);
      }

      XMLCData.prototype.clone = function () {
        return Object.create(this);
      };

      XMLCData.prototype.toString = function (options) {
        return this.options.writer.set(options).cdata(this);
      };

      return XMLCData;
    }(XMLNode);
  }).call(undefined);

  /***/
},
/* 11 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.6

  (function () {
    var XMLComment,
        XMLNode,
        extend = function extend(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }function ctor() {
        this.constructor = child;
      }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
    },
        hasProp = {}.hasOwnProperty;

    XMLNode = __webpack_require__(0);

    module.exports = XMLComment = function (superClass) {
      extend(XMLComment, superClass);

      function XMLComment(parent, text) {
        XMLComment.__super__.constructor.call(this, parent);
        if (text == null) {
          throw new Error("Missing comment text");
        }
        this.text = this.stringify.comment(text);
      }

      XMLComment.prototype.clone = function () {
        return Object.create(this);
      };

      XMLComment.prototype.toString = function (options) {
        return this.options.writer.set(options).comment(this);
      };

      return XMLComment;
    }(XMLNode);
  }).call(undefined);

  /***/
},
/* 12 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.6

  (function () {
    var XMLDeclaration,
        XMLNode,
        isObject,
        extend = function extend(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }function ctor() {
        this.constructor = child;
      }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
    },
        hasProp = {}.hasOwnProperty;

    isObject = __webpack_require__(2).isObject;

    XMLNode = __webpack_require__(0);

    module.exports = XMLDeclaration = function (superClass) {
      extend(XMLDeclaration, superClass);

      function XMLDeclaration(parent, version, encoding, standalone) {
        var ref;
        XMLDeclaration.__super__.constructor.call(this, parent);
        if (isObject(version)) {
          ref = version, version = ref.version, encoding = ref.encoding, standalone = ref.standalone;
        }
        if (!version) {
          version = '1.0';
        }
        this.version = this.stringify.xmlVersion(version);
        if (encoding != null) {
          this.encoding = this.stringify.xmlEncoding(encoding);
        }
        if (standalone != null) {
          this.standalone = this.stringify.xmlStandalone(standalone);
        }
      }

      XMLDeclaration.prototype.toString = function (options) {
        return this.options.writer.set(options).declaration(this);
      };

      return XMLDeclaration;
    }(XMLNode);
  }).call(undefined);

  /***/
},
/* 13 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.6

  (function () {
    var XMLDTDAttList,
        XMLDTDElement,
        XMLDTDEntity,
        XMLDTDNotation,
        XMLDocType,
        XMLNode,
        isObject,
        extend = function extend(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }function ctor() {
        this.constructor = child;
      }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
    },
        hasProp = {}.hasOwnProperty;

    isObject = __webpack_require__(2).isObject;

    XMLNode = __webpack_require__(0);

    XMLDTDAttList = __webpack_require__(14);

    XMLDTDEntity = __webpack_require__(15);

    XMLDTDElement = __webpack_require__(16);

    XMLDTDNotation = __webpack_require__(17);

    module.exports = XMLDocType = function (superClass) {
      extend(XMLDocType, superClass);

      function XMLDocType(parent, pubID, sysID) {
        var ref, ref1;
        XMLDocType.__super__.constructor.call(this, parent);
        this.documentObject = parent;
        if (isObject(pubID)) {
          ref = pubID, pubID = ref.pubID, sysID = ref.sysID;
        }
        if (sysID == null) {
          ref1 = [pubID, sysID], sysID = ref1[0], pubID = ref1[1];
        }
        if (pubID != null) {
          this.pubID = this.stringify.dtdPubID(pubID);
        }
        if (sysID != null) {
          this.sysID = this.stringify.dtdSysID(sysID);
        }
      }

      XMLDocType.prototype.element = function (name, value) {
        var child;
        child = new XMLDTDElement(this, name, value);
        this.children.push(child);
        return this;
      };

      XMLDocType.prototype.attList = function (elementName, attributeName, attributeType, defaultValueType, defaultValue) {
        var child;
        child = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
        this.children.push(child);
        return this;
      };

      XMLDocType.prototype.entity = function (name, value) {
        var child;
        child = new XMLDTDEntity(this, false, name, value);
        this.children.push(child);
        return this;
      };

      XMLDocType.prototype.pEntity = function (name, value) {
        var child;
        child = new XMLDTDEntity(this, true, name, value);
        this.children.push(child);
        return this;
      };

      XMLDocType.prototype.notation = function (name, value) {
        var child;
        child = new XMLDTDNotation(this, name, value);
        this.children.push(child);
        return this;
      };

      XMLDocType.prototype.toString = function (options) {
        return this.options.writer.set(options).docType(this);
      };

      XMLDocType.prototype.ele = function (name, value) {
        return this.element(name, value);
      };

      XMLDocType.prototype.att = function (elementName, attributeName, attributeType, defaultValueType, defaultValue) {
        return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
      };

      XMLDocType.prototype.ent = function (name, value) {
        return this.entity(name, value);
      };

      XMLDocType.prototype.pent = function (name, value) {
        return this.pEntity(name, value);
      };

      XMLDocType.prototype.not = function (name, value) {
        return this.notation(name, value);
      };

      XMLDocType.prototype.up = function () {
        return this.root() || this.documentObject;
      };

      return XMLDocType;
    }(XMLNode);
  }).call(undefined);

  /***/
},
/* 14 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.6

  (function () {
    var XMLDTDAttList,
        XMLNode,
        extend = function extend(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }function ctor() {
        this.constructor = child;
      }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
    },
        hasProp = {}.hasOwnProperty;

    XMLNode = __webpack_require__(0);

    module.exports = XMLDTDAttList = function (superClass) {
      extend(XMLDTDAttList, superClass);

      function XMLDTDAttList(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
        XMLDTDAttList.__super__.constructor.call(this, parent);
        if (elementName == null) {
          throw new Error("Missing DTD element name");
        }
        if (attributeName == null) {
          throw new Error("Missing DTD attribute name");
        }
        if (!attributeType) {
          throw new Error("Missing DTD attribute type");
        }
        if (!defaultValueType) {
          throw new Error("Missing DTD attribute default");
        }
        if (defaultValueType.indexOf('#') !== 0) {
          defaultValueType = '#' + defaultValueType;
        }
        if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
          throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT");
        }
        if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) {
          throw new Error("Default value only applies to #FIXED or #DEFAULT");
        }
        this.elementName = this.stringify.eleName(elementName);
        this.attributeName = this.stringify.attName(attributeName);
        this.attributeType = this.stringify.dtdAttType(attributeType);
        this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
        this.defaultValueType = defaultValueType;
      }

      XMLDTDAttList.prototype.toString = function (options) {
        return this.options.writer.set(options).dtdAttList(this);
      };

      return XMLDTDAttList;
    }(XMLNode);
  }).call(undefined);

  /***/
},
/* 15 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.6

  (function () {
    var XMLDTDEntity,
        XMLNode,
        isObject,
        extend = function extend(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }function ctor() {
        this.constructor = child;
      }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
    },
        hasProp = {}.hasOwnProperty;

    isObject = __webpack_require__(2).isObject;

    XMLNode = __webpack_require__(0);

    module.exports = XMLDTDEntity = function (superClass) {
      extend(XMLDTDEntity, superClass);

      function XMLDTDEntity(parent, pe, name, value) {
        XMLDTDEntity.__super__.constructor.call(this, parent);
        if (name == null) {
          throw new Error("Missing entity name");
        }
        if (value == null) {
          throw new Error("Missing entity value");
        }
        this.pe = !!pe;
        this.name = this.stringify.eleName(name);
        if (!isObject(value)) {
          this.value = this.stringify.dtdEntityValue(value);
        } else {
          if (!value.pubID && !value.sysID) {
            throw new Error("Public and/or system identifiers are required for an external entity");
          }
          if (value.pubID && !value.sysID) {
            throw new Error("System identifier is required for a public external entity");
          }
          if (value.pubID != null) {
            this.pubID = this.stringify.dtdPubID(value.pubID);
          }
          if (value.sysID != null) {
            this.sysID = this.stringify.dtdSysID(value.sysID);
          }
          if (value.nData != null) {
            this.nData = this.stringify.dtdNData(value.nData);
          }
          if (this.pe && this.nData) {
            throw new Error("Notation declaration is not allowed in a parameter entity");
          }
        }
      }

      XMLDTDEntity.prototype.toString = function (options) {
        return this.options.writer.set(options).dtdEntity(this);
      };

      return XMLDTDEntity;
    }(XMLNode);
  }).call(undefined);

  /***/
},
/* 16 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.6

  (function () {
    var XMLDTDElement,
        XMLNode,
        extend = function extend(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }function ctor() {
        this.constructor = child;
      }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
    },
        hasProp = {}.hasOwnProperty;

    XMLNode = __webpack_require__(0);

    module.exports = XMLDTDElement = function (superClass) {
      extend(XMLDTDElement, superClass);

      function XMLDTDElement(parent, name, value) {
        XMLDTDElement.__super__.constructor.call(this, parent);
        if (name == null) {
          throw new Error("Missing DTD element name");
        }
        if (!value) {
          value = '(#PCDATA)';
        }
        if (Array.isArray(value)) {
          value = '(' + value.join(',') + ')';
        }
        this.name = this.stringify.eleName(name);
        this.value = this.stringify.dtdElementValue(value);
      }

      XMLDTDElement.prototype.toString = function (options) {
        return this.options.writer.set(options).dtdElement(this);
      };

      return XMLDTDElement;
    }(XMLNode);
  }).call(undefined);

  /***/
},
/* 17 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.6

  (function () {
    var XMLDTDNotation,
        XMLNode,
        extend = function extend(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }function ctor() {
        this.constructor = child;
      }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
    },
        hasProp = {}.hasOwnProperty;

    XMLNode = __webpack_require__(0);

    module.exports = XMLDTDNotation = function (superClass) {
      extend(XMLDTDNotation, superClass);

      function XMLDTDNotation(parent, name, value) {
        XMLDTDNotation.__super__.constructor.call(this, parent);
        if (name == null) {
          throw new Error("Missing notation name");
        }
        if (!value.pubID && !value.sysID) {
          throw new Error("Public or system identifiers are required for an external entity");
        }
        this.name = this.stringify.eleName(name);
        if (value.pubID != null) {
          this.pubID = this.stringify.dtdPubID(value.pubID);
        }
        if (value.sysID != null) {
          this.sysID = this.stringify.dtdSysID(value.sysID);
        }
      }

      XMLDTDNotation.prototype.toString = function (options) {
        return this.options.writer.set(options).dtdNotation(this);
      };

      return XMLDTDNotation;
    }(XMLNode);
  }).call(undefined);

  /***/
},
/* 18 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.6

  (function () {
    var XMLNode,
        XMLRaw,
        extend = function extend(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }function ctor() {
        this.constructor = child;
      }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
    },
        hasProp = {}.hasOwnProperty;

    XMLNode = __webpack_require__(0);

    module.exports = XMLRaw = function (superClass) {
      extend(XMLRaw, superClass);

      function XMLRaw(parent, text) {
        XMLRaw.__super__.constructor.call(this, parent);
        if (text == null) {
          throw new Error("Missing raw text");
        }
        this.value = this.stringify.raw(text);
      }

      XMLRaw.prototype.clone = function () {
        return Object.create(this);
      };

      XMLRaw.prototype.toString = function (options) {
        return this.options.writer.set(options).raw(this);
      };

      return XMLRaw;
    }(XMLNode);
  }).call(undefined);

  /***/
},
/* 19 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.6

  (function () {
    var XMLNode,
        XMLText,
        extend = function extend(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }function ctor() {
        this.constructor = child;
      }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
    },
        hasProp = {}.hasOwnProperty;

    XMLNode = __webpack_require__(0);

    module.exports = XMLText = function (superClass) {
      extend(XMLText, superClass);

      function XMLText(parent, text) {
        XMLText.__super__.constructor.call(this, parent);
        if (text == null) {
          throw new Error("Missing element text");
        }
        this.value = this.stringify.eleText(text);
      }

      XMLText.prototype.clone = function () {
        return Object.create(this);
      };

      XMLText.prototype.toString = function (options) {
        return this.options.writer.set(options).text(this);
      };

      return XMLText;
    }(XMLNode);
  }).call(undefined);

  /***/
},
/* 20 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.6

  (function () {
    var XMLNode,
        XMLProcessingInstruction,
        extend = function extend(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }function ctor() {
        this.constructor = child;
      }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
    },
        hasProp = {}.hasOwnProperty;

    XMLNode = __webpack_require__(0);

    module.exports = XMLProcessingInstruction = function (superClass) {
      extend(XMLProcessingInstruction, superClass);

      function XMLProcessingInstruction(parent, target, value) {
        XMLProcessingInstruction.__super__.constructor.call(this, parent);
        if (target == null) {
          throw new Error("Missing instruction target");
        }
        this.target = this.stringify.insTarget(target);
        if (value) {
          this.value = this.stringify.insValue(value);
        }
      }

      XMLProcessingInstruction.prototype.clone = function () {
        return Object.create(this);
      };

      XMLProcessingInstruction.prototype.toString = function (options) {
        return this.options.writer.set(options).processingInstruction(this);
      };

      return XMLProcessingInstruction;
    }(XMLNode);
  }).call(undefined);

  /***/
},
/* 21 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  };

  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  function EventEmitter() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
  }
  module.exports = EventEmitter;

  // Backwards-compat with node 0.10.x
  EventEmitter.EventEmitter = EventEmitter;

  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._maxListeners = undefined;

  // By default EventEmitters will print a warning if more than 10 listeners are
  // added to it. This is a useful default which helps finding memory leaks.
  EventEmitter.defaultMaxListeners = 10;

  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.
  EventEmitter.prototype.setMaxListeners = function (n) {
    if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
    this._maxListeners = n;
    return this;
  };

  EventEmitter.prototype.emit = function (type) {
    var er, handler, len, args, i, listeners;

    if (!this._events) this._events = {};

    // If there is no 'error' event listener then throw.
    if (type === 'error') {
      if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
        er = arguments[1];
        if (er instanceof Error) {
          throw er; // Unhandled 'error' event
        } else {
          // At least give some kind of context to the user
          var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
          err.context = er;
          throw err;
        }
      }
    }

    handler = this._events[type];

    if (isUndefined(handler)) return false;

    if (isFunction(handler)) {
      switch (arguments.length) {
        // fast cases
        case 1:
          handler.call(this);
          break;
        case 2:
          handler.call(this, arguments[1]);
          break;
        case 3:
          handler.call(this, arguments[1], arguments[2]);
          break;
        // slower
        default:
          args = Array.prototype.slice.call(arguments, 1);
          handler.apply(this, args);
      }
    } else if (isObject(handler)) {
      args = Array.prototype.slice.call(arguments, 1);
      listeners = handler.slice();
      len = listeners.length;
      for (i = 0; i < len; i++) {
        listeners[i].apply(this, args);
      }
    }

    return true;
  };

  EventEmitter.prototype.addListener = function (type, listener) {
    var m;

    if (!isFunction(listener)) throw TypeError('listener must be a function');

    if (!this._events) this._events = {};

    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);

    if (!this._events[type])
      // Optimize the case of one listener. Don't need the extra array object.
      this._events[type] = listener;else if (isObject(this._events[type]))
      // If we've already got an array, just append.
      this._events[type].push(listener);else
      // Adding the second element, need to change to array.
      this._events[type] = [this._events[type], listener];

    // Check for listener leak
    if (isObject(this._events[type]) && !this._events[type].warned) {
      if (!isUndefined(this._maxListeners)) {
        m = this._maxListeners;
      } else {
        m = EventEmitter.defaultMaxListeners;
      }

      if (m && m > 0 && this._events[type].length > m) {
        this._events[type].warned = true;
        console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
        if (typeof console.trace === 'function') {
          // not supported in IE 10
          console.trace();
        }
      }
    }

    return this;
  };

  EventEmitter.prototype.on = EventEmitter.prototype.addListener;

  EventEmitter.prototype.once = function (type, listener) {
    if (!isFunction(listener)) throw TypeError('listener must be a function');

    var fired = false;

    function g() {
      this.removeListener(type, g);

      if (!fired) {
        fired = true;
        listener.apply(this, arguments);
      }
    }

    g.listener = listener;
    this.on(type, g);

    return this;
  };

  // emits a 'removeListener' event iff the listener was removed
  EventEmitter.prototype.removeListener = function (type, listener) {
    var list, position, length, i;

    if (!isFunction(listener)) throw TypeError('listener must be a function');

    if (!this._events || !this._events[type]) return this;

    list = this._events[type];
    length = list.length;
    position = -1;

    if (list === listener || isFunction(list.listener) && list.listener === listener) {
      delete this._events[type];
      if (this._events.removeListener) this.emit('removeListener', type, listener);
    } else if (isObject(list)) {
      for (i = length; i-- > 0;) {
        if (list[i] === listener || list[i].listener && list[i].listener === listener) {
          position = i;
          break;
        }
      }

      if (position < 0) return this;

      if (list.length === 1) {
        list.length = 0;
        delete this._events[type];
      } else {
        list.splice(position, 1);
      }

      if (this._events.removeListener) this.emit('removeListener', type, listener);
    }

    return this;
  };

  EventEmitter.prototype.removeAllListeners = function (type) {
    var key, listeners;

    if (!this._events) return this;

    // not listening for removeListener, no need to emit
    if (!this._events.removeListener) {
      if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
      return this;
    }

    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
      for (key in this._events) {
        if (key === 'removeListener') continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners('removeListener');
      this._events = {};
      return this;
    }

    listeners = this._events[type];

    if (isFunction(listeners)) {
      this.removeListener(type, listeners);
    } else if (listeners) {
      // LIFO order
      while (listeners.length) {
        this.removeListener(type, listeners[listeners.length - 1]);
      }
    }
    delete this._events[type];

    return this;
  };

  EventEmitter.prototype.listeners = function (type) {
    var ret;
    if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
    return ret;
  };

  EventEmitter.prototype.listenerCount = function (type) {
    if (this._events) {
      var evlistener = this._events[type];

      if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
    }
    return 0;
  };

  EventEmitter.listenerCount = function (emitter, type) {
    return emitter.listenerCount(type);
  };

  function isFunction(arg) {
    return typeof arg === 'function';
  }

  function isNumber(arg) {
    return typeof arg === 'number';
  }

  function isObject(arg) {
    return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
  }

  function isUndefined(arg) {
    return arg === void 0;
  }

  /***/
},
/* 22 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  /* WEBPACK VAR INJECTION */
  (function (process) {

    if (!process.version || process.version.indexOf('v0.') === 0 || process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
      module.exports = nextTick;
    } else {
      module.exports = process.nextTick;
    }

    function nextTick(fn, arg1, arg2, arg3) {
      if (typeof fn !== 'function') {
        throw new TypeError('"callback" argument must be a function');
      }
      var len = arguments.length;
      var args, i;
      switch (len) {
        case 0:
        case 1:
          return process.nextTick(fn);
        case 2:
          return process.nextTick(function afterTickOne() {
            fn.call(null, arg1);
          });
        case 3:
          return process.nextTick(function afterTickTwo() {
            fn.call(null, arg1, arg2);
          });
        case 4:
          return process.nextTick(function afterTickThree() {
            fn.call(null, arg1, arg2, arg3);
          });
        default:
          args = new Array(len - 1);
          i = 0;
          while (i < args.length) {
            args[i++] = arguments[i];
          }
          return process.nextTick(function afterTick() {
            fn.apply(null, args);
          });
      }
    }
    /* WEBPACK VAR INJECTION */
  }).call(exports, __webpack_require__(6));

  /***/
},
/* 23 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.7

  (function () {
    exports.defaults = {
      "0.1": {
        explicitCharkey: false,
        trim: true,
        normalize: true,
        normalizeTags: false,
        attrkey: "@",
        charkey: "#",
        explicitArray: false,
        ignoreAttrs: false,
        mergeAttrs: false,
        explicitRoot: false,
        validator: null,
        xmlns: false,
        explicitChildren: false,
        childkey: '@@',
        charsAsChildren: false,
        includeWhiteChars: false,
        async: false,
        strict: true,
        attrNameProcessors: null,
        attrValueProcessors: null,
        tagNameProcessors: null,
        valueProcessors: null,
        emptyTag: ''
      },
      "0.2": {
        explicitCharkey: false,
        trim: false,
        normalize: false,
        normalizeTags: false,
        attrkey: "$",
        charkey: "_",
        explicitArray: true,
        ignoreAttrs: false,
        mergeAttrs: false,
        explicitRoot: true,
        validator: null,
        xmlns: false,
        explicitChildren: false,
        preserveChildrenOrder: false,
        childkey: '$$',
        charsAsChildren: false,
        includeWhiteChars: false,
        async: false,
        strict: true,
        attrNameProcessors: null,
        attrValueProcessors: null,
        tagNameProcessors: null,
        valueProcessors: null,
        rootName: 'root',
        xmldec: {
          'version': '1.0',
          'encoding': 'UTF-8',
          'standalone': true
        },
        doctype: null,
        renderOpts: {
          'pretty': true,
          'indent': '  ',
          'newline': '\n'
        },
        headless: false,
        chunkSize: 10000,
        emptyTag: '',
        cdata: false
      }
    };
  }).call(undefined);

  /***/
},
/* 24 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.6

  (function () {
    var XMLCData,
        XMLComment,
        XMLDTDAttList,
        XMLDTDElement,
        XMLDTDEntity,
        XMLDTDNotation,
        XMLDeclaration,
        XMLDocType,
        XMLElement,
        XMLProcessingInstruction,
        XMLRaw,
        XMLStringWriter,
        XMLText,
        XMLWriterBase,
        extend = function extend(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }function ctor() {
        this.constructor = child;
      }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
    },
        hasProp = {}.hasOwnProperty;

    XMLDeclaration = __webpack_require__(12);

    XMLDocType = __webpack_require__(13);

    XMLCData = __webpack_require__(10);

    XMLComment = __webpack_require__(11);

    XMLElement = __webpack_require__(9);

    XMLRaw = __webpack_require__(18);

    XMLText = __webpack_require__(19);

    XMLProcessingInstruction = __webpack_require__(20);

    XMLDTDAttList = __webpack_require__(14);

    XMLDTDElement = __webpack_require__(16);

    XMLDTDEntity = __webpack_require__(15);

    XMLDTDNotation = __webpack_require__(17);

    XMLWriterBase = __webpack_require__(34);

    module.exports = XMLStringWriter = function (superClass) {
      extend(XMLStringWriter, superClass);

      function XMLStringWriter(options) {
        XMLStringWriter.__super__.constructor.call(this, options);
      }

      XMLStringWriter.prototype.document = function (doc) {
        var child, i, len, r, ref;
        this.textispresent = false;
        r = '';
        ref = doc.children;
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          r += function () {
            switch (false) {
              case !(child instanceof XMLDeclaration):
                return this.declaration(child);
              case !(child instanceof XMLDocType):
                return this.docType(child);
              case !(child instanceof XMLComment):
                return this.comment(child);
              case !(child instanceof XMLProcessingInstruction):
                return this.processingInstruction(child);
              default:
                return this.element(child, 0);
            }
          }.call(this);
        }
        if (this.pretty && r.slice(-this.newline.length) === this.newline) {
          r = r.slice(0, -this.newline.length);
        }
        return r;
      };

      XMLStringWriter.prototype.attribute = function (att) {
        return ' ' + att.name + '="' + att.value + '"';
      };

      XMLStringWriter.prototype.cdata = function (node, level) {
        return this.space(level) + '<![CDATA[' + node.text + ']]>' + this.newline;
      };

      XMLStringWriter.prototype.comment = function (node, level) {
        return this.space(level) + '<!-- ' + node.text + ' -->' + this.newline;
      };

      XMLStringWriter.prototype.declaration = function (node, level) {
        var r;
        r = this.space(level);
        r += '<?xml version="' + node.version + '"';
        if (node.encoding != null) {
          r += ' encoding="' + node.encoding + '"';
        }
        if (node.standalone != null) {
          r += ' standalone="' + node.standalone + '"';
        }
        r += this.spacebeforeslash + '?>';
        r += this.newline;
        return r;
      };

      XMLStringWriter.prototype.docType = function (node, level) {
        var child, i, len, r, ref;
        level || (level = 0);
        r = this.space(level);
        r += '<!DOCTYPE ' + node.root().name;
        if (node.pubID && node.sysID) {
          r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
        } else if (node.sysID) {
          r += ' SYSTEM "' + node.sysID + '"';
        }
        if (node.children.length > 0) {
          r += ' [';
          r += this.newline;
          ref = node.children;
          for (i = 0, len = ref.length; i < len; i++) {
            child = ref[i];
            r += function () {
              switch (false) {
                case !(child instanceof XMLDTDAttList):
                  return this.dtdAttList(child, level + 1);
                case !(child instanceof XMLDTDElement):
                  return this.dtdElement(child, level + 1);
                case !(child instanceof XMLDTDEntity):
                  return this.dtdEntity(child, level + 1);
                case !(child instanceof XMLDTDNotation):
                  return this.dtdNotation(child, level + 1);
                case !(child instanceof XMLCData):
                  return this.cdata(child, level + 1);
                case !(child instanceof XMLComment):
                  return this.comment(child, level + 1);
                case !(child instanceof XMLProcessingInstruction):
                  return this.processingInstruction(child, level + 1);
                default:
                  throw new Error("Unknown DTD node type: " + child.constructor.name);
              }
            }.call(this);
          }
          r += ']';
        }
        r += this.spacebeforeslash + '>';
        r += this.newline;
        return r;
      };

      XMLStringWriter.prototype.element = function (node, level) {
        var att, child, i, j, len, len1, name, r, ref, ref1, ref2, space, textispresentwasset;
        level || (level = 0);
        textispresentwasset = false;
        if (this.textispresent) {
          this.newline = '';
          this.pretty = false;
        } else {
          this.newline = this.newlinedefault;
          this.pretty = this.prettydefault;
        }
        space = this.space(level);
        r = '';
        r += space + '<' + node.name;
        ref = node.attributes;
        for (name in ref) {
          if (!hasProp.call(ref, name)) continue;
          att = ref[name];
          r += this.attribute(att);
        }
        if (node.children.length === 0 || node.children.every(function (e) {
          return e.value === '';
        })) {
          if (this.allowEmpty) {
            r += '></' + node.name + '>' + this.newline;
          } else {
            r += this.spacebeforeslash + '/>' + this.newline;
          }
        } else if (this.pretty && node.children.length === 1 && node.children[0].value != null) {
          r += '>';
          r += node.children[0].value;
          r += '</' + node.name + '>' + this.newline;
        } else {
          if (this.dontprettytextnodes) {
            ref1 = node.children;
            for (i = 0, len = ref1.length; i < len; i++) {
              child = ref1[i];
              if (child.value != null) {
                this.textispresent++;
                textispresentwasset = true;
                break;
              }
            }
          }
          if (this.textispresent) {
            this.newline = '';
            this.pretty = false;
            space = this.space(level);
          }
          r += '>' + this.newline;
          ref2 = node.children;
          for (j = 0, len1 = ref2.length; j < len1; j++) {
            child = ref2[j];
            r += function () {
              switch (false) {
                case !(child instanceof XMLCData):
                  return this.cdata(child, level + 1);
                case !(child instanceof XMLComment):
                  return this.comment(child, level + 1);
                case !(child instanceof XMLElement):
                  return this.element(child, level + 1);
                case !(child instanceof XMLRaw):
                  return this.raw(child, level + 1);
                case !(child instanceof XMLText):
                  return this.text(child, level + 1);
                case !(child instanceof XMLProcessingInstruction):
                  return this.processingInstruction(child, level + 1);
                default:
                  throw new Error("Unknown XML node type: " + child.constructor.name);
              }
            }.call(this);
          }
          if (textispresentwasset) {
            this.textispresent--;
          }
          if (!this.textispresent) {
            this.newline = this.newlinedefault;
            this.pretty = this.prettydefault;
          }
          r += space + '</' + node.name + '>' + this.newline;
        }
        return r;
      };

      XMLStringWriter.prototype.processingInstruction = function (node, level) {
        var r;
        r = this.space(level) + '<?' + node.target;
        if (node.value) {
          r += ' ' + node.value;
        }
        r += this.spacebeforeslash + '?>' + this.newline;
        return r;
      };

      XMLStringWriter.prototype.raw = function (node, level) {
        return this.space(level) + node.value + this.newline;
      };

      XMLStringWriter.prototype.text = function (node, level) {
        return this.space(level) + node.value + this.newline;
      };

      XMLStringWriter.prototype.dtdAttList = function (node, level) {
        var r;
        r = this.space(level) + '<!ATTLIST ' + node.elementName + ' ' + node.attributeName + ' ' + node.attributeType;
        if (node.defaultValueType !== '#DEFAULT') {
          r += ' ' + node.defaultValueType;
        }
        if (node.defaultValue) {
          r += ' "' + node.defaultValue + '"';
        }
        r += this.spacebeforeslash + '>' + this.newline;
        return r;
      };

      XMLStringWriter.prototype.dtdElement = function (node, level) {
        return this.space(level) + '<!ELEMENT ' + node.name + ' ' + node.value + this.spacebeforeslash + '>' + this.newline;
      };

      XMLStringWriter.prototype.dtdEntity = function (node, level) {
        var r;
        r = this.space(level) + '<!ENTITY';
        if (node.pe) {
          r += ' %';
        }
        r += ' ' + node.name;
        if (node.value) {
          r += ' "' + node.value + '"';
        } else {
          if (node.pubID && node.sysID) {
            r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
          } else if (node.sysID) {
            r += ' SYSTEM "' + node.sysID + '"';
          }
          if (node.nData) {
            r += ' NDATA ' + node.nData;
          }
        }
        r += this.spacebeforeslash + '>' + this.newline;
        return r;
      };

      XMLStringWriter.prototype.dtdNotation = function (node, level) {
        var r;
        r = this.space(level) + '<!NOTATION ' + node.name;
        if (node.pubID && node.sysID) {
          r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
        } else if (node.pubID) {
          r += ' PUBLIC "' + node.pubID + '"';
        } else if (node.sysID) {
          r += ' SYSTEM "' + node.sysID + '"';
        }
        r += this.spacebeforeslash + '>' + this.newline;
        return r;
      };

      XMLStringWriter.prototype.openNode = function (node, level) {
        var att, name, r, ref;
        level || (level = 0);
        if (node instanceof XMLElement) {
          r = this.space(level) + '<' + node.name;
          ref = node.attributes;
          for (name in ref) {
            if (!hasProp.call(ref, name)) continue;
            att = ref[name];
            r += this.attribute(att);
          }
          r += (node.children ? '>' : '/>') + this.newline;
          return r;
        } else {
          r = this.space(level) + '<!DOCTYPE ' + node.rootNodeName;
          if (node.pubID && node.sysID) {
            r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
          } else if (node.sysID) {
            r += ' SYSTEM "' + node.sysID + '"';
          }
          r += (node.children ? ' [' : '>') + this.newline;
          return r;
        }
      };

      XMLStringWriter.prototype.closeNode = function (node, level) {
        level || (level = 0);
        switch (false) {
          case !(node instanceof XMLElement):
            return this.space(level) + '</' + node.name + '>' + this.newline;
          case !(node instanceof XMLDocType):
            return this.space(level) + ']>' + this.newline;
        }
      };

      return XMLStringWriter;
    }(XMLWriterBase);
  }).call(undefined);

  /***/
},
/* 25 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  /* eslint-disable node/no-deprecated-api */

  var buffer = __webpack_require__(4);
  var Buffer = buffer.Buffer;

  // alternative to using Object.keys for old browsers
  function copyProps(src, dst) {
    for (var key in src) {
      dst[key] = src[key];
    }
  }
  if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
    module.exports = buffer;
  } else {
    // Copy properties from require('buffer')
    copyProps(buffer, exports);
    exports.Buffer = SafeBuffer;
  }

  function SafeBuffer(arg, encodingOrOffset, length) {
    return Buffer(arg, encodingOrOffset, length);
  }

  // Copy static methods from Buffer
  copyProps(Buffer, SafeBuffer);

  SafeBuffer.from = function (arg, encodingOrOffset, length) {
    if (typeof arg === 'number') {
      throw new TypeError('Argument must not be a number');
    }
    return Buffer(arg, encodingOrOffset, length);
  };

  SafeBuffer.alloc = function (size, fill, encoding) {
    if (typeof size !== 'number') {
      throw new TypeError('Argument must be a number');
    }
    var buf = Buffer(size);
    if (fill !== undefined) {
      if (typeof encoding === 'string') {
        buf.fill(fill, encoding);
      } else {
        buf.fill(fill);
      }
    } else {
      buf.fill(0);
    }
    return buf;
  };

  SafeBuffer.allocUnsafe = function (size) {
    if (typeof size !== 'number') {
      throw new TypeError('Argument must be a number');
    }
    return Buffer(size);
  };

  SafeBuffer.allocUnsafeSlow = function (size) {
    if (typeof size !== 'number') {
      throw new TypeError('Argument must be a number');
    }
    return buffer.SlowBuffer(size);
  };

  /***/
},
/* 26 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  /* WEBPACK VAR INJECTION */
  (function (process, setImmediate, global) {
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.

    // A bit simpler than readable streams.
    // Implement an async ._write(chunk, encoding, cb), and it'll handle all
    // the drain event emission and buffering.


    /*<replacement>*/

    var processNextTick = __webpack_require__(22);
    /*</replacement>*/

    module.exports = Writable;

    /* <replacement> */
    function WriteReq(chunk, encoding, cb) {
      this.chunk = chunk;
      this.encoding = encoding;
      this.callback = cb;
      this.next = null;
    }

    // It seems a linked list but it is not
    // there will be only 2 of these for each stream
    function CorkedRequest(state) {
      var _this = this;

      this.next = null;
      this.entry = null;
      this.finish = function () {
        onCorkedFinish(_this, state);
      };
    }
    /* </replacement> */

    /*<replacement>*/
    var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
    /*</replacement>*/

    /*<replacement>*/
    var Duplex;
    /*</replacement>*/

    Writable.WritableState = WritableState;

    /*<replacement>*/
    var util = __webpack_require__(8);
    util.inherits = __webpack_require__(3);
    /*</replacement>*/

    /*<replacement>*/
    var internalUtil = {
      deprecate: __webpack_require__(73)
    };
    /*</replacement>*/

    /*<replacement>*/
    var Stream = __webpack_require__(37);
    /*</replacement>*/

    /*<replacement>*/
    var Buffer = __webpack_require__(25).Buffer;
    var OurUint8Array = global.Uint8Array || function () {};
    function _uint8ArrayToBuffer(chunk) {
      return Buffer.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    /*</replacement>*/

    var destroyImpl = __webpack_require__(38);

    util.inherits(Writable, Stream);

    function nop() {}

    function WritableState(options, stream) {
      Duplex = Duplex || __webpack_require__(5);

      options = options || {};

      // object stream flag to indicate whether or not this stream
      // contains buffers or objects.
      this.objectMode = !!options.objectMode;

      if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

      // the point at which write() starts returning false
      // Note: 0 is a valid value, means that we always return false if
      // the entire buffer is not flushed immediately on write()
      var hwm = options.highWaterMark;
      var defaultHwm = this.objectMode ? 16 : 16 * 1024;
      this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

      // cast to ints.
      this.highWaterMark = Math.floor(this.highWaterMark);

      // if _final has been called
      this.finalCalled = false;

      // drain event flag.
      this.needDrain = false;
      // at the start of calling end()
      this.ending = false;
      // when end() has been called, and returned
      this.ended = false;
      // when 'finish' is emitted
      this.finished = false;

      // has it been destroyed
      this.destroyed = false;

      // should we decode strings into buffers before passing to _write?
      // this is here so that some node-core streams can optimize string
      // handling at a lower level.
      var noDecode = options.decodeStrings === false;
      this.decodeStrings = !noDecode;

      // Crypto is kind of old and crusty.  Historically, its default string
      // encoding is 'binary' so we have to make this configurable.
      // Everything else in the universe uses 'utf8', though.
      this.defaultEncoding = options.defaultEncoding || 'utf8';

      // not an actual buffer we keep track of, but a measurement
      // of how much we're waiting to get pushed to some underlying
      // socket or file.
      this.length = 0;

      // a flag to see when we're in the middle of a write.
      this.writing = false;

      // when true all writes will be buffered until .uncork() call
      this.corked = 0;

      // a flag to be able to tell if the onwrite cb is called immediately,
      // or on a later tick.  We set this to true at first, because any
      // actions that shouldn't happen until "later" should generally also
      // not happen before the first write call.
      this.sync = true;

      // a flag to know if we're processing previously buffered items, which
      // may call the _write() callback in the same tick, so that we don't
      // end up in an overlapped onwrite situation.
      this.bufferProcessing = false;

      // the callback that's passed to _write(chunk,cb)
      this.onwrite = function (er) {
        onwrite(stream, er);
      };

      // the callback that the user supplies to write(chunk,encoding,cb)
      this.writecb = null;

      // the amount that is being written when _write is called.
      this.writelen = 0;

      this.bufferedRequest = null;
      this.lastBufferedRequest = null;

      // number of pending user-supplied write callbacks
      // this must be 0 before 'finish' can be emitted
      this.pendingcb = 0;

      // emit prefinish if the only thing we're waiting for is _write cbs
      // This is relevant for synchronous Transform streams
      this.prefinished = false;

      // True if the error was already emitted and should not be thrown again
      this.errorEmitted = false;

      // count buffered requests
      this.bufferedRequestCount = 0;

      // allocate the first CorkedRequest, there is always
      // one allocated and free to use, and we maintain at most two
      this.corkedRequestsFree = new CorkedRequest(this);
    }

    WritableState.prototype.getBuffer = function getBuffer() {
      var current = this.bufferedRequest;
      var out = [];
      while (current) {
        out.push(current);
        current = current.next;
      }
      return out;
    };

    (function () {
      try {
        Object.defineProperty(WritableState.prototype, 'buffer', {
          get: internalUtil.deprecate(function () {
            return this.getBuffer();
          }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
        });
      } catch (_) {}
    })();

    // Test _writableState for inheritance to account for Duplex streams,
    // whose prototype chain only points to Readable.
    var realHasInstance;
    if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
      realHasInstance = Function.prototype[Symbol.hasInstance];
      Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function value(object) {
          if (realHasInstance.call(this, object)) return true;

          return object && object._writableState instanceof WritableState;
        }
      });
    } else {
      realHasInstance = function realHasInstance(object) {
        return object instanceof this;
      };
    }

    function Writable(options) {
      Duplex = Duplex || __webpack_require__(5);

      // Writable ctor is applied to Duplexes, too.
      // `realHasInstance` is necessary because using plain `instanceof`
      // would return false, as no `_writableState` property is attached.

      // Trying to use the custom `instanceof` for Writable here will also break the
      // Node.js LazyTransform implementation, which has a non-trivial getter for
      // `_writableState` that would lead to infinite recursion.
      if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
        return new Writable(options);
      }

      this._writableState = new WritableState(options, this);

      // legacy.
      this.writable = true;

      if (options) {
        if (typeof options.write === 'function') this._write = options.write;

        if (typeof options.writev === 'function') this._writev = options.writev;

        if (typeof options.destroy === 'function') this._destroy = options.destroy;

        if (typeof options.final === 'function') this._final = options.final;
      }

      Stream.call(this);
    }

    // Otherwise people can pipe Writable streams, which is just wrong.
    Writable.prototype.pipe = function () {
      this.emit('error', new Error('Cannot pipe, not readable'));
    };

    function writeAfterEnd(stream, cb) {
      var er = new Error('write after end');
      // TODO: defer error events consistently everywhere, not just the cb
      stream.emit('error', er);
      processNextTick(cb, er);
    }

    // Checks that a user-supplied chunk is valid, especially for the particular
    // mode the stream is in. Currently this means that `null` is never accepted
    // and undefined/non-string values are only allowed in object mode.
    function validChunk(stream, state, chunk, cb) {
      var valid = true;
      var er = false;

      if (chunk === null) {
        er = new TypeError('May not write null values to stream');
      } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
        er = new TypeError('Invalid non-string/buffer chunk');
      }
      if (er) {
        stream.emit('error', er);
        processNextTick(cb, er);
        valid = false;
      }
      return valid;
    }

    Writable.prototype.write = function (chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;
      var isBuf = _isUint8Array(chunk) && !state.objectMode;

      if (isBuf && !Buffer.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
      }

      if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

      if (typeof cb !== 'function') cb = nop;

      if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
      }

      return ret;
    };

    Writable.prototype.cork = function () {
      var state = this._writableState;

      state.corked++;
    };

    Writable.prototype.uncork = function () {
      var state = this._writableState;

      if (state.corked) {
        state.corked--;

        if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
      }
    };

    Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
      // node::ParseEncoding() requires lower case.
      if (typeof encoding === 'string') encoding = encoding.toLowerCase();
      if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
      this._writableState.defaultEncoding = encoding;
      return this;
    };

    function decodeChunk(state, chunk, encoding) {
      if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
        chunk = Buffer.from(chunk, encoding);
      }
      return chunk;
    }

    // if we're already writing something, then just put this
    // in the queue, and wait our turn.  Otherwise, call _write
    // If we return false, then we need a drain event, so set that flag.
    function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
      if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
          isBuf = true;
          encoding = 'buffer';
          chunk = newChunk;
        }
      }
      var len = state.objectMode ? 1 : chunk.length;

      state.length += len;

      var ret = state.length < state.highWaterMark;
      // we must ensure that previous needDrain will not be reset to false.
      if (!ret) state.needDrain = true;

      if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
          chunk: chunk,
          encoding: encoding,
          isBuf: isBuf,
          callback: cb,
          next: null
        };
        if (last) {
          last.next = state.lastBufferedRequest;
        } else {
          state.bufferedRequest = state.lastBufferedRequest;
        }
        state.bufferedRequestCount += 1;
      } else {
        doWrite(stream, state, false, len, chunk, encoding, cb);
      }

      return ret;
    }

    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len;
      state.writecb = cb;
      state.writing = true;
      state.sync = true;
      if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }

    function onwriteError(stream, state, sync, er, cb) {
      --state.pendingcb;

      if (sync) {
        // defer the callback if we are being called synchronously
        // to avoid piling up things on the stack
        processNextTick(cb, er);
        // this can emit finish, and it will always happen
        // after error
        processNextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        stream.emit('error', er);
      } else {
        // the caller expect this to happen before if
        // it is async
        cb(er);
        stream._writableState.errorEmitted = true;
        stream.emit('error', er);
        // this can emit finish, but finish must
        // always follow error
        finishMaybe(stream, state);
      }
    }

    function onwriteStateUpdate(state) {
      state.writing = false;
      state.writecb = null;
      state.length -= state.writelen;
      state.writelen = 0;
    }

    function onwrite(stream, er) {
      var state = stream._writableState;
      var sync = state.sync;
      var cb = state.writecb;

      onwriteStateUpdate(state);

      if (er) onwriteError(stream, state, sync, er, cb);else {
        // Check if we're actually ready to finish, but don't emit yet
        var finished = needFinish(state);

        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
          clearBuffer(stream, state);
        }

        if (sync) {
          /*<replacement>*/
          asyncWrite(afterWrite, stream, state, finished, cb);
          /*</replacement>*/
        } else {
          afterWrite(stream, state, finished, cb);
        }
      }
    }

    function afterWrite(stream, state, finished, cb) {
      if (!finished) onwriteDrain(stream, state);
      state.pendingcb--;
      cb();
      finishMaybe(stream, state);
    }

    // Must force callback to be called on nextTick, so that we don't
    // emit 'drain' before the write() consumer gets the 'false' return
    // value, and has a chance to attach a 'drain' listener.
    function onwriteDrain(stream, state) {
      if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit('drain');
      }
    }

    // if there's something in the buffer waiting, then process it
    function clearBuffer(stream, state) {
      state.bufferProcessing = true;
      var entry = state.bufferedRequest;

      if (stream._writev && entry && entry.next) {
        // Fast case, write everything using _writev()
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;

        var count = 0;
        var allBuffers = true;
        while (entry) {
          buffer[count] = entry;
          if (!entry.isBuf) allBuffers = false;
          entry = entry.next;
          count += 1;
        }
        buffer.allBuffers = allBuffers;

        doWrite(stream, state, true, state.length, buffer, '', holder.finish);

        // doWrite is almost always async, defer these to save a bit of time
        // as the hot path ends with doWrite
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
          state.corkedRequestsFree = holder.next;
          holder.next = null;
        } else {
          state.corkedRequestsFree = new CorkedRequest(state);
        }
      } else {
        // Slow case, write chunks one-by-one
        while (entry) {
          var chunk = entry.chunk;
          var encoding = entry.encoding;
          var cb = entry.callback;
          var len = state.objectMode ? 1 : chunk.length;

          doWrite(stream, state, false, len, chunk, encoding, cb);
          entry = entry.next;
          // if we didn't call the onwrite immediately, then
          // it means that we need to wait until it does.
          // also, that means that the chunk and cb are currently
          // being processed, so move the buffer counter past them.
          if (state.writing) {
            break;
          }
        }

        if (entry === null) state.lastBufferedRequest = null;
      }

      state.bufferedRequestCount = 0;
      state.bufferedRequest = entry;
      state.bufferProcessing = false;
    }

    Writable.prototype._write = function (chunk, encoding, cb) {
      cb(new Error('_write() is not implemented'));
    };

    Writable.prototype._writev = null;

    Writable.prototype.end = function (chunk, encoding, cb) {
      var state = this._writableState;

      if (typeof chunk === 'function') {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
      }

      if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

      // .end() fully uncorks
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }

      // ignore unnecessary end() calls.
      if (!state.ending && !state.finished) endWritable(this, state, cb);
    };

    function needFinish(state) {
      return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
    }
    function callFinal(stream, state) {
      stream._final(function (err) {
        state.pendingcb--;
        if (err) {
          stream.emit('error', err);
        }
        state.prefinished = true;
        stream.emit('prefinish');
        finishMaybe(stream, state);
      });
    }
    function prefinish(stream, state) {
      if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === 'function') {
          state.pendingcb++;
          state.finalCalled = true;
          processNextTick(callFinal, stream, state);
        } else {
          state.prefinished = true;
          stream.emit('prefinish');
        }
      }
    }

    function finishMaybe(stream, state) {
      var need = needFinish(state);
      if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
          state.finished = true;
          stream.emit('finish');
        }
      }
      return need;
    }

    function endWritable(stream, state, cb) {
      state.ending = true;
      finishMaybe(stream, state);
      if (cb) {
        if (state.finished) processNextTick(cb);else stream.once('finish', cb);
      }
      state.ended = true;
      stream.writable = false;
    }

    function onCorkedFinish(corkReq, state, err) {
      var entry = corkReq.entry;
      corkReq.entry = null;
      while (entry) {
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
      }
      if (state.corkedRequestsFree) {
        state.corkedRequestsFree.next = corkReq;
      } else {
        state.corkedRequestsFree = corkReq;
      }
    }

    Object.defineProperty(Writable.prototype, 'destroyed', {
      get: function get() {
        if (this._writableState === undefined) {
          return false;
        }
        return this._writableState.destroyed;
      },
      set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._writableState) {
          return;
        }

        // backward compatibility, the user is explicitly
        // managing destroyed
        this._writableState.destroyed = value;
      }
    });

    Writable.prototype.destroy = destroyImpl.destroy;
    Writable.prototype._undestroy = destroyImpl.undestroy;
    Writable.prototype._destroy = function (err, cb) {
      this.end();
      cb(err);
    };
    /* WEBPACK VAR INJECTION */
  }).call(exports, __webpack_require__(6), __webpack_require__(39).setImmediate, __webpack_require__(1));

  /***/
},
/* 27 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  var Buffer = __webpack_require__(4).Buffer;

  var isBufferEncoding = Buffer.isEncoding || function (encoding) {
    switch (encoding && encoding.toLowerCase()) {
      case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
        return true;
      default:
        return false;
    }
  };

  function assertEncoding(encoding) {
    if (encoding && !isBufferEncoding(encoding)) {
      throw new Error('Unknown encoding: ' + encoding);
    }
  }

  // StringDecoder provides an interface for efficiently splitting a series of
  // buffers into a series of JS strings without breaking apart multi-byte
  // characters. CESU-8 is handled as part of the UTF-8 encoding.
  //
  // @TODO Handling all encodings inside a single object makes it very difficult
  // to reason about this code, so it should be split up in the future.
  // @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
  // points as used by CESU-8.
  var StringDecoder = exports.StringDecoder = function (encoding) {
    this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
    assertEncoding(encoding);
    switch (this.encoding) {
      case 'utf8':
        // CESU-8 represents each of Surrogate Pair by 3-bytes
        this.surrogateSize = 3;
        break;
      case 'ucs2':
      case 'utf16le':
        // UTF-16 represents each of Surrogate Pair by 2-bytes
        this.surrogateSize = 2;
        this.detectIncompleteChar = utf16DetectIncompleteChar;
        break;
      case 'base64':
        // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
        this.surrogateSize = 3;
        this.detectIncompleteChar = base64DetectIncompleteChar;
        break;
      default:
        this.write = passThroughWrite;
        return;
    }

    // Enough space to store all bytes of a single character. UTF-8 needs 4
    // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
    this.charBuffer = new Buffer(6);
    // Number of bytes received for the current incomplete multi-byte character.
    this.charReceived = 0;
    // Number of bytes expected for the current incomplete multi-byte character.
    this.charLength = 0;
  };

  // write decodes the given buffer and returns it as JS string that is
  // guaranteed to not contain any partial multi-byte characters. Any partial
  // character found at the end of the buffer is buffered up, and will be
  // returned when calling write again with the remaining bytes.
  //
  // Note: Converting a Buffer containing an orphan surrogate to a String
  // currently works, but converting a String to a Buffer (via `new Buffer`, or
  // Buffer#write) will replace incomplete surrogates with the unicode
  // replacement character. See https://codereview.chromium.org/121173009/ .
  StringDecoder.prototype.write = function (buffer) {
    var charStr = '';
    // if our last write ended with an incomplete multibyte character
    while (this.charLength) {
      // determine how many remaining bytes this buffer has to offer for this char
      var available = buffer.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : buffer.length;

      // add the new bytes to the char buffer
      buffer.copy(this.charBuffer, this.charReceived, 0, available);
      this.charReceived += available;

      if (this.charReceived < this.charLength) {
        // still not enough chars in this buffer? wait for more ...
        return '';
      }

      // remove bytes belonging to the current character from the buffer
      buffer = buffer.slice(available, buffer.length);

      // get the character that was split
      charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

      // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
      var charCode = charStr.charCodeAt(charStr.length - 1);
      if (charCode >= 0xD800 && charCode <= 0xDBFF) {
        this.charLength += this.surrogateSize;
        charStr = '';
        continue;
      }
      this.charReceived = this.charLength = 0;

      // if there are no more bytes in this buffer, just emit our char
      if (buffer.length === 0) {
        return charStr;
      }
      break;
    }

    // determine and set charLength / charReceived
    this.detectIncompleteChar(buffer);

    var end = buffer.length;
    if (this.charLength) {
      // buffer the incomplete character bytes we got
      buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
      end -= this.charReceived;
    }

    charStr += buffer.toString(this.encoding, 0, end);

    var end = charStr.length - 1;
    var charCode = charStr.charCodeAt(end);
    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      var size = this.surrogateSize;
      this.charLength += size;
      this.charReceived += size;
      this.charBuffer.copy(this.charBuffer, size, 0, size);
      buffer.copy(this.charBuffer, 0, 0, size);
      return charStr.substring(0, end);
    }

    // or just emit the charStr
    return charStr;
  };

  // detectIncompleteChar determines if there is an incomplete UTF-8 character at
  // the end of the given buffer. If so, it sets this.charLength to the byte
  // length that character, and sets this.charReceived to the number of bytes
  // that are available for this character.
  StringDecoder.prototype.detectIncompleteChar = function (buffer) {
    // determine how many bytes we have to check at the end of this buffer
    var i = buffer.length >= 3 ? 3 : buffer.length;

    // Figure out if one of the last i bytes of our buffer announces an
    // incomplete char.
    for (; i > 0; i--) {
      var c = buffer[buffer.length - i];

      // See http://en.wikipedia.org/wiki/UTF-8#Description

      // 110XXXXX
      if (i == 1 && c >> 5 == 0x06) {
        this.charLength = 2;
        break;
      }

      // 1110XXXX
      if (i <= 2 && c >> 4 == 0x0E) {
        this.charLength = 3;
        break;
      }

      // 11110XXX
      if (i <= 3 && c >> 3 == 0x1E) {
        this.charLength = 4;
        break;
      }
    }
    this.charReceived = i;
  };

  StringDecoder.prototype.end = function (buffer) {
    var res = '';
    if (buffer && buffer.length) res = this.write(buffer);

    if (this.charReceived) {
      var cr = this.charReceived;
      var buf = this.charBuffer;
      var enc = this.encoding;
      res += buf.slice(0, cr).toString(enc);
    }

    return res;
  };

  function passThroughWrite(buffer) {
    return buffer.toString(this.encoding);
  }

  function utf16DetectIncompleteChar(buffer) {
    this.charReceived = buffer.length % 2;
    this.charLength = this.charReceived ? 2 : 0;
  }

  function base64DetectIncompleteChar(buffer) {
    this.charReceived = buffer.length % 3;
    this.charLength = this.charReceived ? 3 : 0;
  }

  /***/
},
/* 28 */
/***/function (module, exports) {

  module.exports = { "amp": "&", "apos": "'", "gt": ">", "lt": "<", "quot": "\""

    /***/ };
},
/* 29 */
/***/function (module, exports) {

  module.exports = { "Aacute": "Á", "aacute": "á", "Abreve": "Ă", "abreve": "ă", "ac": "∾", "acd": "∿", "acE": "∾̳", "Acirc": "Â", "acirc": "â", "acute": "´", "Acy": "А", "acy": "а", "AElig": "Æ", "aelig": "æ", "af": "⁡", "Afr": "𝔄", "afr": "𝔞", "Agrave": "À", "agrave": "à", "alefsym": "ℵ", "aleph": "ℵ", "Alpha": "Α", "alpha": "α", "Amacr": "Ā", "amacr": "ā", "amalg": "⨿", "amp": "&", "AMP": "&", "andand": "⩕", "And": "⩓", "and": "∧", "andd": "⩜", "andslope": "⩘", "andv": "⩚", "ang": "∠", "ange": "⦤", "angle": "∠", "angmsdaa": "⦨", "angmsdab": "⦩", "angmsdac": "⦪", "angmsdad": "⦫", "angmsdae": "⦬", "angmsdaf": "⦭", "angmsdag": "⦮", "angmsdah": "⦯", "angmsd": "∡", "angrt": "∟", "angrtvb": "⊾", "angrtvbd": "⦝", "angsph": "∢", "angst": "Å", "angzarr": "⍼", "Aogon": "Ą", "aogon": "ą", "Aopf": "𝔸", "aopf": "𝕒", "apacir": "⩯", "ap": "≈", "apE": "⩰", "ape": "≊", "apid": "≋", "apos": "'", "ApplyFunction": "⁡", "approx": "≈", "approxeq": "≊", "Aring": "Å", "aring": "å", "Ascr": "𝒜", "ascr": "𝒶", "Assign": "≔", "ast": "*", "asymp": "≈", "asympeq": "≍", "Atilde": "Ã", "atilde": "ã", "Auml": "Ä", "auml": "ä", "awconint": "∳", "awint": "⨑", "backcong": "≌", "backepsilon": "϶", "backprime": "‵", "backsim": "∽", "backsimeq": "⋍", "Backslash": "∖", "Barv": "⫧", "barvee": "⊽", "barwed": "⌅", "Barwed": "⌆", "barwedge": "⌅", "bbrk": "⎵", "bbrktbrk": "⎶", "bcong": "≌", "Bcy": "Б", "bcy": "б", "bdquo": "„", "becaus": "∵", "because": "∵", "Because": "∵", "bemptyv": "⦰", "bepsi": "϶", "bernou": "ℬ", "Bernoullis": "ℬ", "Beta": "Β", "beta": "β", "beth": "ℶ", "between": "≬", "Bfr": "𝔅", "bfr": "𝔟", "bigcap": "⋂", "bigcirc": "◯", "bigcup": "⋃", "bigodot": "⨀", "bigoplus": "⨁", "bigotimes": "⨂", "bigsqcup": "⨆", "bigstar": "★", "bigtriangledown": "▽", "bigtriangleup": "△", "biguplus": "⨄", "bigvee": "⋁", "bigwedge": "⋀", "bkarow": "⤍", "blacklozenge": "⧫", "blacksquare": "▪", "blacktriangle": "▴", "blacktriangledown": "▾", "blacktriangleleft": "◂", "blacktriangleright": "▸", "blank": "␣", "blk12": "▒", "blk14": "░", "blk34": "▓", "block": "█", "bne": "=⃥", "bnequiv": "≡⃥", "bNot": "⫭", "bnot": "⌐", "Bopf": "𝔹", "bopf": "𝕓", "bot": "⊥", "bottom": "⊥", "bowtie": "⋈", "boxbox": "⧉", "boxdl": "┐", "boxdL": "╕", "boxDl": "╖", "boxDL": "╗", "boxdr": "┌", "boxdR": "╒", "boxDr": "╓", "boxDR": "╔", "boxh": "─", "boxH": "═", "boxhd": "┬", "boxHd": "╤", "boxhD": "╥", "boxHD": "╦", "boxhu": "┴", "boxHu": "╧", "boxhU": "╨", "boxHU": "╩", "boxminus": "⊟", "boxplus": "⊞", "boxtimes": "⊠", "boxul": "┘", "boxuL": "╛", "boxUl": "╜", "boxUL": "╝", "boxur": "└", "boxuR": "╘", "boxUr": "╙", "boxUR": "╚", "boxv": "│", "boxV": "║", "boxvh": "┼", "boxvH": "╪", "boxVh": "╫", "boxVH": "╬", "boxvl": "┤", "boxvL": "╡", "boxVl": "╢", "boxVL": "╣", "boxvr": "├", "boxvR": "╞", "boxVr": "╟", "boxVR": "╠", "bprime": "‵", "breve": "˘", "Breve": "˘", "brvbar": "¦", "bscr": "𝒷", "Bscr": "ℬ", "bsemi": "⁏", "bsim": "∽", "bsime": "⋍", "bsolb": "⧅", "bsol": "\\", "bsolhsub": "⟈", "bull": "•", "bullet": "•", "bump": "≎", "bumpE": "⪮", "bumpe": "≏", "Bumpeq": "≎", "bumpeq": "≏", "Cacute": "Ć", "cacute": "ć", "capand": "⩄", "capbrcup": "⩉", "capcap": "⩋", "cap": "∩", "Cap": "⋒", "capcup": "⩇", "capdot": "⩀", "CapitalDifferentialD": "ⅅ", "caps": "∩︀", "caret": "⁁", "caron": "ˇ", "Cayleys": "ℭ", "ccaps": "⩍", "Ccaron": "Č", "ccaron": "č", "Ccedil": "Ç", "ccedil": "ç", "Ccirc": "Ĉ", "ccirc": "ĉ", "Cconint": "∰", "ccups": "⩌", "ccupssm": "⩐", "Cdot": "Ċ", "cdot": "ċ", "cedil": "¸", "Cedilla": "¸", "cemptyv": "⦲", "cent": "¢", "centerdot": "·", "CenterDot": "·", "cfr": "𝔠", "Cfr": "ℭ", "CHcy": "Ч", "chcy": "ч", "check": "✓", "checkmark": "✓", "Chi": "Χ", "chi": "χ", "circ": "ˆ", "circeq": "≗", "circlearrowleft": "↺", "circlearrowright": "↻", "circledast": "⊛", "circledcirc": "⊚", "circleddash": "⊝", "CircleDot": "⊙", "circledR": "®", "circledS": "Ⓢ", "CircleMinus": "⊖", "CirclePlus": "⊕", "CircleTimes": "⊗", "cir": "○", "cirE": "⧃", "cire": "≗", "cirfnint": "⨐", "cirmid": "⫯", "cirscir": "⧂", "ClockwiseContourIntegral": "∲", "CloseCurlyDoubleQuote": "”", "CloseCurlyQuote": "’", "clubs": "♣", "clubsuit": "♣", "colon": ":", "Colon": "∷", "Colone": "⩴", "colone": "≔", "coloneq": "≔", "comma": ",", "commat": "@", "comp": "∁", "compfn": "∘", "complement": "∁", "complexes": "ℂ", "cong": "≅", "congdot": "⩭", "Congruent": "≡", "conint": "∮", "Conint": "∯", "ContourIntegral": "∮", "copf": "𝕔", "Copf": "ℂ", "coprod": "∐", "Coproduct": "∐", "copy": "©", "COPY": "©", "copysr": "℗", "CounterClockwiseContourIntegral": "∳", "crarr": "↵", "cross": "✗", "Cross": "⨯", "Cscr": "𝒞", "cscr": "𝒸", "csub": "⫏", "csube": "⫑", "csup": "⫐", "csupe": "⫒", "ctdot": "⋯", "cudarrl": "⤸", "cudarrr": "⤵", "cuepr": "⋞", "cuesc": "⋟", "cularr": "↶", "cularrp": "⤽", "cupbrcap": "⩈", "cupcap": "⩆", "CupCap": "≍", "cup": "∪", "Cup": "⋓", "cupcup": "⩊", "cupdot": "⊍", "cupor": "⩅", "cups": "∪︀", "curarr": "↷", "curarrm": "⤼", "curlyeqprec": "⋞", "curlyeqsucc": "⋟", "curlyvee": "⋎", "curlywedge": "⋏", "curren": "¤", "curvearrowleft": "↶", "curvearrowright": "↷", "cuvee": "⋎", "cuwed": "⋏", "cwconint": "∲", "cwint": "∱", "cylcty": "⌭", "dagger": "†", "Dagger": "‡", "daleth": "ℸ", "darr": "↓", "Darr": "↡", "dArr": "⇓", "dash": "‐", "Dashv": "⫤", "dashv": "⊣", "dbkarow": "⤏", "dblac": "˝", "Dcaron": "Ď", "dcaron": "ď", "Dcy": "Д", "dcy": "д", "ddagger": "‡", "ddarr": "⇊", "DD": "ⅅ", "dd": "ⅆ", "DDotrahd": "⤑", "ddotseq": "⩷", "deg": "°", "Del": "∇", "Delta": "Δ", "delta": "δ", "demptyv": "⦱", "dfisht": "⥿", "Dfr": "𝔇", "dfr": "𝔡", "dHar": "⥥", "dharl": "⇃", "dharr": "⇂", "DiacriticalAcute": "´", "DiacriticalDot": "˙", "DiacriticalDoubleAcute": "˝", "DiacriticalGrave": "`", "DiacriticalTilde": "˜", "diam": "⋄", "diamond": "⋄", "Diamond": "⋄", "diamondsuit": "♦", "diams": "♦", "die": "¨", "DifferentialD": "ⅆ", "digamma": "ϝ", "disin": "⋲", "div": "÷", "divide": "÷", "divideontimes": "⋇", "divonx": "⋇", "DJcy": "Ђ", "djcy": "ђ", "dlcorn": "⌞", "dlcrop": "⌍", "dollar": "$", "Dopf": "𝔻", "dopf": "𝕕", "Dot": "¨", "dot": "˙", "DotDot": "⃜", "doteq": "≐", "doteqdot": "≑", "DotEqual": "≐", "dotminus": "∸", "dotplus": "∔", "dotsquare": "⊡", "doublebarwedge": "⌆", "DoubleContourIntegral": "∯", "DoubleDot": "¨", "DoubleDownArrow": "⇓", "DoubleLeftArrow": "⇐", "DoubleLeftRightArrow": "⇔", "DoubleLeftTee": "⫤", "DoubleLongLeftArrow": "⟸", "DoubleLongLeftRightArrow": "⟺", "DoubleLongRightArrow": "⟹", "DoubleRightArrow": "⇒", "DoubleRightTee": "⊨", "DoubleUpArrow": "⇑", "DoubleUpDownArrow": "⇕", "DoubleVerticalBar": "∥", "DownArrowBar": "⤓", "downarrow": "↓", "DownArrow": "↓", "Downarrow": "⇓", "DownArrowUpArrow": "⇵", "DownBreve": "̑", "downdownarrows": "⇊", "downharpoonleft": "⇃", "downharpoonright": "⇂", "DownLeftRightVector": "⥐", "DownLeftTeeVector": "⥞", "DownLeftVectorBar": "⥖", "DownLeftVector": "↽", "DownRightTeeVector": "⥟", "DownRightVectorBar": "⥗", "DownRightVector": "⇁", "DownTeeArrow": "↧", "DownTee": "⊤", "drbkarow": "⤐", "drcorn": "⌟", "drcrop": "⌌", "Dscr": "𝒟", "dscr": "𝒹", "DScy": "Ѕ", "dscy": "ѕ", "dsol": "⧶", "Dstrok": "Đ", "dstrok": "đ", "dtdot": "⋱", "dtri": "▿", "dtrif": "▾", "duarr": "⇵", "duhar": "⥯", "dwangle": "⦦", "DZcy": "Џ", "dzcy": "џ", "dzigrarr": "⟿", "Eacute": "É", "eacute": "é", "easter": "⩮", "Ecaron": "Ě", "ecaron": "ě", "Ecirc": "Ê", "ecirc": "ê", "ecir": "≖", "ecolon": "≕", "Ecy": "Э", "ecy": "э", "eDDot": "⩷", "Edot": "Ė", "edot": "ė", "eDot": "≑", "ee": "ⅇ", "efDot": "≒", "Efr": "𝔈", "efr": "𝔢", "eg": "⪚", "Egrave": "È", "egrave": "è", "egs": "⪖", "egsdot": "⪘", "el": "⪙", "Element": "∈", "elinters": "⏧", "ell": "ℓ", "els": "⪕", "elsdot": "⪗", "Emacr": "Ē", "emacr": "ē", "empty": "∅", "emptyset": "∅", "EmptySmallSquare": "◻", "emptyv": "∅", "EmptyVerySmallSquare": "▫", "emsp13": " ", "emsp14": " ", "emsp": " ", "ENG": "Ŋ", "eng": "ŋ", "ensp": " ", "Eogon": "Ę", "eogon": "ę", "Eopf": "𝔼", "eopf": "𝕖", "epar": "⋕", "eparsl": "⧣", "eplus": "⩱", "epsi": "ε", "Epsilon": "Ε", "epsilon": "ε", "epsiv": "ϵ", "eqcirc": "≖", "eqcolon": "≕", "eqsim": "≂", "eqslantgtr": "⪖", "eqslantless": "⪕", "Equal": "⩵", "equals": "=", "EqualTilde": "≂", "equest": "≟", "Equilibrium": "⇌", "equiv": "≡", "equivDD": "⩸", "eqvparsl": "⧥", "erarr": "⥱", "erDot": "≓", "escr": "ℯ", "Escr": "ℰ", "esdot": "≐", "Esim": "⩳", "esim": "≂", "Eta": "Η", "eta": "η", "ETH": "Ð", "eth": "ð", "Euml": "Ë", "euml": "ë", "euro": "€", "excl": "!", "exist": "∃", "Exists": "∃", "expectation": "ℰ", "exponentiale": "ⅇ", "ExponentialE": "ⅇ", "fallingdotseq": "≒", "Fcy": "Ф", "fcy": "ф", "female": "♀", "ffilig": "ﬃ", "fflig": "ﬀ", "ffllig": "ﬄ", "Ffr": "𝔉", "ffr": "𝔣", "filig": "ﬁ", "FilledSmallSquare": "◼", "FilledVerySmallSquare": "▪", "fjlig": "fj", "flat": "♭", "fllig": "ﬂ", "fltns": "▱", "fnof": "ƒ", "Fopf": "𝔽", "fopf": "𝕗", "forall": "∀", "ForAll": "∀", "fork": "⋔", "forkv": "⫙", "Fouriertrf": "ℱ", "fpartint": "⨍", "frac12": "½", "frac13": "⅓", "frac14": "¼", "frac15": "⅕", "frac16": "⅙", "frac18": "⅛", "frac23": "⅔", "frac25": "⅖", "frac34": "¾", "frac35": "⅗", "frac38": "⅜", "frac45": "⅘", "frac56": "⅚", "frac58": "⅝", "frac78": "⅞", "frasl": "⁄", "frown": "⌢", "fscr": "𝒻", "Fscr": "ℱ", "gacute": "ǵ", "Gamma": "Γ", "gamma": "γ", "Gammad": "Ϝ", "gammad": "ϝ", "gap": "⪆", "Gbreve": "Ğ", "gbreve": "ğ", "Gcedil": "Ģ", "Gcirc": "Ĝ", "gcirc": "ĝ", "Gcy": "Г", "gcy": "г", "Gdot": "Ġ", "gdot": "ġ", "ge": "≥", "gE": "≧", "gEl": "⪌", "gel": "⋛", "geq": "≥", "geqq": "≧", "geqslant": "⩾", "gescc": "⪩", "ges": "⩾", "gesdot": "⪀", "gesdoto": "⪂", "gesdotol": "⪄", "gesl": "⋛︀", "gesles": "⪔", "Gfr": "𝔊", "gfr": "𝔤", "gg": "≫", "Gg": "⋙", "ggg": "⋙", "gimel": "ℷ", "GJcy": "Ѓ", "gjcy": "ѓ", "gla": "⪥", "gl": "≷", "glE": "⪒", "glj": "⪤", "gnap": "⪊", "gnapprox": "⪊", "gne": "⪈", "gnE": "≩", "gneq": "⪈", "gneqq": "≩", "gnsim": "⋧", "Gopf": "𝔾", "gopf": "𝕘", "grave": "`", "GreaterEqual": "≥", "GreaterEqualLess": "⋛", "GreaterFullEqual": "≧", "GreaterGreater": "⪢", "GreaterLess": "≷", "GreaterSlantEqual": "⩾", "GreaterTilde": "≳", "Gscr": "𝒢", "gscr": "ℊ", "gsim": "≳", "gsime": "⪎", "gsiml": "⪐", "gtcc": "⪧", "gtcir": "⩺", "gt": ">", "GT": ">", "Gt": "≫", "gtdot": "⋗", "gtlPar": "⦕", "gtquest": "⩼", "gtrapprox": "⪆", "gtrarr": "⥸", "gtrdot": "⋗", "gtreqless": "⋛", "gtreqqless": "⪌", "gtrless": "≷", "gtrsim": "≳", "gvertneqq": "≩︀", "gvnE": "≩︀", "Hacek": "ˇ", "hairsp": " ", "half": "½", "hamilt": "ℋ", "HARDcy": "Ъ", "hardcy": "ъ", "harrcir": "⥈", "harr": "↔", "hArr": "⇔", "harrw": "↭", "Hat": "^", "hbar": "ℏ", "Hcirc": "Ĥ", "hcirc": "ĥ", "hearts": "♥", "heartsuit": "♥", "hellip": "…", "hercon": "⊹", "hfr": "𝔥", "Hfr": "ℌ", "HilbertSpace": "ℋ", "hksearow": "⤥", "hkswarow": "⤦", "hoarr": "⇿", "homtht": "∻", "hookleftarrow": "↩", "hookrightarrow": "↪", "hopf": "𝕙", "Hopf": "ℍ", "horbar": "―", "HorizontalLine": "─", "hscr": "𝒽", "Hscr": "ℋ", "hslash": "ℏ", "Hstrok": "Ħ", "hstrok": "ħ", "HumpDownHump": "≎", "HumpEqual": "≏", "hybull": "⁃", "hyphen": "‐", "Iacute": "Í", "iacute": "í", "ic": "⁣", "Icirc": "Î", "icirc": "î", "Icy": "И", "icy": "и", "Idot": "İ", "IEcy": "Е", "iecy": "е", "iexcl": "¡", "iff": "⇔", "ifr": "𝔦", "Ifr": "ℑ", "Igrave": "Ì", "igrave": "ì", "ii": "ⅈ", "iiiint": "⨌", "iiint": "∭", "iinfin": "⧜", "iiota": "℩", "IJlig": "Ĳ", "ijlig": "ĳ", "Imacr": "Ī", "imacr": "ī", "image": "ℑ", "ImaginaryI": "ⅈ", "imagline": "ℐ", "imagpart": "ℑ", "imath": "ı", "Im": "ℑ", "imof": "⊷", "imped": "Ƶ", "Implies": "⇒", "incare": "℅", "in": "∈", "infin": "∞", "infintie": "⧝", "inodot": "ı", "intcal": "⊺", "int": "∫", "Int": "∬", "integers": "ℤ", "Integral": "∫", "intercal": "⊺", "Intersection": "⋂", "intlarhk": "⨗", "intprod": "⨼", "InvisibleComma": "⁣", "InvisibleTimes": "⁢", "IOcy": "Ё", "iocy": "ё", "Iogon": "Į", "iogon": "į", "Iopf": "𝕀", "iopf": "𝕚", "Iota": "Ι", "iota": "ι", "iprod": "⨼", "iquest": "¿", "iscr": "𝒾", "Iscr": "ℐ", "isin": "∈", "isindot": "⋵", "isinE": "⋹", "isins": "⋴", "isinsv": "⋳", "isinv": "∈", "it": "⁢", "Itilde": "Ĩ", "itilde": "ĩ", "Iukcy": "І", "iukcy": "і", "Iuml": "Ï", "iuml": "ï", "Jcirc": "Ĵ", "jcirc": "ĵ", "Jcy": "Й", "jcy": "й", "Jfr": "𝔍", "jfr": "𝔧", "jmath": "ȷ", "Jopf": "𝕁", "jopf": "𝕛", "Jscr": "𝒥", "jscr": "𝒿", "Jsercy": "Ј", "jsercy": "ј", "Jukcy": "Є", "jukcy": "є", "Kappa": "Κ", "kappa": "κ", "kappav": "ϰ", "Kcedil": "Ķ", "kcedil": "ķ", "Kcy": "К", "kcy": "к", "Kfr": "𝔎", "kfr": "𝔨", "kgreen": "ĸ", "KHcy": "Х", "khcy": "х", "KJcy": "Ќ", "kjcy": "ќ", "Kopf": "𝕂", "kopf": "𝕜", "Kscr": "𝒦", "kscr": "𝓀", "lAarr": "⇚", "Lacute": "Ĺ", "lacute": "ĺ", "laemptyv": "⦴", "lagran": "ℒ", "Lambda": "Λ", "lambda": "λ", "lang": "⟨", "Lang": "⟪", "langd": "⦑", "langle": "⟨", "lap": "⪅", "Laplacetrf": "ℒ", "laquo": "«", "larrb": "⇤", "larrbfs": "⤟", "larr": "←", "Larr": "↞", "lArr": "⇐", "larrfs": "⤝", "larrhk": "↩", "larrlp": "↫", "larrpl": "⤹", "larrsim": "⥳", "larrtl": "↢", "latail": "⤙", "lAtail": "⤛", "lat": "⪫", "late": "⪭", "lates": "⪭︀", "lbarr": "⤌", "lBarr": "⤎", "lbbrk": "❲", "lbrace": "{", "lbrack": "[", "lbrke": "⦋", "lbrksld": "⦏", "lbrkslu": "⦍", "Lcaron": "Ľ", "lcaron": "ľ", "Lcedil": "Ļ", "lcedil": "ļ", "lceil": "⌈", "lcub": "{", "Lcy": "Л", "lcy": "л", "ldca": "⤶", "ldquo": "“", "ldquor": "„", "ldrdhar": "⥧", "ldrushar": "⥋", "ldsh": "↲", "le": "≤", "lE": "≦", "LeftAngleBracket": "⟨", "LeftArrowBar": "⇤", "leftarrow": "←", "LeftArrow": "←", "Leftarrow": "⇐", "LeftArrowRightArrow": "⇆", "leftarrowtail": "↢", "LeftCeiling": "⌈", "LeftDoubleBracket": "⟦", "LeftDownTeeVector": "⥡", "LeftDownVectorBar": "⥙", "LeftDownVector": "⇃", "LeftFloor": "⌊", "leftharpoondown": "↽", "leftharpoonup": "↼", "leftleftarrows": "⇇", "leftrightarrow": "↔", "LeftRightArrow": "↔", "Leftrightarrow": "⇔", "leftrightarrows": "⇆", "leftrightharpoons": "⇋", "leftrightsquigarrow": "↭", "LeftRightVector": "⥎", "LeftTeeArrow": "↤", "LeftTee": "⊣", "LeftTeeVector": "⥚", "leftthreetimes": "⋋", "LeftTriangleBar": "⧏", "LeftTriangle": "⊲", "LeftTriangleEqual": "⊴", "LeftUpDownVector": "⥑", "LeftUpTeeVector": "⥠", "LeftUpVectorBar": "⥘", "LeftUpVector": "↿", "LeftVectorBar": "⥒", "LeftVector": "↼", "lEg": "⪋", "leg": "⋚", "leq": "≤", "leqq": "≦", "leqslant": "⩽", "lescc": "⪨", "les": "⩽", "lesdot": "⩿", "lesdoto": "⪁", "lesdotor": "⪃", "lesg": "⋚︀", "lesges": "⪓", "lessapprox": "⪅", "lessdot": "⋖", "lesseqgtr": "⋚", "lesseqqgtr": "⪋", "LessEqualGreater": "⋚", "LessFullEqual": "≦", "LessGreater": "≶", "lessgtr": "≶", "LessLess": "⪡", "lesssim": "≲", "LessSlantEqual": "⩽", "LessTilde": "≲", "lfisht": "⥼", "lfloor": "⌊", "Lfr": "𝔏", "lfr": "𝔩", "lg": "≶", "lgE": "⪑", "lHar": "⥢", "lhard": "↽", "lharu": "↼", "lharul": "⥪", "lhblk": "▄", "LJcy": "Љ", "ljcy": "љ", "llarr": "⇇", "ll": "≪", "Ll": "⋘", "llcorner": "⌞", "Lleftarrow": "⇚", "llhard": "⥫", "lltri": "◺", "Lmidot": "Ŀ", "lmidot": "ŀ", "lmoustache": "⎰", "lmoust": "⎰", "lnap": "⪉", "lnapprox": "⪉", "lne": "⪇", "lnE": "≨", "lneq": "⪇", "lneqq": "≨", "lnsim": "⋦", "loang": "⟬", "loarr": "⇽", "lobrk": "⟦", "longleftarrow": "⟵", "LongLeftArrow": "⟵", "Longleftarrow": "⟸", "longleftrightarrow": "⟷", "LongLeftRightArrow": "⟷", "Longleftrightarrow": "⟺", "longmapsto": "⟼", "longrightarrow": "⟶", "LongRightArrow": "⟶", "Longrightarrow": "⟹", "looparrowleft": "↫", "looparrowright": "↬", "lopar": "⦅", "Lopf": "𝕃", "lopf": "𝕝", "loplus": "⨭", "lotimes": "⨴", "lowast": "∗", "lowbar": "_", "LowerLeftArrow": "↙", "LowerRightArrow": "↘", "loz": "◊", "lozenge": "◊", "lozf": "⧫", "lpar": "(", "lparlt": "⦓", "lrarr": "⇆", "lrcorner": "⌟", "lrhar": "⇋", "lrhard": "⥭", "lrm": "‎", "lrtri": "⊿", "lsaquo": "‹", "lscr": "𝓁", "Lscr": "ℒ", "lsh": "↰", "Lsh": "↰", "lsim": "≲", "lsime": "⪍", "lsimg": "⪏", "lsqb": "[", "lsquo": "‘", "lsquor": "‚", "Lstrok": "Ł", "lstrok": "ł", "ltcc": "⪦", "ltcir": "⩹", "lt": "<", "LT": "<", "Lt": "≪", "ltdot": "⋖", "lthree": "⋋", "ltimes": "⋉", "ltlarr": "⥶", "ltquest": "⩻", "ltri": "◃", "ltrie": "⊴", "ltrif": "◂", "ltrPar": "⦖", "lurdshar": "⥊", "luruhar": "⥦", "lvertneqq": "≨︀", "lvnE": "≨︀", "macr": "¯", "male": "♂", "malt": "✠", "maltese": "✠", "Map": "⤅", "map": "↦", "mapsto": "↦", "mapstodown": "↧", "mapstoleft": "↤", "mapstoup": "↥", "marker": "▮", "mcomma": "⨩", "Mcy": "М", "mcy": "м", "mdash": "—", "mDDot": "∺", "measuredangle": "∡", "MediumSpace": " ", "Mellintrf": "ℳ", "Mfr": "𝔐", "mfr": "𝔪", "mho": "℧", "micro": "µ", "midast": "*", "midcir": "⫰", "mid": "∣", "middot": "·", "minusb": "⊟", "minus": "−", "minusd": "∸", "minusdu": "⨪", "MinusPlus": "∓", "mlcp": "⫛", "mldr": "…", "mnplus": "∓", "models": "⊧", "Mopf": "𝕄", "mopf": "𝕞", "mp": "∓", "mscr": "𝓂", "Mscr": "ℳ", "mstpos": "∾", "Mu": "Μ", "mu": "μ", "multimap": "⊸", "mumap": "⊸", "nabla": "∇", "Nacute": "Ń", "nacute": "ń", "nang": "∠⃒", "nap": "≉", "napE": "⩰̸", "napid": "≋̸", "napos": "ŉ", "napprox": "≉", "natural": "♮", "naturals": "ℕ", "natur": "♮", "nbsp": " ", "nbump": "≎̸", "nbumpe": "≏̸", "ncap": "⩃", "Ncaron": "Ň", "ncaron": "ň", "Ncedil": "Ņ", "ncedil": "ņ", "ncong": "≇", "ncongdot": "⩭̸", "ncup": "⩂", "Ncy": "Н", "ncy": "н", "ndash": "–", "nearhk": "⤤", "nearr": "↗", "neArr": "⇗", "nearrow": "↗", "ne": "≠", "nedot": "≐̸", "NegativeMediumSpace": "​", "NegativeThickSpace": "​", "NegativeThinSpace": "​", "NegativeVeryThinSpace": "​", "nequiv": "≢", "nesear": "⤨", "nesim": "≂̸", "NestedGreaterGreater": "≫", "NestedLessLess": "≪", "NewLine": "\n", "nexist": "∄", "nexists": "∄", "Nfr": "𝔑", "nfr": "𝔫", "ngE": "≧̸", "nge": "≱", "ngeq": "≱", "ngeqq": "≧̸", "ngeqslant": "⩾̸", "nges": "⩾̸", "nGg": "⋙̸", "ngsim": "≵", "nGt": "≫⃒", "ngt": "≯", "ngtr": "≯", "nGtv": "≫̸", "nharr": "↮", "nhArr": "⇎", "nhpar": "⫲", "ni": "∋", "nis": "⋼", "nisd": "⋺", "niv": "∋", "NJcy": "Њ", "njcy": "њ", "nlarr": "↚", "nlArr": "⇍", "nldr": "‥", "nlE": "≦̸", "nle": "≰", "nleftarrow": "↚", "nLeftarrow": "⇍", "nleftrightarrow": "↮", "nLeftrightarrow": "⇎", "nleq": "≰", "nleqq": "≦̸", "nleqslant": "⩽̸", "nles": "⩽̸", "nless": "≮", "nLl": "⋘̸", "nlsim": "≴", "nLt": "≪⃒", "nlt": "≮", "nltri": "⋪", "nltrie": "⋬", "nLtv": "≪̸", "nmid": "∤", "NoBreak": "⁠", "NonBreakingSpace": " ", "nopf": "𝕟", "Nopf": "ℕ", "Not": "⫬", "not": "¬", "NotCongruent": "≢", "NotCupCap": "≭", "NotDoubleVerticalBar": "∦", "NotElement": "∉", "NotEqual": "≠", "NotEqualTilde": "≂̸", "NotExists": "∄", "NotGreater": "≯", "NotGreaterEqual": "≱", "NotGreaterFullEqual": "≧̸", "NotGreaterGreater": "≫̸", "NotGreaterLess": "≹", "NotGreaterSlantEqual": "⩾̸", "NotGreaterTilde": "≵", "NotHumpDownHump": "≎̸", "NotHumpEqual": "≏̸", "notin": "∉", "notindot": "⋵̸", "notinE": "⋹̸", "notinva": "∉", "notinvb": "⋷", "notinvc": "⋶", "NotLeftTriangleBar": "⧏̸", "NotLeftTriangle": "⋪", "NotLeftTriangleEqual": "⋬", "NotLess": "≮", "NotLessEqual": "≰", "NotLessGreater": "≸", "NotLessLess": "≪̸", "NotLessSlantEqual": "⩽̸", "NotLessTilde": "≴", "NotNestedGreaterGreater": "⪢̸", "NotNestedLessLess": "⪡̸", "notni": "∌", "notniva": "∌", "notnivb": "⋾", "notnivc": "⋽", "NotPrecedes": "⊀", "NotPrecedesEqual": "⪯̸", "NotPrecedesSlantEqual": "⋠", "NotReverseElement": "∌", "NotRightTriangleBar": "⧐̸", "NotRightTriangle": "⋫", "NotRightTriangleEqual": "⋭", "NotSquareSubset": "⊏̸", "NotSquareSubsetEqual": "⋢", "NotSquareSuperset": "⊐̸", "NotSquareSupersetEqual": "⋣", "NotSubset": "⊂⃒", "NotSubsetEqual": "⊈", "NotSucceeds": "⊁", "NotSucceedsEqual": "⪰̸", "NotSucceedsSlantEqual": "⋡", "NotSucceedsTilde": "≿̸", "NotSuperset": "⊃⃒", "NotSupersetEqual": "⊉", "NotTilde": "≁", "NotTildeEqual": "≄", "NotTildeFullEqual": "≇", "NotTildeTilde": "≉", "NotVerticalBar": "∤", "nparallel": "∦", "npar": "∦", "nparsl": "⫽⃥", "npart": "∂̸", "npolint": "⨔", "npr": "⊀", "nprcue": "⋠", "nprec": "⊀", "npreceq": "⪯̸", "npre": "⪯̸", "nrarrc": "⤳̸", "nrarr": "↛", "nrArr": "⇏", "nrarrw": "↝̸", "nrightarrow": "↛", "nRightarrow": "⇏", "nrtri": "⋫", "nrtrie": "⋭", "nsc": "⊁", "nsccue": "⋡", "nsce": "⪰̸", "Nscr": "𝒩", "nscr": "𝓃", "nshortmid": "∤", "nshortparallel": "∦", "nsim": "≁", "nsime": "≄", "nsimeq": "≄", "nsmid": "∤", "nspar": "∦", "nsqsube": "⋢", "nsqsupe": "⋣", "nsub": "⊄", "nsubE": "⫅̸", "nsube": "⊈", "nsubset": "⊂⃒", "nsubseteq": "⊈", "nsubseteqq": "⫅̸", "nsucc": "⊁", "nsucceq": "⪰̸", "nsup": "⊅", "nsupE": "⫆̸", "nsupe": "⊉", "nsupset": "⊃⃒", "nsupseteq": "⊉", "nsupseteqq": "⫆̸", "ntgl": "≹", "Ntilde": "Ñ", "ntilde": "ñ", "ntlg": "≸", "ntriangleleft": "⋪", "ntrianglelefteq": "⋬", "ntriangleright": "⋫", "ntrianglerighteq": "⋭", "Nu": "Ν", "nu": "ν", "num": "#", "numero": "№", "numsp": " ", "nvap": "≍⃒", "nvdash": "⊬", "nvDash": "⊭", "nVdash": "⊮", "nVDash": "⊯", "nvge": "≥⃒", "nvgt": ">⃒", "nvHarr": "⤄", "nvinfin": "⧞", "nvlArr": "⤂", "nvle": "≤⃒", "nvlt": "<⃒", "nvltrie": "⊴⃒", "nvrArr": "⤃", "nvrtrie": "⊵⃒", "nvsim": "∼⃒", "nwarhk": "⤣", "nwarr": "↖", "nwArr": "⇖", "nwarrow": "↖", "nwnear": "⤧", "Oacute": "Ó", "oacute": "ó", "oast": "⊛", "Ocirc": "Ô", "ocirc": "ô", "ocir": "⊚", "Ocy": "О", "ocy": "о", "odash": "⊝", "Odblac": "Ő", "odblac": "ő", "odiv": "⨸", "odot": "⊙", "odsold": "⦼", "OElig": "Œ", "oelig": "œ", "ofcir": "⦿", "Ofr": "𝔒", "ofr": "𝔬", "ogon": "˛", "Ograve": "Ò", "ograve": "ò", "ogt": "⧁", "ohbar": "⦵", "ohm": "Ω", "oint": "∮", "olarr": "↺", "olcir": "⦾", "olcross": "⦻", "oline": "‾", "olt": "⧀", "Omacr": "Ō", "omacr": "ō", "Omega": "Ω", "omega": "ω", "Omicron": "Ο", "omicron": "ο", "omid": "⦶", "ominus": "⊖", "Oopf": "𝕆", "oopf": "𝕠", "opar": "⦷", "OpenCurlyDoubleQuote": "“", "OpenCurlyQuote": "‘", "operp": "⦹", "oplus": "⊕", "orarr": "↻", "Or": "⩔", "or": "∨", "ord": "⩝", "order": "ℴ", "orderof": "ℴ", "ordf": "ª", "ordm": "º", "origof": "⊶", "oror": "⩖", "orslope": "⩗", "orv": "⩛", "oS": "Ⓢ", "Oscr": "𝒪", "oscr": "ℴ", "Oslash": "Ø", "oslash": "ø", "osol": "⊘", "Otilde": "Õ", "otilde": "õ", "otimesas": "⨶", "Otimes": "⨷", "otimes": "⊗", "Ouml": "Ö", "ouml": "ö", "ovbar": "⌽", "OverBar": "‾", "OverBrace": "⏞", "OverBracket": "⎴", "OverParenthesis": "⏜", "para": "¶", "parallel": "∥", "par": "∥", "parsim": "⫳", "parsl": "⫽", "part": "∂", "PartialD": "∂", "Pcy": "П", "pcy": "п", "percnt": "%", "period": ".", "permil": "‰", "perp": "⊥", "pertenk": "‱", "Pfr": "𝔓", "pfr": "𝔭", "Phi": "Φ", "phi": "φ", "phiv": "ϕ", "phmmat": "ℳ", "phone": "☎", "Pi": "Π", "pi": "π", "pitchfork": "⋔", "piv": "ϖ", "planck": "ℏ", "planckh": "ℎ", "plankv": "ℏ", "plusacir": "⨣", "plusb": "⊞", "pluscir": "⨢", "plus": "+", "plusdo": "∔", "plusdu": "⨥", "pluse": "⩲", "PlusMinus": "±", "plusmn": "±", "plussim": "⨦", "plustwo": "⨧", "pm": "±", "Poincareplane": "ℌ", "pointint": "⨕", "popf": "𝕡", "Popf": "ℙ", "pound": "£", "prap": "⪷", "Pr": "⪻", "pr": "≺", "prcue": "≼", "precapprox": "⪷", "prec": "≺", "preccurlyeq": "≼", "Precedes": "≺", "PrecedesEqual": "⪯", "PrecedesSlantEqual": "≼", "PrecedesTilde": "≾", "preceq": "⪯", "precnapprox": "⪹", "precneqq": "⪵", "precnsim": "⋨", "pre": "⪯", "prE": "⪳", "precsim": "≾", "prime": "′", "Prime": "″", "primes": "ℙ", "prnap": "⪹", "prnE": "⪵", "prnsim": "⋨", "prod": "∏", "Product": "∏", "profalar": "⌮", "profline": "⌒", "profsurf": "⌓", "prop": "∝", "Proportional": "∝", "Proportion": "∷", "propto": "∝", "prsim": "≾", "prurel": "⊰", "Pscr": "𝒫", "pscr": "𝓅", "Psi": "Ψ", "psi": "ψ", "puncsp": " ", "Qfr": "𝔔", "qfr": "𝔮", "qint": "⨌", "qopf": "𝕢", "Qopf": "ℚ", "qprime": "⁗", "Qscr": "𝒬", "qscr": "𝓆", "quaternions": "ℍ", "quatint": "⨖", "quest": "?", "questeq": "≟", "quot": "\"", "QUOT": "\"", "rAarr": "⇛", "race": "∽̱", "Racute": "Ŕ", "racute": "ŕ", "radic": "√", "raemptyv": "⦳", "rang": "⟩", "Rang": "⟫", "rangd": "⦒", "range": "⦥", "rangle": "⟩", "raquo": "»", "rarrap": "⥵", "rarrb": "⇥", "rarrbfs": "⤠", "rarrc": "⤳", "rarr": "→", "Rarr": "↠", "rArr": "⇒", "rarrfs": "⤞", "rarrhk": "↪", "rarrlp": "↬", "rarrpl": "⥅", "rarrsim": "⥴", "Rarrtl": "⤖", "rarrtl": "↣", "rarrw": "↝", "ratail": "⤚", "rAtail": "⤜", "ratio": "∶", "rationals": "ℚ", "rbarr": "⤍", "rBarr": "⤏", "RBarr": "⤐", "rbbrk": "❳", "rbrace": "}", "rbrack": "]", "rbrke": "⦌", "rbrksld": "⦎", "rbrkslu": "⦐", "Rcaron": "Ř", "rcaron": "ř", "Rcedil": "Ŗ", "rcedil": "ŗ", "rceil": "⌉", "rcub": "}", "Rcy": "Р", "rcy": "р", "rdca": "⤷", "rdldhar": "⥩", "rdquo": "”", "rdquor": "”", "rdsh": "↳", "real": "ℜ", "realine": "ℛ", "realpart": "ℜ", "reals": "ℝ", "Re": "ℜ", "rect": "▭", "reg": "®", "REG": "®", "ReverseElement": "∋", "ReverseEquilibrium": "⇋", "ReverseUpEquilibrium": "⥯", "rfisht": "⥽", "rfloor": "⌋", "rfr": "𝔯", "Rfr": "ℜ", "rHar": "⥤", "rhard": "⇁", "rharu": "⇀", "rharul": "⥬", "Rho": "Ρ", "rho": "ρ", "rhov": "ϱ", "RightAngleBracket": "⟩", "RightArrowBar": "⇥", "rightarrow": "→", "RightArrow": "→", "Rightarrow": "⇒", "RightArrowLeftArrow": "⇄", "rightarrowtail": "↣", "RightCeiling": "⌉", "RightDoubleBracket": "⟧", "RightDownTeeVector": "⥝", "RightDownVectorBar": "⥕", "RightDownVector": "⇂", "RightFloor": "⌋", "rightharpoondown": "⇁", "rightharpoonup": "⇀", "rightleftarrows": "⇄", "rightleftharpoons": "⇌", "rightrightarrows": "⇉", "rightsquigarrow": "↝", "RightTeeArrow": "↦", "RightTee": "⊢", "RightTeeVector": "⥛", "rightthreetimes": "⋌", "RightTriangleBar": "⧐", "RightTriangle": "⊳", "RightTriangleEqual": "⊵", "RightUpDownVector": "⥏", "RightUpTeeVector": "⥜", "RightUpVectorBar": "⥔", "RightUpVector": "↾", "RightVectorBar": "⥓", "RightVector": "⇀", "ring": "˚", "risingdotseq": "≓", "rlarr": "⇄", "rlhar": "⇌", "rlm": "‏", "rmoustache": "⎱", "rmoust": "⎱", "rnmid": "⫮", "roang": "⟭", "roarr": "⇾", "robrk": "⟧", "ropar": "⦆", "ropf": "𝕣", "Ropf": "ℝ", "roplus": "⨮", "rotimes": "⨵", "RoundImplies": "⥰", "rpar": ")", "rpargt": "⦔", "rppolint": "⨒", "rrarr": "⇉", "Rrightarrow": "⇛", "rsaquo": "›", "rscr": "𝓇", "Rscr": "ℛ", "rsh": "↱", "Rsh": "↱", "rsqb": "]", "rsquo": "’", "rsquor": "’", "rthree": "⋌", "rtimes": "⋊", "rtri": "▹", "rtrie": "⊵", "rtrif": "▸", "rtriltri": "⧎", "RuleDelayed": "⧴", "ruluhar": "⥨", "rx": "℞", "Sacute": "Ś", "sacute": "ś", "sbquo": "‚", "scap": "⪸", "Scaron": "Š", "scaron": "š", "Sc": "⪼", "sc": "≻", "sccue": "≽", "sce": "⪰", "scE": "⪴", "Scedil": "Ş", "scedil": "ş", "Scirc": "Ŝ", "scirc": "ŝ", "scnap": "⪺", "scnE": "⪶", "scnsim": "⋩", "scpolint": "⨓", "scsim": "≿", "Scy": "С", "scy": "с", "sdotb": "⊡", "sdot": "⋅", "sdote": "⩦", "searhk": "⤥", "searr": "↘", "seArr": "⇘", "searrow": "↘", "sect": "§", "semi": ";", "seswar": "⤩", "setminus": "∖", "setmn": "∖", "sext": "✶", "Sfr": "𝔖", "sfr": "𝔰", "sfrown": "⌢", "sharp": "♯", "SHCHcy": "Щ", "shchcy": "щ", "SHcy": "Ш", "shcy": "ш", "ShortDownArrow": "↓", "ShortLeftArrow": "←", "shortmid": "∣", "shortparallel": "∥", "ShortRightArrow": "→", "ShortUpArrow": "↑", "shy": "­", "Sigma": "Σ", "sigma": "σ", "sigmaf": "ς", "sigmav": "ς", "sim": "∼", "simdot": "⩪", "sime": "≃", "simeq": "≃", "simg": "⪞", "simgE": "⪠", "siml": "⪝", "simlE": "⪟", "simne": "≆", "simplus": "⨤", "simrarr": "⥲", "slarr": "←", "SmallCircle": "∘", "smallsetminus": "∖", "smashp": "⨳", "smeparsl": "⧤", "smid": "∣", "smile": "⌣", "smt": "⪪", "smte": "⪬", "smtes": "⪬︀", "SOFTcy": "Ь", "softcy": "ь", "solbar": "⌿", "solb": "⧄", "sol": "/", "Sopf": "𝕊", "sopf": "𝕤", "spades": "♠", "spadesuit": "♠", "spar": "∥", "sqcap": "⊓", "sqcaps": "⊓︀", "sqcup": "⊔", "sqcups": "⊔︀", "Sqrt": "√", "sqsub": "⊏", "sqsube": "⊑", "sqsubset": "⊏", "sqsubseteq": "⊑", "sqsup": "⊐", "sqsupe": "⊒", "sqsupset": "⊐", "sqsupseteq": "⊒", "square": "□", "Square": "□", "SquareIntersection": "⊓", "SquareSubset": "⊏", "SquareSubsetEqual": "⊑", "SquareSuperset": "⊐", "SquareSupersetEqual": "⊒", "SquareUnion": "⊔", "squarf": "▪", "squ": "□", "squf": "▪", "srarr": "→", "Sscr": "𝒮", "sscr": "𝓈", "ssetmn": "∖", "ssmile": "⌣", "sstarf": "⋆", "Star": "⋆", "star": "☆", "starf": "★", "straightepsilon": "ϵ", "straightphi": "ϕ", "strns": "¯", "sub": "⊂", "Sub": "⋐", "subdot": "⪽", "subE": "⫅", "sube": "⊆", "subedot": "⫃", "submult": "⫁", "subnE": "⫋", "subne": "⊊", "subplus": "⪿", "subrarr": "⥹", "subset": "⊂", "Subset": "⋐", "subseteq": "⊆", "subseteqq": "⫅", "SubsetEqual": "⊆", "subsetneq": "⊊", "subsetneqq": "⫋", "subsim": "⫇", "subsub": "⫕", "subsup": "⫓", "succapprox": "⪸", "succ": "≻", "succcurlyeq": "≽", "Succeeds": "≻", "SucceedsEqual": "⪰", "SucceedsSlantEqual": "≽", "SucceedsTilde": "≿", "succeq": "⪰", "succnapprox": "⪺", "succneqq": "⪶", "succnsim": "⋩", "succsim": "≿", "SuchThat": "∋", "sum": "∑", "Sum": "∑", "sung": "♪", "sup1": "¹", "sup2": "²", "sup3": "³", "sup": "⊃", "Sup": "⋑", "supdot": "⪾", "supdsub": "⫘", "supE": "⫆", "supe": "⊇", "supedot": "⫄", "Superset": "⊃", "SupersetEqual": "⊇", "suphsol": "⟉", "suphsub": "⫗", "suplarr": "⥻", "supmult": "⫂", "supnE": "⫌", "supne": "⊋", "supplus": "⫀", "supset": "⊃", "Supset": "⋑", "supseteq": "⊇", "supseteqq": "⫆", "supsetneq": "⊋", "supsetneqq": "⫌", "supsim": "⫈", "supsub": "⫔", "supsup": "⫖", "swarhk": "⤦", "swarr": "↙", "swArr": "⇙", "swarrow": "↙", "swnwar": "⤪", "szlig": "ß", "Tab": "\t", "target": "⌖", "Tau": "Τ", "tau": "τ", "tbrk": "⎴", "Tcaron": "Ť", "tcaron": "ť", "Tcedil": "Ţ", "tcedil": "ţ", "Tcy": "Т", "tcy": "т", "tdot": "⃛", "telrec": "⌕", "Tfr": "𝔗", "tfr": "𝔱", "there4": "∴", "therefore": "∴", "Therefore": "∴", "Theta": "Θ", "theta": "θ", "thetasym": "ϑ", "thetav": "ϑ", "thickapprox": "≈", "thicksim": "∼", "ThickSpace": "  ", "ThinSpace": " ", "thinsp": " ", "thkap": "≈", "thksim": "∼", "THORN": "Þ", "thorn": "þ", "tilde": "˜", "Tilde": "∼", "TildeEqual": "≃", "TildeFullEqual": "≅", "TildeTilde": "≈", "timesbar": "⨱", "timesb": "⊠", "times": "×", "timesd": "⨰", "tint": "∭", "toea": "⤨", "topbot": "⌶", "topcir": "⫱", "top": "⊤", "Topf": "𝕋", "topf": "𝕥", "topfork": "⫚", "tosa": "⤩", "tprime": "‴", "trade": "™", "TRADE": "™", "triangle": "▵", "triangledown": "▿", "triangleleft": "◃", "trianglelefteq": "⊴", "triangleq": "≜", "triangleright": "▹", "trianglerighteq": "⊵", "tridot": "◬", "trie": "≜", "triminus": "⨺", "TripleDot": "⃛", "triplus": "⨹", "trisb": "⧍", "tritime": "⨻", "trpezium": "⏢", "Tscr": "𝒯", "tscr": "𝓉", "TScy": "Ц", "tscy": "ц", "TSHcy": "Ћ", "tshcy": "ћ", "Tstrok": "Ŧ", "tstrok": "ŧ", "twixt": "≬", "twoheadleftarrow": "↞", "twoheadrightarrow": "↠", "Uacute": "Ú", "uacute": "ú", "uarr": "↑", "Uarr": "↟", "uArr": "⇑", "Uarrocir": "⥉", "Ubrcy": "Ў", "ubrcy": "ў", "Ubreve": "Ŭ", "ubreve": "ŭ", "Ucirc": "Û", "ucirc": "û", "Ucy": "У", "ucy": "у", "udarr": "⇅", "Udblac": "Ű", "udblac": "ű", "udhar": "⥮", "ufisht": "⥾", "Ufr": "𝔘", "ufr": "𝔲", "Ugrave": "Ù", "ugrave": "ù", "uHar": "⥣", "uharl": "↿", "uharr": "↾", "uhblk": "▀", "ulcorn": "⌜", "ulcorner": "⌜", "ulcrop": "⌏", "ultri": "◸", "Umacr": "Ū", "umacr": "ū", "uml": "¨", "UnderBar": "_", "UnderBrace": "⏟", "UnderBracket": "⎵", "UnderParenthesis": "⏝", "Union": "⋃", "UnionPlus": "⊎", "Uogon": "Ų", "uogon": "ų", "Uopf": "𝕌", "uopf": "𝕦", "UpArrowBar": "⤒", "uparrow": "↑", "UpArrow": "↑", "Uparrow": "⇑", "UpArrowDownArrow": "⇅", "updownarrow": "↕", "UpDownArrow": "↕", "Updownarrow": "⇕", "UpEquilibrium": "⥮", "upharpoonleft": "↿", "upharpoonright": "↾", "uplus": "⊎", "UpperLeftArrow": "↖", "UpperRightArrow": "↗", "upsi": "υ", "Upsi": "ϒ", "upsih": "ϒ", "Upsilon": "Υ", "upsilon": "υ", "UpTeeArrow": "↥", "UpTee": "⊥", "upuparrows": "⇈", "urcorn": "⌝", "urcorner": "⌝", "urcrop": "⌎", "Uring": "Ů", "uring": "ů", "urtri": "◹", "Uscr": "𝒰", "uscr": "𝓊", "utdot": "⋰", "Utilde": "Ũ", "utilde": "ũ", "utri": "▵", "utrif": "▴", "uuarr": "⇈", "Uuml": "Ü", "uuml": "ü", "uwangle": "⦧", "vangrt": "⦜", "varepsilon": "ϵ", "varkappa": "ϰ", "varnothing": "∅", "varphi": "ϕ", "varpi": "ϖ", "varpropto": "∝", "varr": "↕", "vArr": "⇕", "varrho": "ϱ", "varsigma": "ς", "varsubsetneq": "⊊︀", "varsubsetneqq": "⫋︀", "varsupsetneq": "⊋︀", "varsupsetneqq": "⫌︀", "vartheta": "ϑ", "vartriangleleft": "⊲", "vartriangleright": "⊳", "vBar": "⫨", "Vbar": "⫫", "vBarv": "⫩", "Vcy": "В", "vcy": "в", "vdash": "⊢", "vDash": "⊨", "Vdash": "⊩", "VDash": "⊫", "Vdashl": "⫦", "veebar": "⊻", "vee": "∨", "Vee": "⋁", "veeeq": "≚", "vellip": "⋮", "verbar": "|", "Verbar": "‖", "vert": "|", "Vert": "‖", "VerticalBar": "∣", "VerticalLine": "|", "VerticalSeparator": "❘", "VerticalTilde": "≀", "VeryThinSpace": " ", "Vfr": "𝔙", "vfr": "𝔳", "vltri": "⊲", "vnsub": "⊂⃒", "vnsup": "⊃⃒", "Vopf": "𝕍", "vopf": "𝕧", "vprop": "∝", "vrtri": "⊳", "Vscr": "𝒱", "vscr": "𝓋", "vsubnE": "⫋︀", "vsubne": "⊊︀", "vsupnE": "⫌︀", "vsupne": "⊋︀", "Vvdash": "⊪", "vzigzag": "⦚", "Wcirc": "Ŵ", "wcirc": "ŵ", "wedbar": "⩟", "wedge": "∧", "Wedge": "⋀", "wedgeq": "≙", "weierp": "℘", "Wfr": "𝔚", "wfr": "𝔴", "Wopf": "𝕎", "wopf": "𝕨", "wp": "℘", "wr": "≀", "wreath": "≀", "Wscr": "𝒲", "wscr": "𝓌", "xcap": "⋂", "xcirc": "◯", "xcup": "⋃", "xdtri": "▽", "Xfr": "𝔛", "xfr": "𝔵", "xharr": "⟷", "xhArr": "⟺", "Xi": "Ξ", "xi": "ξ", "xlarr": "⟵", "xlArr": "⟸", "xmap": "⟼", "xnis": "⋻", "xodot": "⨀", "Xopf": "𝕏", "xopf": "𝕩", "xoplus": "⨁", "xotime": "⨂", "xrarr": "⟶", "xrArr": "⟹", "Xscr": "𝒳", "xscr": "𝓍", "xsqcup": "⨆", "xuplus": "⨄", "xutri": "△", "xvee": "⋁", "xwedge": "⋀", "Yacute": "Ý", "yacute": "ý", "YAcy": "Я", "yacy": "я", "Ycirc": "Ŷ", "ycirc": "ŷ", "Ycy": "Ы", "ycy": "ы", "yen": "¥", "Yfr": "𝔜", "yfr": "𝔶", "YIcy": "Ї", "yicy": "ї", "Yopf": "𝕐", "yopf": "𝕪", "Yscr": "𝒴", "yscr": "𝓎", "YUcy": "Ю", "yucy": "ю", "yuml": "ÿ", "Yuml": "Ÿ", "Zacute": "Ź", "zacute": "ź", "Zcaron": "Ž", "zcaron": "ž", "Zcy": "З", "zcy": "з", "Zdot": "Ż", "zdot": "ż", "zeetrf": "ℨ", "ZeroWidthSpace": "​", "Zeta": "Ζ", "zeta": "ζ", "zfr": "𝔷", "Zfr": "ℨ", "ZHcy": "Ж", "zhcy": "ж", "zigrarr": "⇝", "zopf": "𝕫", "Zopf": "ℤ", "Zscr": "𝒵", "zscr": "𝓏", "zwj": "‍", "zwnj": "‌"

    /***/ };
},
/* 30 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.


  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  };

  var punycode = __webpack_require__(53);
  var util = __webpack_require__(55);

  exports.parse = urlParse;
  exports.resolve = urlResolve;
  exports.resolveObject = urlResolveObject;
  exports.format = urlFormat;

  exports.Url = Url;

  function Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.host = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.query = null;
    this.pathname = null;
    this.path = null;
    this.href = null;
  }

  // Reference: RFC 3986, RFC 1808, RFC 2396

  // define these here so at least they only have to be
  // compiled once on the first module load.
  var protocolPattern = /^([a-z0-9.+-]+:)/i,
      portPattern = /:[0-9]*$/,


  // Special case for a simple path URL
  simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,


  // RFC 2396: characters reserved for delimiting URLs.
  // We actually just auto-escape these.
  delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],


  // RFC 2396: characters not allowed for various reasons.
  unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),


  // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
  autoEscape = ['\''].concat(unwise),


  // Characters that are never ever allowed in a hostname.
  // Note that any invalid chars are also handled, but these
  // are the ones that are *expected* to be seen, so we fast-path
  // them.
  nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
      hostEndingChars = ['/', '?', '#'],
      hostnameMaxLen = 255,
      hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
      hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,


  // protocols that can allow "unsafe" and "unwise" chars.
  unsafeProtocol = {
    'javascript': true,
    'javascript:': true
  },


  // protocols that never have a hostname.
  hostlessProtocol = {
    'javascript': true,
    'javascript:': true
  },


  // protocols that always contain a // bit.
  slashedProtocol = {
    'http': true,
    'https': true,
    'ftp': true,
    'gopher': true,
    'file': true,
    'http:': true,
    'https:': true,
    'ftp:': true,
    'gopher:': true,
    'file:': true
  },
      querystring = __webpack_require__(56);

  function urlParse(url, parseQueryString, slashesDenoteHost) {
    if (url && util.isObject(url) && url instanceof Url) return url;

    var u = new Url();
    u.parse(url, parseQueryString, slashesDenoteHost);
    return u;
  }

  Url.prototype.parse = function (url, parseQueryString, slashesDenoteHost) {
    if (!util.isString(url)) {
      throw new TypeError("Parameter 'url' must be a string, not " + (typeof url === 'undefined' ? 'undefined' : _typeof(url)));
    }

    // Copy chrome, IE, opera backslash-handling behavior.
    // Back slashes before the query string get converted to forward slashes
    // See: https://code.google.com/p/chromium/issues/detail?id=25916
    var queryIndex = url.indexOf('?'),
        splitter = queryIndex !== -1 && queryIndex < url.indexOf('#') ? '?' : '#',
        uSplit = url.split(splitter),
        slashRegex = /\\/g;
    uSplit[0] = uSplit[0].replace(slashRegex, '/');
    url = uSplit.join(splitter);

    var rest = url;

    // trim before proceeding.
    // This is to support parse stuff like "  http://foo.com  \n"
    rest = rest.trim();

    if (!slashesDenoteHost && url.split('#').length === 1) {
      // Try fast path regexp
      var simplePath = simplePathPattern.exec(rest);
      if (simplePath) {
        this.path = rest;
        this.href = rest;
        this.pathname = simplePath[1];
        if (simplePath[2]) {
          this.search = simplePath[2];
          if (parseQueryString) {
            this.query = querystring.parse(this.search.substr(1));
          } else {
            this.query = this.search.substr(1);
          }
        } else if (parseQueryString) {
          this.search = '';
          this.query = {};
        }
        return this;
      }
    }

    var proto = protocolPattern.exec(rest);
    if (proto) {
      proto = proto[0];
      var lowerProto = proto.toLowerCase();
      this.protocol = lowerProto;
      rest = rest.substr(proto.length);
    }

    // figure out if it's got a host
    // user@server is *always* interpreted as a hostname, and url
    // resolution will treat //foo/bar as host=foo,path=bar because that's
    // how the browser resolves relative URLs.
    if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var slashes = rest.substr(0, 2) === '//';
      if (slashes && !(proto && hostlessProtocol[proto])) {
        rest = rest.substr(2);
        this.slashes = true;
      }
    }

    if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {

      // there's a hostname.
      // the first instance of /, ?, ;, or # ends the host.
      //
      // If there is an @ in the hostname, then non-host chars *are* allowed
      // to the left of the last @ sign, unless some host-ending character
      // comes *before* the @-sign.
      // URLs are obnoxious.
      //
      // ex:
      // http://a@b@c/ => user:a@b host:c
      // http://a@b?@c => user:a host:c path:/?@c

      // v0.12 TODO(isaacs): This is not quite how Chrome does things.
      // Review our test case against browsers more comprehensively.

      // find the first instance of any hostEndingChars
      var hostEnd = -1;
      for (var i = 0; i < hostEndingChars.length; i++) {
        var hec = rest.indexOf(hostEndingChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
      }

      // at this point, either we have an explicit point where the
      // auth portion cannot go past, or the last @ char is the decider.
      var auth, atSign;
      if (hostEnd === -1) {
        // atSign can be anywhere.
        atSign = rest.lastIndexOf('@');
      } else {
        // atSign must be in auth portion.
        // http://a@b/c@d => host:b auth:a path:/c@d
        atSign = rest.lastIndexOf('@', hostEnd);
      }

      // Now we have a portion which is definitely the auth.
      // Pull that off.
      if (atSign !== -1) {
        auth = rest.slice(0, atSign);
        rest = rest.slice(atSign + 1);
        this.auth = decodeURIComponent(auth);
      }

      // the host is the remaining to the left of the first non-host char
      hostEnd = -1;
      for (var i = 0; i < nonHostChars.length; i++) {
        var hec = rest.indexOf(nonHostChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
      }
      // if we still have not hit it, then the entire thing is a host.
      if (hostEnd === -1) hostEnd = rest.length;

      this.host = rest.slice(0, hostEnd);
      rest = rest.slice(hostEnd);

      // pull out port.
      this.parseHost();

      // we've indicated that there is a hostname,
      // so even if it's empty, it has to be present.
      this.hostname = this.hostname || '';

      // if hostname begins with [ and ends with ]
      // assume that it's an IPv6 address.
      var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';

      // validate a little.
      if (!ipv6Hostname) {
        var hostparts = this.hostname.split(/\./);
        for (var i = 0, l = hostparts.length; i < l; i++) {
          var part = hostparts[i];
          if (!part) continue;
          if (!part.match(hostnamePartPattern)) {
            var newpart = '';
            for (var j = 0, k = part.length; j < k; j++) {
              if (part.charCodeAt(j) > 127) {
                // we replace non-ASCII char with a temporary placeholder
                // we need this to make sure size of hostname is not
                // broken by replacing non-ASCII by nothing
                newpart += 'x';
              } else {
                newpart += part[j];
              }
            }
            // we test again with ASCII char only
            if (!newpart.match(hostnamePartPattern)) {
              var validParts = hostparts.slice(0, i);
              var notHost = hostparts.slice(i + 1);
              var bit = part.match(hostnamePartStart);
              if (bit) {
                validParts.push(bit[1]);
                notHost.unshift(bit[2]);
              }
              if (notHost.length) {
                rest = '/' + notHost.join('.') + rest;
              }
              this.hostname = validParts.join('.');
              break;
            }
          }
        }
      }

      if (this.hostname.length > hostnameMaxLen) {
        this.hostname = '';
      } else {
        // hostnames are always lower case.
        this.hostname = this.hostname.toLowerCase();
      }

      if (!ipv6Hostname) {
        // IDNA Support: Returns a punycoded representation of "domain".
        // It only converts parts of the domain name that
        // have non-ASCII characters, i.e. it doesn't matter if
        // you call it with a domain that already is ASCII-only.
        this.hostname = punycode.toASCII(this.hostname);
      }

      var p = this.port ? ':' + this.port : '';
      var h = this.hostname || '';
      this.host = h + p;
      this.href += this.host;

      // strip [ and ] from the hostname
      // the host field still retains them, though
      if (ipv6Hostname) {
        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
        if (rest[0] !== '/') {
          rest = '/' + rest;
        }
      }
    }

    // now rest is set to the post-host stuff.
    // chop off any delim chars.
    if (!unsafeProtocol[lowerProto]) {

      // First, make 100% sure that any "autoEscape" chars get
      // escaped, even if encodeURIComponent doesn't think they
      // need to be.
      for (var i = 0, l = autoEscape.length; i < l; i++) {
        var ae = autoEscape[i];
        if (rest.indexOf(ae) === -1) continue;
        var esc = encodeURIComponent(ae);
        if (esc === ae) {
          esc = escape(ae);
        }
        rest = rest.split(ae).join(esc);
      }
    }

    // chop off from the tail first.
    var hash = rest.indexOf('#');
    if (hash !== -1) {
      // got a fragment string.
      this.hash = rest.substr(hash);
      rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf('?');
    if (qm !== -1) {
      this.search = rest.substr(qm);
      this.query = rest.substr(qm + 1);
      if (parseQueryString) {
        this.query = querystring.parse(this.query);
      }
      rest = rest.slice(0, qm);
    } else if (parseQueryString) {
      // no query string, but parseQueryString still requested
      this.search = '';
      this.query = {};
    }
    if (rest) this.pathname = rest;
    if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
      this.pathname = '/';
    }

    //to support http.request
    if (this.pathname || this.search) {
      var p = this.pathname || '';
      var s = this.search || '';
      this.path = p + s;
    }

    // finally, reconstruct the href based on what has been validated.
    this.href = this.format();
    return this;
  };

  // format a parsed object into a url string
  function urlFormat(obj) {
    // ensure it's an object, and not a string url.
    // If it's an obj, this is a no-op.
    // this way, you can call url_format() on strings
    // to clean up potentially wonky urls.
    if (util.isString(obj)) obj = urlParse(obj);
    if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
    return obj.format();
  }

  Url.prototype.format = function () {
    var auth = this.auth || '';
    if (auth) {
      auth = encodeURIComponent(auth);
      auth = auth.replace(/%3A/i, ':');
      auth += '@';
    }

    var protocol = this.protocol || '',
        pathname = this.pathname || '',
        hash = this.hash || '',
        host = false,
        query = '';

    if (this.host) {
      host = auth + this.host;
    } else if (this.hostname) {
      host = auth + (this.hostname.indexOf(':') === -1 ? this.hostname : '[' + this.hostname + ']');
      if (this.port) {
        host += ':' + this.port;
      }
    }

    if (this.query && util.isObject(this.query) && Object.keys(this.query).length) {
      query = querystring.stringify(this.query);
    }

    var search = this.search || query && '?' + query || '';

    if (protocol && protocol.substr(-1) !== ':') protocol += ':';

    // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
    // unless they had them to begin with.
    if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
      host = '//' + (host || '');
      if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
    } else if (!host) {
      host = '';
    }

    if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
    if (search && search.charAt(0) !== '?') search = '?' + search;

    pathname = pathname.replace(/[?#]/g, function (match) {
      return encodeURIComponent(match);
    });
    search = search.replace('#', '%23');

    return protocol + host + pathname + search + hash;
  };

  function urlResolve(source, relative) {
    return urlParse(source, false, true).resolve(relative);
  }

  Url.prototype.resolve = function (relative) {
    return this.resolveObject(urlParse(relative, false, true)).format();
  };

  function urlResolveObject(source, relative) {
    if (!source) return relative;
    return urlParse(source, false, true).resolveObject(relative);
  }

  Url.prototype.resolveObject = function (relative) {
    if (util.isString(relative)) {
      var rel = new Url();
      rel.parse(relative, false, true);
      relative = rel;
    }

    var result = new Url();
    var tkeys = Object.keys(this);
    for (var tk = 0; tk < tkeys.length; tk++) {
      var tkey = tkeys[tk];
      result[tkey] = this[tkey];
    }

    // hash is always overridden, no matter what.
    // even href="" will remove it.
    result.hash = relative.hash;

    // if the relative url is empty, then there's nothing left to do here.
    if (relative.href === '') {
      result.href = result.format();
      return result;
    }

    // hrefs like //foo/bar always cut to the protocol.
    if (relative.slashes && !relative.protocol) {
      // take everything except the protocol from relative
      var rkeys = Object.keys(relative);
      for (var rk = 0; rk < rkeys.length; rk++) {
        var rkey = rkeys[rk];
        if (rkey !== 'protocol') result[rkey] = relative[rkey];
      }

      //urlParse appends trailing / to urls like http://www.example.com
      if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
        result.path = result.pathname = '/';
      }

      result.href = result.format();
      return result;
    }

    if (relative.protocol && relative.protocol !== result.protocol) {
      // if it's a known url protocol, then changing
      // the protocol does weird things
      // first, if it's not file:, then we MUST have a host,
      // and if there was a path
      // to begin with, then we MUST have a path.
      // if it is file:, then the host is dropped,
      // because that's known to be hostless.
      // anything else is assumed to be absolute.
      if (!slashedProtocol[relative.protocol]) {
        var keys = Object.keys(relative);
        for (var v = 0; v < keys.length; v++) {
          var k = keys[v];
          result[k] = relative[k];
        }
        result.href = result.format();
        return result;
      }

      result.protocol = relative.protocol;
      if (!relative.host && !hostlessProtocol[relative.protocol]) {
        var relPath = (relative.pathname || '').split('/');
        while (relPath.length && !(relative.host = relPath.shift())) {}
        if (!relative.host) relative.host = '';
        if (!relative.hostname) relative.hostname = '';
        if (relPath[0] !== '') relPath.unshift('');
        if (relPath.length < 2) relPath.unshift('');
        result.pathname = relPath.join('/');
      } else {
        result.pathname = relative.pathname;
      }
      result.search = relative.search;
      result.query = relative.query;
      result.host = relative.host || '';
      result.auth = relative.auth;
      result.hostname = relative.hostname || relative.host;
      result.port = relative.port;
      // to support http.request
      if (result.pathname || result.search) {
        var p = result.pathname || '';
        var s = result.search || '';
        result.path = p + s;
      }
      result.slashes = result.slashes || relative.slashes;
      result.href = result.format();
      return result;
    }

    var isSourceAbs = result.pathname && result.pathname.charAt(0) === '/',
        isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === '/',
        mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname,
        removeAllDots = mustEndAbs,
        srcPath = result.pathname && result.pathname.split('/') || [],
        relPath = relative.pathname && relative.pathname.split('/') || [],
        psychotic = result.protocol && !slashedProtocol[result.protocol];

    // if the url is a non-slashed url, then relative
    // links like ../.. should be able
    // to crawl up to the hostname, as well.  This is strange.
    // result.protocol has already been set by now.
    // Later on, put the first path part into the host field.
    if (psychotic) {
      result.hostname = '';
      result.port = null;
      if (result.host) {
        if (srcPath[0] === '') srcPath[0] = result.host;else srcPath.unshift(result.host);
      }
      result.host = '';
      if (relative.protocol) {
        relative.hostname = null;
        relative.port = null;
        if (relative.host) {
          if (relPath[0] === '') relPath[0] = relative.host;else relPath.unshift(relative.host);
        }
        relative.host = null;
      }
      mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
    }

    if (isRelAbs) {
      // it's absolute.
      result.host = relative.host || relative.host === '' ? relative.host : result.host;
      result.hostname = relative.hostname || relative.hostname === '' ? relative.hostname : result.hostname;
      result.search = relative.search;
      result.query = relative.query;
      srcPath = relPath;
      // fall through to the dot-handling below.
    } else if (relPath.length) {
      // it's relative
      // throw away the existing file, and take the new path instead.
      if (!srcPath) srcPath = [];
      srcPath.pop();
      srcPath = srcPath.concat(relPath);
      result.search = relative.search;
      result.query = relative.query;
    } else if (!util.isNullOrUndefined(relative.search)) {
      // just pull out the search.
      // like href='?foo'.
      // Put this after the other two cases because it simplifies the booleans
      if (psychotic) {
        result.hostname = result.host = srcPath.shift();
        //occationaly the auth can get stuck only in host
        //this especially happens in cases like
        //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
        var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
        if (authInHost) {
          result.auth = authInHost.shift();
          result.host = result.hostname = authInHost.shift();
        }
      }
      result.search = relative.search;
      result.query = relative.query;
      //to support http.request
      if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
        result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
      }
      result.href = result.format();
      return result;
    }

    if (!srcPath.length) {
      // no path at all.  easy.
      // we've already handled the other stuff above.
      result.pathname = null;
      //to support http.request
      if (result.search) {
        result.path = '/' + result.search;
      } else {
        result.path = null;
      }
      result.href = result.format();
      return result;
    }

    // if a url ENDs in . or .., then it must get a trailing slash.
    // however, if it ends in anything else non-slashy,
    // then it must NOT get a trailing slash.
    var last = srcPath.slice(-1)[0];
    var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === '.' || last === '..') || last === '';

    // strip single dots, resolve double dots to parent dir
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for (var i = srcPath.length; i >= 0; i--) {
      last = srcPath[i];
      if (last === '.') {
        srcPath.splice(i, 1);
      } else if (last === '..') {
        srcPath.splice(i, 1);
        up++;
      } else if (up) {
        srcPath.splice(i, 1);
        up--;
      }
    }

    // if the path is allowed to go above the root, restore leading ..s
    if (!mustEndAbs && !removeAllDots) {
      for (; up--; up) {
        srcPath.unshift('..');
      }
    }

    if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
      srcPath.unshift('');
    }

    if (hasTrailingSlash && srcPath.join('/').substr(-1) !== '/') {
      srcPath.push('');
    }

    var isAbsolute = srcPath[0] === '' || srcPath[0] && srcPath[0].charAt(0) === '/';

    // put the host back
    if (psychotic) {
      result.hostname = result.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : '';
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }

    mustEndAbs = mustEndAbs || result.host && srcPath.length;

    if (mustEndAbs && !isAbsolute) {
      srcPath.unshift('');
    }

    if (!srcPath.length) {
      result.pathname = null;
      result.path = null;
    } else {
      result.pathname = srcPath.join('/');
    }

    //to support request.http
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
    }
    result.auth = relative.auth || result.auth;
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  };

  Url.prototype.parseHost = function () {
    var host = this.host;
    var port = portPattern.exec(host);
    if (port) {
      port = port[0];
      if (port !== ':') {
        this.port = port.substr(1);
      }
      host = host.substr(0, host.length - port.length);
    }
    if (host) this.hostname = host;
  };

  /***/
},
/* 31 */
/***/function (module, exports) {

  /* WEBPACK VAR INJECTION */(function (__webpack_amd_options__) {
    /* globals __webpack_amd_options__ */
    module.exports = __webpack_amd_options__;

    /* WEBPACK VAR INJECTION */
  }).call(exports, {});

  /***/
},
/* 32 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.6

  (function () {
    var XMLAttribute;

    module.exports = XMLAttribute = function () {
      function XMLAttribute(parent, name, value) {
        this.options = parent.options;
        this.stringify = parent.stringify;
        if (name == null) {
          throw new Error("Missing attribute name of element " + parent.name);
        }
        if (value == null) {
          throw new Error("Missing attribute value for attribute " + name + " of element " + parent.name);
        }
        this.name = this.stringify.attName(name);
        this.value = this.stringify.attValue(value);
      }

      XMLAttribute.prototype.clone = function () {
        return Object.create(this);
      };

      XMLAttribute.prototype.toString = function (options) {
        return this.options.writer.set(options).attribute(this);
      };

      return XMLAttribute;
    }();
  }).call(undefined);

  /***/
},
/* 33 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.6

  (function () {
    var XMLStringifier,
        bind = function bind(fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    },
        hasProp = {}.hasOwnProperty;

    module.exports = XMLStringifier = function () {
      function XMLStringifier(options) {
        this.assertLegalChar = bind(this.assertLegalChar, this);
        var key, ref, value;
        options || (options = {});
        this.noDoubleEncoding = options.noDoubleEncoding;
        ref = options.stringify || {};
        for (key in ref) {
          if (!hasProp.call(ref, key)) continue;
          value = ref[key];
          this[key] = value;
        }
      }

      XMLStringifier.prototype.eleName = function (val) {
        val = '' + val || '';
        return this.assertLegalChar(val);
      };

      XMLStringifier.prototype.eleText = function (val) {
        val = '' + val || '';
        return this.assertLegalChar(this.elEscape(val));
      };

      XMLStringifier.prototype.cdata = function (val) {
        val = '' + val || '';
        val = val.replace(']]>', ']]]]><![CDATA[>');
        return this.assertLegalChar(val);
      };

      XMLStringifier.prototype.comment = function (val) {
        val = '' + val || '';
        if (val.match(/--/)) {
          throw new Error("Comment text cannot contain double-hypen: " + val);
        }
        return this.assertLegalChar(val);
      };

      XMLStringifier.prototype.raw = function (val) {
        return '' + val || '';
      };

      XMLStringifier.prototype.attName = function (val) {
        return val = '' + val || '';
      };

      XMLStringifier.prototype.attValue = function (val) {
        val = '' + val || '';
        return this.attEscape(val);
      };

      XMLStringifier.prototype.insTarget = function (val) {
        return '' + val || '';
      };

      XMLStringifier.prototype.insValue = function (val) {
        val = '' + val || '';
        if (val.match(/\?>/)) {
          throw new Error("Invalid processing instruction value: " + val);
        }
        return val;
      };

      XMLStringifier.prototype.xmlVersion = function (val) {
        val = '' + val || '';
        if (!val.match(/1\.[0-9]+/)) {
          throw new Error("Invalid version number: " + val);
        }
        return val;
      };

      XMLStringifier.prototype.xmlEncoding = function (val) {
        val = '' + val || '';
        if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-]|-)*$/)) {
          throw new Error("Invalid encoding: " + val);
        }
        return val;
      };

      XMLStringifier.prototype.xmlStandalone = function (val) {
        if (val) {
          return "yes";
        } else {
          return "no";
        }
      };

      XMLStringifier.prototype.dtdPubID = function (val) {
        return '' + val || '';
      };

      XMLStringifier.prototype.dtdSysID = function (val) {
        return '' + val || '';
      };

      XMLStringifier.prototype.dtdElementValue = function (val) {
        return '' + val || '';
      };

      XMLStringifier.prototype.dtdAttType = function (val) {
        return '' + val || '';
      };

      XMLStringifier.prototype.dtdAttDefault = function (val) {
        if (val != null) {
          return '' + val || '';
        } else {
          return val;
        }
      };

      XMLStringifier.prototype.dtdEntityValue = function (val) {
        return '' + val || '';
      };

      XMLStringifier.prototype.dtdNData = function (val) {
        return '' + val || '';
      };

      XMLStringifier.prototype.convertAttKey = '@';

      XMLStringifier.prototype.convertPIKey = '?';

      XMLStringifier.prototype.convertTextKey = '#text';

      XMLStringifier.prototype.convertCDataKey = '#cdata';

      XMLStringifier.prototype.convertCommentKey = '#comment';

      XMLStringifier.prototype.convertRawKey = '#raw';

      XMLStringifier.prototype.assertLegalChar = function (str) {
        var res;
        res = str.match(/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/);
        if (res) {
          throw new Error("Invalid character in string: " + str + " at index " + res.index);
        }
        return str;
      };

      XMLStringifier.prototype.elEscape = function (str) {
        var ampregex;
        ampregex = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
        return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\r/g, '&#xD;');
      };

      XMLStringifier.prototype.attEscape = function (str) {
        var ampregex;
        ampregex = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
        return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/\t/g, '&#x9;').replace(/\n/g, '&#xA;').replace(/\r/g, '&#xD;');
      };

      return XMLStringifier;
    }();
  }).call(undefined);

  /***/
},
/* 34 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.6

  (function () {
    var XMLWriterBase,
        hasProp = {}.hasOwnProperty;

    module.exports = XMLWriterBase = function () {
      function XMLWriterBase(options) {
        var key, ref, ref1, ref2, ref3, ref4, ref5, ref6, value;
        options || (options = {});
        this.pretty = options.pretty || false;
        this.allowEmpty = (ref = options.allowEmpty) != null ? ref : false;
        if (this.pretty) {
          this.indent = (ref1 = options.indent) != null ? ref1 : '  ';
          this.newline = (ref2 = options.newline) != null ? ref2 : '\n';
          this.offset = (ref3 = options.offset) != null ? ref3 : 0;
          this.dontprettytextnodes = (ref4 = options.dontprettytextnodes) != null ? ref4 : 0;
        } else {
          this.indent = '';
          this.newline = '';
          this.offset = 0;
          this.dontprettytextnodes = 0;
        }
        this.spacebeforeslash = (ref5 = options.spacebeforeslash) != null ? ref5 : '';
        if (this.spacebeforeslash === true) {
          this.spacebeforeslash = ' ';
        }
        this.newlinedefault = this.newline;
        this.prettydefault = this.pretty;
        ref6 = options.writer || {};
        for (key in ref6) {
          if (!hasProp.call(ref6, key)) continue;
          value = ref6[key];
          this[key] = value;
        }
      }

      XMLWriterBase.prototype.set = function (options) {
        var key, ref, value;
        options || (options = {});
        if ("pretty" in options) {
          this.pretty = options.pretty;
        }
        if ("allowEmpty" in options) {
          this.allowEmpty = options.allowEmpty;
        }
        if (this.pretty) {
          this.indent = "indent" in options ? options.indent : '  ';
          this.newline = "newline" in options ? options.newline : '\n';
          this.offset = "offset" in options ? options.offset : 0;
          this.dontprettytextnodes = "dontprettytextnodes" in options ? options.dontprettytextnodes : 0;
        } else {
          this.indent = '';
          this.newline = '';
          this.offset = 0;
          this.dontprettytextnodes = 0;
        }
        this.spacebeforeslash = "spacebeforeslash" in options ? options.spacebeforeslash : '';
        if (this.spacebeforeslash === true) {
          this.spacebeforeslash = ' ';
        }
        this.newlinedefault = this.newline;
        this.prettydefault = this.pretty;
        ref = options.writer || {};
        for (key in ref) {
          if (!hasProp.call(ref, key)) continue;
          value = ref[key];
          this[key] = value;
        }
        return this;
      };

      XMLWriterBase.prototype.space = function (level) {
        var indent;
        if (this.pretty) {
          indent = (level || 0) + this.offset + 1;
          if (indent > 0) {
            return new Array(indent).join(this.indent);
          } else {
            return '';
          }
        } else {
          return '';
        }
      };

      return XMLWriterBase;
    }();
  }).call(undefined);

  /***/
},
/* 35 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var toString = {}.toString;

  module.exports = Array.isArray || function (arr) {
    return toString.call(arr) == '[object Array]';
  };

  /***/
},
/* 36 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  /* WEBPACK VAR INJECTION */
  (function (global, process) {
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.


    /*<replacement>*/

    var processNextTick = __webpack_require__(22);
    /*</replacement>*/

    module.exports = Readable;

    /*<replacement>*/
    var isArray = __webpack_require__(35);
    /*</replacement>*/

    /*<replacement>*/
    var Duplex;
    /*</replacement>*/

    Readable.ReadableState = ReadableState;

    /*<replacement>*/
    var EE = __webpack_require__(21).EventEmitter;

    var EElistenerCount = function EElistenerCount(emitter, type) {
      return emitter.listeners(type).length;
    };
    /*</replacement>*/

    /*<replacement>*/
    var Stream = __webpack_require__(37);
    /*</replacement>*/

    // TODO(bmeurer): Change this back to const once hole checks are
    // properly optimized away early in Ignition+TurboFan.
    /*<replacement>*/
    var Buffer = __webpack_require__(25).Buffer;
    var OurUint8Array = global.Uint8Array || function () {};
    function _uint8ArrayToBuffer(chunk) {
      return Buffer.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    /*</replacement>*/

    /*<replacement>*/
    var util = __webpack_require__(8);
    util.inherits = __webpack_require__(3);
    /*</replacement>*/

    /*<replacement>*/
    var debugUtil = __webpack_require__(70);
    var debug = void 0;
    if (debugUtil && debugUtil.debuglog) {
      debug = debugUtil.debuglog('stream');
    } else {
      debug = function debug() {};
    }
    /*</replacement>*/

    var BufferList = __webpack_require__(71);
    var destroyImpl = __webpack_require__(38);
    var StringDecoder;

    util.inherits(Readable, Stream);

    var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

    function prependListener(emitter, event, fn) {
      // Sadly this is not cacheable as some libraries bundle their own
      // event emitter implementation with them.
      if (typeof emitter.prependListener === 'function') {
        return emitter.prependListener(event, fn);
      } else {
        // This is a hack to make sure that our error handler is attached before any
        // userland ones.  NEVER DO THIS. This is here only because this code needs
        // to continue to work with older versions of Node.js that do not include
        // the prependListener() method. The goal is to eventually remove this hack.
        if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
      }
    }

    function ReadableState(options, stream) {
      Duplex = Duplex || __webpack_require__(5);

      options = options || {};

      // object stream flag. Used to make read(n) ignore n and to
      // make all the buffer merging and length checks go away
      this.objectMode = !!options.objectMode;

      if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

      // the point at which it stops calling _read() to fill the buffer
      // Note: 0 is a valid value, means "don't call _read preemptively ever"
      var hwm = options.highWaterMark;
      var defaultHwm = this.objectMode ? 16 : 16 * 1024;
      this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

      // cast to ints.
      this.highWaterMark = Math.floor(this.highWaterMark);

      // A linked list is used to store data chunks instead of an array because the
      // linked list can remove elements from the beginning faster than
      // array.shift()
      this.buffer = new BufferList();
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;

      // a flag to be able to tell if the event 'readable'/'data' is emitted
      // immediately, or on a later tick.  We set this to true at first, because
      // any actions that shouldn't happen until "later" should generally also
      // not happen before the first read call.
      this.sync = true;

      // whenever we return null, then we set a flag to say
      // that we're awaiting a 'readable' event emission.
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;

      // has it been destroyed
      this.destroyed = false;

      // Crypto is kind of old and crusty.  Historically, its default string
      // encoding is 'binary' so we have to make this configurable.
      // Everything else in the universe uses 'utf8', though.
      this.defaultEncoding = options.defaultEncoding || 'utf8';

      // the number of writers that are awaiting a drain event in .pipe()s
      this.awaitDrain = 0;

      // if true, a maybeReadMore has been scheduled
      this.readingMore = false;

      this.decoder = null;
      this.encoding = null;
      if (options.encoding) {
        if (!StringDecoder) StringDecoder = __webpack_require__(27).StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
      }
    }

    function Readable(options) {
      Duplex = Duplex || __webpack_require__(5);

      if (!(this instanceof Readable)) return new Readable(options);

      this._readableState = new ReadableState(options, this);

      // legacy
      this.readable = true;

      if (options) {
        if (typeof options.read === 'function') this._read = options.read;

        if (typeof options.destroy === 'function') this._destroy = options.destroy;
      }

      Stream.call(this);
    }

    Object.defineProperty(Readable.prototype, 'destroyed', {
      get: function get() {
        if (this._readableState === undefined) {
          return false;
        }
        return this._readableState.destroyed;
      },
      set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._readableState) {
          return;
        }

        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
      }
    });

    Readable.prototype.destroy = destroyImpl.destroy;
    Readable.prototype._undestroy = destroyImpl.undestroy;
    Readable.prototype._destroy = function (err, cb) {
      this.push(null);
      cb(err);
    };

    // Manually shove something into the read() buffer.
    // This returns true if the highWaterMark has not been hit yet,
    // similar to how Writable.write() returns true if you should
    // write() some more.
    Readable.prototype.push = function (chunk, encoding) {
      var state = this._readableState;
      var skipChunkCheck;

      if (!state.objectMode) {
        if (typeof chunk === 'string') {
          encoding = encoding || state.defaultEncoding;
          if (encoding !== state.encoding) {
            chunk = Buffer.from(chunk, encoding);
            encoding = '';
          }
          skipChunkCheck = true;
        }
      } else {
        skipChunkCheck = true;
      }

      return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
    };

    // Unshift should *always* be something directly out of read()
    Readable.prototype.unshift = function (chunk) {
      return readableAddChunk(this, chunk, null, true, false);
    };

    function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
      var state = stream._readableState;
      if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
      } else {
        var er;
        if (!skipChunkCheck) er = chunkInvalid(state, chunk);
        if (er) {
          stream.emit('error', er);
        } else if (state.objectMode || chunk && chunk.length > 0) {
          if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
            chunk = _uint8ArrayToBuffer(chunk);
          }

          if (addToFront) {
            if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
          } else if (state.ended) {
            stream.emit('error', new Error('stream.push() after EOF'));
          } else {
            state.reading = false;
            if (state.decoder && !encoding) {
              chunk = state.decoder.write(chunk);
              if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
            } else {
              addChunk(stream, state, chunk, false);
            }
          }
        } else if (!addToFront) {
          state.reading = false;
        }
      }

      return needMoreData(state);
    }

    function addChunk(stream, state, chunk, addToFront) {
      if (state.flowing && state.length === 0 && !state.sync) {
        stream.emit('data', chunk);
        stream.read(0);
      } else {
        // update the buffer info.
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

        if (state.needReadable) emitReadable(stream);
      }
      maybeReadMore(stream, state);
    }

    function chunkInvalid(state, chunk) {
      var er;
      if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
        er = new TypeError('Invalid non-string/buffer chunk');
      }
      return er;
    }

    // if it's past the high water mark, we can push in some more.
    // Also, if we have no data yet, we can stand some
    // more bytes.  This is to work around cases where hwm=0,
    // such as the repl.  Also, if the push() triggered a
    // readable event, and the user called read(largeNumber) such that
    // needReadable was set, then we ought to push more, so that another
    // 'readable' event will be triggered.
    function needMoreData(state) {
      return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
    }

    Readable.prototype.isPaused = function () {
      return this._readableState.flowing === false;
    };

    // backwards compatibility.
    Readable.prototype.setEncoding = function (enc) {
      if (!StringDecoder) StringDecoder = __webpack_require__(27).StringDecoder;
      this._readableState.decoder = new StringDecoder(enc);
      this._readableState.encoding = enc;
      return this;
    };

    // Don't raise the hwm > 8MB
    var MAX_HWM = 0x800000;
    function computeNewHighWaterMark(n) {
      if (n >= MAX_HWM) {
        n = MAX_HWM;
      } else {
        // Get the next highest power of 2 to prevent increasing hwm excessively in
        // tiny amounts
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
      }
      return n;
    }

    // This function is designed to be inlinable, so please take care when making
    // changes to the function body.
    function howMuchToRead(n, state) {
      if (n <= 0 || state.length === 0 && state.ended) return 0;
      if (state.objectMode) return 1;
      if (n !== n) {
        // Only flow one buffer at a time
        if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
      }
      // If we're asking for more than the current hwm, then raise the hwm.
      if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
      if (n <= state.length) return n;
      // Don't have enough
      if (!state.ended) {
        state.needReadable = true;
        return 0;
      }
      return state.length;
    }

    // you can override either this method, or the async _read(n) below.
    Readable.prototype.read = function (n) {
      debug('read', n);
      n = parseInt(n, 10);
      var state = this._readableState;
      var nOrig = n;

      if (n !== 0) state.emittedReadable = false;

      // if we're doing read(0) to trigger a readable event, but we
      // already have a bunch of data in the buffer, then just trigger
      // the 'readable' event and move on.
      if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
        debug('read: emitReadable', state.length, state.ended);
        if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
        return null;
      }

      n = howMuchToRead(n, state);

      // if we've ended, and we're now clear, then finish it up.
      if (n === 0 && state.ended) {
        if (state.length === 0) endReadable(this);
        return null;
      }

      // All the actual chunk generation logic needs to be
      // *below* the call to _read.  The reason is that in certain
      // synthetic stream cases, such as passthrough streams, _read
      // may be a completely synchronous operation which may change
      // the state of the read buffer, providing enough data when
      // before there was *not* enough.
      //
      // So, the steps are:
      // 1. Figure out what the state of things will be after we do
      // a read from the buffer.
      //
      // 2. If that resulting state will trigger a _read, then call _read.
      // Note that this may be asynchronous, or synchronous.  Yes, it is
      // deeply ugly to write APIs this way, but that still doesn't mean
      // that the Readable class should behave improperly, as streams are
      // designed to be sync/async agnostic.
      // Take note if the _read call is sync or async (ie, if the read call
      // has returned yet), so that we know whether or not it's safe to emit
      // 'readable' etc.
      //
      // 3. Actually pull the requested chunks out of the buffer and return.

      // if we need a readable event, then we need to do some reading.
      var doRead = state.needReadable;
      debug('need readable', doRead);

      // if we currently have less than the highWaterMark, then also read some
      if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug('length less than watermark', doRead);
      }

      // however, if we've ended, then there's no point, and if we're already
      // reading, then it's unnecessary.
      if (state.ended || state.reading) {
        doRead = false;
        debug('reading or ended', doRead);
      } else if (doRead) {
        debug('do read');
        state.reading = true;
        state.sync = true;
        // if the length is currently zero, then we *need* a readable event.
        if (state.length === 0) state.needReadable = true;
        // call internal read method
        this._read(state.highWaterMark);
        state.sync = false;
        // If _read pushed data synchronously, then `reading` will be false,
        // and we need to re-evaluate how much data we can return to the user.
        if (!state.reading) n = howMuchToRead(nOrig, state);
      }

      var ret;
      if (n > 0) ret = fromList(n, state);else ret = null;

      if (ret === null) {
        state.needReadable = true;
        n = 0;
      } else {
        state.length -= n;
      }

      if (state.length === 0) {
        // If we have nothing in the buffer, then we want to know
        // as soon as we *do* get something into the buffer.
        if (!state.ended) state.needReadable = true;

        // If we tried to read() past the EOF, then emit end on the next tick.
        if (nOrig !== n && state.ended) endReadable(this);
      }

      if (ret !== null) this.emit('data', ret);

      return ret;
    };

    function onEofChunk(stream, state) {
      if (state.ended) return;
      if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
          state.buffer.push(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
        }
      }
      state.ended = true;

      // emit 'readable' now to make sure it gets picked up.
      emitReadable(stream);
    }

    // Don't emit readable right away in sync mode, because this can trigger
    // another read() call => stack overflow.  This way, it might trigger
    // a nextTick recursion warning, but that's not so bad.
    function emitReadable(stream) {
      var state = stream._readableState;
      state.needReadable = false;
      if (!state.emittedReadable) {
        debug('emitReadable', state.flowing);
        state.emittedReadable = true;
        if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
      }
    }

    function emitReadable_(stream) {
      debug('emit readable');
      stream.emit('readable');
      flow(stream);
    }

    // at this point, the user has presumably seen the 'readable' event,
    // and called read() to consume some data.  that may have triggered
    // in turn another _read(n) call, in which case reading = true if
    // it's in progress.
    // However, if we're not ended, or reading, and the length < hwm,
    // then go ahead and try to read some more preemptively.
    function maybeReadMore(stream, state) {
      if (!state.readingMore) {
        state.readingMore = true;
        processNextTick(maybeReadMore_, stream, state);
      }
    }

    function maybeReadMore_(stream, state) {
      var len = state.length;
      while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
        debug('maybeReadMore read 0');
        stream.read(0);
        if (len === state.length)
          // didn't get any data, stop spinning.
          break;else len = state.length;
      }
      state.readingMore = false;
    }

    // abstract method.  to be overridden in specific implementation classes.
    // call cb(er, data) where data is <= n in length.
    // for virtual (non-string, non-buffer) streams, "length" is somewhat
    // arbitrary, and perhaps not very meaningful.
    Readable.prototype._read = function (n) {
      this.emit('error', new Error('_read() is not implemented'));
    };

    Readable.prototype.pipe = function (dest, pipeOpts) {
      var src = this;
      var state = this._readableState;

      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

      var endFn = doEnd ? onend : unpipe;
      if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);

      dest.on('unpipe', onunpipe);
      function onunpipe(readable, unpipeInfo) {
        debug('onunpipe');
        if (readable === src) {
          if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
            unpipeInfo.hasUnpiped = true;
            cleanup();
          }
        }
      }

      function onend() {
        debug('onend');
        dest.end();
      }

      // when the dest drains, it reduces the awaitDrain counter
      // on the source.  This would be more elegant with a .once()
      // handler in flow(), but adding and removing repeatedly is
      // too slow.
      var ondrain = pipeOnDrain(src);
      dest.on('drain', ondrain);

      var cleanedUp = false;
      function cleanup() {
        debug('cleanup');
        // cleanup event handlers once the pipe is broken
        dest.removeListener('close', onclose);
        dest.removeListener('finish', onfinish);
        dest.removeListener('drain', ondrain);
        dest.removeListener('error', onerror);
        dest.removeListener('unpipe', onunpipe);
        src.removeListener('end', onend);
        src.removeListener('end', unpipe);
        src.removeListener('data', ondata);

        cleanedUp = true;

        // if the reader is waiting for a drain event from this
        // specific writer, then it would cause it to never start
        // flowing again.
        // So, if this is awaiting a drain, then we just call it now.
        // If we don't know, then assume that we are waiting for one.
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
      }

      // If the user pushes more data while we're writing to dest then we'll end up
      // in ondata again. However, we only want to increase awaitDrain once because
      // dest will only emit one 'drain' event for the multiple writes.
      // => Introduce a guard on increasing awaitDrain.
      var increasedAwaitDrain = false;
      src.on('data', ondata);
      function ondata(chunk) {
        debug('ondata');
        increasedAwaitDrain = false;
        var ret = dest.write(chunk);
        if (false === ret && !increasedAwaitDrain) {
          // If the user unpiped during `dest.write()`, it is possible
          // to get stuck in a permanently paused state if that write
          // also returned false.
          // => Check whether `dest` is still a piping destination.
          if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
            debug('false write response, pause', src._readableState.awaitDrain);
            src._readableState.awaitDrain++;
            increasedAwaitDrain = true;
          }
          src.pause();
        }
      }

      // if the dest has an error, then stop piping into it.
      // however, don't suppress the throwing behavior for this.
      function onerror(er) {
        debug('onerror', er);
        unpipe();
        dest.removeListener('error', onerror);
        if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
      }

      // Make sure our error handler is attached before userland ones.
      prependListener(dest, 'error', onerror);

      // Both close and finish should trigger unpipe, but only once.
      function onclose() {
        dest.removeListener('finish', onfinish);
        unpipe();
      }
      dest.once('close', onclose);
      function onfinish() {
        debug('onfinish');
        dest.removeListener('close', onclose);
        unpipe();
      }
      dest.once('finish', onfinish);

      function unpipe() {
        debug('unpipe');
        src.unpipe(dest);
      }

      // tell the dest that it's being piped to
      dest.emit('pipe', src);

      // start the flow if it hasn't been started already.
      if (!state.flowing) {
        debug('pipe resume');
        src.resume();
      }

      return dest;
    };

    function pipeOnDrain(src) {
      return function () {
        var state = src._readableState;
        debug('pipeOnDrain', state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
          state.flowing = true;
          flow(src);
        }
      };
    }

    Readable.prototype.unpipe = function (dest) {
      var state = this._readableState;
      var unpipeInfo = { hasUnpiped: false };

      // if we're not piping anywhere, then do nothing.
      if (state.pipesCount === 0) return this;

      // just one destination.  most common case.
      if (state.pipesCount === 1) {
        // passed in one, but it's not the right one.
        if (dest && dest !== state.pipes) return this;

        if (!dest) dest = state.pipes;

        // got a match.
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit('unpipe', this, unpipeInfo);
        return this;
      }

      // slow case. multiple pipe destinations.

      if (!dest) {
        // remove all.
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;

        for (var i = 0; i < len; i++) {
          dests[i].emit('unpipe', this, unpipeInfo);
        }return this;
      }

      // try to find the right one.
      var index = indexOf(state.pipes, dest);
      if (index === -1) return this;

      state.pipes.splice(index, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1) state.pipes = state.pipes[0];

      dest.emit('unpipe', this, unpipeInfo);

      return this;
    };

    // set up data events if they are asked for
    // Ensure readable listeners eventually get something
    Readable.prototype.on = function (ev, fn) {
      var res = Stream.prototype.on.call(this, ev, fn);

      if (ev === 'data') {
        // Start flowing on next tick if stream isn't explicitly paused
        if (this._readableState.flowing !== false) this.resume();
      } else if (ev === 'readable') {
        var state = this._readableState;
        if (!state.endEmitted && !state.readableListening) {
          state.readableListening = state.needReadable = true;
          state.emittedReadable = false;
          if (!state.reading) {
            processNextTick(nReadingNextTick, this);
          } else if (state.length) {
            emitReadable(this);
          }
        }
      }

      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;

    function nReadingNextTick(self) {
      debug('readable nexttick read 0');
      self.read(0);
    }

    // pause() and resume() are remnants of the legacy readable stream API
    // If the user uses them, then switch into old mode.
    Readable.prototype.resume = function () {
      var state = this._readableState;
      if (!state.flowing) {
        debug('resume');
        state.flowing = true;
        resume(this, state);
      }
      return this;
    };

    function resume(stream, state) {
      if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        processNextTick(resume_, stream, state);
      }
    }

    function resume_(stream, state) {
      if (!state.reading) {
        debug('resume read 0');
        stream.read(0);
      }

      state.resumeScheduled = false;
      state.awaitDrain = 0;
      stream.emit('resume');
      flow(stream);
      if (state.flowing && !state.reading) stream.read(0);
    }

    Readable.prototype.pause = function () {
      debug('call pause flowing=%j', this._readableState.flowing);
      if (false !== this._readableState.flowing) {
        debug('pause');
        this._readableState.flowing = false;
        this.emit('pause');
      }
      return this;
    };

    function flow(stream) {
      var state = stream._readableState;
      debug('flow', state.flowing);
      while (state.flowing && stream.read() !== null) {}
    }

    // wrap an old-style stream as the async data source.
    // This is *not* part of the readable stream interface.
    // It is an ugly unfortunate mess of history.
    Readable.prototype.wrap = function (stream) {
      var state = this._readableState;
      var paused = false;

      var self = this;
      stream.on('end', function () {
        debug('wrapped end');
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length) self.push(chunk);
        }

        self.push(null);
      });

      stream.on('data', function (chunk) {
        debug('wrapped data');
        if (state.decoder) chunk = state.decoder.write(chunk);

        // don't skip over falsy values in objectMode
        if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

        var ret = self.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });

      // proxy all the other methods.
      // important when wrapping filters and duplexes.
      for (var i in stream) {
        if (this[i] === undefined && typeof stream[i] === 'function') {
          this[i] = function (method) {
            return function () {
              return stream[method].apply(stream, arguments);
            };
          }(i);
        }
      }

      // proxy certain important events.
      for (var n = 0; n < kProxyEvents.length; n++) {
        stream.on(kProxyEvents[n], self.emit.bind(self, kProxyEvents[n]));
      }

      // when we try to consume some more bytes, simply unpause the
      // underlying stream.
      self._read = function (n) {
        debug('wrapped _read', n);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };

      return self;
    };

    // exposed for testing purposes only.
    Readable._fromList = fromList;

    // Pluck off n bytes from an array of buffers.
    // Length is the combined lengths of all the buffers in the list.
    // This function is designed to be inlinable, so please take care when making
    // changes to the function body.
    function fromList(n, state) {
      // nothing buffered
      if (state.length === 0) return null;

      var ret;
      if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
        // read it all, truncate the list
        if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
        state.buffer.clear();
      } else {
        // read part of list
        ret = fromListPartial(n, state.buffer, state.decoder);
      }

      return ret;
    }

    // Extracts only enough buffered data to satisfy the amount requested.
    // This function is designed to be inlinable, so please take care when making
    // changes to the function body.
    function fromListPartial(n, list, hasStrings) {
      var ret;
      if (n < list.head.data.length) {
        // slice is the same for buffers and strings
        ret = list.head.data.slice(0, n);
        list.head.data = list.head.data.slice(n);
      } else if (n === list.head.data.length) {
        // first chunk is a perfect match
        ret = list.shift();
      } else {
        // result spans more than one buffer
        ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
      }
      return ret;
    }

    // Copies a specified amount of characters from the list of buffered data
    // chunks.
    // This function is designed to be inlinable, so please take care when making
    // changes to the function body.
    function copyFromBufferString(n, list) {
      var p = list.head;
      var c = 1;
      var ret = p.data;
      n -= ret.length;
      while (p = p.next) {
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length) ret += str;else ret += str.slice(0, n);
        n -= nb;
        if (n === 0) {
          if (nb === str.length) {
            ++c;
            if (p.next) list.head = p.next;else list.head = list.tail = null;
          } else {
            list.head = p;
            p.data = str.slice(nb);
          }
          break;
        }
        ++c;
      }
      list.length -= c;
      return ret;
    }

    // Copies a specified amount of bytes from the list of buffered data chunks.
    // This function is designed to be inlinable, so please take care when making
    // changes to the function body.
    function copyFromBuffer(n, list) {
      var ret = Buffer.allocUnsafe(n);
      var p = list.head;
      var c = 1;
      p.data.copy(ret);
      n -= p.data.length;
      while (p = p.next) {
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;
        if (n === 0) {
          if (nb === buf.length) {
            ++c;
            if (p.next) list.head = p.next;else list.head = list.tail = null;
          } else {
            list.head = p;
            p.data = buf.slice(nb);
          }
          break;
        }
        ++c;
      }
      list.length -= c;
      return ret;
    }

    function endReadable(stream) {
      var state = stream._readableState;

      // If we get here before consuming all the bytes, then that is a
      // bug in node.  Should never happen.
      if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

      if (!state.endEmitted) {
        state.ended = true;
        processNextTick(endReadableNT, state, stream);
      }
    }

    function endReadableNT(state, stream) {
      // Check that we didn't get one last unshift.
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
      }
    }

    function forEach(xs, f) {
      for (var i = 0, l = xs.length; i < l; i++) {
        f(xs[i], i);
      }
    }

    function indexOf(xs, x) {
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) return i;
      }
      return -1;
    }
    /* WEBPACK VAR INJECTION */
  }).call(exports, __webpack_require__(1), __webpack_require__(6));

  /***/
},
/* 37 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  module.exports = __webpack_require__(21).EventEmitter;

  /***/
},
/* 38 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  /*<replacement>*/

  var processNextTick = __webpack_require__(22);
  /*</replacement>*/

  // undocumented cb() API, needed for core, not for public API
  function destroy(err, cb) {
    var _this = this;

    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;

    if (readableDestroyed || writableDestroyed) {
      if (cb) {
        cb(err);
      } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
        processNextTick(emitErrorNT, this, err);
      }
      return;
    }

    // we set destroyed to true before firing error callbacks in order
    // to make it re-entrance safe in case destroy() is called within callbacks

    if (this._readableState) {
      this._readableState.destroyed = true;
    }

    // if this is a duplex stream mark the writable part as destroyed as well
    if (this._writableState) {
      this._writableState.destroyed = true;
    }

    this._destroy(err || null, function (err) {
      if (!cb && err) {
        processNextTick(emitErrorNT, _this, err);
        if (_this._writableState) {
          _this._writableState.errorEmitted = true;
        }
      } else if (cb) {
        cb(err);
      }
    });
  }

  function undestroy() {
    if (this._readableState) {
      this._readableState.destroyed = false;
      this._readableState.reading = false;
      this._readableState.ended = false;
      this._readableState.endEmitted = false;
    }

    if (this._writableState) {
      this._writableState.destroyed = false;
      this._writableState.ended = false;
      this._writableState.ending = false;
      this._writableState.finished = false;
      this._writableState.errorEmitted = false;
    }
  }

  function emitErrorNT(self, err) {
    self.emit('error', err);
  }

  module.exports = {
    destroy: destroy,
    undestroy: undestroy
  };

  /***/
},
/* 39 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var apply = Function.prototype.apply;

  // DOM APIs, for completeness

  exports.setTimeout = function () {
    return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
  };
  exports.setInterval = function () {
    return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
  };
  exports.clearTimeout = exports.clearInterval = function (timeout) {
    if (timeout) {
      timeout.close();
    }
  };

  function Timeout(id, clearFn) {
    this._id = id;
    this._clearFn = clearFn;
  }
  Timeout.prototype.unref = Timeout.prototype.ref = function () {};
  Timeout.prototype.close = function () {
    this._clearFn.call(window, this._id);
  };

  // Does not start the time, just sets up the members needed.
  exports.enroll = function (item, msecs) {
    clearTimeout(item._idleTimeoutId);
    item._idleTimeout = msecs;
  };

  exports.unenroll = function (item) {
    clearTimeout(item._idleTimeoutId);
    item._idleTimeout = -1;
  };

  exports._unrefActive = exports.active = function (item) {
    clearTimeout(item._idleTimeoutId);

    var msecs = item._idleTimeout;
    if (msecs >= 0) {
      item._idleTimeoutId = setTimeout(function onTimeout() {
        if (item._onTimeout) item._onTimeout();
      }, msecs);
    }
  };

  // setimmediate attaches itself to the global object
  __webpack_require__(72);
  exports.setImmediate = setImmediate;
  exports.clearImmediate = clearImmediate;

  /***/
},
/* 40 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  // a transform stream is a readable/writable stream where you do
  // something with the data.  Sometimes it's called a "filter",
  // but that's not a great name for it, since that implies a thing where
  // some bits pass through, and others are simply ignored.  (That would
  // be a valid example of a transform, of course.)
  //
  // While the output is causally related to the input, it's not a
  // necessarily symmetric or synchronous transformation.  For example,
  // a zlib stream might take multiple plain-text writes(), and then
  // emit a single compressed chunk some time in the future.
  //
  // Here's how this works:
  //
  // The Transform stream has all the aspects of the readable and writable
  // stream classes.  When you write(chunk), that calls _write(chunk,cb)
  // internally, and returns false if there's a lot of pending writes
  // buffered up.  When you call read(), that calls _read(n) until
  // there's enough pending readable data buffered up.
  //
  // In a transform stream, the written data is placed in a buffer.  When
  // _read(n) is called, it transforms the queued up data, calling the
  // buffered _write cb's as it consumes chunks.  If consuming a single
  // written chunk would result in multiple output chunks, then the first
  // outputted bit calls the readcb, and subsequent chunks just go into
  // the read buffer, and will cause it to emit 'readable' if necessary.
  //
  // This way, back-pressure is actually determined by the reading side,
  // since _read has to be called to start processing a new chunk.  However,
  // a pathological inflate type of transform can cause excessive buffering
  // here.  For example, imagine a stream where every byte of input is
  // interpreted as an integer from 0-255, and then results in that many
  // bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
  // 1kb of data being output.  In this case, you could write a very small
  // amount of input, and end up with a very large amount of output.  In
  // such a pathological inflating mechanism, there'd be no way to tell
  // the system to stop doing the transform.  A single 4MB write could
  // cause the system to run out of memory.
  //
  // However, even in such a pathological case, only a single written chunk
  // would be consumed, and then the rest would wait (un-transformed) until
  // the results of the previous transformed chunk were consumed.


  module.exports = Transform;

  var Duplex = __webpack_require__(5);

  /*<replacement>*/
  var util = __webpack_require__(8);
  util.inherits = __webpack_require__(3);
  /*</replacement>*/

  util.inherits(Transform, Duplex);

  function TransformState(stream) {
    this.afterTransform = function (er, data) {
      return afterTransform(stream, er, data);
    };

    this.needTransform = false;
    this.transforming = false;
    this.writecb = null;
    this.writechunk = null;
    this.writeencoding = null;
  }

  function afterTransform(stream, er, data) {
    var ts = stream._transformState;
    ts.transforming = false;

    var cb = ts.writecb;

    if (!cb) {
      return stream.emit('error', new Error('write callback called multiple times'));
    }

    ts.writechunk = null;
    ts.writecb = null;

    if (data !== null && data !== undefined) stream.push(data);

    cb(er);

    var rs = stream._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) {
      stream._read(rs.highWaterMark);
    }
  }

  function Transform(options) {
    if (!(this instanceof Transform)) return new Transform(options);

    Duplex.call(this, options);

    this._transformState = new TransformState(this);

    var stream = this;

    // start out asking for a readable event once data is transformed.
    this._readableState.needReadable = true;

    // we have implemented the _read method, and done the other things
    // that Readable wants before the first _read call, so unset the
    // sync guard flag.
    this._readableState.sync = false;

    if (options) {
      if (typeof options.transform === 'function') this._transform = options.transform;

      if (typeof options.flush === 'function') this._flush = options.flush;
    }

    // When the writable side finishes, then flush out anything remaining.
    this.once('prefinish', function () {
      if (typeof this._flush === 'function') this._flush(function (er, data) {
        done(stream, er, data);
      });else done(stream);
    });
  }

  Transform.prototype.push = function (chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
  };

  // This is the part where you do stuff!
  // override this function in implementation classes.
  // 'chunk' is an input chunk.
  //
  // Call `push(newChunk)` to pass along transformed output
  // to the readable side.  You may call 'push' zero or more times.
  //
  // Call `cb(err)` when you are done with this chunk.  If you pass
  // an error, then that'll put the hurt on the whole operation.  If you
  // never call cb(), then you'll never get another chunk.
  Transform.prototype._transform = function (chunk, encoding, cb) {
    throw new Error('_transform() is not implemented');
  };

  Transform.prototype._write = function (chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
      var rs = this._readableState;
      if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
    }
  };

  // Doesn't matter what the args are here.
  // _transform does all the work.
  // That we got here means that the readable side wants more data.
  Transform.prototype._read = function (n) {
    var ts = this._transformState;

    if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
      ts.transforming = true;
      this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else {
      // mark that we need a transform, so that any data that comes in
      // will get processed, now that we've asked for it.
      ts.needTransform = true;
    }
  };

  Transform.prototype._destroy = function (err, cb) {
    var _this = this;

    Duplex.prototype._destroy.call(this, err, function (err2) {
      cb(err2);
      _this.emit('close');
    });
  };

  function done(stream, er, data) {
    if (er) return stream.emit('error', er);

    if (data !== null && data !== undefined) stream.push(data);

    // if there's nothing in the write buffer, then that means
    // that nothing more will ever be provided
    var ws = stream._writableState;
    var ts = stream._transformState;

    if (ws.length) throw new Error('Calling transform done when ws.length != 0');

    if (ts.transforming) throw new Error('Calling transform done when still transforming');

    return stream.push(null);
  }

  /***/
},
/* 41 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.7

  (function () {
    "use strict";

    var prefixMatch;

    prefixMatch = new RegExp(/(?!xmlns)^.*:/);

    exports.normalize = function (str) {
      return str.toLowerCase();
    };

    exports.firstCharLowerCase = function (str) {
      return str.charAt(0).toLowerCase() + str.slice(1);
    };

    exports.stripPrefix = function (str) {
      return str.replace(prefixMatch, '');
    };

    exports.parseNumbers = function (str) {
      if (!isNaN(str)) {
        str = str % 1 === 0 ? parseInt(str, 10) : parseFloat(str);
      }
      return str;
    };

    exports.parseBooleans = function (str) {
      if (/^(?:true|false)$/i.test(str)) {
        str = str.toLowerCase() === 'true';
      }
      return str;
    };
  }).call(undefined);

  /***/
},
/* 42 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  /* WEBPACK VAR INJECTION */
  (function (global) {

    var ClientRequest = __webpack_require__(80);
    var extend = __webpack_require__(83);
    var statusCodes = __webpack_require__(84);
    var url = __webpack_require__(30);

    var http = exports;

    http.request = function (opts, cb) {
      if (typeof opts === 'string') opts = url.parse(opts);else opts = extend(opts);

      // Normally, the page is loaded from http or https, so not specifying a protocol
      // will result in a (valid) protocol-relative url. However, this won't work if
      // the protocol is something else, like 'file:'
      var defaultProtocol = global.location.protocol.search(/^https?:$/) === -1 ? 'http:' : '';

      var protocol = opts.protocol || defaultProtocol;
      var host = opts.hostname || opts.host;
      var port = opts.port;
      var path = opts.path || '/';

      // Necessary for IPv6 addresses
      if (host && host.indexOf(':') !== -1) host = '[' + host + ']';

      // This may be a relative url. The browser should always be able to interpret it correctly.
      opts.url = (host ? protocol + '//' + host : '') + (port ? ':' + port : '') + path;
      opts.method = (opts.method || 'GET').toUpperCase();
      opts.headers = opts.headers || {};

      // Also valid opts.auth, opts.mode

      var req = new ClientRequest(opts);
      if (cb) req.on('response', cb);
      return req;
    };

    http.get = function get(opts, cb) {
      var req = http.request(opts, cb);
      req.end();
      return req;
    };

    http.Agent = function () {};
    http.Agent.defaultMaxSockets = 4;

    http.STATUS_CODES = statusCodes;

    http.METHODS = ['CHECKOUT', 'CONNECT', 'COPY', 'DELETE', 'GET', 'HEAD', 'LOCK', 'M-SEARCH', 'MERGE', 'MKACTIVITY', 'MKCOL', 'MOVE', 'NOTIFY', 'OPTIONS', 'PATCH', 'POST', 'PROPFIND', 'PROPPATCH', 'PURGE', 'PUT', 'REPORT', 'SEARCH', 'SUBSCRIBE', 'TRACE', 'UNLOCK', 'UNSUBSCRIBE'];
    /* WEBPACK VAR INJECTION */
  }).call(exports, __webpack_require__(1));

  /***/
},
/* 43 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  /* WEBPACK VAR INJECTION */
  (function (global) {

    exports.fetch = isFunction(global.fetch) && isFunction(global.ReadableStream);

    exports.blobConstructor = false;
    try {
      new Blob([new ArrayBuffer(1)]);
      exports.blobConstructor = true;
    } catch (e) {}

    // The xhr request to example.com may violate some restrictive CSP configurations,
    // so if we're running in a browser that supports `fetch`, avoid calling getXHR()
    // and assume support for certain features below.
    var xhr;
    function getXHR() {
      // Cache the xhr value
      if (xhr !== undefined) return xhr;

      if (global.XMLHttpRequest) {
        xhr = new global.XMLHttpRequest();
        // If XDomainRequest is available (ie only, where xhr might not work
        // cross domain), use the page location. Otherwise use example.com
        // Note: this doesn't actually make an http request.
        try {
          xhr.open('GET', global.XDomainRequest ? '/' : 'https://example.com');
        } catch (e) {
          xhr = null;
        }
      } else {
        // Service workers don't have XHR
        xhr = null;
      }
      return xhr;
    }

    function checkTypeSupport(type) {
      var xhr = getXHR();
      if (!xhr) return false;
      try {
        xhr.responseType = type;
        return xhr.responseType === type;
      } catch (e) {}
      return false;
    }

    // For some strange reason, Safari 7.0 reports typeof global.ArrayBuffer === 'object'.
    // Safari 7.1 appears to have fixed this bug.
    var haveArrayBuffer = typeof global.ArrayBuffer !== 'undefined';
    var haveSlice = haveArrayBuffer && isFunction(global.ArrayBuffer.prototype.slice);

    // If fetch is supported, then arraybuffer will be supported too. Skip calling
    // checkTypeSupport(), since that calls getXHR().
    exports.arraybuffer = exports.fetch || haveArrayBuffer && checkTypeSupport('arraybuffer');

    // These next two tests unavoidably show warnings in Chrome. Since fetch will always
    // be used if it's available, just return false for these to avoid the warnings.
    exports.msstream = !exports.fetch && haveSlice && checkTypeSupport('ms-stream');
    exports.mozchunkedarraybuffer = !exports.fetch && haveArrayBuffer && checkTypeSupport('moz-chunked-arraybuffer');

    // If fetch is supported, then overrideMimeType will be supported too. Skip calling
    // getXHR().
    exports.overrideMimeType = exports.fetch || (getXHR() ? isFunction(getXHR().overrideMimeType) : false);

    exports.vbArray = isFunction(global.VBArray);

    function isFunction(value) {
      return typeof value === 'function';
    }

    xhr = null; // Help gc
    /* WEBPACK VAR INJECTION */
  }).call(exports, __webpack_require__(1));

  /***/
},
/* 44 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  window.RSSParser = __webpack_require__(45);

  /***/
},
/* 45 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  };

  var Entities = __webpack_require__(46);
  var FS = __webpack_require__(52);
  var url = __webpack_require__(30);
  var XML2JS = __webpack_require__(59);

  var HTTP = __webpack_require__(42);
  var HTTPS = __webpack_require__(85);

  var Parser = module.exports = {};

  var FEED_FIELDS = [['author', 'creator'], ['dc:publisher', 'publisher'], ['dc:creator', 'creator'], ['dc:source', 'source'], ['dc:title', 'title'], ['dc:type', 'type'], 'title', 'description', 'author', 'pubDate', 'webMaster', 'managingEditor', 'generator', 'link'];

  var ITEM_FIELDS = [['author', 'creator'], ['dc:creator', 'creator'], ['dc:date', 'date'], ['dc:language', 'language'], ['dc:rights', 'rights'], ['dc:source', 'source'], ['dc:title', 'title'], 'title', 'link', 'pubDate', 'author', 'content:encoded', 'enclosure', 'dc:creator', 'dc:date'];

  var mapItunesField = function mapItunesField(f) {
    return ['itunes:' + f, f];
  };

  var PODCAST_FEED_FIELDS = ['author', 'subtitle', 'summary', 'explicit'].map(mapItunesField);

  var PODCAST_ITEM_FIELDS = ['author', 'subtitle', 'summary', 'explicit', 'duration', 'image'].map(mapItunesField);

  var stripHtml = function stripHtml(str) {
    return str.replace(/<(?:.|\n)*?>/gm, '');
  };

  var getSnippet = function getSnippet(str) {
    return Entities.decode(stripHtml(str)).trim();
  };

  var getLink = function getLink(links, rel, fallbackIdx) {
    if (!links) return;
    for (var i = 0; i < links.length; ++i) {
      if (links[i].$.rel === rel) return links[i].$.href;
    }
    if (links[fallbackIdx]) return links[fallbackIdx].$.href;
  };

  var getContent = function getContent(content) {
    if (typeof content._ === 'string') {
      return content._;
    } else if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object') {
      var builder = new XML2JS.Builder({ headless: true, explicitRoot: true, rootName: 'div', renderOpts: { pretty: false } });
      return builder.buildObject(content);
    } else {
      return content;
    }
  };

  var parseAtomFeed = function parseAtomFeed(xmlObj, options, callback) {
    var feed = xmlObj.feed;
    var json = { feed: { entries: [] } };
    if (options && options.customFields && options.customFields.feed) {
      copyFromXML(feed, json.feed, options.customFields.feed);
    }
    if (feed.link) {
      json.feed.link = getLink(feed.link, 'alternate', 0);
      json.feed.feedUrl = getLink(feed.link, 'self', 1);
    }
    if (feed.title) {
      var title = feed.title[0] || '';
      if (title._) title = title._;
      if (title) json.feed.title = title;
    }
    var entries = feed.entry;
    (entries || []).forEach(function (entry) {
      var item = {};
      if (options && options.customFields && options.customFields.item) {
        copyFromXML(entry, item, options.customFields.item);
      }
      if (entry.title) {
        var title = entry.title[0] || '';
        if (title._) title = title._;
        if (title) item.title = title;
      }
      if (entry.link && entry.link.length) {
        item.link = getLink(entry.link, 'alternate', 0);
      }
      if (entry.updated && entry.updated.length) item.pubDate = new Date(entry.updated[0]).toISOString();
      if (entry.author && entry.author.length) item.author = entry.author[0].name[0];
      if (entry.content && entry.content.length) {
        item.content = getContent(entry.content[0]);
        item.contentSnippet = getSnippet(item.content);
      }
      if (entry.id) {
        item.id = entry.id[0];
      }
      json.feed.entries.push(item);
    });
    callback(null, json);
  };

  var parseRSS1 = function parseRSS1(xmlObj, options, callback) {
    xmlObj = xmlObj['rdf:RDF'];
    var channel = xmlObj.channel[0];
    var items = xmlObj.item;
    return parseRSS(channel, items, options, callback);
  };

  var parseRSS2 = function parseRSS2(xmlObj, options, callback) {
    var channel = xmlObj.rss.channel[0];
    var items = channel.item;
    return parseRSS(channel, items, options, function (err, data) {
      if (err) return callback(err);
      if (xmlObj.rss.$['xmlns:itunes']) {
        decorateItunes(data, channel);
      }
      callback(null, data);
    });
  };

  var parseRSS = function parseRSS(channel, items, options, callback) {
    items = items || [];
    options.customFields = options.customFields || {};
    var itemFields = ITEM_FIELDS.concat(options.customFields.item || []);
    var feedFields = FEED_FIELDS.concat(options.customFields.feed || []);

    var json = { feed: { entries: [] } };

    if (channel['atom:link']) json.feed.feedUrl = channel['atom:link'][0].$.href;
    copyFromXML(channel, json.feed, feedFields);
    items.forEach(function (item) {
      var entry = {};
      copyFromXML(item, entry, itemFields);
      if (item.enclosure) {
        entry.enclosure = item.enclosure[0].$;
      }
      if (item.description) {
        entry.content = getContent(item.description[0]);
        entry.contentSnippet = getSnippet(entry.content);
      }
      if (item.guid) {
        entry.guid = item.guid[0];
        if (entry.guid._) entry.guid = entry.guid._;
      }
      if (item.category) entry.categories = item.category;
      var date = entry.pubDate || entry.date;
      if (date) {
        try {
          entry.isoDate = new Date(date.trim()).toISOString();
        } catch (e) {
          // Ignore bad date format
        }
      }
      json.feed.entries.push(entry);
    });
    callback(null, json);
  };

  var copyFromXML = function copyFromXML(xml, dest, fields) {
    fields.forEach(function (f) {
      var from = f;
      var to = f;
      if (Array.isArray(f)) {
        from = f[0];
        to = f[1];
      }
      if (xml[from] !== undefined) dest[to] = xml[from][0];
    });
  };

  /**
   * Add iTunes specific fields from XML to extracted JSON
   *
   * @access public
   * @param {object} json extracted
   * @param {object} channel parsed XML
   */
  var decorateItunes = function decorateItunes(json, channel) {
    var items = channel.item || [],
        entry = {};
    json.feed.itunes = {};

    if (channel['itunes:owner']) {
      var owner = {},
          image;

      if (channel['itunes:owner'][0]['itunes:name']) {
        owner.name = channel['itunes:owner'][0]['itunes:name'][0];
      }
      if (channel['itunes:owner'][0]['itunes:email']) {
        owner.email = channel['itunes:owner'][0]['itunes:email'][0];
      }
      if (channel['itunes:image']) {
        var hasImageHref = channel['itunes:image'][0] && channel['itunes:image'][0].$ && channel['itunes:image'][0].$.href;
        image = hasImageHref ? channel['itunes:image'][0].$.href : null;
      }

      if (image) {
        json.feed.itunes.image = image;
      }
      json.feed.itunes.owner = owner;
    }

    copyFromXML(channel, json.feed.itunes, PODCAST_FEED_FIELDS);
    items.forEach(function (item, index) {
      var entry = json.feed.entries[index];
      entry.itunes = {};
      copyFromXML(item, entry.itunes, PODCAST_ITEM_FIELDS);
      var image = item['itunes:image'];
      if (image && image[0] && image[0].$ && image[0].$.href) {
        entry.itunes.image = image[0].$.href;
      }
    });
  };

  Parser.parseString = function (xml, options, callback) {
    if (!callback) {
      callback = options;
      options = {};
    }
    XML2JS.parseString(xml, function (err, result) {
      if (err) return callback(err);
      if (!result) {
        return callback(new Error('Unable to parse XML.'));
      }
      if (result.feed) {
        return parseAtomFeed(result, options, callback);
      } else if (result.rss && result.rss.$.version && result.rss.$.version.indexOf('2') === 0) {
        return parseRSS2(result, options, callback);
      } else if (result['rdf:RDF']) {
        return parseRSS1(result, options, callback);
      } else {
        return callback(new Error("Feed not recognized as RSS 1 or 2."));
      }
    });
  };

  Parser.parseURL = function (feedUrl, options, callback) {
    if (!callback) {
      callback = options;
      options = {};
    }
    options.__redirectCount = options.__redirectCount || 0;
    if (options.maxRedirects === undefined) options.maxRedirects = 1;

    var xml = '';
    var get = feedUrl.indexOf('https') === 0 ? HTTPS.get : HTTP.get;
    var parsedUrl = url.parse(feedUrl);
    var req = get({
      auth: parsedUrl.auth,
      protocol: parsedUrl.protocol,
      hostname: parsedUrl.hostname,
      port: parsedUrl.port,
      path: parsedUrl.path,
      headers: { 'User-Agent': 'rss-parser' }
    }, function (res) {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers['location']) {
        if (options.maxRedirects === 0) return callback(new Error("Status code " + res.statusCode));
        if (options.__redirectCount === options.maxRedirects) return callback(new Error("Too many redirects"));
        options.__redirectCount++;
        return Parser.parseURL(res.headers['location'], options, callback);
      }
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        xml += chunk;
      });
      res.on('end', function () {
        return Parser.parseString(xml, options, callback);
      });
    });
    req.on('error', callback);
  };

  Parser.parseFile = function (file, options, callback) {
    FS.readFile(file, 'utf8', function (err, contents) {
      return Parser.parseString(contents, options, callback);
    });
  };

  /***/
},
/* 46 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var encode = __webpack_require__(47),
      decode = __webpack_require__(48);

  exports.decode = function (data, level) {
    return (!level || level <= 0 ? decode.XML : decode.HTML)(data);
  };

  exports.decodeStrict = function (data, level) {
    return (!level || level <= 0 ? decode.XML : decode.HTMLStrict)(data);
  };

  exports.encode = function (data, level) {
    return (!level || level <= 0 ? encode.XML : encode.HTML)(data);
  };

  exports.encodeXML = encode.XML;

  exports.encodeHTML4 = exports.encodeHTML5 = exports.encodeHTML = encode.HTML;

  exports.decodeXML = exports.decodeXMLStrict = decode.XML;

  exports.decodeHTML4 = exports.decodeHTML5 = exports.decodeHTML = decode.HTML;

  exports.decodeHTML4Strict = exports.decodeHTML5Strict = exports.decodeHTMLStrict = decode.HTMLStrict;

  exports.escape = encode.escape;

  /***/
},
/* 47 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var inverseXML = getInverseObj(__webpack_require__(28)),
      xmlReplacer = getInverseReplacer(inverseXML);

  exports.XML = getInverse(inverseXML, xmlReplacer);

  var inverseHTML = getInverseObj(__webpack_require__(29)),
      htmlReplacer = getInverseReplacer(inverseHTML);

  exports.HTML = getInverse(inverseHTML, htmlReplacer);

  function getInverseObj(obj) {
    return Object.keys(obj).sort().reduce(function (inverse, name) {
      inverse[obj[name]] = "&" + name + ";";
      return inverse;
    }, {});
  }

  function getInverseReplacer(inverse) {
    var single = [],
        multiple = [];

    Object.keys(inverse).forEach(function (k) {
      if (k.length === 1) {
        single.push("\\" + k);
      } else {
        multiple.push(k);
      }
    });

    //TODO add ranges
    multiple.unshift("[" + single.join("") + "]");

    return new RegExp(multiple.join("|"), "g");
  }

  var re_nonASCII = /[^\0-\x7F]/g,
      re_astralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

  function singleCharReplacer(c) {
    return "&#x" + c.charCodeAt(0).toString(16).toUpperCase() + ";";
  }

  function astralReplacer(c) {
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    var high = c.charCodeAt(0);
    var low = c.charCodeAt(1);
    var codePoint = (high - 0xD800) * 0x400 + low - 0xDC00 + 0x10000;
    return "&#x" + codePoint.toString(16).toUpperCase() + ";";
  }

  function getInverse(inverse, re) {
    function func(name) {
      return inverse[name];
    }

    return function (data) {
      return data.replace(re, func).replace(re_astralSymbols, astralReplacer).replace(re_nonASCII, singleCharReplacer);
    };
  }

  var re_xmlChars = getInverseReplacer(inverseXML);

  function escapeXML(data) {
    return data.replace(re_xmlChars, singleCharReplacer).replace(re_astralSymbols, astralReplacer).replace(re_nonASCII, singleCharReplacer);
  }

  exports.escape = escapeXML;

  /***/
},
/* 48 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var entityMap = __webpack_require__(29),
      legacyMap = __webpack_require__(49),
      xmlMap = __webpack_require__(28),
      decodeCodePoint = __webpack_require__(50);

  var decodeXMLStrict = getStrictDecoder(xmlMap),
      decodeHTMLStrict = getStrictDecoder(entityMap);

  function getStrictDecoder(map) {
    var keys = Object.keys(map).join("|"),
        replace = getReplacer(map);

    keys += "|#[xX][\\da-fA-F]+|#\\d+";

    var re = new RegExp("&(?:" + keys + ");", "g");

    return function (str) {
      return String(str).replace(re, replace);
    };
  }

  var decodeHTML = function () {
    var legacy = Object.keys(legacyMap).sort(sorter);

    var keys = Object.keys(entityMap).sort(sorter);

    for (var i = 0, j = 0; i < keys.length; i++) {
      if (legacy[j] === keys[i]) {
        keys[i] += ";?";
        j++;
      } else {
        keys[i] += ";";
      }
    }

    var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"),
        replace = getReplacer(entityMap);

    function replacer(str) {
      if (str.substr(-1) !== ";") str += ";";
      return replace(str);
    }

    //TODO consider creating a merged map
    return function (str) {
      return String(str).replace(re, replacer);
    };
  }();

  function sorter(a, b) {
    return a < b ? 1 : -1;
  }

  function getReplacer(map) {
    return function replace(str) {
      if (str.charAt(1) === "#") {
        if (str.charAt(2) === "X" || str.charAt(2) === "x") {
          return decodeCodePoint(parseInt(str.substr(3), 16));
        }
        return decodeCodePoint(parseInt(str.substr(2), 10));
      }
      return map[str.slice(1, -1)];
    };
  }

  module.exports = {
    XML: decodeXMLStrict,
    HTML: decodeHTML,
    HTMLStrict: decodeHTMLStrict
  };

  /***/
},
/* 49 */
/***/function (module, exports) {

  module.exports = { "Aacute": "Á", "aacute": "á", "Acirc": "Â", "acirc": "â", "acute": "´", "AElig": "Æ", "aelig": "æ", "Agrave": "À", "agrave": "à", "amp": "&", "AMP": "&", "Aring": "Å", "aring": "å", "Atilde": "Ã", "atilde": "ã", "Auml": "Ä", "auml": "ä", "brvbar": "¦", "Ccedil": "Ç", "ccedil": "ç", "cedil": "¸", "cent": "¢", "copy": "©", "COPY": "©", "curren": "¤", "deg": "°", "divide": "÷", "Eacute": "É", "eacute": "é", "Ecirc": "Ê", "ecirc": "ê", "Egrave": "È", "egrave": "è", "ETH": "Ð", "eth": "ð", "Euml": "Ë", "euml": "ë", "frac12": "½", "frac14": "¼", "frac34": "¾", "gt": ">", "GT": ">", "Iacute": "Í", "iacute": "í", "Icirc": "Î", "icirc": "î", "iexcl": "¡", "Igrave": "Ì", "igrave": "ì", "iquest": "¿", "Iuml": "Ï", "iuml": "ï", "laquo": "«", "lt": "<", "LT": "<", "macr": "¯", "micro": "µ", "middot": "·", "nbsp": " ", "not": "¬", "Ntilde": "Ñ", "ntilde": "ñ", "Oacute": "Ó", "oacute": "ó", "Ocirc": "Ô", "ocirc": "ô", "Ograve": "Ò", "ograve": "ò", "ordf": "ª", "ordm": "º", "Oslash": "Ø", "oslash": "ø", "Otilde": "Õ", "otilde": "õ", "Ouml": "Ö", "ouml": "ö", "para": "¶", "plusmn": "±", "pound": "£", "quot": "\"", "QUOT": "\"", "raquo": "»", "reg": "®", "REG": "®", "sect": "§", "shy": "­", "sup1": "¹", "sup2": "²", "sup3": "³", "szlig": "ß", "THORN": "Þ", "thorn": "þ", "times": "×", "Uacute": "Ú", "uacute": "ú", "Ucirc": "Û", "ucirc": "û", "Ugrave": "Ù", "ugrave": "ù", "uml": "¨", "Uuml": "Ü", "uuml": "ü", "Yacute": "Ý", "yacute": "ý", "yen": "¥", "yuml": "ÿ"

    /***/ };
},
/* 50 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var decodeMap = __webpack_require__(51);

  module.exports = decodeCodePoint;

  // modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
  function decodeCodePoint(codePoint) {

    if (codePoint >= 0xD800 && codePoint <= 0xDFFF || codePoint > 0x10FFFF) {
      return '\uFFFD';
    }

    if (codePoint in decodeMap) {
      codePoint = decodeMap[codePoint];
    }

    var output = "";

    if (codePoint > 0xFFFF) {
      codePoint -= 0x10000;
      output += String.fromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    output += String.fromCharCode(codePoint);
    return output;
  }

  /***/
},
/* 51 */
/***/function (module, exports) {

  module.exports = { "0": 65533, "128": 8364, "130": 8218, "131": 402, "132": 8222, "133": 8230, "134": 8224, "135": 8225, "136": 710, "137": 8240, "138": 352, "139": 8249, "140": 338, "142": 381, "145": 8216, "146": 8217, "147": 8220, "148": 8221, "149": 8226, "150": 8211, "151": 8212, "152": 732, "153": 8482, "154": 353, "155": 8250, "156": 339, "158": 382, "159": 376

    /***/ };
},
/* 52 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  /***/
},
/* 53 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  /* WEBPACK VAR INJECTION */
  (function (module, global) {
    var __WEBPACK_AMD_DEFINE_RESULT__;

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
      return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };

    /*! https://mths.be/punycode v1.4.1 by @mathias */
    ;(function (root) {

      /** Detect free variables */
      var freeExports = (false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
      var freeModule = (false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;
      var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global;
      if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
        root = freeGlobal;
      }

      /**
       * The `punycode` object.
       * @name punycode
       * @type Object
       */
      var punycode,


      /** Highest positive signed 32-bit float value */
      maxInt = 2147483647,

      // aka. 0x7FFFFFFF or 2^31-1

      /** Bootstring parameters */
      base = 36,
          tMin = 1,
          tMax = 26,
          skew = 38,
          damp = 700,
          initialBias = 72,
          initialN = 128,

      // 0x80
      delimiter = '-',

      // '\x2D'

      /** Regular expressions */
      regexPunycode = /^xn--/,
          regexNonASCII = /[^\x20-\x7E]/,

      // unprintable ASCII chars + non-ASCII chars
      regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,

      // RFC 3490 separators

      /** Error messages */
      errors = {
        'overflow': 'Overflow: input needs wider integers to process',
        'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
        'invalid-input': 'Invalid input'
      },


      /** Convenience shortcuts */
      baseMinusTMin = base - tMin,
          floor = Math.floor,
          stringFromCharCode = String.fromCharCode,


      /** Temporary variable */
      key;

      /*--------------------------------------------------------------------------*/

      /**
       * A generic error utility function.
       * @private
       * @param {String} type The error type.
       * @returns {Error} Throws a `RangeError` with the applicable error message.
       */
      function error(type) {
        throw new RangeError(errors[type]);
      }

      /**
       * A generic `Array#map` utility function.
       * @private
       * @param {Array} array The array to iterate over.
       * @param {Function} callback The function that gets called for every array
       * item.
       * @returns {Array} A new array of values returned by the callback function.
       */
      function map(array, fn) {
        var length = array.length;
        var result = [];
        while (length--) {
          result[length] = fn(array[length]);
        }
        return result;
      }

      /**
       * A simple `Array#map`-like wrapper to work with domain name strings or email
       * addresses.
       * @private
       * @param {String} domain The domain name or email address.
       * @param {Function} callback The function that gets called for every
       * character.
       * @returns {Array} A new string of characters returned by the callback
       * function.
       */
      function mapDomain(string, fn) {
        var parts = string.split('@');
        var result = '';
        if (parts.length > 1) {
          // In email addresses, only the domain name should be punycoded. Leave
          // the local part (i.e. everything up to `@`) intact.
          result = parts[0] + '@';
          string = parts[1];
        }
        // Avoid `split(regex)` for IE8 compatibility. See #17.
        string = string.replace(regexSeparators, '\x2E');
        var labels = string.split('.');
        var encoded = map(labels, fn).join('.');
        return result + encoded;
      }

      /**
       * Creates an array containing the numeric code points of each Unicode
       * character in the string. While JavaScript uses UCS-2 internally,
       * this function will convert a pair of surrogate halves (each of which
       * UCS-2 exposes as separate characters) into a single code point,
       * matching UTF-16.
       * @see `punycode.ucs2.encode`
       * @see <https://mathiasbynens.be/notes/javascript-encoding>
       * @memberOf punycode.ucs2
       * @name decode
       * @param {String} string The Unicode input string (UCS-2).
       * @returns {Array} The new array of code points.
       */
      function ucs2decode(string) {
        var output = [],
            counter = 0,
            length = string.length,
            value,
            extra;
        while (counter < length) {
          value = string.charCodeAt(counter++);
          if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
            // high surrogate, and there is a next character
            extra = string.charCodeAt(counter++);
            if ((extra & 0xFC00) == 0xDC00) {
              // low surrogate
              output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
            } else {
              // unmatched surrogate; only append this code unit, in case the next
              // code unit is the high surrogate of a surrogate pair
              output.push(value);
              counter--;
            }
          } else {
            output.push(value);
          }
        }
        return output;
      }

      /**
       * Creates a string based on an array of numeric code points.
       * @see `punycode.ucs2.decode`
       * @memberOf punycode.ucs2
       * @name encode
       * @param {Array} codePoints The array of numeric code points.
       * @returns {String} The new Unicode string (UCS-2).
       */
      function ucs2encode(array) {
        return map(array, function (value) {
          var output = '';
          if (value > 0xFFFF) {
            value -= 0x10000;
            output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
            value = 0xDC00 | value & 0x3FF;
          }
          output += stringFromCharCode(value);
          return output;
        }).join('');
      }

      /**
       * Converts a basic code point into a digit/integer.
       * @see `digitToBasic()`
       * @private
       * @param {Number} codePoint The basic numeric code point value.
       * @returns {Number} The numeric value of a basic code point (for use in
       * representing integers) in the range `0` to `base - 1`, or `base` if
       * the code point does not represent a value.
       */
      function basicToDigit(codePoint) {
        if (codePoint - 48 < 10) {
          return codePoint - 22;
        }
        if (codePoint - 65 < 26) {
          return codePoint - 65;
        }
        if (codePoint - 97 < 26) {
          return codePoint - 97;
        }
        return base;
      }

      /**
       * Converts a digit/integer into a basic code point.
       * @see `basicToDigit()`
       * @private
       * @param {Number} digit The numeric value of a basic code point.
       * @returns {Number} The basic code point whose value (when used for
       * representing integers) is `digit`, which needs to be in the range
       * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
       * used; else, the lowercase form is used. The behavior is undefined
       * if `flag` is non-zero and `digit` has no uppercase form.
       */
      function digitToBasic(digit, flag) {
        //  0..25 map to ASCII a..z or A..Z
        // 26..35 map to ASCII 0..9
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
      }

      /**
       * Bias adaptation function as per section 3.4 of RFC 3492.
       * https://tools.ietf.org/html/rfc3492#section-3.4
       * @private
       */
      function adapt(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for (; /* no initialization */delta > baseMinusTMin * tMax >> 1; k += base) {
          delta = floor(delta / baseMinusTMin);
        }
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
      }

      /**
       * Converts a Punycode string of ASCII-only symbols to a string of Unicode
       * symbols.
       * @memberOf punycode
       * @param {String} input The Punycode string of ASCII-only symbols.
       * @returns {String} The resulting string of Unicode symbols.
       */
      function decode(input) {
        // Don't use UCS-2
        var output = [],
            inputLength = input.length,
            out,
            i = 0,
            n = initialN,
            bias = initialBias,
            basic,
            j,
            index,
            oldi,
            w,
            k,
            digit,
            t,


        /** Cached calculation results */
        baseMinusT;

        // Handle the basic code points: let `basic` be the number of input code
        // points before the last delimiter, or `0` if there is none, then copy
        // the first basic code points to the output.

        basic = input.lastIndexOf(delimiter);
        if (basic < 0) {
          basic = 0;
        }

        for (j = 0; j < basic; ++j) {
          // if it's not a basic code point
          if (input.charCodeAt(j) >= 0x80) {
            error('not-basic');
          }
          output.push(input.charCodeAt(j));
        }

        // Main decoding loop: start just after the last delimiter if any basic code
        // points were copied; start at the beginning otherwise.

        for (index = basic > 0 ? basic + 1 : 0; index < inputLength;) /* no final expression */{

          // `index` is the index of the next character to be consumed.
          // Decode a generalized variable-length integer into `delta`,
          // which gets added to `i`. The overflow checking is easier
          // if we increase `i` as we go, then subtract off its starting
          // value at the end to obtain `delta`.
          for (oldi = i, w = 1, k = base;; /* no condition */k += base) {

            if (index >= inputLength) {
              error('invalid-input');
            }

            digit = basicToDigit(input.charCodeAt(index++));

            if (digit >= base || digit > floor((maxInt - i) / w)) {
              error('overflow');
            }

            i += digit * w;
            t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

            if (digit < t) {
              break;
            }

            baseMinusT = base - t;
            if (w > floor(maxInt / baseMinusT)) {
              error('overflow');
            }

            w *= baseMinusT;
          }

          out = output.length + 1;
          bias = adapt(i - oldi, out, oldi == 0);

          // `i` was supposed to wrap around from `out` to `0`,
          // incrementing `n` each time, so we'll fix that now:
          if (floor(i / out) > maxInt - n) {
            error('overflow');
          }

          n += floor(i / out);
          i %= out;

          // Insert `n` at position `i` of the output
          output.splice(i++, 0, n);
        }

        return ucs2encode(output);
      }

      /**
       * Converts a string of Unicode symbols (e.g. a domain name label) to a
       * Punycode string of ASCII-only symbols.
       * @memberOf punycode
       * @param {String} input The string of Unicode symbols.
       * @returns {String} The resulting Punycode string of ASCII-only symbols.
       */
      function encode(input) {
        var n,
            delta,
            handledCPCount,
            basicLength,
            bias,
            j,
            m,
            q,
            k,
            t,
            currentValue,
            output = [],


        /** `inputLength` will hold the number of code points in `input`. */
        inputLength,


        /** Cached calculation results */
        handledCPCountPlusOne,
            baseMinusT,
            qMinusT;

        // Convert the input in UCS-2 to Unicode
        input = ucs2decode(input);

        // Cache the length
        inputLength = input.length;

        // Initialize the state
        n = initialN;
        delta = 0;
        bias = initialBias;

        // Handle the basic code points
        for (j = 0; j < inputLength; ++j) {
          currentValue = input[j];
          if (currentValue < 0x80) {
            output.push(stringFromCharCode(currentValue));
          }
        }

        handledCPCount = basicLength = output.length;

        // `handledCPCount` is the number of code points that have been handled;
        // `basicLength` is the number of basic code points.

        // Finish the basic string - if it is not empty - with a delimiter
        if (basicLength) {
          output.push(delimiter);
        }

        // Main encoding loop:
        while (handledCPCount < inputLength) {

          // All non-basic code points < n have been handled already. Find the next
          // larger one:
          for (m = maxInt, j = 0; j < inputLength; ++j) {
            currentValue = input[j];
            if (currentValue >= n && currentValue < m) {
              m = currentValue;
            }
          }

          // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
          // but guard against overflow
          handledCPCountPlusOne = handledCPCount + 1;
          if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
            error('overflow');
          }

          delta += (m - n) * handledCPCountPlusOne;
          n = m;

          for (j = 0; j < inputLength; ++j) {
            currentValue = input[j];

            if (currentValue < n && ++delta > maxInt) {
              error('overflow');
            }

            if (currentValue == n) {
              // Represent delta as a generalized variable-length integer
              for (q = delta, k = base;; /* no condition */k += base) {
                t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                if (q < t) {
                  break;
                }
                qMinusT = q - t;
                baseMinusT = base - t;
                output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                q = floor(qMinusT / baseMinusT);
              }

              output.push(stringFromCharCode(digitToBasic(q, 0)));
              bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
              delta = 0;
              ++handledCPCount;
            }
          }

          ++delta;
          ++n;
        }
        return output.join('');
      }

      /**
       * Converts a Punycode string representing a domain name or an email address
       * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
       * it doesn't matter if you call it on a string that has already been
       * converted to Unicode.
       * @memberOf punycode
       * @param {String} input The Punycoded domain name or email address to
       * convert to Unicode.
       * @returns {String} The Unicode representation of the given Punycode
       * string.
       */
      function toUnicode(input) {
        return mapDomain(input, function (string) {
          return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
        });
      }

      /**
       * Converts a Unicode string representing a domain name or an email address to
       * Punycode. Only the non-ASCII parts of the domain name will be converted,
       * i.e. it doesn't matter if you call it with a domain that's already in
       * ASCII.
       * @memberOf punycode
       * @param {String} input The domain name or email address to convert, as a
       * Unicode string.
       * @returns {String} The Punycode representation of the given domain name or
       * email address.
       */
      function toASCII(input) {
        return mapDomain(input, function (string) {
          return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
        });
      }

      /*--------------------------------------------------------------------------*/

      /** Define the public API */
      punycode = {
        /**
         * A string representing the current Punycode.js version number.
         * @memberOf punycode
         * @type String
         */
        'version': '1.4.1',
        /**
         * An object of methods to convert from JavaScript's internal character
         * representation (UCS-2) to Unicode code points, and back.
         * @see <https://mathiasbynens.be/notes/javascript-encoding>
         * @memberOf punycode
         * @type Object
         */
        'ucs2': {
          'decode': ucs2decode,
          'encode': ucs2encode
        },
        'decode': decode,
        'encode': encode,
        'toASCII': toASCII,
        'toUnicode': toUnicode
      };

      /** Expose `punycode` */
      // Some AMD build optimizers, like r.js, check for specific condition patterns
      // like the following:
      if ("function" == 'function' && _typeof(__webpack_require__(31)) == 'object' && __webpack_require__(31)) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return punycode;
        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      } else if (freeExports && freeModule) {
        if (module.exports == freeExports) {
          // in Node.js, io.js, or RingoJS v0.8.0+
          freeModule.exports = punycode;
        } else {
          // in Narwhal or RingoJS v0.7.0-
          for (key in punycode) {
            punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
          }
        }
      } else {
        // in Rhino or a web browser
        root.punycode = punycode;
      }
    })(undefined);
    /* WEBPACK VAR INJECTION */
  }).call(exports, __webpack_require__(54)(module), __webpack_require__(1));

  /***/
},
/* 54 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  module.exports = function (module) {
    if (!module.webpackPolyfill) {
      module.deprecate = function () {};
      module.paths = [];
      // module.parent = undefined by default
      if (!module.children) module.children = [];
      Object.defineProperty(module, "loaded", {
        enumerable: true,
        get: function get() {
          return module.l;
        }
      });
      Object.defineProperty(module, "id", {
        enumerable: true,
        get: function get() {
          return module.i;
        }
      });
      module.webpackPolyfill = 1;
    }
    return module;
  };

  /***/
},
/* 55 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  };

  module.exports = {
    isString: function isString(arg) {
      return typeof arg === 'string';
    },
    isObject: function isObject(arg) {
      return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
    },
    isNull: function isNull(arg) {
      return arg === null;
    },
    isNullOrUndefined: function isNullOrUndefined(arg) {
      return arg == null;
    }
  };

  /***/
},
/* 56 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  exports.decode = exports.parse = __webpack_require__(57);
  exports.encode = exports.stringify = __webpack_require__(58);

  /***/
},
/* 57 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.


  // If obj.hasOwnProperty has been overridden, then calling
  // obj.hasOwnProperty(prop) will break.
  // See: https://github.com/joyent/node/issues/1707

  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  module.exports = function (qs, sep, eq, options) {
    sep = sep || '&';
    eq = eq || '=';
    var obj = {};

    if (typeof qs !== 'string' || qs.length === 0) {
      return obj;
    }

    var regexp = /\+/g;
    qs = qs.split(sep);

    var maxKeys = 1000;
    if (options && typeof options.maxKeys === 'number') {
      maxKeys = options.maxKeys;
    }

    var len = qs.length;
    // maxKeys <= 0 means that we should not limit keys count
    if (maxKeys > 0 && len > maxKeys) {
      len = maxKeys;
    }

    for (var i = 0; i < len; ++i) {
      var x = qs[i].replace(regexp, '%20'),
          idx = x.indexOf(eq),
          kstr,
          vstr,
          k,
          v;

      if (idx >= 0) {
        kstr = x.substr(0, idx);
        vstr = x.substr(idx + 1);
      } else {
        kstr = x;
        vstr = '';
      }

      k = decodeURIComponent(kstr);
      v = decodeURIComponent(vstr);

      if (!hasOwnProperty(obj, k)) {
        obj[k] = v;
      } else if (isArray(obj[k])) {
        obj[k].push(v);
      } else {
        obj[k] = [obj[k], v];
      }
    }

    return obj;
  };

  var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
  };

  /***/
},
/* 58 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.


  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  };

  var stringifyPrimitive = function stringifyPrimitive(v) {
    switch (typeof v === 'undefined' ? 'undefined' : _typeof(v)) {
      case 'string':
        return v;

      case 'boolean':
        return v ? 'true' : 'false';

      case 'number':
        return isFinite(v) ? v : '';

      default:
        return '';
    }
  };

  module.exports = function (obj, sep, eq, name) {
    sep = sep || '&';
    eq = eq || '=';
    if (obj === null) {
      obj = undefined;
    }

    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
      return map(objectKeys(obj), function (k) {
        var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
        if (isArray(obj[k])) {
          return map(obj[k], function (v) {
            return ks + encodeURIComponent(stringifyPrimitive(v));
          }).join(sep);
        } else {
          return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
        }
      }).join(sep);
    }

    if (!name) return '';
    return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
  };

  var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
  };

  function map(xs, f) {
    if (xs.map) return xs.map(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
      res.push(f(xs[i], i));
    }
    return res;
  }

  var objectKeys = Object.keys || function (obj) {
    var res = [];
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
    }
    return res;
  };

  /***/
},
/* 59 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.7

  (function () {
    "use strict";

    var builder,
        defaults,
        parser,
        processors,
        extend = function extend(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }function ctor() {
        this.constructor = child;
      }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
    },
        hasProp = {}.hasOwnProperty;

    defaults = __webpack_require__(23);

    builder = __webpack_require__(60);

    parser = __webpack_require__(65);

    processors = __webpack_require__(41);

    exports.defaults = defaults.defaults;

    exports.processors = processors;

    exports.ValidationError = function (superClass) {
      extend(ValidationError, superClass);

      function ValidationError(message) {
        this.message = message;
      }

      return ValidationError;
    }(Error);

    exports.Builder = builder.Builder;

    exports.Parser = parser.Parser;

    exports.parseString = parser.parseString;
  }).call(undefined);

  /***/
},
/* 60 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  };

  // Generated by CoffeeScript 1.12.7
  (function () {
    "use strict";

    var builder,
        defaults,
        escapeCDATA,
        requiresCDATA,
        wrapCDATA,
        hasProp = {}.hasOwnProperty;

    builder = __webpack_require__(61);

    defaults = __webpack_require__(23).defaults;

    requiresCDATA = function requiresCDATA(entry) {
      return typeof entry === "string" && (entry.indexOf('&') >= 0 || entry.indexOf('>') >= 0 || entry.indexOf('<') >= 0);
    };

    wrapCDATA = function wrapCDATA(entry) {
      return "<![CDATA[" + escapeCDATA(entry) + "]]>";
    };

    escapeCDATA = function escapeCDATA(entry) {
      return entry.replace(']]>', ']]]]><![CDATA[>');
    };

    exports.Builder = function () {
      function Builder(opts) {
        var key, ref, value;
        this.options = {};
        ref = defaults["0.2"];
        for (key in ref) {
          if (!hasProp.call(ref, key)) continue;
          value = ref[key];
          this.options[key] = value;
        }
        for (key in opts) {
          if (!hasProp.call(opts, key)) continue;
          value = opts[key];
          this.options[key] = value;
        }
      }

      Builder.prototype.buildObject = function (rootObj) {
        var attrkey, charkey, render, rootElement, rootName;
        attrkey = this.options.attrkey;
        charkey = this.options.charkey;
        if (Object.keys(rootObj).length === 1 && this.options.rootName === defaults['0.2'].rootName) {
          rootName = Object.keys(rootObj)[0];
          rootObj = rootObj[rootName];
        } else {
          rootName = this.options.rootName;
        }
        render = function (_this) {
          return function (element, obj) {
            var attr, child, entry, index, key, value;
            if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
              if (_this.options.cdata && requiresCDATA(obj)) {
                element.raw(wrapCDATA(obj));
              } else {
                element.txt(obj);
              }
            } else if (Array.isArray(obj)) {
              for (index in obj) {
                if (!hasProp.call(obj, index)) continue;
                child = obj[index];
                for (key in child) {
                  entry = child[key];
                  element = render(element.ele(key), entry).up();
                }
              }
            } else {
              for (key in obj) {
                if (!hasProp.call(obj, key)) continue;
                child = obj[key];
                if (key === attrkey) {
                  if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === "object") {
                    for (attr in child) {
                      value = child[attr];
                      element = element.att(attr, value);
                    }
                  }
                } else if (key === charkey) {
                  if (_this.options.cdata && requiresCDATA(child)) {
                    element = element.raw(wrapCDATA(child));
                  } else {
                    element = element.txt(child);
                  }
                } else if (Array.isArray(child)) {
                  for (index in child) {
                    if (!hasProp.call(child, index)) continue;
                    entry = child[index];
                    if (typeof entry === 'string') {
                      if (_this.options.cdata && requiresCDATA(entry)) {
                        element = element.ele(key).raw(wrapCDATA(entry)).up();
                      } else {
                        element = element.ele(key, entry).up();
                      }
                    } else {
                      element = render(element.ele(key), entry).up();
                    }
                  }
                } else if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === "object") {
                  element = render(element.ele(key), child).up();
                } else {
                  if (typeof child === 'string' && _this.options.cdata && requiresCDATA(child)) {
                    element = element.ele(key).raw(wrapCDATA(child)).up();
                  } else {
                    if (child == null) {
                      child = '';
                    }
                    element = element.ele(key, child.toString()).up();
                  }
                }
              }
            }
            return element;
          };
        }(this);
        rootElement = builder.create(rootName, this.options.xmldec, this.options.doctype, {
          headless: this.options.headless,
          allowSurrogateChars: this.options.allowSurrogateChars
        });
        return render(rootElement, rootObj).end(this.options.renderOpts);
      };

      return Builder;
    }();
  }).call(undefined);

  /***/
},
/* 61 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.6

  (function () {
    var XMLDocument, XMLDocumentCB, XMLStreamWriter, XMLStringWriter, assign, isFunction, ref;

    ref = __webpack_require__(2), assign = ref.assign, isFunction = ref.isFunction;

    XMLDocument = __webpack_require__(62);

    XMLDocumentCB = __webpack_require__(63);

    XMLStringWriter = __webpack_require__(24);

    XMLStreamWriter = __webpack_require__(64);

    module.exports.create = function (name, xmldec, doctype, options) {
      var doc, root;
      if (name == null) {
        throw new Error("Root element needs a name");
      }
      options = assign({}, xmldec, doctype, options);
      doc = new XMLDocument(options);
      root = doc.element(name);
      if (!options.headless) {
        doc.declaration(options);
        if (options.pubID != null || options.sysID != null) {
          doc.doctype(options);
        }
      }
      return root;
    };

    module.exports.begin = function (options, onData, onEnd) {
      var ref1;
      if (isFunction(options)) {
        ref1 = [options, onData], onData = ref1[0], onEnd = ref1[1];
        options = {};
      }
      if (onData) {
        return new XMLDocumentCB(options, onData, onEnd);
      } else {
        return new XMLDocument(options);
      }
    };

    module.exports.stringWriter = function (options) {
      return new XMLStringWriter(options);
    };

    module.exports.streamWriter = function (stream, options) {
      return new XMLStreamWriter(stream, options);
    };
  }).call(undefined);

  /***/
},
/* 62 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.6

  (function () {
    var XMLDocument,
        XMLNode,
        XMLStringWriter,
        XMLStringifier,
        isPlainObject,
        extend = function extend(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }function ctor() {
        this.constructor = child;
      }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
    },
        hasProp = {}.hasOwnProperty;

    isPlainObject = __webpack_require__(2).isPlainObject;

    XMLNode = __webpack_require__(0);

    XMLStringifier = __webpack_require__(33);

    XMLStringWriter = __webpack_require__(24);

    module.exports = XMLDocument = function (superClass) {
      extend(XMLDocument, superClass);

      function XMLDocument(options) {
        XMLDocument.__super__.constructor.call(this, null);
        options || (options = {});
        if (!options.writer) {
          options.writer = new XMLStringWriter();
        }
        this.options = options;
        this.stringify = new XMLStringifier(options);
        this.isDocument = true;
      }

      XMLDocument.prototype.end = function (writer) {
        var writerOptions;
        if (!writer) {
          writer = this.options.writer;
        } else if (isPlainObject(writer)) {
          writerOptions = writer;
          writer = this.options.writer.set(writerOptions);
        }
        return writer.document(this);
      };

      XMLDocument.prototype.toString = function (options) {
        return this.options.writer.set(options).document(this);
      };

      return XMLDocument;
    }(XMLNode);
  }).call(undefined);

  /***/
},
/* 63 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.6

  (function () {
    var XMLAttribute,
        XMLCData,
        XMLComment,
        XMLDTDAttList,
        XMLDTDElement,
        XMLDTDEntity,
        XMLDTDNotation,
        XMLDeclaration,
        XMLDocType,
        XMLDocumentCB,
        XMLElement,
        XMLProcessingInstruction,
        XMLRaw,
        XMLStringWriter,
        XMLStringifier,
        XMLText,
        isFunction,
        isObject,
        isPlainObject,
        ref,
        hasProp = {}.hasOwnProperty;

    ref = __webpack_require__(2), isObject = ref.isObject, isFunction = ref.isFunction, isPlainObject = ref.isPlainObject;

    XMLElement = __webpack_require__(9);

    XMLCData = __webpack_require__(10);

    XMLComment = __webpack_require__(11);

    XMLRaw = __webpack_require__(18);

    XMLText = __webpack_require__(19);

    XMLProcessingInstruction = __webpack_require__(20);

    XMLDeclaration = __webpack_require__(12);

    XMLDocType = __webpack_require__(13);

    XMLDTDAttList = __webpack_require__(14);

    XMLDTDEntity = __webpack_require__(15);

    XMLDTDElement = __webpack_require__(16);

    XMLDTDNotation = __webpack_require__(17);

    XMLAttribute = __webpack_require__(32);

    XMLStringifier = __webpack_require__(33);

    XMLStringWriter = __webpack_require__(24);

    module.exports = XMLDocumentCB = function () {
      function XMLDocumentCB(options, onData, onEnd) {
        var writerOptions;
        options || (options = {});
        if (!options.writer) {
          options.writer = new XMLStringWriter(options);
        } else if (isPlainObject(options.writer)) {
          writerOptions = options.writer;
          options.writer = new XMLStringWriter(writerOptions);
        }
        this.options = options;
        this.writer = options.writer;
        this.stringify = new XMLStringifier(options);
        this.onDataCallback = onData || function () {};
        this.onEndCallback = onEnd || function () {};
        this.currentNode = null;
        this.currentLevel = -1;
        this.openTags = {};
        this.documentStarted = false;
        this.documentCompleted = false;
        this.root = null;
      }

      XMLDocumentCB.prototype.node = function (name, attributes, text) {
        var ref1;
        if (name == null) {
          throw new Error("Missing node name");
        }
        if (this.root && this.currentLevel === -1) {
          throw new Error("Document can only have one root node");
        }
        this.openCurrent();
        name = name.valueOf();
        if (attributes == null) {
          attributes = {};
        }
        attributes = attributes.valueOf();
        if (!isObject(attributes)) {
          ref1 = [attributes, text], text = ref1[0], attributes = ref1[1];
        }
        this.currentNode = new XMLElement(this, name, attributes);
        this.currentNode.children = false;
        this.currentLevel++;
        this.openTags[this.currentLevel] = this.currentNode;
        if (text != null) {
          this.text(text);
        }
        return this;
      };

      XMLDocumentCB.prototype.element = function (name, attributes, text) {
        if (this.currentNode && this.currentNode instanceof XMLDocType) {
          return this.dtdElement.apply(this, arguments);
        } else {
          return this.node(name, attributes, text);
        }
      };

      XMLDocumentCB.prototype.attribute = function (name, value) {
        var attName, attValue;
        if (!this.currentNode || this.currentNode.children) {
          throw new Error("att() can only be used immediately after an ele() call in callback mode");
        }
        if (name != null) {
          name = name.valueOf();
        }
        if (isObject(name)) {
          for (attName in name) {
            if (!hasProp.call(name, attName)) continue;
            attValue = name[attName];
            this.attribute(attName, attValue);
          }
        } else {
          if (isFunction(value)) {
            value = value.apply();
          }
          if (!this.options.skipNullAttributes || value != null) {
            this.currentNode.attributes[name] = new XMLAttribute(this, name, value);
          }
        }
        return this;
      };

      XMLDocumentCB.prototype.text = function (value) {
        var node;
        this.openCurrent();
        node = new XMLText(this, value);
        this.onData(this.writer.text(node, this.currentLevel + 1));
        return this;
      };

      XMLDocumentCB.prototype.cdata = function (value) {
        var node;
        this.openCurrent();
        node = new XMLCData(this, value);
        this.onData(this.writer.cdata(node, this.currentLevel + 1));
        return this;
      };

      XMLDocumentCB.prototype.comment = function (value) {
        var node;
        this.openCurrent();
        node = new XMLComment(this, value);
        this.onData(this.writer.comment(node, this.currentLevel + 1));
        return this;
      };

      XMLDocumentCB.prototype.raw = function (value) {
        var node;
        this.openCurrent();
        node = new XMLRaw(this, value);
        this.onData(this.writer.raw(node, this.currentLevel + 1));
        return this;
      };

      XMLDocumentCB.prototype.instruction = function (target, value) {
        var i, insTarget, insValue, len, node;
        this.openCurrent();
        if (target != null) {
          target = target.valueOf();
        }
        if (value != null) {
          value = value.valueOf();
        }
        if (Array.isArray(target)) {
          for (i = 0, len = target.length; i < len; i++) {
            insTarget = target[i];
            this.instruction(insTarget);
          }
        } else if (isObject(target)) {
          for (insTarget in target) {
            if (!hasProp.call(target, insTarget)) continue;
            insValue = target[insTarget];
            this.instruction(insTarget, insValue);
          }
        } else {
          if (isFunction(value)) {
            value = value.apply();
          }
          node = new XMLProcessingInstruction(this, target, value);
          this.onData(this.writer.processingInstruction(node, this.currentLevel + 1));
        }
        return this;
      };

      XMLDocumentCB.prototype.declaration = function (version, encoding, standalone) {
        var node;
        this.openCurrent();
        if (this.documentStarted) {
          throw new Error("declaration() must be the first node");
        }
        node = new XMLDeclaration(this, version, encoding, standalone);
        this.onData(this.writer.declaration(node, this.currentLevel + 1));
        return this;
      };

      XMLDocumentCB.prototype.doctype = function (root, pubID, sysID) {
        this.openCurrent();
        if (root == null) {
          throw new Error("Missing root node name");
        }
        if (this.root) {
          throw new Error("dtd() must come before the root node");
        }
        this.currentNode = new XMLDocType(this, pubID, sysID);
        this.currentNode.rootNodeName = root;
        this.currentNode.children = false;
        this.currentLevel++;
        this.openTags[this.currentLevel] = this.currentNode;
        return this;
      };

      XMLDocumentCB.prototype.dtdElement = function (name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDElement(this, name, value);
        this.onData(this.writer.dtdElement(node, this.currentLevel + 1));
        return this;
      };

      XMLDocumentCB.prototype.attList = function (elementName, attributeName, attributeType, defaultValueType, defaultValue) {
        var node;
        this.openCurrent();
        node = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
        this.onData(this.writer.dtdAttList(node, this.currentLevel + 1));
        return this;
      };

      XMLDocumentCB.prototype.entity = function (name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDEntity(this, false, name, value);
        this.onData(this.writer.dtdEntity(node, this.currentLevel + 1));
        return this;
      };

      XMLDocumentCB.prototype.pEntity = function (name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDEntity(this, true, name, value);
        this.onData(this.writer.dtdEntity(node, this.currentLevel + 1));
        return this;
      };

      XMLDocumentCB.prototype.notation = function (name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDNotation(this, name, value);
        this.onData(this.writer.dtdNotation(node, this.currentLevel + 1));
        return this;
      };

      XMLDocumentCB.prototype.up = function () {
        if (this.currentLevel < 0) {
          throw new Error("The document node has no parent");
        }
        if (this.currentNode) {
          if (this.currentNode.children) {
            this.closeNode(this.currentNode);
          } else {
            this.openNode(this.currentNode);
          }
          this.currentNode = null;
        } else {
          this.closeNode(this.openTags[this.currentLevel]);
        }
        delete this.openTags[this.currentLevel];
        this.currentLevel--;
        return this;
      };

      XMLDocumentCB.prototype.end = function () {
        while (this.currentLevel >= 0) {
          this.up();
        }
        return this.onEnd();
      };

      XMLDocumentCB.prototype.openCurrent = function () {
        if (this.currentNode) {
          this.currentNode.children = true;
          return this.openNode(this.currentNode);
        }
      };

      XMLDocumentCB.prototype.openNode = function (node) {
        if (!node.isOpen) {
          if (!this.root && this.currentLevel === 0 && node instanceof XMLElement) {
            this.root = node;
          }
          this.onData(this.writer.openNode(node, this.currentLevel));
          return node.isOpen = true;
        }
      };

      XMLDocumentCB.prototype.closeNode = function (node) {
        if (!node.isClosed) {
          this.onData(this.writer.closeNode(node, this.currentLevel));
          return node.isClosed = true;
        }
      };

      XMLDocumentCB.prototype.onData = function (chunk) {
        this.documentStarted = true;
        return this.onDataCallback(chunk);
      };

      XMLDocumentCB.prototype.onEnd = function () {
        this.documentCompleted = true;
        return this.onEndCallback();
      };

      XMLDocumentCB.prototype.ele = function () {
        return this.element.apply(this, arguments);
      };

      XMLDocumentCB.prototype.nod = function (name, attributes, text) {
        return this.node(name, attributes, text);
      };

      XMLDocumentCB.prototype.txt = function (value) {
        return this.text(value);
      };

      XMLDocumentCB.prototype.dat = function (value) {
        return this.cdata(value);
      };

      XMLDocumentCB.prototype.com = function (value) {
        return this.comment(value);
      };

      XMLDocumentCB.prototype.ins = function (target, value) {
        return this.instruction(target, value);
      };

      XMLDocumentCB.prototype.dec = function (version, encoding, standalone) {
        return this.declaration(version, encoding, standalone);
      };

      XMLDocumentCB.prototype.dtd = function (root, pubID, sysID) {
        return this.doctype(root, pubID, sysID);
      };

      XMLDocumentCB.prototype.e = function (name, attributes, text) {
        return this.element(name, attributes, text);
      };

      XMLDocumentCB.prototype.n = function (name, attributes, text) {
        return this.node(name, attributes, text);
      };

      XMLDocumentCB.prototype.t = function (value) {
        return this.text(value);
      };

      XMLDocumentCB.prototype.d = function (value) {
        return this.cdata(value);
      };

      XMLDocumentCB.prototype.c = function (value) {
        return this.comment(value);
      };

      XMLDocumentCB.prototype.r = function (value) {
        return this.raw(value);
      };

      XMLDocumentCB.prototype.i = function (target, value) {
        return this.instruction(target, value);
      };

      XMLDocumentCB.prototype.att = function () {
        if (this.currentNode && this.currentNode instanceof XMLDocType) {
          return this.attList.apply(this, arguments);
        } else {
          return this.attribute.apply(this, arguments);
        }
      };

      XMLDocumentCB.prototype.a = function () {
        if (this.currentNode && this.currentNode instanceof XMLDocType) {
          return this.attList.apply(this, arguments);
        } else {
          return this.attribute.apply(this, arguments);
        }
      };

      XMLDocumentCB.prototype.ent = function (name, value) {
        return this.entity(name, value);
      };

      XMLDocumentCB.prototype.pent = function (name, value) {
        return this.pEntity(name, value);
      };

      XMLDocumentCB.prototype.not = function (name, value) {
        return this.notation(name, value);
      };

      return XMLDocumentCB;
    }();
  }).call(undefined);

  /***/
},
/* 64 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.6

  (function () {
    var XMLCData,
        XMLComment,
        XMLDTDAttList,
        XMLDTDElement,
        XMLDTDEntity,
        XMLDTDNotation,
        XMLDeclaration,
        XMLDocType,
        XMLElement,
        XMLProcessingInstruction,
        XMLRaw,
        XMLStreamWriter,
        XMLText,
        XMLWriterBase,
        extend = function extend(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }function ctor() {
        this.constructor = child;
      }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
    },
        hasProp = {}.hasOwnProperty;

    XMLDeclaration = __webpack_require__(12);

    XMLDocType = __webpack_require__(13);

    XMLCData = __webpack_require__(10);

    XMLComment = __webpack_require__(11);

    XMLElement = __webpack_require__(9);

    XMLRaw = __webpack_require__(18);

    XMLText = __webpack_require__(19);

    XMLProcessingInstruction = __webpack_require__(20);

    XMLDTDAttList = __webpack_require__(14);

    XMLDTDElement = __webpack_require__(16);

    XMLDTDEntity = __webpack_require__(15);

    XMLDTDNotation = __webpack_require__(17);

    XMLWriterBase = __webpack_require__(34);

    module.exports = XMLStreamWriter = function (superClass) {
      extend(XMLStreamWriter, superClass);

      function XMLStreamWriter(stream, options) {
        this.stream = stream;
        XMLStreamWriter.__super__.constructor.call(this, options);
      }

      XMLStreamWriter.prototype.document = function (doc) {
        var child, i, j, len, len1, ref, ref1, results;
        ref = doc.children;
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          child.isLastRootNode = false;
        }
        doc.children[doc.children.length - 1].isLastRootNode = true;
        ref1 = doc.children;
        results = [];
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          child = ref1[j];
          switch (false) {
            case !(child instanceof XMLDeclaration):
              results.push(this.declaration(child));
              break;
            case !(child instanceof XMLDocType):
              results.push(this.docType(child));
              break;
            case !(child instanceof XMLComment):
              results.push(this.comment(child));
              break;
            case !(child instanceof XMLProcessingInstruction):
              results.push(this.processingInstruction(child));
              break;
            default:
              results.push(this.element(child));
          }
        }
        return results;
      };

      XMLStreamWriter.prototype.attribute = function (att) {
        return this.stream.write(' ' + att.name + '="' + att.value + '"');
      };

      XMLStreamWriter.prototype.cdata = function (node, level) {
        return this.stream.write(this.space(level) + '<![CDATA[' + node.text + ']]>' + this.endline(node));
      };

      XMLStreamWriter.prototype.comment = function (node, level) {
        return this.stream.write(this.space(level) + '<!-- ' + node.text + ' -->' + this.endline(node));
      };

      XMLStreamWriter.prototype.declaration = function (node, level) {
        this.stream.write(this.space(level));
        this.stream.write('<?xml version="' + node.version + '"');
        if (node.encoding != null) {
          this.stream.write(' encoding="' + node.encoding + '"');
        }
        if (node.standalone != null) {
          this.stream.write(' standalone="' + node.standalone + '"');
        }
        this.stream.write(this.spacebeforeslash + '?>');
        return this.stream.write(this.endline(node));
      };

      XMLStreamWriter.prototype.docType = function (node, level) {
        var child, i, len, ref;
        level || (level = 0);
        this.stream.write(this.space(level));
        this.stream.write('<!DOCTYPE ' + node.root().name);
        if (node.pubID && node.sysID) {
          this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
        } else if (node.sysID) {
          this.stream.write(' SYSTEM "' + node.sysID + '"');
        }
        if (node.children.length > 0) {
          this.stream.write(' [');
          this.stream.write(this.endline(node));
          ref = node.children;
          for (i = 0, len = ref.length; i < len; i++) {
            child = ref[i];
            switch (false) {
              case !(child instanceof XMLDTDAttList):
                this.dtdAttList(child, level + 1);
                break;
              case !(child instanceof XMLDTDElement):
                this.dtdElement(child, level + 1);
                break;
              case !(child instanceof XMLDTDEntity):
                this.dtdEntity(child, level + 1);
                break;
              case !(child instanceof XMLDTDNotation):
                this.dtdNotation(child, level + 1);
                break;
              case !(child instanceof XMLCData):
                this.cdata(child, level + 1);
                break;
              case !(child instanceof XMLComment):
                this.comment(child, level + 1);
                break;
              case !(child instanceof XMLProcessingInstruction):
                this.processingInstruction(child, level + 1);
                break;
              default:
                throw new Error("Unknown DTD node type: " + child.constructor.name);
            }
          }
          this.stream.write(']');
        }
        this.stream.write(this.spacebeforeslash + '>');
        return this.stream.write(this.endline(node));
      };

      XMLStreamWriter.prototype.element = function (node, level) {
        var att, child, i, len, name, ref, ref1, space;
        level || (level = 0);
        space = this.space(level);
        this.stream.write(space + '<' + node.name);
        ref = node.attributes;
        for (name in ref) {
          if (!hasProp.call(ref, name)) continue;
          att = ref[name];
          this.attribute(att);
        }
        if (node.children.length === 0 || node.children.every(function (e) {
          return e.value === '';
        })) {
          if (this.allowEmpty) {
            this.stream.write('></' + node.name + '>');
          } else {
            this.stream.write(this.spacebeforeslash + '/>');
          }
        } else if (this.pretty && node.children.length === 1 && node.children[0].value != null) {
          this.stream.write('>');
          this.stream.write(node.children[0].value);
          this.stream.write('</' + node.name + '>');
        } else {
          this.stream.write('>' + this.newline);
          ref1 = node.children;
          for (i = 0, len = ref1.length; i < len; i++) {
            child = ref1[i];
            switch (false) {
              case !(child instanceof XMLCData):
                this.cdata(child, level + 1);
                break;
              case !(child instanceof XMLComment):
                this.comment(child, level + 1);
                break;
              case !(child instanceof XMLElement):
                this.element(child, level + 1);
                break;
              case !(child instanceof XMLRaw):
                this.raw(child, level + 1);
                break;
              case !(child instanceof XMLText):
                this.text(child, level + 1);
                break;
              case !(child instanceof XMLProcessingInstruction):
                this.processingInstruction(child, level + 1);
                break;
              default:
                throw new Error("Unknown XML node type: " + child.constructor.name);
            }
          }
          this.stream.write(space + '</' + node.name + '>');
        }
        return this.stream.write(this.endline(node));
      };

      XMLStreamWriter.prototype.processingInstruction = function (node, level) {
        this.stream.write(this.space(level) + '<?' + node.target);
        if (node.value) {
          this.stream.write(' ' + node.value);
        }
        return this.stream.write(this.spacebeforeslash + '?>' + this.endline(node));
      };

      XMLStreamWriter.prototype.raw = function (node, level) {
        return this.stream.write(this.space(level) + node.value + this.endline(node));
      };

      XMLStreamWriter.prototype.text = function (node, level) {
        return this.stream.write(this.space(level) + node.value + this.endline(node));
      };

      XMLStreamWriter.prototype.dtdAttList = function (node, level) {
        this.stream.write(this.space(level) + '<!ATTLIST ' + node.elementName + ' ' + node.attributeName + ' ' + node.attributeType);
        if (node.defaultValueType !== '#DEFAULT') {
          this.stream.write(' ' + node.defaultValueType);
        }
        if (node.defaultValue) {
          this.stream.write(' "' + node.defaultValue + '"');
        }
        return this.stream.write(this.spacebeforeslash + '>' + this.endline(node));
      };

      XMLStreamWriter.prototype.dtdElement = function (node, level) {
        this.stream.write(this.space(level) + '<!ELEMENT ' + node.name + ' ' + node.value);
        return this.stream.write(this.spacebeforeslash + '>' + this.endline(node));
      };

      XMLStreamWriter.prototype.dtdEntity = function (node, level) {
        this.stream.write(this.space(level) + '<!ENTITY');
        if (node.pe) {
          this.stream.write(' %');
        }
        this.stream.write(' ' + node.name);
        if (node.value) {
          this.stream.write(' "' + node.value + '"');
        } else {
          if (node.pubID && node.sysID) {
            this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
          } else if (node.sysID) {
            this.stream.write(' SYSTEM "' + node.sysID + '"');
          }
          if (node.nData) {
            this.stream.write(' NDATA ' + node.nData);
          }
        }
        return this.stream.write(this.spacebeforeslash + '>' + this.endline(node));
      };

      XMLStreamWriter.prototype.dtdNotation = function (node, level) {
        this.stream.write(this.space(level) + '<!NOTATION ' + node.name);
        if (node.pubID && node.sysID) {
          this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
        } else if (node.pubID) {
          this.stream.write(' PUBLIC "' + node.pubID + '"');
        } else if (node.sysID) {
          this.stream.write(' SYSTEM "' + node.sysID + '"');
        }
        return this.stream.write(this.spacebeforeslash + '>' + this.endline(node));
      };

      XMLStreamWriter.prototype.endline = function (node) {
        if (!node.isLastRootNode) {
          return this.newline;
        } else {
          return '';
        }
      };

      return XMLStreamWriter;
    }(XMLWriterBase);
  }).call(undefined);

  /***/
},
/* 65 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  };

  // Generated by CoffeeScript 1.12.7
  (function () {
    "use strict";

    var bom,
        defaults,
        events,
        isEmpty,
        processItem,
        processors,
        sax,
        setImmediate,
        bind = function bind(fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    },
        extend = function extend(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }function ctor() {
        this.constructor = child;
      }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
    },
        hasProp = {}.hasOwnProperty;

    sax = __webpack_require__(66);

    events = __webpack_require__(21);

    bom = __webpack_require__(79);

    processors = __webpack_require__(41);

    setImmediate = __webpack_require__(39).setImmediate;

    defaults = __webpack_require__(23).defaults;

    isEmpty = function isEmpty(thing) {
      return (typeof thing === 'undefined' ? 'undefined' : _typeof(thing)) === "object" && thing != null && Object.keys(thing).length === 0;
    };

    processItem = function processItem(processors, item, key) {
      var i, len, process;
      for (i = 0, len = processors.length; i < len; i++) {
        process = processors[i];
        item = process(item, key);
      }
      return item;
    };

    exports.Parser = function (superClass) {
      extend(Parser, superClass);

      function Parser(opts) {
        this.parseString = bind(this.parseString, this);
        this.reset = bind(this.reset, this);
        this.assignOrPush = bind(this.assignOrPush, this);
        this.processAsync = bind(this.processAsync, this);
        var key, ref, value;
        if (!(this instanceof exports.Parser)) {
          return new exports.Parser(opts);
        }
        this.options = {};
        ref = defaults["0.2"];
        for (key in ref) {
          if (!hasProp.call(ref, key)) continue;
          value = ref[key];
          this.options[key] = value;
        }
        for (key in opts) {
          if (!hasProp.call(opts, key)) continue;
          value = opts[key];
          this.options[key] = value;
        }
        if (this.options.xmlns) {
          this.options.xmlnskey = this.options.attrkey + "ns";
        }
        if (this.options.normalizeTags) {
          if (!this.options.tagNameProcessors) {
            this.options.tagNameProcessors = [];
          }
          this.options.tagNameProcessors.unshift(processors.normalize);
        }
        this.reset();
      }

      Parser.prototype.processAsync = function () {
        var chunk, err;
        try {
          if (this.remaining.length <= this.options.chunkSize) {
            chunk = this.remaining;
            this.remaining = '';
            this.saxParser = this.saxParser.write(chunk);
            return this.saxParser.close();
          } else {
            chunk = this.remaining.substr(0, this.options.chunkSize);
            this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length);
            this.saxParser = this.saxParser.write(chunk);
            return setImmediate(this.processAsync);
          }
        } catch (error1) {
          err = error1;
          if (!this.saxParser.errThrown) {
            this.saxParser.errThrown = true;
            return this.emit(err);
          }
        }
      };

      Parser.prototype.assignOrPush = function (obj, key, newValue) {
        if (!(key in obj)) {
          if (!this.options.explicitArray) {
            return obj[key] = newValue;
          } else {
            return obj[key] = [newValue];
          }
        } else {
          if (!(obj[key] instanceof Array)) {
            obj[key] = [obj[key]];
          }
          return obj[key].push(newValue);
        }
      };

      Parser.prototype.reset = function () {
        var attrkey, charkey, ontext, stack;
        this.removeAllListeners();
        this.saxParser = sax.parser(this.options.strict, {
          trim: false,
          normalize: false,
          xmlns: this.options.xmlns
        });
        this.saxParser.errThrown = false;
        this.saxParser.onerror = function (_this) {
          return function (error) {
            _this.saxParser.resume();
            if (!_this.saxParser.errThrown) {
              _this.saxParser.errThrown = true;
              return _this.emit("error", error);
            }
          };
        }(this);
        this.saxParser.onend = function (_this) {
          return function () {
            if (!_this.saxParser.ended) {
              _this.saxParser.ended = true;
              return _this.emit("end", _this.resultObject);
            }
          };
        }(this);
        this.saxParser.ended = false;
        this.EXPLICIT_CHARKEY = this.options.explicitCharkey;
        this.resultObject = null;
        stack = [];
        attrkey = this.options.attrkey;
        charkey = this.options.charkey;
        this.saxParser.onopentag = function (_this) {
          return function (node) {
            var key, newValue, obj, processedKey, ref;
            obj = {};
            obj[charkey] = "";
            if (!_this.options.ignoreAttrs) {
              ref = node.attributes;
              for (key in ref) {
                if (!hasProp.call(ref, key)) continue;
                if (!(attrkey in obj) && !_this.options.mergeAttrs) {
                  obj[attrkey] = {};
                }
                newValue = _this.options.attrValueProcessors ? processItem(_this.options.attrValueProcessors, node.attributes[key], key) : node.attributes[key];
                processedKey = _this.options.attrNameProcessors ? processItem(_this.options.attrNameProcessors, key) : key;
                if (_this.options.mergeAttrs) {
                  _this.assignOrPush(obj, processedKey, newValue);
                } else {
                  obj[attrkey][processedKey] = newValue;
                }
              }
            }
            obj["#name"] = _this.options.tagNameProcessors ? processItem(_this.options.tagNameProcessors, node.name) : node.name;
            if (_this.options.xmlns) {
              obj[_this.options.xmlnskey] = {
                uri: node.uri,
                local: node.local
              };
            }
            return stack.push(obj);
          };
        }(this);
        this.saxParser.onclosetag = function (_this) {
          return function () {
            var cdata, emptyStr, key, node, nodeName, obj, objClone, old, s, xpath;
            obj = stack.pop();
            nodeName = obj["#name"];
            if (!_this.options.explicitChildren || !_this.options.preserveChildrenOrder) {
              delete obj["#name"];
            }
            if (obj.cdata === true) {
              cdata = obj.cdata;
              delete obj.cdata;
            }
            s = stack[stack.length - 1];
            if (obj[charkey].match(/^\s*$/) && !cdata) {
              emptyStr = obj[charkey];
              delete obj[charkey];
            } else {
              if (_this.options.trim) {
                obj[charkey] = obj[charkey].trim();
              }
              if (_this.options.normalize) {
                obj[charkey] = obj[charkey].replace(/\s{2,}/g, " ").trim();
              }
              obj[charkey] = _this.options.valueProcessors ? processItem(_this.options.valueProcessors, obj[charkey], nodeName) : obj[charkey];
              if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
                obj = obj[charkey];
              }
            }
            if (isEmpty(obj)) {
              obj = _this.options.emptyTag !== '' ? _this.options.emptyTag : emptyStr;
            }
            if (_this.options.validator != null) {
              xpath = "/" + function () {
                var i, len, results;
                results = [];
                for (i = 0, len = stack.length; i < len; i++) {
                  node = stack[i];
                  results.push(node["#name"]);
                }
                return results;
              }().concat(nodeName).join("/");
              (function () {
                var err;
                try {
                  return obj = _this.options.validator(xpath, s && s[nodeName], obj);
                } catch (error1) {
                  err = error1;
                  return _this.emit("error", err);
                }
              })();
            }
            if (_this.options.explicitChildren && !_this.options.mergeAttrs && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
              if (!_this.options.preserveChildrenOrder) {
                node = {};
                if (_this.options.attrkey in obj) {
                  node[_this.options.attrkey] = obj[_this.options.attrkey];
                  delete obj[_this.options.attrkey];
                }
                if (!_this.options.charsAsChildren && _this.options.charkey in obj) {
                  node[_this.options.charkey] = obj[_this.options.charkey];
                  delete obj[_this.options.charkey];
                }
                if (Object.getOwnPropertyNames(obj).length > 0) {
                  node[_this.options.childkey] = obj;
                }
                obj = node;
              } else if (s) {
                s[_this.options.childkey] = s[_this.options.childkey] || [];
                objClone = {};
                for (key in obj) {
                  if (!hasProp.call(obj, key)) continue;
                  objClone[key] = obj[key];
                }
                s[_this.options.childkey].push(objClone);
                delete obj["#name"];
                if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
                  obj = obj[charkey];
                }
              }
            }
            if (stack.length > 0) {
              return _this.assignOrPush(s, nodeName, obj);
            } else {
              if (_this.options.explicitRoot) {
                old = obj;
                obj = {};
                obj[nodeName] = old;
              }
              _this.resultObject = obj;
              _this.saxParser.ended = true;
              return _this.emit("end", _this.resultObject);
            }
          };
        }(this);
        ontext = function (_this) {
          return function (text) {
            var charChild, s;
            s = stack[stack.length - 1];
            if (s) {
              s[charkey] += text;
              if (_this.options.explicitChildren && _this.options.preserveChildrenOrder && _this.options.charsAsChildren && (_this.options.includeWhiteChars || text.replace(/\\n/g, '').trim() !== '')) {
                s[_this.options.childkey] = s[_this.options.childkey] || [];
                charChild = {
                  '#name': '__text__'
                };
                charChild[charkey] = text;
                if (_this.options.normalize) {
                  charChild[charkey] = charChild[charkey].replace(/\s{2,}/g, " ").trim();
                }
                s[_this.options.childkey].push(charChild);
              }
              return s;
            }
          };
        }(this);
        this.saxParser.ontext = ontext;
        return this.saxParser.oncdata = function (_this) {
          return function (text) {
            var s;
            s = ontext(text);
            if (s) {
              return s.cdata = true;
            }
          };
        }(this);
      };

      Parser.prototype.parseString = function (str, cb) {
        var err;
        if (cb != null && typeof cb === "function") {
          this.on("end", function (result) {
            this.reset();
            return cb(null, result);
          });
          this.on("error", function (err) {
            this.reset();
            return cb(err);
          });
        }
        try {
          str = str.toString();
          if (str.trim() === '') {
            this.emit("end", null);
            return true;
          }
          str = bom.stripBOM(str);
          if (this.options.async) {
            this.remaining = str;
            setImmediate(this.processAsync);
            return this.saxParser;
          }
          return this.saxParser.write(str).close();
        } catch (error1) {
          err = error1;
          if (!(this.saxParser.errThrown || this.saxParser.ended)) {
            this.emit('error', err);
            return this.saxParser.errThrown = true;
          } else if (this.saxParser.ended) {
            throw err;
          }
        }
      };

      return Parser;
    }(events.EventEmitter);

    exports.parseString = function (str, a, b) {
      var cb, options, parser;
      if (b != null) {
        if (typeof b === 'function') {
          cb = b;
        }
        if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
          options = a;
        }
      } else {
        if (typeof a === 'function') {
          cb = a;
        }
        options = {};
      }
      parser = new exports.Parser(options);
      return parser.parseString(str, cb);
    };
  }).call(undefined);

  /***/
},
/* 66 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  /* WEBPACK VAR INJECTION */
  (function (Buffer) {

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
      return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };

    ;(function (sax) {
      // wrapper for non-node envs
      sax.parser = function (strict, opt) {
        return new SAXParser(strict, opt);
      };
      sax.SAXParser = SAXParser;
      sax.SAXStream = SAXStream;
      sax.createStream = createStream;

      // When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.
      // When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),
      // since that's the earliest that a buffer overrun could occur.  This way, checks are
      // as rare as required, but as often as necessary to ensure never crossing this bound.
      // Furthermore, buffers are only tested at most once per write(), so passing a very
      // large string into write() might have undesirable effects, but this is manageable by
      // the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme
      // edge case, result in creating at most one complete copy of the string passed in.
      // Set to Infinity to have unlimited buffers.
      sax.MAX_BUFFER_LENGTH = 64 * 1024;

      var buffers = ['comment', 'sgmlDecl', 'textNode', 'tagName', 'doctype', 'procInstName', 'procInstBody', 'entity', 'attribName', 'attribValue', 'cdata', 'script'];

      sax.EVENTS = ['text', 'processinginstruction', 'sgmldeclaration', 'doctype', 'comment', 'opentagstart', 'attribute', 'opentag', 'closetag', 'opencdata', 'cdata', 'closecdata', 'error', 'end', 'ready', 'script', 'opennamespace', 'closenamespace'];

      function SAXParser(strict, opt) {
        if (!(this instanceof SAXParser)) {
          return new SAXParser(strict, opt);
        }

        var parser = this;
        clearBuffers(parser);
        parser.q = parser.c = '';
        parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH;
        parser.opt = opt || {};
        parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags;
        parser.looseCase = parser.opt.lowercase ? 'toLowerCase' : 'toUpperCase';
        parser.tags = [];
        parser.closed = parser.closedRoot = parser.sawRoot = false;
        parser.tag = parser.error = null;
        parser.strict = !!strict;
        parser.noscript = !!(strict || parser.opt.noscript);
        parser.state = S.BEGIN;
        parser.strictEntities = parser.opt.strictEntities;
        parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES);
        parser.attribList = [];

        // namespaces form a prototype chain.
        // it always points at the current tag,
        // which protos to its parent tag.
        if (parser.opt.xmlns) {
          parser.ns = Object.create(rootNS);
        }

        // mostly just for error reporting
        parser.trackPosition = parser.opt.position !== false;
        if (parser.trackPosition) {
          parser.position = parser.line = parser.column = 0;
        }
        emit(parser, 'onready');
      }

      if (!Object.create) {
        Object.create = function (o) {
          function F() {}
          F.prototype = o;
          var newf = new F();
          return newf;
        };
      }

      if (!Object.keys) {
        Object.keys = function (o) {
          var a = [];
          for (var i in o) {
            if (o.hasOwnProperty(i)) a.push(i);
          }return a;
        };
      }

      function checkBufferLength(parser) {
        var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10);
        var maxActual = 0;
        for (var i = 0, l = buffers.length; i < l; i++) {
          var len = parser[buffers[i]].length;
          if (len > maxAllowed) {
            // Text/cdata nodes can get big, and since they're buffered,
            // we can get here under normal conditions.
            // Avoid issues by emitting the text node now,
            // so at least it won't get any bigger.
            switch (buffers[i]) {
              case 'textNode':
                closeText(parser);
                break;

              case 'cdata':
                emitNode(parser, 'oncdata', parser.cdata);
                parser.cdata = '';
                break;

              case 'script':
                emitNode(parser, 'onscript', parser.script);
                parser.script = '';
                break;

              default:
                error(parser, 'Max buffer length exceeded: ' + buffers[i]);
            }
          }
          maxActual = Math.max(maxActual, len);
        }
        // schedule the next check for the earliest possible buffer overrun.
        var m = sax.MAX_BUFFER_LENGTH - maxActual;
        parser.bufferCheckPosition = m + parser.position;
      }

      function clearBuffers(parser) {
        for (var i = 0, l = buffers.length; i < l; i++) {
          parser[buffers[i]] = '';
        }
      }

      function flushBuffers(parser) {
        closeText(parser);
        if (parser.cdata !== '') {
          emitNode(parser, 'oncdata', parser.cdata);
          parser.cdata = '';
        }
        if (parser.script !== '') {
          emitNode(parser, 'onscript', parser.script);
          parser.script = '';
        }
      }

      SAXParser.prototype = {
        end: function end() {
          _end(this);
        },
        write: write,
        resume: function resume() {
          this.error = null;return this;
        },
        close: function close() {
          return this.write(null);
        },
        flush: function flush() {
          flushBuffers(this);
        }
      };

      var Stream;
      try {
        Stream = __webpack_require__(69).Stream;
      } catch (ex) {
        Stream = function Stream() {};
      }

      var streamWraps = sax.EVENTS.filter(function (ev) {
        return ev !== 'error' && ev !== 'end';
      });

      function createStream(strict, opt) {
        return new SAXStream(strict, opt);
      }

      function SAXStream(strict, opt) {
        if (!(this instanceof SAXStream)) {
          return new SAXStream(strict, opt);
        }

        Stream.apply(this);

        this._parser = new SAXParser(strict, opt);
        this.writable = true;
        this.readable = true;

        var me = this;

        this._parser.onend = function () {
          me.emit('end');
        };

        this._parser.onerror = function (er) {
          me.emit('error', er);

          // if didn't throw, then means error was handled.
          // go ahead and clear error, so we can write again.
          me._parser.error = null;
        };

        this._decoder = null;

        streamWraps.forEach(function (ev) {
          Object.defineProperty(me, 'on' + ev, {
            get: function get() {
              return me._parser['on' + ev];
            },
            set: function set(h) {
              if (!h) {
                me.removeAllListeners(ev);
                me._parser['on' + ev] = h;
                return h;
              }
              me.on(ev, h);
            },
            enumerable: true,
            configurable: false
          });
        });
      }

      SAXStream.prototype = Object.create(Stream.prototype, {
        constructor: {
          value: SAXStream
        }
      });

      SAXStream.prototype.write = function (data) {
        if (typeof Buffer === 'function' && typeof Buffer.isBuffer === 'function' && Buffer.isBuffer(data)) {
          if (!this._decoder) {
            var SD = __webpack_require__(27).StringDecoder;
            this._decoder = new SD('utf8');
          }
          data = this._decoder.write(data);
        }

        this._parser.write(data.toString());
        this.emit('data', data);
        return true;
      };

      SAXStream.prototype.end = function (chunk) {
        if (chunk && chunk.length) {
          this.write(chunk);
        }
        this._parser.end();
        return true;
      };

      SAXStream.prototype.on = function (ev, handler) {
        var me = this;
        if (!me._parser['on' + ev] && streamWraps.indexOf(ev) !== -1) {
          me._parser['on' + ev] = function () {
            var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
            args.splice(0, 0, ev);
            me.emit.apply(me, args);
          };
        }

        return Stream.prototype.on.call(me, ev, handler);
      };

      // this really needs to be replaced with character classes.
      // XML allows all manner of ridiculous numbers and digits.
      var CDATA = '[CDATA[';
      var DOCTYPE = 'DOCTYPE';
      var XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace';
      var XMLNS_NAMESPACE = 'http://www.w3.org/2000/xmlns/';
      var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE

        // http://www.w3.org/TR/REC-xml/#NT-NameStartChar
        // This implementation works on strings, a single character at a time
        // as such, it cannot ever support astral-plane characters (10000-EFFFF)
        // without a significant breaking change to either this  parser, or the
        // JavaScript language.  Implementation of an emoji-capable xml parser
        // is left as an exercise for the reader.
      };var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;

      var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;

      var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;

      function isWhitespace(c) {
        return c === ' ' || c === '\n' || c === '\r' || c === '\t';
      }

      function isQuote(c) {
        return c === '"' || c === '\'';
      }

      function isAttribEnd(c) {
        return c === '>' || isWhitespace(c);
      }

      function isMatch(regex, c) {
        return regex.test(c);
      }

      function notMatch(regex, c) {
        return !isMatch(regex, c);
      }

      var S = 0;
      sax.STATE = {
        BEGIN: S++, // leading byte order mark or whitespace
        BEGIN_WHITESPACE: S++, // leading whitespace
        TEXT: S++, // general stuff
        TEXT_ENTITY: S++, // &amp and such.
        OPEN_WAKA: S++, // <
        SGML_DECL: S++, // <!BLARG
        SGML_DECL_QUOTED: S++, // <!BLARG foo "bar
        DOCTYPE: S++, // <!DOCTYPE
        DOCTYPE_QUOTED: S++, // <!DOCTYPE "//blah
        DOCTYPE_DTD: S++, // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: S++, // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: S++, // <!-
        COMMENT: S++, // <!--
        COMMENT_ENDING: S++, // <!-- blah -
        COMMENT_ENDED: S++, // <!-- blah --
        CDATA: S++, // <![CDATA[ something
        CDATA_ENDING: S++, // ]
        CDATA_ENDING_2: S++, // ]]
        PROC_INST: S++, // <?hi
        PROC_INST_BODY: S++, // <?hi there
        PROC_INST_ENDING: S++, // <?hi "there" ?
        OPEN_TAG: S++, // <strong
        OPEN_TAG_SLASH: S++, // <strong /
        ATTRIB: S++, // <a
        ATTRIB_NAME: S++, // <a foo
        ATTRIB_NAME_SAW_WHITE: S++, // <a foo _
        ATTRIB_VALUE: S++, // <a foo=
        ATTRIB_VALUE_QUOTED: S++, // <a foo="bar
        ATTRIB_VALUE_CLOSED: S++, // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: S++, // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: S++, // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: S++, // <foo bar=&quot
        CLOSE_TAG: S++, // </a
        CLOSE_TAG_SAW_WHITE: S++, // </a   >
        SCRIPT: S++, // <script> ...
        SCRIPT_ENDING: S++ // <script> ... <
      };

      sax.XML_ENTITIES = {
        'amp': '&',
        'gt': '>',
        'lt': '<',
        'quot': '"',
        'apos': "'"
      };

      sax.ENTITIES = {
        'amp': '&',
        'gt': '>',
        'lt': '<',
        'quot': '"',
        'apos': "'",
        'AElig': 198,
        'Aacute': 193,
        'Acirc': 194,
        'Agrave': 192,
        'Aring': 197,
        'Atilde': 195,
        'Auml': 196,
        'Ccedil': 199,
        'ETH': 208,
        'Eacute': 201,
        'Ecirc': 202,
        'Egrave': 200,
        'Euml': 203,
        'Iacute': 205,
        'Icirc': 206,
        'Igrave': 204,
        'Iuml': 207,
        'Ntilde': 209,
        'Oacute': 211,
        'Ocirc': 212,
        'Ograve': 210,
        'Oslash': 216,
        'Otilde': 213,
        'Ouml': 214,
        'THORN': 222,
        'Uacute': 218,
        'Ucirc': 219,
        'Ugrave': 217,
        'Uuml': 220,
        'Yacute': 221,
        'aacute': 225,
        'acirc': 226,
        'aelig': 230,
        'agrave': 224,
        'aring': 229,
        'atilde': 227,
        'auml': 228,
        'ccedil': 231,
        'eacute': 233,
        'ecirc': 234,
        'egrave': 232,
        'eth': 240,
        'euml': 235,
        'iacute': 237,
        'icirc': 238,
        'igrave': 236,
        'iuml': 239,
        'ntilde': 241,
        'oacute': 243,
        'ocirc': 244,
        'ograve': 242,
        'oslash': 248,
        'otilde': 245,
        'ouml': 246,
        'szlig': 223,
        'thorn': 254,
        'uacute': 250,
        'ucirc': 251,
        'ugrave': 249,
        'uuml': 252,
        'yacute': 253,
        'yuml': 255,
        'copy': 169,
        'reg': 174,
        'nbsp': 160,
        'iexcl': 161,
        'cent': 162,
        'pound': 163,
        'curren': 164,
        'yen': 165,
        'brvbar': 166,
        'sect': 167,
        'uml': 168,
        'ordf': 170,
        'laquo': 171,
        'not': 172,
        'shy': 173,
        'macr': 175,
        'deg': 176,
        'plusmn': 177,
        'sup1': 185,
        'sup2': 178,
        'sup3': 179,
        'acute': 180,
        'micro': 181,
        'para': 182,
        'middot': 183,
        'cedil': 184,
        'ordm': 186,
        'raquo': 187,
        'frac14': 188,
        'frac12': 189,
        'frac34': 190,
        'iquest': 191,
        'times': 215,
        'divide': 247,
        'OElig': 338,
        'oelig': 339,
        'Scaron': 352,
        'scaron': 353,
        'Yuml': 376,
        'fnof': 402,
        'circ': 710,
        'tilde': 732,
        'Alpha': 913,
        'Beta': 914,
        'Gamma': 915,
        'Delta': 916,
        'Epsilon': 917,
        'Zeta': 918,
        'Eta': 919,
        'Theta': 920,
        'Iota': 921,
        'Kappa': 922,
        'Lambda': 923,
        'Mu': 924,
        'Nu': 925,
        'Xi': 926,
        'Omicron': 927,
        'Pi': 928,
        'Rho': 929,
        'Sigma': 931,
        'Tau': 932,
        'Upsilon': 933,
        'Phi': 934,
        'Chi': 935,
        'Psi': 936,
        'Omega': 937,
        'alpha': 945,
        'beta': 946,
        'gamma': 947,
        'delta': 948,
        'epsilon': 949,
        'zeta': 950,
        'eta': 951,
        'theta': 952,
        'iota': 953,
        'kappa': 954,
        'lambda': 955,
        'mu': 956,
        'nu': 957,
        'xi': 958,
        'omicron': 959,
        'pi': 960,
        'rho': 961,
        'sigmaf': 962,
        'sigma': 963,
        'tau': 964,
        'upsilon': 965,
        'phi': 966,
        'chi': 967,
        'psi': 968,
        'omega': 969,
        'thetasym': 977,
        'upsih': 978,
        'piv': 982,
        'ensp': 8194,
        'emsp': 8195,
        'thinsp': 8201,
        'zwnj': 8204,
        'zwj': 8205,
        'lrm': 8206,
        'rlm': 8207,
        'ndash': 8211,
        'mdash': 8212,
        'lsquo': 8216,
        'rsquo': 8217,
        'sbquo': 8218,
        'ldquo': 8220,
        'rdquo': 8221,
        'bdquo': 8222,
        'dagger': 8224,
        'Dagger': 8225,
        'bull': 8226,
        'hellip': 8230,
        'permil': 8240,
        'prime': 8242,
        'Prime': 8243,
        'lsaquo': 8249,
        'rsaquo': 8250,
        'oline': 8254,
        'frasl': 8260,
        'euro': 8364,
        'image': 8465,
        'weierp': 8472,
        'real': 8476,
        'trade': 8482,
        'alefsym': 8501,
        'larr': 8592,
        'uarr': 8593,
        'rarr': 8594,
        'darr': 8595,
        'harr': 8596,
        'crarr': 8629,
        'lArr': 8656,
        'uArr': 8657,
        'rArr': 8658,
        'dArr': 8659,
        'hArr': 8660,
        'forall': 8704,
        'part': 8706,
        'exist': 8707,
        'empty': 8709,
        'nabla': 8711,
        'isin': 8712,
        'notin': 8713,
        'ni': 8715,
        'prod': 8719,
        'sum': 8721,
        'minus': 8722,
        'lowast': 8727,
        'radic': 8730,
        'prop': 8733,
        'infin': 8734,
        'ang': 8736,
        'and': 8743,
        'or': 8744,
        'cap': 8745,
        'cup': 8746,
        'int': 8747,
        'there4': 8756,
        'sim': 8764,
        'cong': 8773,
        'asymp': 8776,
        'ne': 8800,
        'equiv': 8801,
        'le': 8804,
        'ge': 8805,
        'sub': 8834,
        'sup': 8835,
        'nsub': 8836,
        'sube': 8838,
        'supe': 8839,
        'oplus': 8853,
        'otimes': 8855,
        'perp': 8869,
        'sdot': 8901,
        'lceil': 8968,
        'rceil': 8969,
        'lfloor': 8970,
        'rfloor': 8971,
        'lang': 9001,
        'rang': 9002,
        'loz': 9674,
        'spades': 9824,
        'clubs': 9827,
        'hearts': 9829,
        'diams': 9830
      };

      Object.keys(sax.ENTITIES).forEach(function (key) {
        var e = sax.ENTITIES[key];
        var s = typeof e === 'number' ? String.fromCharCode(e) : e;
        sax.ENTITIES[key] = s;
      });

      for (var s in sax.STATE) {
        sax.STATE[sax.STATE[s]] = s;
      }

      // shorthand
      S = sax.STATE;

      function emit(parser, event, data) {
        parser[event] && parser[event](data);
      }

      function emitNode(parser, nodeType, data) {
        if (parser.textNode) closeText(parser);
        emit(parser, nodeType, data);
      }

      function closeText(parser) {
        parser.textNode = textopts(parser.opt, parser.textNode);
        if (parser.textNode) emit(parser, 'ontext', parser.textNode);
        parser.textNode = '';
      }

      function textopts(opt, text) {
        if (opt.trim) text = text.trim();
        if (opt.normalize) text = text.replace(/\s+/g, ' ');
        return text;
      }

      function error(parser, er) {
        closeText(parser);
        if (parser.trackPosition) {
          er += '\nLine: ' + parser.line + '\nColumn: ' + parser.column + '\nChar: ' + parser.c;
        }
        er = new Error(er);
        parser.error = er;
        emit(parser, 'onerror', er);
        return parser;
      }

      function _end(parser) {
        if (parser.sawRoot && !parser.closedRoot) strictFail(parser, 'Unclosed root tag');
        if (parser.state !== S.BEGIN && parser.state !== S.BEGIN_WHITESPACE && parser.state !== S.TEXT) {
          error(parser, 'Unexpected end');
        }
        closeText(parser);
        parser.c = '';
        parser.closed = true;
        emit(parser, 'onend');
        SAXParser.call(parser, parser.strict, parser.opt);
        return parser;
      }

      function strictFail(parser, message) {
        if ((typeof parser === 'undefined' ? 'undefined' : _typeof(parser)) !== 'object' || !(parser instanceof SAXParser)) {
          throw new Error('bad call to strictFail');
        }
        if (parser.strict) {
          error(parser, message);
        }
      }

      function newTag(parser) {
        if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]();
        var parent = parser.tags[parser.tags.length - 1] || parser;
        var tag = parser.tag = { name: parser.tagName, attributes: {}

          // will be overridden if tag contails an xmlns="foo" or xmlns:foo="bar"
        };if (parser.opt.xmlns) {
          tag.ns = parent.ns;
        }
        parser.attribList.length = 0;
        emitNode(parser, 'onopentagstart', tag);
      }

      function qname(name, attribute) {
        var i = name.indexOf(':');
        var qualName = i < 0 ? ['', name] : name.split(':');
        var prefix = qualName[0];
        var local = qualName[1];

        // <x "xmlns"="http://foo">
        if (attribute && name === 'xmlns') {
          prefix = 'xmlns';
          local = '';
        }

        return { prefix: prefix, local: local };
      }

      function attrib(parser) {
        if (!parser.strict) {
          parser.attribName = parser.attribName[parser.looseCase]();
        }

        if (parser.attribList.indexOf(parser.attribName) !== -1 || parser.tag.attributes.hasOwnProperty(parser.attribName)) {
          parser.attribName = parser.attribValue = '';
          return;
        }

        if (parser.opt.xmlns) {
          var qn = qname(parser.attribName, true);
          var prefix = qn.prefix;
          var local = qn.local;

          if (prefix === 'xmlns') {
            // namespace binding attribute. push the binding into scope
            if (local === 'xml' && parser.attribValue !== XML_NAMESPACE) {
              strictFail(parser, 'xml: prefix must be bound to ' + XML_NAMESPACE + '\n' + 'Actual: ' + parser.attribValue);
            } else if (local === 'xmlns' && parser.attribValue !== XMLNS_NAMESPACE) {
              strictFail(parser, 'xmlns: prefix must be bound to ' + XMLNS_NAMESPACE + '\n' + 'Actual: ' + parser.attribValue);
            } else {
              var tag = parser.tag;
              var parent = parser.tags[parser.tags.length - 1] || parser;
              if (tag.ns === parent.ns) {
                tag.ns = Object.create(parent.ns);
              }
              tag.ns[local] = parser.attribValue;
            }
          }

          // defer onattribute events until all attributes have been seen
          // so any new bindings can take effect. preserve attribute order
          // so deferred events can be emitted in document order
          parser.attribList.push([parser.attribName, parser.attribValue]);
        } else {
          // in non-xmlns mode, we can emit the event right away
          parser.tag.attributes[parser.attribName] = parser.attribValue;
          emitNode(parser, 'onattribute', {
            name: parser.attribName,
            value: parser.attribValue
          });
        }

        parser.attribName = parser.attribValue = '';
      }

      function openTag(parser, selfClosing) {
        if (parser.opt.xmlns) {
          // emit namespace binding events
          var tag = parser.tag;

          // add namespace info to tag
          var qn = qname(parser.tagName);
          tag.prefix = qn.prefix;
          tag.local = qn.local;
          tag.uri = tag.ns[qn.prefix] || '';

          if (tag.prefix && !tag.uri) {
            strictFail(parser, 'Unbound namespace prefix: ' + JSON.stringify(parser.tagName));
            tag.uri = qn.prefix;
          }

          var parent = parser.tags[parser.tags.length - 1] || parser;
          if (tag.ns && parent.ns !== tag.ns) {
            Object.keys(tag.ns).forEach(function (p) {
              emitNode(parser, 'onopennamespace', {
                prefix: p,
                uri: tag.ns[p]
              });
            });
          }

          // handle deferred onattribute events
          // Note: do not apply default ns to attributes:
          //   http://www.w3.org/TR/REC-xml-names/#defaulting
          for (var i = 0, l = parser.attribList.length; i < l; i++) {
            var nv = parser.attribList[i];
            var name = nv[0];
            var value = nv[1];
            var qualName = qname(name, true);
            var prefix = qualName.prefix;
            var local = qualName.local;
            var uri = prefix === '' ? '' : tag.ns[prefix] || '';
            var a = {
              name: name,
              value: value,
              prefix: prefix,
              local: local,
              uri: uri

              // if there's any attributes with an undefined namespace,
              // then fail on them now.
            };if (prefix && prefix !== 'xmlns' && !uri) {
              strictFail(parser, 'Unbound namespace prefix: ' + JSON.stringify(prefix));
              a.uri = prefix;
            }
            parser.tag.attributes[name] = a;
            emitNode(parser, 'onattribute', a);
          }
          parser.attribList.length = 0;
        }

        parser.tag.isSelfClosing = !!selfClosing;

        // process the tag
        parser.sawRoot = true;
        parser.tags.push(parser.tag);
        emitNode(parser, 'onopentag', parser.tag);
        if (!selfClosing) {
          // special case for <script> in non-strict mode.
          if (!parser.noscript && parser.tagName.toLowerCase() === 'script') {
            parser.state = S.SCRIPT;
          } else {
            parser.state = S.TEXT;
          }
          parser.tag = null;
          parser.tagName = '';
        }
        parser.attribName = parser.attribValue = '';
        parser.attribList.length = 0;
      }

      function closeTag(parser) {
        if (!parser.tagName) {
          strictFail(parser, 'Weird empty close tag.');
          parser.textNode += '</>';
          parser.state = S.TEXT;
          return;
        }

        if (parser.script) {
          if (parser.tagName !== 'script') {
            parser.script += '</' + parser.tagName + '>';
            parser.tagName = '';
            parser.state = S.SCRIPT;
            return;
          }
          emitNode(parser, 'onscript', parser.script);
          parser.script = '';
        }

        // first make sure that the closing tag actually exists.
        // <a><b></c></b></a> will close everything, otherwise.
        var t = parser.tags.length;
        var tagName = parser.tagName;
        if (!parser.strict) {
          tagName = tagName[parser.looseCase]();
        }
        var closeTo = tagName;
        while (t--) {
          var close = parser.tags[t];
          if (close.name !== closeTo) {
            // fail the first time in strict mode
            strictFail(parser, 'Unexpected close tag');
          } else {
            break;
          }
        }

        // didn't find it.  we already failed for strict, so just abort.
        if (t < 0) {
          strictFail(parser, 'Unmatched closing tag: ' + parser.tagName);
          parser.textNode += '</' + parser.tagName + '>';
          parser.state = S.TEXT;
          return;
        }
        parser.tagName = tagName;
        var s = parser.tags.length;
        while (s-- > t) {
          var tag = parser.tag = parser.tags.pop();
          parser.tagName = parser.tag.name;
          emitNode(parser, 'onclosetag', parser.tagName);

          var x = {};
          for (var i in tag.ns) {
            x[i] = tag.ns[i];
          }

          var parent = parser.tags[parser.tags.length - 1] || parser;
          if (parser.opt.xmlns && tag.ns !== parent.ns) {
            // remove namespace bindings introduced by tag
            Object.keys(tag.ns).forEach(function (p) {
              var n = tag.ns[p];
              emitNode(parser, 'onclosenamespace', { prefix: p, uri: n });
            });
          }
        }
        if (t === 0) parser.closedRoot = true;
        parser.tagName = parser.attribValue = parser.attribName = '';
        parser.attribList.length = 0;
        parser.state = S.TEXT;
      }

      function parseEntity(parser) {
        var entity = parser.entity;
        var entityLC = entity.toLowerCase();
        var num;
        var numStr = '';

        if (parser.ENTITIES[entity]) {
          return parser.ENTITIES[entity];
        }
        if (parser.ENTITIES[entityLC]) {
          return parser.ENTITIES[entityLC];
        }
        entity = entityLC;
        if (entity.charAt(0) === '#') {
          if (entity.charAt(1) === 'x') {
            entity = entity.slice(2);
            num = parseInt(entity, 16);
            numStr = num.toString(16);
          } else {
            entity = entity.slice(1);
            num = parseInt(entity, 10);
            numStr = num.toString(10);
          }
        }
        entity = entity.replace(/^0+/, '');
        if (isNaN(num) || numStr.toLowerCase() !== entity) {
          strictFail(parser, 'Invalid character entity');
          return '&' + parser.entity + ';';
        }

        return String.fromCodePoint(num);
      }

      function beginWhiteSpace(parser, c) {
        if (c === '<') {
          parser.state = S.OPEN_WAKA;
          parser.startTagPosition = parser.position;
        } else if (!isWhitespace(c)) {
          // have to process this as a text node.
          // weird, but happens.
          strictFail(parser, 'Non-whitespace before first tag.');
          parser.textNode = c;
          parser.state = S.TEXT;
        }
      }

      function charAt(chunk, i) {
        var result = '';
        if (i < chunk.length) {
          result = chunk.charAt(i);
        }
        return result;
      }

      function write(chunk) {
        var parser = this;
        if (this.error) {
          throw this.error;
        }
        if (parser.closed) {
          return error(parser, 'Cannot write after close. Assign an onready handler.');
        }
        if (chunk === null) {
          return _end(parser);
        }
        if ((typeof chunk === 'undefined' ? 'undefined' : _typeof(chunk)) === 'object') {
          chunk = chunk.toString();
        }
        var i = 0;
        var c = '';
        while (true) {
          c = charAt(chunk, i++);
          parser.c = c;

          if (!c) {
            break;
          }

          if (parser.trackPosition) {
            parser.position++;
            if (c === '\n') {
              parser.line++;
              parser.column = 0;
            } else {
              parser.column++;
            }
          }

          switch (parser.state) {
            case S.BEGIN:
              parser.state = S.BEGIN_WHITESPACE;
              if (c === '\uFEFF') {
                continue;
              }
              beginWhiteSpace(parser, c);
              continue;

            case S.BEGIN_WHITESPACE:
              beginWhiteSpace(parser, c);
              continue;

            case S.TEXT:
              if (parser.sawRoot && !parser.closedRoot) {
                var starti = i - 1;
                while (c && c !== '<' && c !== '&') {
                  c = charAt(chunk, i++);
                  if (c && parser.trackPosition) {
                    parser.position++;
                    if (c === '\n') {
                      parser.line++;
                      parser.column = 0;
                    } else {
                      parser.column++;
                    }
                  }
                }
                parser.textNode += chunk.substring(starti, i - 1);
              }
              if (c === '<' && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
                parser.state = S.OPEN_WAKA;
                parser.startTagPosition = parser.position;
              } else {
                if (!isWhitespace(c) && (!parser.sawRoot || parser.closedRoot)) {
                  strictFail(parser, 'Text data outside of root node.');
                }
                if (c === '&') {
                  parser.state = S.TEXT_ENTITY;
                } else {
                  parser.textNode += c;
                }
              }
              continue;

            case S.SCRIPT:
              // only non-strict
              if (c === '<') {
                parser.state = S.SCRIPT_ENDING;
              } else {
                parser.script += c;
              }
              continue;

            case S.SCRIPT_ENDING:
              if (c === '/') {
                parser.state = S.CLOSE_TAG;
              } else {
                parser.script += '<' + c;
                parser.state = S.SCRIPT;
              }
              continue;

            case S.OPEN_WAKA:
              // either a /, ?, !, or text is coming next.
              if (c === '!') {
                parser.state = S.SGML_DECL;
                parser.sgmlDecl = '';
              } else if (isWhitespace(c)) {
                // wait for it...
              } else if (isMatch(nameStart, c)) {
                parser.state = S.OPEN_TAG;
                parser.tagName = c;
              } else if (c === '/') {
                parser.state = S.CLOSE_TAG;
                parser.tagName = '';
              } else if (c === '?') {
                parser.state = S.PROC_INST;
                parser.procInstName = parser.procInstBody = '';
              } else {
                strictFail(parser, 'Unencoded <');
                // if there was some whitespace, then add that in.
                if (parser.startTagPosition + 1 < parser.position) {
                  var pad = parser.position - parser.startTagPosition;
                  c = new Array(pad).join(' ') + c;
                }
                parser.textNode += '<' + c;
                parser.state = S.TEXT;
              }
              continue;

            case S.SGML_DECL:
              if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
                emitNode(parser, 'onopencdata');
                parser.state = S.CDATA;
                parser.sgmlDecl = '';
                parser.cdata = '';
              } else if (parser.sgmlDecl + c === '--') {
                parser.state = S.COMMENT;
                parser.comment = '';
                parser.sgmlDecl = '';
              } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
                parser.state = S.DOCTYPE;
                if (parser.doctype || parser.sawRoot) {
                  strictFail(parser, 'Inappropriately located doctype declaration');
                }
                parser.doctype = '';
                parser.sgmlDecl = '';
              } else if (c === '>') {
                emitNode(parser, 'onsgmldeclaration', parser.sgmlDecl);
                parser.sgmlDecl = '';
                parser.state = S.TEXT;
              } else if (isQuote(c)) {
                parser.state = S.SGML_DECL_QUOTED;
                parser.sgmlDecl += c;
              } else {
                parser.sgmlDecl += c;
              }
              continue;

            case S.SGML_DECL_QUOTED:
              if (c === parser.q) {
                parser.state = S.SGML_DECL;
                parser.q = '';
              }
              parser.sgmlDecl += c;
              continue;

            case S.DOCTYPE:
              if (c === '>') {
                parser.state = S.TEXT;
                emitNode(parser, 'ondoctype', parser.doctype);
                parser.doctype = true; // just remember that we saw it.
              } else {
                parser.doctype += c;
                if (c === '[') {
                  parser.state = S.DOCTYPE_DTD;
                } else if (isQuote(c)) {
                  parser.state = S.DOCTYPE_QUOTED;
                  parser.q = c;
                }
              }
              continue;

            case S.DOCTYPE_QUOTED:
              parser.doctype += c;
              if (c === parser.q) {
                parser.q = '';
                parser.state = S.DOCTYPE;
              }
              continue;

            case S.DOCTYPE_DTD:
              parser.doctype += c;
              if (c === ']') {
                parser.state = S.DOCTYPE;
              } else if (isQuote(c)) {
                parser.state = S.DOCTYPE_DTD_QUOTED;
                parser.q = c;
              }
              continue;

            case S.DOCTYPE_DTD_QUOTED:
              parser.doctype += c;
              if (c === parser.q) {
                parser.state = S.DOCTYPE_DTD;
                parser.q = '';
              }
              continue;

            case S.COMMENT:
              if (c === '-') {
                parser.state = S.COMMENT_ENDING;
              } else {
                parser.comment += c;
              }
              continue;

            case S.COMMENT_ENDING:
              if (c === '-') {
                parser.state = S.COMMENT_ENDED;
                parser.comment = textopts(parser.opt, parser.comment);
                if (parser.comment) {
                  emitNode(parser, 'oncomment', parser.comment);
                }
                parser.comment = '';
              } else {
                parser.comment += '-' + c;
                parser.state = S.COMMENT;
              }
              continue;

            case S.COMMENT_ENDED:
              if (c !== '>') {
                strictFail(parser, 'Malformed comment');
                // allow <!-- blah -- bloo --> in non-strict mode,
                // which is a comment of " blah -- bloo "
                parser.comment += '--' + c;
                parser.state = S.COMMENT;
              } else {
                parser.state = S.TEXT;
              }
              continue;

            case S.CDATA:
              if (c === ']') {
                parser.state = S.CDATA_ENDING;
              } else {
                parser.cdata += c;
              }
              continue;

            case S.CDATA_ENDING:
              if (c === ']') {
                parser.state = S.CDATA_ENDING_2;
              } else {
                parser.cdata += ']' + c;
                parser.state = S.CDATA;
              }
              continue;

            case S.CDATA_ENDING_2:
              if (c === '>') {
                if (parser.cdata) {
                  emitNode(parser, 'oncdata', parser.cdata);
                }
                emitNode(parser, 'onclosecdata');
                parser.cdata = '';
                parser.state = S.TEXT;
              } else if (c === ']') {
                parser.cdata += ']';
              } else {
                parser.cdata += ']]' + c;
                parser.state = S.CDATA;
              }
              continue;

            case S.PROC_INST:
              if (c === '?') {
                parser.state = S.PROC_INST_ENDING;
              } else if (isWhitespace(c)) {
                parser.state = S.PROC_INST_BODY;
              } else {
                parser.procInstName += c;
              }
              continue;

            case S.PROC_INST_BODY:
              if (!parser.procInstBody && isWhitespace(c)) {
                continue;
              } else if (c === '?') {
                parser.state = S.PROC_INST_ENDING;
              } else {
                parser.procInstBody += c;
              }
              continue;

            case S.PROC_INST_ENDING:
              if (c === '>') {
                emitNode(parser, 'onprocessinginstruction', {
                  name: parser.procInstName,
                  body: parser.procInstBody
                });
                parser.procInstName = parser.procInstBody = '';
                parser.state = S.TEXT;
              } else {
                parser.procInstBody += '?' + c;
                parser.state = S.PROC_INST_BODY;
              }
              continue;

            case S.OPEN_TAG:
              if (isMatch(nameBody, c)) {
                parser.tagName += c;
              } else {
                newTag(parser);
                if (c === '>') {
                  openTag(parser);
                } else if (c === '/') {
                  parser.state = S.OPEN_TAG_SLASH;
                } else {
                  if (!isWhitespace(c)) {
                    strictFail(parser, 'Invalid character in tag name');
                  }
                  parser.state = S.ATTRIB;
                }
              }
              continue;

            case S.OPEN_TAG_SLASH:
              if (c === '>') {
                openTag(parser, true);
                closeTag(parser);
              } else {
                strictFail(parser, 'Forward-slash in opening tag not followed by >');
                parser.state = S.ATTRIB;
              }
              continue;

            case S.ATTRIB:
              // haven't read the attribute name yet.
              if (isWhitespace(c)) {
                continue;
              } else if (c === '>') {
                openTag(parser);
              } else if (c === '/') {
                parser.state = S.OPEN_TAG_SLASH;
              } else if (isMatch(nameStart, c)) {
                parser.attribName = c;
                parser.attribValue = '';
                parser.state = S.ATTRIB_NAME;
              } else {
                strictFail(parser, 'Invalid attribute name');
              }
              continue;

            case S.ATTRIB_NAME:
              if (c === '=') {
                parser.state = S.ATTRIB_VALUE;
              } else if (c === '>') {
                strictFail(parser, 'Attribute without value');
                parser.attribValue = parser.attribName;
                attrib(parser);
                openTag(parser);
              } else if (isWhitespace(c)) {
                parser.state = S.ATTRIB_NAME_SAW_WHITE;
              } else if (isMatch(nameBody, c)) {
                parser.attribName += c;
              } else {
                strictFail(parser, 'Invalid attribute name');
              }
              continue;

            case S.ATTRIB_NAME_SAW_WHITE:
              if (c === '=') {
                parser.state = S.ATTRIB_VALUE;
              } else if (isWhitespace(c)) {
                continue;
              } else {
                strictFail(parser, 'Attribute without value');
                parser.tag.attributes[parser.attribName] = '';
                parser.attribValue = '';
                emitNode(parser, 'onattribute', {
                  name: parser.attribName,
                  value: ''
                });
                parser.attribName = '';
                if (c === '>') {
                  openTag(parser);
                } else if (isMatch(nameStart, c)) {
                  parser.attribName = c;
                  parser.state = S.ATTRIB_NAME;
                } else {
                  strictFail(parser, 'Invalid attribute name');
                  parser.state = S.ATTRIB;
                }
              }
              continue;

            case S.ATTRIB_VALUE:
              if (isWhitespace(c)) {
                continue;
              } else if (isQuote(c)) {
                parser.q = c;
                parser.state = S.ATTRIB_VALUE_QUOTED;
              } else {
                strictFail(parser, 'Unquoted attribute value');
                parser.state = S.ATTRIB_VALUE_UNQUOTED;
                parser.attribValue = c;
              }
              continue;

            case S.ATTRIB_VALUE_QUOTED:
              if (c !== parser.q) {
                if (c === '&') {
                  parser.state = S.ATTRIB_VALUE_ENTITY_Q;
                } else {
                  parser.attribValue += c;
                }
                continue;
              }
              attrib(parser);
              parser.q = '';
              parser.state = S.ATTRIB_VALUE_CLOSED;
              continue;

            case S.ATTRIB_VALUE_CLOSED:
              if (isWhitespace(c)) {
                parser.state = S.ATTRIB;
              } else if (c === '>') {
                openTag(parser);
              } else if (c === '/') {
                parser.state = S.OPEN_TAG_SLASH;
              } else if (isMatch(nameStart, c)) {
                strictFail(parser, 'No whitespace between attributes');
                parser.attribName = c;
                parser.attribValue = '';
                parser.state = S.ATTRIB_NAME;
              } else {
                strictFail(parser, 'Invalid attribute name');
              }
              continue;

            case S.ATTRIB_VALUE_UNQUOTED:
              if (!isAttribEnd(c)) {
                if (c === '&') {
                  parser.state = S.ATTRIB_VALUE_ENTITY_U;
                } else {
                  parser.attribValue += c;
                }
                continue;
              }
              attrib(parser);
              if (c === '>') {
                openTag(parser);
              } else {
                parser.state = S.ATTRIB;
              }
              continue;

            case S.CLOSE_TAG:
              if (!parser.tagName) {
                if (isWhitespace(c)) {
                  continue;
                } else if (notMatch(nameStart, c)) {
                  if (parser.script) {
                    parser.script += '</' + c;
                    parser.state = S.SCRIPT;
                  } else {
                    strictFail(parser, 'Invalid tagname in closing tag.');
                  }
                } else {
                  parser.tagName = c;
                }
              } else if (c === '>') {
                closeTag(parser);
              } else if (isMatch(nameBody, c)) {
                parser.tagName += c;
              } else if (parser.script) {
                parser.script += '</' + parser.tagName;
                parser.tagName = '';
                parser.state = S.SCRIPT;
              } else {
                if (!isWhitespace(c)) {
                  strictFail(parser, 'Invalid tagname in closing tag');
                }
                parser.state = S.CLOSE_TAG_SAW_WHITE;
              }
              continue;

            case S.CLOSE_TAG_SAW_WHITE:
              if (isWhitespace(c)) {
                continue;
              }
              if (c === '>') {
                closeTag(parser);
              } else {
                strictFail(parser, 'Invalid characters in closing tag');
              }
              continue;

            case S.TEXT_ENTITY:
            case S.ATTRIB_VALUE_ENTITY_Q:
            case S.ATTRIB_VALUE_ENTITY_U:
              var returnState;
              var buffer;
              switch (parser.state) {
                case S.TEXT_ENTITY:
                  returnState = S.TEXT;
                  buffer = 'textNode';
                  break;

                case S.ATTRIB_VALUE_ENTITY_Q:
                  returnState = S.ATTRIB_VALUE_QUOTED;
                  buffer = 'attribValue';
                  break;

                case S.ATTRIB_VALUE_ENTITY_U:
                  returnState = S.ATTRIB_VALUE_UNQUOTED;
                  buffer = 'attribValue';
                  break;
              }

              if (c === ';') {
                parser[buffer] += parseEntity(parser);
                parser.entity = '';
                parser.state = returnState;
              } else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) {
                parser.entity += c;
              } else {
                strictFail(parser, 'Invalid character in entity name');
                parser[buffer] += '&' + parser.entity + c;
                parser.entity = '';
                parser.state = returnState;
              }

              continue;

            default:
              throw new Error(parser, 'Unknown state: ' + parser.state);
          }
        } // while

        if (parser.position >= parser.bufferCheckPosition) {
          checkBufferLength(parser);
        }
        return parser;
      }

      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      /* istanbul ignore next */
      if (!String.fromCodePoint) {
        (function () {
          var stringFromCharCode = String.fromCharCode;
          var floor = Math.floor;
          var fromCodePoint = function fromCodePoint() {
            var MAX_SIZE = 0x4000;
            var codeUnits = [];
            var highSurrogate;
            var lowSurrogate;
            var index = -1;
            var length = arguments.length;
            if (!length) {
              return '';
            }
            var result = '';
            while (++index < length) {
              var codePoint = Number(arguments[index]);
              if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
              codePoint < 0 || // not a valid Unicode code point
              codePoint > 0x10FFFF || // not a valid Unicode code point
              floor(codePoint) !== codePoint // not an integer
              ) {
                  throw RangeError('Invalid code point: ' + codePoint);
                }
              if (codePoint <= 0xFFFF) {
                // BMP code point
                codeUnits.push(codePoint);
              } else {
                // Astral code point; split in surrogate halves
                // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                codePoint -= 0x10000;
                highSurrogate = (codePoint >> 10) + 0xD800;
                lowSurrogate = codePoint % 0x400 + 0xDC00;
                codeUnits.push(highSurrogate, lowSurrogate);
              }
              if (index + 1 === length || codeUnits.length > MAX_SIZE) {
                result += stringFromCharCode.apply(null, codeUnits);
                codeUnits.length = 0;
              }
            }
            return result;
          };
          /* istanbul ignore next */
          if (Object.defineProperty) {
            Object.defineProperty(String, 'fromCodePoint', {
              value: fromCodePoint,
              configurable: true,
              writable: true
            });
          } else {
            String.fromCodePoint = fromCodePoint;
          }
        })();
      }
    })(false ? undefined.sax = {} : exports);
    /* WEBPACK VAR INJECTION */
  }).call(exports, __webpack_require__(4).Buffer);

  /***/
},
/* 67 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  exports.byteLength = byteLength;
  exports.toByteArray = toByteArray;
  exports.fromByteArray = fromByteArray;

  var lookup = [];
  var revLookup = [];
  var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }

  revLookup['-'.charCodeAt(0)] = 62;
  revLookup['_'.charCodeAt(0)] = 63;

  function placeHoldersCount(b64) {
    var len = b64.length;
    if (len % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4');
    }

    // the number of equal signs (place holders)
    // if there are two placeholders, than the two characters before it
    // represent one byte
    // if there is only one, then the three characters before it represent 2 bytes
    // this is just a cheap hack to not do indexOf twice
    return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
  }

  function byteLength(b64) {
    // base64 is 4/3 + up to two characters of the original data
    return b64.length * 3 / 4 - placeHoldersCount(b64);
  }

  function toByteArray(b64) {
    var i, l, tmp, placeHolders, arr;
    var len = b64.length;
    placeHolders = placeHoldersCount(b64);

    arr = new Arr(len * 3 / 4 - placeHolders);

    // if there are placeholders, only get up to the last complete 4 chars
    l = placeHolders > 0 ? len - 4 : len;

    var L = 0;

    for (i = 0; i < l; i += 4) {
      tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
      arr[L++] = tmp >> 16 & 0xFF;
      arr[L++] = tmp >> 8 & 0xFF;
      arr[L++] = tmp & 0xFF;
    }

    if (placeHolders === 2) {
      tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
      arr[L++] = tmp & 0xFF;
    } else if (placeHolders === 1) {
      tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
      arr[L++] = tmp >> 8 & 0xFF;
      arr[L++] = tmp & 0xFF;
    }

    return arr;
  }

  function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
  }

  function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for (var i = start; i < end; i += 3) {
      tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
      output.push(tripletToBase64(tmp));
    }
    return output.join('');
  }

  function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
    var output = '';
    var parts = [];
    var maxChunkLength = 16383; // must be multiple of 3

    // go through the array every three bytes, we'll deal with trailing stuff later
    for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
      parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    }

    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
      tmp = uint8[len - 1];
      output += lookup[tmp >> 2];
      output += lookup[tmp << 4 & 0x3F];
      output += '==';
    } else if (extraBytes === 2) {
      tmp = (uint8[len - 2] << 8) + uint8[len - 1];
      output += lookup[tmp >> 10];
      output += lookup[tmp >> 4 & 0x3F];
      output += lookup[tmp << 2 & 0x3F];
      output += '=';
    }

    parts.push(output);

    return parts.join('');
  }

  /***/
},
/* 68 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  exports.read = function (buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];

    i += d;

    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  };

  exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

    value = Math.abs(value);

    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }

      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }

    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

    e = e << mLen | m;
    eLen += mLen;
    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

    buffer[offset + i - d] |= s * 128;
  };

  /***/
},
/* 69 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  module.exports = Stream;

  var EE = __webpack_require__(21).EventEmitter;
  var inherits = __webpack_require__(3);

  inherits(Stream, EE);
  Stream.Readable = __webpack_require__(7);
  Stream.Writable = __webpack_require__(75);
  Stream.Duplex = __webpack_require__(76);
  Stream.Transform = __webpack_require__(77);
  Stream.PassThrough = __webpack_require__(78);

  // Backwards-compat with node 0.4.x
  Stream.Stream = Stream;

  // old-style streams.  Note that the pipe method (the only relevant
  // part of this class) is overridden in the Readable class.

  function Stream() {
    EE.call(this);
  }

  Stream.prototype.pipe = function (dest, options) {
    var source = this;

    function ondata(chunk) {
      if (dest.writable) {
        if (false === dest.write(chunk) && source.pause) {
          source.pause();
        }
      }
    }

    source.on('data', ondata);

    function ondrain() {
      if (source.readable && source.resume) {
        source.resume();
      }
    }

    dest.on('drain', ondrain);

    // If the 'end' option is not supplied, dest.end() will be called when
    // source gets the 'end' or 'close' events.  Only dest.end() once.
    if (!dest._isStdio && (!options || options.end !== false)) {
      source.on('end', onend);
      source.on('close', onclose);
    }

    var didOnEnd = false;
    function onend() {
      if (didOnEnd) return;
      didOnEnd = true;

      dest.end();
    }

    function onclose() {
      if (didOnEnd) return;
      didOnEnd = true;

      if (typeof dest.destroy === 'function') dest.destroy();
    }

    // don't leave dangling pipes when there are errors.
    function onerror(er) {
      cleanup();
      if (EE.listenerCount(this, 'error') === 0) {
        throw er; // Unhandled stream error in pipe.
      }
    }

    source.on('error', onerror);
    dest.on('error', onerror);

    // remove all the event listeners that were added.
    function cleanup() {
      source.removeListener('data', ondata);
      dest.removeListener('drain', ondrain);

      source.removeListener('end', onend);
      source.removeListener('close', onclose);

      source.removeListener('error', onerror);
      dest.removeListener('error', onerror);

      source.removeListener('end', cleanup);
      source.removeListener('close', cleanup);

      dest.removeListener('close', cleanup);
    }

    source.on('end', cleanup);
    source.on('close', cleanup);

    dest.on('close', cleanup);

    dest.emit('pipe', source);

    // Allow for unix-like usage: A.pipe(B).pipe(C)
    return dest;
  };

  /***/
},
/* 70 */
/***/function (module, exports) {

  /* (ignored) */

  /***/},
/* 71 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  /*<replacement>*/

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Buffer = __webpack_require__(25).Buffer;
  /*</replacement>*/

  function copyBuffer(src, target, offset) {
    src.copy(target, offset);
  }

  module.exports = function () {
    function BufferList() {
      _classCallCheck(this, BufferList);

      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    BufferList.prototype.push = function push(v) {
      var entry = { data: v, next: null };
      if (this.length > 0) this.tail.next = entry;else this.head = entry;
      this.tail = entry;
      ++this.length;
    };

    BufferList.prototype.unshift = function unshift(v) {
      var entry = { data: v, next: this.head };
      if (this.length === 0) this.tail = entry;
      this.head = entry;
      ++this.length;
    };

    BufferList.prototype.shift = function shift() {
      if (this.length === 0) return;
      var ret = this.head.data;
      if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
      --this.length;
      return ret;
    };

    BufferList.prototype.clear = function clear() {
      this.head = this.tail = null;
      this.length = 0;
    };

    BufferList.prototype.join = function join(s) {
      if (this.length === 0) return '';
      var p = this.head;
      var ret = '' + p.data;
      while (p = p.next) {
        ret += s + p.data;
      }return ret;
    };

    BufferList.prototype.concat = function concat(n) {
      if (this.length === 0) return Buffer.alloc(0);
      if (this.length === 1) return this.head.data;
      var ret = Buffer.allocUnsafe(n >>> 0);
      var p = this.head;
      var i = 0;
      while (p) {
        copyBuffer(p.data, ret, i);
        i += p.data.length;
        p = p.next;
      }
      return ret;
    };

    return BufferList;
  }();

  /***/
},
/* 72 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  /* WEBPACK VAR INJECTION */
  (function (global, process) {

    (function (global, undefined) {
      "use strict";

      if (global.setImmediate) {
        return;
      }

      var nextHandle = 1; // Spec says greater than zero
      var tasksByHandle = {};
      var currentlyRunningATask = false;
      var doc = global.document;
      var registerImmediate;

      function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
          callback = new Function("" + callback);
        }
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
        }
        // Store and register the task
        var task = { callback: callback, args: args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
      }

      function clearImmediate(handle) {
        delete tasksByHandle[handle];
      }

      function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
          case 0:
            callback();
            break;
          case 1:
            callback(args[0]);
            break;
          case 2:
            callback(args[0], args[1]);
            break;
          case 3:
            callback(args[0], args[1], args[2]);
            break;
          default:
            callback.apply(undefined, args);
            break;
        }
      }

      function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
          // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
          // "too much recursion" error.
          setTimeout(runIfPresent, 0, handle);
        } else {
          var task = tasksByHandle[handle];
          if (task) {
            currentlyRunningATask = true;
            try {
              run(task);
            } finally {
              clearImmediate(handle);
              currentlyRunningATask = false;
            }
          }
        }
      }

      function installNextTickImplementation() {
        registerImmediate = function registerImmediate(handle) {
          process.nextTick(function () {
            runIfPresent(handle);
          });
        };
      }

      function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
          var postMessageIsAsynchronous = true;
          var oldOnMessage = global.onmessage;
          global.onmessage = function () {
            postMessageIsAsynchronous = false;
          };
          global.postMessage("", "*");
          global.onmessage = oldOnMessage;
          return postMessageIsAsynchronous;
        }
      }

      function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function onGlobalMessage(event) {
          if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
            runIfPresent(+event.data.slice(messagePrefix.length));
          }
        };

        if (global.addEventListener) {
          global.addEventListener("message", onGlobalMessage, false);
        } else {
          global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function registerImmediate(handle) {
          global.postMessage(messagePrefix + handle, "*");
        };
      }

      function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
          var handle = event.data;
          runIfPresent(handle);
        };

        registerImmediate = function registerImmediate(handle) {
          channel.port2.postMessage(handle);
        };
      }

      function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function registerImmediate(handle) {
          // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
          // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
          var script = doc.createElement("script");
          script.onreadystatechange = function () {
            runIfPresent(handle);
            script.onreadystatechange = null;
            html.removeChild(script);
            script = null;
          };
          html.appendChild(script);
        };
      }

      function installSetTimeoutImplementation() {
        registerImmediate = function registerImmediate(handle) {
          setTimeout(runIfPresent, 0, handle);
        };
      }

      // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
      var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
      attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

      // Don't get fooled by e.g. browserify environments.
      if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
      } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
      } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
      } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
      } else {
        // For older browsers
        installSetTimeoutImplementation();
      }

      attachTo.setImmediate = setImmediate;
      attachTo.clearImmediate = clearImmediate;
    })(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
    /* WEBPACK VAR INJECTION */
  }).call(exports, __webpack_require__(1), __webpack_require__(6));

  /***/
},
/* 73 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  /* WEBPACK VAR INJECTION */
  (function (global) {

    /**
     * Module exports.
     */

    module.exports = deprecate;

    /**
     * Mark that a method should not be used.
     * Returns a modified function which warns once by default.
     *
     * If `localStorage.noDeprecation = true` is set, then it is a no-op.
     *
     * If `localStorage.throwDeprecation = true` is set, then deprecated functions
     * will throw an Error when invoked.
     *
     * If `localStorage.traceDeprecation = true` is set, then deprecated functions
     * will invoke `console.trace()` instead of `console.error()`.
     *
     * @param {Function} fn - the function to deprecate
     * @param {String} msg - the string to print to the console when `fn` is invoked
     * @returns {Function} a new "deprecated" version of `fn`
     * @api public
     */

    function deprecate(fn, msg) {
      if (config('noDeprecation')) {
        return fn;
      }

      var warned = false;
      function deprecated() {
        if (!warned) {
          if (config('throwDeprecation')) {
            throw new Error(msg);
          } else if (config('traceDeprecation')) {
            console.trace(msg);
          } else {
            console.warn(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }

      return deprecated;
    }

    /**
     * Checks `localStorage` for boolean values for the given `name`.
     *
     * @param {String} name
     * @returns {Boolean}
     * @api private
     */

    function config(name) {
      // accessing global.localStorage can trigger a DOMException in sandboxed iframes
      try {
        if (!global.localStorage) return false;
      } catch (_) {
        return false;
      }
      var val = global.localStorage[name];
      if (null == val) return false;
      return String(val).toLowerCase() === 'true';
    }
    /* WEBPACK VAR INJECTION */
  }).call(exports, __webpack_require__(1));

  /***/
},
/* 74 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  // a passthrough stream.
  // basically just the most minimal sort of Transform stream.
  // Every written chunk gets output as-is.


  module.exports = PassThrough;

  var Transform = __webpack_require__(40);

  /*<replacement>*/
  var util = __webpack_require__(8);
  util.inherits = __webpack_require__(3);
  /*</replacement>*/

  util.inherits(PassThrough, Transform);

  function PassThrough(options) {
    if (!(this instanceof PassThrough)) return new PassThrough(options);

    Transform.call(this, options);
  }

  PassThrough.prototype._transform = function (chunk, encoding, cb) {
    cb(null, chunk);
  };

  /***/
},
/* 75 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  module.exports = __webpack_require__(26);

  /***/
},
/* 76 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  module.exports = __webpack_require__(5);

  /***/
},
/* 77 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  module.exports = __webpack_require__(7).Transform;

  /***/
},
/* 78 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  module.exports = __webpack_require__(7).PassThrough;

  /***/
},
/* 79 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  // Generated by CoffeeScript 1.12.7

  (function () {
    "use strict";

    exports.stripBOM = function (str) {
      if (str[0] === '\uFEFF') {
        return str.substring(1);
      } else {
        return str;
      }
    };
  }).call(undefined);

  /***/
},
/* 80 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  /* WEBPACK VAR INJECTION */
  (function (Buffer, global, process) {

    var capability = __webpack_require__(43);
    var inherits = __webpack_require__(3);
    var response = __webpack_require__(81);
    var stream = __webpack_require__(7);
    var toArrayBuffer = __webpack_require__(82);

    var IncomingMessage = response.IncomingMessage;
    var rStates = response.readyStates;

    function decideMode(preferBinary, useFetch) {
      if (capability.fetch && useFetch) {
        return 'fetch';
      } else if (capability.mozchunkedarraybuffer) {
        return 'moz-chunked-arraybuffer';
      } else if (capability.msstream) {
        return 'ms-stream';
      } else if (capability.arraybuffer && preferBinary) {
        return 'arraybuffer';
      } else if (capability.vbArray && preferBinary) {
        return 'text:vbarray';
      } else {
        return 'text';
      }
    }

    var ClientRequest = module.exports = function (opts) {
      var self = this;
      stream.Writable.call(self);

      self._opts = opts;
      self._body = [];
      self._headers = {};
      if (opts.auth) self.setHeader('Authorization', 'Basic ' + new Buffer(opts.auth).toString('base64'));
      Object.keys(opts.headers).forEach(function (name) {
        self.setHeader(name, opts.headers[name]);
      });

      var preferBinary;
      var useFetch = true;
      if (opts.mode === 'disable-fetch' || 'timeout' in opts) {
        // If the use of XHR should be preferred and includes preserving the 'content-type' header.
        // Force XHR to be used since the Fetch API does not yet support timeouts.
        useFetch = false;
        preferBinary = true;
      } else if (opts.mode === 'prefer-streaming') {
        // If streaming is a high priority but binary compatibility and
        // the accuracy of the 'content-type' header aren't
        preferBinary = false;
      } else if (opts.mode === 'allow-wrong-content-type') {
        // If streaming is more important than preserving the 'content-type' header
        preferBinary = !capability.overrideMimeType;
      } else if (!opts.mode || opts.mode === 'default' || opts.mode === 'prefer-fast') {
        // Use binary if text streaming may corrupt data or the content-type header, or for speed
        preferBinary = true;
      } else {
        throw new Error('Invalid value for opts.mode');
      }
      self._mode = decideMode(preferBinary, useFetch);

      self.on('finish', function () {
        self._onFinish();
      });
    };

    inherits(ClientRequest, stream.Writable);

    ClientRequest.prototype.setHeader = function (name, value) {
      var self = this;
      var lowerName = name.toLowerCase();
      // This check is not necessary, but it prevents warnings from browsers about setting unsafe
      // headers. To be honest I'm not entirely sure hiding these warnings is a good thing, but
      // http-browserify did it, so I will too.
      if (unsafeHeaders.indexOf(lowerName) !== -1) return;

      self._headers[lowerName] = {
        name: name,
        value: value
      };
    };

    ClientRequest.prototype.getHeader = function (name) {
      var header = this._headers[name.toLowerCase()];
      if (header) return header.value;
      return null;
    };

    ClientRequest.prototype.removeHeader = function (name) {
      var self = this;
      delete self._headers[name.toLowerCase()];
    };

    ClientRequest.prototype._onFinish = function () {
      var self = this;

      if (self._destroyed) return;
      var opts = self._opts;

      var headersObj = self._headers;
      var body = null;
      if (opts.method !== 'GET' && opts.method !== 'HEAD') {
        if (capability.blobConstructor) {
          body = new global.Blob(self._body.map(function (buffer) {
            return toArrayBuffer(buffer);
          }), {
            type: (headersObj['content-type'] || {}).value || ''
          });
        } else {
          // get utf8 string
          body = Buffer.concat(self._body).toString();
        }
      }

      // create flattened list of headers
      var headersList = [];
      Object.keys(headersObj).forEach(function (keyName) {
        var name = headersObj[keyName].name;
        var value = headersObj[keyName].value;
        if (Array.isArray(value)) {
          value.forEach(function (v) {
            headersList.push([name, v]);
          });
        } else {
          headersList.push([name, value]);
        }
      });

      if (self._mode === 'fetch') {
        global.fetch(self._opts.url, {
          method: self._opts.method,
          headers: headersList,
          body: body || undefined,
          mode: 'cors',
          credentials: opts.withCredentials ? 'include' : 'same-origin'
        }).then(function (response) {
          self._fetchResponse = response;
          self._connect();
        }, function (reason) {
          self.emit('error', reason);
        });
      } else {
        var xhr = self._xhr = new global.XMLHttpRequest();
        try {
          xhr.open(self._opts.method, self._opts.url, true);
        } catch (err) {
          process.nextTick(function () {
            self.emit('error', err);
          });
          return;
        }

        // Can't set responseType on really old browsers
        if ('responseType' in xhr) xhr.responseType = self._mode.split(':')[0];

        if ('withCredentials' in xhr) xhr.withCredentials = !!opts.withCredentials;

        if (self._mode === 'text' && 'overrideMimeType' in xhr) xhr.overrideMimeType('text/plain; charset=x-user-defined');

        if ('timeout' in opts) {
          xhr.timeout = opts.timeout;
          xhr.ontimeout = function () {
            self.emit('timeout');
          };
        }

        headersList.forEach(function (header) {
          xhr.setRequestHeader(header[0], header[1]);
        });

        self._response = null;
        xhr.onreadystatechange = function () {
          switch (xhr.readyState) {
            case rStates.LOADING:
            case rStates.DONE:
              self._onXHRProgress();
              break;
          }
        };
        // Necessary for streaming in Firefox, since xhr.response is ONLY defined
        // in onprogress, not in onreadystatechange with xhr.readyState = 3
        if (self._mode === 'moz-chunked-arraybuffer') {
          xhr.onprogress = function () {
            self._onXHRProgress();
          };
        }

        xhr.onerror = function () {
          if (self._destroyed) return;
          self.emit('error', new Error('XHR error'));
        };

        try {
          xhr.send(body);
        } catch (err) {
          process.nextTick(function () {
            self.emit('error', err);
          });
          return;
        }
      }
    };

    /**
     * Checks if xhr.status is readable and non-zero, indicating no error.
     * Even though the spec says it should be available in readyState 3,
     * accessing it throws an exception in IE8
     */
    function statusValid(xhr) {
      try {
        var status = xhr.status;
        return status !== null && status !== 0;
      } catch (e) {
        return false;
      }
    }

    ClientRequest.prototype._onXHRProgress = function () {
      var self = this;

      if (!statusValid(self._xhr) || self._destroyed) return;

      if (!self._response) self._connect();

      self._response._onXHRProgress();
    };

    ClientRequest.prototype._connect = function () {
      var self = this;

      if (self._destroyed) return;

      self._response = new IncomingMessage(self._xhr, self._fetchResponse, self._mode);
      self._response.on('error', function (err) {
        self.emit('error', err);
      });

      self.emit('response', self._response);
    };

    ClientRequest.prototype._write = function (chunk, encoding, cb) {
      var self = this;

      self._body.push(chunk);
      cb();
    };

    ClientRequest.prototype.abort = ClientRequest.prototype.destroy = function () {
      var self = this;
      self._destroyed = true;
      if (self._response) self._response._destroyed = true;
      if (self._xhr) self._xhr.abort();
      // Currently, there isn't a way to truly abort a fetch.
      // If you like bikeshedding, see https://github.com/whatwg/fetch/issues/27
    };

    ClientRequest.prototype.end = function (data, encoding, cb) {
      var self = this;
      if (typeof data === 'function') {
        cb = data;
        data = undefined;
      }

      stream.Writable.prototype.end.call(self, data, encoding, cb);
    };

    ClientRequest.prototype.flushHeaders = function () {};
    ClientRequest.prototype.setTimeout = function () {};
    ClientRequest.prototype.setNoDelay = function () {};
    ClientRequest.prototype.setSocketKeepAlive = function () {};

    // Taken from http://www.w3.org/TR/XMLHttpRequest/#the-setrequestheader%28%29-method
    var unsafeHeaders = ['accept-charset', 'accept-encoding', 'access-control-request-headers', 'access-control-request-method', 'connection', 'content-length', 'cookie', 'cookie2', 'date', 'dnt', 'expect', 'host', 'keep-alive', 'origin', 'referer', 'te', 'trailer', 'transfer-encoding', 'upgrade', 'user-agent', 'via'];
    /* WEBPACK VAR INJECTION */
  }).call(exports, __webpack_require__(4).Buffer, __webpack_require__(1), __webpack_require__(6));

  /***/
},
/* 81 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  /* WEBPACK VAR INJECTION */
  (function (process, Buffer, global) {

    var capability = __webpack_require__(43);
    var inherits = __webpack_require__(3);
    var stream = __webpack_require__(7);

    var rStates = exports.readyStates = {
      UNSENT: 0,
      OPENED: 1,
      HEADERS_RECEIVED: 2,
      LOADING: 3,
      DONE: 4
    };

    var IncomingMessage = exports.IncomingMessage = function (xhr, response, mode) {
      var self = this;
      stream.Readable.call(self);

      self._mode = mode;
      self.headers = {};
      self.rawHeaders = [];
      self.trailers = {};
      self.rawTrailers = [];

      // Fake the 'close' event, but only once 'end' fires
      self.on('end', function () {
        // The nextTick is necessary to prevent the 'request' module from causing an infinite loop
        process.nextTick(function () {
          self.emit('close');
        });
      });

      if (mode === 'fetch') {
        var read = function read() {
          reader.read().then(function (result) {
            if (self._destroyed) return;
            if (result.done) {
              self.push(null);
              return;
            }
            self.push(new Buffer(result.value));
            read();
          }).catch(function (err) {
            self.emit('error', err);
          });
        };

        self._fetchResponse = response;

        self.url = response.url;
        self.statusCode = response.status;
        self.statusMessage = response.statusText;

        response.headers.forEach(function (header, key) {
          self.headers[key.toLowerCase()] = header;
          self.rawHeaders.push(key, header);
        });

        // TODO: this doesn't respect backpressure. Once WritableStream is available, this can be fixed
        var reader = response.body.getReader();

        read();
      } else {
        self._xhr = xhr;
        self._pos = 0;

        self.url = xhr.responseURL;
        self.statusCode = xhr.status;
        self.statusMessage = xhr.statusText;
        var headers = xhr.getAllResponseHeaders().split(/\r?\n/);
        headers.forEach(function (header) {
          var matches = header.match(/^([^:]+):\s*(.*)/);
          if (matches) {
            var key = matches[1].toLowerCase();
            if (key === 'set-cookie') {
              if (self.headers[key] === undefined) {
                self.headers[key] = [];
              }
              self.headers[key].push(matches[2]);
            } else if (self.headers[key] !== undefined) {
              self.headers[key] += ', ' + matches[2];
            } else {
              self.headers[key] = matches[2];
            }
            self.rawHeaders.push(matches[1], matches[2]);
          }
        });

        self._charset = 'x-user-defined';
        if (!capability.overrideMimeType) {
          var mimeType = self.rawHeaders['mime-type'];
          if (mimeType) {
            var charsetMatch = mimeType.match(/;\s*charset=([^;])(;|$)/);
            if (charsetMatch) {
              self._charset = charsetMatch[1].toLowerCase();
            }
          }
          if (!self._charset) self._charset = 'utf-8'; // best guess
        }
      }
    };

    inherits(IncomingMessage, stream.Readable);

    IncomingMessage.prototype._read = function () {};

    IncomingMessage.prototype._onXHRProgress = function () {
      var self = this;

      var xhr = self._xhr;

      var response = null;
      switch (self._mode) {
        case 'text:vbarray':
          // For IE9
          if (xhr.readyState !== rStates.DONE) break;
          try {
            // This fails in IE8
            response = new global.VBArray(xhr.responseBody).toArray();
          } catch (e) {}
          if (response !== null) {
            self.push(new Buffer(response));
            break;
          }
        // Falls through in IE8	
        case 'text':
          try {
            // This will fail when readyState = 3 in IE9. Switch mode and wait for readyState = 4
            response = xhr.responseText;
          } catch (e) {
            self._mode = 'text:vbarray';
            break;
          }
          if (response.length > self._pos) {
            var newData = response.substr(self._pos);
            if (self._charset === 'x-user-defined') {
              var buffer = new Buffer(newData.length);
              for (var i = 0; i < newData.length; i++) {
                buffer[i] = newData.charCodeAt(i) & 0xff;
              }self.push(buffer);
            } else {
              self.push(newData, self._charset);
            }
            self._pos = response.length;
          }
          break;
        case 'arraybuffer':
          if (xhr.readyState !== rStates.DONE || !xhr.response) break;
          response = xhr.response;
          self.push(new Buffer(new Uint8Array(response)));
          break;
        case 'moz-chunked-arraybuffer':
          // take whole
          response = xhr.response;
          if (xhr.readyState !== rStates.LOADING || !response) break;
          self.push(new Buffer(new Uint8Array(response)));
          break;
        case 'ms-stream':
          response = xhr.response;
          if (xhr.readyState !== rStates.LOADING) break;
          var reader = new global.MSStreamReader();
          reader.onprogress = function () {
            if (reader.result.byteLength > self._pos) {
              self.push(new Buffer(new Uint8Array(reader.result.slice(self._pos))));
              self._pos = reader.result.byteLength;
            }
          };
          reader.onload = function () {
            self.push(null);
          };
          // reader.onerror = ??? // TODO: this
          reader.readAsArrayBuffer(response);
          break;
      }

      // The ms-stream case handles end separately in reader.onload()
      if (self._xhr.readyState === rStates.DONE && self._mode !== 'ms-stream') {
        self.push(null);
      }
    };
    /* WEBPACK VAR INJECTION */
  }).call(exports, __webpack_require__(6), __webpack_require__(4).Buffer, __webpack_require__(1));

  /***/
},
/* 82 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var Buffer = __webpack_require__(4).Buffer;

  module.exports = function (buf) {
    // If the buffer is backed by a Uint8Array, a faster version will work
    if (buf instanceof Uint8Array) {
      // If the buffer isn't a subarray, return the underlying ArrayBuffer
      if (buf.byteOffset === 0 && buf.byteLength === buf.buffer.byteLength) {
        return buf.buffer;
      } else if (typeof buf.buffer.slice === 'function') {
        // Otherwise we need to get a proper copy
        return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
      }
    }

    if (Buffer.isBuffer(buf)) {
      // This is the slow version that will work with any Buffer
      // implementation (even in old browsers)
      var arrayCopy = new Uint8Array(buf.length);
      var len = buf.length;
      for (var i = 0; i < len; i++) {
        arrayCopy[i] = buf[i];
      }
      return arrayCopy.buffer;
    } else {
      throw new Error('Argument must be a Buffer');
    }
  };

  /***/
},
/* 83 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  module.exports = extend;

  var hasOwnProperty = Object.prototype.hasOwnProperty;

  function extend() {
    var target = {};

    for (var i = 0; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  }

  /***/
},
/* 84 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  module.exports = {
    "100": "Continue",
    "101": "Switching Protocols",
    "102": "Processing",
    "200": "OK",
    "201": "Created",
    "202": "Accepted",
    "203": "Non-Authoritative Information",
    "204": "No Content",
    "205": "Reset Content",
    "206": "Partial Content",
    "207": "Multi-Status",
    "208": "Already Reported",
    "226": "IM Used",
    "300": "Multiple Choices",
    "301": "Moved Permanently",
    "302": "Found",
    "303": "See Other",
    "304": "Not Modified",
    "305": "Use Proxy",
    "307": "Temporary Redirect",
    "308": "Permanent Redirect",
    "400": "Bad Request",
    "401": "Unauthorized",
    "402": "Payment Required",
    "403": "Forbidden",
    "404": "Not Found",
    "405": "Method Not Allowed",
    "406": "Not Acceptable",
    "407": "Proxy Authentication Required",
    "408": "Request Timeout",
    "409": "Conflict",
    "410": "Gone",
    "411": "Length Required",
    "412": "Precondition Failed",
    "413": "Payload Too Large",
    "414": "URI Too Long",
    "415": "Unsupported Media Type",
    "416": "Range Not Satisfiable",
    "417": "Expectation Failed",
    "418": "I'm a teapot",
    "421": "Misdirected Request",
    "422": "Unprocessable Entity",
    "423": "Locked",
    "424": "Failed Dependency",
    "425": "Unordered Collection",
    "426": "Upgrade Required",
    "428": "Precondition Required",
    "429": "Too Many Requests",
    "431": "Request Header Fields Too Large",
    "451": "Unavailable For Legal Reasons",
    "500": "Internal Server Error",
    "501": "Not Implemented",
    "502": "Bad Gateway",
    "503": "Service Unavailable",
    "504": "Gateway Timeout",
    "505": "HTTP Version Not Supported",
    "506": "Variant Also Negotiates",
    "507": "Insufficient Storage",
    "508": "Loop Detected",
    "509": "Bandwidth Limit Exceeded",
    "510": "Not Extended",
    "511": "Network Authentication Required"
  };

  /***/
},
/* 85 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var http = __webpack_require__(42);

  var https = module.exports;

  for (var key in http) {
    if (http.hasOwnProperty(key)) https[key] = http[key];
  };

  https.request = function (params, cb) {
    if (!params) params = {};
    params.scheme = 'https';
    params.protocol = 'https:';
    return http.request.call(this, params, cb);
  };

  /***/
}]
/******/);
//# sourceMappingURL=rss-parser.min.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9).setImmediate, __webpack_require__(9).clearImmediate))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
            callback = new Function("" + callback);
        }
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
        }
        // Store and register the task
        var task = { callback: callback, args: args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function registerImmediate(handle) {
            process.nextTick(function () {
                runIfPresent(handle);
            });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function onGlobalMessage(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function registerImmediate(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function registerImmediate(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function registerImmediate(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function registerImmediate(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34), __webpack_require__(2)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var COINMARKET_TICKER_ENDPOINT = exports.COINMARKET_TICKER_ENDPOINT = 'https://api.coinmarketcap.com/v1/ticker';
var COINMARKET_GRAPH_ENDPOINT = exports.COINMARKET_GRAPH_ENDPOINT = 'https://graphs.coinmarketcap.com/currencies';
var REDDIT_RSS_URL = exports.REDDIT_RSS_URL = 'https://www.reddit.com/r/%SLUG%.rss';
var TWITTER_RSS_URL = exports.TWITTER_RSS_URL = 'https://twitrss.me/twitter_user_to_rss/?user=%SLUG%';

/***/ })
/******/ ]);
});