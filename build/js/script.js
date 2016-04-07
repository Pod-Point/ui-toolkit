/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _moduleLoader = __webpack_require__(1);
	
	var _moduleLoader2 = _interopRequireDefault(_moduleLoader);
	
	var _domModuleLoader = __webpack_require__(3);
	
	var _domModuleLoader2 = _interopRequireDefault(_domModuleLoader);
	
	var _domOps = __webpack_require__(4);
	
	var dom = _interopRequireWildcard(_domOps);
	
	var _modal = __webpack_require__(5);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _collapse = __webpack_require__(8);
	
	var _collapse2 = _interopRequireDefault(_collapse);
	
	var _dropdown = __webpack_require__(10);
	
	var _dropdown2 = _interopRequireDefault(_dropdown);
	
	var _toggle = __webpack_require__(11);
	
	var _toggle2 = _interopRequireDefault(_toggle);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(12);
	
	dom.whenReady(function () {
	    (0, _moduleLoader2.default)({
	        domModules: (0, _domModuleLoader2.default)({
	            modal: _modal2.default,
	            collapse: _collapse2.default,
	            dropdown: _dropdown2.default,
	            toggle: _toggle2.default
	        })
	    });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Module system
	
	    All modules export `init` methods.
	
	    Persistent modules:
	        - Can be initialised once per page.
	        - Can optionally export a `refresh` method.
	        - Are maintained between page transitions.
	*/
	
	// Other imports
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _podPointUtils = __webpack_require__(2);
	
	var pageActive = false;
	var modules = {};
	
	function init(newModules) {
	    modules = newModules;
	
	    (0, _podPointUtils.each)(modules, function (module) {
	        if (module.init) {
	            module.init();
	        }
	    });
	
	    pageActive = true;
	}
	
	function reload() {
	    (0, _podPointUtils.each)(modules, function (module) {
	        if (module.hasOwnProperty('refresh')) {
	            module.refresh();
	        }
	    });
	}
	
	exports['default'] = function (newModules) {
	    if (pageActive) {
	        reload();
	    } else {
	        init(newModules);
	    }
	};
	
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.each = each;
	exports.throttle = throttle;
	exports.whenCalm = whenCalm;
	function each(props, callback) {
	    if (!props) {
	        return;
	    }
	
	    var keys = Object.keys(props),
	        numKeys = keys.length;
	
	    for (var i = 0; i < numKeys; i++) {
	        var key = keys[i],
	            prop = props[key];
	
	        if (callback(prop, key, props) === false) {
	            break;
	        }
	    }
	}
	
	function throttle(callback) {
	    var limit = arguments.length <= 1 || arguments[1] === undefined ? 35 : arguments[1];
	
	    var wait = false;
	
	    return function () {
	        if (!wait) {
	            callback();
	            wait = true;
	
	            setTimeout(function () {
	                wait = false;
	            }, limit);
	        }
	    };
	}
	
	function whenCalm(callback) {
	    var timeout = arguments.length <= 1 || arguments[1] === undefined ? 250 : arguments[1];
	
	    var timer = undefined;
	
	    return function () {
	        clearTimeout(timer);
	
	        timer = setTimeout(function () {
	            callback();
	        }, timeout);
	    };
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    DOM module handler, compatible with @pod-point/module-loader
	
	    All modules export `init` methods.
	
	    DOM modules:
	        - Can be initialised multiple times per page.
	        - Can optionally export a `destory` method.
	        - Are destroyed between page transitions.
	        - Initialised by adding the imported module name to an element's
	            `data-js-module` attribute. Multiple names can be added and are
	            space-delimited.
	*/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _podPointDomOps = __webpack_require__(4);
	
	var DATA_TAG = 'data-js-module';
	
	var activeModules = [];
	var domModules = {};
	var definedDataTag = '';
	
	function init() {
	    var moduleElements = (0, _podPointDomOps.nodesToArray)((0, _podPointDomOps.select)('[' + definedDataTag + ']'));
	
	    activeModules = [];
	
	    if (moduleElements) {
	        moduleElements.forEach(function (element) {
	            var modulesToLoad = element.getAttribute(definedDataTag).split(' ');
	
	            modulesToLoad.forEach(function (name) {
	                var module = domModules[name];
	
	                if (module && module.init) {
	                    module.init(element);
	                    activeModules.push(module);
	                }
	            });
	        });
	    }
	}
	
	function refresh() {
	    activeModules.forEach(function (module) {
	        if (module.hasOwnProperty('destroy')) {
	            module.destroy();
	        }
	    });
	
	    init();
	}
	
	exports['default'] = function (modules) {
	    var dataTag = arguments.length <= 1 || arguments[1] === undefined ? DATA_TAG : arguments[1];
	
	    domModules = modules;
	    definedDataTag = dataTag;
	    return { init: init, refresh: refresh };
	};
	
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.select = select;
	exports.selectFirst = selectFirst;
	exports.selectById = selectById;
	exports.closest = closest;
	exports.nextElement = nextElement;
	exports.parent = parent;
	exports.child = child;
	exports.create = create;
	exports.addClass = addClass;
	exports.removeClass = removeClass;
	exports.appendChild = appendChild;
	exports.removeChild = removeChild;
	exports.clone = clone;
	exports.insertBefore = insertBefore;
	exports.insertAfter = insertAfter;
	exports.insertStart = insertStart;
	exports.insertEnd = insertEnd;
	exports.empty = empty;
	exports.hasClass = hasClass;
	exports.matches = matches;
	exports.nodesToArray = nodesToArray;
	exports.whenReady = whenReady;
	/*
	    ==============================================================
	    SELECTION
	    ==============================================================
	*/
	function select(selector) {
	    var root = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];
	
	    var selection = root.querySelectorAll(selector);
	
	    return selection.length ? selection : null;
	}
	
	function selectFirst(selector) {
	    var root = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];
	
	    return root.querySelector(selector);
	}
	
	function selectById(id) {
	    return document.getElementById(id);
	}
	
	/*
	    ==============================================================
	    TRAVERSAL
	    ==============================================================
	*/
	
	function closest(element, selector) {
	    var closest;
	
	    while (!closest) {
	        if (matches(element, selector)) {
	            closest = element;
	        }
	
	        element = parent(element);
	
	        if (!element || element === document) {
	            break;
	        }
	    }
	
	    return closest;
	}
	
	function nextElement(element) {
	    return element.nextElementSibling;
	}
	
	function parent(element) {
	    return element.parentNode;
	}
	
	// Currently undocumented - `select` performs this operation
	function child(element, selector) {
	    return element.querySelectorAll(selector);
	}
	
	/*
	    ==============================================================
	    MANIPULATION
	    ==============================================================
	*/
	function create() {
	    var tag = arguments.length <= 0 || arguments[0] === undefined ? 'div' : arguments[0];
	
	    return document.createElement(tag);
	}
	
	function addClass(element, className) {
	    nodesToArray(element).forEach(function (node) {
	        return node.classList.add(className);
	    });
	}
	
	function removeClass(element, className) {
	    nodesToArray(element).forEach(function (node) {
	        return node.classList.remove(className);
	    });
	}
	
	function appendChild(host, element) {
	    host.appendChild(element);
	}
	
	function removeChild(host, element) {
	    host.removeChild(element);
	}
	
	function clone(element) {
	    return element.cloneNode(true);
	}
	
	function insertBefore(element, html) {
	    element.insertAdjacentHTML('beforebegin', html);
	}
	
	function insertAfter(element, html) {
	    element.insertAdjacentHTML('afterend', html);
	}
	
	function insertStart(element, html) {
	    element.insertAdjacentHTML('afterbegin', html);
	}
	
	function insertEnd(element, html) {
	    element.insertAdjacentHTML('beforeend', html);
	}
	
	function empty(element) {
	    nodesToArray(element).forEach(function (node) {
	        while (node.firstChild) {
	            node.removeChild(node.firstChild);
	        }
	    });
	}
	
	/*
	    ==============================================================
	    IDENTIFICATION
	    ==============================================================
	*/
	
	function hasClass(element, className) {
	    var hasClass = true;
	    nodesToArray(element).forEach(function (node) {
	        if (!node.classList.contains(className)) {
	            hasClass = false;
	        }
	    });
	    return hasClass;
	}
	
	function matches(element, selector) {
	    return (element.matches || element.matchesSelector || element.msMatchesSelector).call(element, selector);
	}
	
	/*
	    ==============================================================
	    HELPERS
	    ==============================================================
	*/
	
	function nodesToArray(nodes) {
	    if (!nodes || nodes.length === 0) {
	        return false;
	    } else {
	        return nodes.length ? [].slice.call(nodes) : [nodes];
	    }
	}
	
	function whenReady(callback) {
	    if (document.readyState != 'loading') {
	        callback();
	    } else {
	        document.addEventListener('DOMContentLoaded', callback);
	    }
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domDelegate = __webpack_require__(6);
	
	var _domOps = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var instances = [];
	
	var Modal = function () {
	
	    /**
	     * Creates a new modal.
	     *
	     * @param element
	     */
	
	    function Modal(element) {
	        _classCallCheck(this, Modal);
	
	        this.openButton = element;
	        this.closeButton = (0, _domOps.selectFirst)('.modal-close', this.modal);
	        this.modal = (0, _domOps.selectFirst)('#' + this.openButton.dataset.modal);
	        this.overlay = (0, _domOps.selectFirst)('.modal__overlay');
	
	        this.bindOpenEvent();
	        this.bindCloseEvent();
	    }
	
	    /**
	     * Binds open modal event.
	     */
	
	
	    _createClass(Modal, [{
	        key: 'bindOpenEvent',
	        value: function bindOpenEvent() {
	            var _this = this;
	
	            this.openListener = new _domDelegate.Delegate(this.openButton);
	
	            this.openListener.on('click', function (event) {
	                _this.doModal(event);
	            });
	        }
	
	        /**
	         * Bind the close modal event to the close button.
	         */
	
	    }, {
	        key: 'bindCloseEvent',
	        value: function bindCloseEvent() {
	            var _this2 = this;
	
	            this.closeListener = new _domDelegate.Delegate(this.closeButton);
	
	            this.closeListener.on('click', function (event) {
	                _this2.closeModal(event);
	            });
	
	            this.overlayListener = new _domDelegate.Delegate(this.overlay);
	
	            this.overlayListener.on('click', function (event) {
	                _this2.closeModal(event);
	            });
	        }
	
	        /**
	         * Unbinds the event listeners from the elements.
	         */
	
	    }, {
	        key: 'unbindEvents',
	        value: function unbindEvents() {
	            this.openListener.destroy();
	            this.closeListener.destroy();
	            this.overlayListener.destroy();
	        }
	
	        /**
	         * Opens the modal
	         * @param {Event} event
	         */
	
	    }, {
	        key: 'doModal',
	        value: function doModal(event) {
	            event.preventDefault();
	
	            var elements = [this.overlay, this.modal];
	
	            for (var i = 0; i < elements.length; i++) {
	                if (elements[i].style.display === 'none' || !elements[i].style.display) {
	                    elements[i].style.display = 'block';
	                } else {
	                    elements[i].style.display = 'none';
	                }
	            }
	        }
	
	        /**
	         * Closes the modal
	         * @param {Event} event
	         */
	
	    }, {
	        key: 'closeModal',
	        value: function closeModal(event) {
	            event.preventDefault();
	
	            var elements = [this.overlay, this.modal];
	
	            for (var i = 0; i < elements.length; i++) {
	                elements[i].style.display = 'none';
	            }
	        }
	    }]);
	
	    return Modal;
	}();
	
	exports.default = {
	    init: function init(element) {
	        instances.push(new Modal(element));
	    },
	
	    destroy: function destroy() {
	        instances.forEach(function (instance) {
	            return instance.unbindEvents();
	        });
	        instances = [];
	    }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*jshint browser:true, node:true*/
	
	'use strict';
	
	/**
	 * @preserve Create and manage a DOM event delegator.
	 *
	 * @version 0.3.0
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
	var Delegate = __webpack_require__(7);
	
	module.exports = function(root) {
	  return new Delegate(root);
	};
	
	module.exports.Delegate = Delegate;


/***/ },
/* 7 */
/***/ function(module, exports) {

	/*jshint browser:true, node:true*/
	
	'use strict';
	
	module.exports = Delegate;
	
	/**
	 * DOM event delegator
	 *
	 * The delegator will listen
	 * for events that bubble up
	 * to the root node.
	 *
	 * @constructor
	 * @param {Node|string} [root] The root node or a selector string matching the root node
	 */
	function Delegate(root) {
	
	  /**
	   * Maintain a map of listener
	   * lists, keyed by event name.
	   *
	   * @type Object
	   */
	  this.listenerMap = [{}, {}];
	  if (root) {
	    this.root(root);
	  }
	
	  /** @type function() */
	  this.handle = Delegate.prototype.handle.bind(this);
	}
	
	/**
	 * Start listening for events
	 * on the provided DOM element
	 *
	 * @param  {Node|string} [root] The root node or a selector string matching the root node
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.root = function(root) {
	  var listenerMap = this.listenerMap;
	  var eventType;
	
	  // Remove master event listeners
	  if (this.rootElement) {
	    for (eventType in listenerMap[1]) {
	      if (listenerMap[1].hasOwnProperty(eventType)) {
	        this.rootElement.removeEventListener(eventType, this.handle, true);
	      }
	    }
	    for (eventType in listenerMap[0]) {
	      if (listenerMap[0].hasOwnProperty(eventType)) {
	        this.rootElement.removeEventListener(eventType, this.handle, false);
	      }
	    }
	  }
	
	  // If no root or root is not
	  // a dom node, then remove internal
	  // root reference and exit here
	  if (!root || !root.addEventListener) {
	    if (this.rootElement) {
	      delete this.rootElement;
	    }
	    return this;
	  }
	
	  /**
	   * The root node at which
	   * listeners are attached.
	   *
	   * @type Node
	   */
	  this.rootElement = root;
	
	  // Set up master event listeners
	  for (eventType in listenerMap[1]) {
	    if (listenerMap[1].hasOwnProperty(eventType)) {
	      this.rootElement.addEventListener(eventType, this.handle, true);
	    }
	  }
	  for (eventType in listenerMap[0]) {
	    if (listenerMap[0].hasOwnProperty(eventType)) {
	      this.rootElement.addEventListener(eventType, this.handle, false);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * @param {string} eventType
	 * @returns boolean
	 */
	Delegate.prototype.captureForType = function(eventType) {
	  return ['blur', 'error', 'focus', 'load', 'resize', 'scroll'].indexOf(eventType) !== -1;
	};
	
	/**
	 * Attach a handler to one
	 * event for all elements
	 * that match the selector,
	 * now or in the future
	 *
	 * The handler function receives
	 * three arguments: the DOM event
	 * object, the node that matched
	 * the selector while the event
	 * was bubbling and a reference
	 * to itself. Within the handler,
	 * 'this' is equal to the second
	 * argument.
	 *
	 * The node that actually received
	 * the event can be accessed via
	 * 'event.target'.
	 *
	 * @param {string} eventType Listen for these events
	 * @param {string|undefined} selector Only handle events on elements matching this selector, if undefined match root element
	 * @param {function()} handler Handler function - event data passed here will be in event.data
	 * @param {Object} [eventData] Data to pass in event.data
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.on = function(eventType, selector, handler, useCapture) {
	  var root, listenerMap, matcher, matcherParam;
	
	  if (!eventType) {
	    throw new TypeError('Invalid event type: ' + eventType);
	  }
	
	  // handler can be passed as
	  // the second or third argument
	  if (typeof selector === 'function') {
	    useCapture = handler;
	    handler = selector;
	    selector = null;
	  }
	
	  // Fallback to sensible defaults
	  // if useCapture not set
	  if (useCapture === undefined) {
	    useCapture = this.captureForType(eventType);
	  }
	
	  if (typeof handler !== 'function') {
	    throw new TypeError('Handler must be a type of Function');
	  }
	
	  root = this.rootElement;
	  listenerMap = this.listenerMap[useCapture ? 1 : 0];
	
	  // Add master handler for type if not created yet
	  if (!listenerMap[eventType]) {
	    if (root) {
	      root.addEventListener(eventType, this.handle, useCapture);
	    }
	    listenerMap[eventType] = [];
	  }
	
	  if (!selector) {
	    matcherParam = null;
	
	    // COMPLEX - matchesRoot needs to have access to
	    // this.rootElement, so bind the function to this.
	    matcher = matchesRoot.bind(this);
	
	  // Compile a matcher for the given selector
	  } else if (/^[a-z]+$/i.test(selector)) {
	    matcherParam = selector;
	    matcher = matchesTag;
	  } else if (/^#[a-z0-9\-_]+$/i.test(selector)) {
	    matcherParam = selector.slice(1);
	    matcher = matchesId;
	  } else {
	    matcherParam = selector;
	    matcher = matches;
	  }
	
	  // Add to the list of listeners
	  listenerMap[eventType].push({
	    selector: selector,
	    handler: handler,
	    matcher: matcher,
	    matcherParam: matcherParam
	  });
	
	  return this;
	};
	
	/**
	 * Remove an event handler
	 * for elements that match
	 * the selector, forever
	 *
	 * @param {string} [eventType] Remove handlers for events matching this type, considering the other parameters
	 * @param {string} [selector] If this parameter is omitted, only handlers which match the other two will be removed
	 * @param {function()} [handler] If this parameter is omitted, only handlers which match the previous two will be removed
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.off = function(eventType, selector, handler, useCapture) {
	  var i, listener, listenerMap, listenerList, singleEventType;
	
	  // Handler can be passed as
	  // the second or third argument
	  if (typeof selector === 'function') {
	    useCapture = handler;
	    handler = selector;
	    selector = null;
	  }
	
	  // If useCapture not set, remove
	  // all event listeners
	  if (useCapture === undefined) {
	    this.off(eventType, selector, handler, true);
	    this.off(eventType, selector, handler, false);
	    return this;
	  }
	
	  listenerMap = this.listenerMap[useCapture ? 1 : 0];
	  if (!eventType) {
	    for (singleEventType in listenerMap) {
	      if (listenerMap.hasOwnProperty(singleEventType)) {
	        this.off(singleEventType, selector, handler);
	      }
	    }
	
	    return this;
	  }
	
	  listenerList = listenerMap[eventType];
	  if (!listenerList || !listenerList.length) {
	    return this;
	  }
	
	  // Remove only parameter matches
	  // if specified
	  for (i = listenerList.length - 1; i >= 0; i--) {
	    listener = listenerList[i];
	
	    if ((!selector || selector === listener.selector) && (!handler || handler === listener.handler)) {
	      listenerList.splice(i, 1);
	    }
	  }
	
	  // All listeners removed
	  if (!listenerList.length) {
	    delete listenerMap[eventType];
	
	    // Remove the main handler
	    if (this.rootElement) {
	      this.rootElement.removeEventListener(eventType, this.handle, useCapture);
	    }
	  }
	
	  return this;
	};
	
	
	/**
	 * Handle an arbitrary event.
	 *
	 * @param {Event} event
	 */
	Delegate.prototype.handle = function(event) {
	  var i, l, type = event.type, root, phase, listener, returned, listenerList = [], target, /** @const */ EVENTIGNORE = 'ftLabsDelegateIgnore';
	
	  if (event[EVENTIGNORE] === true) {
	    return;
	  }
	
	  target = event.target;
	
	  // Hardcode value of Node.TEXT_NODE
	  // as not defined in IE8
	  if (target.nodeType === 3) {
	    target = target.parentNode;
	  }
	
	  root = this.rootElement;
	
	  phase = event.eventPhase || ( event.target !== event.currentTarget ? 3 : 2 );
	  
	  switch (phase) {
	    case 1: //Event.CAPTURING_PHASE:
	      listenerList = this.listenerMap[1][type];
	    break;
	    case 2: //Event.AT_TARGET:
	      if (this.listenerMap[0] && this.listenerMap[0][type]) listenerList = listenerList.concat(this.listenerMap[0][type]);
	      if (this.listenerMap[1] && this.listenerMap[1][type]) listenerList = listenerList.concat(this.listenerMap[1][type]);
	    break;
	    case 3: //Event.BUBBLING_PHASE:
	      listenerList = this.listenerMap[0][type];
	    break;
	  }
	
	  // Need to continuously check
	  // that the specific list is
	  // still populated in case one
	  // of the callbacks actually
	  // causes the list to be destroyed.
	  l = listenerList.length;
	  while (target && l) {
	    for (i = 0; i < l; i++) {
	      listener = listenerList[i];
	
	      // Bail from this loop if
	      // the length changed and
	      // no more listeners are
	      // defined between i and l.
	      if (!listener) {
	        break;
	      }
	
	      // Check for match and fire
	      // the event if there's one
	      //
	      // TODO:MCG:20120117: Need a way
	      // to check if event#stopImmediatePropagation
	      // was called. If so, break both loops.
	      if (listener.matcher.call(target, listener.matcherParam, target)) {
	        returned = this.fire(event, target, listener);
	      }
	
	      // Stop propagation to subsequent
	      // callbacks if the callback returned
	      // false
	      if (returned === false) {
	        event[EVENTIGNORE] = true;
	        event.preventDefault();
	        return;
	      }
	    }
	
	    // TODO:MCG:20120117: Need a way to
	    // check if event#stopPropagation
	    // was called. If so, break looping
	    // through the DOM. Stop if the
	    // delegation root has been reached
	    if (target === root) {
	      break;
	    }
	
	    l = listenerList.length;
	    target = target.parentElement;
	  }
	};
	
	/**
	 * Fire a listener on a target.
	 *
	 * @param {Event} event
	 * @param {Node} target
	 * @param {Object} listener
	 * @returns {boolean}
	 */
	Delegate.prototype.fire = function(event, target, listener) {
	  return listener.handler.call(target, event, target);
	};
	
	/**
	 * Check whether an element
	 * matches a generic selector.
	 *
	 * @type function()
	 * @param {string} selector A CSS selector
	 */
	var matches = (function(el) {
	  if (!el) return;
	  var p = el.prototype;
	  return (p.matches || p.matchesSelector || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector);
	}(Element));
	
	/**
	 * Check whether an element
	 * matches a tag selector.
	 *
	 * Tags are NOT case-sensitive,
	 * except in XML (and XML-based
	 * languages such as XHTML).
	 *
	 * @param {string} tagName The tag name to test against
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesTag(tagName, element) {
	  return tagName.toLowerCase() === element.tagName.toLowerCase();
	}
	
	/**
	 * Check whether an element
	 * matches the root.
	 *
	 * @param {?String} selector In this case this is always passed through as null and not used
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesRoot(selector, element) {
	  /*jshint validthis:true*/
	  if (this.rootElement === window) return element === document;
	  return this.rootElement === element;
	}
	
	/**
	 * Check whether the ID of
	 * the element in 'this'
	 * matches the given ID.
	 *
	 * IDs are case-sensitive.
	 *
	 * @param {string} id The ID to test against
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesId(id, element) {
	  return id === element.id;
	}
	
	/**
	 * Short hand for off()
	 * and root(), ie both
	 * with no parameters
	 *
	 * @return void
	 */
	Delegate.prototype.destroy = function() {
	  this.off();
	  this.root();
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domDelegate = __webpack_require__(6);
	
	var _domOps = __webpack_require__(4);
	
	var _utilities = __webpack_require__(9);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var instances = [];
	
	var Collapse = function () {
	
	    /**
	     * Creates a new collapsable element.
	     *
	     * @param element
	     */
	
	    function Collapse(element) {
	        _classCallCheck(this, Collapse);
	
	        this.element = element;
	
	        this.bindEvents();
	    }
	
	    /**
	     * Binds collapse event.
	     */
	
	
	    _createClass(Collapse, [{
	        key: 'bindEvents',
	        value: function bindEvents() {
	            var _this = this;
	
	            this.listener = new _domDelegate.Delegate(this.element);
	
	            this.listener.on('click', function (event, input) {
	                _this.doCollapse(event, input);
	            });
	        }
	
	        /**
	         * Unbinds the event listeners from the elements.
	         */
	
	    }, {
	        key: 'unbindEvents',
	        value: function unbindEvents() {
	            this.listener.destroy();
	        }
	
	        /**
	         * Collapses the element
	         * @param {Event} event
	         * @param {Element} trigger
	         */
	
	    }, {
	        key: 'doCollapse',
	        value: function doCollapse(event, trigger) {
	            event.preventDefault();
	
	            var target = trigger.dataset.target;
	            var element = (0, _domOps.selectFirst)(target, trigger.parentNode);
	
	            if ((0, _domOps.hasClass)(element, 'in')) {
	                (0, _utilities.hide)(element, trigger);
	            } else {
	                (0, _utilities.show)(element, trigger);
	            }
	        }
	    }]);
	
	    return Collapse;
	}();
	
	exports.default = {
	    init: function init(element) {
	        instances.push(new Collapse(element));
	    },
	
	    destroy: function destroy() {
	        instances.forEach(function (instance) {
	            return instance.unbindEvents();
	        });
	        instances = [];
	    }
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getMaxHeight = getMaxHeight;
	exports.show = show;
	exports.hide = hide;
	exports.complete = complete;
	function getMaxHeight(element) {
	    var prevHeight = element.style.height;
	    element.style.height = 'auto';
	    var maxHeight = getComputedStyle(element).height;
	    element.style.height = prevHeight;
	    element.offsetHeight;
	    return maxHeight;
	}
	
	function show(element, trigger) {
	    element.classList.remove('collapse');
	    element.classList.add('collapsing');
	    trigger.classList.remove('collapsed');
	    trigger.setAttribute('aria-expanded', true);
	
	    element.style.height = getMaxHeight(element);
	
	    complete(element);
	}
	
	function hide(element, trigger) {
	    element.classList.remove('collapse');
	    element.classList.remove('in');
	    element.classList.add('collapsing');
	    trigger.classList.add('collapsed');
	    trigger.setAttribute('aria-expanded', false);
	
	    // Reset element's height
	    element.style.height = getComputedStyle(element).height;
	    element.offsetHeight; // force repaint
	    element.style.height = '0px';
	
	    complete(element);
	}
	
	function complete(element) {
	    element.classList.remove('collapsing');
	    element.classList.add('collapse');
	    element.setAttribute('aria-expanded', false);
	
	    // Check whether the element is unhidden
	    if (element.style.height !== '0px') {
	        element.classList.add('in');
	        element.style.height = 'auto';
	    }
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domDelegate = __webpack_require__(6);
	
	var _domOps = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var instances = [];
	
	var DropDown = function () {
	
	    /**
	     * Creates a new dropdown.
	     *
	     * @param element
	     */
	
	    function DropDown(element) {
	        _classCallCheck(this, DropDown);
	
	        this.element = element;
	
	        this.bindEvents();
	    }
	
	    /**
	     * Binds dropdown event.
	     */
	
	
	    _createClass(DropDown, [{
	        key: 'bindEvents',
	        value: function bindEvents() {
	            var _this = this;
	
	            this.listener = new _domDelegate.Delegate(this.element);
	
	            this.listener.on('click', function (event, input) {
	                _this.doDropDown(event, input);
	            });
	
	            this.listener.on('blur', function (event, input) {
	                _this.closeDropDown(event, input);
	            });
	        }
	
	        /**
	         * Unbinds the event listeners from the elements.
	         */
	
	    }, {
	        key: 'unbindEvents',
	        value: function unbindEvents() {
	            this.listener.destroy();
	        }
	
	        /**
	         * Drops down
	         * @param {Event} event
	         * @param {Element} input
	         */
	
	    }, {
	        key: 'doDropDown',
	        value: function doDropDown(event, input) {
	            event.preventDefault();
	            input.parentElement.classList.toggle('open');
	        }
	
	        /**
	         * Closes the dropdown
	         * @param {Event} event
	         * @param {Element} input
	         */
	
	    }, {
	        key: 'closeDropDown',
	        value: function closeDropDown(event, input) {
	            (0, _domOps.removeClass)(input.parentElement, 'open');
	
	            // Trigger the click event on the target if it not opening another menu
	            if (event.relatedTarget && event.relatedTarget.getAttribute('data-js-module') !== 'dropdown') {
	                event.relatedTarget.click();
	            }
	        }
	    }]);
	
	    return DropDown;
	}();
	
	exports.default = {
	    init: function init(element) {
	        instances.push(new DropDown(element));
	    },
	
	    destroy: function destroy() {
	        instances.forEach(function (instance) {
	            return instance.unbindEvents();
	        });
	        instances = [];
	    }
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domDelegate = __webpack_require__(6);
	
	var _domOps = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var instances = [];
	
	var Toggle = function () {
	
	    /**
	     * Creates a new toggle element.
	     *
	     * @param element
	     */
	
	    function Toggle(element) {
	        _classCallCheck(this, Toggle);
	
	        this.element = element;
	        this.action = element.dataset.hasOwnProperty('action') ? element.dataset.action : 'click';
	
	        this.hide = element.dataset.hide;
	        this.show = element.dataset.hasOwnProperty('show') ? element.dataset.show : null;
	
	        this.bindEvents();
	    }
	
	    /**
	     * Binds toggle event.
	     */
	
	
	    _createClass(Toggle, [{
	        key: 'bindEvents',
	        value: function bindEvents() {
	            var _this = this;
	
	            this.listener = new _domDelegate.Delegate(this.element);
	
	            this.listener.on(this.action, function (event) {
	                _this.doToggle(event);
	            });
	        }
	
	        /**
	         * Unbinds the event listeners from the elements.
	         */
	
	    }, {
	        key: 'unbindEvents',
	        value: function unbindEvents() {
	            this.listener.destroy();
	        }
	
	        /**
	         * Toggles the elements
	         * @param {Event} event
	         * @param {Element} trigger
	         */
	
	    }, {
	        key: 'doToggle',
	        value: function doToggle(event) {
	            event.preventDefault();
	
	            var hideElement = (0, _domOps.selectFirst)(this.hide);
	            var showElement = this.show ? (0, _domOps.selectFirst)(this.show) : null;
	
	            if (hideElement.style.display !== 'none' || hideElement.style.display === '') {
	
	                hideElement.style.display = 'none';
	
	                if (this.show) {
	                    showElement.style.display = 'block';
	                }
	            } else {
	
	                hideElement.style.display = 'block';
	
	                if (this.show) {
	                    showElement.style.display = 'none';
	                }
	            }
	        }
	    }]);
	
	    return Toggle;
	}();
	
	exports.default = {
	    init: function init(element) {
	        instances.push(new Toggle(element));
	    },
	
	    destroy: function destroy() {
	        instances.forEach(function (instance) {
	            return instance.unbindEvents();
	        });
	        instances = [];
	    }
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	/*
	 * classList.js: Cross-browser full element.classList implementation.
	 * 1.1.20150312
	 *
	 * By Eli Grey, http://eligrey.com
	 * License: Dedicated to the public domain.
	 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
	 */
	
	/*global self, document, DOMException */
	
	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
	
	if ("document" in self) {
	
		// Full polyfill for browsers with no classList support
		// Including IE < Edge missing SVGElement.classList
		if (!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {
	
			(function (view) {
	
				"use strict";
	
				if (!('Element' in view)) return;
	
				var classListProp = "classList",
				    protoProp = "prototype",
				    elemCtrProto = view.Element[protoProp],
				    objCtr = Object,
				    strTrim = String[protoProp].trim || function () {
					return this.replace(/^\s+|\s+$/g, "");
				},
				    arrIndexOf = Array[protoProp].indexOf || function (item) {
					var i = 0,
					    len = this.length;
					for (; i < len; i++) {
						if (i in this && this[i] === item) {
							return i;
						}
					}
					return -1;
				}
				// Vendors: please allow content code to instantiate DOMExceptions
				,
				    DOMEx = function DOMEx(type, message) {
					this.name = type;
					this.code = DOMException[type];
					this.message = message;
				},
				    checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
					if (token === "") {
						throw new DOMEx("SYNTAX_ERR", "An invalid or illegal string was specified");
					}
					if (/\s/.test(token)) {
						throw new DOMEx("INVALID_CHARACTER_ERR", "String contains an invalid character");
					}
					return arrIndexOf.call(classList, token);
				},
				    ClassList = function ClassList(elem) {
					var trimmedClasses = strTrim.call(elem.getAttribute("class") || ""),
					    classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [],
					    i = 0,
					    len = classes.length;
					for (; i < len; i++) {
						this.push(classes[i]);
					}
					this._updateClassName = function () {
						elem.setAttribute("class", this.toString());
					};
				},
				    classListProto = ClassList[protoProp] = [],
				    classListGetter = function classListGetter() {
					return new ClassList(this);
				};
				// Most DOMException implementations don't allow calling DOMException's toString()
				// on non-DOMExceptions. Error's toString() is sufficient here.
				DOMEx[protoProp] = Error[protoProp];
				classListProto.item = function (i) {
					return this[i] || null;
				};
				classListProto.contains = function (token) {
					token += "";
					return checkTokenAndGetIndex(this, token) !== -1;
				};
				classListProto.add = function () {
					var tokens = arguments,
					    i = 0,
					    l = tokens.length,
					    token,
					    updated = false;
					do {
						token = tokens[i] + "";
						if (checkTokenAndGetIndex(this, token) === -1) {
							this.push(token);
							updated = true;
						}
					} while (++i < l);
	
					if (updated) {
						this._updateClassName();
					}
				};
				classListProto.remove = function () {
					var tokens = arguments,
					    i = 0,
					    l = tokens.length,
					    token,
					    updated = false,
					    index;
					do {
						token = tokens[i] + "";
						index = checkTokenAndGetIndex(this, token);
						while (index !== -1) {
							this.splice(index, 1);
							updated = true;
							index = checkTokenAndGetIndex(this, token);
						}
					} while (++i < l);
	
					if (updated) {
						this._updateClassName();
					}
				};
				classListProto.toggle = function (token, force) {
					token += "";
	
					var result = this.contains(token),
					    method = result ? force !== true && "remove" : force !== false && "add";
	
					if (method) {
						this[method](token);
					}
	
					if (force === true || force === false) {
						return force;
					} else {
						return !result;
					}
				};
				classListProto.toString = function () {
					return this.join(" ");
				};
	
				if (objCtr.defineProperty) {
					var classListPropDesc = {
						get: classListGetter,
						enumerable: true,
						configurable: true
					};
					try {
						objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
					} catch (ex) {
						// IE 8 doesn't support enumerable:true
						if (ex.number === -0x7FF5EC54) {
							classListPropDesc.enumerable = false;
							objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
						}
					}
				} else if (objCtr[protoProp].__defineGetter__) {
					elemCtrProto.__defineGetter__(classListProp, classListGetter);
				}
			})(self);
		} else {
			// There is full or partial native classList support, so just check if we need
			// to normalize the add/remove and toggle APIs.
	
			(function () {
				"use strict";
	
				var testElement = document.createElement("_");
	
				testElement.classList.add("c1", "c2");
	
				// Polyfill for IE 10/11 and Firefox <26, where classList.add and
				// classList.remove exist but support only one argument at a time.
				if (!testElement.classList.contains("c2")) {
					var createMethod = function createMethod(method) {
						var original = DOMTokenList.prototype[method];
	
						DOMTokenList.prototype[method] = function (token) {
							var i,
							    len = arguments.length;
	
							for (i = 0; i < len; i++) {
								token = arguments[i];
								original.call(this, token);
							}
						};
					};
					createMethod('add');
					createMethod('remove');
				}
	
				testElement.classList.toggle("c3", false);
	
				// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
				// support the second argument.
				if (testElement.classList.contains("c3")) {
					var _toggle = DOMTokenList.prototype.toggle;
	
					DOMTokenList.prototype.toggle = function (token, force) {
						if (1 in arguments && !this.contains(token) === !force) {
							return force;
						} else {
							return _toggle.call(this, token);
						}
					};
				}
	
				testElement = null;
			})();
		}
	}

/***/ }
/******/ ]);
//# sourceMappingURL=script.js.map