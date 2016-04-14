'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domDelegate = require('dom-delegate');

var _popmotion = require('popmotion');

var _domOps = require('@pod-point/dom-ops');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IN_PROGRESS = 'in-progress';

var instances = [],
    openSpaceForIcon = new _popmotion.Tween({
    duration: 400,
    ease: 'backOut',
    values: {
        paddingRight: 55
    }
}),
    closeSpaceForIcon = new _popmotion.Tween({
    duration: 400,
    values: {
        paddingRight: 30
    }
}),
    showIcon = new _popmotion.Tween({
    values: {
        opacity: 1,
        length: {
            to: 65,
            ease: 'easeIn'
        }
    }
}),
    spinIcon = new _popmotion.Simulate({
    values: {
        rotate: -400
    }
}),
    progressCompleteOutline = new _popmotion.Tween({
    values: {
        rotate: '-=150',
        length: 100
    }
}),
    progressCompleteTick = new _popmotion.Tween({
    delay: 150,
    values: {
        length: 100,
        opacity: 1
    }
}),
    progressHide = new _popmotion.Tween({
    duration: 400,
    values: {
        length: 0,
        opacity: 0
    }
});

var ProgressButton = function () {
    function ProgressButton(form) {
        _classCallCheck(this, ProgressButton);

        this.requestInProgress = false;

        this.form = form;
        this.submitButton = new _popmotion.Actor({
            element: form.querySelector('button[type="submit"]'),
            values: {
                paddingRight: function paddingRight(_ref) {
                    var element = _ref.element;
                    return _popmotion.css.get(element, 'paddingRight');
                }
            }
        });
        this.progressIcon = this.submitButton.element.querySelector('.progress-icon');
        this.progressOutline = new _popmotion.Actor({
            element: this.progressIcon.getElementById('tick-outline-path')
        });
        this.progressTick = new _popmotion.Actor({
            element: this.progressIcon.getElementById('tick-path')
        });

        this.bindEvents();
    }

    _createClass(ProgressButton, [{
        key: 'showProgressSpinner',
        value: function showProgressSpinner() {
            this.requestInProgress = true;
            (0, _domOps.addClass)(this.submitButton.element, IN_PROGRESS);

            this.submitButton.start(openSpaceForIcon);
            this.progressOutline.start(showIcon).then(spinIcon);
        }
    }, {
        key: 'showProgressComplete',
        value: function showProgressComplete(success) {
            var _this = this;

            if (!success) {
                this.progressOutline.start(progressCompleteOutline);
                this.progressTick.start(progressCompleteTick);
            } else {
                this.progressOutline.stop().start(progressHide).then(function () {
                    _this.submitButton.start(closeSpaceForIcon).then(function () {
                        return (0, _domOps.removeClass)(_this.submitButton.element, IN_PROGRESS);
                    });
                });
            }
        }
    }, {
        key: 'bindEvents',
        value: function bindEvents() {
            var _this2 = this;

            this.listener = new _domDelegate.Delegate(this.form);

            this.listener.on('submit', function () {
                if (!_this2.requestInProgress) {
                    _this2.showProgressSpinner();
                }
            });
        }
    }, {
        key: 'unbindEvents',
        value: function unbindEvents() {
            this.listener.destroy();
        }
    }]);

    return ProgressButton;
}();

