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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9zY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBSVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUpaLFFBQVEsc0JBQVI7O0FBVUEsSUFBSSxTQUFKLENBQWMsWUFBTTtBQUNoQixnQ0FBWTtBQUNSLG9CQUFZLCtCQUFrQjtBQUMxQixrQ0FEMEI7QUFFMUIsd0NBRjBCO0FBRzFCLHdDQUgwQjtTQUFsQixDQUFaO0tBREosRUFEZ0I7Q0FBTixDQUFkIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYmVuL1Byb2plY3RzL2Zyb250ZW5kLWZyYW1ld29yayIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vc2hpbXMvY2xhc3NMaXN0LmpzJyk7XG5cbmltcG9ydCBsb2FkTW9kdWxlcyBmcm9tICdAcG9kLXBvaW50L21vZHVsZS1sb2FkZXInO1xuaW1wb3J0IGNvbWJpbmVEb21Nb2R1bGVzIGZyb20gJ0Bwb2QtcG9pbnQvZG9tLW1vZHVsZS1sb2FkZXInO1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJ0Bwb2QtcG9pbnQvZG9tLW9wcyc7XG5cbmltcG9ydCBtb2RhbCBmcm9tICcuL21vZHVsZXMvbW9kYWwnO1xuaW1wb3J0IGNvbGxhcHNlIGZyb20gJy4vbW9kdWxlcy9jb2xsYXBzZSc7XG5pbXBvcnQgZHJvcGRvd24gZnJvbSAnLi9tb2R1bGVzL2Ryb3Bkb3duJztcblxuZG9tLndoZW5SZWFkeSgoKSA9PiB7XG4gICAgbG9hZE1vZHVsZXMoe1xuICAgICAgICBkb21Nb2R1bGVzOiBjb21iaW5lRG9tTW9kdWxlcyh7XG4gICAgICAgICAgICBtb2RhbCxcbiAgICAgICAgICAgIGNvbGxhcHNlLFxuICAgICAgICAgICAgZHJvcGRvd24sXG4gICAgICAgIH0pXG4gICAgfSk7XG59KTtcbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tb2R1bGVzL21vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBSSxZQUFZLEVBQVo7O0lBRUU7Ozs7Ozs7O0FBT0YsYUFQRSxLQU9GLENBQVksT0FBWixFQUFxQjs4QkFQbkIsT0FPbUI7O0FBQ2pCLGFBQUssVUFBTCxHQUFrQixPQUFsQixDQURpQjtBQUVqQixhQUFLLFdBQUwsR0FBbUIseUJBQVksY0FBWixFQUE0QixLQUFLLEtBQUwsQ0FBL0MsQ0FGaUI7QUFHakIsYUFBSyxLQUFMLEdBQWEseUJBQVksTUFBTSxLQUFLLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBd0IsS0FBeEIsQ0FBL0IsQ0FIaUI7QUFJakIsYUFBSyxPQUFMLEdBQWUseUJBQVksZ0JBQVosQ0FBZixDQUppQjs7QUFNakIsYUFBSyxhQUFMLEdBTmlCO0FBT2pCLGFBQUssY0FBTCxHQVBpQjtLQUFyQjs7Ozs7OztpQkFQRTs7d0NBb0JjOzs7QUFDWixpQkFBSyxRQUFMLEdBQWdCLDBCQUFhLEtBQUssVUFBTCxDQUE3QixDQURZOztBQUdaLGlCQUFLLFFBQUwsQ0FBYyxFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFVBQUMsS0FBRCxFQUFXO0FBQ2pDLHNCQUFLLE9BQUwsQ0FBYSxLQUFiLEVBRGlDO2FBQVgsQ0FBMUIsQ0FIWTs7Ozs7Ozs7O3lDQVdDOzs7QUFDYixpQkFBSyxhQUFMLEdBQXFCLDBCQUFhLEtBQUssV0FBTCxDQUFsQyxDQURhOztBQUdiLGlCQUFLLGFBQUwsQ0FBbUIsRUFBbkIsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBQyxLQUFELEVBQVc7QUFDdEMsdUJBQUssVUFBTCxDQUFnQixLQUFoQixFQURzQzthQUFYLENBQS9CLENBSGE7Ozs7Ozs7Ozt1Q0FXRjtBQUNYLGlCQUFLLFFBQUwsQ0FBYyxPQUFkLEdBRFc7QUFFWCxpQkFBSyxhQUFMLENBQW1CLE9BQW5CLEdBRlc7Ozs7Ozs7Ozs7Z0NBU1AsT0FBTztBQUNYLGtCQUFNLGNBQU4sR0FEVzs7QUFHWCxnQkFBSSxXQUFXLENBQ1gsS0FBSyxPQUFMLEVBQ0EsS0FBSyxLQUFMLENBRkEsQ0FITzs7QUFRWCxpQkFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksU0FBUyxNQUFULEVBQWlCLEdBQXJDLEVBQTBDO0FBQ3RDLG9CQUFJLFNBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsS0FBOEIsTUFBOUIsSUFBd0MsQ0FBQyxTQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEVBQTJCO0FBQ3BFLDZCQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTRCLE9BQTVCLENBRG9FO2lCQUF4RSxNQUVPO0FBQ0gsNkJBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBNEIsTUFBNUIsQ0FERztpQkFGUDthQURKOzs7Ozs7Ozs7O21DQWFPLE9BQU87QUFDZCxrQkFBTSxjQUFOLEdBRGM7O0FBR2QsZ0JBQUksV0FBVyxDQUNYLEtBQUssT0FBTCxFQUNBLEtBQUssS0FBTCxDQUZBLENBSFU7O0FBUWQsaUJBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLFNBQVMsTUFBVCxFQUFpQixHQUFyQyxFQUEwQztBQUN0Qyx5QkFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUE0QixNQUE1QixDQURzQzthQUExQzs7OztXQWhGRjs7O2tCQXNGUztBQUNYLFVBQU0sY0FBUyxPQUFULEVBQWtCO0FBQ3BCLGtCQUFVLElBQVYsQ0FBZSxJQUFJLEtBQUosQ0FBVSxPQUFWLENBQWYsRUFEb0I7S0FBbEI7O0FBSU4sYUFBUyxtQkFBVztBQUNoQixrQkFBVSxPQUFWLENBQWtCLFVBQUMsUUFBRDttQkFBYyxTQUFTLFlBQVQ7U0FBZCxDQUFsQixDQURnQjtBQUVoQixvQkFBWSxFQUFaLENBRmdCO0tBQVgiLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Jlbi9Qcm9qZWN0cy9mcm9udGVuZC1mcmFtZXdvcmsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWxlZ2F0ZSB9IGZyb20gJ2RvbS1kZWxlZ2F0ZSc7XG5pbXBvcnQgeyBzZWxlY3RGaXJzdCB9IGZyb20gJ0Bwb2QtcG9pbnQvZG9tLW9wcyc7XG5cbmxldCBpbnN0YW5jZXMgPSBbXTtcblxuY2xhc3MgTW9kYWwge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBtb2RhbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLm9wZW5CdXR0b24gPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uID0gc2VsZWN0Rmlyc3QoJy5tb2RhbC1jbG9zZScsIHRoaXMubW9kYWwpO1xuICAgICAgICB0aGlzLm1vZGFsID0gc2VsZWN0Rmlyc3QoJyMnICsgdGhpcy5vcGVuQnV0dG9uLmRhdGFzZXQubW9kYWwpO1xuICAgICAgICB0aGlzLm92ZXJsYXkgPSBzZWxlY3RGaXJzdCgnLm1vZGFsLW92ZXJsYXknKTtcblxuICAgICAgICB0aGlzLmJpbmRPcGVuRXZlbnQoKTtcbiAgICAgICAgdGhpcy5iaW5kQ2xvc2VFdmVudCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIG9wZW4gbW9kYWwgZXZlbnQuXG4gICAgICovXG4gICAgYmluZE9wZW5FdmVudCgpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IG5ldyBEZWxlZ2F0ZSh0aGlzLm9wZW5CdXR0b24pO1xuXG4gICAgICAgIHRoaXMubGlzdGVuZXIub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRvTW9kYWwoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIHRoZSBjbG9zZSBtb2RhbCBldmVudCB0byB0aGUgY2xvc2UgYnV0dG9uLlxuICAgICAqL1xuICAgIGJpbmRDbG9zZUV2ZW50KCkge1xuICAgICAgICB0aGlzLmNsb3NlTGlzdGVuZXIgPSBuZXcgRGVsZWdhdGUodGhpcy5jbG9zZUJ1dHRvbik7XG5cbiAgICAgICAgdGhpcy5jbG9zZUxpc3RlbmVyLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5iaW5kcyB0aGUgZXZlbnQgbGlzdGVuZXJzIGZyb20gdGhlIGVsZW1lbnRzLlxuICAgICAqL1xuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuY2xvc2VMaXN0ZW5lci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgdGhlIG1vZGFsXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBkb01vZGFsKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyIGVsZW1lbnRzID0gW1xuICAgICAgICAgICAgdGhpcy5vdmVybGF5LFxuICAgICAgICAgICAgdGhpcy5tb2RhbFxuICAgICAgICBdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50c1tpXS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgfHwgIWVsZW1lbnRzW2ldLnN0eWxlLmRpc3BsYXkpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGUgbW9kYWxcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGNsb3NlTW9kYWwoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgZWxlbWVudHMgPSBbXG4gICAgICAgICAgICB0aGlzLm92ZXJsYXksXG4gICAgICAgICAgICB0aGlzLm1vZGFsXG4gICAgICAgIF07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZWxlbWVudHNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgaW5zdGFuY2VzLnB1c2gobmV3IE1vZGFsKGVsZW1lbnQpKTtcbiAgICB9LFxuXG4gICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4gaW5zdGFuY2UudW5iaW5kRXZlbnRzKCkpO1xuICAgICAgICBpbnN0YW5jZXMgPSBbXTtcbiAgICB9XG59O1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tb2R1bGVzL2NvbGxhcHNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFJLFlBQVksRUFBWjs7SUFFRTs7Ozs7Ozs7QUFPRixhQVBFLFFBT0YsQ0FBWSxPQUFaLEVBQXFCOzhCQVBuQixVQU9tQjs7QUFDakIsYUFBSyxPQUFMLEdBQWUsT0FBZixDQURpQjs7QUFHakIsYUFBSyxVQUFMLEdBSGlCO0tBQXJCOzs7Ozs7O2lCQVBFOztxQ0FnQlc7OztBQUNULGlCQUFLLFFBQUwsR0FBZ0IsMEJBQWEsS0FBSyxPQUFMLENBQTdCLENBRFM7O0FBR1QsaUJBQUssUUFBTCxDQUFjLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEIsVUFBQyxLQUFELEVBQVEsS0FBUixFQUFrQjtBQUN4QyxzQkFBSyxVQUFMLENBQWdCLEtBQWhCLEVBQXVCLEtBQXZCLEVBRHdDO2FBQWxCLENBQTFCLENBSFM7Ozs7Ozs7Ozt1Q0FXRTtBQUNYLGlCQUFLLFFBQUwsQ0FBYyxPQUFkLEdBRFc7Ozs7Ozs7Ozs7O21DQVNKLE9BQU8sU0FBUztBQUN2QixrQkFBTSxjQUFOLEdBRHVCOztBQUd2QixnQkFBSSxTQUFTLFFBQVEsT0FBUixDQUFnQixNQUFoQixDQUhVO0FBSXZCLGdCQUFJLFVBQVUseUJBQVksTUFBWixFQUFvQixRQUFRLFVBQVIsQ0FBOUIsQ0FKbUI7O0FBTXZCLGdCQUFJLHNCQUFTLE9BQVQsRUFBa0IsSUFBbEIsQ0FBSixFQUE2QjtBQUN6QixxQ0FBSyxPQUFMLEVBQWMsT0FBZCxFQUR5QjthQUE3QixNQUVPO0FBQ0gscUNBQUssT0FBTCxFQUFjLE9BQWQsRUFERzthQUZQOzs7O1dBMUNGOzs7a0JBbURTO0FBQ1gsVUFBTSxjQUFTLE9BQVQsRUFBa0I7QUFDcEIsa0JBQVUsSUFBVixDQUFlLElBQUksUUFBSixDQUFhLE9BQWIsQ0FBZixFQURvQjtLQUFsQjs7QUFJTixhQUFTLG1CQUFXO0FBQ2hCLGtCQUFVLE9BQVYsQ0FBa0IsVUFBQyxRQUFEO21CQUFjLFNBQVMsWUFBVDtTQUFkLENBQWxCLENBRGdCO0FBRWhCLG9CQUFZLEVBQVosQ0FGZ0I7S0FBWCIsImZpbGUiOiJjb2xsYXBzZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYmVuL1Byb2plY3RzL2Zyb250ZW5kLWZyYW1ld29yayIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlbGVnYXRlIH0gZnJvbSAnZG9tLWRlbGVnYXRlJztcbmltcG9ydCB7IHNlbGVjdEZpcnN0LCBoYXNDbGFzcyB9IGZyb20gJ0Bwb2QtcG9pbnQvZG9tLW9wcyc7XG5pbXBvcnQgeyBoaWRlLCBzaG93IH0gZnJvbSAnLi91dGlsaXRpZXMnO1xuXG5sZXQgaW5zdGFuY2VzID0gW107XG5cbmNsYXNzIENvbGxhcHNlIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgY29sbGFwc2FibGUgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGNvbGxhcHNlIGV2ZW50LlxuICAgICAqL1xuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBuZXcgRGVsZWdhdGUodGhpcy5lbGVtZW50KTtcblxuICAgICAgICB0aGlzLmxpc3RlbmVyLm9uKCdjbGljaycsIChldmVudCwgaW5wdXQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZG9Db2xsYXBzZShldmVudCwgaW5wdXQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIHRoZSBldmVudCBsaXN0ZW5lcnMgZnJvbSB0aGUgZWxlbWVudHMuXG4gICAgICovXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb2xsYXBzZXMgdGhlIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdHJpZ2dlclxuICAgICAqL1xuICAgIGRvQ29sbGFwc2UoZXZlbnQsIHRyaWdnZXIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQgdGFyZ2V0ID0gdHJpZ2dlci5kYXRhc2V0LnRhcmdldDtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBzZWxlY3RGaXJzdCh0YXJnZXQsIHRyaWdnZXIucGFyZW50Tm9kZSk7XG5cbiAgICAgICAgaWYgKGhhc0NsYXNzKGVsZW1lbnQsICdpbicpKSB7XG4gICAgICAgICAgICBoaWRlKGVsZW1lbnQsIHRyaWdnZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvdyhlbGVtZW50LCB0cmlnZ2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBpbnN0YW5jZXMucHVzaChuZXcgQ29sbGFwc2UoZWxlbWVudCkpO1xuICAgIH0sXG5cbiAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiBpbnN0YW5jZS51bmJpbmRFdmVudHMoKSk7XG4gICAgICAgIGluc3RhbmNlcyA9IFtdO1xuICAgIH1cbn07XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tb2R1bGVzL3V0aWxpdGllcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQUFnQjtRQVNBO1FBV0E7UUFlQTtBQW5DVCxTQUFTLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDbEMsUUFBSSxhQUFhLFFBQVEsS0FBUixDQUFjLE1BQWQsQ0FEaUI7QUFFbEMsWUFBUSxLQUFSLENBQWMsTUFBZCxHQUF1QixNQUF2QixDQUZrQztBQUdsQyxRQUFJLFlBQVksaUJBQWlCLE9BQWpCLEVBQTBCLE1BQTFCLENBSGtCO0FBSWxDLFlBQVEsS0FBUixDQUFjLE1BQWQsR0FBdUIsVUFBdkIsQ0FKa0M7QUFLbEMsWUFBUSxZQUFSLENBTGtDO0FBTWxDLFdBQU8sU0FBUCxDQU5rQztDQUEvQjs7QUFTQSxTQUFTLElBQVQsQ0FBYyxPQUFkLEVBQXVCLE9BQXZCLEVBQWdDO0FBQ25DLFlBQVEsU0FBUixDQUFrQixNQUFsQixDQUF5QixVQUF6QixFQURtQztBQUVuQyxZQUFRLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsWUFBdEIsRUFGbUM7QUFHbkMsWUFBUSxTQUFSLENBQWtCLE1BQWxCLENBQXlCLFdBQXpCLEVBSG1DO0FBSW5DLFlBQVEsWUFBUixDQUFxQixlQUFyQixFQUFzQyxJQUF0QyxFQUptQzs7QUFNbkMsWUFBUSxLQUFSLENBQWMsTUFBZCxHQUF1QixhQUFhLE9BQWIsQ0FBdkIsQ0FObUM7O0FBUW5DLGFBQVMsT0FBVCxFQVJtQztDQUFoQzs7QUFXQSxTQUFTLElBQVQsQ0FBYyxPQUFkLEVBQXVCLE9BQXZCLEVBQWdDO0FBQ25DLFlBQVEsU0FBUixDQUFrQixNQUFsQixDQUF5QixVQUF6QixFQURtQztBQUVuQyxZQUFRLFNBQVIsQ0FBa0IsTUFBbEIsQ0FBeUIsSUFBekIsRUFGbUM7QUFHbkMsWUFBUSxTQUFSLENBQWtCLEdBQWxCLENBQXNCLFlBQXRCLEVBSG1DO0FBSW5DLFlBQVEsU0FBUixDQUFrQixHQUFsQixDQUFzQixXQUF0QixFQUptQztBQUtuQyxZQUFRLFlBQVIsQ0FBcUIsZUFBckIsRUFBc0MsS0FBdEM7OztBQUxtQyxXQVFuQyxDQUFRLEtBQVIsQ0FBYyxNQUFkLEdBQXVCLGlCQUFpQixPQUFqQixFQUEwQixNQUExQixDQVJZO0FBU25DLFlBQVEsWUFBUjtBQVRtQyxXQVVuQyxDQUFRLEtBQVIsQ0FBYyxNQUFkLEdBQXVCLEtBQXZCLENBVm1DOztBQVluQyxhQUFTLE9BQVQsRUFabUM7Q0FBaEM7O0FBZUEsU0FBUyxRQUFULENBQWtCLE9BQWxCLEVBQTJCO0FBQzlCLFlBQVEsU0FBUixDQUFrQixNQUFsQixDQUF5QixZQUF6QixFQUQ4QjtBQUU5QixZQUFRLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsVUFBdEIsRUFGOEI7QUFHOUIsWUFBUSxZQUFSLENBQXFCLGVBQXJCLEVBQXNDLEtBQXRDOzs7QUFIOEIsUUFNMUIsUUFBUSxLQUFSLENBQWMsTUFBZCxLQUF5QixLQUF6QixFQUFnQztBQUNoQyxnQkFBUSxTQUFSLENBQWtCLEdBQWxCLENBQXNCLElBQXRCLEVBRGdDO0FBRWhDLGdCQUFRLEtBQVIsQ0FBYyxNQUFkLEdBQXVCLE1BQXZCLENBRmdDO0tBQXBDO0NBTkciLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9iZW4vUHJvamVjdHMvZnJvbnRlbmQtZnJhbWV3b3JrIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldE1heEhlaWdodChlbGVtZW50KSB7XG4gICAgdmFyIHByZXZIZWlnaHQgPSBlbGVtZW50LnN0eWxlLmhlaWdodDtcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgICB2YXIgbWF4SGVpZ2h0ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5oZWlnaHQ7XG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBwcmV2SGVpZ2h0O1xuICAgIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIHJldHVybiBtYXhIZWlnaHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93KGVsZW1lbnQsIHRyaWdnZXIpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNlJyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzaW5nJyk7XG4gICAgdHJpZ2dlci5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZWQnKTtcbiAgICB0cmlnZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBnZXRNYXhIZWlnaHQoZWxlbWVudCk7XG5cbiAgICBjb21wbGV0ZShlbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGUoZWxlbWVudCwgdHJpZ2dlcikge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY29sbGFwc2UnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2luJyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzaW5nJyk7XG4gICAgdHJpZ2dlci5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZWQnKTtcbiAgICB0cmlnZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcblxuICAgIC8vIFJlc2V0IGVsZW1lbnQncyBoZWlnaHRcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuaGVpZ2h0O1xuICAgIGVsZW1lbnQub2Zmc2V0SGVpZ2h0OyAvLyBmb3JjZSByZXBhaW50XG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMHB4JztcblxuICAgIGNvbXBsZXRlKGVsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGxldGUoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY29sbGFwc2luZycpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcblxuICAgIC8vIENoZWNrIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgdW5oaWRkZW5cbiAgICBpZiAoZWxlbWVudC5zdHlsZS5oZWlnaHQgIT09ICcwcHgnKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW4nKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICAgfVxufVxuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tb2R1bGVzL2Ryb3Bkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBSSxZQUFZLEVBQVo7O0lBRUU7Ozs7Ozs7O0FBT0YsYUFQRSxRQU9GLENBQVksT0FBWixFQUFxQjs4QkFQbkIsVUFPbUI7O0FBQ2pCLGFBQUssT0FBTCxHQUFlLE9BQWYsQ0FEaUI7O0FBR2pCLGFBQUssVUFBTCxHQUhpQjtLQUFyQjs7Ozs7OztpQkFQRTs7cUNBZ0JXOzs7QUFDVCxpQkFBSyxRQUFMLEdBQWdCLDBCQUFhLEtBQUssT0FBTCxDQUE3QixDQURTOztBQUdULGlCQUFLLFFBQUwsQ0FBYyxFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFVBQUMsS0FBRCxFQUFRLEtBQVIsRUFBa0I7QUFDeEMsc0JBQUssVUFBTCxDQUFnQixLQUFoQixFQUF1QixLQUF2QixFQUR3QzthQUFsQixDQUExQixDQUhTOztBQU9ULGlCQUFLLFFBQUwsQ0FBYyxFQUFkLENBQWlCLE1BQWpCLEVBQXlCLFVBQUMsS0FBRCxFQUFRLEtBQVIsRUFBa0I7QUFDdkMsc0JBQUssYUFBTCxDQUFtQixLQUFuQixFQUEwQixLQUExQixFQUR1QzthQUFsQixDQUF6QixDQVBTOzs7Ozs7Ozs7dUNBZUU7QUFDWCxpQkFBSyxRQUFMLENBQWMsT0FBZCxHQURXOzs7Ozs7Ozs7OzttQ0FTSixPQUFPLE9BQU87QUFDckIsa0JBQU0sY0FBTixHQURxQjtBQUVyQixrQkFBTSxhQUFOLENBQW9CLFNBQXBCLENBQThCLE1BQTlCLENBQXFDLE1BQXJDLEVBRnFCOzs7Ozs7Ozs7OztzQ0FVWCxPQUFPLE9BQU87QUFDeEIscUNBQVksTUFBTSxhQUFOLEVBQXFCLE1BQWpDOzs7QUFEd0IsZ0JBSXBCLE1BQU0sYUFBTixJQUF1QixNQUFNLGFBQU4sQ0FBb0IsWUFBcEIsQ0FBaUMsZ0JBQWpDLE1BQXVELFVBQXZELEVBQW1FO0FBQzFGLHNCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsR0FEMEY7YUFBOUY7Ozs7V0F0REY7OztrQkE2RFM7QUFDWCxVQUFNLGNBQVMsT0FBVCxFQUFrQjtBQUNwQixrQkFBVSxJQUFWLENBQWUsSUFBSSxRQUFKLENBQWEsT0FBYixDQUFmLEVBRG9CO0tBQWxCOztBQUlOLGFBQVMsbUJBQVc7QUFDaEIsa0JBQVUsT0FBVixDQUFrQixVQUFDLFFBQUQ7bUJBQWMsU0FBUyxZQUFUO1NBQWQsQ0FBbEIsQ0FEZ0I7QUFFaEIsb0JBQVksRUFBWixDQUZnQjtLQUFYIiwiZmlsZSI6ImRyb3Bkb3duLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9iZW4vUHJvamVjdHMvZnJvbnRlbmQtZnJhbWV3b3JrIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVsZWdhdGUgfSBmcm9tICdkb20tZGVsZWdhdGUnO1xuaW1wb3J0IHsgcmVtb3ZlQ2xhc3MgfSBmcm9tICdAcG9kLXBvaW50L2RvbS1vcHMnO1xuXG5sZXQgaW5zdGFuY2VzID0gW107XG5cbmNsYXNzIERyb3BEb3duIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgZHJvcGRvd24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBkcm9wZG93biBldmVudC5cbiAgICAgKi9cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gbmV3IERlbGVnYXRlKHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5lci5vbignY2xpY2snLCAoZXZlbnQsIGlucHV0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRvRHJvcERvd24oZXZlbnQsIGlucHV0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5lci5vbignYmx1cicsIChldmVudCwgaW5wdXQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VEcm9wRG93bihldmVudCwgaW5wdXQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIHRoZSBldmVudCBsaXN0ZW5lcnMgZnJvbSB0aGUgZWxlbWVudHMuXG4gICAgICovXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcm9wcyBkb3duXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGlucHV0XG4gICAgICovXG4gICAgZG9Ecm9wRG93bihldmVudCwgaW5wdXQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSBkcm9wZG93blxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBpbnB1dFxuICAgICAqL1xuICAgIGNsb3NlRHJvcERvd24oZXZlbnQsIGlucHV0KSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKGlucHV0LnBhcmVudEVsZW1lbnQsICdvcGVuJyk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgY2xpY2sgZXZlbnQgb24gdGhlIHRhcmdldCBpZiBpdCBub3Qgb3BlbmluZyBhbm90aGVyIG1lbnVcbiAgICAgICAgaWYgKGV2ZW50LnJlbGF0ZWRUYXJnZXQgJiYgZXZlbnQucmVsYXRlZFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtbW9kdWxlJykgIT09ICdkcm9wZG93bicpIHtcbiAgICAgICAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQuY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBpbnN0YW5jZXMucHVzaChuZXcgRHJvcERvd24oZWxlbWVudCkpO1xuICAgIH0sXG5cbiAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiBpbnN0YW5jZS51bmJpbmRFdmVudHMoKSk7XG4gICAgICAgIGluc3RhbmNlcyA9IFtdO1xuICAgIH1cbn07XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9zaGltcy9jbGFzc0xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsSUFBSSxjQUFjLElBQWQsRUFBb0I7Ozs7QUFJeEIsS0FBSSxFQUFFLGVBQWUsU0FBUyxhQUFULENBQXVCLEdBQXZCLENBQWYsQ0FBRixJQUNBLFNBQVMsZUFBVCxJQUE0QixFQUFFLGVBQWUsU0FBUyxlQUFULENBQXlCLDRCQUF6QixFQUFzRCxHQUF0RCxDQUFmLENBQUYsRUFBOEU7O0FBRTlHLEdBQUMsVUFBVSxJQUFWLEVBQWdCOztBQUVqQixnQkFGaUI7O0FBSWpCLE9BQUksRUFBRSxhQUFhLElBQWIsQ0FBRixFQUFzQixPQUExQjs7QUFFQSxPQUNHLGdCQUFnQixXQUFoQjtPQUNBLFlBQVksV0FBWjtPQUNBLGVBQWUsS0FBSyxPQUFMLENBQWEsU0FBYixDQUFmO09BQ0EsU0FBUyxNQUFUO09BQ0EsVUFBVSxPQUFPLFNBQVAsRUFBa0IsSUFBbEIsSUFBMEIsWUFBWTtBQUNqRCxXQUFPLEtBQUssT0FBTCxDQUFhLFlBQWIsRUFBMkIsRUFBM0IsQ0FBUCxDQURpRDtJQUFaO09BR3BDLGFBQWEsTUFBTSxTQUFOLEVBQWlCLE9BQWpCLElBQTRCLFVBQVUsSUFBVixFQUFnQjtBQUMxRCxRQUNHLElBQUksQ0FBSjtRQUNBLE1BQU0sS0FBSyxNQUFMLENBSGlEO0FBSzFELFdBQU8sSUFBSSxHQUFKLEVBQVMsR0FBaEIsRUFBcUI7QUFDcEIsU0FBSSxLQUFLLElBQUwsSUFBYSxLQUFLLENBQUwsTUFBWSxJQUFaLEVBQWtCO0FBQ2xDLGFBQU8sQ0FBUCxDQURrQztNQUFuQztLQUREO0FBS0EsV0FBTyxDQUFDLENBQUQsQ0FWbUQ7SUFBaEI7O0FBUjVDO09BcUJHLFFBQVEsU0FBUixLQUFRLENBQVUsSUFBVixFQUFnQixPQUFoQixFQUF5QjtBQUNsQyxTQUFLLElBQUwsR0FBWSxJQUFaLENBRGtDO0FBRWxDLFNBQUssSUFBTCxHQUFZLGFB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LEVBQTBDO0FBQ3pDLFFBQUksVUFBVSxhQUFhLFNBQWIsQ0FBdUIsTUFBdkIsQ0FEMkI7O0FBR3pDLGlCQUFhLFNBQWIsQ0FBdUIsTUFBdkIsR0FBZ0MsVUFBUyxLQUFULEVBQWdCLEtBQWhCLEVBQXVCO0FBQ3RELFNBQUksS0FBSyxTQUFMLElBQWtCLENBQUMsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFELEtBQTBCLENBQUMsS0FBRCxFQUFRO0FBQ3ZELGFBQU8sS0FBUCxDQUR1RDtNQUF4RCxNQUVPO0FBQ04sYUFBTyxRQUFRLElBQVIsQ0FBYSxJQUFiLEVBQW1CLEtBQW5CLENBQVAsQ0FETTtNQUZQO0tBRCtCLENBSFM7SUFBMUM7O0FBYUEsaUJBQWMsSUFBZCxDQTNDWTtHQUFaLEdBQUQsQ0FKTztFQXpLUDtDQUpBIiwiZmlsZSI6ImNsYXNzTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYmVuL1Byb2plY3RzL2Zyb250ZW5kLWZyYW1ld29yayIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBjbGFzc0xpc3QuanM6IENyb3NzLWJyb3dzZXIgZnVsbCBlbGVtZW50LmNsYXNzTGlzdCBpbXBsZW1lbnRhdGlvbi5cbiAqIDEuMS4yMDE1MDMxMlxuICpcbiAqIEJ5IEVsaSBHcmV5LCBodHRwOi8vZWxpZ3JleS5jb21cbiAqIExpY2Vuc2U6IERlZGljYXRlZCB0byB0aGUgcHVibGljIGRvbWFpbi5cbiAqICAgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lbGlncmV5L2NsYXNzTGlzdC5qcy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kXG4gKi9cblxuLypnbG9iYWwgc2VsZiwgZG9jdW1lbnQsIERPTUV4Y2VwdGlvbiAqL1xuXG4vKiEgQHNvdXJjZSBodHRwOi8vcHVybC5lbGlncmV5LmNvbS9naXRodWIvY2xhc3NMaXN0LmpzL2Jsb2IvbWFzdGVyL2NsYXNzTGlzdC5qcyAqL1xuXG5pZiAoXCJkb2N1bWVudFwiIGluIHNlbGYpIHtcblxuLy8gRnVsbCBwb2x5ZmlsbCBmb3IgYnJvd3NlcnMgd2l0aCBubyBjbGFzc0xpc3Qgc3VwcG9ydFxuLy8gSW5jbHVkaW5nIElFIDwgRWRnZSBtaXNzaW5nIFNWR0VsZW1lbnQuY2xhc3NMaXN0XG5pZiAoIShcImNsYXNzTGlzdFwiIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJfXCIpKVxuXHR8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMgJiYgIShcImNsYXNzTGlzdFwiIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJnXCIpKSkge1xuXG4oZnVuY3Rpb24gKHZpZXcpIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmlmICghKCdFbGVtZW50JyBpbiB2aWV3KSkgcmV0dXJuO1xuXG52YXJcblx0ICBjbGFzc0xpc3RQcm9wID0gXCJjbGFzc0xpc3RcIlxuXHQsIHByb3RvUHJvcCA9IFwicHJvdG90eXBlXCJcblx0LCBlbGVtQ3RyUHJvdG8gPSB2aWV3LkVsZW1lbnRbcHJvdG9Qcm9wXVxuXHQsIG9iakN0ciA9IE9iamVjdFxuXHQsIHN0clRyaW0gPSBTdHJpbmdbcHJvdG9Qcm9wXS50cmltIHx8IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBcIlwiKTtcblx0fVxuXHQsIGFyckluZGV4T2YgPSBBcnJheVtwcm90b1Byb3BdLmluZGV4T2YgfHwgZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHR2YXJcblx0XHRcdCAgaSA9IDBcblx0XHRcdCwgbGVuID0gdGhpcy5sZW5ndGhcblx0XHQ7XG5cdFx0Zm9yICg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSB7XG5cdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gLTE7XG5cdH1cblx0Ly8gVmVuZG9yczogcGxlYXNlIGFsbG93IGNvbnRlbnQgY29kZSB0byBpbnN0YW50aWF0ZSBET01FeGNlcHRpb25zXG5cdCwgRE9NRXggPSBmdW5jdGlvbiAodHlwZSwgbWVzc2FnZSkge1xuXHRcdHRoaXMubmFtZSA9IHR5cGU7XG5cdFx0dGhpcy5jb2RlID0gRE9NRXhjZXB0aW9uW3R5cGVdO1xuXHRcdHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG5cdH1cblx0LCBjaGVja1Rva2VuQW5kR2V0SW5kZXggPSBmdW5jdGlvbiAoY2xhc3NMaXN0LCB0b2tlbikge1xuXHRcdGlmICh0b2tlbiA9PT0gXCJcIikge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4KFxuXHRcdFx0XHQgIFwiU1lOVEFYX0VSUlwiXG5cdFx0XHRcdCwgXCJBbiBpbnZhbGlkIG9yIGlsbGVnYWwgc3RyaW5nIHdhcyBzcGVjaWZpZWRcIlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKC9cXHMvLnRlc3QodG9rZW4pKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXgoXG5cdFx0XHRcdCAgXCJJTlZBTElEX0NIQVJBQ1RFUl9FUlJcIlxuXHRcdFx0XHQsIFwiU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyXCJcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiBhcnJJbmRleE9mLmNhbGwoY2xhc3NMaXN0LCB0b2tlbik7XG5cdH1cblx0LCBDbGFzc0xpc3QgPSBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdHZhclxuXHRcdFx0ICB0cmltbWVkQ2xhc3NlcyA9IHN0clRyaW0uY2FsbChlbGVtLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIHx8IFwiXCIpXG5cdFx0XHQsIGNsYXNzZXMgPSB0cmltbWVkQ2xhc3NlcyA/IHRyaW1tZWRDbGFzc2VzLnNwbGl0KC9cXHMrLykgOiBbXVxuXHRcdFx0LCBpID0gMFxuXHRcdFx0LCBsZW4gPSBjbGFzc2VzLmxlbmd0aFxuXHRcdDtcblx0XHRmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR0aGlzLnB1c2goY2xhc3Nlc1tpXSk7XG5cdFx0fVxuXHRcdHRoaXMuX3VwZGF0ZUNsYXNzTmFtZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgdGhpcy50b1N0cmluZygpKTtcblx0XHR9O1xuXHR9XG5cdCwgY2xhc3NMaXN0UHJvdG8gPSBDbGFzc0xpc3RbcHJvdG9Qcm9wXSA9IFtdXG5cdCwgY2xhc3NMaXN0R2V0dGVyID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBuZXcgQ2xhc3NMaXN0KHRoaXMpO1xuXHR9XG47XG4vLyBNb3N0IERPTUV4Y2VwdGlvbiBpbXBsZW1lbnRhdGlvbnMgZG9uJ3QgYWxsb3cgY2FsbGluZyBET01FeGNlcHRpb24ncyB0b1N0cmluZygpXG4vLyBvbiBub24tRE9NRXhjZXB0aW9ucy4gRXJyb3IncyB0b1N0cmluZygpIGlzIHN1ZmZpY2llbnQgaGVyZS5cbkRPTUV4W3Byb3RvUHJvcF0gPSBFcnJvcltwcm90b1Byb3BdO1xuY2xhc3NMaXN0UHJvdG8uaXRlbSA9IGZ1bmN0aW9uIChpKSB7XG5cdHJldHVybiB0aGlzW2ldIHx8IG51bGw7XG59O1xuY2xhc3NMaXN0UHJvdG8uY29udGFpbnMgPSBmdW5jdGlvbiAodG9rZW4pIHtcblx0dG9rZW4gKz0gXCJcIjtcblx0cmV0dXJuIGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbikgIT09IC0xO1xufTtcbmNsYXNzTGlzdFByb3RvLmFkZCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyXG5cdFx0ICB0b2tlbnMgPSBhcmd1bWVudHNcblx0XHQsIGkgPSAwXG5cdFx0LCBsID0gdG9rZW5zLmxlbmd0aFxuXHRcdCwgdG9rZW5cblx0XHQsIHVwZGF0ZWQgPSBmYWxzZVxuXHQ7XG5cdGRvIHtcblx0XHR0b2tlbiA9IHRva2Vuc1tpXSArIFwiXCI7XG5cdFx0aWYgKGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbikgPT09IC0xKSB7XG5cdFx0XHR0aGlzLnB1c2godG9rZW4pO1xuXHRcdFx0dXBkYXRlZCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cdHdoaWxlICgrK2kgPCBsKTtcblxuXHRpZiAodXBkYXRlZCkge1xuXHRcdHRoaXMuX3VwZGF0ZUNsYXNzTmFtZSgpO1xuXHR9XG59O1xuY2xhc3NMaXN0UHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHR2YXJcblx0XHQgIHRva2VucyA9IGFyZ3VtZW50c1xuXHRcdCwgaSA9IDBcblx0XHQsIGwgPSB0b2tlbnMubGVuZ3RoXG5cdFx0LCB0b2tlblxuXHRcdCwgdXBkYXRlZCA9IGZhbHNlXG5cdFx0LCBpbmRleFxuXHQ7XG5cdGRvIHtcblx0XHR0b2tlbiA9IHRva2Vuc1tpXSArIFwiXCI7XG5cdFx0aW5kZXggPSBjaGVja1Rva2VuQW5kR2V0SW5kZXgodGhpcywgdG9rZW4pO1xuXHRcdHdoaWxlIChpbmRleCAhPT0gLTEpIHtcblx0XHRcdHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdHVwZGF0ZWQgPSB0cnVlO1xuXHRcdFx0aW5kZXggPSBjaGVja1Rva2VuQW5kR2V0SW5kZXgodGhpcywgdG9rZW4pO1xuXHRcdH1cblx0fVxuXHR3aGlsZSAoKytpIDwgbCk7XG5cblx0aWYgKHVwZGF0ZWQpIHtcblx0XHR0aGlzLl91cGRhdGVDbGFzc05hbWUoKTtcblx0fVxufTtcbmNsYXNzTGlzdFByb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uICh0b2tlbiwgZm9yY2UpIHtcblx0dG9rZW4gKz0gXCJcIjtcblxuXHR2YXJcblx0XHQgIHJlc3VsdCA9IHRoaXMuY29udGFpbnModG9rZW4pXG5cdFx0LCBtZXRob2QgPSByZXN1bHQgP1xuXHRcdFx0Zm9yY2UgIT09IHRydWUgJiYgXCJyZW1vdmVcIlxuXHRcdDpcblx0XHRcdGZvcmNlICE9PSBmYWxzZSAmJiBcImFkZFwiXG5cdDtcblxuXHRpZiAobWV0aG9kKSB7XG5cdFx0dGhpc1ttZXRob2RdKHRva2VuKTtcblx0fVxuXG5cdGlmIChmb3JjZSA9PT0gdHJ1ZSB8fCBmb3JjZSA9PT0gZmFsc2UpIHtcblx0XHRyZXR1cm4gZm9yY2U7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuICFyZXN1bHQ7XG5cdH1cbn07XG5jbGFzc0xpc3RQcm90by50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMuam9pbihcIiBcIik7XG59O1xuXG5pZiAob2JqQ3RyLmRlZmluZVByb3BlcnR5KSB7XG5cdHZhciBjbGFzc0xpc3RQcm9wRGVzYyA9IHtcblx0XHQgIGdldDogY2xhc3NMaXN0R2V0dGVyXG5cdFx0LCBlbnVtZXJhYmxlOiB0cnVlXG5cdFx0LCBjb25maWd1cmFibGU6IHRydWVcblx0fTtcblx0dHJ5IHtcblx0XHRvYmpDdHIuZGVmaW5lUHJvcGVydHkoZWxlbUN0clByb3RvLCBjbGFzc0xpc3RQcm9wLCBjbGFzc0xpc3RQcm9wRGVzYyk7XG5cdH0gY2F0Y2ggKGV4KSB7IC8vIElFIDggZG9lc24ndCBzdXBwb3J0IGVudW1lcmFibGU6dHJ1ZVxuXHRcdGlmIChleC5udW1iZXIgPT09IC0weDdGRjVFQzU0KSB7XG5cdFx0XHRjbGFzc0xpc3RQcm9wRGVzYy5lbnVtZXJhYmxlID0gZmFsc2U7XG5cdFx0XHRvYmpDdHIuZGVmaW5lUHJvcGVydHkoZWxlbUN0clByb3RvLCBjbGFzc0xpc3RQcm9wLCBjbGFzc0xpc3RQcm9wRGVzYyk7XG5cdFx0fVxuXHR9XG59IGVsc2UgaWYgKG9iakN0cltwcm90b1Byb3BdLl9fZGVmaW5lR2V0dGVyX18pIHtcblx0ZWxlbUN0clByb3RvLl9fZGVmaW5lR2V0dGVyX18oY2xhc3NMaXN0UHJvcCwgY2xhc3NMaXN0R2V0dGVyKTtcbn1cblxufShzZWxmKSk7XG5cbn0gZWxzZSB7XG4vLyBUaGVyZSBpcyBmdWxsIG9yIHBhcnRpYWwgbmF0aXZlIGNsYXNzTGlzdCBzdXBwb3J0LCBzbyBqdXN0IGNoZWNrIGlmIHdlIG5lZWRcbi8vIHRvIG5vcm1hbGl6ZSB0aGUgYWRkL3JlbW92ZSBhbmQgdG9nZ2xlIEFQSXMuXG5cbihmdW5jdGlvbiAoKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdHZhciB0ZXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJfXCIpO1xuXG5cdHRlc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjMVwiLCBcImMyXCIpO1xuXG5cdC8vIFBvbHlmaWxsIGZvciBJRSAxMC8xMSBhbmQgRmlyZWZveCA8MjYsIHdoZXJlIGNsYXNzTGlzdC5hZGQgYW5kXG5cdC8vIGNsYXNzTGlzdC5yZW1vdmUgZXhpc3QgYnV0IHN1cHBvcnQgb25seSBvbmUgYXJndW1lbnQgYXQgYSB0aW1lLlxuXHRpZiAoIXRlc3RFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImMyXCIpKSB7XG5cdFx0dmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uKG1ldGhvZCkge1xuXHRcdFx0dmFyIG9yaWdpbmFsID0gRE9NVG9rZW5MaXN0LnByb3RvdHlwZVttZXRob2RdO1xuXG5cdFx0XHRET01Ub2tlbkxpc3QucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih0b2tlbikge1xuXHRcdFx0XHR2YXIgaSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcblxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0XHR0b2tlbiA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdFx0XHRvcmlnaW5hbC5jYWxsKHRoaXMsIHRva2VuKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9O1xuXHRcdGNyZWF0ZU1ldGhvZCgnYWRkJyk7XG5cdFx0Y3JlYXRlTWV0aG9kKCdyZW1vdmUnKTtcblx0fVxuXG5cdHRlc3RFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjM1wiLCBmYWxzZSk7XG5cblx0Ly8gUG9seWZpbGwgZm9yIElFIDEwIGFuZCBGaXJlZm94IDwyNCwgd2hlcmUgY2xhc3NMaXN0LnRvZ2dsZSBkb2VzIG5vdFxuXHQvLyBzdXBwb3J0IHRoZSBzZWNvbmQgYXJndW1lbnQuXG5cdGlmICh0ZXN0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjM1wiKSkge1xuXHRcdHZhciBfdG9nZ2xlID0gRE9NVG9rZW5MaXN0LnByb3RvdHlwZS50b2dnbGU7XG5cblx0XHRET01Ub2tlbkxpc3QucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKHRva2VuLCBmb3JjZSkge1xuXHRcdFx0aWYgKDEgaW4gYXJndW1lbnRzICYmICF0aGlzLmNvbnRhaW5zKHRva2VuKSA9PT0gIWZvcmNlKSB7XG5cdFx0XHRcdHJldHVybiBmb3JjZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBfdG9nZ2xlLmNhbGwodGhpcywgdG9rZW4pO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0fVxuXG5cdHRlc3RFbGVtZW50ID0gbnVsbDtcbn0oKSk7XG5cbn1cblxufVxuXG4iXX0=

/***/ }
/******/ ]);