import * as api from './api.js';

api.settings.host = 'https://parseapi.back4app.com';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;
