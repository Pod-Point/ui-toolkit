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

	__webpack_require__(1);
	__webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var utilities = __webpack_require__(2);
	
	var collapsibles = document.querySelectorAll('[data-toggle="collapse"]');
	
	for (var i = 0; i < collapsibles.length; i ++) {
	    collapsibles[i].onclick = doCollapse;
	}
	
	function doCollapse(event) {
	    event.preventDefault();
	
	    var trigger = event.srcElement;
	    var domContext = trigger.parentNode;
	
	    var target = trigger.getAttribute('data-target');
	    var element = domContext.querySelector(target);
	
	    if (element.classList.contains('in')) {
	        utilities.hide(element, trigger);
	    } else {
	        utilities.show(element, trigger);
	    }
	
	    return false;
	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	    getMaxHeight: function(element) {
	        var prevHeight = element.style.height;
	        element.style.height = 'auto';
	        var maxHeight = getComputedStyle(element).height;
	        element.style.height = prevHeight;
	        element.offsetHeight;
	        return maxHeight;
	    },
	
	    show: function(element, trigger) {
	        element.classList.remove('collapse');
	        element.classList.add('collapsing');
	        trigger.classList.remove('collapsed');
	        trigger.setAttribute('aria-expanded', true);
	
	        element.style.height = this.getMaxHeight(element);
	
	        this.complete(element);
	    },
	
	    hide: function(element, trigger) {
	        element.classList.remove('collapse');
	        element.classList.remove('in');
	        element.classList.add('collapsing');
	        trigger.classList.add('collapsed');
	        trigger.setAttribute('aria-expanded', false);
	
	        // Reset element's height
	        element.style.height = getComputedStyle(element).height;
	        element.offsetHeight; // force repaint
	        element.style.height = '0px';
	
	        this.complete(element);
	    },
	
	    complete: function(element) {
	        element.classList.remove('collapsing');
	        element.classList.add('collapse');
	        element.setAttribute('aria-expanded', false);
	
	        // Check whether the element is unhidden
	        if (element.style.height !== '0px') {
	            element.classList.add('in');
	            element.style.height = 'auto';
	        }
	    }
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	
	var dropdowns = document.querySelectorAll('[data-toggle="dropdown"]');
	
	for (var i = 0; i < dropdowns.length; i ++) {
	    var dropdown = dropdowns[i];
	    dropdown.onclick = doDropDown;
	    dropdown.onblur = closeDropDown;
	}
	
	function doDropDown(event) {
	    event.preventDefault();
	    event = event || window.event;
	    var evTarget = event.currentTarget || event.srcElement;
	    evTarget.parentElement.classList.toggle('open');
	    return false;
	}
	
	// Close a dropdown menu
	function closeDropDown(event) {
	    event = event || window.event;
	    var evTarget = event.currentTarget || event.srcElement;
	    evTarget.parentElement.classList.remove('open');
	
	    // Trigger the click event on the target if it not opening another menu
	    if (event.relatedTarget && event.relatedTarget.getAttribute('data-toggle') !== 'dropdown') {
	        event.relatedTarget.click();
	    }
	
	    return false;
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	if (typeof self !== 'undefined' && "document" in self) {
	
		// Full polyfill for browsers with no classList support
		if (!("classList" in document.createElement("_"))) {
	
			(function(view) {
	
				if (!('Element' in view)) return;
	
				var
					classListProp = "classList",
					protoProp = "prototype",
					elemCtrProto = view.Element[protoProp],
					objCtr = Object,
					strTrim = String[protoProp].trim || function() {
						return this.replace(/^\s+|\s+$/g, "");
					},
					arrIndexOf = Array[protoProp].indexOf || function(item) {
						var
							i = 0,
							len = this.length;
						for (; i < len; i++) {
							if (i in this && this[i] === item) {
								return i;
							}
						}
						return -1;
					},
					// Vendors: please allow content code to instantiate DOMExceptions
					DOMEx = function(type, message) {
						this.name = type;
						this.code = DOMException[type];
						this.message = message;
					},
					checkTokenAndGetIndex = function(classList, token) {
						if (token === "") {
							throw new DOMEx(
								"SYNTAX_ERR", "An invalid or illegal string was specified"
							);
						}
						if (/\s/.test(token)) {
							throw new DOMEx(
								"INVALID_CHARACTER_ERR", "String contains an invalid character"
							);
						}
						return arrIndexOf.call(classList, token);
					},
					ClassList = function(elem) {
						var
							trimmedClasses = strTrim.call(elem.getAttribute("class") || ""),
							classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [],
							i = 0,
							len = classes.length;
						for (; i < len; i++) {
							this.push(classes[i]);
						}
						this._updateClassName = function() {
							elem.setAttribute("class", this.toString());
						};
					},
					classListProto = ClassList[protoProp] = [],
					classListGetter = function() {
						return new ClassList(this);
					};
				// Most DOMException implementations don't allow calling DOMException's toString()
				// on non-DOMExceptions. Error's toString() is sufficient here.
				DOMEx[protoProp] = Error[protoProp];
				classListProto.item = function(i) {
					return this[i] || null;
				};
				classListProto.contains = function(token) {
					token += "";
					return checkTokenAndGetIndex(this, token) !== -1;
				};
				classListProto.add = function() {
					var
						tokens = arguments,
						i = 0,
						l = tokens.length,
						token, updated = false;
					do {
						token = tokens[i] + "";
						if (checkTokenAndGetIndex(this, token) === -1) {
							this.push(token);
							updated = true;
						}
					}
					while (++i < l);
	
					if (updated) {
						this._updateClassName();
					}
				};
				classListProto.remove = function() {
					var
						tokens = arguments,
						i = 0,
						l = tokens.length,
						token, updated = false,
						index;
					do {
						token = tokens[i] + "";
						index = checkTokenAndGetIndex(this, token);
						while (index !== -1) {
							this.splice(index, 1);
							updated = true;
							index = checkTokenAndGetIndex(this, token);
						}
					}
					while (++i < l);
	
					if (updated) {
						this._updateClassName();
					}
				};
				classListProto.toggle = function(token, force) {
					token += "";
	
					var
						result = this.contains(token),
						method = result ?
						force !== true && "remove" :
						force !== false && "add";
	
					if (method) {
						this[method](token);
					}
	
					if (force === true || force === false) {
						return force;
					} else {
						return !result;
					}
				};
				classListProto.toString = function() {
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
					} catch (ex) { // IE 8 doesn't support enumerable:true
						if (ex.number === -0x7FF5EC54) {
							classListPropDesc.enumerable = false;
							objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
						}
					}
				} else if (objCtr[protoProp].__defineGetter__) {
					elemCtrProto.__defineGetter__(classListProp, classListGetter);
				}
	
			}(self));
	
		} else {
			// There is full or partial native classList support, so just check if we need
			// to normalize the add/remove and toggle APIs.
	
			(function() {
				"use strict";
	
				var testElement = document.createElement("_");
	
				testElement.classList.add("c1", "c2");
	
				// Polyfill for IE 10/11 and Firefox <26, where classList.add and
				// classList.remove exist but support only one argument at a time.
				if (!testElement.classList.contains("c2")) {
					var createMethod = function(method) {
						var original = DOMTokenList.prototype[method];
	
						DOMTokenList.prototype[method] = function(token) {
							var i, len = arguments.length;
	
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
	
					DOMTokenList.prototype.toggle = function(token, force) {
						if (1 in arguments && !this.contains(token) === !force) {
							return force;
						} else {
							return _toggle.call(this, token);
						}
					};
				}
	
				testElement = null;
			}());
		}
	}


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzI4ZTY3MjFhMDMwMjk0MzVkNmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvX2NvbGxhcHNlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9fdXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9fZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcm9zcy1jbGFzcy1saXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7Ozs7Ozs7QUNEQTs7QUFFQTs7QUFFQSxnQkFBZSx5QkFBeUI7QUFDeEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMvQ0E7O0FBRUE7O0FBRUEsZ0JBQWUsc0JBQXNCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzlCQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSyxhQUFhO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTs7QUFFQSxJQUFHOztBQUVILEdBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRztBQUNIO0FBQ0EiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBjMjhlNjcyMWEwMzAyOTQzNWQ2YVxuICoqLyIsInJlcXVpcmUoJy4vX2NvbGxhcHNlJyk7XG5yZXF1aXJlKCcuL19kcm9wZG93bicpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9qcy9zY3JpcHQuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi9fdXRpbGl0aWVzJyk7XG5cbnZhciBjb2xsYXBzaWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXScpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IGNvbGxhcHNpYmxlcy5sZW5ndGg7IGkgKyspIHtcbiAgICBjb2xsYXBzaWJsZXNbaV0ub25jbGljayA9IGRvQ29sbGFwc2U7XG59XG5cbmZ1bmN0aW9uIGRvQ29sbGFwc2UoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdmFyIHRyaWdnZXIgPSBldmVudC5zcmNFbGVtZW50O1xuICAgIHZhciBkb21Db250ZXh0ID0gdHJpZ2dlci5wYXJlbnROb2RlO1xuXG4gICAgdmFyIHRhcmdldCA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xuICAgIHZhciBlbGVtZW50ID0gZG9tQ29udGV4dC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2luJykpIHtcbiAgICAgICAgdXRpbGl0aWVzLmhpZGUoZWxlbWVudCwgdHJpZ2dlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdXRpbGl0aWVzLnNob3coZWxlbWVudCwgdHJpZ2dlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9qcy9fY29sbGFwc2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBnZXRNYXhIZWlnaHQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHByZXZIZWlnaHQgPSBlbGVtZW50LnN0eWxlLmhlaWdodDtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICAgICAgIHZhciBtYXhIZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmhlaWdodDtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBwcmV2SGVpZ2h0O1xuICAgICAgICBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgcmV0dXJuIG1heEhlaWdodDtcbiAgICB9LFxuXG4gICAgc2hvdzogZnVuY3Rpb24oZWxlbWVudCwgdHJpZ2dlcikge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNlJyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2luZycpO1xuICAgICAgICB0cmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNlZCcpO1xuICAgICAgICB0cmlnZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5nZXRNYXhIZWlnaHQoZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5jb21wbGV0ZShlbGVtZW50KTtcbiAgICB9LFxuXG4gICAgaGlkZTogZnVuY3Rpb24oZWxlbWVudCwgdHJpZ2dlcikge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNlJyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaW4nKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzaW5nJyk7XG4gICAgICAgIHRyaWdnZXIuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2VkJyk7XG4gICAgICAgIHRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuXG4gICAgICAgIC8vIFJlc2V0IGVsZW1lbnQncyBoZWlnaHRcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmhlaWdodDtcbiAgICAgICAgZWxlbWVudC5vZmZzZXRIZWlnaHQ7IC8vIGZvcmNlIHJlcGFpbnRcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMHB4JztcblxuICAgICAgICB0aGlzLmNvbXBsZXRlKGVsZW1lbnQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNpbmcnKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcblxuICAgICAgICAvLyBDaGVjayB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIHVuaGlkZGVuXG4gICAgICAgIGlmIChlbGVtZW50LnN0eWxlLmhlaWdodCAhPT0gJzBweCcpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW4nKTtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvanMvX3V0aWxpdGllcy5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJ2Nyb3NzLWNsYXNzLWxpc3QnKTtcblxudmFyIGRyb3Bkb3ducyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJyk7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgZHJvcGRvd25zLmxlbmd0aDsgaSArKykge1xuICAgIHZhciBkcm9wZG93biA9IGRyb3Bkb3duc1tpXTtcbiAgICBkcm9wZG93bi5vbmNsaWNrID0gZG9Ecm9wRG93bjtcbiAgICBkcm9wZG93bi5vbmJsdXIgPSBjbG9zZURyb3BEb3duO1xufVxuXG5mdW5jdGlvbiBkb0Ryb3BEb3duKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudCA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcbiAgICB2YXIgZXZUYXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQ7XG4gICAgZXZUYXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBDbG9zZSBhIGRyb3Bkb3duIG1lbnVcbmZ1bmN0aW9uIGNsb3NlRHJvcERvd24oZXZlbnQpIHtcbiAgICBldmVudCA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcbiAgICB2YXIgZXZUYXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQ7XG4gICAgZXZUYXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG5cbiAgICAvLyBUcmlnZ2VyIHRoZSBjbGljayBldmVudCBvbiB0aGUgdGFyZ2V0IGlmIGl0IG5vdCBvcGVuaW5nIGFub3RoZXIgbWVudVxuICAgIGlmIChldmVudC5yZWxhdGVkVGFyZ2V0ICYmIGV2ZW50LnJlbGF0ZWRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScpICE9PSAnZHJvcGRvd24nKSB7XG4gICAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQuY2xpY2soKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2pzL19kcm9wZG93bi5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgXCJkb2N1bWVudFwiIGluIHNlbGYpIHtcblxuXHQvLyBGdWxsIHBvbHlmaWxsIGZvciBicm93c2VycyB3aXRoIG5vIGNsYXNzTGlzdCBzdXBwb3J0XG5cdGlmICghKFwiY2xhc3NMaXN0XCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIl9cIikpKSB7XG5cblx0XHQoZnVuY3Rpb24odmlldykge1xuXG5cdFx0XHRpZiAoISgnRWxlbWVudCcgaW4gdmlldykpIHJldHVybjtcblxuXHRcdFx0dmFyXG5cdFx0XHRcdGNsYXNzTGlzdFByb3AgPSBcImNsYXNzTGlzdFwiLFxuXHRcdFx0XHRwcm90b1Byb3AgPSBcInByb3RvdHlwZVwiLFxuXHRcdFx0XHRlbGVtQ3RyUHJvdG8gPSB2aWV3LkVsZW1lbnRbcHJvdG9Qcm9wXSxcblx0XHRcdFx0b2JqQ3RyID0gT2JqZWN0LFxuXHRcdFx0XHRzdHJUcmltID0gU3RyaW5nW3Byb3RvUHJvcF0udHJpbSB8fCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBcIlwiKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0YXJySW5kZXhPZiA9IEFycmF5W3Byb3RvUHJvcF0uaW5kZXhPZiB8fCBmdW5jdGlvbihpdGVtKSB7XG5cdFx0XHRcdFx0dmFyXG5cdFx0XHRcdFx0XHRpID0gMCxcblx0XHRcdFx0XHRcdGxlbiA9IHRoaXMubGVuZ3RoO1xuXHRcdFx0XHRcdGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0XHRcdGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQvLyBWZW5kb3JzOiBwbGVhc2UgYWxsb3cgY29udGVudCBjb2RlIHRvIGluc3RhbnRpYXRlIERPTUV4Y2VwdGlvbnNcblx0XHRcdFx0RE9NRXggPSBmdW5jdGlvbih0eXBlLCBtZXNzYWdlKSB7XG5cdFx0XHRcdFx0dGhpcy5uYW1lID0gdHlwZTtcblx0XHRcdFx0XHR0aGlzLmNvZGUgPSBET01FeGNlcHRpb25bdHlwZV07XG5cdFx0XHRcdFx0dGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0Y2hlY2tUb2tlbkFuZEdldEluZGV4ID0gZnVuY3Rpb24oY2xhc3NMaXN0LCB0b2tlbikge1xuXHRcdFx0XHRcdGlmICh0b2tlbiA9PT0gXCJcIikge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IERPTUV4KFxuXHRcdFx0XHRcdFx0XHRcIlNZTlRBWF9FUlJcIiwgXCJBbiBpbnZhbGlkIG9yIGlsbGVnYWwgc3RyaW5nIHdhcyBzcGVjaWZpZWRcIlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKC9cXHMvLnRlc3QodG9rZW4pKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRE9NRXgoXG5cdFx0XHRcdFx0XHRcdFwiSU5WQUxJRF9DSEFSQUNURVJfRVJSXCIsIFwiU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyXCJcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBhcnJJbmRleE9mLmNhbGwoY2xhc3NMaXN0LCB0b2tlbik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdENsYXNzTGlzdCA9IGZ1bmN0aW9uKGVsZW0pIHtcblx0XHRcdFx0XHR2YXJcblx0XHRcdFx0XHRcdHRyaW1tZWRDbGFzc2VzID0gc3RyVHJpbS5jYWxsKGVsZW0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgfHwgXCJcIiksXG5cdFx0XHRcdFx0XHRjbGFzc2VzID0gdHJpbW1lZENsYXNzZXMgPyB0cmltbWVkQ2xhc3Nlcy5zcGxpdCgvXFxzKy8pIDogW10sXG5cdFx0XHRcdFx0XHRpID0gMCxcblx0XHRcdFx0XHRcdGxlbiA9IGNsYXNzZXMubGVuZ3RoO1xuXHRcdFx0XHRcdGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0XHRcdHRoaXMucHVzaChjbGFzc2VzW2ldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5fdXBkYXRlQ2xhc3NOYW1lID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRlbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHRoaXMudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSxcblx0XHRcdFx0Y2xhc3NMaXN0UHJvdG8gPSBDbGFzc0xpc3RbcHJvdG9Qcm9wXSA9IFtdLFxuXHRcdFx0XHRjbGFzc0xpc3RHZXR0ZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gbmV3IENsYXNzTGlzdCh0aGlzKTtcblx0XHRcdFx0fTtcblx0XHRcdC8vIE1vc3QgRE9NRXhjZXB0aW9uIGltcGxlbWVudGF0aW9ucyBkb24ndCBhbGxvdyBjYWxsaW5nIERPTUV4Y2VwdGlvbidzIHRvU3RyaW5nKClcblx0XHRcdC8vIG9uIG5vbi1ET01FeGNlcHRpb25zLiBFcnJvcidzIHRvU3RyaW5nKCkgaXMgc3VmZmljaWVudCBoZXJlLlxuXHRcdFx0RE9NRXhbcHJvdG9Qcm9wXSA9IEVycm9yW3Byb3RvUHJvcF07XG5cdFx0XHRjbGFzc0xpc3RQcm90by5pdGVtID0gZnVuY3Rpb24oaSkge1xuXHRcdFx0XHRyZXR1cm4gdGhpc1tpXSB8fCBudWxsO1xuXHRcdFx0fTtcblx0XHRcdGNsYXNzTGlzdFByb3RvLmNvbnRhaW5zID0gZnVuY3Rpb24odG9rZW4pIHtcblx0XHRcdFx0dG9rZW4gKz0gXCJcIjtcblx0XHRcdFx0cmV0dXJuIGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbikgIT09IC0xO1xuXHRcdFx0fTtcblx0XHRcdGNsYXNzTGlzdFByb3RvLmFkZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXJcblx0XHRcdFx0XHR0b2tlbnMgPSBhcmd1bWVudHMsXG5cdFx0XHRcdFx0aSA9IDAsXG5cdFx0XHRcdFx0bCA9IHRva2Vucy5sZW5ndGgsXG5cdFx0XHRcdFx0dG9rZW4sIHVwZGF0ZWQgPSBmYWxzZTtcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdHRva2VuID0gdG9rZW5zW2ldICsgXCJcIjtcblx0XHRcdFx0XHRpZiAoY2hlY2tUb2tlbkFuZEdldEluZGV4KHRoaXMsIHRva2VuKSA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdHRoaXMucHVzaCh0b2tlbik7XG5cdFx0XHRcdFx0XHR1cGRhdGVkID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0d2hpbGUgKCsraSA8IGwpO1xuXG5cdFx0XHRcdGlmICh1cGRhdGVkKSB7XG5cdFx0XHRcdFx0dGhpcy5fdXBkYXRlQ2xhc3NOYW1lKCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRjbGFzc0xpc3RQcm90by5yZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyXG5cdFx0XHRcdFx0dG9rZW5zID0gYXJndW1lbnRzLFxuXHRcdFx0XHRcdGkgPSAwLFxuXHRcdFx0XHRcdGwgPSB0b2tlbnMubGVuZ3RoLFxuXHRcdFx0XHRcdHRva2VuLCB1cGRhdGVkID0gZmFsc2UsXG5cdFx0XHRcdFx0aW5kZXg7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHR0b2tlbiA9IHRva2Vuc1tpXSArIFwiXCI7XG5cdFx0XHRcdFx0aW5kZXggPSBjaGVja1Rva2VuQW5kR2V0SW5kZXgodGhpcywgdG9rZW4pO1xuXHRcdFx0XHRcdHdoaWxlIChpbmRleCAhPT0gLTEpIHtcblx0XHRcdFx0XHRcdHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0XHRcdHVwZGF0ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0aW5kZXggPSBjaGVja1Rva2VuQW5kR2V0SW5kZXgodGhpcywgdG9rZW4pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR3aGlsZSAoKytpIDwgbCk7XG5cblx0XHRcdFx0aWYgKHVwZGF0ZWQpIHtcblx0XHRcdFx0XHR0aGlzLl91cGRhdGVDbGFzc05hbWUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGNsYXNzTGlzdFByb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uKHRva2VuLCBmb3JjZSkge1xuXHRcdFx0XHR0b2tlbiArPSBcIlwiO1xuXG5cdFx0XHRcdHZhclxuXHRcdFx0XHRcdHJlc3VsdCA9IHRoaXMuY29udGFpbnModG9rZW4pLFxuXHRcdFx0XHRcdG1ldGhvZCA9IHJlc3VsdCA/XG5cdFx0XHRcdFx0Zm9yY2UgIT09IHRydWUgJiYgXCJyZW1vdmVcIiA6XG5cdFx0XHRcdFx0Zm9yY2UgIT09IGZhbHNlICYmIFwiYWRkXCI7XG5cblx0XHRcdFx0aWYgKG1ldGhvZCkge1xuXHRcdFx0XHRcdHRoaXNbbWV0aG9kXSh0b2tlbik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoZm9yY2UgPT09IHRydWUgfHwgZm9yY2UgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZvcmNlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiAhcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0Y2xhc3NMaXN0UHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuam9pbihcIiBcIik7XG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAob2JqQ3RyLmRlZmluZVByb3BlcnR5KSB7XG5cdFx0XHRcdHZhciBjbGFzc0xpc3RQcm9wRGVzYyA9IHtcblx0XHRcdFx0XHRnZXQ6IGNsYXNzTGlzdEdldHRlcixcblx0XHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHRcdFx0XHR9O1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdG9iakN0ci5kZWZpbmVQcm9wZXJ0eShlbGVtQ3RyUHJvdG8sIGNsYXNzTGlzdFByb3AsIGNsYXNzTGlzdFByb3BEZXNjKTtcblx0XHRcdFx0fSBjYXRjaCAoZXgpIHsgLy8gSUUgOCBkb2Vzbid0IHN1cHBvcnQgZW51bWVyYWJsZTp0cnVlXG5cdFx0XHRcdFx0aWYgKGV4Lm51bWJlciA9PT0gLTB4N0ZGNUVDNTQpIHtcblx0XHRcdFx0XHRcdGNsYXNzTGlzdFByb3BEZXNjLmVudW1lcmFibGUgPSBmYWxzZTtcblx0XHRcdFx0XHRcdG9iakN0ci5kZWZpbmVQcm9wZXJ0eShlbGVtQ3RyUHJvdG8sIGNsYXNzTGlzdFByb3AsIGNsYXNzTGlzdFByb3BEZXNjKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAob2JqQ3RyW3Byb3RvUHJvcF0uX19kZWZpbmVHZXR0ZXJfXykge1xuXHRcdFx0XHRlbGVtQ3RyUHJvdG8uX19kZWZpbmVHZXR0ZXJfXyhjbGFzc0xpc3RQcm9wLCBjbGFzc0xpc3RHZXR0ZXIpO1xuXHRcdFx0fVxuXG5cdFx0fShzZWxmKSk7XG5cblx0fSBlbHNlIHtcblx0XHQvLyBUaGVyZSBpcyBmdWxsIG9yIHBhcnRpYWwgbmF0aXZlIGNsYXNzTGlzdCBzdXBwb3J0LCBzbyBqdXN0IGNoZWNrIGlmIHdlIG5lZWRcblx0XHQvLyB0byBub3JtYWxpemUgdGhlIGFkZC9yZW1vdmUgYW5kIHRvZ2dsZSBBUElzLlxuXG5cdFx0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0XHRcdHZhciB0ZXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJfXCIpO1xuXG5cdFx0XHR0ZXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYzFcIiwgXCJjMlwiKTtcblxuXHRcdFx0Ly8gUG9seWZpbGwgZm9yIElFIDEwLzExIGFuZCBGaXJlZm94IDwyNiwgd2hlcmUgY2xhc3NMaXN0LmFkZCBhbmRcblx0XHRcdC8vIGNsYXNzTGlzdC5yZW1vdmUgZXhpc3QgYnV0IHN1cHBvcnQgb25seSBvbmUgYXJndW1lbnQgYXQgYSB0aW1lLlxuXHRcdFx0aWYgKCF0ZXN0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjMlwiKSkge1xuXHRcdFx0XHR2YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24obWV0aG9kKSB7XG5cdFx0XHRcdFx0dmFyIG9yaWdpbmFsID0gRE9NVG9rZW5MaXN0LnByb3RvdHlwZVttZXRob2RdO1xuXG5cdFx0XHRcdFx0RE9NVG9rZW5MaXN0LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odG9rZW4pIHtcblx0XHRcdFx0XHRcdHZhciBpLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuXG5cdFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0dG9rZW4gPSBhcmd1bWVudHNbaV07XG5cdFx0XHRcdFx0XHRcdG9yaWdpbmFsLmNhbGwodGhpcywgdG9rZW4pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH07XG5cdFx0XHRcdGNyZWF0ZU1ldGhvZCgnYWRkJyk7XG5cdFx0XHRcdGNyZWF0ZU1ldGhvZCgncmVtb3ZlJyk7XG5cdFx0XHR9XG5cblx0XHRcdHRlc3RFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjM1wiLCBmYWxzZSk7XG5cblx0XHRcdC8vIFBvbHlmaWxsIGZvciBJRSAxMCBhbmQgRmlyZWZveCA8MjQsIHdoZXJlIGNsYXNzTGlzdC50b2dnbGUgZG9lcyBub3Rcblx0XHRcdC8vIHN1cHBvcnQgdGhlIHNlY29uZCBhcmd1bWVudC5cblx0XHRcdGlmICh0ZXN0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjM1wiKSkge1xuXHRcdFx0XHR2YXIgX3RvZ2dsZSA9IERPTVRva2VuTGlzdC5wcm90b3R5cGUudG9nZ2xlO1xuXG5cdFx0XHRcdERPTVRva2VuTGlzdC5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24odG9rZW4sIGZvcmNlKSB7XG5cdFx0XHRcdFx0aWYgKDEgaW4gYXJndW1lbnRzICYmICF0aGlzLmNvbnRhaW5zKHRva2VuKSA9PT0gIWZvcmNlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZm9yY2U7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBfdG9nZ2xlLmNhbGwodGhpcywgdG9rZW4pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0dGVzdEVsZW1lbnQgPSBudWxsO1xuXHRcdH0oKSk7XG5cdH1cbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nyb3NzLWNsYXNzLWxpc3QvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9