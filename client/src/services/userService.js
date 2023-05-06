import {get,post} from './requester.js'

const baseUrl = 'http://localhost:5000'

export async function register(email,password) {
const result = await post(`${baseUrl}/users/register`, {email,password})
return result
}

export async function login(email,password) {
   
    const result = await post(`${baseUrl}/users/login`, {email,password})
    
    if(!result.hasOwnProperty('message')) {
    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);
    }
    return result
    
}

export async function logout() {
    const result = await get(`${baseUrl}/users/logout`)
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('authToken')
    sessionStorage.removeItem('userId')
    return result;
}