import 'normalize.css';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Swup from 'swup';
import SwupFormsPlugin from '@swup/forms-plugin';

// import IndexJS from './app';
// import BirthDateJS from './birthDate';

const swup = new Swup({
    plugins: [new SwupFormsPlugin()]
});


class App {
    constructor() {
        this._init();
        swup.on('contentReplaced', this._init.bind(this));
    }

    _init() {
        if (document.querySelector('#index-page')) {
            const emailForm = document.querySelector('.main-container__form');
            const emailInput = document.querySelector('.main-container__input');
            const placeholder = document.querySelector('.main-container__placeholder');
            const errorIcon = document.querySelector('.main-container__error-icon');
            const errorMsg = document.querySelector('.main-container__error-msg');

            const minimizeEmailPlaceholder = function() {
                placeholder.classList.add('main-container__placeholder--focus');
            }
        
            const normalizeEmailPlaceholder = function() {
                if (emailInput.value) return;
                placeholder.classList.remove('main-container__placeholder--focus');
            }
        
            const emailValidation = function(e) {
                const regex = /@/;
        
                if (!emailInput.value || !regex.test(emailInput.value)) {
                    e.preventDefault();
                    // removing required swup attribute
                    emailForm.removeAttribute('data-swup-form');
                    showEmailError();
                }
        
                if (emailInput.value && regex.test(emailInput.value)) {
                    // setting required swup attribute
                    emailForm.setAttribute('data-swup-form', '');
                    hideEmailError();
                }
            }
        
            const showEmailError = function() {
                emailInput.classList.add('main-container__input--error');
                errorIcon.classList.add('main-container__error-icon--show');
                errorMsg.classList.add('main-container__error-msg--show');
            }
        
            const hideEmailError = function() {
                emailInput.classList.remove('main-container__input--error');
                errorIcon.classList.remove('main-container__error-icon--show');
                errorMsg.classList.remove('main-container__error-msg--show');
            }

            emailInput.addEventListener('focus', minimizeEmailPlaceholder);
            emailInput.addEventListener('focusout', normalizeEmailPlaceholder);
            emailInput.addEventListener('focusout', emailValidation);
            emailForm.addEventListener('submit', emailValidation);
        }

        if (document.querySelector('#birth-date-page')) {
            const birthDateForm = document.querySelector('.main-container__form');
            const formSelects = document.querySelectorAll('.custom-select__select');
            const errorMsg = document.querySelector('.main-container__date-error');

            const birthFormValidation = function (e) {
                if ([...formSelects].some(sel => sel.value === '0')) {
                    e.preventDefault();
                    showError();
                } else hideError();
            }

            const showError = function () {
                errorMsg.classList.remove('main-container__date-error--hidden');
            }

            const hideError = function () {
                errorMsg.classList.add('main-container__date-error--hidden');
            }


            birthDateForm.addEventListener('submit', birthFormValidation);
            formSelects.forEach(sel => sel.addEventListener('focusout', birthFormValidation));
        }
    }
}

const app = new App();