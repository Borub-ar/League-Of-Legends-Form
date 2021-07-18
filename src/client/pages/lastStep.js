import Common from '../common';

export default class App extends Common {
    inputs = document.querySelectorAll('.main-container__input');
    placeholders = document.querySelectorAll('.main-container__placeholder');
    checkboxes = document.querySelectorAll('.main-container__checkbox');
    checkboxLabels = document.querySelectorAll('.main-container__checkbox-label');
    requiredCheckbox = document.querySelector('[data-required]');
    usernameInput = document.querySelector('[data-username]');

    constructor() {
        super();
        this._handleEvents();
    }

    _usernameValidation() {
        const usernameFirstError = document.querySelector('[data-usernameFirstError]');
        const usernameSecondError = document.querySelector('[data-usernameSecondError]');
        const usernameThirdError = document.querySelector('[data-usernameThirdError]');

        const firstRegex = /^[a-zA-Z, 0-9]{3,}$/;

        if (!firstRegex.test(this.usernameInput.value)) {
            usernameFirstError.style.display = 'block';
        } else usernameFirstError.style.display = 'none';

        const secondRegex = /^[a-zA-Z, 0-9]{3,25}$/

        if (!secondRegex.test(this.usernameInput.value)) {
            usernameSecondError.style.display = 'block';
        } else usernameSecondError.style.display = 'none';

        if (this.usernameInput.value.includes(' ')) {
            usernameThirdError.style.display = 'block';
        } else usernameThirdError.style.display = 'none';
       
    }

    // _checkboxValidation(e) {
    // const checkboxError = document.querySelector('[data-checkboxError]');

    //     if (this.requiredCheckbox.classList.contains('main-container__checkbox--marked')) {
    //         e.preventDefault();
    //         this.checkboxError.style.display = 'block';
    //         return
    //     }
    // }

    _placeholderFocus(e) {
        e.target.parentElement.querySelector('.main-container__placeholder').classList.add('main-container__placeholder--small-focus');
    }

    _placeholderNormalize() {
        [...this.inputs].forEach(input => {
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
        [...this.inputs].forEach(input => input.addEventListener('focus', this._placeholderFocus.bind(this)));
        [...this.inputs].forEach(input => input.addEventListener('focusout', this._placeholderNormalize.bind(this)));
        [...this.checkboxes].forEach(checkbox => checkbox.addEventListener('click', this._markCheckbox.bind(this)));
        [...this.checkboxLabels].forEach(checkbox => checkbox.addEventListener('click', this._markCheckbox.bind(this)));
        this.usernameInput.addEventListener('focusout', this._usernameValidation.bind(this));
    }
}