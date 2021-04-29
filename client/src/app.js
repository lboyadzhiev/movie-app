import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { logout } from './api/data.js';
import { homePage } from './views/home.js';
import { registerPage } from './views/register.js';
import { loginPage } from './views/login.js';
import { moviesPage } from './views/movies.js';
import { createPage } from './views/create.js';
import { myMoviesPage } from './views/myMovies.js';
import { editPage } from './views/edit.js';
import { detailsPage } from './views/details.js';

const main = document.getElementById('container');

page('/', renderView, homePage);
page('/register', renderView, registerPage);
page('/login', renderView, loginPage);
page('/movies', renderView, moviesPage);
page('/create', renderView, createPage);
page('/my-movies', renderView, myMoviesPage);
page('/edit/:id', renderView, editPage);
page('/details/:id', renderView, detailsPage);

document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout();

    setUserNav();
    page.redirect('/');
});

setUserNav();

page.start();

function renderView(ctx, next) {
    ctx.render = content => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const email = sessionStorage.getItem('email');

    if (email != null) {
        document.getElementById('welcome').textContent = `Welcome, ${email}!`;
        document.getElementById('user').style.display = 'block';
        document.getElementById('quest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('quest').style.display = 'block';
    }
}
