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
        this.action = element.dataset.hasOwnProperty('action') ? element.dataset.action : 'click';

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

            this.listener.on(this.action, function (event, input) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9tb2R1bGVzL2NvbGxhcHNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFJLFlBQVksRUFBWjs7SUFFRTs7Ozs7Ozs7QUFPRixhQVBFLFFBT0YsQ0FBWSxPQUFaLEVBQXFCOzhCQVBuQixVQU9tQjs7QUFDakIsYUFBSyxPQUFMLEdBQWUsT0FBZixDQURpQjtBQUVqQixhQUFLLE1BQUwsR0FBYyxRQUFRLE9BQVIsQ0FBZ0IsY0FBaEIsQ0FBK0IsUUFBL0IsSUFBMkMsUUFBUSxPQUFSLENBQWdCLE1BQWhCLEdBQXlCLE9BQXBFLENBRkc7O0FBSWpCLGFBQUssVUFBTCxHQUppQjtLQUFyQjs7Ozs7OztpQkFQRTs7cUNBaUJXOzs7QUFDVCxpQkFBSyxRQUFMLEdBQWdCLDBCQUFhLEtBQUssT0FBTCxDQUE3QixDQURTOztBQUdULGlCQUFLLFFBQUwsQ0FBYyxFQUFkLENBQWlCLEtBQUssTUFBTCxFQUFhLFVBQUMsS0FBRCxFQUFRLEtBQVIsRUFBa0I7QUFDNUMsc0JBQUssVUFBTCxDQUFnQixLQUFoQixFQUF1QixLQUF2QixFQUQ0QzthQUFsQixDQUE5QixDQUhTOzs7Ozs7Ozs7dUNBV0U7QUFDWCxpQkFBSyxRQUFMLENBQWMsT0FBZCxHQURXOzs7Ozs7Ozs7OzttQ0FTSixPQUFPLFNBQVM7QUFDdkIsa0JBQU0sY0FBTixHQUR1Qjs7QUFHdkIsZ0JBQUksU0FBUyxRQUFRLE9BQVIsQ0FBZ0IsTUFBaEIsQ0FIVTtBQUl2QixnQkFBSSxVQUFVLHlCQUFZLE1BQVosRUFBb0IsUUFBUSxVQUFSLENBQTlCLENBSm1COztBQU12QixnQkFBSSxzQkFBUyxPQUFULEVBQWtCLElBQWxCLENBQUosRUFBNkI7QUFDekIscUNBQUssT0FBTCxFQUFjLE9BQWQsRUFEeUI7YUFBN0IsTUFFTztBQUNILHFDQUFLLE9BQUwsRUFBYyxPQUFkLEVBREc7YUFGUDs7OztXQTNDRjs7O2tCQW9EUztBQUNYLFVBQU0sY0FBUyxPQUFULEVBQWtCO0FBQ3BCLGtCQUFVLElBQVYsQ0FBZSxJQUFJLFFBQUosQ0FBYSxPQUFiLENBQWYsRUFEb0I7S0FBbEI7O0FBSU4sYUFBUyxtQkFBVztBQUNoQixrQkFBVSxPQUFWLENBQWtCLFVBQUMsUUFBRDttQkFBYyxTQUFTLFlBQVQ7U0FBZCxDQUFsQixDQURnQjtBQUVoQixvQkFBWSxFQUFaLENBRmdCO0tBQVgiLCJmaWxlIjoiY29sbGFwc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWxlZ2F0ZSB9IGZyb20gJ2RvbS1kZWxlZ2F0ZSc7XG5pbXBvcnQgeyBzZWxlY3RGaXJzdCwgaGFzQ2xhc3MgfSBmcm9tICdAcG9kLXBvaW50L2RvbS1vcHMnO1xuaW1wb3J0IHsgaGlkZSwgc2hvdyB9IGZyb20gJy4vdXRpbGl0aWVzJztcblxubGV0IGluc3RhbmNlcyA9IFtdO1xuXG5jbGFzcyBDb2xsYXBzZSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGNvbGxhcHNhYmxlIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBlbGVtZW50LmRhdGFzZXQuaGFzT3duUHJvcGVydHkoJ2FjdGlvbicpID8gZWxlbWVudC5kYXRhc2V0LmFjdGlvbiA6ICdjbGljayc7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZHMgY29sbGFwc2UgZXZlbnQuXG4gICAgICovXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IG5ldyBEZWxlZ2F0ZSh0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMubGlzdGVuZXIub24odGhpcy5hY3Rpb24sIChldmVudCwgaW5wdXQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZG9Db2xsYXBzZShldmVudCwgaW5wdXQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIHRoZSBldmVudCBsaXN0ZW5lcnMgZnJvbSB0aGUgZWxlbWVudHMuXG4gICAgICovXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb2xsYXBzZXMgdGhlIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdHJpZ2dlclxuICAgICAqL1xuICAgIGRvQ29sbGFwc2UoZXZlbnQsIHRyaWdnZXIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQgdGFyZ2V0ID0gdHJpZ2dlci5kYXRhc2V0LnRhcmdldDtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBzZWxlY3RGaXJzdCh0YXJnZXQsIHRyaWdnZXIucGFyZW50Tm9kZSk7XG5cbiAgICAgICAgaWYgKGhhc0NsYXNzKGVsZW1lbnQsICdpbicpKSB7XG4gICAgICAgICAgICBoaWRlKGVsZW1lbnQsIHRyaWdnZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvdyhlbGVtZW50LCB0cmlnZ2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBpbnN0YW5jZXMucHVzaChuZXcgQ29sbGFwc2UoZWxlbWVudCkpO1xuICAgIH0sXG5cbiAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiBpbnN0YW5jZS51bmJpbmRFdmVudHMoKSk7XG4gICAgICAgIGluc3RhbmNlcyA9IFtdO1xuICAgIH1cbn07XG4iXX0=