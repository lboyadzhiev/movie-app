export const settings = {
    host: 'https://parseapi.back4app.com/classes/MyCustomClassName',
};

async function request(url, options) {
    try {
        const response = await fetch(url, options);

        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        try {
            const data = await response.json();
            return data;
        } catch (err) {
            return response;
        }
    } catch (errr) {
        alert(err.message);
        throw err;
    }
}

function getOptions(method = 'get', body) {
    const options = {
        method,
        headers: {
            'X-Parse-Application-Id':
                'xi6GoOmNZ8d8JBDvMHanl3R8f0tasKcZa3J7EeYH',
            'X-Parse-REST-API-Key': 'YVOhoQWu6jnK5LtvFJQKkyAAAPvG8dt3V8LySWwp',
        },
    };

    const token = sessionStorage.getItem('authToken');
    if (token != null) {
        options.headers['X - Autorization'] = token;
    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    return options;
}

export async function get(url) {
    return await request(url, getOptions());
}

export async function post(url, data) {
    return await request(url, getOptions('post', data));
}

export async function put(url, data) {
    return await request(url, getOptions('put', data));
}

export async function del(url) {
    return await request(url, getOptions('delete'));
}

export async function register(userName, emial, password) {
    const result = await post(settings.host);
}
