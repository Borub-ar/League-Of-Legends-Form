import 'normalize.css';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Swup from 'swup';
import SwupFormsPlugin from '@swup/forms-plugin';

import IndexJS from './index';
import BirthDateJS from './birthDate';
import LastStepJS from './lastStep';

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
            const index = new IndexJS();
        }

        if (document.querySelector('#birth-date-page')) {
            const birthDate = new BirthDateJS();
        }

        if (document.querySelector('#last-step-page')) {
            const lastStep = new LastStepJS();
        }
    }
}

const app = new App();

console.log()