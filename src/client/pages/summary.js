import Common from './common';
export default class App extends Common {
    _optionalCheckbox = document.querySelector('[data-optional]');

    constructor() {
        super();
        this._handleEvents();
        this._handleValidationEvents();
        this._generateSelectOptions();
        this._setInputValues();
    }

    _setInputValues() {
        this._emailInput.value = localStorage.getItem('email');
        this._usernameInput.value = localStorage.getItem('username');
        this._passwordInput.value = localStorage.getItem('password');
        this._repeatPassInput.value = localStorage.getItem('password');
        this._selectDay.value = localStorage.getItem('day');
        this._selectMonth.value = localStorage.getItem('month');
        this._selectYear.value = localStorage.getItem('year');
        const checkboxMarked = localStorage.getItem('checkboxOptional');
        checkboxMarked === 'true' ? this._optionalCheckbox.classList.add('main-container__checkbox--marked') : '';
    }

    _placeholderFocus(e) {
        e.target.parentElement.querySelector('.main-container__placeholder').classList.add('main-container__placeholder--focus-summary');
    }

    _placeholderNormalize() {
        [...this._inputs].forEach(input => {
            if (input.value) return
            if (!input.value) {
                input.parentElement.querySelector('.main-container__placeholder').classList.remove('main-container__placeholder--focus-summary');
            }
        })
    }

    _pageValidation(e) {
        if (!this._usernameValidation() || !this._passwordValidation() || !this._repeatPassValidation() || !this._checkboxValidation() || this._emailValidation()) {
            e.preventDefault();
            this._removeSwupAttribute();
            this._checkAll();
        }

        if (this._usernameValidation() && this._passwordValidation() && this._repeatPassValidation() && this._checkboxValidation() && this._emailValidation()) {
            this._setSwupAttribute();
        } else e.preventDefault();
    }
    
    _handleEvents() {
        [...this._inputs].forEach(input => input.addEventListener('focus', this._placeholderFocus.bind(this)));
        [...this._inputs].forEach(input => input.addEventListener('focusout', this._placeholderNormalize.bind(this)));
    }
}
