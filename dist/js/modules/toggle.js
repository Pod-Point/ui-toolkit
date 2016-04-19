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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZ2dsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUEsSUFBSSxZQUFZLEVBQVo7O0lBRUU7Ozs7Ozs7O0FBT0YsYUFQRSxNQU9GLENBQVksT0FBWixFQUFxQjs4QkFQbkIsUUFPbUI7O0FBQ2pCLGFBQUssT0FBTCxHQUFlLE9BQWYsQ0FEaUI7QUFFakIsYUFBSyxNQUFMLEdBQWMsUUFBUSxPQUFSLENBQWdCLGNBQWhCLENBQStCLFFBQS9CLElBQTJDLFFBQVEsT0FBUixDQUFnQixNQUFoQixHQUF5QixPQUFwRSxDQUZHOztBQUlqQixhQUFLLElBQUwsR0FBWSxRQUFRLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FKSztBQUtqQixhQUFLLElBQUwsR0FBWSxRQUFRLE9BQVIsQ0FBZ0IsY0FBaEIsQ0FBK0IsTUFBL0IsSUFBeUMsUUFBUSxPQUFSLENBQWdCLElBQWhCLEdBQXVCLElBQWhFLENBTEs7O0FBT2pCLGFBQUssVUFBTCxHQVBpQjtLQUFyQjs7Ozs7OztpQkFQRTs7cUNBb0JXOzs7QUFDVCxpQkFBSyxRQUFMLEdBQWdCLDBCQUFhLEtBQUssT0FBTCxDQUE3QixDQURTOztBQUdULGlCQUFLLFFBQUwsQ0FBYyxFQUFkLENBQWlCLEtBQUssTUFBTCxFQUFhLFVBQUMsS0FBRCxFQUFXO0FBQ3JDLHNCQUFLLFFBQUwsQ0FBYyxLQUFkLEVBRHFDO2FBQVgsQ0FBOUIsQ0FIUzs7Ozs7Ozs7O3VDQVdFO0FBQ1gsaUJBQUssUUFBTCxDQUFjLE9BQWQsR0FEVzs7Ozs7Ozs7Ozs7aUNBU04sT0FBTztBQUNaLGtCQUFNLGNBQU4sR0FEWTs7QUFHWixnQkFBSSxjQUFjLHlCQUFZLEtBQUssSUFBTCxDQUExQixDQUhRO0FBSVosZ0JBQUksY0FBYyxLQUFLLElBQUwsR0FBWSx5QkFBWSxLQUFLLElBQUwsQ0FBeEIsR0FBcUMsSUFBckMsQ0FKTjs7QUFNWixnQkFBSSxZQUFZLEtBQVosQ0FBa0IsT0FBbEIsS0FBOEIsTUFBOUIsSUFBd0MsWUFBWSxLQUFaLENBQWtCLE9BQWxCLEtBQThCLEVBQTlCLEVBQWtDOztBQUUxRSw0QkFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTRCLE1BQTVCLENBRjBFOztBQUkxRSxvQkFBSSxLQUFLLElBQUwsRUFBVztBQUNYLGdDQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBNEIsT0FBNUIsQ0FEVztpQkFBZjthQUpKLE1BUU87O0FBRUgsNEJBQVksS0FBWixDQUFrQixPQUFsQixHQUE0QixPQUE1QixDQUZHOztBQUlILG9CQUFJLEtBQUssSUFBTCxFQUFXO0FBQ1gsZ0NBQVksS0FBWixDQUFrQixPQUFsQixHQUE0QixNQUE1QixDQURXO2lCQUFmO2FBWko7Ozs7V0E5Q0Y7OztrQkFrRVM7QUFDWCxVQUFNLGNBQVMsT0FBVCxFQUFrQjtBQUNwQixrQkFBVSxJQUFWLENBQWUsSUFBSSxNQUFKLENBQVcsT0FBWCxDQUFmLEVBRG9CO0tBQWxCOztBQUlOLGFBQVMsbUJBQVc7QUFDaEIsa0JBQVUsT0FBVixDQUFrQixVQUFDLFFBQUQ7bUJBQWMsU0FBUyxZQUFUO1NBQWQsQ0FBbEIsQ0FEZ0I7QUFFaEIsb0JBQVksRUFBWixDQUZnQjtLQUFYIiwiZmlsZSI6InRvZ2dsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlbGVnYXRlIH0gZnJvbSAnZG9tLWRlbGVnYXRlJztcbmltcG9ydCB7IHNlbGVjdEZpcnN0IH0gZnJvbSAnQHBvZC1wb2ludC9kb20tb3BzJztcblxubGV0IGluc3RhbmNlcyA9IFtdO1xuXG5jbGFzcyBUb2dnbGUge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyB0b2dnbGUgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmFjdGlvbiA9IGVsZW1lbnQuZGF0YXNldC5oYXNPd25Qcm9wZXJ0eSgnYWN0aW9uJykgPyBlbGVtZW50LmRhdGFzZXQuYWN0aW9uIDogJ2NsaWNrJztcblxuICAgICAgICB0aGlzLmhpZGUgPSBlbGVtZW50LmRhdGFzZXQuaGlkZTtcbiAgICAgICAgdGhpcy5zaG93ID0gZWxlbWVudC5kYXRhc2V0Lmhhc093blByb3BlcnR5KCdzaG93JykgPyBlbGVtZW50LmRhdGFzZXQuc2hvdyA6IG51bGw7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZHMgdG9nZ2xlIGV2ZW50LlxuICAgICAqL1xuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBuZXcgRGVsZWdhdGUodGhpcy5lbGVtZW50KTtcblxuICAgICAgICB0aGlzLmxpc3RlbmVyLm9uKHRoaXMuYWN0aW9uLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZG9Ub2dnbGUoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIHRoZSBldmVudCBsaXN0ZW5lcnMgZnJvbSB0aGUgZWxlbWVudHMuXG4gICAgICovXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIHRoZSBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0cmlnZ2VyXG4gICAgICovXG4gICAgZG9Ub2dnbGUoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQgaGlkZUVsZW1lbnQgPSBzZWxlY3RGaXJzdCh0aGlzLmhpZGUpO1xuICAgICAgICBsZXQgc2hvd0VsZW1lbnQgPSB0aGlzLnNob3cgPyBzZWxlY3RGaXJzdCh0aGlzLnNob3cpIDogbnVsbDtcblxuICAgICAgICBpZiAoaGlkZUVsZW1lbnQuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnIHx8IGhpZGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICcnKSB7XG5cbiAgICAgICAgICAgIGhpZGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNob3cpIHtcbiAgICAgICAgICAgICAgICBzaG93RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBoaWRlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvdykge1xuICAgICAgICAgICAgICAgIHNob3dFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgaW5zdGFuY2VzLnB1c2gobmV3IFRvZ2dsZShlbGVtZW50KSk7XG4gICAgfSxcblxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IGluc3RhbmNlLnVuYmluZEV2ZW50cygpKTtcbiAgICAgICAgaW5zdGFuY2VzID0gW107XG4gICAgfVxufTtcbiJdfQ==