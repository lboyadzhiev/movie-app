async function request(url, options) {
    try {
        const response = await fetch(url, options);

        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();
        return data;
    } catch (arr) {
        alert(err.message);
        throw err;
    }
}

function getOprions(body) {
    const options = {
        headers: {},
    };

    const token = sessionStorage.getItem('authToken');
}
async function get(url) {
    return await request(url);
}
