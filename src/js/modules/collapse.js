import { Delegate } from 'dom-delegate';
import { selectFirst, hasClass } from '@pod-point/dom-ops';
import { hide, show } from './utilities';

let instances = [];

class Collapse {

    /**
     * Creates a new collapsable element.
     *
     * @param element
     */
    constructor(element) {
        this.element = element;
        this.action = element.dataset.hasOwnProperty('action') ? element.dataset.action : 'click';

        this.bindEvents();
    }

    /**
     * Binds collapse event.
     */
    bindEvents() {
        this.listener = new Delegate(this.element);

        this.listener.on(this.action, (event, input) => {
            this.doCollapse(event, input);
        });
    }

    /**
     * Unbinds the event listeners from the elements.
     */
    unbindEvents() {
        this.listener.destroy();
    }

    /**
     * Collapses the element
     * @param {Event} event
     * @param {Element} trigger
     */
    doCollapse(event, trigger) {
        event.preventDefault();

        let target = trigger.dataset.target;
        let element = selectFirst(target, trigger.parentNode);

        if (hasClass(element, 'in')) {
            hide(element, trigger);
        } else {
            show(element, trigger);
        }
    }

}

export default {
    init: function(element) {
        instances.push(new Collapse(element));
    },

    destroy: function() {
        instances.forEach((instance) => instance.unbindEvents());
        instances = [];
    }
};
