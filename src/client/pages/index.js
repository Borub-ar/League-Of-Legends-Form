import Common from '../common';

export default class App extends Common {
    _emailInput = document.querySelector('.main-container__input');
    _placeholder = document.querySelector('.main-container__placeholder');
    _errorIcon = document.querySelector('.main-container__error-icon');
    _errorMsg = document.querySelector('.main-container__error-msg');

    constructor() {
        super();
        this._handleEvents();
        localStorage.clear();
    }

    _placeholderFocus() {
        this._placeholder.classList.add('main-container__placeholder--focus');
    }

    _normalizePlaceholder() {
        if (this._emailInput.value) return;
        this._placeholder.classList.remove('main-container__placeholder--focus');
    }

    _emailValidation(e) {
        const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

        if (!this._emailInput.value || !regex.test(this._emailInput.value)) {
            e.preventDefault();
            this._removeSwupAttribute();
            this._showEmailError(e);
        }

        if (this._emailInput.value && regex.test(this._emailInput.value)) {
            this._setLocalStorage();
            this._hideEmailError();
            this._setSwupAttribute();
        }
    }

    _showEmailError(e) {
        // this._renderErrorElements(e);
        this._errorMsg.classList.add('main-container__error-msg--show');
    }

    _hideEmailError() {
        this._emailInput.classList.remove('main-container__input--error');
        this._errorIcon.classList.remove('main-container__error-icon--show');
        this._errorMsg.classList.remove('main-container__error-msg--show');
    }

    _handleEvents() {
        this._emailInput.addEventListener('focus', this._placeholderFocus.bind(this));
        this._emailInput.addEventListener('focusout', this._normalizePlaceholder.bind(this));
        this._emailInput.addEventListener('focusout', this._emailValidation.bind(this));
        this._form.addEventListener('submit', this._emailValidation.bind(this));
    }
}