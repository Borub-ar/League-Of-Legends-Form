export default class Common {
    _topDivider = document.querySelector('.top-bar__divider');
    _form = document.querySelector('.main-container__form');

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


}

// export class CommonValidation {

// }