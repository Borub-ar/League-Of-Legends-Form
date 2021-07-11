// import {construct
// } from "core-js/fn/reflect";



// const showError = function () {
//     errorMsg.classList.remove('main-container__date-error--hidden');
// };

// const hideError = function () {
//     errorMsg.classList.add('main-container__date-error--hidden');
// };

// const birthFormValidation = function (e) {
//     if ([...formSelects].some(sel => sel.value === '0')) {
//         e.preventDefault();
//         showError();
//     } else hideError();
// };

// formSelects.forEach(sel => sel.addEventListener('focusout', birthFormValidation));

const birthDateForm = document.querySelector('.main-container__form');
const formSelects = document.querySelectorAll('.custom-select__select');
const errorMsg = document.querySelector('.main-container__date-error');

export default class BirthDate {
    constructor() {
        birthDateForm.addEventListener('submit', this._birthFormValidation.bind(this));
        formSelects.forEach(sel => sel.addEventListener('focusout', this._birthFormValidation.bind(this)));
    }

    _birthFormValidation(e) {
        if ([...formSelects].some(sel => sel.value === '0')) {
            e.preventDefault();
            this._showError();
        } else this._hideError();
    }

    _showError() {
        errorMsg.classList.remove('main-container__date-error--hidden');
    }

    _hideError() {
        errorMsg.classList.add('main-container__date-error--hidden');
    }
}