import Common from '../common';

export default class App extends Common {
    _formSelects = document.querySelectorAll('.custom-select__select--birth-date');
    _errorMsg = document.querySelector('[data-birthError]');
    _selectDay = document.querySelector('[data-day]');
    _selectYear = document.querySelector('[data-year]');

    _usernameInput = document.querySelector('[data-username]');
    _passwordInput = document.querySelector('[data-password]');
    _repeatPassInput = document.querySelector('[data-repeat]');


    constructor() {
        super();
        this._generateSelectOptions();
        this._setInputValues();
        this._handleEvents();
    }

    // _setInputValues() {
    //     this._usernameInput.value = localStorage.getItem('username');
    //     this._passwordInput.value = localStorage.getItem('password');
    //     this._repeatPassInput.value = localStorage.getItem('password');
    // }

    _handleEvents() {
        this._form.addEventListener('submit', this._birthFormValidation.bind(this));
        this._formSelects.forEach(sel => sel.addEventListener('change', this._checkIfCorrect.bind(this)));
    }
}