const birthDateForm = document.querySelector('.main-container__form');
const formSelects = document.querySelectorAll('.main-container__birth-select');

const showError = function () {
    console.log('dasdas')
}

const birthFormValidation = function (e) {
    if ([...formSelects].some(sel => sel.value === '0')) {
        e.preventDefault();
        showError();
    }
};

birthDateForm.addEventListener('submit', birthFormValidation);