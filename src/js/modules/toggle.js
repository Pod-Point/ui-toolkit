import { Delegate } from 'dom-delegate';
import { selectFirst } from '@pod-point/dom-ops';

let instances = [];

const LOCAL_KEY = 'toggle-state-';
const HIDDEN = 'hidden';
const VISIBLE = 'visible';

class Toggle {

    /**
     * Creates a new toggle element.
     *
     * @param element
     */
    constructor(element) {
        this.element = element;
        this.action = element.dataset.hasOwnProperty('action') ? element.dataset.action : 'click';

        this.shouldHide = element.dataset.hide;
        this.shouldShow = element.dataset.hasOwnProperty('show') ? element.dataset.show : null;

        this.storageKey = null;

        if (element.getAttribute('data-persist')) {
            this.storageKey = LOCAL_KEY + element.getAttribute('id');

            this.initialVisibility = localStorage.getItem(this.storageKey);

            if (this.initialVisibility === HIDDEN) {
                this.hide(selectFirst(this.shouldHide));
            } else {
                this.show(selectFirst(this.shouldHide));
            }
        }

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
     * Toggles the elements.
     *
     * @param {Event} event
     */
    doToggle(event) {
        event.preventDefault();

        let hideElement = selectFirst(this.shouldHide);
        let showElement = this.shouldShow ? selectFirst(this.shouldShow) : null;

        if (this.storageKey) {
            localStorage.setItem(this.storageKey, this.isVisible(hideElement) ? HIDDEN : VISIBLE);
        }

        if (this.isVisible(hideElement)) {
            this.hide(hideElement);

            if (this.shouldShow) {
                this.show(showElement);
            }
        } else {
            this.show(hideElement);

            if (this.shouldShow) {
                this.hide(showElement);
            }
        }
    }

    /**
     * Check if an element is hidden.
     *
     * @param element
     * @returns {boolean}
     */
    isHidden(element) {
        return element.style.visibility === 'hidden';
    }

    /**
     * Check if an element is visible.
     *
     * @param element
     * @returns {boolean}
     */
    isVisible(element) {
        return !this.isHidden(element);
    }

    /**
     * Display an element.
     *
     * @param element
     */
    show(element) {
        element.style.visibility = 'visible';
        element.style.height = 'auto';
        element.style.overflow = 'auto';
    }

    /**
     * Hide an element.
     *
     * @param element
     */
    hide(element) {
        element.style.visibility = 'hidden';
        element.style.height = '0px';
        element.style.overflow = 'hidden';
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
