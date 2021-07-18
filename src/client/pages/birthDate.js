import Common from '../common';

export default class App extends Common {
    formSelects = document.querySelectorAll('.custom-select__select--birth-date');
    errorMsg = document.querySelector('.main-container__error-msg');

    constructor() {
        super();
        this._handleEvents();
    }

    _birthFormValidation(e) {
        if ([...this.formSelects].some(sel => sel.value === '0')) {
            e.preventDefault();
            this._removeSwupAttribute();
            this._showError();
        } else {
            this._setSwupAttribute();
            this._hideError();
        }
    }

       _handleEvents() {
        this.form.addEventListener('submit', this._birthFormValidation.bind(this));
        this.formSelects.forEach(sel => sel.addEventListener('focusout', this._checkIfCorrect.bind(this))); 
    }

    _checkIfCorrect() {
        if (![...this.formSelects].some(sel => sel.value === '0')) {
            this._hideError();
        }
    }

    _showError() {
        this.errorMsg.classList.add('main-container__error-msg--show');
    }
    
    _hideError() {
        this.errorMsg.classList.remove('main-container__error-msg--show');
    }
}

