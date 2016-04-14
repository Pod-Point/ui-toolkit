import { Delegate } from 'dom-delegate';
import request from 'superagent';
import progressButton from './progress-button';

var instances = [];

class AjaxForm {
    constructor(form) {
        this.requestInProgress = false;
        this.form = form;
        this.button = progressButton.create(form.querySelector('button[type="submit"]'));

        this.bindEvents();
    }

    submitForm() {
        this.requestInProgress = true;
        this.button.showProgressSpinner();

        request
            .post('/')
            .type('form')
            .send(this.form)
            .end((error, response) => {
                this.requestInProgress = false;
                if (response && response.ok) {
                    this.button.showProgressComplete(true);
                } else {
                    this.button.showProgressComplete(false);
                }
            });
    }

    bindEvents() {
        this.listener = new Delegate(this.form);

        this.listener.on('submit', (event) => {
            event.preventDefault();
            if (!this.requestInProgress) {
                this.submitForm();
            }
        });
    }

    unbindEvents() {
        this.listener.destroy();
    }
}

export default {
    init: function(form) {
        instances.push(new AjaxForm(form));
    },

    destroy: function() {
        instances.forEach((instance) => instance.unbindEvents());
        instances = [];
    }
}
