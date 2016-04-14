'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
    function ProgressButton(button) {
        _classCallCheck(this, ProgressButton);

        this.requestInProgress = false;

        this.submitButton = new _popmotion.Actor({
            element: button,
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
    }]);

    return ProgressButton;
}();

exports.default = {
    create: function create(button) {
        return new ProgressButton(button);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9tb2R1bGVzL3Byb2dyZXNzLWJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUdBLElBQU0sY0FBYyxhQUFkOztBQUVOLElBQUksWUFBWSxFQUFaO0lBQ0EsbUJBQW1CLHFCQUFVO0FBQ3pCLGNBQVUsR0FBVjtBQUNBLFVBQU0sU0FBTjtBQUNBLFlBQVE7QUFDSixzQkFBYyxFQUFkO0tBREo7Q0FIZSxDQUFuQjtJQU9BLG9CQUFvQixxQkFBVTtBQUMxQixjQUFVLEdBQVY7QUFDQSxZQUFRO0FBQ0osc0JBQWMsRUFBZDtLQURKO0NBRmdCLENBQXBCO0lBTUEsV0FBVyxxQkFBVTtBQUNqQixZQUFRO0FBQ0osaUJBQVMsQ0FBVDtBQUNBLGdCQUFRO0FBQ0osZ0JBQUksRUFBSjtBQUNBLGtCQUFNLFFBQU47U0FGSjtLQUZKO0NBRE8sQ0FBWDtJQVNBLFdBQVcsd0JBQWE7QUFDcEIsWUFBUTtBQUNKLGdCQUFRLENBQUMsR0FBRDtLQURaO0NBRE8sQ0FBWDtJQUtBLDBCQUEwQixxQkFBVTtBQUNoQyxZQUFRO0FBQ0osZ0JBQVEsT0FBUjtBQUNBLGdCQUFRLEdBQVI7S0FGSjtDQURzQixDQUExQjtJQU1BLHVCQUF1QixxQkFBVTtBQUM3QixXQUFPLEdBQVA7QUFDQSxZQUFRO0FBQ0osZ0JBQVEsR0FBUjtBQUNBLGlCQUFTLENBQVQ7S0FGSjtDQUZtQixDQUF2QjtJQU9BLGVBQWUscUJBQVU7QUFDckIsY0FBVSxHQUFWO0FBQ0EsWUFBUTtBQUNKLGdCQUFRLENBQVI7QUFDQSxpQkFBUyxDQUFUO0tBRko7Q0FGVyxDQUFmOztJQVFFO0FBQ0YsYUFERSxjQUNGLENBQVksTUFBWixFQUFvQjs4QkFEbEIsZ0JBQ2tCOztBQUNoQixhQUFLLGlCQUFMLEdBQXlCLEtBQXpCLENBRGdCOztBQUdoQixhQUFLLFlBQUwsR0FBb0IscUJBQVU7QUFDMUIscUJBQVMsTUFBVDtBQUNBLG9CQUFRO0FBQ0osOEJBQWM7d0JBQUc7MkJBQWMsZUFBSSxHQUFKLENBQVEsT0FBUixFQUFpQixjQUFqQjtpQkFBakI7YUFEbEI7U0FGZ0IsQ0FBcEIsQ0FIZ0I7QUFTaEIsYUFBSyxZQUFMLEdBQW9CLEtBQUssWUFBTCxDQUFrQixPQUFsQixDQUEwQixhQUExQixDQUF3QyxnQkFBeEMsQ0FBcEIsQ0FUZ0I7QUFVaEIsYUFBSyxlQUFMLEdBQXVCLHFCQUFVO0FBQzdCLHFCQUFTLEtBQUssWUFBTCxDQUFrQixjQUFsQixDQUFpQyxtQkFBakMsQ0FBVDtTQURtQixDQUF2QixDQVZnQjtBQWFoQixhQUFLLFlBQUwsR0FBb0IscUJBQVU7QUFDMUIscUJBQVMsS0FBSyxZQUFMLENBQWtCLGNBQWxCLENBQWlDLFdBQWpDLENBQVQ7U0FEZ0IsQ0FBcEIsQ0FiZ0I7S0FBcEI7O2lCQURFOzs4Q0FtQm9CO0FBQ2xCLGlCQUFLLGlCQUFMLEdBQXlCLElBQXpCLENBRGtCO0FBRWxCLGtDQUFTLEtBQUssWUFBTCxDQUFrQixPQUFsQixFQUEyQixXQUFwQyxFQUZrQjs7QUFJbEIsaUJBQUssWUFBTCxDQUFrQixLQUFsQixDQUF3QixnQkFBeEIsRUFKa0I7QUFLbEIsaUJBQUssZUFBTCxDQUFxQixLQUFyQixDQUEyQixRQUEzQixFQUNLLElBREwsQ0FDVSxRQURWLEVBTGtCOzs7OzZDQVNELFNBQVM7OztBQUMxQixnQkFBSSxDQUFDLE9BQUQsRUFBVTtBQUNWLHFCQUFLLGVBQUwsQ0FBcUIsS0FBckIsQ0FBMkIsdUJBQTNCLEVBRFU7QUFFVixxQkFBSyxZQUFMLENBQWtCLEtBQWxCLENBQXdCLG9CQUF4QixFQUZVO2FBQWQsTUFHTztBQUNILHFCQUFLLGVBQUwsQ0FBcUIsSUFBckIsR0FBNEIsS0FBNUIsQ0FBa0MsWUFBbEMsRUFDSyxJQURMLENBQ1UsWUFBTTtBQUNSLDBCQUFLLFlBQUwsQ0FBa0IsS0FBbEIsQ0FBd0IsaUJBQXhCLEVBQ0ssSUFETCxDQUNVOytCQUFNLHlCQUFZLE1BQUssWUFBTCxDQUFrQixPQUFsQixFQUEyQixXQUF2QztxQkFBTixDQURWLENBRFE7aUJBQU4sQ0FEVixDQURHO2FBSFA7Ozs7V0E3QkY7OztrQkEwQ1M7QUFDWCxZQUFRLGdCQUFTLE1BQVQsRUFBaUI7QUFDckIsZUFBTyxJQUFJLGNBQUosQ0FBbUIsTUFBbkIsQ0FBUCxDQURxQjtLQUFqQiIsImZpbGUiOiJwcm9ncmVzcy1idXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MsIEFjdG9yLCBUd2VlbiwgU2ltdWxhdGUgfSBmcm9tICdwb3Btb3Rpb24nO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzIH0gZnJvbSAnQHBvZC1wb2ludC9kb20tb3BzJztcblxuY29uc3QgSU5fUFJPR1JFU1MgPSAnaW4tcHJvZ3Jlc3MnO1xuXG52YXIgaW5zdGFuY2VzID0gW10sXG4gICAgb3BlblNwYWNlRm9ySWNvbiA9IG5ldyBUd2Vlbih7XG4gICAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICAgIGVhc2U6ICdiYWNrT3V0JyxcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDU1XG4gICAgICAgIH1cbiAgICB9KSxcbiAgICBjbG9zZVNwYWNlRm9ySWNvbiA9IG5ldyBUd2Vlbih7XG4gICAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAzMFxuICAgICAgICB9XG4gICAgfSksXG4gICAgc2hvd0ljb24gPSBuZXcgVHdlZW4oe1xuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBsZW5ndGg6IHtcbiAgICAgICAgICAgICAgICB0bzogNjUsXG4gICAgICAgICAgICAgICAgZWFzZTogJ2Vhc2VJbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pLFxuICAgIHNwaW5JY29uID0gbmV3IFNpbXVsYXRlKHtcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICByb3RhdGU6IC00MDBcbiAgICAgICAgfVxuICAgIH0pLFxuICAgIHByb2dyZXNzQ29tcGxldGVPdXRsaW5lID0gbmV3IFR3ZWVuKHtcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICByb3RhdGU6ICctPTE1MCcsXG4gICAgICAgICAgICBsZW5ndGg6IDEwMFxuICAgICAgICB9XG4gICAgfSksXG4gICAgcHJvZ3Jlc3NDb21wbGV0ZVRpY2sgPSBuZXcgVHdlZW4oe1xuICAgICAgICBkZWxheTogMTUwLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIGxlbmd0aDogMTAwLFxuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9XG4gICAgfSksXG4gICAgcHJvZ3Jlc3NIaWRlID0gbmV3IFR3ZWVuKHtcbiAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICBsZW5ndGg6IDAsXG4gICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH1cbiAgICB9KTtcblxuY2xhc3MgUHJvZ3Jlc3NCdXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKGJ1dHRvbikge1xuICAgICAgICB0aGlzLnJlcXVlc3RJblByb2dyZXNzID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24gPSBuZXcgQWN0b3Ioe1xuICAgICAgICAgICAgZWxlbWVudDogYnV0dG9uLFxuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAoeyBlbGVtZW50IH0pID0+IGNzcy5nZXQoZWxlbWVudCwgJ3BhZGRpbmdSaWdodCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb2dyZXNzSWNvbiA9IHRoaXMuc3VibWl0QnV0dG9uLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWljb24nKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc091dGxpbmUgPSBuZXcgQWN0b3Ioe1xuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5wcm9ncmVzc0ljb24uZ2V0RWxlbWVudEJ5SWQoJ3RpY2stb3V0bGluZS1wYXRoJylcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NUaWNrID0gbmV3IEFjdG9yKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMucHJvZ3Jlc3NJY29uLmdldEVsZW1lbnRCeUlkKCd0aWNrLXBhdGgnKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93UHJvZ3Jlc3NTcGlubmVyKCkge1xuICAgICAgICB0aGlzLnJlcXVlc3RJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgYWRkQ2xhc3ModGhpcy5zdWJtaXRCdXR0b24uZWxlbWVudCwgSU5fUFJPR1JFU1MpO1xuXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLnN0YXJ0KG9wZW5TcGFjZUZvckljb24pO1xuICAgICAgICB0aGlzLnByb2dyZXNzT3V0bGluZS5zdGFydChzaG93SWNvbilcbiAgICAgICAgICAgIC50aGVuKHNwaW5JY29uKTtcbiAgICB9XG5cbiAgICBzaG93UHJvZ3Jlc3NDb21wbGV0ZShzdWNjZXNzKSB7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc091dGxpbmUuc3RhcnQocHJvZ3Jlc3NDb21wbGV0ZU91dGxpbmUpO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1RpY2suc3RhcnQocHJvZ3Jlc3NDb21wbGV0ZVRpY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc091dGxpbmUuc3RvcCgpLnN0YXJ0KHByb2dyZXNzSGlkZSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLnN0YXJ0KGNsb3NlU3BhY2VGb3JJY29uKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gcmVtb3ZlQ2xhc3ModGhpcy5zdWJtaXRCdXR0b24uZWxlbWVudCwgSU5fUFJPR1JFU1MpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNyZWF0ZTogZnVuY3Rpb24oYnV0dG9uKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvZ3Jlc3NCdXR0b24oYnV0dG9uKTtcbiAgICB9XG59XG4iXX0=