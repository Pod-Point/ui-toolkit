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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9tb2R1bGVzL2Ryb3Bkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFJLFlBQVksRUFBWjs7SUFFRTs7Ozs7Ozs7QUFPRixhQVBFLFFBT0YsQ0FBWSxPQUFaLEVBQXFCOzhCQVBuQixVQU9tQjs7QUFDakIsYUFBSyxPQUFMLEdBQWUsT0FBZixDQURpQjs7QUFHakIsYUFBSyxVQUFMLEdBSGlCO0tBQXJCOzs7Ozs7O2lCQVBFOztxQ0FnQlc7OztBQUNULGlCQUFLLFFBQUwsR0FBZ0IsMEJBQWEsS0FBSyxPQUFMLENBQTdCLENBRFM7O0FBR1QsaUJBQUssUUFBTCxDQUFjLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEIsVUFBQyxLQUFELEVBQVEsS0FBUixFQUFrQjtBQUN4QyxzQkFBSyxVQUFMLENBQWdCLEtBQWhCLEVBQXVCLEtBQXZCLEVBRHdDO2FBQWxCLENBQTFCLENBSFM7O0FBT1QsaUJBQUssUUFBTCxDQUFjLEVBQWQsQ0FBaUIsTUFBakIsRUFBeUIsVUFBQyxLQUFELEVBQVEsS0FBUixFQUFrQjtBQUN2QyxzQkFBSyxhQUFMLENBQW1CLEtBQW5CLEVBQTBCLEtBQTFCLEVBRHVDO2FBQWxCLENBQXpCLENBUFM7Ozs7Ozs7Ozt1Q0FlRTtBQUNYLGlCQUFLLFFBQUwsQ0FBYyxPQUFkLEdBRFc7Ozs7Ozs7Ozs7O21DQVNKLE9BQU8sT0FBTztBQUNyQixrQkFBTSxjQUFOLEdBRHFCO0FBRXJCLGtCQUFNLGFBQU4sQ0FBb0IsU0FBcEIsQ0FBOEIsTUFBOUIsQ0FBcUMsTUFBckMsRUFGcUI7Ozs7Ozs7Ozs7O3NDQVVYLE9BQU8sT0FBTztBQUN4QixxQ0FBWSxNQUFNLGFBQU4sRUFBcUIsTUFBakM7OztBQUR3QixnQkFJcEIsTUFBTSxhQUFOLElBQXVCLE1BQU0sYUFBTixDQUFvQixZQUFwQixDQUFpQyxnQkFBakMsTUFBdUQsVUFBdkQsRUFBbUU7QUFDMUYsc0JBQU0sYUFBTixDQUFvQixLQUFwQixHQUQwRjthQUE5Rjs7OztXQXRERjs7O2tCQTZEUztBQUNYLFVBQU0sY0FBUyxPQUFULEVBQWtCO0FBQ3BCLGtCQUFVLElBQVYsQ0FBZSxJQUFJLFFBQUosQ0FBYSxPQUFiLENBQWYsRUFEb0I7S0FBbEI7O0FBSU4sYUFBUyxtQkFBVztBQUNoQixrQkFBVSxPQUFWLENBQWtCLFVBQUMsUUFBRDttQkFBYyxTQUFTLFlBQVQ7U0FBZCxDQUFsQixDQURnQjtBQUVoQixvQkFBWSxFQUFaLENBRmdCO0tBQVgiLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWxlZ2F0ZSB9IGZyb20gJ2RvbS1kZWxlZ2F0ZSc7XG5pbXBvcnQgeyByZW1vdmVDbGFzcyB9IGZyb20gJ0Bwb2QtcG9pbnQvZG9tLW9wcyc7XG5cbmxldCBpbnN0YW5jZXMgPSBbXTtcblxuY2xhc3MgRHJvcERvd24ge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBkcm9wZG93bi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGRyb3Bkb3duIGV2ZW50LlxuICAgICAqL1xuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBuZXcgRGVsZWdhdGUodGhpcy5lbGVtZW50KTtcblxuICAgICAgICB0aGlzLmxpc3RlbmVyLm9uKCdjbGljaycsIChldmVudCwgaW5wdXQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZG9Ecm9wRG93bihldmVudCwgaW5wdXQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxpc3RlbmVyLm9uKCdibHVyJywgKGV2ZW50LCBpbnB1dCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZURyb3BEb3duKGV2ZW50LCBpbnB1dCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgdGhlIGV2ZW50IGxpc3RlbmVycyBmcm9tIHRoZSBlbGVtZW50cy5cbiAgICAgKi9cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyb3BzIGRvd25cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gaW5wdXRcbiAgICAgKi9cbiAgICBkb0Ryb3BEb3duKGV2ZW50LCBpbnB1dCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpbnB1dC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIGRyb3Bkb3duXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGlucHV0XG4gICAgICovXG4gICAgY2xvc2VEcm9wRG93bihldmVudCwgaW5wdXQpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoaW5wdXQucGFyZW50RWxlbWVudCwgJ29wZW4nKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBjbGljayBldmVudCBvbiB0aGUgdGFyZ2V0IGlmIGl0IG5vdCBvcGVuaW5nIGFub3RoZXIgbWVudVxuICAgICAgICBpZiAoZXZlbnQucmVsYXRlZFRhcmdldCAmJiBldmVudC5yZWxhdGVkVGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1tb2R1bGUnKSAhPT0gJ2Ryb3Bkb3duJykge1xuICAgICAgICAgICAgZXZlbnQucmVsYXRlZFRhcmdldC5jbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGluc3RhbmNlcy5wdXNoKG5ldyBEcm9wRG93bihlbGVtZW50KSk7XG4gICAgfSxcblxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IGluc3RhbmNlLnVuYmluZEV2ZW50cygpKTtcbiAgICAgICAgaW5zdGFuY2VzID0gW107XG4gICAgfVxufTtcbiJdfQ==