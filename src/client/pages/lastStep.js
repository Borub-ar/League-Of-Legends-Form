import Common from './common';
export default class App extends Common {
  constructor() {
    super();
    this._handleEvents();
    this._handleValidationEvents();
  }

  _placeholderFocus(e) {
    e.target.parentElement
      .querySelector('.main-container__placeholder')
      .classList.add('main-container__placeholder--small-focus');
  }

  _placeholderNormalize() {
    [...this._inputs].forEach((input) => {
      if (input.value) return;
      if (!input.value) {
        input.parentElement
          .querySelector('.main-container__placeholder')
          .classList.remove('main-container__placeholder--small-focus');
      }
    });
  }

  _pageValidation(e) {
    if (
      !this._usernameValidation() ||
      !this._passwordValidation() ||
      !this._repeatPassValidation() ||
      !this._checkboxValidation()
    ) {
      e.preventDefault();
      this._removeSwupAttribute();
      this._checkAll();
    }

    if (
      this._usernameValidation() &&
      this._passwordValidation() &&
      this._repeatPassValidation() &&
      this._checkboxValidation()
    ) {
      this._setLocalStorage();
      this._setSwupAttribute();
    } else e.preventDefault();
  }

  _handleEvents() {
    [...this._inputs].forEach((input) => input.addEventListener('focus', this._placeholderFocus.bind(this)));
    [...this._inputs].forEach((input) => input.addEventListener('focusout', this._placeholderNormalize.bind(this)));
  }
}
