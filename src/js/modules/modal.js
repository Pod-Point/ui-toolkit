import { Delegate } from 'dom-delegate';
import { selectFirst } from '@pod-point/dom-ops';
import { isVisible, show, hide } from './../utilities';

let instances = [];

class Modal {

    /**
     * Creates a new modal window.
     *
     * @param element
     */
    constructor(element) {
        this.openButton = element;
        this.modal = selectFirst('#' + this.openButton.getAttribute('data-modal'));
        this.closeButton = selectFirst('.modal-close', this.modal);
        this.overlay = selectFirst('.modal__overlay', this.modal);

        this.bindEvents();
    }

    /**
     * Binds the event listeners from the elements.
     */
    bindEvents() {
        this.openListener = new Delegate(this.openButton);

        this.openListener.on('click', (event) => {
            this.doModal(event);
        });

        this.closeListener = new Delegate(this.closeButton);

        this.closeListener.on('click', (event) => {
            this.closeModal();
        });

        this.overlayListener = new Delegate(this.overlay);

        this.overlayListener.on('click', (event) => {
            this.closeModal();
        });
    }

    /**
     * Unbinds the event listeners from the elements.
     */
    unbindEvents() {
        this.openListener.destroy();
        this.closeListener.destroy();
        this.overlayListener.destroy();
    }

    /**
     * Handle the modal opening.
     *
     * @param {Event} event
     */
    doModal(event) {
        event.preventDefault();

        if (isVisible(this.modal)) {
            this.closeModal(event);
        } else {
            show(this.modal);
        }
    }

    /**
     * Handle the modal closing.
     */
    closeModal() {
        hide(this.modal);
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