exports.default = {
    init: function init(form) {
        instances.push(new ProgressButton(form));
    },

    destroy: function destroy() {
        instances.forEach(function (instance) {
            return instance.unbindEvents();
        });
        instances = [];
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9tb2R1bGVzL3Byb2dyZXNzLWJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsSUFBTSxjQUFjLGFBQWQ7O0FBRU4sSUFBSSxZQUFZLEVBQVo7SUFDQSxtQkFBbUIscUJBQVU7QUFDekIsY0FBVSxHQUFWO0FBQ0EsVUFBTSxTQUFOO0FBQ0EsWUFBUTtBQUNKLHNCQUFjLEVBQWQ7S0FESjtDQUhlLENBQW5CO0lBT0Esb0JBQW9CLHFCQUFVO0FBQzFCLGNBQVUsR0FBVjtBQUNBLFlBQVE7QUFDSixzQkFBYyxFQUFkO0tBREo7Q0FGZ0IsQ0FBcEI7SUFNQSxXQUFXLHFCQUFVO0FBQ2pCLFlBQVE7QUFDSixpQkFBUyxDQUFUO0FBQ0EsZ0JBQVE7QUFDSixnQkFBSSxFQUFKO0FBQ0Esa0JBQU0sUUFBTjtTQUZKO0tBRko7Q0FETyxDQUFYO0lBU0EsV0FBVyx3QkFBYTtBQUNwQixZQUFRO0FBQ0osZ0JBQVEsQ0FBQyxHQUFEO0tBRFo7Q0FETyxDQUFYO0lBS0EsMEJBQTBCLHFCQUFVO0FBQ2hDLFlBQVE7QUFDSixnQkFBUSxPQUFSO0FBQ0EsZ0JBQVEsR0FBUjtLQUZKO0NBRHNCLENBQTFCO0lBTUEsdUJBQXVCLHFCQUFVO0FBQzdCLFdBQU8sR0FBUDtBQUNBLFlBQVE7QUFDSixnQkFBUSxHQUFSO0FBQ0EsaUJBQVMsQ0FBVDtLQUZKO0NBRm1CLENBQXZCO0lBT0EsZUFBZSxxQkFBVTtBQUNyQixjQUFVLEdBQVY7QUFDQSxZQUFRO0FBQ0osZ0JBQVEsQ0FBUjtBQUNBLGlCQUFTLENBQVQ7S0FGSjtDQUZXLENBQWY7O0lBUUU7QUFDRixhQURFLGNBQ0YsQ0FBWSxJQUFaLEVBQWtCOzhCQURoQixnQkFDZ0I7O0FBQ2QsYUFBSyxpQkFBTCxHQUF5QixLQUF6QixDQURjOztBQUdkLGFBQUssSUFBTCxHQUFZLElBQVosQ0FIYztBQUlkLGFBQUssWUFBTCxHQUFvQixxQkFBVTtBQUMxQixxQkFBUyxLQUFLLGFBQUwsQ0FBbUIsdUJBQW5CLENBQVQ7QUFDQSxvQkFBUTtBQUNKLDhCQUFjO3dCQUFHOzJCQUFjLGVBQUksR0FBSixDQUFRLE9BQVIsRUFBaUIsY0FBakI7aUJBQWpCO2FBRGxCO1NBRmdCLENBQXBCLENBSmM7QUFVZCxhQUFLLFlBQUwsR0FBb0IsS0FBSyxZQUFMLENBQWtCLE9BQWxCLENBQTBCLGFBQTFCLENBQXdDLGdCQUF4QyxDQUFwQixDQVZjO0FBV2QsYUFBSyxlQUFMLEdBQXVCLHFCQUFVO0FBQzdCLHFCQUFTLEtBQUssWUFBTCxDQUFrQixjQUFsQixDQUFpQyxtQkFBakMsQ0FBVDtTQURtQixDQUF2QixDQVhjO0FBY2QsYUFBSyxZQUFMLEdBQW9CLHFCQUFVO0FBQzFCLHFCQUFTLEtBQUssWUFBTCxDQUFrQixjQUFsQixDQUFpQyxXQUFqQyxDQUFUO1NBRGdCLENBQXBCLENBZGM7O0FBa0JkLGFBQUssVUFBTCxHQWxCYztLQUFsQjs7aUJBREU7OzhDQXNCb0I7QUFDbEIsaUJBQUssaUJBQUwsR0FBeUIsSUFBekIsQ0FEa0I7QUFFbEIsa0NBQVMsS0FBSyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLFdBQXBDLEVBRmtCOztBQUlsQixpQkFBSyxZQUFMLENBQWtCLEtBQWxCLENBQXdCLGdCQUF4QixFQUprQjtBQUtsQixpQkFBSyxlQUFMLENBQXFCLEtBQXJCLENBQTJCLFFBQTNCLEVBQ0ssSUFETCxDQUNVLFFBRFYsRUFMa0I7Ozs7NkNBU0QsU0FBUzs7O0FBQzFCLGdCQUFJLENBQUMsT0FBRCxFQUFVO0FBQ1YscUJBQUssZUFBTCxDQUFxQixLQUFyQixDQUEyQix1QkFBM0IsRUFEVTtBQUVWLHFCQUFLLFlBQUwsQ0FBa0IsS0FBbEIsQ0FBd0Isb0JBQXhCLEVBRlU7YUFBZCxNQUdPO0FBQ0gscUJBQUssZUFBTCxDQUFxQixJQUFyQixHQUE0QixLQUE1QixDQUFrQyxZQUFsQyxFQUNLLElBREwsQ0FDVSxZQUFNO0FBQ1IsMEJBQUssWUFBTCxDQUFrQixLQUFsQixDQUF3QixpQkFBeEIsRUFDSyxJQURMLENBQ1U7K0JBQU0seUJBQVksTUFBSyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLFdBQXZDO3FCQUFOLENBRFYsQ0FEUTtpQkFBTixDQURWLENBREc7YUFIUDs7OztxQ0FZUzs7O0FBQ1QsaUJBQUssUUFBTCxHQUFnQiwwQkFBYSxLQUFLLElBQUwsQ0FBN0IsQ0FEUzs7QUFHVCxpQkFBSyxRQUFMLENBQWMsRUFBZCxDQUFpQixRQUFqQixFQUEyQixZQUFNO0FBQzdCLG9CQUFJLENBQUMsT0FBSyxpQkFBTCxFQUF3QjtBQUN6QiwyQkFBSyxtQkFBTCxHQUR5QjtpQkFBN0I7YUFEdUIsQ0FBM0IsQ0FIUzs7Ozt1Q0FVRTtBQUNYLGlCQUFLLFFBQUwsQ0FBYyxPQUFkLEdBRFc7Ozs7V0F0RGI7OztrQkEyRFM7QUFDWCxVQUFNLGNBQVMsSUFBVCxFQUFlO0FBQ2pCLGtCQUFVLElBQVYsQ0FBZSxJQUFJLGNBQUosQ0FBbUIsSUFBbkIsQ0FBZixFQURpQjtLQUFmOztBQUlOLGFBQVMsbUJBQVc7QUFDaEIsa0JBQVUsT0FBVixDQUFrQixVQUFDLFFBQUQ7bUJBQWMsU0FBUyxZQUFUO1NBQWQsQ0FBbEIsQ0FEZ0I7QUFFaEIsb0JBQVksRUFBWixDQUZnQjtLQUFYIiwiZmlsZSI6InByb2dyZXNzLWJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlbGVnYXRlIH0gZnJvbSAnZG9tLWRlbGVnYXRlJztcbmltcG9ydCB7IGNzcywgQWN0b3IsIFR3ZWVuLCBTaW11bGF0ZSB9IGZyb20gJ3BvcG1vdGlvbic7XG5pbXBvcnQgeyBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MgfSBmcm9tICdAcG9kLXBvaW50L2RvbS1vcHMnO1xuXG5jb25zdCBJTl9QUk9HUkVTUyA9ICdpbi1wcm9ncmVzcyc7XG5cbnZhciBpbnN0YW5jZXMgPSBbXSxcbiAgICBvcGVuU3BhY2VGb3JJY29uID0gbmV3IFR3ZWVuKHtcbiAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgZWFzZTogJ2JhY2tPdXQnLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogNTVcbiAgICAgICAgfVxuICAgIH0pLFxuICAgIGNsb3NlU3BhY2VGb3JJY29uID0gbmV3IFR3ZWVuKHtcbiAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDMwXG4gICAgICAgIH1cbiAgICB9KSxcbiAgICBzaG93SWNvbiA9IG5ldyBUd2Vlbih7XG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGxlbmd0aDoge1xuICAgICAgICAgICAgICAgIHRvOiA2NSxcbiAgICAgICAgICAgICAgICBlYXNlOiAnZWFzZUluJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSksXG4gICAgc3Bpbkljb24gPSBuZXcgU2ltdWxhdGUoe1xuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIHJvdGF0ZTogLTQwMFxuICAgICAgICB9XG4gICAgfSksXG4gICAgcHJvZ3Jlc3NDb21wbGV0ZU91dGxpbmUgPSBuZXcgVHdlZW4oe1xuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIHJvdGF0ZTogJy09MTUwJyxcbiAgICAgICAgICAgIGxlbmd0aDogMTAwXG4gICAgICAgIH1cbiAgICB9KSxcbiAgICBwcm9ncmVzc0NvbXBsZXRlVGljayA9IG5ldyBUd2Vlbih7XG4gICAgICAgIGRlbGF5OiAxNTAsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgbGVuZ3RoOiAxMDAsXG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH1cbiAgICB9KSxcbiAgICBwcm9ncmVzc0hpZGUgPSBuZXcgVHdlZW4oe1xuICAgICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIGxlbmd0aDogMCxcbiAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfVxuICAgIH0pO1xuXG5jbGFzcyBQcm9ncmVzc0J1dHRvbiB7XG4gICAgY29uc3RydWN0b3IoZm9ybSkge1xuICAgICAgICB0aGlzLnJlcXVlc3RJblByb2dyZXNzID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24gPSBuZXcgQWN0b3Ioe1xuICAgICAgICAgICAgZWxlbWVudDogZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLFxuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAoeyBlbGVtZW50IH0pID0+IGNzcy5nZXQoZWxlbWVudCwgJ3BhZGRpbmdSaWdodCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb2dyZXNzSWNvbiA9IHRoaXMuc3VibWl0QnV0dG9uLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWljb24nKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc091dGxpbmUgPSBuZXcgQWN0b3Ioe1xuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5wcm9ncmVzc0ljb24uZ2V0RWxlbWVudEJ5SWQoJ3RpY2stb3V0bGluZS1wYXRoJylcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NUaWNrID0gbmV3IEFjdG9yKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMucHJvZ3Jlc3NJY29uLmdldEVsZW1lbnRCeUlkKCd0aWNrLXBhdGgnKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBzaG93UHJvZ3Jlc3NTcGlubmVyKCkge1xuICAgICAgICB0aGlzLnJlcXVlc3RJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgYWRkQ2xhc3ModGhpcy5zdWJtaXRCdXR0b24uZWxlbWVudCwgSU5fUFJPR1JFU1MpO1xuXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLnN0YXJ0KG9wZW5TcGFjZUZvckljb24pO1xuICAgICAgICB0aGlzLnByb2dyZXNzT3V0bGluZS5zdGFydChzaG93SWNvbilcbiAgICAgICAgICAgIC50aGVuKHNwaW5JY29uKTtcbiAgICB9XG5cbiAgICBzaG93UHJvZ3Jlc3NDb21wbGV0ZShzdWNjZXNzKSB7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc091dGxpbmUuc3RhcnQocHJvZ3Jlc3NDb21wbGV0ZU91dGxpbmUpO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1RpY2suc3RhcnQocHJvZ3Jlc3NDb21wbGV0ZVRpY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc091dGxpbmUuc3RvcCgpLnN0YXJ0KHByb2dyZXNzSGlkZSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLnN0YXJ0KGNsb3NlU3BhY2VGb3JJY29uKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gcmVtb3ZlQ2xhc3ModGhpcy5zdWJtaXRCdXR0b24uZWxlbWVudCwgSU5fUFJPR1JFU1MpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBuZXcgRGVsZWdhdGUodGhpcy5mb3JtKTtcblxuICAgICAgICB0aGlzLmxpc3RlbmVyLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucmVxdWVzdEluUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQcm9ncmVzc1NwaW5uZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyLmRlc3Ryb3koKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbihmb3JtKSB7XG4gICAgICAgIGluc3RhbmNlcy5wdXNoKG5ldyBQcm9ncmVzc0J1dHRvbihmb3JtKSk7XG4gICAgfSxcblxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IGluc3RhbmNlLnVuYmluZEV2ZW50cygpKTtcbiAgICAgICAgaW5zdGFuY2VzID0gW107XG4gICAgfVxufVxuIl19