export default class Common {
    topDivider = document.querySelector('.top-bar__divider');
    form = document.querySelector('.main-container__form');

    constructor() {
        this._handleTopDivider();
    }

    _handleTopDivider() {
        if (!document.querySelector('#index-page')) {
            this.topDivider.style.visibility = 'hidden';
        } else this.topDivider.style.visibility = 'visible';
    }

    _setSwupAttribute() {
        this.form.setAttribute('data-swup-form', '');
    }

    _removeSwupAttribute() {
        this.form.removeAttribute('data-swup-form');
    }
}

