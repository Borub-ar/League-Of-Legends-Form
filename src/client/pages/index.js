import Common from '../common';

export default class App extends Common {
    emailInput = document.querySelector('.main-container__input');
    placeholder = document.querySelector('.main-container__placeholder');
    errorIcon = document.querySelector('.main-container__error-icon');
    errorMsg = document.querySelector('.main-container__error-msg');

    constructor() {
        super();
        this._handleEvents();
    }

    _placeholderFocus() {
        this.placeholder.classList.add('main-container__placeholder--focus');
    }
    
    _normalizePlaceholder() {
        if (this.emailInput.value) return;
        this.placeholder.classList.remove('main-container__placeholder--focus');
    }
    
    _emailValidation (e) {
        const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    
        if (!this.emailInput.value || !regex.test(this.emailInput.value)) {
            e.preventDefault();
            this._removeSwupAttribute();
            this._showEmailError();
        }
    
        if (this.emailInput.value && regex.test(this.emailInput.value)) {
            this._setSwupAttribute();
            this._hideEmailError();
        }
    }
    
    _showEmailError() {
        this.emailInput.classList.add('main-container__input--error');
        this.errorIcon.classList.add('main-container__error-icon--show');
        this.errorMsg.classList.add('main-container__error-msg--show');
    }
    
    _hideEmailError() {
        this.emailInput.classList.remove('main-container__input--error');
        this.errorIcon.classList.remove('main-container__error-icon--show');
        this.errorMsg.classList.remove('main-container__error-msg--show');
    }

    _handleEvents() {
        this.emailInput.addEventListener('focus', this._placeholderFocus.bind(this));
        this.emailInput.addEventListener('focusout', this._normalizePlaceholder.bind(this));
        this.emailInput.addEventListener('focusout', this._emailValidation.bind(this));
        this.form.addEventListener('submit', this._emailValidation.bind(this));
    }
}









