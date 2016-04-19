'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domDelegate = require('dom-delegate');

var _domOps = require('@pod-point/dom-ops');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HAS_CONTENT = 'has-content';
var HAS_ERROR = 'has-error';
var HAS_FOCUS = 'has-focus';

var FormFields = function () {
    function FormFields() {
        var root = arguments.length <= 0 || arguments[0] === undefined ? document.body : arguments[0];

        _classCallCheck(this, FormFields);

        this.bindEvents(root);
        this.checkAllFieldsForContent();
    }

    _createClass(FormFields, [{
        key: 'checkAllFieldsForContent',
        value: function checkAllFieldsForContent() {
            var _this = this;

            var inputs = (0, _domOps.nodesToArray)((0, _domOps.select)('input'));

            if (inputs.length) {
                inputs.forEach(function (input) {
                    return _this.checkForContent(input);
                });
            }
        }
    }, {
        key: 'checkForContent',
        value: function checkForContent(element) {
            var container = this.getInputContainer(element),
                callback = element.value ? _domOps.addClass : _domOps.removeClass;

            callback(container, HAS_CONTENT);
        }
    }, {
        key: 'checkForErrors',
        value: function checkForErrors(element) {
            (0, _domOps.removeClass)(this.getInputContainer(element), HAS_ERROR);
        }
    }, {
        key: 'bindEvents',
        value: function bindEvents(root) {
            var _this2 = this;

            var listener = new _domDelegate.Delegate(root);

            // Listen to change because of password managers etc
            listener.on('change', 'input, textarea', function (event, element) {
                return _this2.giveFocus(element);
            });

            // Text input focus handler
            listener.on('focus', 'input, textarea', function (event, element) {
                return _this2.giveFocus(element);
            });

            // Text input focusout handler
            listener.on('focusout', 'input, textarea', function (event, element) {
                _this2.checkForContent(element);
                _this2.checkForErrors(element);
                _this2.removeFocus(element);
            });

            listener.on('input', 'textarea', function (event, element) {
                var scrollHeight = element.scrollHeight;

                if (scrollHeight > parseInt(css.get(element, 'height'))) {
                    css.set(element, 'height', scrollHeight + 'px');
                }
            });
        }
    }, {
        key: 'getInputContainer',
        value: function getInputContainer(element) {
            return element.parentNode;
        }
    }, {
        key: 'removeFocus',
        value: function removeFocus(element) {
            (0, _domOps.removeClass)(this.getInputContainer(element), HAS_FOCUS);
        }
    }, {
        key: 'giveFocus',
        value: function giveFocus(element) {
            (0, _domOps.addClass)(this.getInputContainer(element), HAS_FOCUS);
        }
    }]);

    return FormFields;
}();

