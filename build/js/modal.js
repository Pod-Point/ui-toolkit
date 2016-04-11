'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domDelegate = require('dom-delegate');

var _domOps = require('@pod-point/dom-ops');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instances = [];

var Modal = function () {

    /**
     * Creates a new modal.
     *
     * @param element
     */

    function Modal(element) {
        _classCallCheck(this, Modal);

        this.openButton = element;
        this.closeButton = (0, _domOps.selectFirst)('.modal-close', this.modal);
        this.modal = (0, _domOps.selectFirst)('#' + this.openButton.dataset.modal);
        this.overlay = this.getModalOverlay();

        this.bindOpenEvent();
        this.bindCloseEvent();
    }

    /**
     * Get the modal's overlay.
     *
     * @returns {*}
     */


    _createClass(Modal, [{
        key: 'getModalOverlay',
        value: function getModalOverlay() {
            for (var i = 0; i < this.modal.childNodes.length; i++) {
                if (this.modal.childNodes[i].className == 'modal__overlay') {
                    return this.modal.childNodes[i];
                }
            }

            return null;
        }

        /**
         * Binds open modal event.
         */

    }, {
        key: 'bindOpenEvent',
        value: function bindOpenEvent() {
            var _this = this;

            this.openListener = new _domDelegate.Delegate(this.openButton);

            this.openListener.on('click', function (event) {
                _this.doModal(event);
            });
        }

        /**
         * Bind the close modal event to the close button.
         */

    }, {
        key: 'bindCloseEvent',
        value: function bindCloseEvent() {
            var _this2 = this;

            this.closeListener = new _domDelegate.Delegate(this.closeButton);

            this.closeListener.on('click', function (event) {
                _this2.closeModal(event);
            });

            this.overlayListener = new _domDelegate.Delegate(this.overlay);

            this.overlayListener.on('click', function (event) {
                _this2.closeModal(event);
            });
        }

        /**
         * Unbinds the event listeners from the elements.
         */

    }, {
        key: 'unbindEvents',
        value: function unbindEvents() {
            this.openListener.destroy();
            this.closeListener.destroy();
            this.overlayListener.destroy();
        }

        /**
         * Opens the modal
         * @param {Event} event
         */

    }, {
        key: 'doModal',
        value: function doModal(event) {
            event.preventDefault();

            var elements = [this.overlay, this.modal];

            for (var i = 0; i < elements.length; i++) {
                if (elements[i].style.display === 'none' || !elements[i].style.display) {
                    elements[i].style.display = 'block';
                } else {
                    elements[i].style.display = 'none';
                }
            }
        }

        /**
         * Closes the modal
         * @param {Event} event
         */

    }, {
        key: 'closeModal',
        value: function closeModal(event) {
            event.preventDefault();

            var elements = [this.overlay, this.modal];

            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = 'none';
            }
        }
    }]);

    return Modal;
}();

