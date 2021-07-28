export default class Common {
    // General
    _topDivider = document.querySelector('.top-bar__divider');
    _form = document.querySelector('.main-container__form');
    //Select Input
    _formSelects = document.querySelectorAll('.custom-select__select--birth-date');
    _errorMsg = document.querySelector('[data-birthError]');
    _selectDay = document.querySelector('[data-day]');
    _selectMonth = document.querySelector('[data-month]');
    _selectYear = document.querySelector('[data-year]');
    //Email Input
    _emailInput = document.querySelector('[data-email]');
    _errorIcon = document.querySelector('.main-container__error-icon');
    _errorMsg = document.querySelector('.main-container__error-msg');
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
    _repeatFirstError = document.querySelector('[data-repeatFirstError]');
    _repeatSecondError = document.querySelector('[data-repeatSecondError]');
    // Checkboxes
    _checkboxes = document.querySelectorAll('.main-container__checkbox');
    _checkboxCon = document.querySelector('[data-checkboxCon]');
    _checkboxLabels = document.querySelectorAll('.main-container__checkbox-label');
    _requiredCheckbox = document.querySelector('[data-required]');
    _checkboxError = document.querySelector('[data-checkboxError]');

    constructor() {
        this._handleTopDivider();
    }

    _handleTopDivider() {
        if (document.querySelector('#index-page') || document.querySelector('#download-page')) return;
        if (!document.querySelector('.top-bar__divider')) return;

        this._topDivider.style.visibility = 'hidden';
    }

    _setSwupAttribute() {
        this._form.setAttribute('data-swup-form', '');
    }

    _removeSwupAttribute() {
        this._form.removeAttribute('data-swup-form');
    }

    _setLocalStorage() {
        if (document.querySelector('#index-page')) {
            localStorage.setItem('email', document.querySelector('[data-email]').value);
        }

        if (document.querySelector('#birth-date-page')) {
            localStorage.setItem('day', document.querySelector('[data-day]').value);
            localStorage.setItem('month', document.querySelector('[data-month]').value);
            localStorage.setItem('year', document.querySelector('[data-year]').value);
        }

        if (document.querySelector('#last-step-page')) {
            const checkboxData = document.querySelector('[data-optional]').classList.contains('main-container__checkbox--marked') ? true : false;
            localStorage.setItem('username', this._usernameInput.value);
            localStorage.setItem('password', this._passwordInput.value);
            localStorage.setItem('checkboxOptional', checkboxData);
        }
    }

    _generateSelectOptions() {
        for (let i = 1; i <= 31; i++) {
            const HTML = `
            <option value="${i}">${i}</option>
        `;

            this._selectDay.insertAdjacentHTML('beforeend', HTML);
        }

        for (let i = 2021; i >= 1900; i--) {
            const HTML = `
                <option value="${i}">${i}</option>
            `;

            this._selectYear.insertAdjacentHTML('beforeend', HTML);
        }
    }

    // _renderErrorElements(e) {
    //     const HTML = `
    //     <svg class="main-container__error-icon" xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 310.8 310.8">
    //         <path fill="#be1e37"
    //             d="M305.1 229.1l-119-186.5c-6.7-10.5-18.2-16.8-30.7-16.8s-23.9 6.3-30.7 16.8L5.7 229.1c-7.1 11.2-7.6 25.4-1.2 37 6.4 11.6 18.6 18.9 31.9 18.9h238.1c13.3 0 25.5-7.2 31.9-18.9 6.3-11.6 5.8-25.8-1.3-37zm-149.7 24.5c-10.9 0-19.8-8.9-19.8-19.8s8.9-19.8 19.8-19.8 19.8 8.9 19.8 19.8c0 11-8.9 19.8-19.8 19.8zm27.5-137.7l-9.8 65.7c-1.4 9.7-10.4 16.4-20.1 14.9-7.8-1.2-13.7-7.3-14.9-14.7l-10.6-65.6c-2.5-15.3 7.9-29.7 23.2-32.1s29.7 7.9 32.1 23.2c.5 2.9.5 5.9.1 8.6z">
    //         </path>
    //     </svg>
    //     `
    //     e.target.closest('.main-container__input').classList.add('main-container__input--error');
    //     e.target.closest('.main-container__input-con').insertAdjacentHTML('beforeend', HTML);
    // }

    // _removeError(e) {
    //     e.target.closest('.main-container__input').classList.remove('main-container__input--error');
    //     e.target.parentElement.querySelector('.main-container__error-icon').remove();
    // }


    _emailValidation() {
        const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

        if (!this._emailInput.value || !regex.test(this._emailInput.value)) {
            this._removeSwupAttribute();
            this._showEmailError();
            return false
        }

        if (this._emailInput.value && regex.test(this._emailInput.value)) {
            this._setLocalStorage();
            this._hideEmailError();
            this._setSwupAttribute();
            return true
        }
    }

    _showEmailError() {
        this._errorMsg.classList.add('main-container__error-msg--show');
    }

    _hideEmailError() {
        this._emailInput.classList.remove('main-container__input--error');
        this._errorIcon.classList.remove('main-container__error-icon--show');
        this._errorMsg.classList.remove('main-container__error-msg--show');
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

    _markCheckbox(e) {
        e.target.parentElement.querySelector('.main-container__checkbox').classList.toggle('main-container__checkbox--marked');
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
        if (document.querySelector('#summary')) this._emailValidation();
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

    _handleValidationEvents() {
        [...this._checkboxes].forEach(checkbox => checkbox.addEventListener('click', this._markCheckbox.bind(this)));
        [...this._checkboxLabels].forEach(checkbox => checkbox.addEventListener('click', this._markCheckbox.bind(this)));
        this._requiredCheckbox.addEventListener('click', this._checkboxValidation.bind(this));
        this._usernameInput.addEventListener('focusout', this._usernameValidation.bind(this));
        this._passwordInput.addEventListener('focusout', this._passwordValidation.bind(this));
        this._repeatPassInput.addEventListener('focusout', this._repeatPassValidation.bind(this));
        this._form.addEventListener('submit', this._pageValidation.bind(this));
    }
}