exports.default = {
    init: function init() {
        new FormFields();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tZmllbGRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFNLGNBQWMsYUFBZDtBQUNOLElBQU0sWUFBWSxXQUFaO0FBQ04sSUFBTSxZQUFZLFdBQVo7O0lBRUE7QUFDRixhQURFLFVBQ0YsR0FBa0M7WUFBdEIsNkRBQU8sU0FBUyxJQUFULGdCQUFlOzs4QkFEaEMsWUFDZ0M7O0FBQzlCLGFBQUssVUFBTCxDQUFnQixJQUFoQixFQUQ4QjtBQUU5QixhQUFLLHdCQUFMLEdBRjhCO0tBQWxDOztpQkFERTs7bURBTXlCOzs7QUFDdkIsZ0JBQUksU0FBUywwQkFBYSxvQkFBTyxPQUFQLENBQWIsQ0FBVCxDQURtQjs7QUFHdkIsZ0JBQUksT0FBTyxNQUFQLEVBQWU7QUFDZix1QkFBTyxPQUFQLENBQWU7MkJBQVMsTUFBSyxlQUFMLENBQXFCLEtBQXJCO2lCQUFULENBQWYsQ0FEZTthQUFuQjs7Ozt3Q0FLWSxTQUFTO0FBQ3JCLGdCQUFJLFlBQVksS0FBSyxpQkFBTCxDQUF1QixPQUF2QixDQUFaO2dCQUNBLFdBQVcsT0FBQyxDQUFRLEtBQVIsbUJBQUQsc0JBQVgsQ0FGaUI7O0FBSXJCLHFCQUFTLFNBQVQsRUFBb0IsV0FBcEIsRUFKcUI7Ozs7dUNBT1YsU0FBUztBQUNwQixxQ0FBWSxLQUFLLGlCQUFMLENBQXVCLE9BQXZCLENBQVosRUFBNkMsU0FBN0MsRUFEb0I7Ozs7bUNBSWIsTUFBTTs7O0FBQ2IsZ0JBQUksV0FBVywwQkFBYSxJQUFiLENBQVg7OztBQURTLG9CQUliLENBQVMsRUFBVCxDQUFZLFFBQVosRUFBc0IsaUJBQXRCLEVBQXlDLFVBQUMsS0FBRCxFQUFRLE9BQVI7dUJBQW9CLE9BQUssU0FBTCxDQUFlLE9BQWY7YUFBcEIsQ0FBekM7OztBQUphLG9CQU9iLENBQVMsRUFBVCxDQUFZLE9BQVosRUFBcUIsaUJBQXJCLEVBQXdDLFVBQUMsS0FBRCxFQUFRLE9BQVI7dUJBQW9CLE9BQUssU0FBTCxDQUFlLE9BQWY7YUFBcEIsQ0FBeEM7OztBQVBhLG9CQVViLENBQVMsRUFBVCxDQUFZLFVBQVosRUFBd0IsaUJBQXhCLEVBQTJDLFVBQUMsS0FBRCxFQUFRLE9BQVIsRUFBb0I7QUFDM0QsdUJBQUssZUFBTCxDQUFxQixPQUFyQixFQUQyRDtBQUUvRCx1QkFBSyxjQUFMLENBQW9CLE9BQXBCLEVBRitEO0FBRy9ELHVCQUFLLFdBQUwsQ0FBaUIsT0FBakIsRUFIK0Q7YUFBcEIsQ0FBM0MsQ0FWYTs7QUFnQmIscUJBQVMsRUFBVCxDQUFZLE9BQVosRUFBcUIsVUFBckIsRUFBaUMsVUFBQyxLQUFELEVBQVEsT0FBUixFQUFvQjtBQUNqRCxvQkFBSSxlQUFlLFFBQVEsWUFBUixDQUQ4Qjs7QUFHckQsb0JBQUksZUFBZSxTQUFTLElBQUksR0FBSixDQUFRLE9BQVIsRUFBaUIsUUFBakIsQ0FBVCxDQUFmLEVBQXFEO0FBQ3JELHdCQUFJLEdBQUosQ0FBUSxPQUFSLEVBQWlCLFFBQWpCLEVBQTJCLGVBQWUsSUFBZixDQUEzQixDQURxRDtpQkFBekQ7YUFIaUMsQ0FBakMsQ0FoQmE7Ozs7MENBeUJDLFNBQVM7QUFDdkIsbUJBQU8sUUFBUSxVQUFSLENBRGdCOzs7O29DQUlmLFNBQVM7QUFDakIscUNBQVksS0FBSyxpQkFBTCxDQUF1QixPQUF2QixDQUFaLEVBQTZDLFNBQTdDLEVBRGlCOzs7O2tDQUlYLFNBQVM7QUFDZixrQ0FBUyxLQUFLLGlCQUFMLENBQXVCLE9BQXZCLENBQVQsRUFBMEMsU0FBMUMsRUFEZTs7OztXQTFEakI7OztrQkErRFM7QUFDWCxVQUFNLGdCQUFZO0FBQ2QsWUFBSSxVQUFKLEdBRGM7S0FBWiIsImZpbGUiOiJmb3JtLWZpZWxkcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlbGVnYXRlIH0gZnJvbSAnZG9tLWRlbGVnYXRlJztcbmltcG9ydCB7IGFkZENsYXNzLCByZW1vdmVDbGFzcywgc2VsZWN0LCBub2Rlc1RvQXJyYXkgfSBmcm9tICdAcG9kLXBvaW50L2RvbS1vcHMnO1xuXG5jb25zdCBIQVNfQ09OVEVOVCA9ICdoYXMtY29udGVudCc7XG5jb25zdCBIQVNfRVJST1IgPSAnaGFzLWVycm9yJztcbmNvbnN0IEhBU19GT0NVUyA9ICdoYXMtZm9jdXMnO1xuXG5jbGFzcyBGb3JtRmllbGRzIHtcbiAgICBjb25zdHJ1Y3Rvcihyb290ID0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMocm9vdCk7XG4gICAgICAgIHRoaXMuY2hlY2tBbGxGaWVsZHNGb3JDb250ZW50KCk7XG4gICAgfVxuXG4gICAgY2hlY2tBbGxGaWVsZHNGb3JDb250ZW50KCkge1xuICAgICAgICB2YXIgaW5wdXRzID0gbm9kZXNUb0FycmF5KHNlbGVjdCgnaW5wdXQnKSk7XG5cbiAgICAgICAgaWYgKGlucHV0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHRoaXMuY2hlY2tGb3JDb250ZW50KGlucHV0KSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrRm9yQ29udGVudChlbGVtZW50KSB7XG4gICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLmdldElucHV0Q29udGFpbmVyKGVsZW1lbnQpLFxuICAgICAgICAgICAgY2FsbGJhY2sgPSAoZWxlbWVudC52YWx1ZSkgPyBhZGRDbGFzcyA6IHJlbW92ZUNsYXNzO1xuXG4gICAgICAgIGNhbGxiYWNrKGNvbnRhaW5lciwgSEFTX0NPTlRFTlQpO1xuICAgIH1cblxuICAgIGNoZWNrRm9yRXJyb3JzKGVsZW1lbnQpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5nZXRJbnB1dENvbnRhaW5lcihlbGVtZW50KSwgSEFTX0VSUk9SKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKHJvb3QpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gbmV3IERlbGVnYXRlKHJvb3QpO1xuXG4gICAgICAgIC8vIExpc3RlbiB0byBjaGFuZ2UgYmVjYXVzZSBvZiBwYXNzd29yZCBtYW5hZ2VycyBldGNcbiAgICAgICAgbGlzdGVuZXIub24oJ2NoYW5nZScsICdpbnB1dCwgdGV4dGFyZWEnLCAoZXZlbnQsIGVsZW1lbnQpID0+IHRoaXMuZ2l2ZUZvY3VzKGVsZW1lbnQpICk7XG5cbiAgICAgICAgLy8gVGV4dCBpbnB1dCBmb2N1cyBoYW5kbGVyXG4gICAgICAgIGxpc3RlbmVyLm9uKCdmb2N1cycsICdpbnB1dCwgdGV4dGFyZWEnLCAoZXZlbnQsIGVsZW1lbnQpID0+IHRoaXMuZ2l2ZUZvY3VzKGVsZW1lbnQpICk7XG5cbiAgICAgICAgLy8gVGV4dCBpbnB1dCBmb2N1c291dCBoYW5kbGVyXG4gICAgICAgIGxpc3RlbmVyLm9uKCdmb2N1c291dCcsICdpbnB1dCwgdGV4dGFyZWEnLCAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tGb3JDb250ZW50KGVsZW1lbnQpO1xuICAgICAgICB0aGlzLmNoZWNrRm9yRXJyb3JzKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLnJlbW92ZUZvY3VzKGVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgICAgIGxpc3RlbmVyLm9uKCdpbnB1dCcsICd0ZXh0YXJlYScsIChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIHNjcm9sbEhlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuXG4gICAgICAgIGlmIChzY3JvbGxIZWlnaHQgPiBwYXJzZUludChjc3MuZ2V0KGVsZW1lbnQsICdoZWlnaHQnKSkpIHtcbiAgICAgICAgICAgIGNzcy5zZXQoZWxlbWVudCwgJ2hlaWdodCcsIHNjcm9sbEhlaWdodCArICdweCcpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0SW5wdXRDb250YWluZXIoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIHJlbW92ZUZvY3VzKGVsZW1lbnQpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5nZXRJbnB1dENvbnRhaW5lcihlbGVtZW50KSwgSEFTX0ZPQ1VTKTtcbiAgICB9XG5cbiAgICBnaXZlRm9jdXMoZWxlbWVudCkge1xuICAgICAgICBhZGRDbGFzcyh0aGlzLmdldElucHV0Q29udGFpbmVyKGVsZW1lbnQpLCBIQVNfRk9DVVMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmV3IEZvcm1GaWVsZHMoKTtcbiAgICB9XG59O1xuIl19