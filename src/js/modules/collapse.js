import { Delegate } from 'dom-delegate';
import { selectFirst } from '@pod-point/dom-ops';
import { hide, show } from './utilities';

let instances = [];

class Collapse {

    /**
     * Creates a new modeal.
     *
     * @param element
     */
    constructor(element) {
        this.element = element;

        this.bindEvents();
    }

    /**
     * Binds collapse event.
     */
    bindEvents() {
        this.listener = new Delegate(this.element);

        this.listener.on('click', (event, input) => {
            this.doCollapse(event, input);
        });
    }

    /**
     * Unbinds the event listeners from the elements.
     */
    unbindEvents() {
        this.listener.destroy();
        this.closeListener.destroy();
    }

    /**
     * Collapses the element
     * @param  {[type]} event
     * @param  {[type]} trigger
     */
    doCollapse(event, trigger) {
        event.preventDefault();

        let target = trigger.getAttribute('data-target');
        let element = selectFirst(target, trigger.parentNode);

        if (element.classList.contains('in')) {
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
