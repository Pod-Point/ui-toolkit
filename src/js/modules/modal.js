import { Delegate } from 'dom-delegate';
import { selectFirst } from '@pod-point/dom-ops';

let instances = [];

class Modal {

    /**
     * Creates a new modeal.
     *
     * @param element
     */
    constructor(element) {
        this.openButton = element;
        this.closeButton = selectFirst('.modal-close', this.modal);
        this.modal = selectFirst('#' + this.openButton.dataset.modal);
        this.overlay = selectFirst('.modal-overlay');

        this.bindOpenEvent();
        this.bindCloseEvent();
    }

    /**
     * Binds open modal event.
     */
    bindOpenEvent() {
        this.listener = new Delegate(this.openButton);

        this.listener.on('click', (event) => {
            this.doModal(event);
        });
    }

    /**
     * Bind the close modal event to the close button.
     */
    bindCloseEvent() {
        this.closeListener = new Delegate(this.closeButton);

        this.closeListener.on('click', (event) => {
            this.closeModal(event);
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
     * Opens the modal
     * @param  {[type]} event
     * @param  {[type]} input
     */
    doModal(event) {
        event.preventDefault();

        var elements = [
            this.overlay,
            this.modal
        ];

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
     * @param  {[type]} event
     */
    closeModal(event) {
        event.preventDefault();

        var elements = [
            this.overlay,
            this.modal
        ];

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = 'none';
        }
    }
}

export default {
    init: function(element) {
        instances.push(new Modal(element));
    },

    destroy: function() {
        instances.forEach((instance) => instance.unbindEvents());
        instances = [];
    }
};
