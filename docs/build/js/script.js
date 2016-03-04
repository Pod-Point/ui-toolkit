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

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	dom.whenReady(function () {
	    (0, _moduleLoader2.default)({
	        domModules: (0, _domModuleLoader2.default)({
	            modal: _modal2.default
	        })
	    });
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9zY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBRVk7Ozs7Ozs7Ozs7QUFJWixJQUFJLFNBQUosQ0FBYyxZQUFNO0FBQ2hCLGdDQUFZO0FBQ1Isb0JBQVksK0JBQWtCO0FBQzFCLGtDQUQwQjtTQUFsQixDQUFaO0tBREosRUFEZ0I7Q0FBTixDQUFkIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYmVuL1Byb2plY3RzL2Zyb250ZW5kLWZyYW1ld29yayIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2FkTW9kdWxlcyBmcm9tICdAcG9kLXBvaW50L21vZHVsZS1sb2FkZXInO1xuaW1wb3J0IGNvbWJpbmVEb21Nb2R1bGVzIGZyb20gJ0Bwb2QtcG9pbnQvZG9tLW1vZHVsZS1sb2FkZXInO1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJ0Bwb2QtcG9pbnQvZG9tLW9wcyc7XG5cbmltcG9ydCBtb2RhbCBmcm9tICcuL21vZHVsZXMvbW9kYWwnO1xuXG5kb20ud2hlblJlYWR5KCgpID0+IHtcbiAgICBsb2FkTW9kdWxlcyh7XG4gICAgICAgIGRvbU1vZHVsZXM6IGNvbWJpbmVEb21Nb2R1bGVzKHtcbiAgICAgICAgICAgIG1vZGFsLFxuICAgICAgICB9KVxuICAgIH0pO1xufSk7XG4iXX0=

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
	     * Creates a new modeal.
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
	         * @param  {[type]} event
	         * @param  {[type]} input
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
	         * @param  {[type]} event
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tb2R1bGVzL21vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBSSxZQUFZLEVBQVo7O0lBRUU7Ozs7Ozs7O0FBT0YsYUFQRSxLQU9GLENBQVksT0FBWixFQUFxQjs4QkFQbkIsT0FPbUI7O0FBQ2pCLGFBQUssVUFBTCxHQUFrQixPQUFsQixDQURpQjtBQUVqQixhQUFLLFdBQUwsR0FBbUIseUJBQVksY0FBWixFQUE0QixLQUFLLEtBQUwsQ0FBL0MsQ0FGaUI7QUFHakIsYUFBSyxLQUFMLEdBQWEseUJBQVksTUFBTSxLQUFLLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBd0IsS0FBeEIsQ0FBL0IsQ0FIaUI7QUFJakIsYUFBSyxPQUFMLEdBQWUseUJBQVksZ0JBQVosQ0FBZixDQUppQjs7QUFNakIsYUFBSyxhQUFMLEdBTmlCO0FBT2pCLGFBQUssY0FBTCxHQVBpQjtLQUFyQjs7Ozs7OztpQkFQRTs7d0NBb0JjOzs7QUFDWixpQkFBSyxRQUFMLEdBQWdCLDBCQUFhLEtBQUssVUFBTCxDQUE3QixDQURZOztBQUdaLGlCQUFLLFFBQUwsQ0FBYyxFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFVBQUMsS0FBRCxFQUFXO0FBQ2pDLHNCQUFLLE9BQUwsQ0FBYSxLQUFiLEVBRGlDO2FBQVgsQ0FBMUIsQ0FIWTs7Ozs7Ozs7O3lDQVdDOzs7QUFDYixpQkFBSyxhQUFMLEdBQXFCLDBCQUFhLEtBQUssV0FBTCxDQUFsQyxDQURhOztBQUdiLGlCQUFLLGFBQUwsQ0FBbUIsRUFBbkIsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBQyxLQUFELEVBQVc7QUFDdEMsdUJBQUssVUFBTCxDQUFnQixLQUFoQixFQURzQzthQUFYLENBQS9CLENBSGE7Ozs7Ozs7Ozt1Q0FXRjtBQUNYLGlCQUFLLFFBQUwsQ0FBYyxPQUFkLEdBRFc7QUFFWCxpQkFBSyxhQUFMLENBQW1CLE9BQW5CLEdBRlc7Ozs7Ozs7Ozs7O2dDQVVQLE9BQU87QUFDWCxrQkFBTSxjQUFOLEdBRFc7O0FBR1gsZ0JBQUksV0FBVyxDQUNYLEtBQUssT0FBTCxFQUNBLEtBQUssS0FBTCxDQUZBLENBSE87O0FBUVgsaUJBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLFNBQVMsTUFBVCxFQUFpQixHQUFyQyxFQUEwQztBQUN0QyxvQkFBSSxTQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEtBQThCLE1BQTlCLElBQXdDLENBQUMsU0FBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixFQUEyQjtBQUNwRSw2QkFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUE0QixPQUE1QixDQURvRTtpQkFBeEUsTUFFTztBQUNILDZCQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTRCLE1BQTVCLENBREc7aUJBRlA7YUFESjs7Ozs7Ozs7OzttQ0FhTyxPQUFPO0FBQ2Qsa0JBQU0sY0FBTixHQURjOztBQUdkLGdCQUFJLFdBQVcsQ0FDWCxLQUFLLE9BQUwsRUFDQSxLQUFLLEtBQUwsQ0FGQSxDQUhVOztBQVFkLGlCQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxTQUFTLE1BQVQsRUFBaUIsR0FBckMsRUFBMEM7QUFDdEMseUJBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBNEIsTUFBNUIsQ0FEc0M7YUFBMUM7Ozs7V0FqRkY7OztrQkF1RlM7QUFDWCxVQUFNLGNBQVMsT0FBVCxFQUFrQjtBQUNwQixrQkFBVSxJQUFWLENBQWUsSUFBSSxLQUFKLENBQVUsT0FBVixDQUFmLEVBRG9CO0tBQWxCOztBQUlOLGFBQVMsbUJBQVc7QUFDaEIsa0JBQVUsT0FBVixDQUFrQixVQUFDLFFBQUQ7bUJBQWMsU0FBUyxZQUFUO1NBQWQsQ0FBbEIsQ0FEZ0I7QUFFaEIsb0JBQVksRUFBWixDQUZnQjtLQUFYIiwiZmlsZSI6Im1vZGFsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9iZW4vUHJvamVjdHMvZnJvbnRlbmQtZnJhbWV3b3JrIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVsZWdhdGUgfSBmcm9tICdkb20tZGVsZWdhdGUnO1xuaW1wb3J0IHsgc2VsZWN0Rmlyc3QgfSBmcm9tICdAcG9kLXBvaW50L2RvbS1vcHMnO1xuXG5sZXQgaW5zdGFuY2VzID0gW107XG5cbmNsYXNzIE1vZGFsIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgbW9kZWFsLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMub3BlbkJ1dHRvbiA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24gPSBzZWxlY3RGaXJzdCgnLm1vZGFsLWNsb3NlJywgdGhpcy5tb2RhbCk7XG4gICAgICAgIHRoaXMubW9kYWwgPSBzZWxlY3RGaXJzdCgnIycgKyB0aGlzLm9wZW5CdXR0b24uZGF0YXNldC5tb2RhbCk7XG4gICAgICAgIHRoaXMub3ZlcmxheSA9IHNlbGVjdEZpcnN0KCcubW9kYWwtb3ZlcmxheScpO1xuXG4gICAgICAgIHRoaXMuYmluZE9wZW5FdmVudCgpO1xuICAgICAgICB0aGlzLmJpbmRDbG9zZUV2ZW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZHMgb3BlbiBtb2RhbCBldmVudC5cbiAgICAgKi9cbiAgICBiaW5kT3BlbkV2ZW50KCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gbmV3IERlbGVnYXRlKHRoaXMub3BlbkJ1dHRvbik7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5lci5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZG9Nb2RhbChldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhlIGNsb3NlIG1vZGFsIGV2ZW50IHRvIHRoZSBjbG9zZSBidXR0b24uXG4gICAgICovXG4gICAgYmluZENsb3NlRXZlbnQoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VMaXN0ZW5lciA9IG5ldyBEZWxlZ2F0ZSh0aGlzLmNsb3NlQnV0dG9uKTtcblxuICAgICAgICB0aGlzLmNsb3NlTGlzdGVuZXIub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIHRoZSBldmVudCBsaXN0ZW5lcnMgZnJvbSB0aGUgZWxlbWVudHMuXG4gICAgICovXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5jbG9zZUxpc3RlbmVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVucyB0aGUgbW9kYWxcbiAgICAgKiBAcGFyYW0gIHtbdHlwZV19IGV2ZW50XG4gICAgICogQHBhcmFtICB7W3R5cGVdfSBpbnB1dFxuICAgICAqL1xuICAgIGRvTW9kYWwoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgZWxlbWVudHMgPSBbXG4gICAgICAgICAgICB0aGlzLm92ZXJsYXksXG4gICAgICAgICAgICB0aGlzLm1vZGFsXG4gICAgICAgIF07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnRzW2ldLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyB8fCAhZWxlbWVudHNbaV0uc3R5bGUuZGlzcGxheSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSBtb2RhbFxuICAgICAqIEBwYXJhbSAge1t0eXBlXX0gZXZlbnRcbiAgICAgKi9cbiAgICBjbG9zZU1vZGFsKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyIGVsZW1lbnRzID0gW1xuICAgICAgICAgICAgdGhpcy5vdmVybGF5LFxuICAgICAgICAgICAgdGhpcy5tb2RhbFxuICAgICAgICBdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGVsZW1lbnRzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGluc3RhbmNlcy5wdXNoKG5ldyBNb2RhbChlbGVtZW50KSk7XG4gICAgfSxcblxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IGluc3RhbmNlLnVuYmluZEV2ZW50cygpKTtcbiAgICAgICAgaW5zdGFuY2VzID0gW107XG4gICAgfVxufTtcbiJdfQ==

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


/***/ }
/******/ ]);