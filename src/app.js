import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import * as api from './api/api.js';

api.settings.host = 'https://parseapi.back4app.com/';

window.api = api;
