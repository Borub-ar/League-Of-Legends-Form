import Common from './common';
export default class App extends Common {
  _placeholder = document.querySelector('.main-container__placeholder');

  constructor() {
    super();
    this._handleEvents();
    localStorage.clear();
  }

  _placeholderFocus() {
    this._placeholder.classList.add('main-container__placeholder--focus');
  }

  _normalizePlaceholder() {
    if (this._emailInput.value) return;
    this._placeholder.classList.remove('main-container__placeholder--focus');
  }

  _hideTopDivider() {
    this._topDivider.style.opacity = 0;
  }

  _pageValidation(e) {
    if (!this._emailValidation()) {
      e.preventDefault();
      this._removeSwupAttribute();
      return;
    }
    this._hideTopDivider();
    this._setSwupAttribute();
  }

  _handleEvents() {
    this._emailInput.addEventListener('focus', this._placeholderFocus.bind(this));
    this._emailInput.addEventListener('focusout', this._normalizePlaceholder.bind(this));
    this._emailInput.addEventListener('focusout', this._pageValidation.bind(this));
    this._form.addEventListener('submit', this._pageValidation.bind(this));
  }
}
