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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9tb2R1bGVzL2NvbGxhcHNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFJLFlBQVksRUFBWjs7SUFFRTs7Ozs7Ozs7QUFPRixhQVBFLFFBT0YsQ0FBWSxPQUFaLEVBQXFCOzhCQVBuQixVQU9tQjs7QUFDakIsYUFBSyxPQUFMLEdBQWUsT0FBZixDQURpQjs7QUFHakIsYUFBSyxVQUFMLEdBSGlCO0tBQXJCOzs7Ozs7O2lCQVBFOztxQ0FnQlc7OztBQUNULGlCQUFLLFFBQUwsR0FBZ0IsMEJBQWEsS0FBSyxPQUFMLENBQTdCLENBRFM7O0FBR1QsaUJBQUssUUFBTCxDQUFjLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEIsVUFBQyxLQUFELEVBQVEsS0FBUixFQUFrQjtBQUN4QyxzQkFBSyxVQUFMLENBQWdCLEtBQWhCLEVBQXVCLEtBQXZCLEVBRHdDO2FBQWxCLENBQTFCLENBSFM7Ozs7Ozs7Ozt1Q0FXRTtBQUNYLGlCQUFLLFFBQUwsQ0FBYyxPQUFkLEdBRFc7Ozs7Ozs7Ozs7O21DQVNKLE9BQU8sU0FBUztBQUN2QixrQkFBTSxjQUFOLEdBRHVCOztBQUd2QixnQkFBSSxTQUFTLFFBQVEsT0FBUixDQUFnQixNQUFoQixDQUhVO0FBSXZCLGdCQUFJLFVBQVUseUJBQVksTUFBWixFQUFvQixRQUFRLFVBQVIsQ0FBOUIsQ0FKbUI7O0FBTXZCLGdCQUFJLHNCQUFTLE9BQVQsRUFBa0IsSUFBbEIsQ0FBSixFQUE2QjtBQUN6QixxQ0FBSyxPQUFMLEVBQWMsT0FBZCxFQUR5QjthQUE3QixNQUVPO0FBQ0gscUNBQUssT0FBTCxFQUFjLE9BQWQsRUFERzthQUZQOzs7O1dBMUNGOzs7a0JBbURTO0FBQ1gsVUFBTSxjQUFTLE9BQVQsRUFBa0I7QUFDcEIsa0JBQVUsSUFBVixDQUFlLElBQUksUUFBSixDQUFhLE9BQWIsQ0FBZixFQURvQjtLQUFsQjs7QUFJTixhQUFTLG1CQUFXO0FBQ2hCLGtCQUFVLE9BQVYsQ0FBa0IsVUFBQyxRQUFEO21CQUFjLFNBQVMsWUFBVDtTQUFkLENBQWxCLENBRGdCO0FBRWhCLG9CQUFZLEVBQVosQ0FGZ0I7S0FBWCIsImZpbGUiOiJjb2xsYXBzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlbGVnYXRlIH0gZnJvbSAnZG9tLWRlbGVnYXRlJztcbmltcG9ydCB7IHNlbGVjdEZpcnN0LCBoYXNDbGFzcyB9IGZyb20gJ0Bwb2QtcG9pbnQvZG9tLW9wcyc7XG5pbXBvcnQgeyBoaWRlLCBzaG93IH0gZnJvbSAnLi91dGlsaXRpZXMnO1xuXG5sZXQgaW5zdGFuY2VzID0gW107XG5cbmNsYXNzIENvbGxhcHNlIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgY29sbGFwc2FibGUgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGNvbGxhcHNlIGV2ZW50LlxuICAgICAqL1xuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBuZXcgRGVsZWdhdGUodGhpcy5lbGVtZW50KTtcblxuICAgICAgICB0aGlzLmxpc3RlbmVyLm9uKCdjbGljaycsIChldmVudCwgaW5wdXQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZG9Db2xsYXBzZShldmVudCwgaW5wdXQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIHRoZSBldmVudCBsaXN0ZW5lcnMgZnJvbSB0aGUgZWxlbWVudHMuXG4gICAgICovXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb2xsYXBzZXMgdGhlIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdHJpZ2dlclxuICAgICAqL1xuICAgIGRvQ29sbGFwc2UoZXZlbnQsIHRyaWdnZXIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQgdGFyZ2V0ID0gdHJpZ2dlci5kYXRhc2V0LnRhcmdldDtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBzZWxlY3RGaXJzdCh0YXJnZXQsIHRyaWdnZXIucGFyZW50Tm9kZSk7XG5cbiAgICAgICAgaWYgKGhhc0NsYXNzKGVsZW1lbnQsICdpbicpKSB7XG4gICAgICAgICAgICBoaWRlKGVsZW1lbnQsIHRyaWdnZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvdyhlbGVtZW50LCB0cmlnZ2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBpbnN0YW5jZXMucHVzaChuZXcgQ29sbGFwc2UoZWxlbWVudCkpO1xuICAgIH0sXG5cbiAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiBpbnN0YW5jZS51bmJpbmRFdmVudHMoKSk7XG4gICAgICAgIGluc3RhbmNlcyA9IFtdO1xuICAgIH1cbn07XG4iXX0=