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
        paddingRight: 16
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

            if (success) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9tb2R1bGVzL3Byb2dyZXNzLWJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUdBLElBQU0sY0FBYyxhQUFkOztBQUVOLElBQUksWUFBWSxFQUFaO0lBQ0EsbUJBQW1CLHFCQUFVO0FBQ3pCLGNBQVUsR0FBVjtBQUNBLFVBQU0sU0FBTjtBQUNBLFlBQVE7QUFDSixzQkFBYyxFQUFkO0tBREo7Q0FIZSxDQUFuQjtJQU9BLG9CQUFvQixxQkFBVTtBQUMxQixjQUFVLEdBQVY7QUFDQSxZQUFRO0FBQ0osc0JBQWMsRUFBZDtLQURKO0NBRmdCLENBQXBCO0lBTUEsV0FBVyxxQkFBVTtBQUNqQixZQUFRO0FBQ0osaUJBQVMsQ0FBVDtBQUNBLGdCQUFRO0FBQ0osZ0JBQUksRUFBSjtBQUNBLGtCQUFNLFFBQU47U0FGSjtLQUZKO0NBRE8sQ0FBWDtJQVNBLFdBQVcsd0JBQWE7QUFDcEIsWUFBUTtBQUNKLGdCQUFRLENBQUMsR0FBRDtLQURaO0NBRE8sQ0FBWDtJQUtBLDBCQUEwQixxQkFBVTtBQUNoQyxZQUFRO0FBQ0osZ0JBQVEsT0FBUjtBQUNBLGdCQUFRLEdBQVI7S0FGSjtDQURzQixDQUExQjtJQU1BLHVCQUF1QixxQkFBVTtBQUM3QixXQUFPLEdBQVA7QUFDQSxZQUFRO0FBQ0osZ0JBQVEsR0FBUjtBQUNBLGlCQUFTLENBQVQ7S0FGSjtDQUZtQixDQUF2QjtJQU9BLGVBQWUscUJBQVU7QUFDckIsY0FBVSxHQUFWO0FBQ0EsWUFBUTtBQUNKLGdCQUFRLENBQVI7QUFDQSxpQkFBUyxDQUFUO0tBRko7Q0FGVyxDQUFmOztJQVFFO0FBQ0YsYUFERSxjQUNGLENBQVksTUFBWixFQUFvQjs4QkFEbEIsZ0JBQ2tCOztBQUNoQixhQUFLLGlCQUFMLEdBQXlCLEtBQXpCLENBRGdCOztBQUdoQixhQUFLLFlBQUwsR0FBb0IscUJBQVU7QUFDMUIscUJBQVMsTUFBVDtBQUNBLG9CQUFRO0FBQ0osOEJBQWM7d0JBQUc7MkJBQWMsZUFBSSxHQUFKLENBQVEsT0FBUixFQUFpQixjQUFqQjtpQkFBakI7YUFEbEI7U0FGZ0IsQ0FBcEIsQ0FIZ0I7QUFTaEIsYUFBSyxZQUFMLEdBQW9CLEtBQUssWUFBTCxDQUFrQixPQUFsQixDQUEwQixhQUExQixDQUF3QyxnQkFBeEMsQ0FBcEIsQ0FUZ0I7QUFVaEIsYUFBSyxlQUFMLEdBQXVCLHFCQUFVO0FBQzdCLHFCQUFTLEtBQUssWUFBTCxDQUFrQixjQUFsQixDQUFpQyxtQkFBakMsQ0FBVDtTQURtQixDQUF2QixDQVZnQjtBQWFoQixhQUFLLFlBQUwsR0FBb0IscUJBQVU7QUFDMUIscUJBQVMsS0FBSyxZQUFMLENBQWtCLGNBQWxCLENBQWlDLFdBQWpDLENBQVQ7U0FEZ0IsQ0FBcEIsQ0FiZ0I7S0FBcEI7O2lCQURFOzs4Q0FtQm9CO0FBQ2xCLGlCQUFLLGlCQUFMLEdBQXlCLElBQXpCLENBRGtCO0FBRWxCLGtDQUFTLEtBQUssWUFBTCxDQUFrQixPQUFsQixFQUEyQixXQUFwQyxFQUZrQjs7QUFJbEIsaUJBQUssWUFBTCxDQUFrQixLQUFsQixDQUF3QixnQkFBeEIsRUFKa0I7QUFLbEIsaUJBQUssZUFBTCxDQUFxQixLQUFyQixDQUEyQixRQUEzQixFQUNLLElBREwsQ0FDVSxRQURWLEVBTGtCOzs7OzZDQVNELFNBQVM7OztBQUMxQixnQkFBSSxPQUFKLEVBQWE7QUFDVCxxQkFBSyxlQUFMLENBQXFCLEtBQXJCLENBQTJCLHVCQUEzQixFQURTO0FBRVQscUJBQUssWUFBTCxDQUFrQixLQUFsQixDQUF3QixvQkFBeEIsRUFGUzthQUFiLE1BR087QUFDSCxxQkFBSyxlQUFMLENBQXFCLElBQXJCLEdBQTRCLEtBQTVCLENBQWtDLFlBQWxDLEVBQ0ssSUFETCxDQUNVLFlBQU07QUFDUiwwQkFBSyxZQUFMLENBQWtCLEtBQWxCLENBQXdCLGlCQUF4QixFQUNLLElBREwsQ0FDVTsrQkFBTSx5QkFBWSxNQUFLLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkIsV0FBdkM7cUJBQU4sQ0FEVixDQURRO2lCQUFOLENBRFYsQ0FERzthQUhQOzs7O1dBN0JGOzs7a0JBMENTO0FBQ1gsWUFBUSxnQkFBUyxNQUFULEVBQWlCO0FBQ3JCLGVBQU8sSUFBSSxjQUFKLENBQW1CLE1BQW5CLENBQVAsQ0FEcUI7S0FBakIiLCJmaWxlIjoicHJvZ3Jlc3MtYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzLCBBY3RvciwgVHdlZW4sIFNpbXVsYXRlIH0gZnJvbSAncG9wbW90aW9uJztcbmltcG9ydCB7IGFkZENsYXNzLCByZW1vdmVDbGFzcyB9IGZyb20gJ0Bwb2QtcG9pbnQvZG9tLW9wcyc7XG5cbmNvbnN0IElOX1BST0dSRVNTID0gJ2luLXByb2dyZXNzJztcblxudmFyIGluc3RhbmNlcyA9IFtdLFxuICAgIG9wZW5TcGFjZUZvckljb24gPSBuZXcgVHdlZW4oe1xuICAgICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgICBlYXNlOiAnYmFja091dCcsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiA1NVxuICAgICAgICB9XG4gICAgfSksXG4gICAgY2xvc2VTcGFjZUZvckljb24gPSBuZXcgVHdlZW4oe1xuICAgICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogMTZcbiAgICAgICAgfVxuICAgIH0pLFxuICAgIHNob3dJY29uID0gbmV3IFR3ZWVuKHtcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgbGVuZ3RoOiB7XG4gICAgICAgICAgICAgICAgdG86IDY1LFxuICAgICAgICAgICAgICAgIGVhc2U6ICdlYXNlSW4nXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KSxcbiAgICBzcGluSWNvbiA9IG5ldyBTaW11bGF0ZSh7XG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgcm90YXRlOiAtNDAwXG4gICAgICAgIH1cbiAgICB9KSxcbiAgICBwcm9ncmVzc0NvbXBsZXRlT3V0bGluZSA9IG5ldyBUd2Vlbih7XG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgcm90YXRlOiAnLT0xNTAnLFxuICAgICAgICAgICAgbGVuZ3RoOiAxMDBcbiAgICAgICAgfVxuICAgIH0pLFxuICAgIHByb2dyZXNzQ29tcGxldGVUaWNrID0gbmV3IFR3ZWVuKHtcbiAgICAgICAgZGVsYXk6IDE1MCxcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICBsZW5ndGg6IDEwMCxcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfVxuICAgIH0pLFxuICAgIHByb2dyZXNzSGlkZSA9IG5ldyBUd2Vlbih7XG4gICAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgbGVuZ3RoOiAwLFxuICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9XG4gICAgfSk7XG5cbmNsYXNzIFByb2dyZXNzQnV0dG9uIHtcbiAgICBjb25zdHJ1Y3RvcihidXR0b24pIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0SW5Qcm9ncmVzcyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uID0gbmV3IEFjdG9yKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGJ1dHRvbixcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogKHsgZWxlbWVudCB9KSA9PiBjc3MuZ2V0KGVsZW1lbnQsICdwYWRkaW5nUmlnaHQnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0ljb24gPSB0aGlzLnN1Ym1pdEJ1dHRvbi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcy1pY29uJyk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NPdXRsaW5lID0gbmV3IEFjdG9yKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMucHJvZ3Jlc3NJY29uLmdldEVsZW1lbnRCeUlkKCd0aWNrLW91dGxpbmUtcGF0aCcpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb2dyZXNzVGljayA9IG5ldyBBY3Rvcih7XG4gICAgICAgICAgICBlbGVtZW50OiB0aGlzLnByb2dyZXNzSWNvbi5nZXRFbGVtZW50QnlJZCgndGljay1wYXRoJylcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd1Byb2dyZXNzU3Bpbm5lcigpIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0SW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAgIGFkZENsYXNzKHRoaXMuc3VibWl0QnV0dG9uLmVsZW1lbnQsIElOX1BST0dSRVNTKTtcblxuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5zdGFydChvcGVuU3BhY2VGb3JJY29uKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc091dGxpbmUuc3RhcnQoc2hvd0ljb24pXG4gICAgICAgICAgICAudGhlbihzcGluSWNvbik7XG4gICAgfVxuXG4gICAgc2hvd1Byb2dyZXNzQ29tcGxldGUoc3VjY2Vzcykge1xuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc091dGxpbmUuc3RhcnQocHJvZ3Jlc3NDb21wbGV0ZU91dGxpbmUpO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1RpY2suc3RhcnQocHJvZ3Jlc3NDb21wbGV0ZVRpY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc091dGxpbmUuc3RvcCgpLnN0YXJ0KHByb2dyZXNzSGlkZSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLnN0YXJ0KGNsb3NlU3BhY2VGb3JJY29uKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gcmVtb3ZlQ2xhc3ModGhpcy5zdWJtaXRCdXR0b24uZWxlbWVudCwgSU5fUFJPR1JFU1MpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNyZWF0ZTogZnVuY3Rpb24oYnV0dG9uKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvZ3Jlc3NCdXR0b24oYnV0dG9uKTtcbiAgICB9XG59XG4iXX0=