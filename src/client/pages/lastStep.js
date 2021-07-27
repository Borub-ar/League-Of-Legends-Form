import Common from '../common';

export default class App extends Common {
    // General
    _inputs = document.querySelectorAll('.main-container__input');
    _placeholders = document.querySelectorAll('.main-container__placeholder');
    _checkboxes = document.querySelectorAll('.main-container__checkbox');
    _checkboxLabels = document.querySelectorAll('.main-container__checkbox-label');
    // UsernameInput
    _usernameInput = document.querySelector('[data-username]');
    _usernameFirstError = document.querySelector('[data-usernameFirstError]');
    _usernameSecondError = document.querySelector('[data-usernameSecondError]');
    _usernameThirdError = document.querySelector('[data-usernameThirdError]');
    // Password input
    _passwordInput = document.querySelector('[data-password]');
    _passwordFirstError = document.querySelector('[data-passwordFirstError]');
    _passwordSecondError = document.querySelector('[data-passwordSecondError]');
    // Repeat password input
    _repeatPassInput = document.querySelector('[data-repeat]');
    _repeatFirstError = document.querySelector('[data-repeatFirstError]')
    _repeatSecondError = document.querySelector('[data-repeatSecondError]')
    // Checkbox
    _checkboxCon = document.querySelector('[data-checkboxCon]');
    _requiredCheckbox = document.querySelector('[data-required]');
    _checkboxError = document.querySelector('[data-checkboxError]');

    constructor() {
        super();
        this._handleEvents();
    }

    _usernameValidation() {
        const checkMinLength = () => {
            const firstRegex = /^^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~, a-zA-Z, 0-9]{4,}$/;
            if (this._inputValidation(firstRegex, this._usernameFirstError, this._usernameInput.value)) return true;
            else return false;
        };

        const checkMaxLength = () => {
            if (this._usernameInput.value.length >= 25) {
                this._usernameSecondError.style.display = 'block';
                // this._renderErrorElements(e);
                return false;
            } else {
                this._usernameSecondError.style.display = 'none';
                return true;
            }
        };

        const checkSpaces = () => {
            if (this._usernameInput.value.includes(' ')) {
                // this._renderErrorElements(e);
                this._usernameThirdError.style.display = 'block';
                return false
            } else {
                this._usernameThirdError.style.display = 'none';
                return true
            }
        };

        if (checkMinLength() && checkMaxLength() && checkSpaces()) {
            // this._removeError(e);
            return true;
        } else return false;
    }

    _passwordValidation() {
        const checkMinLength = () => {
            const firstRegex = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~, a-zA-Z, 0-9]{8,}$/;
            if (this._inputValidation(firstRegex, this._passwordFirstError, this._passwordInput.value)) return true;
            else return false
        }

        const checkLetters = () => {
            const secondRegex = /[a-zA-Z]/;
            if (this._inputValidation(secondRegex, this._passwordSecondError, this._passwordInput.value)) return true;
            else return false
        }

        const checkSpecialChar = () => {
            const thirdRegex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~, 0-9]/;
            if (this._inputValidation(thirdRegex, this._passwordSecondError, this._passwordInput.value)) return true;
            else return false;
        }

        if (checkMinLength() && checkLetters() && checkSpecialChar()) {
            // this._removeError(e);
            return true;
        } else return false;
    }

    _repeatPassValidation() {
        const comparePass = () => {
            if (this._passwordInput.value !== this._repeatPassInput.value) {
                // this._renderErrorElements(e);
                this._repeatFirstError.style.display = 'block';
                return false;
            } else {
                this._repeatFirstError.style.display = 'none';
                return true;
            }
        }

        const checkIfEmpty = () => {
            if (!this._repeatPassInput.value) {
                // this._renderErrorElements(e);
                this._repeatSecondError.style.display = 'block';
                return false;
            } else {
                this._repeatSecondError.style.display = 'none';
                return true;
            }
        };

        if (checkIfEmpty() && comparePass()) {
            // this._removeError(e);
            return true;
        } else return false;
    }

    _inputValidation(regex, errorNumber, inputValue) {
        if (!regex.test(inputValue)) {
            // this._renderErrorElements(e);
            errorNumber.style.display = 'block';
            return false
        } else {
            errorNumber.style.display = 'none';
            return true
        }
    }

    _checkboxValidation() {
        if (this._requiredCheckbox.classList.contains('main-container__checkbox--marked')) {
            this._requiredCheckbox.style.borderColor = '#937341';
            this._checkboxError.style.display = 'none';
            this._checkboxCon.style.marginTop = '.7rem';
            return true
        } else {
            this._requiredCheckbox.style.borderColor = '#be1e37';
            this._checkboxError.style.display = 'block';
            this._checkboxCon.style.marginTop = '2rem';
            return false
        }
    }

    _checkAll() {
        this._usernameValidation();
        this._passwordValidation();
        this._repeatPassValidation();
        this._checkboxValidation();
    }

    _pageValidation(e) {
        if (!this._usernameValidation() || !this._passwordValidation() || !this._repeatPassValidation() || !this._checkboxValidation()) {
            e.preventDefault();
            this._removeSwupAttribute();
            this._checkAll();
        } 
        
        if (this._usernameValidation() && this._passwordValidation() && this._repeatPassValidation() && this._checkboxValidation()) {
            this._setLocalStorage();
            this._setSwupAttribute();
        } else e.preventDefault();
    }

    _placeholderFocus(e) {
        e.target.parentElement.querySelector('.main-container__placeholder').classList.add('main-container__placeholder--small-focus');
    }

    _placeholderNormalize() {
        [...this._inputs].forEach(input => {
            if (input.value) return
            if (!input.value) {
                input.parentElement.querySelector('.main-container__placeholder').classList.remove('main-container__placeholder--small-focus');
            }
        })
    }

    _markCheckbox(e) {
        e.target.parentElement.querySelector('.main-container__checkbox').classList.toggle('main-container__checkbox--marked');
    }

    _handleEvents() {
        [...this._inputs].forEach(input => input.addEventListener('focus', this._placeholderFocus.bind(this)));
        [...this._inputs].forEach(input => input.addEventListener('focusout', this._placeholderNormalize.bind(this)));
        [...this._checkboxes].forEach(checkbox => checkbox.addEventListener('click', this._markCheckbox.bind(this)));
        [...this._checkboxLabels].forEach(checkbox => checkbox.addEventListener('click', this._markCheckbox.bind(this)));
        this._requiredCheckbox.addEventListener('click', this._checkboxValidation.bind(this));
        this._usernameInput.addEventListener('focusout', this._usernameValidation.bind(this));
        this._passwordInput.addEventListener('focusout', this._passwordValidation.bind(this));
        this._repeatPassInput.addEventListener('focusout', this._repeatPassValidation.bind(this));
        this._form.addEventListener('submit', this._pageValidation.bind(this));
    }
}