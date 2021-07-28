import Common from '../common';

export default class App extends Common {
    _optionalCheckbox = document.querySelector('[data-optional]');

    constructor() {
        super();
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

    _pageValidation(e) {
        if (!this._usernameValidation() || !this._passwordValidation() || !this._repeatPassValidation() || !this._checkboxValidation() || !this._emailValidation()) {
            e.preventDefault();
            this._removeSwupAttribute();
            this._checkAll();
        }

        if (this._usernameValidation() && this._passwordValidation() && this._repeatPassValidation() && this._checkboxValidation() && this._emailValidation()) {
            this._setSwupAttribute();
        } else e.preventDefault();
    }
}