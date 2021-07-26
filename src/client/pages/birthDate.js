import Common from '../common';

export default class App extends Common {
    _formSelects = document.querySelectorAll('.custom-select__select--birth-date');
    _errorMsg = document.querySelector('.main-container__error-msg');

    constructor() {
        super();
        this._handleEvents();
    }

    _birthFormValidation(e) {
        if ([...this._formSelects].some(sel => sel.value === '0')) {
            e.preventDefault();
            this._removeSwupAttribute();
            this._showError();
        } else {
            this._setSwupAttribute();
            this._hideError();
        }
    }

    _checkIfCorrect() {
        if (![...this._formSelects].some(sel => sel.value === '0')) {
            this._hideError();
        }
    }
    
    _showError() {
        this._errorMsg.classList.add('main-container__error-msg--show');
    }
    
    _hideError() {
        this._errorMsg.classList.remove('main-container__error-msg--show');
    }

    _handleEvents() {
        // this._form.addEventListener('submit', this._birthFormValidation.bind(this));
        this._formSelects.forEach(sel => sel.addEventListener('change', this._checkIfCorrect.bind(this)));
    }
}