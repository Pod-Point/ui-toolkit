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

        this.hide = element.dataset.hide;
        this.show = element.dataset.hasOwnProperty('show') ? element.dataset.show : null;

        this.storageKey = null;

        if (element.getAttribute('data-persist')) {
            this.storageKey = LOCAL_KEY + element.getAttribute('id');
        }

        this.initialVisibility = localStorage.getItem(this.storageKey);

        if (this.initialVisibility !== HIDDEN) {
            (0, _domOps.selectFirst)(this.hide).style.visibility = VISIBLE;
        } else {
            (0, _domOps.selectFirst)(this.hide).style.visibility = HIDDEN;
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
         * Toggles the elements
         * @param {Event} event
         * @param {Element} trigger
         */

    }, {
        key: 'doToggle',
        value: function doToggle(event) {
            event.preventDefault();

            var visibility = HIDDEN;
            var hideElement = (0, _domOps.selectFirst)(this.hide);
            var showElement = this.show ? (0, _domOps.selectFirst)(this.show) : null;

            if (hideElement.style.display !== 'none' || hideElement.style.display === '') {
                hideElement.style.display = 'none';

                if (this.show) {
                    showElement.style.display = 'block';
                }
            } else {
                visibility = VISIBLE;

                hideElement.style.display = 'block';

                if (this.show) {
                    showElement.style.display = 'none';
                }
            }

            if (this.storageKey) {
                localStorage.setItem(this.storageKey, visibility);
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