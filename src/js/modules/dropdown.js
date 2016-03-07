import { Delegate } from 'dom-delegate';
import { removeClass } from '@pod-point/dom-ops';

let instances = [];

class DropDown {

    /**
     * Creates a new dropdown.
     *
     * @param element
     */
    constructor(element) {
        this.element = element;

        this.bindEvents();
    }

    /**
     * Binds dropdown event.
     */
    bindEvents() {
        this.listener = new Delegate(this.element);

        this.listener.on('click', (event, input) => {
            this.doDropDown(event, input);
        });

        this.listener.on('blur', (event, input) => {
            this.closeDropDown(event, input);
        });
    }

    /**
     * Unbinds the event listeners from the elements.
     */
    unbindEvents() {
        this.listener.destroy();
    }

    /**
     * Drops down
     * @param {Event} event
     * @param {Element} input
     */
    doDropDown(event, input) {
        event.preventDefault();
        input.parentElement.classList.toggle('open');
    }

    /**
     * Closes the dropdown
     * @param {Event} event
     * @param {Element} input
     */
    closeDropDown(event, input) {
        removeClass(input.parentElement, 'open');

        // Trigger the click event on the target if it not opening another menu
        if (event.relatedTarget && event.relatedTarget.getAttribute('data-js-module') !== 'dropdown') {
            event.relatedTarget.click();
        }
    }

}

export default {
    init: function(element) {
        instances.push(new DropDown(element));
    },

    destroy: function() {
        instances.forEach((instance) => instance.unbindEvents());
        instances = [];
    }
};
