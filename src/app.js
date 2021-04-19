import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';

const main = document.getElementById('container');
setUserNav();

page('/', decorateContext, homePage);
page('/login', decorateContext, loginPage);

page.start();

function decorateContext(ctx, next) {
    ctx.render = content => render(content, main);
    ctx.setUserNav = setUserNav;

    next();
}

function setUserNav() {
    const username = sessionStorage.getItem('userName');

    if (username != null) {
        document.getElementById('welcome').textContent = `Welcome, ${username}`;
        document.querySelector('#user').style.display = 'block';
        document.querySelector('#quest').style.display = 'none';
    } else {
        document.querySelector('#user').style.display = 'none';
        document.querySelector('#quest').style.display = 'block';
    }
}
