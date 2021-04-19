import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { homePage } from './views/home.js';

// import * as api from './api/api.js';

// api.settings.host = 'https://parseapi.back4app.com/';

const main = document.getElementById('container');
setUserNav();

page('/', decorateContext, homePage);

page.start();

function decorateContext(ctx, next) {
    ctx.render = content => render(content, main);
    ctx.setUserNav = setUserNav;

    next();
}

function setUserNav() {
    const token = sessionStorage.getItem('authToken');

    if (token != null) {
        document.querySelector('#user').style.display = 'block';
        document.querySelector('#quest').style.display = 'none';
    } else {
        document.querySelector('#user').style.display = 'none';
        document.querySelector('#quest').style.display = 'block';
    }
}
