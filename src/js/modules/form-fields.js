import { Delegate } from 'dom-delegate';
import { addClass, removeClass, select, nodesToArray } from '@pod-point/dom-ops';

const HAS_CONTENT = 'has-content';
const HAS_ERROR = 'has-error';
const HAS_FOCUS = 'has-focus';

class FormFields {
    constructor(root = document.body) {
        this.bindEvents(root);
        this.checkAllFieldsForContent();
    }

    checkAllFieldsForContent() {
        var inputs = nodesToArray(select('input'));

        if (inputs.length) {
            inputs.forEach(input => this.checkForContent(input))
        }
    }

    checkForContent(element) {
        var container = this.getInputContainer(element),
            callback = (element.value) ? addClass : removeClass;

        callback(container, HAS_CONTENT);
    }

    checkForErrors(element) {
        removeClass(this.getInputContainer(element), HAS_ERROR);
    }

    bindEvents(root) {
        var listener = new Delegate(root);

        // Listen to change because of password managers etc
        listener.on('change', 'input, textarea', (event, element) => this.giveFocus(element) );

        // Text input focus handler
        listener.on('focus', 'input, textarea', (event, element) => this.giveFocus(element) );

        // Text input focusout handler
        listener.on('focusout', 'input, textarea', (event, element) => {
            this.checkForContent(element);
            this.checkForErrors(element);
            this.removeFocus(element);
        });

        listener.on('input', 'textarea', (event, element) => {
            var scrollHeight = element.scrollHeight;

        if (scrollHeight > parseInt(css.get(element, 'height'))) {
            css.set(element, 'height', scrollHeight + 'px');
        }
    });
    }

    getInputContainer(element) {
        return element.parentNode;
    }

    removeFocus(element) {
        removeClass(this.getInputContainer(element), HAS_FOCUS);
    }

    giveFocus(element) {
        addClass(this.getInputContainer(element), HAS_FOCUS);
    }
}

export default {
    init: function () {
        new FormFields();
    }
};
