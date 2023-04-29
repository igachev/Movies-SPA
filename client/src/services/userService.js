import {get,post} from './requester.js'

const baseUrl = 'http://localhost:5000'

export async function register(email,password) {
const result = await post(`${baseUrl}/users/register`, {email,password})
return result
}

export async function login(email,password) {
    const result = await post(`${baseUrl}/users/login`, {email,password})
    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);
    return result
}