'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domDelegate = require('dom-delegate');

var _domOps = require('@pod-point/dom-ops');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instances = [];

var LOCAL_KEY = 'toggle-state-';
var HIDDEN = 'hidden';
var VISIBLE = 'visible';

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

        this.shouldHide = element.dataset.hide;
        this.shouldShow = element.dataset.hasOwnProperty('show') ? element.dataset.show : null;

        this.storageKey = null;

        if (element.getAttribute('data-persist')) {
            this.storageKey = LOCAL_KEY + element.getAttribute('id');

            this.initialVisibility = localStorage.getItem(this.storageKey);

            if (this.initialVisibility === HIDDEN) {
                this.hide((0, _domOps.selectFirst)(this.shouldHide));
            } else {
                this.show((0, _domOps.selectFirst)(this.shouldHide));
            }
        }

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
         * Toggles the elements.
         *
         * @param {Event} event
         */

    }, {
        key: 'doToggle',
        value: function doToggle(event) {
            event.preventDefault();

            var hideElement = (0, _domOps.selectFirst)(this.shouldHide);
            var showElement = this.shouldShow ? (0, _domOps.selectFirst)(this.shouldShow) : null;

            if (this.storageKey) {
                localStorage.setItem(this.storageKey, this.isVisible(hideElement) ? HIDDEN : VISIBLE);
            }

            if (this.isVisible(hideElement)) {
                this.hide(hideElement);

                if (this.shouldShow) {
                    this.show(showElement);
                }
            } else {
                this.show(hideElement);

                if (this.shouldShow) {
                    this.hide(showElement);
                }
            }
        }

        /**
         * Check if an element is hidden.
         *
         * @param element
         * @returns {boolean}
         */

    }, {
        key: 'isHidden',
        value: function isHidden(element) {
            return element.style.visibility === 'hidden';
        }

        /**
         * Check if an element is visible.
         *
         * @param element
         * @returns {boolean}
         */

    }, {
        key: 'isVisible',
        value: function isVisible(element) {
            return !this.isHidden(element);
        }

        /**
         * Display an element.
         *
         * @param element
         */

    }, {
        key: 'show',
        value: function show(element) {
            element.style.visibility = 'visible';
            element.style.height = 'auto';
            element.style.overflow = 'auto';
        }

        /**
         * Hide an element.
         *
         * @param element
         */

    }, {
        key: 'hide',
        value: function hide(element) {
            element.style.visibility = 'hidden';
            element.style.height = '0px';
            element.style.overflow = 'hidden';
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