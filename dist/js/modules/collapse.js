'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domDelegate = require('dom-delegate');

var _domOps = require('@pod-point/dom-ops');

var _utilities = require('./utilities');

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