import Common from './common';

export default class App extends Common {
    formSelects = document.querySelectorAll('.custom-select__select--birth-date');
    errorMsg = document.querySelector('.main-container__date-error');

    constructor() {
        super();
        this._handleEvents();
    }

    _birthFormValidation(e) {
        if ([...this.formSelects].some(sel => sel.value === '0')) {
            e.preventDefault();
            this.form.removeAttribute('data-swup-form');
            this._showError();
        } else {
            this.form.setAttribute('data-swup-form', '');
            this._hideError();
        }
    }

       _handleEvents() {
        this.form.addEventListener('submit', this._birthFormValidation.bind(this));
        this.formSelects.forEach(sel => sel.addEventListener('focusout', this._birthFormValidation.bind(this))); 
    }

    _showError() {
        this.errorMsg.classList.remove('main-container__date-error--hidden');
    }
    
    _hideError() {
        this.errorMsg.classList.add('main-container__date-error--hidden');
    }
}

