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
        this.overlay = (0, _domOps.selectFirst)('.modal__overlay');

        this.bindOpenEvent();
        this.bindCloseEvent();
    }

    /**
     * Binds open modal event.
     */


    _createClass(Modal, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9tb2R1bGVzL21vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFJLFlBQVksRUFBWjs7SUFFRTs7Ozs7Ozs7QUFPRixhQVBFLEtBT0YsQ0FBWSxPQUFaLEVBQXFCOzhCQVBuQixPQU9tQjs7QUFDakIsYUFBSyxVQUFMLEdBQWtCLE9BQWxCLENBRGlCO0FBRWpCLGFBQUssV0FBTCxHQUFtQix5QkFBWSxjQUFaLEVBQTRCLEtBQUssS0FBTCxDQUEvQyxDQUZpQjtBQUdqQixhQUFLLEtBQUwsR0FBYSx5QkFBWSxNQUFNLEtBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixLQUF4QixDQUEvQixDQUhpQjtBQUlqQixhQUFLLE9BQUwsR0FBZSx5QkFBWSxpQkFBWixDQUFmLENBSmlCOztBQU1qQixhQUFLLGFBQUwsR0FOaUI7QUFPakIsYUFBSyxjQUFMLEdBUGlCO0tBQXJCOzs7Ozs7O2lCQVBFOzt3Q0FvQmM7OztBQUNaLGlCQUFLLFlBQUwsR0FBb0IsMEJBQWEsS0FBSyxVQUFMLENBQWpDLENBRFk7O0FBR1osaUJBQUssWUFBTCxDQUFrQixFQUFsQixDQUFxQixPQUFyQixFQUE4QixVQUFDLEtBQUQsRUFBVztBQUNyQyxzQkFBSyxPQUFMLENBQWEsS0FBYixFQURxQzthQUFYLENBQTlCLENBSFk7Ozs7Ozs7Ozt5Q0FXQzs7O0FBQ2IsaUJBQUssYUFBTCxHQUFxQiwwQkFBYSxLQUFLLFdBQUwsQ0FBbEMsQ0FEYTs7QUFHYixpQkFBSyxhQUFMLENBQW1CLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFVBQUMsS0FBRCxFQUFXO0FBQ3RDLHVCQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsRUFEc0M7YUFBWCxDQUEvQixDQUhhOztBQU9iLGlCQUFLLGVBQUwsR0FBdUIsMEJBQWEsS0FBSyxPQUFMLENBQXBDLENBUGE7O0FBU2IsaUJBQUssZUFBTCxDQUFxQixFQUFyQixDQUF3QixPQUF4QixFQUFpQyxVQUFDLEtBQUQsRUFBVztBQUN4Qyx1QkFBSyxVQUFMLENBQWdCLEtBQWhCLEVBRHdDO2FBQVgsQ0FBakMsQ0FUYTs7Ozs7Ozs7O3VDQWlCRjtBQUNYLGlCQUFLLFlBQUwsQ0FBa0IsT0FBbEIsR0FEVztBQUVYLGlCQUFLLGFBQUwsQ0FBbUIsT0FBbkIsR0FGVztBQUdYLGlCQUFLLGVBQUwsQ0FBcUIsT0FBckIsR0FIVzs7Ozs7Ozs7OztnQ0FVUCxPQUFPO0FBQ1gsa0JBQU0sY0FBTixHQURXOztBQUdYLGdCQUFJLFdBQVcsQ0FDWCxLQUFLLE9BQUwsRUFDQSxLQUFLLEtBQUwsQ0FGQSxDQUhPOztBQVFYLGlCQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxTQUFTLE1BQVQsRUFBaUIsR0FBckMsRUFBMEM7QUFDdEMsb0JBQUksU0FBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixLQUE4QixNQUE5QixJQUF3QyxDQUFDLFNBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsRUFBMkI7QUFDcEUsNkJBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBNEIsT0FBNUIsQ0FEb0U7aUJBQXhFLE1BRU87QUFDSCw2QkFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUE0QixNQUE1QixDQURHO2lCQUZQO2FBREo7Ozs7Ozs7Ozs7bUNBYU8sT0FBTztBQUNkLGtCQUFNLGNBQU4sR0FEYzs7QUFHZCxnQkFBSSxXQUFXLENBQ1gsS0FBSyxPQUFMLEVBQ0EsS0FBSyxLQUFMLENBRkEsQ0FIVTs7QUFRZCxpQkFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksU0FBUyxNQUFULEVBQWlCLEdBQXJDLEVBQTBDO0FBQ3RDLHlCQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTRCLE1BQTVCLENBRHNDO2FBQTFDOzs7O1dBdkZGOzs7a0JBNkZTO0FBQ1gsVUFBTSxjQUFTLE9BQVQsRUFBa0I7QUFDcEIsa0JBQVUsSUFBVixDQUFlLElBQUksS0FBSixDQUFVLE9BQVYsQ0FBZixFQURvQjtLQUFsQjs7QUFJTixhQUFTLG1CQUFXO0FBQ2hCLGtCQUFVLE9BQVYsQ0FBa0IsVUFBQyxRQUFEO21CQUFjLFNBQVMsWUFBVDtTQUFkLENBQWxCLENBRGdCO0FBRWhCLG9CQUFZLEVBQVosQ0FGZ0I7S0FBWCIsImZpbGUiOiJtb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlbGVnYXRlIH0gZnJvbSAnZG9tLWRlbGVnYXRlJztcbmltcG9ydCB7IHNlbGVjdEZpcnN0IH0gZnJvbSAnQHBvZC1wb2ludC9kb20tb3BzJztcblxubGV0IGluc3RhbmNlcyA9IFtdO1xuXG5jbGFzcyBNb2RhbCB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IG1vZGFsLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMub3BlbkJ1dHRvbiA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24gPSBzZWxlY3RGaXJzdCgnLm1vZGFsLWNsb3NlJywgdGhpcy5tb2RhbCk7XG4gICAgICAgIHRoaXMubW9kYWwgPSBzZWxlY3RGaXJzdCgnIycgKyB0aGlzLm9wZW5CdXR0b24uZGF0YXNldC5tb2RhbCk7XG4gICAgICAgIHRoaXMub3ZlcmxheSA9IHNlbGVjdEZpcnN0KCcubW9kYWxfX292ZXJsYXknKTtcblxuICAgICAgICB0aGlzLmJpbmRPcGVuRXZlbnQoKTtcbiAgICAgICAgdGhpcy5iaW5kQ2xvc2VFdmVudCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIG9wZW4gbW9kYWwgZXZlbnQuXG4gICAgICovXG4gICAgYmluZE9wZW5FdmVudCgpIHtcbiAgICAgICAgdGhpcy5vcGVuTGlzdGVuZXIgPSBuZXcgRGVsZWdhdGUodGhpcy5vcGVuQnV0dG9uKTtcblxuICAgICAgICB0aGlzLm9wZW5MaXN0ZW5lci5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZG9Nb2RhbChldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhlIGNsb3NlIG1vZGFsIGV2ZW50IHRvIHRoZSBjbG9zZSBidXR0b24uXG4gICAgICovXG4gICAgYmluZENsb3NlRXZlbnQoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VMaXN0ZW5lciA9IG5ldyBEZWxlZ2F0ZSh0aGlzLmNsb3NlQnV0dG9uKTtcblxuICAgICAgICB0aGlzLmNsb3NlTGlzdGVuZXIub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoZXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm92ZXJsYXlMaXN0ZW5lciA9IG5ldyBEZWxlZ2F0ZSh0aGlzLm92ZXJsYXkpO1xuXG4gICAgICAgIHRoaXMub3ZlcmxheUxpc3RlbmVyLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKGV2ZW50KTtcbiAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIHRoZSBldmVudCBsaXN0ZW5lcnMgZnJvbSB0aGUgZWxlbWVudHMuXG4gICAgICovXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLm9wZW5MaXN0ZW5lci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuY2xvc2VMaXN0ZW5lci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMub3ZlcmxheUxpc3RlbmVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVucyB0aGUgbW9kYWxcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGRvTW9kYWwoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgZWxlbWVudHMgPSBbXG4gICAgICAgICAgICB0aGlzLm92ZXJsYXksXG4gICAgICAgICAgICB0aGlzLm1vZGFsXG4gICAgICAgIF07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnRzW2ldLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyB8fCAhZWxlbWVudHNbaV0uc3R5bGUuZGlzcGxheSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSBtb2RhbFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgY2xvc2VNb2RhbChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHZhciBlbGVtZW50cyA9IFtcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheSxcbiAgICAgICAgICAgIHRoaXMubW9kYWxcbiAgICAgICAgXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBlbGVtZW50c1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBpbnN0YW5jZXMucHVzaChuZXcgTW9kYWwoZWxlbWVudCkpO1xuICAgIH0sXG5cbiAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiBpbnN0YW5jZS51bmJpbmRFdmVudHMoKSk7XG4gICAgICAgIGluc3RhbmNlcyA9IFtdO1xuICAgIH1cbn07XG4iXX0=