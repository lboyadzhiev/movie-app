import * as api from './api.js';

api.settings.host = 'https://parseapi.back4app.com';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

function createPointer(name, id) {
    return {
        _type: 'Pointer',
        className: name,
        objectId: id,
    };
}

export async function getMovies() {
    return await api.get(host + '/classes/MyCustomClassName');
}

export async function getMovie(id) {
    return await api.get(host + '/classes/MyCustomClassName' + id);
}

export async function createMovie(movie) {
    const userId = sessionStorage.getItem('userId');
    const body = Object.assign({}, movie, {
        owner: createPointer('_User', userId),
    });
    return await api.post(host + 'classes/MyCustomClassName', body);
}

export async function updateMovie(id, movie) {
    return await api.put(host + 'classes/MyCustomClassName' + id, movie);
}

export async function deleteMovie(id) {
    return await api.del(host + 'classes/MyCustomClassName' + id);
}
