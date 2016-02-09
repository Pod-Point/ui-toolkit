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
/***/ function(module, exports) {

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


/***/ }
/******/ ]);