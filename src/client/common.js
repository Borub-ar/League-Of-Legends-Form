export default class Common {
    topDivider = document.querySelector('.top-bar__divider');
    form = document.querySelector('.main-container__form');
    header = document.querySelector('header');
    footer = document.querySelector('.footer');

    constructor() {
        this._handleTopDivider();
    }

    _handleTopDivider() {
        if (!document.querySelector('#index-page')) {
            this.topDivider.style.visibility = 'hidden';
        } else this.topDivider.style.visibility = 'visible';
    }
}

