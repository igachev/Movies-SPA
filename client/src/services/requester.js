

async function requester(url,options) {

    try {
        const res = await fetch(url,options)

    if(!res.ok) {
        const error = await res.json()
            throw new Error(error.message)
    }

    try {
        const data = await response.json();
        return data;
    } catch (err) {
        return response;
    }

    } catch (err) {
        alert(err.message)
        throw err
    }
}

async function setOptions(method='get',data) {
    let options = {
        method,
        headers:{}
    }

    const token = sessionStorage.getItem('authToken')

    if(token != null) {
        options.headers['X-Authorization'] = token;
    }

    if(data) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data)
    }

    return options
}

export async function get(url) {
    return await requester(url,setOptions())
}

export async function post(url,data) {
    return await requester(url,setOptions('post',data))
}

export async function put(url,data) {
    return await requester(url,setOptions('put',data))
}

export async function del(url) {
    return await requester(url,setOptions('delete'))
}