'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domDelegate = require('dom-delegate');

var _domOps = require('@pod-point/dom-ops');

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