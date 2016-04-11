'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domDelegate = require('dom-delegate');

var _domOps = require('@pod-point/dom-ops');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instances = [];

var Toggle = function () {

    /**
     * Creates a new toggle element.
     *
     * @param element
     */

    function Toggle(element) {
        _classCallCheck(this, Toggle);

        this.element = element;
        this.action = element.dataset.hasOwnProperty('action') ? element.dataset.action : 'click';

        this.hide = element.dataset.hide;
        this.show = element.dataset.hasOwnProperty('show') ? element.dataset.show : null;

        this.bindEvents();
    }

    /**
     * Binds toggle event.
     */


    _createClass(Toggle, [{
        key: 'bindEvents',
        value: function bindEvents() {
            var _this = this;

            this.listener = new _domDelegate.Delegate(this.element);

            this.listener.on(this.action, function (event) {
                _this.doToggle(event);
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
         * Toggles the elements
         * @param {Event} event
         * @param {Element} trigger
         */

    }, {
        key: 'doToggle',
        value: function doToggle(event) {
            event.preventDefault();

            var hideElement = (0, _domOps.selectFirst)(this.hide);
            var showElement = this.show ? (0, _domOps.selectFirst)(this.show) : null;

            if (hideElement.style.display !== 'none' || hideElement.style.display === '') {

                hideElement.style.display = 'none';

                if (this.show) {
                    showElement.style.display = 'block';
                }
            } else {

                hideElement.style.display = 'block';

                if (this.show) {
                    showElement.style.display = 'none';
                }
            }
        }
    }]);

    return Toggle;
}();

exports.default = {
    init: function init(element) {
        instances.push(new Toggle(element));
    },

    destroy: function destroy() {
        instances.forEach(function (instance) {
            return instance.unbindEvents();
        });
        instances = [];
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9tb2R1bGVzL3RvZ2dsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUdBLElBQUksWUFBWSxFQUFaOztJQUVFOzs7Ozs7OztBQU9GLGFBUEUsTUFPRixDQUFZLE9BQVosRUFBcUI7OEJBUG5CLFFBT21COztBQUNqQixhQUFLLE9BQUwsR0FBZSxPQUFmLENBRGlCO0FBRWpCLGFBQUssTUFBTCxHQUFjLFFBQVEsT0FBUixDQUFnQixjQUFoQixDQUErQixRQUEvQixJQUEyQyxRQUFRLE9BQVIsQ0FBZ0IsTUFBaEIsR0FBeUIsT0FBcEUsQ0FGRzs7QUFJakIsYUFBSyxJQUFMLEdBQVksUUFBUSxPQUFSLENBQWdCLElBQWhCLENBSks7QUFLakIsYUFBSyxJQUFMLEdBQVksUUFBUSxPQUFSLENBQWdCLGNBQWhCLENBQStCLE1BQS9CLElBQXlDLFFBQVEsT0FBUixDQUFnQixJQUFoQixHQUF1QixJQUFoRSxDQUxLOztBQU9qQixhQUFLLFVBQUwsR0FQaUI7S0FBckI7Ozs7Ozs7aUJBUEU7O3FDQW9CVzs7O0FBQ1QsaUJBQUssUUFBTCxHQUFnQiwwQkFBYSxLQUFLLE9BQUwsQ0FBN0IsQ0FEUzs7QUFHVCxpQkFBSyxRQUFMLENBQWMsRUFBZCxDQUFpQixLQUFLLE1BQUwsRUFBYSxVQUFDLEtBQUQsRUFBVztBQUNyQyxzQkFBSyxRQUFMLENBQWMsS0FBZCxFQURxQzthQUFYLENBQTlCLENBSFM7Ozs7Ozs7Ozt1Q0FXRTtBQUNYLGlCQUFLLFFBQUwsQ0FBYyxPQUFkLEdBRFc7Ozs7Ozs7Ozs7O2lDQVNOLE9BQU87QUFDWixrQkFBTSxjQUFOLEdBRFk7O0FBR1osZ0JBQUksY0FBYyx5QkFBWSxLQUFLLElBQUwsQ0FBMUIsQ0FIUTtBQUlaLGdCQUFJLGNBQWMsS0FBSyxJQUFMLEdBQVkseUJBQVksS0FBSyxJQUFMLENBQXhCLEdBQXFDLElBQXJDLENBSk47O0FBTVosZ0JBQUksWUFBWSxLQUFaLENBQWtCLE9BQWxCLEtBQThCLE1BQTlCLElBQXdDLFlBQVksS0FBWixDQUFrQixPQUFsQixLQUE4QixFQUE5QixFQUFrQzs7QUFFMUUsNEJBQVksS0FBWixDQUFrQixPQUFsQixHQUE0QixNQUE1QixDQUYwRTs7QUFJMUUsb0JBQUksS0FBSyxJQUFMLEVBQVc7QUFDWCxnQ0FBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTRCLE9BQTVCLENBRFc7aUJBQWY7YUFKSixNQVFPOztBQUVILDRCQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBNEIsT0FBNUIsQ0FGRzs7QUFJSCxvQkFBSSxLQUFLLElBQUwsRUFBVztBQUNYLGdDQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBNEIsTUFBNUIsQ0FEVztpQkFBZjthQVpKOzs7O1dBOUNGOzs7a0JBa0VTO0FBQ1gsVUFBTSxjQUFTLE9BQVQsRUFBa0I7QUFDcEIsa0JBQVUsSUFBVixDQUFlLElBQUksTUFBSixDQUFXLE9BQVgsQ0FBZixFQURvQjtLQUFsQjs7QUFJTixhQUFTLG1CQUFXO0FBQ2hCLGtCQUFVLE9BQVYsQ0FBa0IsVUFBQyxRQUFEO21CQUFjLFNBQVMsWUFBVDtTQUFkLENBQWxCLENBRGdCO0FBRWhCLG9CQUFZLEVBQVosQ0FGZ0I7S0FBWCIsImZpbGUiOiJ0b2dnbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWxlZ2F0ZSB9IGZyb20gJ2RvbS1kZWxlZ2F0ZSc7XG5pbXBvcnQgeyBzZWxlY3RGaXJzdCB9IGZyb20gJ0Bwb2QtcG9pbnQvZG9tLW9wcyc7XG5cbmxldCBpbnN0YW5jZXMgPSBbXTtcblxuY2xhc3MgVG9nZ2xlIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgdG9nZ2xlIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBlbGVtZW50LmRhdGFzZXQuaGFzT3duUHJvcGVydHkoJ2FjdGlvbicpID8gZWxlbWVudC5kYXRhc2V0LmFjdGlvbiA6ICdjbGljayc7XG5cbiAgICAgICAgdGhpcy5oaWRlID0gZWxlbWVudC5kYXRhc2V0LmhpZGU7XG4gICAgICAgIHRoaXMuc2hvdyA9IGVsZW1lbnQuZGF0YXNldC5oYXNPd25Qcm9wZXJ0eSgnc2hvdycpID8gZWxlbWVudC5kYXRhc2V0LnNob3cgOiBudWxsO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIHRvZ2dsZSBldmVudC5cbiAgICAgKi9cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gbmV3IERlbGVnYXRlKHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5lci5vbih0aGlzLmFjdGlvbiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRvVG9nZ2xlKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5iaW5kcyB0aGUgZXZlbnQgbGlzdGVuZXJzIGZyb20gdGhlIGVsZW1lbnRzLlxuICAgICAqL1xuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgZWxlbWVudHNcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdHJpZ2dlclxuICAgICAqL1xuICAgIGRvVG9nZ2xlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IGhpZGVFbGVtZW50ID0gc2VsZWN0Rmlyc3QodGhpcy5oaWRlKTtcbiAgICAgICAgbGV0IHNob3dFbGVtZW50ID0gdGhpcy5zaG93ID8gc2VsZWN0Rmlyc3QodGhpcy5zaG93KSA6IG51bGw7XG5cbiAgICAgICAgaWYgKGhpZGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgIT09ICdub25lJyB8fCBoaWRlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnJykge1xuXG4gICAgICAgICAgICBoaWRlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93KSB7XG4gICAgICAgICAgICAgICAgc2hvd0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaGlkZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNob3cpIHtcbiAgICAgICAgICAgICAgICBzaG93RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGluc3RhbmNlcy5wdXNoKG5ldyBUb2dnbGUoZWxlbWVudCkpO1xuICAgIH0sXG5cbiAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiBpbnN0YW5jZS51bmJpbmRFdmVudHMoKSk7XG4gICAgICAgIGluc3RhbmNlcyA9IFtdO1xuICAgIH1cbn07XG4iXX0=