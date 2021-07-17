import Common from '../common';

export default class App extends Common {
    inputs = document.querySelectorAll('.main-container__input');
    placeholders = document.querySelectorAll('.main-container__placeholder');
    checkboxes = document.querySelectorAll('.main-container__checkbox');
    checkboxLabels = document.querySelectorAll('.main-container__checkbox-label');

    constructor() {
        super();
        this._handleEvents();
    }

    _pageValidation(e) {
        if (![...this.checkboxes].every(el => el.classList.contains('main-container__checkbox--marked'))) {
            e.preventDefault();
        }
    }

    _placeholderFocus(e) {
    e.target.parentElement.querySelector('.main-container__placeholder').classList.add('main-container__placeholder--small-focus');
    }

    _placeholderNormalize() {
        [...this.inputs].forEach(input => {
            if(input.value) return
            if(!input.value) {
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
        this.form.addEventListener('submit', this._pageValidation.bind(this));
    }
}