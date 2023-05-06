

async function request(url, options) {
    try {
        const response = await fetch(url, options);

        if (response.ok == false) {

            if(response.status === 403 || response.status === 401) {
                sessionStorage.removeItem('authToken')
                sessionStorage.removeItem('userId')
                sessionStorage.removeItem('email')
            } 

            const error = await response.json();
            throw new Error(error.message);
        }

        try {
            const data = await response.json();
            return data;
        } catch (err) {
            return response;
        }
    } catch (err) {
       const msg = document.querySelector('.err-message')
       msg.textContent = err.message
       setTimeout(() => {
         msg.textContent = ''
       }, 3000);
      //  alert(err.message);
        throw err;
    }
}

function getOptions(method = 'get', body) {
    const options = {
        method,
        headers: {}
    };

    const token = sessionStorage.getItem('authToken');
    if (token != null) {
        options.headers['X-Authorization'] = token;
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

export async function delComment(url,data) {
    return await request(url, getOptions('delete', data))
}