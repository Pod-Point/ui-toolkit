'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domDelegate = require('dom-delegate');

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _progressButton = require('./progress-button');

var _progressButton2 = _interopRequireDefault(_progressButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instances = [];

var AjaxForm = function () {
    function AjaxForm(form) {
        _classCallCheck(this, AjaxForm);

        this.form = form;
        this.button = _progressButton2.default.create(form.querySelector('button[type="submit"]'));
        this.requestInProgress = false;

        this.bindEvents();
    }

    _createClass(AjaxForm, [{
        key: 'submitForm',
        value: function submitForm() {
            var _this = this;

            this.requestInProgress = true;
            this.button.handleLoading();

            _superagent2.default.post(this.form.action).type('form').send(this.form).end(function (error, response) {
                _this.requestInProgress = false;

                if (response && response.ok) {
                    _this.button.handleComplete(true);
                } else {
                    _this.button.handleComplete(false);
                }
            });
        }
    }, {
        key: 'bindEvents',
        value: function bindEvents() {
            var _this2 = this;

            this.listener = new _domDelegate.Delegate(this.form);

            this.listener.on('submit', function (event) {
                event.preventDefault();

                if (!_this2.requestInProgress) {
                    _this2.submitForm();
                }
            });
        }
    }, {
        key: 'unbindEvents',
        value: function unbindEvents() {
            this.listener.destroy();
        }
    }]);

    return AjaxForm;
}();

exports.default = {
    init: function init(form) {
        instances.push(new AjaxForm(form));
    },

    destroy: function destroy() {
        instances.forEach(function (instance) {
            return instance.unbindEvents();
        });
        instances = [];
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFqYXgtZm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBSSxZQUFZLEVBQVo7O0lBRUU7QUFDRixhQURFLFFBQ0YsQ0FBWSxJQUFaLEVBQWtCOzhCQURoQixVQUNnQjs7QUFDZCxhQUFLLElBQUwsR0FBWSxJQUFaLENBRGM7QUFFZCxhQUFLLE1BQUwsR0FBYyx5QkFBZSxNQUFmLENBQXNCLEtBQUssYUFBTCxDQUFtQix1QkFBbkIsQ0FBdEIsQ0FBZCxDQUZjO0FBR2QsYUFBSyxpQkFBTCxHQUF5QixLQUF6QixDQUhjOztBQUtkLGFBQUssVUFBTCxHQUxjO0tBQWxCOztpQkFERTs7cUNBU1c7OztBQUNULGlCQUFLLGlCQUFMLEdBQXlCLElBQXpCLENBRFM7QUFFVCxpQkFBSyxNQUFMLENBQVksYUFBWixHQUZTOztBQUlULGlDQUFRLElBQVIsQ0FBYSxLQUFLLElBQUwsQ0FBVSxNQUFWLENBQWIsQ0FDSyxJQURMLENBQ1UsTUFEVixFQUVLLElBRkwsQ0FFVSxLQUFLLElBQUwsQ0FGVixDQUdLLEdBSEwsQ0FHUyxVQUFDLEtBQUQsRUFBUSxRQUFSLEVBQXFCO0FBQ3RCLHNCQUFLLGlCQUFMLEdBQXlCLEtBQXpCLENBRHNCOztBQUd0QixvQkFBSSxZQUFZLFNBQVMsRUFBVCxFQUFhO0FBQ3pCLDBCQUFLLE1BQUwsQ0FBWSxjQUFaLENBQTJCLElBQTNCLEVBRHlCO2lCQUE3QixNQUVPO0FBQ0gsMEJBQUssTUFBTCxDQUFZLGNBQVosQ0FBMkIsS0FBM0IsRUFERztpQkFGUDthQUhDLENBSFQsQ0FKUzs7OztxQ0FrQkE7OztBQUNULGlCQUFLLFFBQUwsR0FBZ0IsMEJBQWEsS0FBSyxJQUFMLENBQTdCLENBRFM7O0FBR1QsaUJBQUssUUFBTCxDQUFjLEVBQWQsQ0FBaUIsUUFBakIsRUFBMkIsVUFBQyxLQUFELEVBQVc7QUFDbEMsc0JBQU0sY0FBTixHQURrQzs7QUFHbEMsb0JBQUksQ0FBQyxPQUFLLGlCQUFMLEVBQXdCO0FBQ3pCLDJCQUFLLFVBQUwsR0FEeUI7aUJBQTdCO2FBSHVCLENBQTNCLENBSFM7Ozs7dUNBWUU7QUFDWCxpQkFBSyxRQUFMLENBQWMsT0FBZCxHQURXOzs7O1dBdkNiOzs7a0JBNENTO0FBQ1gsVUFBTSxjQUFTLElBQVQsRUFBZTtBQUNqQixrQkFBVSxJQUFWLENBQWUsSUFBSSxRQUFKLENBQWEsSUFBYixDQUFmLEVBRGlCO0tBQWY7O0FBSU4sYUFBUyxtQkFBVztBQUNoQixrQkFBVSxPQUFWLENBQWtCLFVBQUMsUUFBRDttQkFBYyxTQUFTLFlBQVQ7U0FBZCxDQUFsQixDQURnQjtBQUVoQixvQkFBWSxFQUFaLENBRmdCO0tBQVgiLCJmaWxlIjoiYWpheC1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVsZWdhdGUgfSBmcm9tICdkb20tZGVsZWdhdGUnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnc3VwZXJhZ2VudCc7XG5pbXBvcnQgcHJvZ3Jlc3NCdXR0b24gZnJvbSAnLi9wcm9ncmVzcy1idXR0b24nO1xuXG5sZXQgaW5zdGFuY2VzID0gW107XG5cbmNsYXNzIEFqYXhGb3JtIHtcbiAgICBjb25zdHJ1Y3Rvcihmb3JtKSB7XG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgICAgIHRoaXMuYnV0dG9uID0gcHJvZ3Jlc3NCdXR0b24uY3JlYXRlKGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKSk7XG4gICAgICAgIHRoaXMucmVxdWVzdEluUHJvZ3Jlc3MgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBzdWJtaXRGb3JtKCkge1xuICAgICAgICB0aGlzLnJlcXVlc3RJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5idXR0b24uaGFuZGxlTG9hZGluZygpO1xuXG4gICAgICAgIHJlcXVlc3QucG9zdCh0aGlzLmZvcm0uYWN0aW9uKVxuICAgICAgICAgICAgLnR5cGUoJ2Zvcm0nKVxuICAgICAgICAgICAgLnNlbmQodGhpcy5mb3JtKVxuICAgICAgICAgICAgLmVuZCgoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0SW5Qcm9ncmVzcyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmhhbmRsZUNvbXBsZXRlKHRydWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmhhbmRsZUNvbXBsZXRlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gbmV3IERlbGVnYXRlKHRoaXMuZm9ybSk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5lci5vbignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVxdWVzdEluUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdEZvcm0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyLmRlc3Ryb3koKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbihmb3JtKSB7XG4gICAgICAgIGluc3RhbmNlcy5wdXNoKG5ldyBBamF4Rm9ybShmb3JtKSk7XG4gICAgfSxcblxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IGluc3RhbmNlLnVuYmluZEV2ZW50cygpKTtcbiAgICAgICAgaW5zdGFuY2VzID0gW107XG4gICAgfVxufVxuIl19