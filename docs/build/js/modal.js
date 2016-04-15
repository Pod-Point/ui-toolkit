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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9tb2R1bGVzL21vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFJLFlBQVksRUFBWjs7SUFFRTs7Ozs7Ozs7QUFPRixhQVBFLEtBT0YsQ0FBWSxPQUFaLEVBQXFCOzhCQVBuQixPQU9tQjs7QUFDakIsYUFBSyxVQUFMLEdBQWtCLE9BQWxCLENBRGlCO0FBRWpCLGFBQUssV0FBTCxHQUFtQix5QkFBWSxjQUFaLEVBQTRCLEtBQUssS0FBTCxDQUEvQyxDQUZpQjtBQUdqQixhQUFLLEtBQUwsR0FBYSx5QkFBWSxNQUFNLEtBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixLQUF4QixDQUEvQixDQUhpQjtBQUlqQixhQUFLLE9BQUwsR0FBZSxLQUFLLGVBQUwsRUFBZixDQUppQjs7QUFNakIsYUFBSyxhQUFMLEdBTmlCO0FBT2pCLGFBQUssY0FBTCxHQVBpQjtLQUFyQjs7Ozs7Ozs7O2lCQVBFOzswQ0FzQmdCO0FBQ2QsaUJBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsTUFBdEIsRUFBOEIsR0FBbEQsRUFBdUQ7QUFDbkQsb0JBQUksS0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixDQUF0QixFQUF5QixTQUF6QixJQUFzQyxnQkFBdEMsRUFBd0Q7QUFDeEQsMkJBQU8sS0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixDQUF0QixDQUFQLENBRHdEO2lCQUE1RDthQURKOztBQU1BLG1CQUFPLElBQVAsQ0FQYzs7Ozs7Ozs7O3dDQWFGOzs7QUFDWixpQkFBSyxZQUFMLEdBQW9CLDBCQUFhLEtBQUssVUFBTCxDQUFqQyxDQURZOztBQUdaLGlCQUFLLFlBQUwsQ0FBa0IsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsVUFBQyxLQUFELEVBQVc7QUFDckMsc0JBQUssT0FBTCxDQUFhLEtBQWIsRUFEcUM7YUFBWCxDQUE5QixDQUhZOzs7Ozs7Ozs7eUNBV0M7OztBQUNiLGlCQUFLLGFBQUwsR0FBcUIsMEJBQWEsS0FBSyxXQUFMLENBQWxDLENBRGE7O0FBR2IsaUJBQUssYUFBTCxDQUFtQixFQUFuQixDQUFzQixPQUF0QixFQUErQixVQUFDLEtBQUQsRUFBVztBQUN0Qyx1QkFBSyxVQUFMLENBQWdCLEtBQWhCLEVBRHNDO2FBQVgsQ0FBL0IsQ0FIYTs7QUFPYixpQkFBSyxlQUFMLEdBQXVCLDBCQUFhLEtBQUssT0FBTCxDQUFwQyxDQVBhOztBQVNiLGlCQUFLLGVBQUwsQ0FBcUIsRUFBckIsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQyxLQUFELEVBQVc7QUFDeEMsdUJBQUssVUFBTCxDQUFnQixLQUFoQixFQUR3QzthQUFYLENBQWpDLENBVGE7Ozs7Ozs7Ozt1Q0FpQkY7QUFDWCxpQkFBSyxZQUFMLENBQWtCLE9BQWxCLEdBRFc7QUFFWCxpQkFBSyxhQUFMLENBQW1CLE9BQW5CLEdBRlc7QUFHWCxpQkFBSyxlQUFMLENBQXFCLE9BQXJCLEdBSFc7Ozs7Ozs7Ozs7Z0NBVVAsT0FBTztBQUNYLGtCQUFNLGNBQU4sR0FEVzs7QUFHWCxnQkFBSSxXQUFXLENBQ1gsS0FBSyxPQUFMLEVBQ0EsS0FBSyxLQUFMLENBRkEsQ0FITzs7QUFRWCxpQkFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksU0FBUyxNQUFULEVBQWlCLEdBQXJDLEVBQTBDO0FBQ3RDLG9CQUFJLFNBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsS0FBOEIsTUFBOUIsSUFBd0MsQ0FBQyxTQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEVBQTJCO0FBQ3BFLDZCQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTRCLE9BQTVCLENBRG9FO2lCQUF4RSxNQUVPO0FBQ0gsNkJBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBNEIsTUFBNUIsQ0FERztpQkFGUDthQURKOzs7Ozs7Ozs7O21DQWFPLE9BQU87QUFDZCxrQkFBTSxjQUFOLEdBRGM7O0FBR2QsZ0JBQUksV0FBVyxDQUNYLEtBQUssT0FBTCxFQUNBLEtBQUssS0FBTCxDQUZBLENBSFU7O0FBUWQsaUJBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLFNBQVMsTUFBVCxFQUFpQixHQUFyQyxFQUEwQztBQUN0Qyx5QkFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUE0QixNQUE1QixDQURzQzthQUExQzs7OztXQXRHRjs7O2tCQTRHUztBQUNYLFVBQU0sY0FBUyxPQUFULEVBQWtCO0FBQ3BCLGtCQUFVLElBQVYsQ0FBZSxJQUFJLEtBQUosQ0FBVSxPQUFWLENBQWYsRUFEb0I7S0FBbEI7O0FBSU4sYUFBUyxtQkFBVztBQUNoQixrQkFBVSxPQUFWLENBQWtCLFVBQUMsUUFBRDttQkFBYyxTQUFTLFlBQVQ7U0FBZCxDQUFsQixDQURnQjtBQUVoQixvQkFBWSxFQUFaLENBRmdCO0tBQVgiLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWxlZ2F0ZSB9IGZyb20gJ2RvbS1kZWxlZ2F0ZSc7XG5pbXBvcnQgeyBzZWxlY3RGaXJzdCB9IGZyb20gJ0Bwb2QtcG9pbnQvZG9tLW9wcyc7XG5cbmxldCBpbnN0YW5jZXMgPSBbXTtcblxuY2xhc3MgTW9kYWwge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBtb2RhbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLm9wZW5CdXR0b24gPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uID0gc2VsZWN0Rmlyc3QoJy5tb2RhbC1jbG9zZScsIHRoaXMubW9kYWwpO1xuICAgICAgICB0aGlzLm1vZGFsID0gc2VsZWN0Rmlyc3QoJyMnICsgdGhpcy5vcGVuQnV0dG9uLmRhdGFzZXQubW9kYWwpO1xuICAgICAgICB0aGlzLm92ZXJsYXkgPSB0aGlzLmdldE1vZGFsT3ZlcmxheSgpO1xuXG4gICAgICAgIHRoaXMuYmluZE9wZW5FdmVudCgpO1xuICAgICAgICB0aGlzLmJpbmRDbG9zZUV2ZW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtb2RhbCdzIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXRNb2RhbE92ZXJsYXkoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tb2RhbC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tb2RhbC5jaGlsZE5vZGVzW2ldLmNsYXNzTmFtZSA9PSAnbW9kYWxfX292ZXJsYXknKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kYWwuY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIG9wZW4gbW9kYWwgZXZlbnQuXG4gICAgICovXG4gICAgYmluZE9wZW5FdmVudCgpIHtcbiAgICAgICAgdGhpcy5vcGVuTGlzdGVuZXIgPSBuZXcgRGVsZWdhdGUodGhpcy5vcGVuQnV0dG9uKTtcblxuICAgICAgICB0aGlzLm9wZW5MaXN0ZW5lci5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZG9Nb2RhbChldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhlIGNsb3NlIG1vZGFsIGV2ZW50IHRvIHRoZSBjbG9zZSBidXR0b24uXG4gICAgICovXG4gICAgYmluZENsb3NlRXZlbnQoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VMaXN0ZW5lciA9IG5ldyBEZWxlZ2F0ZSh0aGlzLmNsb3NlQnV0dG9uKTtcblxuICAgICAgICB0aGlzLmNsb3NlTGlzdGVuZXIub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoZXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm92ZXJsYXlMaXN0ZW5lciA9IG5ldyBEZWxlZ2F0ZSh0aGlzLm92ZXJsYXkpO1xuXG4gICAgICAgIHRoaXMub3ZlcmxheUxpc3RlbmVyLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKGV2ZW50KTtcbiAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIHRoZSBldmVudCBsaXN0ZW5lcnMgZnJvbSB0aGUgZWxlbWVudHMuXG4gICAgICovXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLm9wZW5MaXN0ZW5lci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuY2xvc2VMaXN0ZW5lci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMub3ZlcmxheUxpc3RlbmVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVucyB0aGUgbW9kYWxcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGRvTW9kYWwoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgZWxlbWVudHMgPSBbXG4gICAgICAgICAgICB0aGlzLm92ZXJsYXksXG4gICAgICAgICAgICB0aGlzLm1vZGFsXG4gICAgICAgIF07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnRzW2ldLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyB8fCAhZWxlbWVudHNbaV0uc3R5bGUuZGlzcGxheSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSBtb2RhbFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgY2xvc2VNb2RhbChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHZhciBlbGVtZW50cyA9IFtcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheSxcbiAgICAgICAgICAgIHRoaXMubW9kYWxcbiAgICAgICAgXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBlbGVtZW50c1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBpbnN0YW5jZXMucHVzaChuZXcgTW9kYWwoZWxlbWVudCkpO1xuICAgIH0sXG5cbiAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiBpbnN0YW5jZS51bmJpbmRFdmVudHMoKSk7XG4gICAgICAgIGluc3RhbmNlcyA9IFtdO1xuICAgIH1cbn07XG4iXX0=