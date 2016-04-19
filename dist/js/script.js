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
	
	var _ajaxForm = __webpack_require__(8);
	
	var _ajaxForm2 = _interopRequireDefault(_ajaxForm);
	
	var _formFields = __webpack_require__(16);
	
	var _formFields2 = _interopRequireDefault(_formFields);
	
	var _collapse = __webpack_require__(17);
	
	var _collapse2 = _interopRequireDefault(_collapse);
	
	var _dropdown = __webpack_require__(19);
	
	var _dropdown2 = _interopRequireDefault(_dropdown);
	
	var _toggle = __webpack_require__(20);
	
	var _toggle2 = _interopRequireDefault(_toggle);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(21);
	
	dom.whenReady(function () {
	    (0, _moduleLoader2.default)({
	        formFields: _formFields2.default,
	        domModules: (0, _domModuleLoader2.default)({
	            modal: _modal2.default,
	            ajaxForm: _ajaxForm2.default,
	            collapse: _collapse2.default,
	            dropdown: _dropdown2.default,
	            toggle: _toggle2.default
	        })
	    });
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9zY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVk7O0FBRVo7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQVhBLFFBQVEsc0JBQVI7O0FBYUEsSUFBSSxTQUFKLENBQWMsWUFBTTtBQUNoQixnQ0FBWTtBQUNSLHdDQURRO0FBRVIsb0JBQVksK0JBQWtCO0FBQzFCLGtDQUQwQjtBQUUxQix3Q0FGMEI7QUFHMUIsd0NBSDBCO0FBSTFCLHdDQUowQjtBQUsxQixvQ0FMMEI7U0FBbEIsQ0FBWjtLQUZKLEVBRGdCO0NBQU4sQ0FBZCIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21pa2VmcmFuY2lzL0NvZGUvdWktdG9vbGtpdCIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vc2hpbXMvY2xhc3NMaXN0LmpzJyk7XG5cbmltcG9ydCBsb2FkTW9kdWxlcyBmcm9tICdAcG9kLXBvaW50L21vZHVsZS1sb2FkZXInO1xuaW1wb3J0IGNvbWJpbmVEb21Nb2R1bGVzIGZyb20gJ0Bwb2QtcG9pbnQvZG9tLW1vZHVsZS1sb2FkZXInO1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJ0Bwb2QtcG9pbnQvZG9tLW9wcyc7XG5cbmltcG9ydCBtb2RhbCBmcm9tICcuL21vZHVsZXMvbW9kYWwnO1xuaW1wb3J0IGFqYXhGb3JtIGZyb20gJy4vbW9kdWxlcy9hamF4LWZvcm0nO1xuaW1wb3J0IGZvcm1GaWVsZHMgZnJvbSAnLi9tb2R1bGVzL2Zvcm0tZmllbGRzJztcbmltcG9ydCBjb2xsYXBzZSBmcm9tICcuL21vZHVsZXMvY29sbGFwc2UnO1xuaW1wb3J0IGRyb3Bkb3duIGZyb20gJy4vbW9kdWxlcy9kcm9wZG93bic7XG5pbXBvcnQgdG9nZ2xlIGZyb20gJy4vbW9kdWxlcy90b2dnbGUnO1xuXG5kb20ud2hlblJlYWR5KCgpID0+IHtcbiAgICBsb2FkTW9kdWxlcyh7XG4gICAgICAgIGZvcm1GaWVsZHMsXG4gICAgICAgIGRvbU1vZHVsZXM6IGNvbWJpbmVEb21Nb2R1bGVzKHtcbiAgICAgICAgICAgIG1vZGFsLFxuICAgICAgICAgICAgYWpheEZvcm0sXG4gICAgICAgICAgICBjb2xsYXBzZSxcbiAgICAgICAgICAgIGRyb3Bkb3duLFxuICAgICAgICAgICAgdG9nZ2xlLFxuICAgICAgICB9KVxuICAgIH0pO1xufSk7XG4iXX0=

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
	        this.overlay = this.getModalOverlay();
	
	        this.bindOpenEvent();
	        this.bindCloseEvent();
	    }
	
	    /**
	     * Get the modal's overlay.
	     *
	     * @returns {*}
	     */
	
	
	    _createClass(Modal, [{
	        key: 'getModalOverlay',
	        value: function getModalOverlay() {
	            for (var i = 0; i < this.modal.childNodes.length; i++) {
	                if (this.modal.childNodes[i].className == 'modal__overlay') {
	                    return this.modal.childNodes[i];
	                }
	            }
	
	            return null;
	        }
	
	        /**
	         * Binds open modal event.
	         */
	
	    }, {
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tb2R1bGVzL21vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFJLFlBQVksRUFBWjs7SUFFRTs7Ozs7Ozs7QUFPRixhQVBFLEtBT0YsQ0FBWSxPQUFaLEVBQXFCOzhCQVBuQixPQU9tQjs7QUFDakIsYUFBSyxVQUFMLEdBQWtCLE9BQWxCLENBRGlCO0FBRWpCLGFBQUssV0FBTCxHQUFtQix5QkFBWSxjQUFaLEVBQTRCLEtBQUssS0FBTCxDQUEvQyxDQUZpQjtBQUdqQixhQUFLLEtBQUwsR0FBYSx5QkFBWSxNQUFNLEtBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixLQUF4QixDQUEvQixDQUhpQjtBQUlqQixhQUFLLE9BQUwsR0FBZSxLQUFLLGVBQUwsRUFBZixDQUppQjs7QUFNakIsYUFBSyxhQUFMLEdBTmlCO0FBT2pCLGFBQUssY0FBTCxHQVBpQjtLQUFyQjs7Ozs7Ozs7O2lCQVBFOzswQ0FzQmdCO0FBQ2QsaUJBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsTUFBdEIsRUFBOEIsR0FBbEQsRUFBdUQ7QUFDbkQsb0JBQUksS0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixDQUF0QixFQUF5QixTQUF6QixJQUFzQyxnQkFBdEMsRUFBd0Q7QUFDeEQsMkJBQU8sS0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixDQUF0QixDQUFQLENBRHdEO2lCQUE1RDthQURKOztBQU1BLG1CQUFPLElBQVAsQ0FQYzs7Ozs7Ozs7O3dDQWFGOzs7QUFDWixpQkFBSyxZQUFMLEdBQW9CLDBCQUFhLEtBQUssVUFBTCxDQUFqQyxDQURZOztBQUdaLGlCQUFLLFlBQUwsQ0FBa0IsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsVUFBQyxLQUFELEVBQVc7QUFDckMsc0JBQUssT0FBTCxDQUFhLEtBQWIsRUFEcUM7YUFBWCxDQUE5QixDQUhZOzs7Ozs7Ozs7eUNBV0M7OztBQUNiLGlCQUFLLGFBQUwsR0FBcUIsMEJBQWEsS0FBSyxXQUFMLENBQWxDLENBRGE7O0FBR2IsaUJBQUssYUFBTCxDQUFtQixFQUFuQixDQUFzQixPQUF0QixFQUErQixVQUFDLEtBQUQsRUFBVztBQUN0Qyx1QkFBSyxVQUFMLENBQWdCLEtBQWhCLEVBRHNDO2FBQVgsQ0FBL0IsQ0FIYTs7QUFPYixpQkFBSyxlQUFMLEdBQXVCLDBCQUFhLEtBQUssT0FBTCxDQUFwQyxDQVBhOztBQVNiLGlCQUFLLGVBQUwsQ0FBcUIsRUFBckIsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQyxLQUFELEVBQVc7QUFDeEMsdUJBQUssVUFBTCxDQUFnQixLQUFoQixFQUR3QzthQUFYLENBQWpDLENBVGE7Ozs7Ozs7Ozt1Q0FpQkY7QUFDWCxpQkFBSyxZQUFMLENBQWtCLE9BQWxCLEdBRFc7QUFFWCxpQkFBSyxhQUFMLENBQW1CLE9BQW5CLEdBRlc7QUFHWCxpQkFBSyxlQUFMLENBQXFCLE9BQXJCLEdBSFc7Ozs7Ozs7Ozs7Z0NBVVAsT0FBTztBQUNYLGtCQUFNLGNBQU4sR0FEVzs7QUFHWCxnQkFBSSxXQUFXLENBQ1gsS0FBSyxPQUFMLEVBQ0EsS0FBSyxLQUFMLENBRkEsQ0FITzs7QUFRWCxpQkFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksU0FBUyxNQUFULEVBQWlCLEdBQXJDLEVBQTBDO0FBQ3RDLG9CQUFJLFNBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsS0FBOEIsTUFBOUIsSUFBd0MsQ0FBQyxTQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEVBQTJCO0FBQ3BFLDZCQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTRCLE9BQTVCLENBRG9FO2lCQUF4RSxNQUVPO0FBQ0gsNkJBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBNEIsTUFBNUIsQ0FERztpQkFGUDthQURKOzs7Ozs7Ozs7O21DQWFPLE9BQU87QUFDZCxrQkFBTSxjQUFOLEdBRGM7O0FBR2QsZ0JBQUksV0FBVyxDQUNYLEtBQUssT0FBTCxFQUNBLEtBQUssS0FBTCxDQUZBLENBSFU7O0FBUWQsaUJBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLFNBQVMsTUFBVCxFQUFpQixHQUFyQyxFQUEwQztBQUN0Qyx5QkFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUE0QixNQUE1QixDQURzQzthQUExQzs7OztXQXRHRjs7O2tCQTRHUztBQUNYLFVBQU0sY0FBUyxPQUFULEVBQWtCO0FBQ3BCLGtCQUFVLElBQVYsQ0FBZSxJQUFJLEtBQUosQ0FBVSxPQUFWLENBQWYsRUFEb0I7S0FBbEI7O0FBSU4sYUFBUyxtQkFBVztBQUNoQixrQkFBVSxPQUFWLENBQWtCLFVBQUMsUUFBRDttQkFBYyxTQUFTLFlBQVQ7U0FBZCxDQUFsQixDQURnQjtBQUVoQixvQkFBWSxFQUFaLENBRmdCO0tBQVgiLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21pa2VmcmFuY2lzL0NvZGUvdWktdG9vbGtpdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlbGVnYXRlIH0gZnJvbSAnZG9tLWRlbGVnYXRlJztcbmltcG9ydCB7IHNlbGVjdEZpcnN0IH0gZnJvbSAnQHBvZC1wb2ludC9kb20tb3BzJztcblxubGV0IGluc3RhbmNlcyA9IFtdO1xuXG5jbGFzcyBNb2RhbCB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IG1vZGFsLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMub3BlbkJ1dHRvbiA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24gPSBzZWxlY3RGaXJzdCgnLm1vZGFsLWNsb3NlJywgdGhpcy5tb2RhbCk7XG4gICAgICAgIHRoaXMubW9kYWwgPSBzZWxlY3RGaXJzdCgnIycgKyB0aGlzLm9wZW5CdXR0b24uZGF0YXNldC5tb2RhbCk7XG4gICAgICAgIHRoaXMub3ZlcmxheSA9IHRoaXMuZ2V0TW9kYWxPdmVybGF5KCk7XG5cbiAgICAgICAgdGhpcy5iaW5kT3BlbkV2ZW50KCk7XG4gICAgICAgIHRoaXMuYmluZENsb3NlRXZlbnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1vZGFsJ3Mgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldE1vZGFsT3ZlcmxheSgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1vZGFsLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGFsLmNoaWxkTm9kZXNbaV0uY2xhc3NOYW1lID09ICdtb2RhbF9fb3ZlcmxheScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RhbC5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZHMgb3BlbiBtb2RhbCBldmVudC5cbiAgICAgKi9cbiAgICBiaW5kT3BlbkV2ZW50KCkge1xuICAgICAgICB0aGlzLm9wZW5MaXN0ZW5lciA9IG5ldyBEZWxlZ2F0ZSh0aGlzLm9wZW5CdXR0b24pO1xuXG4gICAgICAgIHRoaXMub3Blbkxpc3RlbmVyLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kb01vZGFsKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZCB0aGUgY2xvc2UgbW9kYWwgZXZlbnQgdG8gdGhlIGNsb3NlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBiaW5kQ2xvc2VFdmVudCgpIHtcbiAgICAgICAgdGhpcy5jbG9zZUxpc3RlbmVyID0gbmV3IERlbGVnYXRlKHRoaXMuY2xvc2VCdXR0b24pO1xuXG4gICAgICAgIHRoaXMuY2xvc2VMaXN0ZW5lci5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbChldmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub3ZlcmxheUxpc3RlbmVyID0gbmV3IERlbGVnYXRlKHRoaXMub3ZlcmxheSk7XG5cbiAgICAgICAgdGhpcy5vdmVybGF5TGlzdGVuZXIub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoZXZlbnQpO1xuICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgdGhlIGV2ZW50IGxpc3RlbmVycyBmcm9tIHRoZSBlbGVtZW50cy5cbiAgICAgKi9cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMub3Blbkxpc3RlbmVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5jbG9zZUxpc3RlbmVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5vdmVybGF5TGlzdGVuZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9wZW5zIHRoZSBtb2RhbFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgZG9Nb2RhbChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHZhciBlbGVtZW50cyA9IFtcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheSxcbiAgICAgICAgICAgIHRoaXMubW9kYWxcbiAgICAgICAgXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudHNbaV0uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnIHx8ICFlbGVtZW50c1tpXS5zdHlsZS5kaXNwbGF5KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIG1vZGFsXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBjbG9zZU1vZGFsKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyIGVsZW1lbnRzID0gW1xuICAgICAgICAgICAgdGhpcy5vdmVybGF5LFxuICAgICAgICAgICAgdGhpcy5tb2RhbFxuICAgICAgICBdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGVsZW1lbnRzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGluc3RhbmNlcy5wdXNoKG5ldyBNb2RhbChlbGVtZW50KSk7XG4gICAgfSxcblxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IGluc3RhbmNlLnVuYmluZEV2ZW50cygpKTtcbiAgICAgICAgaW5zdGFuY2VzID0gW107XG4gICAgfVxufTtcbiJdfQ==

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
	
	var _superagent = __webpack_require__(9);
	
	var _superagent2 = _interopRequireDefault(_superagent);
	
	var _progressButton = __webpack_require__(15);
	
	var _progressButton2 = _interopRequireDefault(_progressButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var instances = [];
	
	var AjaxForm = function () {
	    function AjaxForm(form) {
	        _classCallCheck(this, AjaxForm);
	
	        this.form = form;
	        this.button = _progressButton2.default.create(form.querySelector('button[type="submit"]'));
	        this.requestInProgress = false;
	
	        this.bindEvents();
	    }
	
	    _createClass(AjaxForm, [{
	        key: 'submitForm',
	        value: function submitForm() {
	            var _this = this;
	
	            this.requestInProgress = true;
	            this.button.handleLoading();
	
	            _superagent2.default.post(this.form.action).type('form').send(this.form).end(function (error, response) {
	                _this.requestInProgress = false;
	
	                if (response && response.ok) {
	                    _this.button.handleComplete(true);
	                } else {
	                    _this.button.handleComplete(false);
	                }
	            });
	        }
	    }, {
	        key: 'bindEvents',
	        value: function bindEvents() {
	            var _this2 = this;
	
	            this.listener = new _domDelegate.Delegate(this.form);
	
	            this.listener.on('submit', function (event) {
	                event.preventDefault();
	
	                if (!_this2.requestInProgress) {
	                    _this2.submitForm();
	                }
	            });
	        }
	    }, {
	        key: 'unbindEvents',
	        value: function unbindEvents() {
	            this.listener.destroy();
	        }
	    }]);
	
	    return AjaxForm;
	}();
	
	exports.default = {
	    init: function init(form) {
	        instances.push(new AjaxForm(form));
	    },
	
	    destroy: function destroy() {
	        instances.forEach(function (instance) {
	            return instance.unbindEvents();
	        });
	        instances = [];
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tb2R1bGVzL2FqYXgtZm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBSSxZQUFZLEVBQVo7O0lBRUU7QUFDRixhQURFLFFBQ0YsQ0FBWSxJQUFaLEVBQWtCOzhCQURoQixVQUNnQjs7QUFDZCxhQUFLLElBQUwsR0FBWSxJQUFaLENBRGM7QUFFZCxhQUFLLE1BQUwsR0FBYyx5QkFBZSxNQUFmLENBQXNCLEtBQUssYUFBTCxDQUFtQix1QkFBbkIsQ0FBdEIsQ0FBZCxDQUZjO0FBR2QsYUFBSyxpQkFBTCxHQUF5QixLQUF6QixDQUhjOztBQUtkLGFBQUssVUFBTCxHQUxjO0tBQWxCOztpQkFERTs7cUNBU1c7OztBQUNULGlCQUFLLGlCQUFMLEdBQXlCLElBQXpCLENBRFM7QUFFVCxpQkFBSyxNQUFMLENBQVksYUFBWixHQUZTOztBQUlULGlDQUFRLElBQVIsQ0FBYSxLQUFLLElBQUwsQ0FBVSxNQUFWLENBQWIsQ0FDSyxJQURMLENBQ1UsTUFEVixFQUVLLElBRkwsQ0FFVSxLQUFLLElBQUwsQ0FGVixDQUdLLEdBSEwsQ0FHUyxVQUFDLEtBQUQsRUFBUSxRQUFSLEVBQXFCO0FBQ3RCLHNCQUFLLGlCQUFMLEdBQXlCLEtBQXpCLENBRHNCOztBQUd0QixvQkFBSSxZQUFZLFNBQVMsRUFBVCxFQUFhO0FBQ3pCLDBCQUFLLE1BQUwsQ0FBWSxjQUFaLENBQTJCLElBQTNCLEVBRHlCO2lCQUE3QixNQUVPO0FBQ0gsMEJBQUssTUFBTCxDQUFZLGNBQVosQ0FBMkIsS0FBM0IsRUFERztpQkFGUDthQUhDLENBSFQsQ0FKUzs7OztxQ0FrQkE7OztBQUNULGlCQUFLLFFBQUwsR0FBZ0IsMEJBQWEsS0FBSyxJQUFMLENBQTdCLENBRFM7O0FBR1QsaUJBQUssUUFBTCxDQUFjLEVBQWQsQ0FBaUIsUUFBakIsRUFBMkIsVUFBQyxLQUFELEVBQVc7QUFDbEMsc0JBQU0sY0FBTixHQURrQzs7QUFHbEMsb0JBQUksQ0FBQyxPQUFLLGlCQUFMLEVBQXdCO0FBQ3pCLDJCQUFLLFVBQUwsR0FEeUI7aUJBQTdCO2FBSHVCLENBQTNCLENBSFM7Ozs7dUNBWUU7QUFDWCxpQkFBSyxRQUFMLENBQWMsT0FBZCxHQURXOzs7O1dBdkNiOzs7a0JBNENTO0FBQ1gsVUFBTSxjQUFTLElBQVQsRUFBZTtBQUNqQixrQkFBVSxJQUFWLENBQWUsSUFBSSxRQUFKLENBQWEsSUFBYixDQUFmLEVBRGlCO0tBQWY7O0FBSU4sYUFBUyxtQkFBVztBQUNoQixrQkFBVSxPQUFWLENBQWtCLFVBQUMsUUFBRDttQkFBYyxTQUFTLFlBQVQ7U0FBZCxDQUFsQixDQURnQjtBQUVoQixvQkFBWSxFQUFaLENBRmdCO0tBQVgiLCJmaWxlIjoiYWpheC1mb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9taWtlZnJhbmNpcy9Db2RlL3VpLXRvb2xraXQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWxlZ2F0ZSB9IGZyb20gJ2RvbS1kZWxlZ2F0ZSc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICdzdXBlcmFnZW50JztcbmltcG9ydCBwcm9ncmVzc0J1dHRvbiBmcm9tICcuL3Byb2dyZXNzLWJ1dHRvbic7XG5cbmxldCBpbnN0YW5jZXMgPSBbXTtcblxuY2xhc3MgQWpheEZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKGZvcm0pIHtcbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICAgICAgdGhpcy5idXR0b24gPSBwcm9ncmVzc0J1dHRvbi5jcmVhdGUoZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0SW5Qcm9ncmVzcyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHN1Ym1pdEZvcm0oKSB7XG4gICAgICAgIHRoaXMucmVxdWVzdEluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICB0aGlzLmJ1dHRvbi5oYW5kbGVMb2FkaW5nKCk7XG5cbiAgICAgICAgcmVxdWVzdC5wb3N0KHRoaXMuZm9ybS5hY3Rpb24pXG4gICAgICAgICAgICAudHlwZSgnZm9ybScpXG4gICAgICAgICAgICAuc2VuZCh0aGlzLmZvcm0pXG4gICAgICAgICAgICAuZW5kKChlcnJvciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RJblByb2dyZXNzID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idXR0b24uaGFuZGxlQ29tcGxldGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idXR0b24uaGFuZGxlQ29tcGxldGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBuZXcgRGVsZWdhdGUodGhpcy5mb3JtKTtcblxuICAgICAgICB0aGlzLmxpc3RlbmVyLm9uKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5yZXF1ZXN0SW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0Rm9ybSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXIuZGVzdHJveSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKGZvcm0pIHtcbiAgICAgICAgaW5zdGFuY2VzLnB1c2gobmV3IEFqYXhGb3JtKGZvcm0pKTtcbiAgICB9LFxuXG4gICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4gaW5zdGFuY2UudW5iaW5kRXZlbnRzKCkpO1xuICAgICAgICBpbnN0YW5jZXMgPSBbXTtcbiAgICB9XG59XG4iXX0=

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var Emitter = __webpack_require__(10);
	var reduce = __webpack_require__(11);
	var requestBase = __webpack_require__(12);
	var isObject = __webpack_require__(13);
	
	/**
	 * Root reference for iframes.
	 */
	
	var root;
	if (typeof window !== 'undefined') { // Browser window
	  root = window;
	} else if (typeof self !== 'undefined') { // Web Worker
	  root = self;
	} else { // Other environments
	  root = this;
	}
	
	/**
	 * Noop.
	 */
	
	function noop(){};
	
	/**
	 * Check if `obj` is a host object,
	 * we don't want to serialize these :)
	 *
	 * TODO: future proof, move to compoent land
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	function isHost(obj) {
	  var str = {}.toString.call(obj);
	
	  switch (str) {
	    case '[object File]':
	    case '[object Blob]':
	    case '[object FormData]':
	      return true;
	    default:
	      return false;
	  }
	}
	
	/**
	 * Expose `request`.
	 */
	
	var request = module.exports = __webpack_require__(14).bind(null, Request);
	
	/**
	 * Determine XHR.
	 */
	
	request.getXHR = function () {
	  if (root.XMLHttpRequest
	      && (!root.location || 'file:' != root.location.protocol
	          || !root.ActiveXObject)) {
	    return new XMLHttpRequest;
	  } else {
	    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
	  }
	  return false;
	};
	
	/**
	 * Removes leading and trailing whitespace, added to support IE.
	 *
	 * @param {String} s
	 * @return {String}
	 * @api private
	 */
	
	var trim = ''.trim
	  ? function(s) { return s.trim(); }
	  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };
	
	/**
	 * Serialize the given `obj`.
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api private
	 */
	
	function serialize(obj) {
	  if (!isObject(obj)) return obj;
	  var pairs = [];
	  for (var key in obj) {
	    if (null != obj[key]) {
	      pushEncodedKeyValuePair(pairs, key, obj[key]);
	        }
	      }
	  return pairs.join('&');
	}
	
	/**
	 * Helps 'serialize' with serializing arrays.
	 * Mutates the pairs array.
	 *
	 * @param {Array} pairs
	 * @param {String} key
	 * @param {Mixed} val
	 */
	
	function pushEncodedKeyValuePair(pairs, key, val) {
	  if (Array.isArray(val)) {
	    return val.forEach(function(v) {
	      pushEncodedKeyValuePair(pairs, key, v);
	    });
	  }
	  pairs.push(encodeURIComponent(key)
	    + '=' + encodeURIComponent(val));
	}
	
	/**
	 * Expose serialization method.
	 */
	
	 request.serializeObject = serialize;
	
	 /**
	  * Parse the given x-www-form-urlencoded `str`.
	  *
	  * @param {String} str
	  * @return {Object}
	  * @api private
	  */
	
	function parseString(str) {
	  var obj = {};
	  var pairs = str.split('&');
	  var parts;
	  var pair;
	
	  for (var i = 0, len = pairs.length; i < len; ++i) {
	    pair = pairs[i];
	    parts = pair.split('=');
	    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
	  }
	
	  return obj;
	}
	
	/**
	 * Expose parser.
	 */
	
	request.parseString = parseString;
	
	/**
	 * Default MIME type map.
	 *
	 *     superagent.types.xml = 'application/xml';
	 *
	 */
	
	request.types = {
	  html: 'text/html',
	  json: 'application/json',
	  xml: 'application/xml',
	  urlencoded: 'application/x-www-form-urlencoded',
	  'form': 'application/x-www-form-urlencoded',
	  'form-data': 'application/x-www-form-urlencoded'
	};
	
	/**
	 * Default serialization map.
	 *
	 *     superagent.serialize['application/xml'] = function(obj){
	 *       return 'generated xml here';
	 *     };
	 *
	 */
	
	 request.serialize = {
	   'application/x-www-form-urlencoded': serialize,
	   'application/json': JSON.stringify
	 };
	
	 /**
	  * Default parsers.
	  *
	  *     superagent.parse['application/xml'] = function(str){
	  *       return { object parsed from str };
	  *     };
	  *
	  */
	
	request.parse = {
	  'application/x-www-form-urlencoded': parseString,
	  'application/json': JSON.parse
	};
	
	/**
	 * Parse the given header `str` into
	 * an object containing the mapped fields.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */
	
	function parseHeader(str) {
	  var lines = str.split(/\r?\n/);
	  var fields = {};
	  var index;
	  var line;
	  var field;
	  var val;
	
	  lines.pop(); // trailing CRLF
	
	  for (var i = 0, len = lines.length; i < len; ++i) {
	    line = lines[i];
	    index = line.indexOf(':');
	    field = line.slice(0, index).toLowerCase();
	    val = trim(line.slice(index + 1));
	    fields[field] = val;
	  }
	
	  return fields;
	}
	
	/**
	 * Check if `mime` is json or has +json structured syntax suffix.
	 *
	 * @param {String} mime
	 * @return {Boolean}
	 * @api private
	 */
	
	function isJSON(mime) {
	  return /[\/+]json\b/.test(mime);
	}
	
	/**
	 * Return the mime type for the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */
	
	function type(str){
	  return str.split(/ *; */).shift();
	};
	
	/**
	 * Return header field parameters.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */
	
	function params(str){
	  return reduce(str.split(/ *; */), function(obj, str){
	    var parts = str.split(/ *= */)
	      , key = parts.shift()
	      , val = parts.shift();
	
	    if (key && val) obj[key] = val;
	    return obj;
	  }, {});
	};
	
	/**
	 * Initialize a new `Response` with the given `xhr`.
	 *
	 *  - set flags (.ok, .error, etc)
	 *  - parse header
	 *
	 * Examples:
	 *
	 *  Aliasing `superagent` as `request` is nice:
	 *
	 *      request = superagent;
	 *
	 *  We can use the promise-like API, or pass callbacks:
	 *
	 *      request.get('/').end(function(res){});
	 *      request.get('/', function(res){});
	 *
	 *  Sending data can be chained:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' })
	 *        .end(function(res){});
	 *
	 *  Or passed to `.send()`:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' }, function(res){});
	 *
	 *  Or passed to `.post()`:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' })
	 *        .end(function(res){});
	 *
	 * Or further reduced to a single call for simple cases:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' }, function(res){});
	 *
	 * @param {XMLHTTPRequest} xhr
	 * @param {Object} options
	 * @api private
	 */
	
	function Response(req, options) {
	  options = options || {};
	  this.req = req;
	  this.xhr = this.req.xhr;
	  // responseText is accessible only if responseType is '' or 'text' and on older browsers
	  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
	     ? this.xhr.responseText
	     : null;
	  this.statusText = this.req.xhr.statusText;
	  this.setStatusProperties(this.xhr.status);
	  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
	  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
	  // getResponseHeader still works. so we get content-type even if getting
	  // other headers fails.
	  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
	  this.setHeaderProperties(this.header);
	  this.body = this.req.method != 'HEAD'
	    ? this.parseBody(this.text ? this.text : this.xhr.response)
	    : null;
	}
	
	/**
	 * Get case-insensitive `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */
	
	Response.prototype.get = function(field){
	  return this.header[field.toLowerCase()];
	};
	
	/**
	 * Set header related properties:
	 *
	 *   - `.type` the content type without params
	 *
	 * A response of "Content-Type: text/plain; charset=utf-8"
	 * will provide you with a `.type` of "text/plain".
	 *
	 * @param {Object} header
	 * @api private
	 */
	
	Response.prototype.setHeaderProperties = function(header){
	  // content-type
	  var ct = this.header['content-type'] || '';
	  this.type = type(ct);
	
	  // params
	  var obj = params(ct);
	  for (var key in obj) this[key] = obj[key];
	};
	
	/**
	 * Parse the given body `str`.
	 *
	 * Used for auto-parsing of bodies. Parsers
	 * are defined on the `superagent.parse` object.
	 *
	 * @param {String} str
	 * @return {Mixed}
	 * @api private
	 */
	
	Response.prototype.parseBody = function(str){
	  var parse = request.parse[this.type];
	  if (!parse && isJSON(this.type)) {
	    parse = request.parse['application/json'];
	  }
	  return parse && str && (str.length || str instanceof Object)
	    ? parse(str)
	    : null;
	};
	
	/**
	 * Set flags such as `.ok` based on `status`.
	 *
	 * For example a 2xx response will give you a `.ok` of __true__
	 * whereas 5xx will be __false__ and `.error` will be __true__. The
	 * `.clientError` and `.serverError` are also available to be more
	 * specific, and `.statusType` is the class of error ranging from 1..5
	 * sometimes useful for mapping respond colors etc.
	 *
	 * "sugar" properties are also defined for common cases. Currently providing:
	 *
	 *   - .noContent
	 *   - .badRequest
	 *   - .unauthorized
	 *   - .notAcceptable
	 *   - .notFound
	 *
	 * @param {Number} status
	 * @api private
	 */
	
	Response.prototype.setStatusProperties = function(status){
	  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	  if (status === 1223) {
	    status = 204;
	  }
	
	  var type = status / 100 | 0;
	
	  // status / class
	  this.status = this.statusCode = status;
	  this.statusType = type;
	
	  // basics
	  this.info = 1 == type;
	  this.ok = 2 == type;
	  this.clientError = 4 == type;
	  this.serverError = 5 == type;
	  this.error = (4 == type || 5 == type)
	    ? this.toError()
	    : false;
	
	  // sugar
	  this.accepted = 202 == status;
	  this.noContent = 204 == status;
	  this.badRequest = 400 == status;
	  this.unauthorized = 401 == status;
	  this.notAcceptable = 406 == status;
	  this.notFound = 404 == status;
	  this.forbidden = 403 == status;
	};
	
	/**
	 * Return an `Error` representative of this response.
	 *
	 * @return {Error}
	 * @api public
	 */
	
	Response.prototype.toError = function(){
	  var req = this.req;
	  var method = req.method;
	  var url = req.url;
	
	  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
	  var err = new Error(msg);
	  err.status = this.status;
	  err.method = method;
	  err.url = url;
	
	  return err;
	};
	
	/**
	 * Expose `Response`.
	 */
	
	request.Response = Response;
	
	/**
	 * Initialize a new `Request` with the given `method` and `url`.
	 *
	 * @param {String} method
	 * @param {String} url
	 * @api public
	 */
	
	function Request(method, url) {
	  var self = this;
	  this._query = this._query || [];
	  this.method = method;
	  this.url = url;
	  this.header = {}; // preserves header name case
	  this._header = {}; // coerces header names to lowercase
	  this.on('end', function(){
	    var err = null;
	    var res = null;
	
	    try {
	      res = new Response(self);
	    } catch(e) {
	      err = new Error('Parser is unable to parse the response');
	      err.parse = true;
	      err.original = e;
	      // issue #675: return the raw response if the response parsing fails
	      err.rawResponse = self.xhr && self.xhr.responseText ? self.xhr.responseText : null;
	      // issue #876: return the http status code if the response parsing fails
	      err.statusCode = self.xhr && self.xhr.status ? self.xhr.status : null;
	      return self.callback(err);
	    }
	
	    self.emit('response', res);
	
	    if (err) {
	      return self.callback(err, res);
	    }
	
	    if (res.status >= 200 && res.status < 300) {
	      return self.callback(err, res);
	    }
	
	    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
	    new_err.original = err;
	    new_err.response = res;
	    new_err.status = res.status;
	
	    self.callback(new_err, res);
	  });
	}
	
	/**
	 * Mixin `Emitter` and `requestBase`.
	 */
	
	Emitter(Request.prototype);
	for (var key in requestBase) {
	  Request.prototype[key] = requestBase[key];
	}
	
	/**
	 * Abort the request, and clear potential timeout.
	 *
	 * @return {Request}
	 * @api public
	 */
	
	Request.prototype.abort = function(){
	  if (this.aborted) return;
	  this.aborted = true;
	  this.xhr.abort();
	  this.clearTimeout();
	  this.emit('abort');
	  return this;
	};
	
	/**
	 * Set Content-Type to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.xml = 'application/xml';
	 *
	 *      request.post('/')
	 *        .type('xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 *      request.post('/')
	 *        .type('application/xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 * @param {String} type
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.type = function(type){
	  this.set('Content-Type', request.types[type] || type);
	  return this;
	};
	
	/**
	 * Set responseType to `val`. Presently valid responseTypes are 'blob' and 
	 * 'arraybuffer'.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .responseType('blob')
	 *        .end(callback);
	 *
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.responseType = function(val){
	  this._responseType = val;
	  return this;
	};
	
	/**
	 * Set Accept to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.json = 'application/json';
	 *
	 *      request.get('/agent')
	 *        .accept('json')
	 *        .end(callback);
	 *
	 *      request.get('/agent')
	 *        .accept('application/json')
	 *        .end(callback);
	 *
	 * @param {String} accept
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.accept = function(type){
	  this.set('Accept', request.types[type] || type);
	  return this;
	};
	
	/**
	 * Set Authorization field value with `user` and `pass`.
	 *
	 * @param {String} user
	 * @param {String} pass
	 * @param {Object} options with 'type' property 'auto' or 'basic' (default 'basic')
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.auth = function(user, pass, options){
	  if (!options) {
	    options = {
	      type: 'basic'
	    }
	  }
	
	  switch (options.type) {
	    case 'basic':
	      var str = btoa(user + ':' + pass);
	      this.set('Authorization', 'Basic ' + str);
	    break;
	
	    case 'auto':
	      this.username = user;
	      this.password = pass;
	    break;
	  }
	  return this;
	};
	
	/**
	* Add query-string `val`.
	*
	* Examples:
	*
	*   request.get('/shoes')
	*     .query('size=10')
	*     .query({ color: 'blue' })
	*
	* @param {Object|String} val
	* @return {Request} for chaining
	* @api public
	*/
	
	Request.prototype.query = function(val){
	  if ('string' != typeof val) val = serialize(val);
	  if (val) this._query.push(val);
	  return this;
	};
	
	/**
	 * Queue the given `file` as an attachment to the specified `field`,
	 * with optional `filename`.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} field
	 * @param {Blob|File} file
	 * @param {String} filename
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.attach = function(field, file, filename){
	  this._getFormData().append(field, file, filename || file.name);
	  return this;
	};
	
	Request.prototype._getFormData = function(){
	  if (!this._formData) {
	    this._formData = new root.FormData();
	  }
	  return this._formData;
	};
	
	/**
	 * Send `data` as the request body, defaulting the `.type()` to "json" when
	 * an object is given.
	 *
	 * Examples:
	 *
	 *       // manual json
	 *       request.post('/user')
	 *         .type('json')
	 *         .send('{"name":"tj"}')
	 *         .end(callback)
	 *
	 *       // auto json
	 *       request.post('/user')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // manual x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send('name=tj')
	 *         .end(callback)
	 *
	 *       // auto x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // defaults to x-www-form-urlencoded
	  *      request.post('/user')
	  *        .send('name=tobi')
	  *        .send('species=ferret')
	  *        .end(callback)
	 *
	 * @param {String|Object} data
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.send = function(data){
	  var obj = isObject(data);
	  var type = this._header['content-type'];
	
	  // merge
	  if (obj && isObject(this._data)) {
	    for (var key in data) {
	      this._data[key] = data[key];
	    }
	  } else if ('string' == typeof data) {
	    if (!type) this.type('form');
	    type = this._header['content-type'];
	    if ('application/x-www-form-urlencoded' == type) {
	      this._data = this._data
	        ? this._data + '&' + data
	        : data;
	    } else {
	      this._data = (this._data || '') + data;
	    }
	  } else {
	    this._data = data;
	  }
	
	  if (!obj || isHost(data)) return this;
	  if (!type) this.type('json');
	  return this;
	};
	
	/**
	 * @deprecated
	 */
	Response.prototype.parse = function serialize(fn){
	  if (root.console) {
	    console.warn("Client-side parse() method has been renamed to serialize(). This method is not compatible with superagent v2.0");
	  }
	  this.serialize(fn);
	  return this;
	};
	
	Response.prototype.serialize = function serialize(fn){
	  this._parser = fn;
	  return this;
	};
	
	/**
	 * Invoke the callback with `err` and `res`
	 * and handle arity check.
	 *
	 * @param {Error} err
	 * @param {Response} res
	 * @api private
	 */
	
	Request.prototype.callback = function(err, res){
	  var fn = this._callback;
	  this.clearTimeout();
	  fn(err, res);
	};
	
	/**
	 * Invoke callback with x-domain error.
	 *
	 * @api private
	 */
	
	Request.prototype.crossDomainError = function(){
	  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
	  err.crossDomain = true;
	
	  err.status = this.status;
	  err.method = this.method;
	  err.url = this.url;
	
	  this.callback(err);
	};
	
	/**
	 * Invoke callback with timeout error.
	 *
	 * @api private
	 */
	
	Request.prototype.timeoutError = function(){
	  var timeout = this._timeout;
	  var err = new Error('timeout of ' + timeout + 'ms exceeded');
	  err.timeout = timeout;
	  this.callback(err);
	};
	
	/**
	 * Enable transmission of cookies with x-domain requests.
	 *
	 * Note that for this to work the origin must not be
	 * using "Access-Control-Allow-Origin" with a wildcard,
	 * and also must set "Access-Control-Allow-Credentials"
	 * to "true".
	 *
	 * @api public
	 */
	
	Request.prototype.withCredentials = function(){
	  this._withCredentials = true;
	  return this;
	};
	
	/**
	 * Initiate request, invoking callback `fn(res)`
	 * with an instanceof `Response`.
	 *
	 * @param {Function} fn
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.end = function(fn){
	  var self = this;
	  var xhr = this.xhr = request.getXHR();
	  var query = this._query.join('&');
	  var timeout = this._timeout;
	  var data = this._formData || this._data;
	
	  // store callback
	  this._callback = fn || noop;
	
	  // state change
	  xhr.onreadystatechange = function(){
	    if (4 != xhr.readyState) return;
	
	    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
	    // result in the error "Could not complete the operation due to error c00c023f"
	    var status;
	    try { status = xhr.status } catch(e) { status = 0; }
	
	    if (0 == status) {
	      if (self.timedout) return self.timeoutError();
	      if (self.aborted) return;
	      return self.crossDomainError();
	    }
	    self.emit('end');
	  };
	
	  // progress
	  var handleProgress = function(e){
	    if (e.total > 0) {
	      e.percent = e.loaded / e.total * 100;
	    }
	    e.direction = 'download';
	    self.emit('progress', e);
	  };
	  if (this.hasListeners('progress')) {
	    xhr.onprogress = handleProgress;
	  }
	  try {
	    if (xhr.upload && this.hasListeners('progress')) {
	      xhr.upload.onprogress = handleProgress;
	    }
	  } catch(e) {
	    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
	    // Reported here:
	    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
	  }
	
	  // timeout
	  if (timeout && !this._timer) {
	    this._timer = setTimeout(function(){
	      self.timedout = true;
	      self.abort();
	    }, timeout);
	  }
	
	  // querystring
	  if (query) {
	    query = request.serializeObject(query);
	    this.url += ~this.url.indexOf('?')
	      ? '&' + query
	      : '?' + query;
	  }
	
	  // initiate request
	  if (this.username && this.password) {
	    xhr.open(this.method, this.url, true, this.username, this.password);
	  } else {
	    xhr.open(this.method, this.url, true);
	  }
	
	  // CORS
	  if (this._withCredentials) xhr.withCredentials = true;
	
	  // body
	  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
	    // serialize stuff
	    var contentType = this._header['content-type'];
	    var serialize = this._parser || request.serialize[contentType ? contentType.split(';')[0] : ''];
	    if (!serialize && isJSON(contentType)) serialize = request.serialize['application/json'];
	    if (serialize) data = serialize(data);
	  }
	
	  // set header fields
	  for (var field in this.header) {
	    if (null == this.header[field]) continue;
	    xhr.setRequestHeader(field, this.header[field]);
	  }
	
	  if (this._responseType) {
	    xhr.responseType = this._responseType;
	  }
	
	  // send stuff
	  this.emit('request', this);
	
	  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
	  // We need null here if data is undefined
	  xhr.send(typeof data !== 'undefined' ? data : null);
	  return this;
	};
	
	
	/**
	 * Expose `Request`.
	 */
	
	request.Request = Request;
	
	/**
	 * GET `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.get = function(url, data, fn){
	  var req = request('GET', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.query(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * HEAD `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.head = function(url, data, fn){
	  var req = request('HEAD', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * DELETE `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	function del(url, fn){
	  var req = request('DELETE', url);
	  if (fn) req.end(fn);
	  return req;
	};
	
	request['del'] = del;
	request['delete'] = del;
	
	/**
	 * PATCH `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.patch = function(url, data, fn){
	  var req = request('PATCH', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * POST `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.post = function(url, data, fn){
	  var req = request('POST', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * PUT `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.put = function(url, data, fn){
	  var req = request('PUT', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	if (true) {
	  module.exports = Emitter;
	}
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 11 */
/***/ function(module, exports) {

	
	/**
	 * Reduce `arr` with `fn`.
	 *
	 * @param {Array} arr
	 * @param {Function} fn
	 * @param {Mixed} initial
	 *
	 * TODO: combatible error handling?
	 */
	
	module.exports = function(arr, fn, initial){  
	  var idx = 0;
	  var len = arr.length;
	  var curr = arguments.length == 3
	    ? initial
	    : arr[idx++];
	
	  while (idx < len) {
	    curr = fn.call(null, curr, arr[idx], ++idx, arr);
	  }
	  
	  return curr;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module of mixed-in functions shared between node and client code
	 */
	var isObject = __webpack_require__(13);
	
	/**
	 * Clear previous timeout.
	 *
	 * @return {Request} for chaining
	 * @api public
	 */
	
	exports.clearTimeout = function _clearTimeout(){
	  this._timeout = 0;
	  clearTimeout(this._timer);
	  return this;
	};
	
	/**
	 * Force given parser
	 *
	 * Sets the body parser no matter type.
	 *
	 * @param {Function}
	 * @api public
	 */
	
	exports.parse = function parse(fn){
	  this._parser = fn;
	  return this;
	};
	
	/**
	 * Set timeout to `ms`.
	 *
	 * @param {Number} ms
	 * @return {Request} for chaining
	 * @api public
	 */
	
	exports.timeout = function timeout(ms){
	  this._timeout = ms;
	  return this;
	};
	
	/**
	 * Faux promise support
	 *
	 * @param {Function} fulfill
	 * @param {Function} reject
	 * @return {Request}
	 */
	
	exports.then = function then(fulfill, reject) {
	  return this.end(function(err, res) {
	    err ? reject(err) : fulfill(res);
	  });
	}
	
	/**
	 * Allow for extension
	 */
	
	exports.use = function use(fn) {
	  fn(this);
	  return this;
	}
	
	
	/**
	 * Get request header `field`.
	 * Case-insensitive.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */
	
	exports.get = function(field){
	  return this._header[field.toLowerCase()];
	};
	
	/**
	 * Get case-insensitive header `field` value.
	 * This is a deprecated internal API. Use `.get(field)` instead.
	 *
	 * (getHeader is no longer used internally by the superagent code base)
	 *
	 * @param {String} field
	 * @return {String}
	 * @api private
	 * @deprecated
	 */
	
	exports.getHeader = exports.get;
	
	/**
	 * Set header `field` to `val`, or multiple fields with one object.
	 * Case-insensitive.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .set('Accept', 'application/json')
	 *        .set('X-API-Key', 'foobar')
	 *        .end(callback);
	 *
	 *      req.get('/')
	 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
	 *        .end(callback);
	 *
	 * @param {String|Object} field
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */
	
	exports.set = function(field, val){
	  if (isObject(field)) {
	    for (var key in field) {
	      this.set(key, field[key]);
	    }
	    return this;
	  }
	  this._header[field.toLowerCase()] = val;
	  this.header[field] = val;
	  return this;
	};
	
	/**
	 * Remove header `field`.
	 * Case-insensitive.
	 *
	 * Example:
	 *
	 *      req.get('/')
	 *        .unset('User-Agent')
	 *        .end(callback);
	 *
	 * @param {String} field
	 */
	exports.unset = function(field){
	  delete this._header[field.toLowerCase()];
	  delete this.header[field];
	  return this;
	};
	
	/**
	 * Write the field `name` and `val` for "multipart/form-data"
	 * request bodies.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .field('foo', 'bar')
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} name
	 * @param {String|Blob|File|Buffer|fs.ReadStream} val
	 * @return {Request} for chaining
	 * @api public
	 */
	exports.field = function(name, val) {
	  this._getFormData().append(name, val);
	  return this;
	};


/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Check if `obj` is an object.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	function isObject(obj) {
	  return null != obj && 'object' == typeof obj;
	}
	
	module.exports = isObject;


/***/ },
/* 14 */
/***/ function(module, exports) {

	// The node and browser modules expose versions of this with the
	// appropriate constructor function bound as first argument
	/**
	 * Issue a request:
	 *
	 * Examples:
	 *
	 *    request('GET', '/users').end(callback)
	 *    request('/users').end(callback)
	 *    request('/users', callback)
	 *
	 * @param {String} method
	 * @param {String|Function} url or callback
	 * @return {Request}
	 * @api public
	 */
	
	function request(RequestConstructor, method, url) {
	  // callback
	  if ('function' == typeof url) {
	    return new RequestConstructor('GET', method).end(url);
	  }
	
	  // url first
	  if (2 == arguments.length) {
	    return new RequestConstructor('GET', method);
	  }
	
	  return new RequestConstructor(method, url);
	}
	
	module.exports = request;


/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var IS_LOADING = 'is-loading';
	var IS_COMPLETE = 'is-complete';
	
	var instances = [];
	
	var ProgressButton = function () {
	    function ProgressButton(button) {
	        _classCallCheck(this, ProgressButton);
	
	        this.button = button;
	    }
	
	    _createClass(ProgressButton, [{
	        key: 'handleLoading',
	        value: function handleLoading() {
	            this.button.setAttribute('disabled', true);
	            this.button.classList.add(IS_LOADING);
	        }
	    }, {
	        key: 'handleComplete',
	        value: function handleComplete(success) {
	            this.button.classList.remove(IS_LOADING);
	
	            if (success) {
	                this.button.removeAttribute('disabled');
	                this.button.classList.add(IS_COMPLETE);
	            }
	        }
	    }]);
	
	    return ProgressButton;
	}();
	
	exports.default = {
	    create: function create(button) {
	        return new ProgressButton(button);
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tb2R1bGVzL3Byb2dyZXNzLWJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBTSxhQUFhLFlBQWI7QUFDTixJQUFNLGNBQWMsYUFBZDs7QUFFTixJQUFJLFlBQVksRUFBWjs7SUFFRTtBQUNGLGFBREUsY0FDRixDQUFZLE1BQVosRUFBb0I7OEJBRGxCLGdCQUNrQjs7QUFDaEIsYUFBSyxNQUFMLEdBQWMsTUFBZCxDQURnQjtLQUFwQjs7aUJBREU7O3dDQUtjO0FBQ1osaUJBQUssTUFBTCxDQUFZLFlBQVosQ0FBeUIsVUFBekIsRUFBcUMsSUFBckMsRUFEWTtBQUVaLGlCQUFLLE1BQUwsQ0FBWSxTQUFaLENBQXNCLEdBQXRCLENBQTBCLFVBQTFCLEVBRlk7Ozs7dUNBS0QsU0FBUztBQUNwQixpQkFBSyxNQUFMLENBQVksU0FBWixDQUFzQixNQUF0QixDQUE2QixVQUE3QixFQURvQjs7QUFHcEIsZ0JBQUksT0FBSixFQUFhO0FBQ1QscUJBQUssTUFBTCxDQUFZLGVBQVosQ0FBNEIsVUFBNUIsRUFEUztBQUVULHFCQUFLLE1BQUwsQ0FBWSxTQUFaLENBQXNCLEdBQXRCLENBQTBCLFdBQTFCLEVBRlM7YUFBYjs7OztXQWJGOzs7a0JBb0JTO0FBQ1gsWUFBUSxnQkFBUyxNQUFULEVBQWlCO0FBQ3JCLGVBQU8sSUFBSSxjQUFKLENBQW1CLE1BQW5CLENBQVAsQ0FEcUI7S0FBakIiLCJmaWxlIjoicHJvZ3Jlc3MtYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9taWtlZnJhbmNpcy9Db2RlL3VpLXRvb2xraXQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJU19MT0FESU5HID0gJ2lzLWxvYWRpbmcnO1xuY29uc3QgSVNfQ09NUExFVEUgPSAnaXMtY29tcGxldGUnO1xuXG5sZXQgaW5zdGFuY2VzID0gW107XG5cbmNsYXNzIFByb2dyZXNzQnV0dG9uIHtcbiAgICBjb25zdHJ1Y3RvcihidXR0b24pIHtcbiAgICAgICAgdGhpcy5idXR0b24gPSBidXR0b247XG4gICAgfVxuXG4gICAgaGFuZGxlTG9hZGluZygpIHtcbiAgICAgICAgdGhpcy5idXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKElTX0xPQURJTkcpO1xuICAgIH1cblxuICAgIGhhbmRsZUNvbXBsZXRlKHN1Y2Nlc3MpIHtcbiAgICAgICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LnJlbW92ZShJU19MT0FESU5HKTtcblxuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5idXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZChJU19DT01QTEVURSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjcmVhdGU6IGZ1bmN0aW9uKGJ1dHRvbikge1xuICAgICAgICByZXR1cm4gbmV3IFByb2dyZXNzQnV0dG9uKGJ1dHRvbik7XG4gICAgfVxufVxuIl19

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domDelegate = __webpack_require__(6);
	
	var _domOps = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HAS_CONTENT = 'has-content';
	var HAS_ERROR = 'has-error';
	var HAS_FOCUS = 'has-focus';
	
	var FormFields = function () {
	    function FormFields() {
	        var root = arguments.length <= 0 || arguments[0] === undefined ? document.body : arguments[0];
	
	        _classCallCheck(this, FormFields);
	
	        this.bindEvents(root);
	        this.checkAllFieldsForContent();
	    }
	
	    _createClass(FormFields, [{
	        key: 'checkAllFieldsForContent',
	        value: function checkAllFieldsForContent() {
	            var _this = this;
	
	            var inputs = (0, _domOps.nodesToArray)((0, _domOps.select)('input'));
	
	            if (inputs.length) {
	                inputs.forEach(function (input) {
	                    return _this.checkForContent(input);
	                });
	            }
	        }
	    }, {
	        key: 'checkForContent',
	        value: function checkForContent(element) {
	            var container = this.getInputContainer(element),
	                callback = element.value ? _domOps.addClass : _domOps.removeClass;
	
	            callback(container, HAS_CONTENT);
	        }
	    }, {
	        key: 'checkForErrors',
	        value: function checkForErrors(element) {
	            (0, _domOps.removeClass)(this.getInputContainer(element), HAS_ERROR);
	        }
	    }, {
	        key: 'bindEvents',
	        value: function bindEvents(root) {
	            var _this2 = this;
	
	            var listener = new _domDelegate.Delegate(root);
	
	            // Listen to change because of password managers etc
	            listener.on('change', 'input, textarea', function (event, element) {
	                return _this2.giveFocus(element);
	            });
	
	            // Text input focus handler
	            listener.on('focus', 'input, textarea', function (event, element) {
	                return _this2.giveFocus(element);
	            });
	
	            // Text input focusout handler
	            listener.on('focusout', 'input, textarea', function (event, element) {
	                _this2.checkForContent(element);
	                _this2.checkForErrors(element);
	                _this2.removeFocus(element);
	            });
	
	            listener.on('input', 'textarea', function (event, element) {
	                var scrollHeight = element.scrollHeight;
	
	                if (scrollHeight > parseInt(css.get(element, 'height'))) {
	                    css.set(element, 'height', scrollHeight + 'px');
	                }
	            });
	        }
	    }, {
	        key: 'getInputContainer',
	        value: function getInputContainer(element) {
	            return element.parentNode;
	        }
	    }, {
	        key: 'removeFocus',
	        value: function removeFocus(element) {
	            (0, _domOps.removeClass)(this.getInputContainer(element), HAS_FOCUS);
	        }
	    }, {
	        key: 'giveFocus',
	        value: function giveFocus(element) {
	            (0, _domOps.addClass)(this.getInputContainer(element), HAS_FOCUS);
	        }
	    }]);
	
	    return FormFields;
	}();
	
	exports.default = {
	    init: function init() {
	        new FormFields();
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tb2R1bGVzL2Zvcm0tZmllbGRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFNLGNBQWMsYUFBZDtBQUNOLElBQU0sWUFBWSxXQUFaO0FBQ04sSUFBTSxZQUFZLFdBQVo7O0lBRUE7QUFDRixhQURFLFVBQ0YsR0FBa0M7WUFBdEIsNkRBQU8sU0FBUyxJQUFULGdCQUFlOzs4QkFEaEMsWUFDZ0M7O0FBQzlCLGFBQUssVUFBTCxDQUFnQixJQUFoQixFQUQ4QjtBQUU5QixhQUFLLHdCQUFMLEdBRjhCO0tBQWxDOztpQkFERTs7bURBTXlCOzs7QUFDdkIsZ0JBQUksU0FBUywwQkFBYSxvQkFBTyxPQUFQLENBQWIsQ0FBVCxDQURtQjs7QUFHdkIsZ0JBQUksT0FBTyxNQUFQLEVBQWU7QUFDZix1QkFBTyxPQUFQLENBQWU7MkJBQVMsTUFBSyxlQUFMLENBQXFCLEtBQXJCO2lCQUFULENBQWYsQ0FEZTthQUFuQjs7Ozt3Q0FLWSxTQUFTO0FBQ3JCLGdCQUFJLFlBQVksS0FBSyxpQkFBTCxDQUF1QixPQUF2QixDQUFaO2dCQUNBLFdBQVcsT0FBQyxDQUFRLEtBQVIsbUJBQUQsc0JBQVgsQ0FGaUI7O0FBSXJCLHFCQUFTLFNBQVQsRUFBb0IsV0FBcEIsRUFKcUI7Ozs7dUNBT1YsU0FBUztBQUNwQixxQ0FBWSxLQUFLLGlCQUFMLENBQXVCLE9BQXZCLENBQVosRUFBNkMsU0FBN0MsRUFEb0I7Ozs7bUNBSWIsTUFBTTs7O0FBQ2IsZ0JBQUksV0FBVywwQkFBYSxJQUFiLENBQVg7OztBQURTLG9CQUliLENBQVMsRUFBVCxDQUFZLFFBQVosRUFBc0IsaUJBQXRCLEVBQXlDLFVBQUMsS0FBRCxFQUFRLE9BQVI7dUJBQW9CLE9BQUssU0FBTCxDQUFlLE9BQWY7YUFBcEIsQ0FBekM7OztBQUphLG9CQU9iLENBQVMsRUFBVCxDQUFZLE9BQVosRUFBcUIsaUJBQXJCLEVBQXdDLFVBQUMsS0FBRCxFQUFRLE9BQVI7dUJBQW9CLE9BQUssU0FBTCxDQUFlLE9BQWY7YUFBcEIsQ0FBeEM7OztBQVBhLG9CQVViLENBQVMsRUFBVCxDQUFZLFVBQVosRUFBd0IsaUJBQXhCLEVBQTJDLFVBQUMsS0FBRCxFQUFRLE9BQVIsRUFBb0I7QUFDM0QsdUJBQUssZUFBTCxDQUFxQixPQUFyQixFQUQyRDtBQUUvRCx1QkFBSyxjQUFMLENBQW9CLE9BQXBCLEVBRitEO0FBRy9ELHVCQUFLLFdBQUwsQ0FBaUIsT0FBakIsRUFIK0Q7YUFBcEIsQ0FBM0MsQ0FWYTs7QUFnQmIscUJBQVMsRUFBVCxDQUFZLE9BQVosRUFBcUIsVUFBckIsRUFBaUMsVUFBQyxLQUFELEVBQVEsT0FBUixFQUFvQjtBQUNqRCxvQkFBSSxlQUFlLFFBQVEsWUFBUixDQUQ4Qjs7QUFHckQsb0JBQUksZUFBZSxTQUFTLElBQUksR0FBSixDQUFRLE9BQVIsRUFBaUIsUUFBakIsQ0FBVCxDQUFmLEVBQXFEO0FBQ3JELHdCQUFJLEdBQUosQ0FBUSxPQUFSLEVBQWlCLFFBQWpCLEVBQTJCLGVBQWUsSUFBZixDQUEzQixDQURxRDtpQkFBekQ7YUFIaUMsQ0FBakMsQ0FoQmE7Ozs7MENBeUJDLFNBQVM7QUFDdkIsbUJBQU8sUUFBUSxVQUFSLENBRGdCOzs7O29DQUlmLFNBQVM7QUFDakIscUNBQVksS0FBSyxpQkFBTCxDQUF1QixPQUF2QixDQUFaLEVBQTZDLFNBQTdDLEVBRGlCOzs7O2tDQUlYLFNBQVM7QUFDZixrQ0FBUyxLQUFLLGlCQUFMLENBQXVCLE9BQXZCLENBQVQsRUFBMEMsU0FBMUMsRUFEZTs7OztXQTFEakI7OztrQkErRFM7QUFDWCxVQUFNLGdCQUFZO0FBQ2QsWUFBSSxVQUFKLEdBRGM7S0FBWiIsImZpbGUiOiJmb3JtLWZpZWxkcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWlrZWZyYW5jaXMvQ29kZS91aS10b29sa2l0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVsZWdhdGUgfSBmcm9tICdkb20tZGVsZWdhdGUnO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzLCBzZWxlY3QsIG5vZGVzVG9BcnJheSB9IGZyb20gJ0Bwb2QtcG9pbnQvZG9tLW9wcyc7XG5cbmNvbnN0IEhBU19DT05URU5UID0gJ2hhcy1jb250ZW50JztcbmNvbnN0IEhBU19FUlJPUiA9ICdoYXMtZXJyb3InO1xuY29uc3QgSEFTX0ZPQ1VTID0gJ2hhcy1mb2N1cyc7XG5cbmNsYXNzIEZvcm1GaWVsZHMge1xuICAgIGNvbnN0cnVjdG9yKHJvb3QgPSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cyhyb290KTtcbiAgICAgICAgdGhpcy5jaGVja0FsbEZpZWxkc0ZvckNvbnRlbnQoKTtcbiAgICB9XG5cbiAgICBjaGVja0FsbEZpZWxkc0ZvckNvbnRlbnQoKSB7XG4gICAgICAgIHZhciBpbnB1dHMgPSBub2Rlc1RvQXJyYXkoc2VsZWN0KCdpbnB1dCcpKTtcblxuICAgICAgICBpZiAoaW5wdXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4gdGhpcy5jaGVja0ZvckNvbnRlbnQoaW5wdXQpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tGb3JDb250ZW50KGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuZ2V0SW5wdXRDb250YWluZXIoZWxlbWVudCksXG4gICAgICAgICAgICBjYWxsYmFjayA9IChlbGVtZW50LnZhbHVlKSA/IGFkZENsYXNzIDogcmVtb3ZlQ2xhc3M7XG5cbiAgICAgICAgY2FsbGJhY2soY29udGFpbmVyLCBIQVNfQ09OVEVOVCk7XG4gICAgfVxuXG4gICAgY2hlY2tGb3JFcnJvcnMoZWxlbWVudCkge1xuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmdldElucHV0Q29udGFpbmVyKGVsZW1lbnQpLCBIQVNfRVJST1IpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMocm9vdCkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSBuZXcgRGVsZWdhdGUocm9vdCk7XG5cbiAgICAgICAgLy8gTGlzdGVuIHRvIGNoYW5nZSBiZWNhdXNlIG9mIHBhc3N3b3JkIG1hbmFnZXJzIGV0Y1xuICAgICAgICBsaXN0ZW5lci5vbignY2hhbmdlJywgJ2lucHV0LCB0ZXh0YXJlYScsIChldmVudCwgZWxlbWVudCkgPT4gdGhpcy5naXZlRm9jdXMoZWxlbWVudCkgKTtcblxuICAgICAgICAvLyBUZXh0IGlucHV0IGZvY3VzIGhhbmRsZXJcbiAgICAgICAgbGlzdGVuZXIub24oJ2ZvY3VzJywgJ2lucHV0LCB0ZXh0YXJlYScsIChldmVudCwgZWxlbWVudCkgPT4gdGhpcy5naXZlRm9jdXMoZWxlbWVudCkgKTtcblxuICAgICAgICAvLyBUZXh0IGlucHV0IGZvY3Vzb3V0IGhhbmRsZXJcbiAgICAgICAgbGlzdGVuZXIub24oJ2ZvY3Vzb3V0JywgJ2lucHV0LCB0ZXh0YXJlYScsIChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGVja0ZvckNvbnRlbnQoZWxlbWVudCk7XG4gICAgICAgIHRoaXMuY2hlY2tGb3JFcnJvcnMoZWxlbWVudCk7XG4gICAgICAgIHRoaXMucmVtb3ZlRm9jdXMoZWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICAgICAgbGlzdGVuZXIub24oJ2lucHV0JywgJ3RleHRhcmVhJywgKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsSGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG5cbiAgICAgICAgaWYgKHNjcm9sbEhlaWdodCA+IHBhcnNlSW50KGNzcy5nZXQoZWxlbWVudCwgJ2hlaWdodCcpKSkge1xuICAgICAgICAgICAgY3NzLnNldChlbGVtZW50LCAnaGVpZ2h0Jywgc2Nyb2xsSGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRJbnB1dENvbnRhaW5lcihlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgcmVtb3ZlRm9jdXMoZWxlbWVudCkge1xuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmdldElucHV0Q29udGFpbmVyKGVsZW1lbnQpLCBIQVNfRk9DVVMpO1xuICAgIH1cblxuICAgIGdpdmVGb2N1cyhlbGVtZW50KSB7XG4gICAgICAgIGFkZENsYXNzKHRoaXMuZ2V0SW5wdXRDb250YWluZXIoZWxlbWVudCksIEhBU19GT0NVUyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXcgRm9ybUZpZWxkcygpO1xuICAgIH1cbn07XG4iXX0=

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domDelegate = __webpack_require__(6);
	
	var _domOps = __webpack_require__(4);
	
	var _utilities = __webpack_require__(18);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tb2R1bGVzL2NvbGxhcHNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFJLFlBQVksRUFBWjs7SUFFRTs7Ozs7Ozs7QUFPRixhQVBFLFFBT0YsQ0FBWSxPQUFaLEVBQXFCOzhCQVBuQixVQU9tQjs7QUFDakIsYUFBSyxPQUFMLEdBQWUsT0FBZixDQURpQjs7QUFHakIsYUFBSyxVQUFMLEdBSGlCO0tBQXJCOzs7Ozs7O2lCQVBFOztxQ0FnQlc7OztBQUNULGlCQUFLLFFBQUwsR0FBZ0IsMEJBQWEsS0FBSyxPQUFMLENBQTdCLENBRFM7O0FBR1QsaUJBQUssUUFBTCxDQUFjLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEIsVUFBQyxLQUFELEVBQVEsS0FBUixFQUFrQjtBQUN4QyxzQkFBSyxVQUFMLENBQWdCLEtBQWhCLEVBQXVCLEtBQXZCLEVBRHdDO2FBQWxCLENBQTFCLENBSFM7Ozs7Ozs7Ozt1Q0FXRTtBQUNYLGlCQUFLLFFBQUwsQ0FBYyxPQUFkLEdBRFc7Ozs7Ozs7Ozs7O21DQVNKLE9BQU8sU0FBUztBQUN2QixrQkFBTSxjQUFOLEdBRHVCOztBQUd2QixnQkFBSSxTQUFTLFFBQVEsT0FBUixDQUFnQixNQUFoQixDQUhVO0FBSXZCLGdCQUFJLFVBQVUseUJBQVksTUFBWixFQUFvQixRQUFRLFVBQVIsQ0FBOUIsQ0FKbUI7O0FBTXZCLGdCQUFJLHNCQUFTLE9BQVQsRUFBa0IsSUFBbEIsQ0FBSixFQUE2QjtBQUN6QixxQ0FBSyxPQUFMLEVBQWMsT0FBZCxFQUR5QjthQUE3QixNQUVPO0FBQ0gscUNBQUssT0FBTCxFQUFjLE9BQWQsRUFERzthQUZQOzs7O1dBMUNGOzs7a0JBbURTO0FBQ1gsVUFBTSxjQUFTLE9BQVQsRUFBa0I7QUFDcEIsa0JBQVUsSUFBVixDQUFlLElBQUksUUFBSixDQUFhLE9BQWIsQ0FBZixFQURvQjtLQUFsQjs7QUFJTixhQUFTLG1CQUFXO0FBQ2hCLGtCQUFVLE9BQVYsQ0FBa0IsVUFBQyxRQUFEO21CQUFjLFNBQVMsWUFBVDtTQUFkLENBQWxCLENBRGdCO0FBRWhCLG9CQUFZLEVBQVosQ0FGZ0I7S0FBWCIsImZpbGUiOiJjb2xsYXBzZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWlrZWZyYW5jaXMvQ29kZS91aS10b29sa2l0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVsZWdhdGUgfSBmcm9tICdkb20tZGVsZWdhdGUnO1xuaW1wb3J0IHsgc2VsZWN0Rmlyc3QsIGhhc0NsYXNzIH0gZnJvbSAnQHBvZC1wb2ludC9kb20tb3BzJztcbmltcG9ydCB7IGhpZGUsIHNob3cgfSBmcm9tICcuL3V0aWxpdGllcyc7XG5cbmxldCBpbnN0YW5jZXMgPSBbXTtcblxuY2xhc3MgQ29sbGFwc2Uge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBjb2xsYXBzYWJsZSBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZHMgY29sbGFwc2UgZXZlbnQuXG4gICAgICovXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IG5ldyBEZWxlZ2F0ZSh0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMubGlzdGVuZXIub24oJ2NsaWNrJywgKGV2ZW50LCBpbnB1dCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kb0NvbGxhcHNlKGV2ZW50LCBpbnB1dCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgdGhlIGV2ZW50IGxpc3RlbmVycyBmcm9tIHRoZSBlbGVtZW50cy5cbiAgICAgKi9cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbGxhcHNlcyB0aGUgZWxlbWVudFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0cmlnZ2VyXG4gICAgICovXG4gICAgZG9Db2xsYXBzZShldmVudCwgdHJpZ2dlcikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGxldCB0YXJnZXQgPSB0cmlnZ2VyLmRhdGFzZXQudGFyZ2V0O1xuICAgICAgICBsZXQgZWxlbWVudCA9IHNlbGVjdEZpcnN0KHRhcmdldCwgdHJpZ2dlci5wYXJlbnROb2RlKTtcblxuICAgICAgICBpZiAoaGFzQ2xhc3MoZWxlbWVudCwgJ2luJykpIHtcbiAgICAgICAgICAgIGhpZGUoZWxlbWVudCwgdHJpZ2dlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93KGVsZW1lbnQsIHRyaWdnZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGluc3RhbmNlcy5wdXNoKG5ldyBDb2xsYXBzZShlbGVtZW50KSk7XG4gICAgfSxcblxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IGluc3RhbmNlLnVuYmluZEV2ZW50cygpKTtcbiAgICAgICAgaW5zdGFuY2VzID0gW107XG4gICAgfVxufTtcbiJdfQ==

/***/ },
/* 18 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tb2R1bGVzL3V0aWxpdGllcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQUFnQjtRQVNBO1FBV0E7UUFlQTtBQW5DVCxTQUFTLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDbEMsUUFBSSxhQUFhLFFBQVEsS0FBUixDQUFjLE1BQWQsQ0FEaUI7QUFFbEMsWUFBUSxLQUFSLENBQWMsTUFBZCxHQUF1QixNQUF2QixDQUZrQztBQUdsQyxRQUFJLFlBQVksaUJBQWlCLE9BQWpCLEVBQTBCLE1BQTFCLENBSGtCO0FBSWxDLFlBQVEsS0FBUixDQUFjLE1BQWQsR0FBdUIsVUFBdkIsQ0FKa0M7QUFLbEMsWUFBUSxZQUFSLENBTGtDO0FBTWxDLFdBQU8sU0FBUCxDQU5rQztDQUEvQjs7QUFTQSxTQUFTLElBQVQsQ0FBYyxPQUFkLEVBQXVCLE9BQXZCLEVBQWdDO0FBQ25DLFlBQVEsU0FBUixDQUFrQixNQUFsQixDQUF5QixVQUF6QixFQURtQztBQUVuQyxZQUFRLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsWUFBdEIsRUFGbUM7QUFHbkMsWUFBUSxTQUFSLENBQWtCLE1BQWxCLENBQXlCLFdBQXpCLEVBSG1DO0FBSW5DLFlBQVEsWUFBUixDQUFxQixlQUFyQixFQUFzQyxJQUF0QyxFQUptQzs7QUFNbkMsWUFBUSxLQUFSLENBQWMsTUFBZCxHQUF1QixhQUFhLE9BQWIsQ0FBdkIsQ0FObUM7O0FBUW5DLGFBQVMsT0FBVCxFQVJtQztDQUFoQzs7QUFXQSxTQUFTLElBQVQsQ0FBYyxPQUFkLEVBQXVCLE9BQXZCLEVBQWdDO0FBQ25DLFlBQVEsU0FBUixDQUFrQixNQUFsQixDQUF5QixVQUF6QixFQURtQztBQUVuQyxZQUFRLFNBQVIsQ0FBa0IsTUFBbEIsQ0FBeUIsSUFBekIsRUFGbUM7QUFHbkMsWUFBUSxTQUFSLENBQWtCLEdBQWxCLENBQXNCLFlBQXRCLEVBSG1DO0FBSW5DLFlBQVEsU0FBUixDQUFrQixHQUFsQixDQUFzQixXQUF0QixFQUptQztBQUtuQyxZQUFRLFlBQVIsQ0FBcUIsZUFBckIsRUFBc0MsS0FBdEM7OztBQUxtQyxXQVFuQyxDQUFRLEtBQVIsQ0FBYyxNQUFkLEdBQXVCLGlCQUFpQixPQUFqQixFQUEwQixNQUExQixDQVJZO0FBU25DLFlBQVEsWUFBUjtBQVRtQyxXQVVuQyxDQUFRLEtBQVIsQ0FBYyxNQUFkLEdBQXVCLEtBQXZCLENBVm1DOztBQVluQyxhQUFTLE9BQVQsRUFabUM7Q0FBaEM7O0FBZUEsU0FBUyxRQUFULENBQWtCLE9BQWxCLEVBQTJCO0FBQzlCLFlBQVEsU0FBUixDQUFrQixNQUFsQixDQUF5QixZQUF6QixFQUQ4QjtBQUU5QixZQUFRLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsVUFBdEIsRUFGOEI7QUFHOUIsWUFBUSxZQUFSLENBQXFCLGVBQXJCLEVBQXNDLEtBQXRDOzs7QUFIOEIsUUFNMUIsUUFBUSxLQUFSLENBQWMsTUFBZCxLQUF5QixLQUF6QixFQUFnQztBQUNoQyxnQkFBUSxTQUFSLENBQWtCLEdBQWxCLENBQXNCLElBQXRCLEVBRGdDO0FBRWhDLGdCQUFRLEtBQVIsQ0FBYyxNQUFkLEdBQXVCLE1BQXZCLENBRmdDO0tBQXBDO0NBTkciLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9taWtlZnJhbmNpcy9Db2RlL3VpLXRvb2xraXQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2V0TWF4SGVpZ2h0KGVsZW1lbnQpIHtcbiAgICB2YXIgcHJldkhlaWdodCA9IGVsZW1lbnQuc3R5bGUuaGVpZ2h0O1xuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgIHZhciBtYXhIZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmhlaWdodDtcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IHByZXZIZWlnaHQ7XG4gICAgZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgcmV0dXJuIG1heEhlaWdodDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3coZWxlbWVudCwgdHJpZ2dlcikge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY29sbGFwc2UnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNpbmcnKTtcbiAgICB0cmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNlZCcpO1xuICAgIHRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG5cbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGdldE1heEhlaWdodChlbGVtZW50KTtcblxuICAgIGNvbXBsZXRlKGVsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZShlbGVtZW50LCB0cmlnZ2VyKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZScpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaW4nKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNpbmcnKTtcbiAgICB0cmlnZ2VyLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlZCcpO1xuICAgIHRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuXG4gICAgLy8gUmVzZXQgZWxlbWVudCdzIGhlaWdodFxuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5oZWlnaHQ7XG4gICAgZWxlbWVudC5vZmZzZXRIZWlnaHQ7IC8vIGZvcmNlIHJlcGFpbnRcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuXG4gICAgY29tcGxldGUoZWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV0ZShlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzaW5nJyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuXG4gICAgLy8gQ2hlY2sgd2hldGhlciB0aGUgZWxlbWVudCBpcyB1bmhpZGRlblxuICAgIGlmIChlbGVtZW50LnN0eWxlLmhlaWdodCAhPT0gJzBweCcpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbicpO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgICB9XG59XG4iXX0=

/***/ },
/* 19 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tb2R1bGVzL2Ryb3Bkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFJLFlBQVksRUFBWjs7SUFFRTs7Ozs7Ozs7QUFPRixhQVBFLFFBT0YsQ0FBWSxPQUFaLEVBQXFCOzhCQVBuQixVQU9tQjs7QUFDakIsYUFBSyxPQUFMLEdBQWUsT0FBZixDQURpQjs7QUFHakIsYUFBSyxVQUFMLEdBSGlCO0tBQXJCOzs7Ozs7O2lCQVBFOztxQ0FnQlc7OztBQUNULGlCQUFLLFFBQUwsR0FBZ0IsMEJBQWEsS0FBSyxPQUFMLENBQTdCLENBRFM7O0FBR1QsaUJBQUssUUFBTCxDQUFjLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEIsVUFBQyxLQUFELEVBQVEsS0FBUixFQUFrQjtBQUN4QyxzQkFBSyxVQUFMLENBQWdCLEtBQWhCLEVBQXVCLEtBQXZCLEVBRHdDO2FBQWxCLENBQTFCLENBSFM7O0FBT1QsaUJBQUssUUFBTCxDQUFjLEVBQWQsQ0FBaUIsTUFBakIsRUFBeUIsVUFBQyxLQUFELEVBQVEsS0FBUixFQUFrQjtBQUN2QyxzQkFBSyxhQUFMLENBQW1CLEtBQW5CLEVBQTBCLEtBQTFCLEVBRHVDO2FBQWxCLENBQXpCLENBUFM7Ozs7Ozs7Ozt1Q0FlRTtBQUNYLGlCQUFLLFFBQUwsQ0FBYyxPQUFkLEdBRFc7Ozs7Ozs7Ozs7O21DQVNKLE9BQU8sT0FBTztBQUNyQixrQkFBTSxjQUFOLEdBRHFCO0FBRXJCLGtCQUFNLGFBQU4sQ0FBb0IsU0FBcEIsQ0FBOEIsTUFBOUIsQ0FBcUMsTUFBckMsRUFGcUI7Ozs7Ozs7Ozs7O3NDQVVYLE9BQU8sT0FBTztBQUN4QixxQ0FBWSxNQUFNLGFBQU4sRUFBcUIsTUFBakM7OztBQUR3QixnQkFJcEIsTUFBTSxhQUFOLElBQXVCLE1BQU0sYUFBTixDQUFvQixZQUFwQixDQUFpQyxnQkFBakMsTUFBdUQsVUFBdkQsRUFBbUU7QUFDMUYsc0JBQU0sYUFBTixDQUFvQixLQUFwQixHQUQwRjthQUE5Rjs7OztXQXRERjs7O2tCQTZEUztBQUNYLFVBQU0sY0FBUyxPQUFULEVBQWtCO0FBQ3BCLGtCQUFVLElBQVYsQ0FBZSxJQUFJLFFBQUosQ0FBYSxPQUFiLENBQWYsRUFEb0I7S0FBbEI7O0FBSU4sYUFBUyxtQkFBVztBQUNoQixrQkFBVSxPQUFWLENBQWtCLFVBQUMsUUFBRDttQkFBYyxTQUFTLFlBQVQ7U0FBZCxDQUFsQixDQURnQjtBQUVoQixvQkFBWSxFQUFaLENBRmdCO0tBQVgiLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21pa2VmcmFuY2lzL0NvZGUvdWktdG9vbGtpdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlbGVnYXRlIH0gZnJvbSAnZG9tLWRlbGVnYXRlJztcbmltcG9ydCB7IHJlbW92ZUNsYXNzIH0gZnJvbSAnQHBvZC1wb2ludC9kb20tb3BzJztcblxubGV0IGluc3RhbmNlcyA9IFtdO1xuXG5jbGFzcyBEcm9wRG93biB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGRyb3Bkb3duLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZHMgZHJvcGRvd24gZXZlbnQuXG4gICAgICovXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IG5ldyBEZWxlZ2F0ZSh0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMubGlzdGVuZXIub24oJ2NsaWNrJywgKGV2ZW50LCBpbnB1dCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kb0Ryb3BEb3duKGV2ZW50LCBpbnB1dCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGlzdGVuZXIub24oJ2JsdXInLCAoZXZlbnQsIGlucHV0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlRHJvcERvd24oZXZlbnQsIGlucHV0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5iaW5kcyB0aGUgZXZlbnQgbGlzdGVuZXJzIGZyb20gdGhlIGVsZW1lbnRzLlxuICAgICAqL1xuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJvcHMgZG93blxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBpbnB1dFxuICAgICAqL1xuICAgIGRvRHJvcERvd24oZXZlbnQsIGlucHV0KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlucHV0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGUgZHJvcGRvd25cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gaW5wdXRcbiAgICAgKi9cbiAgICBjbG9zZURyb3BEb3duKGV2ZW50LCBpbnB1dCkge1xuICAgICAgICByZW1vdmVDbGFzcyhpbnB1dC5wYXJlbnRFbGVtZW50LCAnb3BlbicpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIGNsaWNrIGV2ZW50IG9uIHRoZSB0YXJnZXQgaWYgaXQgbm90IG9wZW5pbmcgYW5vdGhlciBtZW51XG4gICAgICAgIGlmIChldmVudC5yZWxhdGVkVGFyZ2V0ICYmIGV2ZW50LnJlbGF0ZWRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLW1vZHVsZScpICE9PSAnZHJvcGRvd24nKSB7XG4gICAgICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0LmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgaW5zdGFuY2VzLnB1c2gobmV3IERyb3BEb3duKGVsZW1lbnQpKTtcbiAgICB9LFxuXG4gICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4gaW5zdGFuY2UudW5iaW5kRXZlbnRzKCkpO1xuICAgICAgICBpbnN0YW5jZXMgPSBbXTtcbiAgICB9XG59O1xuIl19

/***/ },
/* 20 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tb2R1bGVzL3RvZ2dsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUEsSUFBSSxZQUFZLEVBQVo7O0lBRUU7Ozs7Ozs7O0FBT0YsYUFQRSxNQU9GLENBQVksT0FBWixFQUFxQjs4QkFQbkIsUUFPbUI7O0FBQ2pCLGFBQUssT0FBTCxHQUFlLE9BQWYsQ0FEaUI7QUFFakIsYUFBSyxNQUFMLEdBQWMsUUFBUSxPQUFSLENBQWdCLGNBQWhCLENBQStCLFFBQS9CLElBQTJDLFFBQVEsT0FBUixDQUFnQixNQUFoQixHQUF5QixPQUFwRSxDQUZHOztBQUlqQixhQUFLLElBQUwsR0FBWSxRQUFRLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FKSztBQUtqQixhQUFLLElBQUwsR0FBWSxRQUFRLE9BQVIsQ0FBZ0IsY0FBaEIsQ0FBK0IsTUFBL0IsSUFBeUMsUUFBUSxPQUFSLENBQWdCLElBQWhCLEdBQXVCLElBQWhFLENBTEs7O0FBT2pCLGFBQUssVUFBTCxHQVBpQjtLQUFyQjs7Ozs7OztpQkFQRTs7cUNBb0JXOzs7QUFDVCxpQkFBSyxRQUFMLEdBQWdCLDBCQUFhLEtBQUssT0FBTCxDQUE3QixDQURTOztBQUdULGlCQUFLLFFBQUwsQ0FBYyxFQUFkLENBQWlCLEtBQUssTUFBTCxFQUFhLFVBQUMsS0FBRCxFQUFXO0FBQ3JDLHNCQUFLLFFBQUwsQ0FBYyxLQUFkLEVBRHFDO2FBQVgsQ0FBOUIsQ0FIUzs7Ozs7Ozs7O3VDQVdFO0FBQ1gsaUJBQUssUUFBTCxDQUFjLE9BQWQsR0FEVzs7Ozs7Ozs7Ozs7aUNBU04sT0FBTztBQUNaLGtCQUFNLGNBQU4sR0FEWTs7QUFHWixnQkFBSSxjQUFjLHlCQUFZLEtBQUssSUFBTCxDQUExQixDQUhRO0FBSVosZ0JBQUksY0FBYyxLQUFLLElBQUwsR0FBWSx5QkFBWSxLQUFLLElBQUwsQ0FBeEIsR0FBcUMsSUFBckMsQ0FKTjs7QUFNWixnQkFBSSxZQUFZLEtBQVosQ0FBa0IsT0FBbEIsS0FBOEIsTUFBOUIsSUFBd0MsWUFBWSxLQUFaLENBQWtCLE9BQWxCLEtBQThCLEVBQTlCLEVBQWtDOztBQUUxRSw0QkFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTRCLE1BQTVCLENBRjBFOztBQUkxRSxvQkFBSSxLQUFLLElBQUwsRUFBVztBQUNYLGdDQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBNEIsT0FBNUIsQ0FEVztpQkFBZjthQUpKLE1BUU87O0FBRUgsNEJBQVksS0FBWixDQUFrQixPQUFsQixHQUE0QixPQUE1QixDQUZHOztBQUlILG9CQUFJLEtBQUssSUFBTCxFQUFXO0FBQ1gsZ0NBQVksS0FBWixDQUFrQixPQUFsQixHQUE0QixNQUE1QixDQURXO2lCQUFmO2FBWko7Ozs7V0E5Q0Y7OztrQkFrRVM7QUFDWCxVQUFNLGNBQVMsT0FBVCxFQUFrQjtBQUNwQixrQkFBVSxJQUFWLENBQWUsSUFBSSxNQUFKLENBQVcsT0FBWCxDQUFmLEVBRG9CO0tBQWxCOztBQUlOLGFBQVMsbUJBQVc7QUFDaEIsa0JBQVUsT0FBVixDQUFrQixVQUFDLFFBQUQ7bUJBQWMsU0FBUyxZQUFUO1NBQWQsQ0FBbEIsQ0FEZ0I7QUFFaEIsb0JBQVksRUFBWixDQUZnQjtLQUFYIiwiZmlsZSI6InRvZ2dsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWlrZWZyYW5jaXMvQ29kZS91aS10b29sa2l0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVsZWdhdGUgfSBmcm9tICdkb20tZGVsZWdhdGUnO1xuaW1wb3J0IHsgc2VsZWN0Rmlyc3QgfSBmcm9tICdAcG9kLXBvaW50L2RvbS1vcHMnO1xuXG5sZXQgaW5zdGFuY2VzID0gW107XG5cbmNsYXNzIFRvZ2dsZSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHRvZ2dsZSBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gZWxlbWVudC5kYXRhc2V0Lmhhc093blByb3BlcnR5KCdhY3Rpb24nKSA/IGVsZW1lbnQuZGF0YXNldC5hY3Rpb24gOiAnY2xpY2snO1xuXG4gICAgICAgIHRoaXMuaGlkZSA9IGVsZW1lbnQuZGF0YXNldC5oaWRlO1xuICAgICAgICB0aGlzLnNob3cgPSBlbGVtZW50LmRhdGFzZXQuaGFzT3duUHJvcGVydHkoJ3Nob3cnKSA/IGVsZW1lbnQuZGF0YXNldC5zaG93IDogbnVsbDtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyB0b2dnbGUgZXZlbnQuXG4gICAgICovXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IG5ldyBEZWxlZ2F0ZSh0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMubGlzdGVuZXIub24odGhpcy5hY3Rpb24sIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kb1RvZ2dsZShldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgdGhlIGV2ZW50IGxpc3RlbmVycyBmcm9tIHRoZSBlbGVtZW50cy5cbiAgICAgKi9cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIGVsZW1lbnRzXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRyaWdnZXJcbiAgICAgKi9cbiAgICBkb1RvZ2dsZShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGxldCBoaWRlRWxlbWVudCA9IHNlbGVjdEZpcnN0KHRoaXMuaGlkZSk7XG4gICAgICAgIGxldCBzaG93RWxlbWVudCA9IHRoaXMuc2hvdyA/IHNlbGVjdEZpcnN0KHRoaXMuc2hvdykgOiBudWxsO1xuXG4gICAgICAgIGlmIChoaWRlRWxlbWVudC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgfHwgaGlkZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJycpIHtcblxuICAgICAgICAgICAgaGlkZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvdykge1xuICAgICAgICAgICAgICAgIHNob3dFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGhpZGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93KSB7XG4gICAgICAgICAgICAgICAgc2hvd0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBpbnN0YW5jZXMucHVzaChuZXcgVG9nZ2xlKGVsZW1lbnQpKTtcbiAgICB9LFxuXG4gICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4gaW5zdGFuY2UudW5iaW5kRXZlbnRzKCkpO1xuICAgICAgICBpbnN0YW5jZXMgPSBbXTtcbiAgICB9XG59O1xuIl19

/***/ },
/* 21 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9zaGltcy9jbGFzc0xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsSUFBSSxjQUFjLElBQWQsRUFBb0I7Ozs7QUFJeEIsS0FBSSxFQUFFLGVBQWUsU0FBUyxhQUFULENBQXVCLEdBQXZCLENBQWYsQ0FBRixJQUNBLFNBQVMsZUFBVCxJQUE0QixFQUFFLGVBQWUsU0FBUyxlQUFULENBQXlCLDRCQUF6QixFQUFzRCxHQUF0RCxDQUFmLENBQUYsRUFBOEU7O0FBRTlHLEdBQUMsVUFBVSxJQUFWLEVBQWdCOztBQUVqQixnQkFGaUI7O0FBSWpCLE9BQUksRUFBRSxhQUFhLElBQWIsQ0FBRixFQUFzQixPQUExQjs7QUFFQSxPQUNHLGdCQUFnQixXQUFoQjtPQUNBLFlBQVksV0FBWjtPQUNBLGVBQWUsS0FBSyxPQUFMLENBQWEsU0FBYixDQUFmO09BQ0EsU0FBUyxNQUFUO09BQ0EsVUFBVSxPQUFPLFNBQVAsRUFBa0IsSUFBbEIsSUFBMEIsWUFBWTtBQUNqRCxXQUFPLEtBQUssT0FBTCxDQUFhLFlBQWIsRUFBMkIsRUFBM0IsQ0FBUCxDQURpRDtJQUFaO09BR3BDLGFBQWEsTUFBTSxTQUFOLEVBQWlCLE9BQWpCLElBQTRCLFVBQVUsSUFBVixFQUFnQjtBQUMxRCxRQUNHLElBQUksQ0FBSjtRQUNBLE1BQU0sS0FBSyxNQUFMLENBSGlEO0FBSzFELFdBQU8sSUFBSSxHQUFKLEVBQVMsR0FBaEIsRUFBcUI7QUFDcEIsU0FBSSxLQUFLLElBQUwsSUFBYSxLQUFLLENBQUwsTUFBWSxJQUFaLEVBQWtCO0FBQ2xDLGFBQU8sQ0FBUCxDQURrQztNQUFuQztLQUREO0FBS0EsV0FBTyxDQUFDLENBQUQsQ0FWbUQ7SUFBaEI7O0FBUjVDO09BcUJHLFFBQVEsU0FBUixLQUFRLENBQVUsSUFBVixFQUFnQixPQUFoQixFQUF5QjtBQUNsQyxTQUFLLElBQUwsR0FBWSxJQUFaLENBRGtDO0FBRWxDLFNBQUssSUFBTCxHQUFZLGFBQWEsSUFBYixDQUFaLENBRmtDO0FBR2xDLFNBQUssT0FBTCxHQUFlLE9BQWYsQ0FIa0M7SUFBekI7T0FLUix3QkFBd0IsU0FBeEIscUJBQXdCLENBQVUsU0FBVixFQUFxQixLQUFyQixFQUE0QjtBQUNyRCxRQUFJLFVBQVUsRUFBVixFQUFjO0FBQ2pCLFdBQU0sSUFBSSxLQUFKLENBQ0gsWUFERyxFQUVILDRDQUZHLENBQU4sQ0FEaUI7S0FBbEI7QUFNQSxRQUFJLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBSixFQUFzQjtBQUNyQixXQUFNLElBQUksS0FBSixDQUNILHVCQURHLEVBRUgsc0NBRkcsQ0FBTixDQURxQjtLQUF0QjtBQU1BLFdBQU8sV0FBVyxJQUFYLENBQWdCLFNBQWhCLEVBQTJCLEtBQTNCLENBQVAsQ0FicUQ7SUFBNUI7T0FleEIsWUFBWSxTQUFaLFNBQVksQ0FBVSxJQUFWLEVBQWdCO0FBQzdCLFFBQ0csaUJBQWlCLFFBQVEsSUFBUixDQUFhLEtBQUssWUFBTCxDQUFrQixPQUFsQixLQUE4QixFQUE5QixDQUE5QjtRQUNBLFVBQVUsaUJBQWlCLGVBQWUsS0FBZixDQUFxQixLQUFyQixDQUFqQixHQUErQyxFQUEvQztRQUNWLElBQUksQ0FBSjtRQUNBLE1BQU0sUUFBUSxNQUFSLENBTG9CO0FBTzdCLFdBQU8sSUFBSSxHQUFKLEVBQVMsR0FBaEIsRUFBcUI7QUFDcEIsVUFBSyxJQUFMLENBQVUsUUFBUSxDQUFSLENBQVYsRUFEb0I7S0FBckI7QUFHQSxTQUFLLGdCQUFMLEdBQXdCLFlBQVk7QUFDbkMsVUFBSyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLEtBQUssUUFBTCxFQUEzQixFQURtQztLQUFaLENBVks7SUFBaEI7T0FjWixpQkFBaUIsVUFBVSxTQUFWLElBQXVCLEVBQXZCO09BQ2pCLGtCQUFrQixTQUFsQixlQUFrQixHQUFZO0FBQy9CLFdBQU8sSUFBSSxTQUFKLENBQWMsSUFBZCxDQUFQLENBRCtCO0lBQVo7OztBQTlESixRQW9FakIsQ0FBTSxTQUFOLElBQW1CLE1BQU0sU0FBTixDQUFuQixDQXBFaUI7QUFxRWpCLGtCQUFlLElBQWYsR0FBc0IsVUFBVSxDQUFWLEVBQWE7QUFDbEMsV0FBTyxLQUFLLENBQUwsS0FBVyxJQUFYLENBRDJCO0lBQWIsQ0FyRUw7QUF3RWpCLGtCQUFlLFFBQWYsR0FBMEIsVUFBVSxLQUFWLEVBQWlCO0FBQzFDLGFBQVMsRUFBVCxDQUQwQztBQUUxQyxXQUFPLHNCQUFzQixJQUF0QixFQUE0QixLQUE1QixNQUF1QyxDQUFDLENBQUQsQ0FGSjtJQUFqQixDQXhFVDtBQTRFakIsa0JBQWUsR0FBZixHQUFxQixZQUFZO0FBQ2hDLFFBQ0csU0FBUyxTQUFUO1FBQ0EsSUFBSSxDQUFKO1FBQ0EsSUFBSSxPQUFPLE1BQVA7UUFDSixLQUpIO1FBS0csVUFBVSxLQUFWLENBTjZCO0FBUWhDLE9BQUc7QUFDRixhQUFRLE9BQU8sQ0FBUCxJQUFZLEVBQVosQ0FETjtBQUVGLFNBQUksc0JBQXNCLElBQXRCLEVBQTRCLEtBQTVCLE1BQXVDLENBQUMsQ0FBRCxFQUFJO0FBQzlDLFdBQUssSUFBTCxDQUFVLEtBQVYsRUFEOEM7QUFFOUMsZ0JBQVUsSUFBVixDQUY4QztNQUEvQztLQUZELFFBT08sRUFBRSxDQUFGLEdBQU0sQ0FBTixFQWZ5Qjs7QUFpQmhDLFFBQUksT0FBSixFQUFhO0FBQ1osVUFBSyxnQkFBTCxHQURZO0tBQWI7SUFqQm9CLENBNUVKO0FBaUdqQixrQkFBZSxNQUFmLEdBQXdCLFlBQVk7QUFDbkMsUUFDRyxTQUFTLFNBQVQ7UUFDQSxJQUFJLENBQUo7UUFDQSxJQUFJLE9BQU8sTUFBUDtRQUNKLEtBSkg7UUFLRyxVQUFVLEtBQVY7UUFDQSxLQU5ILENBRG1DO0FBU25DLE9BQUc7QUFDRixhQUFRLE9BQU8sQ0FBUCxJQUFZLEVBQVosQ0FETjtBQUVGLGFBQVEsc0JBQXNCLElBQXRCLEVBQTRCLEtBQTVCLENBQVIsQ0FGRTtBQUdGLFlBQU8sVUFBVSxDQUFDLENBQUQsRUFBSTtBQUNwQixXQUFLLE1BQUwsQ0FBWSxLQUFaLEVBQW1CLENBQW5CLEVBRG9CO0FBRXBCLGdCQUFVLElBQVYsQ0FGb0I7QUFHcEIsY0FBUSxzQkFBc0IsSUFBdEIsRUFBNEIsS0FBNUIsQ0FBUixDQUhvQjtNQUFyQjtLQUhELFFBU08sRUFBRSxDQUFGLEdBQU0sQ0FBTixFQWxCNEI7O0FBb0JuQyxRQUFJLE9BQUosRUFBYTtBQUNaLFVBQUssZ0JBQUwsR0FEWTtLQUFiO0lBcEJ1QixDQWpHUDtBQXlIakIsa0JBQWUsTUFBZixHQUF3QixVQUFVLEtBQVYsRUFBaUIsS0FBakIsRUFBd0I7QUFDL0MsYUFBUyxFQUFULENBRCtDOztBQUcvQyxRQUNHLFNBQVMsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFUO1FBQ0EsU0FBUyxTQUNWLFVBQVUsSUFBVixJQUFrQixRQUFsQixHQUVBLFVBQVUsS0FBVixJQUFtQixLQUFuQixDQVI2Qzs7QUFXL0MsUUFBSSxNQUFKLEVBQVk7QUFDWCxVQUFLLE1BQUwsRUFBYSxLQUFiLEVBRFc7S0FBWjs7QUFJQSxRQUFJLFVBQVUsSUFBVixJQUFrQixVQUFVLEtBQVYsRUFBaUI7QUFDdEMsWUFBTyxLQUFQLENBRHNDO0tBQXZDLE1BRU87QUFDTixZQUFPLENBQUMsTUFBRCxDQUREO0tBRlA7SUFmdUIsQ0F6SFA7QUE4SWpCLGtCQUFlLFFBQWYsR0FBMEIsWUFBWTtBQUNyQyxXQUFPLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBUCxDQURxQztJQUFaLENBOUlUOztBQWtKakIsT0FBSSxPQUFPLGNBQVAsRUFBdUI7QUFDMUIsUUFBSSxvQkFBb0I7QUFDckIsVUFBSyxlQUFMO0FBQ0EsaUJBQVksSUFBWjtBQUNBLG1CQUFjLElBQWQ7S0FIQyxDQURzQjtBQU0xQixRQUFJO0FBQ0gsWUFBTyxjQUFQLENBQXNCLFlBQXRCLEVBQW9DLGFBQXBDLEVBQW1ELGlCQUFuRCxFQURHO0tBQUosQ0FFRSxPQUFPLEVBQVAsRUFBVzs7QUFDWixTQUFJLEdBQUcsTUFBSCxLQUFjLENBQUMsVUFBRCxFQUFhO0FBQzlCLHdCQUFrQixVQUFsQixHQUErQixLQUEvQixDQUQ4QjtBQUU5QixhQUFPLGNBQVAsQ0FBc0IsWUFBdEIsRUFBb0MsYUFBcEMsRUFBbUQsaUJBQW5ELEVBRjhCO01BQS9CO0tBREM7SUFSSCxNQWNPLElBQUksT0FBTyxTQUFQLEVBQWtCLGdCQUFsQixFQUFvQztBQUM5QyxpQkFBYSxnQkFBYixDQUE4QixhQUE5QixFQUE2QyxlQUE3QyxFQUQ4QztJQUF4QztHQWhLTixFQW9LQyxJQXBLRCxDQUFELENBRjhHO0VBRDlHLE1BeUtPOzs7O0FBSVAsR0FBQyxZQUFZO0FBQ1osZ0JBRFk7O0FBR1osT0FBSSxjQUFjLFNBQVMsYUFBVCxDQUF1QixHQUF2QixDQUFkLENBSFE7O0FBS1osZUFBWSxTQUFaLENBQXNCLEdBQXRCLENBQTBCLElBQTFCLEVBQWdDLElBQWhDOzs7O0FBTFksT0FTUixDQUFDLFlBQVksU0FBWixDQUFzQixRQUF0QixDQUErQixJQUEvQixDQUFELEVBQXVDO0FBQzFDLFFBQUksZUFBZSxTQUFmLFlBQWUsQ0FBUyxNQUFULEVBQWlCO0FBQ25DLFNBQUksV0FBVyxhQUFhLFNBQWIsQ0FBdUIsTUFBdkIsQ0FBWCxDQUQrQjs7QUFHbkMsa0JBQWEsU0FBYixDQUF1QixNQUF2QixJQUFpQyxVQUFTLEtBQVQsRUFBZ0I7QUFDaEQsVUFBSSxDQUFKO1VBQU8sTUFBTSxVQUFVLE1BQVYsQ0FEbUM7O0FBR2hELFdBQUssSUFBSSxDQUFKLEVBQU8sSUFBSSxHQUFKLEVBQVMsR0FBckIsRUFBMEI7QUFDekIsZUFBUSxVQUFVLENBQVYsQ0FBUixDQUR5QjtBQUV6QixnQkFBUyxJQUFULENBQWMsSUFBZCxFQUFvQixLQUFwQixFQUZ5QjtPQUExQjtNQUhnQyxDQUhFO0tBQWpCLENBRHVCO0FBYTFDLGlCQUFhLEtBQWIsRUFiMEM7QUFjMUMsaUJBQWEsUUFBYixFQWQwQztJQUEzQzs7QUFpQkEsZUFBWSxTQUFaLENBQXNCLE1BQXRCLENBQTZCLElBQTdCLEVBQW1DLEtBQW5DOzs7O0FBMUJZLE9BOEJSLFlBQVksU0FBWixDQUFzQixRQUF0QixDQUErQixJQUEvQixDQUFKLEVBQTBDO0FBQ3pDLFFBQUksVUFBVSxhQUFhLFNBQWIsQ0FBdUIsTUFBdkIsQ0FEMkI7O0FBR3pDLGlCQUFhLFNBQWIsQ0FBdUIsTUFBdkIsR0FBZ0MsVUFBUyxLQUFULEVBQWdCLEtBQWhCLEVBQXVCO0FBQ3RELFNBQUksS0FBSyxTQUFMLElBQWtCLENBQUMsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFELEtBQTBCLENBQUMsS0FBRCxFQUFRO0FBQ3ZELGFBQU8sS0FBUCxDQUR1RDtNQUF4RCxNQUVPO0FBQ04sYUFBTyxRQUFRLElBQVIsQ0FBYSxJQUFiLEVBQW1CLEtBQW5CLENBQVAsQ0FETTtNQUZQO0tBRCtCLENBSFM7SUFBMUM7O0FBYUEsaUJBQWMsSUFBZCxDQTNDWTtHQUFaLEdBQUQsQ0FKTztFQXpLUDtDQUpBIiwiZmlsZSI6ImNsYXNzTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWlrZWZyYW5jaXMvQ29kZS91aS10b29sa2l0Iiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIGNsYXNzTGlzdC5qczogQ3Jvc3MtYnJvd3NlciBmdWxsIGVsZW1lbnQuY2xhc3NMaXN0IGltcGxlbWVudGF0aW9uLlxuICogMS4xLjIwMTUwMzEyXG4gKlxuICogQnkgRWxpIEdyZXksIGh0dHA6Ly9lbGlncmV5LmNvbVxuICogTGljZW5zZTogRGVkaWNhdGVkIHRvIHRoZSBwdWJsaWMgZG9tYWluLlxuICogICBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2VsaWdyZXkvY2xhc3NMaXN0LmpzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcbiAqL1xuXG4vKmdsb2JhbCBzZWxmLCBkb2N1bWVudCwgRE9NRXhjZXB0aW9uICovXG5cbi8qISBAc291cmNlIGh0dHA6Ly9wdXJsLmVsaWdyZXkuY29tL2dpdGh1Yi9jbGFzc0xpc3QuanMvYmxvYi9tYXN0ZXIvY2xhc3NMaXN0LmpzICovXG5cbmlmIChcImRvY3VtZW50XCIgaW4gc2VsZikge1xuXG4vLyBGdWxsIHBvbHlmaWxsIGZvciBicm93c2VycyB3aXRoIG5vIGNsYXNzTGlzdCBzdXBwb3J0XG4vLyBJbmNsdWRpbmcgSUUgPCBFZGdlIG1pc3NpbmcgU1ZHRWxlbWVudC5jbGFzc0xpc3RcbmlmICghKFwiY2xhc3NMaXN0XCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIl9cIikpXG5cdHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyAmJiAhKFwiY2xhc3NMaXN0XCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcImdcIikpKSB7XG5cbihmdW5jdGlvbiAodmlldykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaWYgKCEoJ0VsZW1lbnQnIGluIHZpZXcpKSByZXR1cm47XG5cbnZhclxuXHQgIGNsYXNzTGlzdFByb3AgPSBcImNsYXNzTGlzdFwiXG5cdCwgcHJvdG9Qcm9wID0gXCJwcm90b3R5cGVcIlxuXHQsIGVsZW1DdHJQcm90byA9IHZpZXcuRWxlbWVudFtwcm90b1Byb3BdXG5cdCwgb2JqQ3RyID0gT2JqZWN0XG5cdCwgc3RyVHJpbSA9IFN0cmluZ1twcm90b1Byb3BdLnRyaW0gfHwgZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnJlcGxhY2UoL15cXHMrfFxccyskL2csIFwiXCIpO1xuXHR9XG5cdCwgYXJySW5kZXhPZiA9IEFycmF5W3Byb3RvUHJvcF0uaW5kZXhPZiB8fCBmdW5jdGlvbiAoaXRlbSkge1xuXHRcdHZhclxuXHRcdFx0ICBpID0gMFxuXHRcdFx0LCBsZW4gPSB0aGlzLmxlbmd0aFxuXHRcdDtcblx0XHRmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHtcblx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAtMTtcblx0fVxuXHQvLyBWZW5kb3JzOiBwbGVhc2UgYWxsb3cgY29udGVudCBjb2RlIHRvIGluc3RhbnRpYXRlIERPTUV4Y2VwdGlvbnNcblx0LCBET01FeCA9IGZ1bmN0aW9uICh0eXBlLCBtZXNzYWdlKSB7XG5cdFx0dGhpcy5uYW1lID0gdHlwZTtcblx0XHR0aGlzLmNvZGUgPSBET01FeGNlcHRpb25bdHlwZV07XG5cdFx0dGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcblx0fVxuXHQsIGNoZWNrVG9rZW5BbmRHZXRJbmRleCA9IGZ1bmN0aW9uIChjbGFzc0xpc3QsIHRva2VuKSB7XG5cdFx0aWYgKHRva2VuID09PSBcIlwiKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXgoXG5cdFx0XHRcdCAgXCJTWU5UQVhfRVJSXCJcblx0XHRcdFx0LCBcIkFuIGludmFsaWQgb3IgaWxsZWdhbCBzdHJpbmcgd2FzIHNwZWNpZmllZFwiXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAoL1xccy8udGVzdCh0b2tlbikpIHtcblx0XHRcdHRocm93IG5ldyBET01FeChcblx0XHRcdFx0ICBcIklOVkFMSURfQ0hBUkFDVEVSX0VSUlwiXG5cdFx0XHRcdCwgXCJTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXJcIlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGFyckluZGV4T2YuY2FsbChjbGFzc0xpc3QsIHRva2VuKTtcblx0fVxuXHQsIENsYXNzTGlzdCA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0dmFyXG5cdFx0XHQgIHRyaW1tZWRDbGFzc2VzID0gc3RyVHJpbS5jYWxsKGVsZW0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgfHwgXCJcIilcblx0XHRcdCwgY2xhc3NlcyA9IHRyaW1tZWRDbGFzc2VzID8gdHJpbW1lZENsYXNzZXMuc3BsaXQoL1xccysvKSA6IFtdXG5cdFx0XHQsIGkgPSAwXG5cdFx0XHQsIGxlbiA9IGNsYXNzZXMubGVuZ3RoXG5cdFx0O1xuXHRcdGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdHRoaXMucHVzaChjbGFzc2VzW2ldKTtcblx0XHR9XG5cdFx0dGhpcy5fdXBkYXRlQ2xhc3NOYW1lID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLnRvU3RyaW5nKCkpO1xuXHRcdH07XG5cdH1cblx0LCBjbGFzc0xpc3RQcm90byA9IENsYXNzTGlzdFtwcm90b1Byb3BdID0gW11cblx0LCBjbGFzc0xpc3RHZXR0ZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIG5ldyBDbGFzc0xpc3QodGhpcyk7XG5cdH1cbjtcbi8vIE1vc3QgRE9NRXhjZXB0aW9uIGltcGxlbWVudGF0aW9ucyBkb24ndCBhbGxvdyBjYWxsaW5nIERPTUV4Y2VwdGlvbidzIHRvU3RyaW5nKClcbi8vIG9uIG5vbi1ET01FeGNlcHRpb25zLiBFcnJvcidzIHRvU3RyaW5nKCkgaXMgc3VmZmljaWVudCBoZXJlLlxuRE9NRXhbcHJvdG9Qcm9wXSA9IEVycm9yW3Byb3RvUHJvcF07XG5jbGFzc0xpc3RQcm90by5pdGVtID0gZnVuY3Rpb24gKGkpIHtcblx0cmV0dXJuIHRoaXNbaV0gfHwgbnVsbDtcbn07XG5jbGFzc0xpc3RQcm90by5jb250YWlucyA9IGZ1bmN0aW9uICh0b2tlbikge1xuXHR0b2tlbiArPSBcIlwiO1xuXHRyZXR1cm4gY2hlY2tUb2tlbkFuZEdldEluZGV4KHRoaXMsIHRva2VuKSAhPT0gLTE7XG59O1xuY2xhc3NMaXN0UHJvdG8uYWRkID0gZnVuY3Rpb24gKCkge1xuXHR2YXJcblx0XHQgIHRva2VucyA9IGFyZ3VtZW50c1xuXHRcdCwgaSA9IDBcblx0XHQsIGwgPSB0b2tlbnMubGVuZ3RoXG5cdFx0LCB0b2tlblxuXHRcdCwgdXBkYXRlZCA9IGZhbHNlXG5cdDtcblx0ZG8ge1xuXHRcdHRva2VuID0gdG9rZW5zW2ldICsgXCJcIjtcblx0XHRpZiAoY2hlY2tUb2tlbkFuZEdldEluZGV4KHRoaXMsIHRva2VuKSA9PT0gLTEpIHtcblx0XHRcdHRoaXMucHVzaCh0b2tlbik7XG5cdFx0XHR1cGRhdGVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0d2hpbGUgKCsraSA8IGwpO1xuXG5cdGlmICh1cGRhdGVkKSB7XG5cdFx0dGhpcy5fdXBkYXRlQ2xhc3NOYW1lKCk7XG5cdH1cbn07XG5jbGFzc0xpc3RQcm90by5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdHZhclxuXHRcdCAgdG9rZW5zID0gYXJndW1lbnRzXG5cdFx0LCBpID0gMFxuXHRcdCwgbCA9IHRva2Vucy5sZW5ndGhcblx0XHQsIHRva2VuXG5cdFx0LCB1cGRhdGVkID0gZmFsc2Vcblx0XHQsIGluZGV4XG5cdDtcblx0ZG8ge1xuXHRcdHRva2VuID0gdG9rZW5zW2ldICsgXCJcIjtcblx0XHRpbmRleCA9IGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbik7XG5cdFx0d2hpbGUgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0dGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0dXBkYXRlZCA9IHRydWU7XG5cdFx0XHRpbmRleCA9IGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbik7XG5cdFx0fVxuXHR9XG5cdHdoaWxlICgrK2kgPCBsKTtcblxuXHRpZiAodXBkYXRlZCkge1xuXHRcdHRoaXMuX3VwZGF0ZUNsYXNzTmFtZSgpO1xuXHR9XG59O1xuY2xhc3NMaXN0UHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gKHRva2VuLCBmb3JjZSkge1xuXHR0b2tlbiArPSBcIlwiO1xuXG5cdHZhclxuXHRcdCAgcmVzdWx0ID0gdGhpcy5jb250YWlucyh0b2tlbilcblx0XHQsIG1ldGhvZCA9IHJlc3VsdCA/XG5cdFx0XHRmb3JjZSAhPT0gdHJ1ZSAmJiBcInJlbW92ZVwiXG5cdFx0OlxuXHRcdFx0Zm9yY2UgIT09IGZhbHNlICYmIFwiYWRkXCJcblx0O1xuXG5cdGlmIChtZXRob2QpIHtcblx0XHR0aGlzW21ldGhvZF0odG9rZW4pO1xuXHR9XG5cblx0aWYgKGZvcmNlID09PSB0cnVlIHx8IGZvcmNlID09PSBmYWxzZSkge1xuXHRcdHJldHVybiBmb3JjZTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gIXJlc3VsdDtcblx0fVxufTtcbmNsYXNzTGlzdFByb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5qb2luKFwiIFwiKTtcbn07XG5cbmlmIChvYmpDdHIuZGVmaW5lUHJvcGVydHkpIHtcblx0dmFyIGNsYXNzTGlzdFByb3BEZXNjID0ge1xuXHRcdCAgZ2V0OiBjbGFzc0xpc3RHZXR0ZXJcblx0XHQsIGVudW1lcmFibGU6IHRydWVcblx0XHQsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHR9O1xuXHR0cnkge1xuXHRcdG9iakN0ci5kZWZpbmVQcm9wZXJ0eShlbGVtQ3RyUHJvdG8sIGNsYXNzTGlzdFByb3AsIGNsYXNzTGlzdFByb3BEZXNjKTtcblx0fSBjYXRjaCAoZXgpIHsgLy8gSUUgOCBkb2Vzbid0IHN1cHBvcnQgZW51bWVyYWJsZTp0cnVlXG5cdFx0aWYgKGV4Lm51bWJlciA9PT0gLTB4N0ZGNUVDNTQpIHtcblx0XHRcdGNsYXNzTGlzdFByb3BEZXNjLmVudW1lcmFibGUgPSBmYWxzZTtcblx0XHRcdG9iakN0ci5kZWZpbmVQcm9wZXJ0eShlbGVtQ3RyUHJvdG8sIGNsYXNzTGlzdFByb3AsIGNsYXNzTGlzdFByb3BEZXNjKTtcblx0XHR9XG5cdH1cbn0gZWxzZSBpZiAob2JqQ3RyW3Byb3RvUHJvcF0uX19kZWZpbmVHZXR0ZXJfXykge1xuXHRlbGVtQ3RyUHJvdG8uX19kZWZpbmVHZXR0ZXJfXyhjbGFzc0xpc3RQcm9wLCBjbGFzc0xpc3RHZXR0ZXIpO1xufVxuXG59KHNlbGYpKTtcblxufSBlbHNlIHtcbi8vIFRoZXJlIGlzIGZ1bGwgb3IgcGFydGlhbCBuYXRpdmUgY2xhc3NMaXN0IHN1cHBvcnQsIHNvIGp1c3QgY2hlY2sgaWYgd2UgbmVlZFxuLy8gdG8gbm9ybWFsaXplIHRoZSBhZGQvcmVtb3ZlIGFuZCB0b2dnbGUgQVBJcy5cblxuKGZ1bmN0aW9uICgpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0dmFyIHRlc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIl9cIik7XG5cblx0dGVzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImMxXCIsIFwiYzJcIik7XG5cblx0Ly8gUG9seWZpbGwgZm9yIElFIDEwLzExIGFuZCBGaXJlZm94IDwyNiwgd2hlcmUgY2xhc3NMaXN0LmFkZCBhbmRcblx0Ly8gY2xhc3NMaXN0LnJlbW92ZSBleGlzdCBidXQgc3VwcG9ydCBvbmx5IG9uZSBhcmd1bWVudCBhdCBhIHRpbWUuXG5cdGlmICghdGVzdEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYzJcIikpIHtcblx0XHR2YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24obWV0aG9kKSB7XG5cdFx0XHR2YXIgb3JpZ2luYWwgPSBET01Ub2tlbkxpc3QucHJvdG90eXBlW21ldGhvZF07XG5cblx0XHRcdERPTVRva2VuTGlzdC5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHRva2VuKSB7XG5cdFx0XHRcdHZhciBpLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRcdHRva2VuID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0XHRcdG9yaWdpbmFsLmNhbGwodGhpcywgdG9rZW4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0Y3JlYXRlTWV0aG9kKCdhZGQnKTtcblx0XHRjcmVhdGVNZXRob2QoJ3JlbW92ZScpO1xuXHR9XG5cblx0dGVzdEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImMzXCIsIGZhbHNlKTtcblxuXHQvLyBQb2x5ZmlsbCBmb3IgSUUgMTAgYW5kIEZpcmVmb3ggPDI0LCB3aGVyZSBjbGFzc0xpc3QudG9nZ2xlIGRvZXMgbm90XG5cdC8vIHN1cHBvcnQgdGhlIHNlY29uZCBhcmd1bWVudC5cblx0aWYgKHRlc3RFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImMzXCIpKSB7XG5cdFx0dmFyIF90b2dnbGUgPSBET01Ub2tlbkxpc3QucHJvdG90eXBlLnRvZ2dsZTtcblxuXHRcdERPTVRva2VuTGlzdC5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24odG9rZW4sIGZvcmNlKSB7XG5cdFx0XHRpZiAoMSBpbiBhcmd1bWVudHMgJiYgIXRoaXMuY29udGFpbnModG9rZW4pID09PSAhZm9yY2UpIHtcblx0XHRcdFx0cmV0dXJuIGZvcmNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIF90b2dnbGUuY2FsbCh0aGlzLCB0b2tlbik7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHR9XG5cblx0dGVzdEVsZW1lbnQgPSBudWxsO1xufSgpKTtcblxufVxuXG59XG5cbiJdfQ==

/***/ }
/******/ ]);
//# sourceMappingURL=script.js.map