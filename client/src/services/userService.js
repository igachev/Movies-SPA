import {get,post} from './requester.js'

const baseUrl = 'http://localhost:5000'

export async function register(email,password) {
const result = await post(`${baseUrl}/users/register`, {email,password})
return result
}