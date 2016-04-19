'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IS_LOADING = 'is-loading';
var IS_COMPLETE = 'is-complete';

var instances = [];

var ProgressButton = function () {
    function ProgressButton(button) {
        _classCallCheck(this, ProgressButton);

        this.button = button;
    }

    _createClass(ProgressButton, [{
        key: 'handleLoading',
        value: function handleLoading() {
            this.button.setAttribute('disabled', true);
            this.button.classList.add(IS_LOADING);
        }
    }, {
        key: 'handleComplete',
        value: function handleComplete(success) {
            this.button.classList.remove(IS_LOADING);

            if (success) {
                this.button.removeAttribute('disabled');
                this.button.classList.add(IS_COMPLETE);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzLWJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBTSxhQUFhLFlBQWI7QUFDTixJQUFNLGNBQWMsYUFBZDs7QUFFTixJQUFJLFlBQVksRUFBWjs7SUFFRTtBQUNGLGFBREUsY0FDRixDQUFZLE1BQVosRUFBb0I7OEJBRGxCLGdCQUNrQjs7QUFDaEIsYUFBSyxNQUFMLEdBQWMsTUFBZCxDQURnQjtLQUFwQjs7aUJBREU7O3dDQUtjO0FBQ1osaUJBQUssTUFBTCxDQUFZLFlBQVosQ0FBeUIsVUFBekIsRUFBcUMsSUFBckMsRUFEWTtBQUVaLGlCQUFLLE1BQUwsQ0FBWSxTQUFaLENBQXNCLEdBQXRCLENBQTBCLFVBQTFCLEVBRlk7Ozs7dUNBS0QsU0FBUztBQUNwQixpQkFBSyxNQUFMLENBQVksU0FBWixDQUFzQixNQUF0QixDQUE2QixVQUE3QixFQURvQjs7QUFHcEIsZ0JBQUksT0FBSixFQUFhO0FBQ1QscUJBQUssTUFBTCxDQUFZLGVBQVosQ0FBNEIsVUFBNUIsRUFEUztBQUVULHFCQUFLLE1BQUwsQ0FBWSxTQUFaLENBQXNCLEdBQXRCLENBQTBCLFdBQTFCLEVBRlM7YUFBYjs7OztXQWJGOzs7a0JBb0JTO0FBQ1gsWUFBUSxnQkFBUyxNQUFULEVBQWlCO0FBQ3JCLGVBQU8sSUFBSSxjQUFKLENBQW1CLE1BQW5CLENBQVAsQ0FEcUI7S0FBakIiLCJmaWxlIjoicHJvZ3Jlc3MtYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSVNfTE9BRElORyA9ICdpcy1sb2FkaW5nJztcbmNvbnN0IElTX0NPTVBMRVRFID0gJ2lzLWNvbXBsZXRlJztcblxubGV0IGluc3RhbmNlcyA9IFtdO1xuXG5jbGFzcyBQcm9ncmVzc0J1dHRvbiB7XG4gICAgY29uc3RydWN0b3IoYnV0dG9uKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uID0gYnV0dG9uO1xuICAgIH1cblxuICAgIGhhbmRsZUxvYWRpbmcoKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZChJU19MT0FESU5HKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDb21wbGV0ZShzdWNjZXNzKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoSVNfTE9BRElORyk7XG5cbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5hZGQoSVNfQ09NUExFVEUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY3JlYXRlOiBmdW5jdGlvbihidXR0b24pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9ncmVzc0J1dHRvbihidXR0b24pO1xuICAgIH1cbn1cbiJdfQ==