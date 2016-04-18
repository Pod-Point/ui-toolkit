'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domDelegate = require('dom-delegate');

var _domOps = require('@pod-point/dom-ops');

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
x
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
