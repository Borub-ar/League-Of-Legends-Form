import Common from '../common';

export default class App extends Common {
    _inputs = document.querySelectorAll('.main-container__input');
    _placeholders = document.querySelectorAll('.main-container__placeholder');


    constructor() {
        super();
        this._handleValidationEvents();
        this._handleEvents();
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
    }
}