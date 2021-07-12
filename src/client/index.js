import Common from './common';

export default class App extends Common {
    emailInput = document.querySelector('.main-container__input');
    placeholder = document.querySelector('.main-container__placeholder');
    errorIcon = document.querySelector('.main-container__error-icon');
    errorMsg = document.querySelector('.main-container__error-msg');

    constructor() {
        super();
        this._handleEvents();
    }

    _minimizeEmailPlaceholder() {
        this.placeholder.classList.add('main-container__placeholder--focus');
    }
    
    _normalizeEmailPlaceholder() {
        if (this.emailInput.value) return;
        this.placeholder.classList.remove('main-container__placeholder--focus');
    }
    
    _emailValidation (e) {
        const regex = /@/;
    
        if (!this.emailInput.value || !regex.test(this.emailInput.value)) {
            e.preventDefault();
            // removing required swup attribute
            this.form.removeAttribute('data-swup-form');
            this._showEmailError();
        }
    
        if (this.emailInput.value && regex.test(this.emailInput.value)) {
            // setting required swup attribute
            this.form.setAttribute('data-swup-form', '');
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
        this.emailInput.addEventListener('focus', this._minimizeEmailPlaceholder.bind(this));
        this.emailInput.addEventListener('focusout', this._normalizeEmailPlaceholder.bind(this));
        this.emailInput.addEventListener('focusout', this._emailValidation.bind(this));
        this.form.addEventListener('submit', this._emailValidation.bind(this));
    }
}









