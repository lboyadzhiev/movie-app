import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import * as api from './api/data.js';

import { logout as apiLogout } from './api/data.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { catalogPage } from './views/catalog.js';
import { myPage } from './views/myCatalog.js';
import { createPage } from './views/createMovie.js';

const main = document.getElementById('container');
document.getElementById('logoutBtn').addEventListener('click', logout);
setUserNav();

page('/', decorateContext, homePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/catalog', decorateContext, catalogPage);
page('/myCatalog', decorateContext, myPage);
page('/create', decorateContext, createPage);

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

async function logout() {
    await apiLogout();
    setUserNav();
    page.redirect('/');
}
