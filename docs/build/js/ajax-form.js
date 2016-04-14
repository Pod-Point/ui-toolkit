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

        this.requestInProgress = false;
        this.form = form;
        this.button = _progressButton2.default.create(form.querySelector('button[type="submit"]'));

        this.bindEvents();
    }

    _createClass(AjaxForm, [{
        key: 'submitForm',
        value: function submitForm() {
            var _this = this;

            this.requestInProgress = true;
            this.button.showProgressSpinner();

            _superagent2.default.post('/').type('form').send(this.form).end(function (error, response) {
                _this.requestInProgress = false;
                if (response && response.ok) {
                    _this.button.showProgressComplete(true);
                } else {
                    _this.button.showProgressComplete(false);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9tb2R1bGVzL2FqYXgtZm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsSUFBSSxZQUFZLEVBQVo7O0lBRUU7QUFDRixhQURFLFFBQ0YsQ0FBWSxJQUFaLEVBQWtCOzhCQURoQixVQUNnQjs7QUFDZCxhQUFLLGlCQUFMLEdBQXlCLEtBQXpCLENBRGM7QUFFZCxhQUFLLElBQUwsR0FBWSxJQUFaLENBRmM7QUFHZCxhQUFLLE1BQUwsR0FBYyx5QkFBZSxNQUFmLENBQXNCLEtBQUssYUFBTCxDQUFtQix1QkFBbkIsQ0FBdEIsQ0FBZCxDQUhjOztBQUtkLGFBQUssVUFBTCxHQUxjO0tBQWxCOztpQkFERTs7cUNBU1c7OztBQUNULGlCQUFLLGlCQUFMLEdBQXlCLElBQXpCLENBRFM7QUFFVCxpQkFBSyxNQUFMLENBQVksbUJBQVosR0FGUzs7QUFJVCxpQ0FDSyxJQURMLENBQ1UsR0FEVixFQUVLLElBRkwsQ0FFVSxNQUZWLEVBR0ssSUFITCxDQUdVLEtBQUssSUFBTCxDQUhWLENBSUssR0FKTCxDQUlTLFVBQUMsS0FBRCxFQUFRLFFBQVIsRUFBcUI7QUFDdEIsc0JBQUssaUJBQUwsR0FBeUIsS0FBekIsQ0FEc0I7QUFFdEIsb0JBQUksWUFBWSxTQUFTLEVBQVQsRUFBYTtBQUN6QiwwQkFBSyxNQUFMLENBQVksb0JBQVosQ0FBaUMsSUFBakMsRUFEeUI7aUJBQTdCLE1BRU87QUFDSCwwQkFBSyxNQUFMLENBQVksb0JBQVosQ0FBaUMsS0FBakMsRUFERztpQkFGUDthQUZDLENBSlQsQ0FKUzs7OztxQ0FrQkE7OztBQUNULGlCQUFLLFFBQUwsR0FBZ0IsMEJBQWEsS0FBSyxJQUFMLENBQTdCLENBRFM7O0FBR1QsaUJBQUssUUFBTCxDQUFjLEVBQWQsQ0FBaUIsUUFBakIsRUFBMkIsVUFBQyxLQUFELEVBQVc7QUFDbEMsc0JBQU0sY0FBTixHQURrQztBQUVsQyxvQkFBSSxDQUFDLE9BQUssaUJBQUwsRUFBd0I7QUFDekIsMkJBQUssVUFBTCxHQUR5QjtpQkFBN0I7YUFGdUIsQ0FBM0IsQ0FIUzs7Ozt1Q0FXRTtBQUNYLGlCQUFLLFFBQUwsQ0FBYyxPQUFkLEdBRFc7Ozs7V0F0Q2I7OztrQkEyQ1M7QUFDWCxVQUFNLGNBQVMsSUFBVCxFQUFlO0FBQ2pCLGtCQUFVLElBQVYsQ0FBZSxJQUFJLFFBQUosQ0FBYSxJQUFiLENBQWYsRUFEaUI7S0FBZjs7QUFJTixhQUFTLG1CQUFXO0FBQ2hCLGtCQUFVLE9BQVYsQ0FBa0IsVUFBQyxRQUFEO21CQUFjLFNBQVMsWUFBVDtTQUFkLENBQWxCLENBRGdCO0FBRWhCLG9CQUFZLEVBQVosQ0FGZ0I7S0FBWCIsImZpbGUiOiJhamF4LWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWxlZ2F0ZSB9IGZyb20gJ2RvbS1kZWxlZ2F0ZSc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICdzdXBlcmFnZW50JztcbmltcG9ydCBwcm9ncmVzc0J1dHRvbiBmcm9tICcuL3Byb2dyZXNzLWJ1dHRvbic7XG5cbnZhciBpbnN0YW5jZXMgPSBbXTtcblxuY2xhc3MgQWpheEZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKGZvcm0pIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0SW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IHByb2dyZXNzQnV0dG9uLmNyZWF0ZShmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHN1Ym1pdEZvcm0oKSB7XG4gICAgICAgIHRoaXMucmVxdWVzdEluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICB0aGlzLmJ1dHRvbi5zaG93UHJvZ3Jlc3NTcGlubmVyKCk7XG5cbiAgICAgICAgcmVxdWVzdFxuICAgICAgICAgICAgLnBvc3QoJy8nKVxuICAgICAgICAgICAgLnR5cGUoJ2Zvcm0nKVxuICAgICAgICAgICAgLnNlbmQodGhpcy5mb3JtKVxuICAgICAgICAgICAgLmVuZCgoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0SW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbi5zaG93UHJvZ3Jlc3NDb21wbGV0ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbi5zaG93UHJvZ3Jlc3NDb21wbGV0ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IG5ldyBEZWxlZ2F0ZSh0aGlzLmZvcm0pO1xuXG4gICAgICAgIHRoaXMubGlzdGVuZXIub24oJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5yZXF1ZXN0SW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0Rm9ybSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXIuZGVzdHJveSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKGZvcm0pIHtcbiAgICAgICAgaW5zdGFuY2VzLnB1c2gobmV3IEFqYXhGb3JtKGZvcm0pKTtcbiAgICB9LFxuXG4gICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4gaW5zdGFuY2UudW5iaW5kRXZlbnRzKCkpO1xuICAgICAgICBpbnN0YW5jZXMgPSBbXTtcbiAgICB9XG59XG4iXX0=