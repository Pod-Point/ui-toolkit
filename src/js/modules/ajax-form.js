import { Delegate } from 'dom-delegate';
import request from 'superagent';
// import progressButton from './progress-button';

var instances = [];

class AjaxForm {
    constructor(form) {
        this.requestInProgress = false;
        this.form = form;
        this.button = form.querySelector('button[type="submit"]');
        this.loadingIcon = form.querySelector('.loading-icon');

        this.bindEvents();
    }

    submitForm() {
        this.requestInProgress = true;
        this.button.setAttribute('disabled', true);
        this.form.classList.add('is-loading');
        this.loadingIcon.style.display = 'inline-block';

        request
            .post(this.form.action)
            .type('form')
            .send(this.form)
            .end((error, response) => {
                this.requestInProgress = false;
                this.form.classList.remove('is-loading');
                this.loadingIcon.style.display = 'none';
                this.button.removeAttribute('disabled');
                this.form.submit();
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
