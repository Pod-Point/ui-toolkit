import { Delegate } from 'dom-delegate';
import { css, Actor, Tween, Simulate } from 'popmotion';
import { addClass, removeClass } from '@pod-point/dom-ops';

const IN_PROGRESS = 'in-progress';

var instances = [],
    openSpaceForIcon = new Tween({
        duration: 400,
        ease: 'backOut',
        values: {
            paddingRight: 55
        }
    }),
    closeSpaceForIcon = new Tween({
        duration: 400,
        values: {
            paddingRight: 30
        }
    }),
    showIcon = new Tween({
        values: {
            opacity: 1,
            length: {
                to: 65,
                ease: 'easeIn'
            }
        }
    }),
    spinIcon = new Simulate({
        values: {
            rotate: -400
        }
    }),
    progressCompleteOutline = new Tween({
        values: {
            rotate: '-=150',
            length: 100
        }
    }),
    progressCompleteTick = new Tween({
        delay: 150,
        values: {
            length: 100,
            opacity: 1
        }
    }),
    progressHide = new Tween({
        duration: 400,
        values: {
            length: 0,
            opacity: 0
        }
    });

class ProgressButton {
    constructor(form) {
        this.requestInProgress = false;

        this.form = form;
        this.submitButton = new Actor({
            element: form.querySelector('button[type="submit"]'),
            values: {
                paddingRight: ({ element }) => css.get(element, 'paddingRight')
            }
        });
        this.progressIcon = this.submitButton.element.querySelector('.progress-icon');
        this.progressOutline = new Actor({
            element: this.progressIcon.getElementById('tick-outline-path')
        });
        this.progressTick = new Actor({
            element: this.progressIcon.getElementById('tick-path')
        });

        this.bindEvents();
    }

    showProgressSpinner() {
        this.requestInProgress = true;
        addClass(this.submitButton.element, IN_PROGRESS);

        this.submitButton.start(openSpaceForIcon);
        this.progressOutline.start(showIcon)
            .then(spinIcon);
    }

    showProgressComplete(success) {
        if (!success) {
            this.progressOutline.start(progressCompleteOutline);
            this.progressTick.start(progressCompleteTick);
        } else {
            this.progressOutline.stop().start(progressHide)
                .then(() => {
                    this.submitButton.start(closeSpaceForIcon)
                        .then(() => removeClass(this.submitButton.element, IN_PROGRESS));
                });
        }
    }

    bindEvents() {
        this.listener = new Delegate(this.form);

        this.listener.on('submit', () => {
            if (!this.requestInProgress) {
                this.showProgressSpinner();
            }
        });
    }

    unbindEvents() {
        this.listener.destroy();
    }
}

export default {
    init: function(form) {
        instances.push(new ProgressButton(form));
    },

    destroy: function() {
        instances.forEach((instance) => instance.unbindEvents());
        instances = [];
    }
}
