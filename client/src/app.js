import page from '../node_modules/page/page.mjs';

import { homePage } from './views/home.js';
import { registerPage } from './views/register.js';
import { loginPage } from './views/login.js';
import { moviesPage } from './views/movies.js';
import { createPage } from './views/create.js';
import { myMoviesPage } from './views/myMovies.js';
import { editPage } from './views/edit.js';
import { detailsPage } from './views/details.js';

import * as api from './api/api.js';

api.settings.host = 'http://localhost:3030';
window.api = api;

page('/home', homePage);
page('/register', registerPage);
page('/login', loginPage);
page('/movies', moviesPage);
page('/create', createPage);
page('/my-movies', myMoviesPage);
page('/edit/:id', editPage);
page('/details/:id', detailsPage);

page.start();
