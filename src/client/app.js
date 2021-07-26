'use strict';

import 'normalize.css';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Swup from 'swup';
import SwupFormsPlugin from '@swup/forms-plugin';

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
            import('./pages/index').then(({ default: IndexJS }) => {
                const index = new  IndexJS;
            })
        }

        if (document.querySelector('#birth-date-page')) {
            import('./pages/birthDate').then(({ default: BirthDateJS }) => {
                const birthDate = new BirthDateJS();
            })
        }

        if (document.querySelector('#last-step-page')) {
            import('./pages/lastStep').then(({ default: LastStepJS }) => {
                const lastStep = new LastStepJS();
            })
        }
    }
}

const app = new App();