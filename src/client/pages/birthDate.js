import Common from '../common';

export default class App extends Common {
    constructor() {
        super();
        this._generateSelectOptions();
        this._handleEvents();
    }

    _birthFormValidation(e) {
        if ([...this._formSelects].some(sel => sel.value === '0')) {
            e.preventDefault();
            this._removeSwupAttribute();
            this._showError();
        } else {
            this._setLocalStorage();
            this._hideError();
            this._setSwupAttribute();
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
        this._formSelects.forEach(sel => sel.addEventListener('change', this._checkIfCorrect.bind(this)));
        this._form.addEventListener('submit', this._birthFormValidation.bind(this));
    }
}