const IS_LOADING = 'is-loading';
const IS_COMPLETE = 'is-complete';

let instances = [];

class ProgressButton {
    constructor(button) {
        this.button = button;
    }

    handleLoading() {
        this.button.setAttribute('disabled', true);
        this.button.classList.add(IS_LOADING);
    }

    handleComplete(success) {
        this.button.classList.remove(IS_LOADING);

        if (success) {
            this.button.removeAttribute('disabled');
            this.button.classList.add(IS_COMPLETE);
        }
    }
}

export default {
    create: function(button) {
        return new ProgressButton(button);
    }
}
