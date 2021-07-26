import Common from '../common';

export default class App extends Common {
    _formSelects = document.querySelectorAll('.custom-select__select--birth-date');
    _errorMsg = document.querySelector('[data-birthError]');
    _selectDay = document.querySelector('[data-day]');
    _selectYear = document.querySelector('[data-year]');

    constructor() {
        super();
        this._generateSelectOptions();
        this._handleEvents();
    }

    _handleEvents() {
        this._formSelects.forEach(sel => sel.addEventListener('change', this._checkIfCorrect.bind(this)));
        // this._form.addEventListener('submit', this._birthFormValidation.bind(this));
    }
}