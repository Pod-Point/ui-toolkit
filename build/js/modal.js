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
        this.overlay = (0, _domOps.selectFirst)('.modal-overlay');

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

            this.listener = new _domDelegate.Delegate(this.openButton);

            this.listener.on('click', function (event) {
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
        }

        /**
         * Unbinds the event listeners from the elements.
         */

    }, {
        key: 'unbindEvents',
        value: function unbindEvents() {
            this.listener.destroy();
            this.closeListener.destroy();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9tb2R1bGVzL21vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBSSxZQUFZLEVBQVo7O0lBRUU7Ozs7Ozs7O0FBT0YsYUFQRSxLQU9GLENBQVksT0FBWixFQUFxQjs4QkFQbkIsT0FPbUI7O0FBQ2pCLGFBQUssVUFBTCxHQUFrQixPQUFsQixDQURpQjtBQUVqQixhQUFLLFdBQUwsR0FBbUIseUJBQVksY0FBWixFQUE0QixLQUFLLEtBQUwsQ0FBL0MsQ0FGaUI7QUFHakIsYUFBSyxLQUFMLEdBQWEseUJBQVksTUFBTSxLQUFLLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBd0IsS0FBeEIsQ0FBL0IsQ0FIaUI7QUFJakIsYUFBSyxPQUFMLEdBQWUseUJBQVksZ0JBQVosQ0FBZixDQUppQjs7QUFNakIsYUFBSyxhQUFMLEdBTmlCO0FBT2pCLGFBQUssY0FBTCxHQVBpQjtLQUFyQjs7Ozs7OztpQkFQRTs7d0NBb0JjOzs7QUFDWixpQkFBSyxRQUFMLEdBQWdCLDBCQUFhLEtBQUssVUFBTCxDQUE3QixDQURZOztBQUdaLGlCQUFLLFFBQUwsQ0FBYyxFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFVBQUMsS0FBRCxFQUFXO0FBQ2pDLHNCQUFLLE9BQUwsQ0FBYSxLQUFiLEVBRGlDO2FBQVgsQ0FBMUIsQ0FIWTs7Ozs7Ozs7O3lDQVdDOzs7QUFDYixpQkFBSyxhQUFMLEdBQXFCLDBCQUFhLEtBQUssV0FBTCxDQUFsQyxDQURhOztBQUdiLGlCQUFLLGFBQUwsQ0FBbUIsRUFBbkIsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBQyxLQUFELEVBQVc7QUFDdEMsdUJBQUssVUFBTCxDQUFnQixLQUFoQixFQURzQzthQUFYLENBQS9CLENBSGE7Ozs7Ozs7Ozt1Q0FXRjtBQUNYLGlCQUFLLFFBQUwsQ0FBYyxPQUFkLEdBRFc7QUFFWCxpQkFBSyxhQUFMLENBQW1CLE9BQW5CLEdBRlc7Ozs7Ozs7Ozs7Z0NBU1AsT0FBTztBQUNYLGtCQUFNLGNBQU4sR0FEVzs7QUFHWCxnQkFBSSxXQUFXLENBQ1gsS0FBSyxPQUFMLEVBQ0EsS0FBSyxLQUFMLENBRkEsQ0FITzs7QUFRWCxpQkFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksU0FBUyxNQUFULEVBQWlCLEdBQXJDLEVBQTBDO0FBQ3RDLG9CQUFJLFNBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsS0FBOEIsTUFBOUIsSUFBd0MsQ0FBQyxTQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEVBQTJCO0FBQ3BFLDZCQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTRCLE9BQTVCLENBRG9FO2lCQUF4RSxNQUVPO0FBQ0gsNkJBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBNEIsTUFBNUIsQ0FERztpQkFGUDthQURKOzs7Ozs7Ozs7O21DQWFPLE9BQU87QUFDZCxrQkFBTSxjQUFOLEdBRGM7O0FBR2QsZ0JBQUksV0FBVyxDQUNYLEtBQUssT0FBTCxFQUNBLEtBQUssS0FBTCxDQUZBLENBSFU7O0FBUWQsaUJBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLFNBQVMsTUFBVCxFQUFpQixHQUFyQyxFQUEwQztBQUN0Qyx5QkFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUE0QixNQUE1QixDQURzQzthQUExQzs7OztXQWhGRjs7O2tCQXNGUztBQUNYLFVBQU0sY0FBUyxPQUFULEVBQWtCO0FBQ3BCLGtCQUFVLElBQVYsQ0FBZSxJQUFJLEtBQUosQ0FBVSxPQUFWLENBQWYsRUFEb0I7S0FBbEI7O0FBSU4sYUFBUyxtQkFBVztBQUNoQixrQkFBVSxPQUFWLENBQWtCLFVBQUMsUUFBRDttQkFBYyxTQUFTLFlBQVQ7U0FBZCxDQUFsQixDQURnQjtBQUVoQixvQkFBWSxFQUFaLENBRmdCO0tBQVgiLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWxlZ2F0ZSB9IGZyb20gJ2RvbS1kZWxlZ2F0ZSc7XG5pbXBvcnQgeyBzZWxlY3RGaXJzdCB9IGZyb20gJ0Bwb2QtcG9pbnQvZG9tLW9wcyc7XG5cbmxldCBpbnN0YW5jZXMgPSBbXTtcblxuY2xhc3MgTW9kYWwge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBtb2RhbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLm9wZW5CdXR0b24gPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uID0gc2VsZWN0Rmlyc3QoJy5tb2RhbC1jbG9zZScsIHRoaXMubW9kYWwpO1xuICAgICAgICB0aGlzLm1vZGFsID0gc2VsZWN0Rmlyc3QoJyMnICsgdGhpcy5vcGVuQnV0dG9uLmRhdGFzZXQubW9kYWwpO1xuICAgICAgICB0aGlzLm92ZXJsYXkgPSBzZWxlY3RGaXJzdCgnLm1vZGFsLW92ZXJsYXknKTtcblxuICAgICAgICB0aGlzLmJpbmRPcGVuRXZlbnQoKTtcbiAgICAgICAgdGhpcy5iaW5kQ2xvc2VFdmVudCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIG9wZW4gbW9kYWwgZXZlbnQuXG4gICAgICovXG4gICAgYmluZE9wZW5FdmVudCgpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IG5ldyBEZWxlZ2F0ZSh0aGlzLm9wZW5CdXR0b24pO1xuXG4gICAgICAgIHRoaXMubGlzdGVuZXIub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRvTW9kYWwoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIHRoZSBjbG9zZSBtb2RhbCBldmVudCB0byB0aGUgY2xvc2UgYnV0dG9uLlxuICAgICAqL1xuICAgIGJpbmRDbG9zZUV2ZW50KCkge1xuICAgICAgICB0aGlzLmNsb3NlTGlzdGVuZXIgPSBuZXcgRGVsZWdhdGUodGhpcy5jbG9zZUJ1dHRvbik7XG5cbiAgICAgICAgdGhpcy5jbG9zZUxpc3RlbmVyLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5iaW5kcyB0aGUgZXZlbnQgbGlzdGVuZXJzIGZyb20gdGhlIGVsZW1lbnRzLlxuICAgICAqL1xuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuY2xvc2VMaXN0ZW5lci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgdGhlIG1vZGFsXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBkb01vZGFsKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyIGVsZW1lbnRzID0gW1xuICAgICAgICAgICAgdGhpcy5vdmVybGF5LFxuICAgICAgICAgICAgdGhpcy5tb2RhbFxuICAgICAgICBdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50c1tpXS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgfHwgIWVsZW1lbnRzW2ldLnN0eWxlLmRpc3BsYXkpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGUgbW9kYWxcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGNsb3NlTW9kYWwoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgZWxlbWVudHMgPSBbXG4gICAgICAgICAgICB0aGlzLm92ZXJsYXksXG4gICAgICAgICAgICB0aGlzLm1vZGFsXG4gICAgICAgIF07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZWxlbWVudHNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgaW5zdGFuY2VzLnB1c2gobmV3IE1vZGFsKGVsZW1lbnQpKTtcbiAgICB9LFxuXG4gICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4gaW5zdGFuY2UudW5iaW5kRXZlbnRzKCkpO1xuICAgICAgICBpbnN0YW5jZXMgPSBbXTtcbiAgICB9XG59O1xuIl19