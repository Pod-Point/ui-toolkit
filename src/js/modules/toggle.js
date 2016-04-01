import { Delegate } from 'dom-delegate';
import { selectFirst } from '@pod-point/dom-ops';

let instances = [];

class Toggle {

    /**
     * Creates a new toggle element.
     *
     * @param element
     */
    constructor(element) {
        this.element = element;
        this.action = element.dataset.hasOwnProperty('action') ? element.dataset.action : 'click';

        this.hide = element.dataset.hide;
        this.show = element.dataset.hasOwnProperty('show') ? element.dataset.show : null;

        this.bindEvents();
    }

    /**
     * Binds toggle event.
     */
    bindEvents() {
        this.listener = new Delegate(this.element);

        this.listener.on(this.action, (event) => {
            this.doToggle(event);
        });
    }

    /**
     * Unbinds the event listeners from the elements.
     */
    unbindEvents() {
        this.listener.destroy();
    }

    /**
     * Toggles the elements
     * @param {Event} event
     * @param {Element} trigger
     */
    doToggle(event) {
        event.preventDefault();

        let hideElement = selectFirst(this.hide);
        let showElement = this.show ? selectFirst(this.show) : null;

        if (hideElement.style.display !== 'none' || hideElement.style.display === '') {

            hideElement.style.display = 'none';

            if (this.show) {
                showElement.style.display = 'block';
            }

        } else {

            hideElement.style.display = 'block';

            if (this.show) {
                showElement.style.display = 'none';
            }
        }

    }
}

export default {
    init: function(element) {
        instances.push(new Toggle(element));
    },

    destroy: function() {
        instances.forEach((instance) => instance.unbindEvents());
        instances = [];
    }
};
