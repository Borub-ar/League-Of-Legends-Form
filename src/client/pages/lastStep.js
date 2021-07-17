import Common from '../common';

export default class App extends Common {
    inputs = document.querySelectorAll('.main-container__input');
    placeholder = document.querySelector('.main-container__placeholder');
    checkboxes = document.querySelectorAll('.main-container__checkbox');
    checkboxLabels = document.querySelectorAll('.main-container__checkbox-label');

    constructor() {
        super();
        this._handleEvents();
    }

    _placeholderFocus(e) {
    e.target.parentElement.querySelector('.main-container__placeholder').classList.add('main-container__placeholder--small-focus');

    }

    _placeholderNormalize() {
        if (this.emailInput.value) return;
        this.placeholder.classList.remove('main-container__placeholder--focus');
    }

    _markCheckbox(e) {
        e.target.parentElement.querySelector('.main-container__checkbox').classList.toggle('main-container__checkbox--marked');
    }

    _handleEvents() {
        [...this.inputs].forEach(input => input.addEventListener('focus', this._placeholderFocus.bind(this)));
        [...this.checkboxes].forEach(checkbox => checkbox.addEventListener('click', this._markCheckbox.bind(this)));
        [...this.checkboxLabels].forEach(checkbox => checkbox.addEventListener('click', this._markCheckbox.bind(this)));
    }
}