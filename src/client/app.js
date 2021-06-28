import 'core-js/stable';
import 'regenerator-runtime/runtime';

const emailInput = document.querySelector('.main-container__email');
const placeholder = document.querySelector('.main-container__placeholder');

class App {
    constructor() {
        this._handleInputFocusIn();
        this._handleInputFocusOut();
    }

    _handleInputFocusIn() {
        emailInput.addEventListener('focus', e => {
            placeholder.classList.add('main-container__placeholder--focus');
        })
    }

    _handleInputFocusOut() {
        emailInput.addEventListener('focusout', e => {
            if (emailInput.value) return;
            placeholder.classList.remove('main-container__placeholder--focus');
        })
    }
}

const app = new App();