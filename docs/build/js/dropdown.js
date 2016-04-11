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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9tb2R1bGVzL2Ryb3Bkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBSSxZQUFZLEVBQVo7O0lBRUU7Ozs7Ozs7O0FBT0YsYUFQRSxRQU9GLENBQVksT0FBWixFQUFxQjs4QkFQbkIsVUFPbUI7O0FBQ2pCLGFBQUssT0FBTCxHQUFlLE9BQWYsQ0FEaUI7O0FBR2pCLGFBQUssVUFBTCxHQUhpQjtLQUFyQjs7Ozs7OztpQkFQRTs7cUNBZ0JXOzs7QUFDVCxpQkFBSyxRQUFMLEdBQWdCLDBCQUFhLEtBQUssT0FBTCxDQUE3QixDQURTOztBQUdULGlCQUFLLFFBQUwsQ0FBYyxFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFVBQUMsS0FBRCxFQUFRLEtBQVIsRUFBa0I7QUFDeEMsc0JBQUssVUFBTCxDQUFnQixLQUFoQixFQUF1QixLQUF2QixFQUR3QzthQUFsQixDQUExQixDQUhTOztBQU9ULGlCQUFLLFFBQUwsQ0FBYyxFQUFkLENBQWlCLE1BQWpCLEVBQXlCLFVBQUMsS0FBRCxFQUFRLEtBQVIsRUFBa0I7QUFDdkMsc0JBQUssYUFBTCxDQUFtQixLQUFuQixFQUEwQixLQUExQixFQUR1QzthQUFsQixDQUF6QixDQVBTOzs7Ozs7Ozs7dUNBZUU7QUFDWCxpQkFBSyxRQUFMLENBQWMsT0FBZCxHQURXOzs7Ozs7Ozs7OzttQ0FTSixPQUFPLE9BQU87QUFDckIsa0JBQU0sY0FBTixHQURxQjtBQUVyQixrQkFBTSxhQUFOLENBQW9CLFNBQXBCLENBQThCLE1BQTlCLENBQXFDLE1BQXJDLEVBRnFCOzs7Ozs7Ozs7OztzQ0FVWCxPQUFPLE9BQU87QUFDeEIscUNBQVksTUFBTSxhQUFOLEVBQXFCLE1BQWpDOzs7QUFEd0IsZ0JBSXBCLE1BQU0sYUFBTixJQUF1QixNQUFNLGFBQU4sQ0FBb0IsWUFBcEIsQ0FBaUMsZ0JBQWpDLE1BQXVELFVBQXZELEVBQW1FO0FBQzFGLHNCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsR0FEMEY7YUFBOUY7Ozs7V0F0REY7OztrQkE2RFM7QUFDWCxVQUFNLGNBQVMsT0FBVCxFQUFrQjtBQUNwQixrQkFBVSxJQUFWLENBQWUsSUFBSSxRQUFKLENBQWEsT0FBYixDQUFmLEVBRG9CO0tBQWxCOztBQUlOLGFBQVMsbUJBQVc7QUFDaEIsa0JBQVUsT0FBVixDQUFrQixVQUFDLFFBQUQ7bUJBQWMsU0FBUyxZQUFUO1NBQWQsQ0FBbEIsQ0FEZ0I7QUFFaEIsb0JBQVksRUFBWixDQUZnQjtLQUFYIiwiZmlsZSI6ImRyb3Bkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVsZWdhdGUgfSBmcm9tICdkb20tZGVsZWdhdGUnO1xuaW1wb3J0IHsgcmVtb3ZlQ2xhc3MgfSBmcm9tICdAcG9kLXBvaW50L2RvbS1vcHMnO1xuXG5sZXQgaW5zdGFuY2VzID0gW107XG5cbmNsYXNzIERyb3BEb3duIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgZHJvcGRvd24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBkcm9wZG93biBldmVudC5cbiAgICAgKi9cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gbmV3IERlbGVnYXRlKHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5lci5vbignY2xpY2snLCAoZXZlbnQsIGlucHV0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRvRHJvcERvd24oZXZlbnQsIGlucHV0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5lci5vbignYmx1cicsIChldmVudCwgaW5wdXQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VEcm9wRG93bihldmVudCwgaW5wdXQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIHRoZSBldmVudCBsaXN0ZW5lcnMgZnJvbSB0aGUgZWxlbWVudHMuXG4gICAgICovXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcm9wcyBkb3duXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGlucHV0XG4gICAgICovXG4gICAgZG9Ecm9wRG93bihldmVudCwgaW5wdXQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSBkcm9wZG93blxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBpbnB1dFxuICAgICAqL1xuICAgIGNsb3NlRHJvcERvd24oZXZlbnQsIGlucHV0KSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKGlucHV0LnBhcmVudEVsZW1lbnQsICdvcGVuJyk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgY2xpY2sgZXZlbnQgb24gdGhlIHRhcmdldCBpZiBpdCBub3Qgb3BlbmluZyBhbm90aGVyIG1lbnVcbiAgICAgICAgaWYgKGV2ZW50LnJlbGF0ZWRUYXJnZXQgJiYgZXZlbnQucmVsYXRlZFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtbW9kdWxlJykgIT09ICdkcm9wZG93bicpIHtcbiAgICAgICAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQuY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBpbnN0YW5jZXMucHVzaChuZXcgRHJvcERvd24oZWxlbWVudCkpO1xuICAgIH0sXG5cbiAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiBpbnN0YW5jZS51bmJpbmRFdmVudHMoKSk7XG4gICAgICAgIGluc3RhbmNlcyA9IFtdO1xuICAgIH1cbn07XG4iXX0=