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

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(11);

	dom.whenReady(function () {
	    (0, _moduleLoader2.default)({
	        domModules: (0, _domModuleLoader2.default)({
	            modal: _modal2.default,
	            collapse: _collapse2.default,
	            dropdown: _dropdown2.default
	        })
	    });
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9zY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVk7O0FBRVo7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQVJBLFFBQVEsc0JBQVI7O0FBVUEsSUFBSSxTQUFKLENBQWMsWUFBTTtBQUNoQixnQ0FBWTtBQUNSLG9CQUFZLCtCQUFrQjtBQUMxQixrQ0FEMEI7QUFFMUIsd0NBRjBCO0FBRzFCLHdDQUgwQjtTQUFsQixDQUFaO0tBREosRUFEZ0I7Q0FBTixDQUFkIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWlrZWZyYW5jaXMvQ29kZS9mcm9udGVuZC1mcmFtZXdvcmsiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuL3NoaW1zL2NsYXNzTGlzdC5qcycpO1xuXG5pbXBvcnQgbG9hZE1vZHVsZXMgZnJvbSAnQHBvZC1wb2ludC9tb2R1bGUtbG9hZGVyJztcbmltcG9ydCBjb21iaW5lRG9tTW9kdWxlcyBmcm9tICdAcG9kLXBvaW50L2RvbS1tb2R1bGUtbG9hZGVyJztcbmltcG9ydCAqIGFzIGRvbSBmcm9tICdAcG9kLXBvaW50L2RvbS1vcHMnO1xuXG5pbXBvcnQgbW9kYWwgZnJvbSAnLi9tb2R1bGVzL21vZGFsJztcbmltcG9ydCBjb2xsYXBzZSBmcm9tICcuL21vZHVsZXMvY29sbGFwc2UnO1xuaW1wb3J0IGRyb3Bkb3duIGZyb20gJy4vbW9kdWxlcy9kcm9wZG93bic7XG5cbmRvbS53aGVuUmVhZHkoKCkgPT4ge1xuICAgIGxvYWRNb2R1bGVzKHtcbiAgICAgICAgZG9tTW9kdWxlczogY29tYmluZURvbU1vZHVsZXMoe1xuICAgICAgICAgICAgbW9kYWwsXG4gICAgICAgICAgICBjb2xsYXBzZSxcbiAgICAgICAgICAgIGRyb3Bkb3duLFxuICAgICAgICB9KVxuICAgIH0pO1xufSk7XG4iXX0=

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
	        this.overlay = (0, _domOps.selectFirst)('.modal-overlay');

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

	            this.listener = new _domDelegate.Delegate(this.openButton);

	            this.listener.on('click', function (event) {
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
	        }

	        /**
	         * Unbinds the event listeners from the elements.
	         */

	    }, {
	        key: 'unbindEvents',
	        value: function unbindEvents() {
	            this.listener.destroy();
	            this.closeListener.destroy();
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tb2R1bGVzL21vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFJLFlBQVksRUFBWjs7SUFFRTs7Ozs7Ozs7QUFPRixhQVBFLEtBT0YsQ0FBWSxPQUFaLEVBQXFCOzhCQVBuQixPQU9tQjs7QUFDakIsYUFBSyxVQUFMLEdBQWtCLE9BQWxCLENBRGlCO0FBRWpCLGFBQUssV0FBTCxHQUFtQix5QkFBWSxjQUFaLEVBQTRCLEtBQUssS0FBTCxDQUEvQyxDQUZpQjtBQUdqQixhQUFLLEtBQUwsR0FBYSx5QkFBWSxNQUFNLEtBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixLQUF4QixDQUEvQixDQUhpQjtBQUlqQixhQUFLLE9BQUwsR0FBZSx5QkFBWSxnQkFBWixDQUFmLENBSmlCOztBQU1qQixhQUFLLGFBQUwsR0FOaUI7QUFPakIsYUFBSyxjQUFMLEdBUGlCO0tBQXJCOzs7Ozs7O2lCQVBFOzt3Q0FvQmM7OztBQUNaLGlCQUFLLFFBQUwsR0FBZ0IsMEJBQWEsS0FBSyxVQUFMLENBQTdCLENBRFk7O0FBR1osaUJBQUssUUFBTCxDQUFjLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEIsVUFBQyxLQUFELEVBQVc7QUFDakMsc0JBQUssT0FBTCxDQUFhLEtBQWIsRUFEaUM7YUFBWCxDQUExQixDQUhZOzs7Ozs7Ozs7eUNBV0M7OztBQUNiLGlCQUFLLGFBQUwsR0FBcUIsMEJBQWEsS0FBSyxXQUFMLENBQWxDLENBRGE7O0FBR2IsaUJBQUssYUFBTCxDQUFtQixFQUFuQixDQUFzQixPQUF0QixFQUErQixVQUFDLEtBQUQsRUFBVztBQUN0Qyx1QkFBSyxVQUFMLENBQWdCLEtBQWhCLEVBRHNDO2FBQVgsQ0FBL0IsQ0FIYTs7Ozs7Ozs7O3VDQVdGO0FBQ1gsaUJBQUssUUFBTCxDQUFjLE9BQWQsR0FEVztBQUVYLGlCQUFLLGFBQUwsQ0FBbUIsT0FBbkIsR0FGVzs7Ozs7Ozs7OztnQ0FTUCxPQUFPO0FBQ1gsa0JBQU0sY0FBTixHQURXOztBQUdYLGdCQUFJLFdBQVcsQ0FDWCxLQUFLLE9BQUwsRUFDQSxLQUFLLEtBQUwsQ0FGQSxDQUhPOztBQVFYLGlCQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxTQUFTLE1BQVQsRUFBaUIsR0FBckMsRUFBMEM7QUFDdEMsb0JBQUksU0FBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixLQUE4QixNQUE5QixJQUF3QyxDQUFDLFNBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsRUFBMkI7QUFDcEUsNkJBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBNEIsT0FBNUIsQ0FEb0U7aUJBQXhFLE1BRU87QUFDSCw2QkFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUE0QixNQUE1QixDQURHO2lCQUZQO2FBREo7Ozs7Ozs7Ozs7bUNBYU8sT0FBTztBQUNkLGtCQUFNLGNBQU4sR0FEYzs7QUFHZCxnQkFBSSxXQUFXLENBQ1gsS0FBSyxPQUFMLEVBQ0EsS0FBSyxLQUFMLENBRkEsQ0FIVTs7QUFRZCxpQkFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksU0FBUyxNQUFULEVBQWlCLEdBQXJDLEVBQTBDO0FBQ3RDLHlCQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTRCLE1BQTVCLENBRHNDO2FBQTFDOzs7O1dBaEZGOzs7a0JBc0ZTO0FBQ1gsVUFBTSxjQUFTLE9BQVQsRUFBa0I7QUFDcEIsa0JBQVUsSUFBVixDQUFlLElBQUksS0FBSixDQUFVLE9BQVYsQ0FBZixFQURvQjtLQUFsQjs7QUFJTixhQUFTLG1CQUFXO0FBQ2hCLGtCQUFVLE9BQVYsQ0FBa0IsVUFBQyxRQUFEO21CQUFjLFNBQVMsWUFBVDtTQUFkLENBQWxCLENBRGdCO0FBRWhCLG9CQUFZLEVBQVosQ0FGZ0I7S0FBWCIsImZpbGUiOiJtb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWlrZWZyYW5jaXMvQ29kZS9mcm9udGVuZC1mcmFtZXdvcmsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWxlZ2F0ZSB9IGZyb20gJ2RvbS1kZWxlZ2F0ZSc7XG5pbXBvcnQgeyBzZWxlY3RGaXJzdCB9IGZyb20gJ0Bwb2QtcG9pbnQvZG9tLW9wcyc7XG5cbmxldCBpbnN0YW5jZXMgPSBbXTtcblxuY2xhc3MgTW9kYWwge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBtb2RhbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLm9wZW5CdXR0b24gPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uID0gc2VsZWN0Rmlyc3QoJy5tb2RhbC1jbG9zZScsIHRoaXMubW9kYWwpO1xuICAgICAgICB0aGlzLm1vZGFsID0gc2VsZWN0Rmlyc3QoJyMnICsgdGhpcy5vcGVuQnV0dG9uLmRhdGFzZXQubW9kYWwpO1xuICAgICAgICB0aGlzLm92ZXJsYXkgPSBzZWxlY3RGaXJzdCgnLm1vZGFsLW92ZXJsYXknKTtcblxuICAgICAgICB0aGlzLmJpbmRPcGVuRXZlbnQoKTtcbiAgICAgICAgdGhpcy5iaW5kQ2xvc2VFdmVudCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIG9wZW4gbW9kYWwgZXZlbnQuXG4gICAgICovXG4gICAgYmluZE9wZW5FdmVudCgpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IG5ldyBEZWxlZ2F0ZSh0aGlzLm9wZW5CdXR0b24pO1xuXG4gICAgICAgIHRoaXMubGlzdGVuZXIub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRvTW9kYWwoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIHRoZSBjbG9zZSBtb2RhbCBldmVudCB0byB0aGUgY2xvc2UgYnV0dG9uLlxuICAgICAqL1xuICAgIGJpbmRDbG9zZUV2ZW50KCkge1xuICAgICAgICB0aGlzLmNsb3NlTGlzdGVuZXIgPSBuZXcgRGVsZWdhdGUodGhpcy5jbG9zZUJ1dHRvbik7XG5cbiAgICAgICAgdGhpcy5jbG9zZUxpc3RlbmVyLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5iaW5kcyB0aGUgZXZlbnQgbGlzdGVuZXJzIGZyb20gdGhlIGVsZW1lbnRzLlxuICAgICAqL1xuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuY2xvc2VMaXN0ZW5lci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgdGhlIG1vZGFsXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBkb01vZGFsKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyIGVsZW1lbnRzID0gW1xuICAgICAgICAgICAgdGhpcy5vdmVybGF5LFxuICAgICAgICAgICAgdGhpcy5tb2RhbFxuICAgICAgICBdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50c1tpXS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgfHwgIWVsZW1lbnRzW2ldLnN0eWxlLmRpc3BsYXkpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGUgbW9kYWxcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGNsb3NlTW9kYWwoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgZWxlbWVudHMgPSBbXG4gICAgICAgICAgICB0aGlzLm92ZXJsYXksXG4gICAgICAgICAgICB0aGlzLm1vZGFsXG4gICAgICAgIF07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZWxlbWVudHNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgaW5zdGFuY2VzLnB1c2gobmV3IE1vZGFsKGVsZW1lbnQpKTtcbiAgICB9LFxuXG4gICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4gaW5zdGFuY2UudW5iaW5kRXZlbnRzKCkpO1xuICAgICAgICBpbnN0YW5jZXMgPSBbXTtcbiAgICB9XG59O1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tb2R1bGVzL2NvbGxhcHNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFJLFlBQVksRUFBWjs7SUFFRTs7Ozs7Ozs7QUFPRixhQVBFLFFBT0YsQ0FBWSxPQUFaLEVBQXFCOzhCQVBuQixVQU9tQjs7QUFDakIsYUFBSyxPQUFMLEdBQWUsT0FBZixDQURpQjs7QUFHakIsYUFBSyxVQUFMLEdBSGlCO0tBQXJCOzs7Ozs7O2lCQVBFOztxQ0FnQlc7OztBQUNULGlCQUFLLFFBQUwsR0FBZ0IsMEJBQWEsS0FBSyxPQUFMLENBQTdCLENBRFM7O0FBR1QsaUJBQUssUUFBTCxDQUFjLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEIsVUFBQyxLQUFELEVBQVEsS0FBUixFQUFrQjtBQUN4QyxzQkFBSyxVQUFMLENBQWdCLEtBQWhCLEVBQXVCLEtBQXZCLEVBRHdDO2FBQWxCLENBQTFCLENBSFM7Ozs7Ozs7Ozt1Q0FXRTtBQUNYLGlCQUFLLFFBQUwsQ0FBYyxPQUFkLEdBRFc7Ozs7Ozs7Ozs7O21DQVNKLE9BQU8sU0FBUztBQUN2QixrQkFBTSxjQUFOLEdBRHVCOztBQUd2QixnQkFBSSxTQUFTLFFBQVEsT0FBUixDQUFnQixNQUFoQixDQUhVO0FBSXZCLGdCQUFJLFVBQVUseUJBQVksTUFBWixFQUFvQixRQUFRLFVBQVIsQ0FBOUIsQ0FKbUI7O0FBTXZCLGdCQUFJLHNCQUFTLE9BQVQsRUFBa0IsSUFBbEIsQ0FBSixFQUE2QjtBQUN6QixxQ0FBSyxPQUFMLEVBQWMsT0FBZCxFQUR5QjthQUE3QixNQUVPO0FBQ0gscUNBQUssT0FBTCxFQUFjLE9BQWQsRUFERzthQUZQOzs7O1dBMUNGOzs7a0JBbURTO0FBQ1gsVUFBTSxjQUFTLE9BQVQsRUFBa0I7QUFDcEIsa0JBQVUsSUFBVixDQUFlLElBQUksUUFBSixDQUFhLE9BQWIsQ0FBZixFQURvQjtLQUFsQjs7QUFJTixhQUFTLG1CQUFXO0FBQ2hCLGtCQUFVLE9BQVYsQ0FBa0IsVUFBQyxRQUFEO21CQUFjLFNBQVMsWUFBVDtTQUFkLENBQWxCLENBRGdCO0FBRWhCLG9CQUFZLEVBQVosQ0FGZ0I7S0FBWCIsImZpbGUiOiJjb2xsYXBzZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWlrZWZyYW5jaXMvQ29kZS9mcm9udGVuZC1mcmFtZXdvcmsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWxlZ2F0ZSB9IGZyb20gJ2RvbS1kZWxlZ2F0ZSc7XG5pbXBvcnQgeyBzZWxlY3RGaXJzdCwgaGFzQ2xhc3MgfSBmcm9tICdAcG9kLXBvaW50L2RvbS1vcHMnO1xuaW1wb3J0IHsgaGlkZSwgc2hvdyB9IGZyb20gJy4vdXRpbGl0aWVzJztcblxubGV0IGluc3RhbmNlcyA9IFtdO1xuXG5jbGFzcyBDb2xsYXBzZSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGNvbGxhcHNhYmxlIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBjb2xsYXBzZSBldmVudC5cbiAgICAgKi9cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gbmV3IERlbGVnYXRlKHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5lci5vbignY2xpY2snLCAoZXZlbnQsIGlucHV0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRvQ29sbGFwc2UoZXZlbnQsIGlucHV0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5iaW5kcyB0aGUgZXZlbnQgbGlzdGVuZXJzIGZyb20gdGhlIGVsZW1lbnRzLlxuICAgICAqL1xuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29sbGFwc2VzIHRoZSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRyaWdnZXJcbiAgICAgKi9cbiAgICBkb0NvbGxhcHNlKGV2ZW50LCB0cmlnZ2VyKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IHRhcmdldCA9IHRyaWdnZXIuZGF0YXNldC50YXJnZXQ7XG4gICAgICAgIGxldCBlbGVtZW50ID0gc2VsZWN0Rmlyc3QodGFyZ2V0LCB0cmlnZ2VyLnBhcmVudE5vZGUpO1xuXG4gICAgICAgIGlmIChoYXNDbGFzcyhlbGVtZW50LCAnaW4nKSkge1xuICAgICAgICAgICAgaGlkZShlbGVtZW50LCB0cmlnZ2VyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3coZWxlbWVudCwgdHJpZ2dlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgaW5zdGFuY2VzLnB1c2gobmV3IENvbGxhcHNlKGVsZW1lbnQpKTtcbiAgICB9LFxuXG4gICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4gaW5zdGFuY2UudW5iaW5kRXZlbnRzKCkpO1xuICAgICAgICBpbnN0YW5jZXMgPSBbXTtcbiAgICB9XG59O1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tb2R1bGVzL3V0aWxpdGllcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQUFnQjtRQVNBO1FBV0E7UUFlQTtBQW5DVCxTQUFTLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDbEMsUUFBSSxhQUFhLFFBQVEsS0FBUixDQUFjLE1BQWQsQ0FEaUI7QUFFbEMsWUFBUSxLQUFSLENBQWMsTUFBZCxHQUF1QixNQUF2QixDQUZrQztBQUdsQyxRQUFJLFlBQVksaUJBQWlCLE9BQWpCLEVBQTBCLE1BQTFCLENBSGtCO0FBSWxDLFlBQVEsS0FBUixDQUFjLE1BQWQsR0FBdUIsVUFBdkIsQ0FKa0M7QUFLbEMsWUFBUSxZQUFSLENBTGtDO0FBTWxDLFdBQU8sU0FBUCxDQU5rQztDQUEvQjs7QUFTQSxTQUFTLElBQVQsQ0FBYyxPQUFkLEVBQXVCLE9BQXZCLEVBQWdDO0FBQ25DLFlBQVEsU0FBUixDQUFrQixNQUFsQixDQUF5QixVQUF6QixFQURtQztBQUVuQyxZQUFRLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsWUFBdEIsRUFGbUM7QUFHbkMsWUFBUSxTQUFSLENBQWtCLE1BQWxCLENBQXlCLFdBQXpCLEVBSG1DO0FBSW5DLFlBQVEsWUFBUixDQUFxQixlQUFyQixFQUFzQyxJQUF0QyxFQUptQzs7QUFNbkMsWUFBUSxLQUFSLENBQWMsTUFBZCxHQUF1QixhQUFhLE9BQWIsQ0FBdkIsQ0FObUM7O0FBUW5DLGFBQVMsT0FBVCxFQVJtQztDQUFoQzs7QUFXQSxTQUFTLElBQVQsQ0FBYyxPQUFkLEVBQXVCLE9BQXZCLEVBQWdDO0FBQ25DLFlBQVEsU0FBUixDQUFrQixNQUFsQixDQUF5QixVQUF6QixFQURtQztBQUVuQyxZQUFRLFNBQVIsQ0FBa0IsTUFBbEIsQ0FBeUIsSUFBekIsRUFGbUM7QUFHbkMsWUFBUSxTQUFSLENBQWtCLEdBQWxCLENBQXNCLFlBQXRCLEVBSG1DO0FBSW5DLFlBQVEsU0FBUixDQUFrQixHQUFsQixDQUFzQixXQUF0QixFQUptQztBQUtuQyxZQUFRLFlBQVIsQ0FBcUIsZUFBckIsRUFBc0MsS0FBdEM7OztBQUxtQyxXQVFuQyxDQUFRLEtBQVIsQ0FBYyxNQUFkLEdBQXVCLGlCQUFpQixPQUFqQixFQUEwQixNQUExQixDQVJZO0FBU25DLFlBQVEsWUFBUjtBQVRtQyxXQVVuQyxDQUFRLEtBQVIsQ0FBYyxNQUFkLEdBQXVCLEtBQXZCLENBVm1DOztBQVluQyxhQUFTLE9BQVQsRUFabUM7Q0FBaEM7O0FBZUEsU0FBUyxRQUFULENBQWtCLE9BQWxCLEVBQTJCO0FBQzlCLFlBQVEsU0FBUixDQUFrQixNQUFsQixDQUF5QixZQUF6QixFQUQ4QjtBQUU5QixZQUFRLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsVUFBdEIsRUFGOEI7QUFHOUIsWUFBUSxZQUFSLENBQXFCLGVBQXJCLEVBQXNDLEtBQXRDOzs7QUFIOEIsUUFNMUIsUUFBUSxLQUFSLENBQWMsTUFBZCxLQUF5QixLQUF6QixFQUFnQztBQUNoQyxnQkFBUSxTQUFSLENBQWtCLEdBQWxCLENBQXNCLElBQXRCLEVBRGdDO0FBRWhDLGdCQUFRLEtBQVIsQ0FBYyxNQUFkLEdBQXVCLE1BQXZCLENBRmdDO0tBQXBDO0NBTkciLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9taWtlZnJhbmNpcy9Db2RlL2Zyb250ZW5kLWZyYW1ld29yayIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRNYXhIZWlnaHQoZWxlbWVudCkge1xuICAgIHZhciBwcmV2SGVpZ2h0ID0gZWxlbWVudC5zdHlsZS5oZWlnaHQ7XG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICAgdmFyIG1heEhlaWdodCA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuaGVpZ2h0O1xuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gcHJldkhlaWdodDtcbiAgICBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICByZXR1cm4gbWF4SGVpZ2h0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvdyhlbGVtZW50LCB0cmlnZ2VyKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZScpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2luZycpO1xuICAgIHRyaWdnZXIuY2xhc3NMaXN0LnJlbW92ZSgnY29sbGFwc2VkJyk7XG4gICAgdHJpZ2dlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcblxuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gZ2V0TWF4SGVpZ2h0KGVsZW1lbnQpO1xuXG4gICAgY29tcGxldGUoZWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlKGVsZW1lbnQsIHRyaWdnZXIpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNlJyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpbicpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2luZycpO1xuICAgIHRyaWdnZXIuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2VkJyk7XG4gICAgdHJpZ2dlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG5cbiAgICAvLyBSZXNldCBlbGVtZW50J3MgaGVpZ2h0XG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmhlaWdodDtcbiAgICBlbGVtZW50Lm9mZnNldEhlaWdodDsgLy8gZm9yY2UgcmVwYWludFxuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG5cbiAgICBjb21wbGV0ZShlbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBsZXRlKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNpbmcnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJyk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG5cbiAgICAvLyBDaGVjayB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIHVuaGlkZGVuXG4gICAgaWYgKGVsZW1lbnQuc3R5bGUuaGVpZ2h0ICE9PSAnMHB4Jykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2luJyk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgIH1cbn1cbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tb2R1bGVzL2Ryb3Bkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFJLFlBQVksRUFBWjs7SUFFRTs7Ozs7Ozs7QUFPRixhQVBFLFFBT0YsQ0FBWSxPQUFaLEVBQXFCOzhCQVBuQixVQU9tQjs7QUFDakIsYUFBSyxPQUFMLEdBQWUsT0FBZixDQURpQjs7QUFHakIsYUFBSyxVQUFMLEdBSGlCO0tBQXJCOzs7Ozs7O2lCQVBFOztxQ0FnQlc7OztBQUNULGlCQUFLLFFBQUwsR0FBZ0IsMEJBQWEsS0FBSyxPQUFMLENBQTdCLENBRFM7O0FBR1QsaUJBQUssUUFBTCxDQUFjLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEIsVUFBQyxLQUFELEVBQVEsS0FBUixFQUFrQjtBQUN4QyxzQkFBSyxVQUFMLENBQWdCLEtBQWhCLEVBQXVCLEtBQXZCLEVBRHdDO2FBQWxCLENBQTFCLENBSFM7O0FBT1QsaUJBQUssUUFBTCxDQUFjLEVBQWQsQ0FBaUIsTUFBakIsRUFBeUIsVUFBQyxLQUFELEVBQVEsS0FBUixFQUFrQjtBQUN2QyxzQkFBSyxhQUFMLENBQW1CLEtBQW5CLEVBQTBCLEtBQTFCLEVBRHVDO2FBQWxCLENBQXpCLENBUFM7Ozs7Ozs7Ozt1Q0FlRTtBQUNYLGlCQUFLLFFBQUwsQ0FBYyxPQUFkLEdBRFc7Ozs7Ozs7Ozs7O21DQVNKLE9BQU8sT0FBTztBQUNyQixrQkFBTSxjQUFOLEdBRHFCO0FBRXJCLGtCQUFNLGFBQU4sQ0FBb0IsU0FBcEIsQ0FBOEIsTUFBOUIsQ0FBcUMsTUFBckMsRUFGcUI7Ozs7Ozs7Ozs7O3NDQVVYLE9BQU8sT0FBTztBQUN4QixxQ0FBWSxNQUFNLGFBQU4sRUFBcUIsTUFBakM7OztBQUR3QixnQkFJcEIsTUFBTSxhQUFOLElBQXVCLE1BQU0sYUFBTixDQUFvQixZQUFwQixDQUFpQyxnQkFBakMsTUFBdUQsVUFBdkQsRUFBbUU7QUFDMUYsc0JBQU0sYUFBTixDQUFvQixLQUFwQixHQUQwRjthQUE5Rjs7OztXQXRERjs7O2tCQTZEUztBQUNYLFVBQU0sY0FBUyxPQUFULEVBQWtCO0FBQ3BCLGtCQUFVLElBQVYsQ0FBZSxJQUFJLFFBQUosQ0FBYSxPQUFiLENBQWYsRUFEb0I7S0FBbEI7O0FBSU4sYUFBUyxtQkFBVztBQUNoQixrQkFBVSxPQUFWLENBQWtCLFVBQUMsUUFBRDttQkFBYyxTQUFTLFlBQVQ7U0FBZCxDQUFsQixDQURnQjtBQUVoQixvQkFBWSxFQUFaLENBRmdCO0tBQVgiLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21pa2VmcmFuY2lzL0NvZGUvZnJvbnRlbmQtZnJhbWV3b3JrIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVsZWdhdGUgfSBmcm9tICdkb20tZGVsZWdhdGUnO1xuaW1wb3J0IHsgcmVtb3ZlQ2xhc3MgfSBmcm9tICdAcG9kLXBvaW50L2RvbS1vcHMnO1xuXG5sZXQgaW5zdGFuY2VzID0gW107XG5cbmNsYXNzIERyb3BEb3duIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgZHJvcGRvd24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBkcm9wZG93biBldmVudC5cbiAgICAgKi9cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gbmV3IERlbGVnYXRlKHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5lci5vbignY2xpY2snLCAoZXZlbnQsIGlucHV0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRvRHJvcERvd24oZXZlbnQsIGlucHV0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5lci5vbignYmx1cicsIChldmVudCwgaW5wdXQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VEcm9wRG93bihldmVudCwgaW5wdXQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIHRoZSBldmVudCBsaXN0ZW5lcnMgZnJvbSB0aGUgZWxlbWVudHMuXG4gICAgICovXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcm9wcyBkb3duXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGlucHV0XG4gICAgICovXG4gICAgZG9Ecm9wRG93bihldmVudCwgaW5wdXQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSBkcm9wZG93blxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBpbnB1dFxuICAgICAqL1xuICAgIGNsb3NlRHJvcERvd24oZXZlbnQsIGlucHV0KSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKGlucHV0LnBhcmVudEVsZW1lbnQsICdvcGVuJyk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgY2xpY2sgZXZlbnQgb24gdGhlIHRhcmdldCBpZiBpdCBub3Qgb3BlbmluZyBhbm90aGVyIG1lbnVcbiAgICAgICAgaWYgKGV2ZW50LnJlbGF0ZWRUYXJnZXQgJiYgZXZlbnQucmVsYXRlZFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtbW9kdWxlJykgIT09ICdkcm9wZG93bicpIHtcbiAgICAgICAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQuY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBpbnN0YW5jZXMucHVzaChuZXcgRHJvcERvd24oZWxlbWVudCkpO1xuICAgIH0sXG5cbiAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiBpbnN0YW5jZS51bmJpbmRFdmVudHMoKSk7XG4gICAgICAgIGluc3RhbmNlcyA9IFtdO1xuICAgIH1cbn07XG4iXX0=

/***/ },
/* 11 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9zaGltcy9jbGFzc0xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsSUFBSSxjQUFjLElBQWQsRUFBb0I7Ozs7QUFJeEIsS0FBSSxFQUFFLGVBQWUsU0FBUyxhQUFULENBQXVCLEdBQXZCLENBQWYsQ0FBRixJQUNBLFNBQVMsZUFBVCxJQUE0QixFQUFFLGVBQWUsU0FBUyxlQUFULENBQXlCLDRCQUF6QixFQUFzRCxHQUF0RCxDQUFmLENBQUYsRUFBOEU7O0FBRTlHLEdBQUMsVUFBVSxJQUFWLEVBQWdCOztBQUVqQixnQkFGaUI7O0FBSWpCLE9BQUksRUFBRSxhQUFhLElBQWIsQ0FBRixFQUFzQixPQUExQjs7QUFFQSxPQUNHLGdCQUFnQixXQUFoQjtPQUNBLFlBQVksV0FBWjtPQUNBLGVBQWUsS0FBSyxPQUFMLENBQWEsU0FBYixDQUFmO09BQ0EsU0FBUyxNQUFUO09BQ0EsVUFBVSxPQUFPLFNBQVAsRUFBa0IsSUFBbEIsSUFBMEIsWUFBWTtBQUNqRCxXQUFPLEtBQUssT0FBTCxDQUFhLFlBQWIsRUFBMkIsRUFBM0IsQ0FBUCxDQURpRDtJQUFaO09BR3BDLGFBQWEsTUFBTSxTQUFOLEVBQWlCLE9BQWpCLElBQTRCLFVBQVUsSUFBVixFQUFnQjtBQUMxRCxRQUNHLElBQUksQ0FBSjtRQUNBLE1BQU0sS0FBSyxNQUFMLENBSGlEO0FBSzFELFdBQU8sSUFBSSxHQUFKLEVBQVMsR0FBaEIsRUFBcUI7QUFDcEIsU0FBSSxLQUFLLElBQUwsSUFBYSxLQUFLLENBQUwsTUFBWSxJQUFaLEVBQWtCO0FBQ2xDLGFBQU8sQ0FBUCxDQURrQztNQUFuQztLQUREO0FBS0EsV0FBTyxDQUFDLENBQUQsQ0FWbUQ7SUFBaEI7O0FBUjVDO09BcUJHLFFBQVEsU0FBUixLQUFRLENBQVUsSUFBVixFQUFnQixPQUFoQixFQUF5QjtBQUNsQyxTQUFLLElBQUwsR0FBWSxJQUFaLENBRGtDO0FBRWxDLFNBQUssSUFBTCxHQUFZLGFB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LEVBQTBDO0FBQ3pDLFFBQUksVUFBVSxhQUFhLFNBQWIsQ0FBdUIsTUFBdkIsQ0FEMkI7O0FBR3pDLGlCQUFhLFNBQWIsQ0FBdUIsTUFBdkIsR0FBZ0MsVUFBUyxLQUFULEVBQWdCLEtBQWhCLEVBQXVCO0FBQ3RELFNBQUksS0FBSyxTQUFMLElBQWtCLENBQUMsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFELEtBQTBCLENBQUMsS0FBRCxFQUFRO0FBQ3ZELGFBQU8sS0FBUCxDQUR1RDtNQUF4RCxNQUVPO0FBQ04sYUFBTyxRQUFRLElBQVIsQ0FBYSxJQUFiLEVBQW1CLEtBQW5CLENBQVAsQ0FETTtNQUZQO0tBRCtCLENBSFM7SUFBMUM7O0FBYUEsaUJBQWMsSUFBZCxDQTNDWTtHQUFaLEdBQUQsQ0FKTztFQXpLUDtDQUpBIiwiZmlsZSI6ImNsYXNzTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWlrZWZyYW5jaXMvQ29kZS9mcm9udGVuZC1mcmFtZXdvcmsiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogY2xhc3NMaXN0LmpzOiBDcm9zcy1icm93c2VyIGZ1bGwgZWxlbWVudC5jbGFzc0xpc3QgaW1wbGVtZW50YXRpb24uXG4gKiAxLjEuMjAxNTAzMTJcbiAqXG4gKiBCeSBFbGkgR3JleSwgaHR0cDovL2VsaWdyZXkuY29tXG4gKiBMaWNlbnNlOiBEZWRpY2F0ZWQgdG8gdGhlIHB1YmxpYyBkb21haW4uXG4gKiAgIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZWxpZ3JleS9jbGFzc0xpc3QuanMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZFxuICovXG5cbi8qZ2xvYmFsIHNlbGYsIGRvY3VtZW50LCBET01FeGNlcHRpb24gKi9cblxuLyohIEBzb3VyY2UgaHR0cDovL3B1cmwuZWxpZ3JleS5jb20vZ2l0aHViL2NsYXNzTGlzdC5qcy9ibG9iL21hc3Rlci9jbGFzc0xpc3QuanMgKi9cblxuaWYgKFwiZG9jdW1lbnRcIiBpbiBzZWxmKSB7XG5cbi8vIEZ1bGwgcG9seWZpbGwgZm9yIGJyb3dzZXJzIHdpdGggbm8gY2xhc3NMaXN0IHN1cHBvcnRcbi8vIEluY2x1ZGluZyBJRSA8IEVkZ2UgbWlzc2luZyBTVkdFbGVtZW50LmNsYXNzTGlzdFxuaWYgKCEoXCJjbGFzc0xpc3RcIiBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiX1wiKSlcblx0fHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TICYmICEoXCJjbGFzc0xpc3RcIiBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFwiZ1wiKSkpIHtcblxuKGZ1bmN0aW9uICh2aWV3KSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5pZiAoISgnRWxlbWVudCcgaW4gdmlldykpIHJldHVybjtcblxudmFyXG5cdCAgY2xhc3NMaXN0UHJvcCA9IFwiY2xhc3NMaXN0XCJcblx0LCBwcm90b1Byb3AgPSBcInByb3RvdHlwZVwiXG5cdCwgZWxlbUN0clByb3RvID0gdmlldy5FbGVtZW50W3Byb3RvUHJvcF1cblx0LCBvYmpDdHIgPSBPYmplY3Rcblx0LCBzdHJUcmltID0gU3RyaW5nW3Byb3RvUHJvcF0udHJpbSB8fCBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgXCJcIik7XG5cdH1cblx0LCBhcnJJbmRleE9mID0gQXJyYXlbcHJvdG9Qcm9wXS5pbmRleE9mIHx8IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0dmFyXG5cdFx0XHQgIGkgPSAwXG5cdFx0XHQsIGxlbiA9IHRoaXMubGVuZ3RoXG5cdFx0O1xuXHRcdGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkge1xuXHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIC0xO1xuXHR9XG5cdC8vIFZlbmRvcnM6IHBsZWFzZSBhbGxvdyBjb250ZW50IGNvZGUgdG8gaW5zdGFudGlhdGUgRE9NRXhjZXB0aW9uc1xuXHQsIERPTUV4ID0gZnVuY3Rpb24gKHR5cGUsIG1lc3NhZ2UpIHtcblx0XHR0aGlzLm5hbWUgPSB0eXBlO1xuXHRcdHRoaXMuY29kZSA9IERPTUV4Y2VwdGlvblt0eXBlXTtcblx0XHR0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXHR9XG5cdCwgY2hlY2tUb2tlbkFuZEdldEluZGV4ID0gZnVuY3Rpb24gKGNsYXNzTGlzdCwgdG9rZW4pIHtcblx0XHRpZiAodG9rZW4gPT09IFwiXCIpIHtcblx0XHRcdHRocm93IG5ldyBET01FeChcblx0XHRcdFx0ICBcIlNZTlRBWF9FUlJcIlxuXHRcdFx0XHQsIFwiQW4gaW52YWxpZCBvciBpbGxlZ2FsIHN0cmluZyB3YXMgc3BlY2lmaWVkXCJcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGlmICgvXFxzLy50ZXN0KHRva2VuKSkge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4KFxuXHRcdFx0XHQgIFwiSU5WQUxJRF9DSEFSQUNURVJfRVJSXCJcblx0XHRcdFx0LCBcIlN0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3RlclwiXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gYXJySW5kZXhPZi5jYWxsKGNsYXNzTGlzdCwgdG9rZW4pO1xuXHR9XG5cdCwgQ2xhc3NMaXN0ID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0XHR2YXJcblx0XHRcdCAgdHJpbW1lZENsYXNzZXMgPSBzdHJUcmltLmNhbGwoZWxlbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiKVxuXHRcdFx0LCBjbGFzc2VzID0gdHJpbW1lZENsYXNzZXMgPyB0cmltbWVkQ2xhc3Nlcy5zcGxpdCgvXFxzKy8pIDogW11cblx0XHRcdCwgaSA9IDBcblx0XHRcdCwgbGVuID0gY2xhc3Nlcy5sZW5ndGhcblx0XHQ7XG5cdFx0Zm9yICg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0dGhpcy5wdXNoKGNsYXNzZXNbaV0pO1xuXHRcdH1cblx0XHR0aGlzLl91cGRhdGVDbGFzc05hbWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRlbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHRoaXMudG9TdHJpbmcoKSk7XG5cdFx0fTtcblx0fVxuXHQsIGNsYXNzTGlzdFByb3RvID0gQ2xhc3NMaXN0W3Byb3RvUHJvcF0gPSBbXVxuXHQsIGNsYXNzTGlzdEdldHRlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gbmV3IENsYXNzTGlzdCh0aGlzKTtcblx0fVxuO1xuLy8gTW9zdCBET01FeGNlcHRpb24gaW1wbGVtZW50YXRpb25zIGRvbid0IGFsbG93IGNhbGxpbmcgRE9NRXhjZXB0aW9uJ3MgdG9TdHJpbmcoKVxuLy8gb24gbm9uLURPTUV4Y2VwdGlvbnMuIEVycm9yJ3MgdG9TdHJpbmcoKSBpcyBzdWZmaWNpZW50IGhlcmUuXG5ET01FeFtwcm90b1Byb3BdID0gRXJyb3JbcHJvdG9Qcm9wXTtcbmNsYXNzTGlzdFByb3RvLml0ZW0gPSBmdW5jdGlvbiAoaSkge1xuXHRyZXR1cm4gdGhpc1tpXSB8fCBudWxsO1xufTtcbmNsYXNzTGlzdFByb3RvLmNvbnRhaW5zID0gZnVuY3Rpb24gKHRva2VuKSB7XG5cdHRva2VuICs9IFwiXCI7XG5cdHJldHVybiBjaGVja1Rva2VuQW5kR2V0SW5kZXgodGhpcywgdG9rZW4pICE9PSAtMTtcbn07XG5jbGFzc0xpc3RQcm90by5hZGQgPSBmdW5jdGlvbiAoKSB7XG5cdHZhclxuXHRcdCAgdG9rZW5zID0gYXJndW1lbnRzXG5cdFx0LCBpID0gMFxuXHRcdCwgbCA9IHRva2Vucy5sZW5ndGhcblx0XHQsIHRva2VuXG5cdFx0LCB1cGRhdGVkID0gZmFsc2Vcblx0O1xuXHRkbyB7XG5cdFx0dG9rZW4gPSB0b2tlbnNbaV0gKyBcIlwiO1xuXHRcdGlmIChjaGVja1Rva2VuQW5kR2V0SW5kZXgodGhpcywgdG9rZW4pID09PSAtMSkge1xuXHRcdFx0dGhpcy5wdXNoKHRva2VuKTtcblx0XHRcdHVwZGF0ZWQgPSB0cnVlO1xuXHRcdH1cblx0fVxuXHR3aGlsZSAoKytpIDwgbCk7XG5cblx0aWYgKHVwZGF0ZWQpIHtcblx0XHR0aGlzLl91cGRhdGVDbGFzc05hbWUoKTtcblx0fVxufTtcbmNsYXNzTGlzdFByb3RvLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0dmFyXG5cdFx0ICB0b2tlbnMgPSBhcmd1bWVudHNcblx0XHQsIGkgPSAwXG5cdFx0LCBsID0gdG9rZW5zLmxlbmd0aFxuXHRcdCwgdG9rZW5cblx0XHQsIHVwZGF0ZWQgPSBmYWxzZVxuXHRcdCwgaW5kZXhcblx0O1xuXHRkbyB7XG5cdFx0dG9rZW4gPSB0b2tlbnNbaV0gKyBcIlwiO1xuXHRcdGluZGV4ID0gY2hlY2tUb2tlbkFuZEdldEluZGV4KHRoaXMsIHRva2VuKTtcblx0XHR3aGlsZSAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHR0aGlzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHR1cGRhdGVkID0gdHJ1ZTtcblx0XHRcdGluZGV4ID0gY2hlY2tUb2tlbkFuZEdldEluZGV4KHRoaXMsIHRva2VuKTtcblx0XHR9XG5cdH1cblx0d2hpbGUgKCsraSA8IGwpO1xuXG5cdGlmICh1cGRhdGVkKSB7XG5cdFx0dGhpcy5fdXBkYXRlQ2xhc3NOYW1lKCk7XG5cdH1cbn07XG5jbGFzc0xpc3RQcm90by50b2dnbGUgPSBmdW5jdGlvbiAodG9rZW4sIGZvcmNlKSB7XG5cdHRva2VuICs9IFwiXCI7XG5cblx0dmFyXG5cdFx0ICByZXN1bHQgPSB0aGlzLmNvbnRhaW5zKHRva2VuKVxuXHRcdCwgbWV0aG9kID0gcmVzdWx0ID9cblx0XHRcdGZvcmNlICE9PSB0cnVlICYmIFwicmVtb3ZlXCJcblx0XHQ6XG5cdFx0XHRmb3JjZSAhPT0gZmFsc2UgJiYgXCJhZGRcIlxuXHQ7XG5cblx0aWYgKG1ldGhvZCkge1xuXHRcdHRoaXNbbWV0aG9kXSh0b2tlbik7XG5cdH1cblxuXHRpZiAoZm9yY2UgPT09IHRydWUgfHwgZm9yY2UgPT09IGZhbHNlKSB7XG5cdFx0cmV0dXJuIGZvcmNlO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAhcmVzdWx0O1xuXHR9XG59O1xuY2xhc3NMaXN0UHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLmpvaW4oXCIgXCIpO1xufTtcblxuaWYgKG9iakN0ci5kZWZpbmVQcm9wZXJ0eSkge1xuXHR2YXIgY2xhc3NMaXN0UHJvcERlc2MgPSB7XG5cdFx0ICBnZXQ6IGNsYXNzTGlzdEdldHRlclxuXHRcdCwgZW51bWVyYWJsZTogdHJ1ZVxuXHRcdCwgY29uZmlndXJhYmxlOiB0cnVlXG5cdH07XG5cdHRyeSB7XG5cdFx0b2JqQ3RyLmRlZmluZVByb3BlcnR5KGVsZW1DdHJQcm90bywgY2xhc3NMaXN0UHJvcCwgY2xhc3NMaXN0UHJvcERlc2MpO1xuXHR9IGNhdGNoIChleCkgeyAvLyBJRSA4IGRvZXNuJ3Qgc3VwcG9ydCBlbnVtZXJhYmxlOnRydWVcblx0XHRpZiAoZXgubnVtYmVyID09PSAtMHg3RkY1RUM1NCkge1xuXHRcdFx0Y2xhc3NMaXN0UHJvcERlc2MuZW51bWVyYWJsZSA9IGZhbHNlO1xuXHRcdFx0b2JqQ3RyLmRlZmluZVByb3BlcnR5KGVsZW1DdHJQcm90bywgY2xhc3NMaXN0UHJvcCwgY2xhc3NMaXN0UHJvcERlc2MpO1xuXHRcdH1cblx0fVxufSBlbHNlIGlmIChvYmpDdHJbcHJvdG9Qcm9wXS5fX2RlZmluZUdldHRlcl9fKSB7XG5cdGVsZW1DdHJQcm90by5fX2RlZmluZUdldHRlcl9fKGNsYXNzTGlzdFByb3AsIGNsYXNzTGlzdEdldHRlcik7XG59XG5cbn0oc2VsZikpO1xuXG59IGVsc2Uge1xuLy8gVGhlcmUgaXMgZnVsbCBvciBwYXJ0aWFsIG5hdGl2ZSBjbGFzc0xpc3Qgc3VwcG9ydCwgc28ganVzdCBjaGVjayBpZiB3ZSBuZWVkXG4vLyB0byBub3JtYWxpemUgdGhlIGFkZC9yZW1vdmUgYW5kIHRvZ2dsZSBBUElzLlxuXG4oZnVuY3Rpb24gKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHR2YXIgdGVzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiX1wiKTtcblxuXHR0ZXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYzFcIiwgXCJjMlwiKTtcblxuXHQvLyBQb2x5ZmlsbCBmb3IgSUUgMTAvMTEgYW5kIEZpcmVmb3ggPDI2LCB3aGVyZSBjbGFzc0xpc3QuYWRkIGFuZFxuXHQvLyBjbGFzc0xpc3QucmVtb3ZlIGV4aXN0IGJ1dCBzdXBwb3J0IG9ubHkgb25lIGFyZ3VtZW50IGF0IGEgdGltZS5cblx0aWYgKCF0ZXN0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjMlwiKSkge1xuXHRcdHZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbihtZXRob2QpIHtcblx0XHRcdHZhciBvcmlnaW5hbCA9IERPTVRva2VuTGlzdC5wcm90b3R5cGVbbWV0aG9kXTtcblxuXHRcdFx0RE9NVG9rZW5MaXN0LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odG9rZW4pIHtcblx0XHRcdFx0dmFyIGksIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdFx0dG9rZW4gPSBhcmd1bWVudHNbaV07XG5cdFx0XHRcdFx0b3JpZ2luYWwuY2FsbCh0aGlzLCB0b2tlbik7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fTtcblx0XHRjcmVhdGVNZXRob2QoJ2FkZCcpO1xuXHRcdGNyZWF0ZU1ldGhvZCgncmVtb3ZlJyk7XG5cdH1cblxuXHR0ZXN0RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiYzNcIiwgZmFsc2UpO1xuXG5cdC8vIFBvbHlmaWxsIGZvciBJRSAxMCBhbmQgRmlyZWZveCA8MjQsIHdoZXJlIGNsYXNzTGlzdC50b2dnbGUgZG9lcyBub3Rcblx0Ly8gc3VwcG9ydCB0aGUgc2Vjb25kIGFyZ3VtZW50LlxuXHRpZiAodGVzdEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYzNcIikpIHtcblx0XHR2YXIgX3RvZ2dsZSA9IERPTVRva2VuTGlzdC5wcm90b3R5cGUudG9nZ2xlO1xuXG5cdFx0RE9NVG9rZW5MaXN0LnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbih0b2tlbiwgZm9yY2UpIHtcblx0XHRcdGlmICgxIGluIGFyZ3VtZW50cyAmJiAhdGhpcy5jb250YWlucyh0b2tlbikgPT09ICFmb3JjZSkge1xuXHRcdFx0XHRyZXR1cm4gZm9yY2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gX3RvZ2dsZS5jYWxsKHRoaXMsIHRva2VuKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdH1cblxuXHR0ZXN0RWxlbWVudCA9IG51bGw7XG59KCkpO1xuXG59XG5cbn1cblxuIl19

/***/ }
/******/ ]);