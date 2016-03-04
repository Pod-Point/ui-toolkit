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
	__webpack_require__(5);
	__webpack_require__(6);


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


/***/ },
/* 5 */
/***/ function(module, exports) {

	var modals = document.querySelectorAll('[data-toggle="modal"]');
	var modalCloses = document.querySelectorAll('.modal-close');
	
	for (var i = 0; i < modals.length; i++) {
	    modals[i].onclick = doModal;
	}
	
	function doModal(event) {
	    event.preventDefault();
	
	    var elements = [
	        document.querySelector('.modal-overlay'),
	        document.querySelector('.modal')
	    ];
	
	    for (var i = 0; i < elements.length; i++) {
	        if (elements[i].style.display === 'none' || !elements[i].style.display) {
	            elements[i].style.display = 'block';
	        } else {
	            elements[i].style.display = 'none';
	        }
	    }
	}
	
	for (var i = 0; i < modalCloses.length; i ++) {
	    modalCloses[i].onclick = closeModal;
	}
	
	function closeModal(event) {
	    event.preventDefault();
	
	    var elements = [
	        document.querySelector('.modal-overlay'),
	        document.querySelector('.modal')
	    ];
	
	    for (var i = 0; i < elements.length; i++) {
	        elements[i].style.display = 'none';
	    }
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	var mpanInputs = document.querySelectorAll('.mpan input');
	
	for (var i = 0; i < mpanInputs.length; i++) {
	    mpanInputs[i].onkeyup = goToNextInput;
	}
	
	function goToNextInput(event) {
	    var target = event.srcElement;
	    var maxLength = parseInt(target.attributes.maxlength.value, 10);
	    var myLength = target.value.length;
	
	    if (myLength >= maxLength) {
	        var next = target.nextElementSibling;
	        while (next) {
	
	            if (next == null) {
	                break;
	            }
	
	            if (next.tagName.toLowerCase() == 'input') {
	                next.focus();
	                break;
	            }
	
	            next = next.nextElementSibling;
	        }
	    }
	}


/***/ }
/******/ ]);
//# sourceMappingURL=script.js.map