import 'core-js/stable';
import 'regenerator-runtime/runtime';

const emailForm = document.querySelector('.main-container__form');
const emailInput = document.querySelector('.main-container__email');
const placeholder = document.querySelector('.main-container__placeholder');
const errorIcon = document.querySelector('.main-container__error-icon');
const errorMsg = document.querySelector('.main-container__error-msg');

class App {
    constructor() {

        // Add event handlers
        emailInput.addEventListener('focus', this._minimizeEmailPlaceholder.bind(this));
        emailInput.addEventListener('focusout', this._normalizeEmailPlaceholder.bind(this));
    }

    _minimizeEmailPlaceholder() {
            placeholder.classList.add('main-container__placeholder--focus');
    }

    _normalizeEmailPlaceholder() {
            if (emailInput.value) return;
            placeholder.classList.remove('main-container__placeholder--focus');

            this._checkEmail();
    }

    _checkEmail() {
        if (!emailInput.value) this._showEmailError();
    }

    _showEmailError() {
        emailInput.classList.add('main-container__email--error');
        errorIcon.classList.add('main-container__error-icon--show');
        errorMsg.classList.add('main-container__error-msg--show');
    }
}

const app = new App();
