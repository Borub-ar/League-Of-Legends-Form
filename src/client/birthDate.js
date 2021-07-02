const birthDateForm = document.querySelector('.main-container__form');
const formSelects = document.querySelectorAll('.main-container__birth-select');
const errorMsg = document.querySelector('.main-container__date-error');

const showError = function () {
    errorMsg.classList.remove('main-container__date-error--hidden');
};

const hideError = function() {
    errorMsg.classList.add('main-container__date-error--hidden');
};

const birthFormValidation = function (e) {
    if ([...formSelects].some(sel => sel.value === '0')) {
        e.preventDefault();
        showError();
    } else hideError();
    
};

birthDateForm.addEventListener('submit', birthFormValidation);