import Common from '../common';

export default class App extends Common {
    _formSelects = document.querySelectorAll('.custom-select__select--birth-date');
    _errorMsg = document.querySelector('[data-birthError]');
    _selectDay = document.querySelector('[data-day]');
    _selectYear = document.querySelector('[data-year]');

    _usernameInput = document.querySelector('[data-username]');
    _passwordInput = document.querySelector('[data-password]');
    _repeatPassInput = document.querySelector('[data-repeat]');
    _emailInput = document.querySelector('.main-container__input');
    _daySelect = document.querySelector('[data-day]');
    _monthSelect = document.querySelector('[data-month]');
    _yearSelect = document.querySelector('[data-year]');
    _optionalCheckbox = document.querySelector('[data-optional]');



    constructor() {
        super();
        this._generateSelectOptions();
        this._setInputValues();
    }

    _setInputValues() {
        this._emailInput.value = localStorage.getItem('email');
        this._usernameInput.value = localStorage.getItem('username');
        this._passwordInput.value = localStorage.getItem('password');
        this._repeatPassInput.value = localStorage.getItem('password');
        this._daySelect.value = localStorage.getItem('day');
        this._monthSelect.value = localStorage.getItem('month');
        this._yearSelect.value = localStorage.getItem('year');

        const checkboxMarked = localStorage.getItem('checkboxOptional');
        checkboxMarked === 'true' ? this._optionalCheckbox.classList.add('main-container__checkbox--marked') : '';
    }
}