exports.default = {
    init: function init(element) {
        instances.push(new Modal(element));
    },

    destroy: function destroy() {
        instances.forEach(function (instance) {
            return instance.unbindEvents();
        });
        instances = [];
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9tb2R1bGVzL21vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBSSxZQUFZLEVBQVo7O0lBRUU7Ozs7Ozs7O0FBT0YsYUFQRSxLQU9GLENBQVksT0FBWixFQUFxQjs4QkFQbkIsT0FPbUI7O0FBQ2pCLGFBQUssVUFBTCxHQUFrQixPQUFsQixDQURpQjtBQUVqQixhQUFLLFdBQUwsR0FBbUIseUJBQVksY0FBWixFQUE0QixLQUFLLEtBQUwsQ0FBL0MsQ0FGaUI7QUFHakIsYUFBSyxLQUFMLEdBQWEseUJBQVksTUFBTSxLQUFLLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBd0IsS0FBeEIsQ0FBL0IsQ0FIaUI7QUFJakIsYUFBSyxPQUFMLEdBQWUsS0FBSyxlQUFMLEVBQWYsQ0FKaUI7O0FBTWpCLGFBQUssYUFBTCxHQU5pQjtBQU9qQixhQUFLLGNBQUwsR0FQaUI7S0FBckI7Ozs7Ozs7OztpQkFQRTs7MENBc0JnQjtBQUNkLGlCQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxLQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLE1BQXRCLEVBQThCLEdBQWxELEVBQXVEO0FBQ25ELG9CQUFJLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsQ0FBdEIsRUFBeUIsU0FBekIsSUFBc0MsZ0JBQXRDLEVBQXdEO0FBQ3hELDJCQUFPLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsQ0FBdEIsQ0FBUCxDQUR3RDtpQkFBNUQ7YUFESjs7QUFNQSxtQkFBTyxJQUFQLENBUGM7Ozs7Ozs7Ozt3Q0FhRjs7O0FBQ1osaUJBQUssWUFBTCxHQUFvQiwwQkFBYSxLQUFLLFVBQUwsQ0FBakMsQ0FEWTs7QUFHWixpQkFBSyxZQUFMLENBQWtCLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFVBQUMsS0FBRCxFQUFXO0FBQ3JDLHNCQUFLLE9BQUwsQ0FBYSxLQUFiLEVBRHFDO2FBQVgsQ0FBOUIsQ0FIWTs7Ozs7Ozs7O3lDQVdDOzs7QUFDYixpQkFBSyxhQUFMLEdBQXFCLDBCQUFhLEtBQUssV0FBTCxDQUFsQyxDQURhOztBQUdiLGlCQUFLLGFBQUwsQ0FBbUIsRUFBbkIsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBQyxLQUFELEVBQVc7QUFDdEMsdUJBQUssVUFBTCxDQUFnQixLQUFoQixFQURzQzthQUFYLENBQS9CLENBSGE7O0FBT2IsaUJBQUssZUFBTCxHQUF1QiwwQkFBYSxLQUFLLE9BQUwsQ0FBcEMsQ0FQYTs7QUFTYixpQkFBSyxlQUFMLENBQXFCLEVBQXJCLENBQXdCLE9BQXhCLEVBQWlDLFVBQUMsS0FBRCxFQUFXO0FBQ3hDLHVCQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsRUFEd0M7YUFBWCxDQUFqQyxDQVRhOzs7Ozs7Ozs7dUNBaUJGO0FBQ1gsaUJBQUssWUFBTCxDQUFrQixPQUFsQixHQURXO0FBRVgsaUJBQUssYUFBTCxDQUFtQixPQUFuQixHQUZXO0FBR1gsaUJBQUssZUFBTCxDQUFxQixPQUFyQixHQUhXOzs7Ozs7Ozs7O2dDQVVQLE9BQU87QUFDWCxrQkFBTSxjQUFOLEdBRFc7O0FBR1gsZ0JBQUksV0FBVyxDQUNYLEtBQUssT0FBTCxFQUNBLEtBQUssS0FBTCxDQUZBLENBSE87O0FBUVgsaUJBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLFNBQVMsTUFBVCxFQUFpQixHQUFyQyxFQUEwQztBQUN0QyxvQkFBSSxTQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEtBQThCLE1BQTlCLElBQXdDLENBQUMsU0FBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixFQUEyQjtBQUNwRSw2QkFBUyxDQUFULEVBQVksS0FBWixDQUFrQixPQUFsQixHQUE0QixPQUE1QixDQURvRTtpQkFBeEUsTUFFTztBQUNILDZCQUFTLENBQVQsRUFBWSxLQUFaLENBQWtCLE9BQWxCLEdBQTRCLE1BQTVCLENBREc7aUJBRlA7YUFESjs7Ozs7Ozs7OzttQ0FhTyxPQUFPO0FBQ2Qsa0JBQU0sY0FBTixHQURjOztBQUdkLGdCQUFJLFdBQVcsQ0FDWCxLQUFLLE9BQUwsRUFDQSxLQUFLLEtBQUwsQ0FGQSxDQUhVOztBQVFkLGlCQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxTQUFTLE1BQVQsRUFBaUIsR0FBckMsRUFBMEM7QUFDdEMseUJBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBa0IsT0FBbEIsR0FBNEIsTUFBNUIsQ0FEc0M7YUFBMUM7Ozs7V0F0R0Y7OztrQkE0R1M7QUFDWCxVQUFNLGNBQVMsT0FBVCxFQUFrQjtBQUNwQixrQkFBVSxJQUFWLENBQWUsSUFBSSxLQUFKLENBQVUsT0FBVixDQUFmLEVBRG9CO0tBQWxCOztBQUlOLGFBQVMsbUJBQVc7QUFDaEIsa0JBQVUsT0FBVixDQUFrQixVQUFDLFFBQUQ7bUJBQWMsU0FBUyxZQUFUO1NBQWQsQ0FBbEIsQ0FEZ0I7QUFFaEIsb0JBQVksRUFBWixDQUZnQjtLQUFYIiwiZmlsZSI6Im1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVsZWdhdGUgfSBmcm9tICdkb20tZGVsZWdhdGUnO1xuaW1wb3J0IHsgc2VsZWN0Rmlyc3QgfSBmcm9tICdAcG9kLXBvaW50L2RvbS1vcHMnO1xuXG5sZXQgaW5zdGFuY2VzID0gW107XG5cbmNsYXNzIE1vZGFsIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgbW9kYWwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5vcGVuQnV0dG9uID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbiA9IHNlbGVjdEZpcnN0KCcubW9kYWwtY2xvc2UnLCB0aGlzLm1vZGFsKTtcbiAgICAgICAgdGhpcy5tb2RhbCA9IHNlbGVjdEZpcnN0KCcjJyArIHRoaXMub3BlbkJ1dHRvbi5kYXRhc2V0Lm1vZGFsKTtcbiAgICAgICAgdGhpcy5vdmVybGF5ID0gdGhpcy5nZXRNb2RhbE92ZXJsYXkoKTtcblxuICAgICAgICB0aGlzLmJpbmRPcGVuRXZlbnQoKTtcbiAgICAgICAgdGhpcy5iaW5kQ2xvc2VFdmVudCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbW9kYWwncyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0TW9kYWxPdmVybGF5KCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubW9kYWwuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMubW9kYWwuY2hpbGROb2Rlc1tpXS5jbGFzc05hbWUgPT0gJ21vZGFsX19vdmVybGF5Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGFsLmNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBvcGVuIG1vZGFsIGV2ZW50LlxuICAgICAqL1xuICAgIGJpbmRPcGVuRXZlbnQoKSB7XG4gICAgICAgIHRoaXMub3Blbkxpc3RlbmVyID0gbmV3IERlbGVnYXRlKHRoaXMub3BlbkJ1dHRvbik7XG5cbiAgICAgICAgdGhpcy5vcGVuTGlzdGVuZXIub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRvTW9kYWwoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIHRoZSBjbG9zZSBtb2RhbCBldmVudCB0byB0aGUgY2xvc2UgYnV0dG9uLlxuICAgICAqL1xuICAgIGJpbmRDbG9zZUV2ZW50KCkge1xuICAgICAgICB0aGlzLmNsb3NlTGlzdGVuZXIgPSBuZXcgRGVsZWdhdGUodGhpcy5jbG9zZUJ1dHRvbik7XG5cbiAgICAgICAgdGhpcy5jbG9zZUxpc3RlbmVyLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vdmVybGF5TGlzdGVuZXIgPSBuZXcgRGVsZWdhdGUodGhpcy5vdmVybGF5KTtcblxuICAgICAgICB0aGlzLm92ZXJsYXlMaXN0ZW5lci5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbChldmVudCk7XG4gICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5iaW5kcyB0aGUgZXZlbnQgbGlzdGVuZXJzIGZyb20gdGhlIGVsZW1lbnRzLlxuICAgICAqL1xuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5vcGVuTGlzdGVuZXIuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmNsb3NlTGlzdGVuZXIuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLm92ZXJsYXlMaXN0ZW5lci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgdGhlIG1vZGFsXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBkb01vZGFsKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyIGVsZW1lbnRzID0gW1xuICAgICAgICAgICAgdGhpcy5vdmVybGF5LFxuICAgICAgICAgICAgdGhpcy5tb2RhbFxuICAgICAgICBdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50c1tpXS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgfHwgIWVsZW1lbnRzW2ldLnN0eWxlLmRpc3BsYXkpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGUgbW9kYWxcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGNsb3NlTW9kYWwoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgZWxlbWVudHMgPSBbXG4gICAgICAgICAgICB0aGlzLm92ZXJsYXksXG4gICAgICAgICAgICB0aGlzLm1vZGFsXG4gICAgICAgIF07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZWxlbWVudHNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgaW5zdGFuY2VzLnB1c2gobmV3IE1vZGFsKGVsZW1lbnQpKTtcbiAgICB9LFxuXG4gICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4gaW5zdGFuY2UudW5iaW5kRXZlbnRzKCkpO1xuICAgICAgICBpbnN0YW5jZXMgPSBbXTtcbiAgICB9XG59O1xuIl19