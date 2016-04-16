import { Delegate } from 'dom-delegate';
import request from 'superagent';
import progressButton from './progress-button';

var instances = [];

class AjaxForm {
    constructor(form) {
        this.form = form;
        this.button = progressButton.create(form.querySelector('button[type="submit"]'));
        this.requestInProgress = false;

        this.bindEvents();
    }

    submitForm() {
        this.requestInProgress = true;
        this.button.handleLoading();

        request.post(this.form.action)
            .type('form')
            .send(this.form)
            .end((error, response) => {
                this.requestInProgress = false;

                if (response && response.ok) {
                    this.button.handleComplete(true);
                } else {
                    this.button.handleComplete(false);
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
