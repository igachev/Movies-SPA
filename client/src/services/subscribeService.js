import {post} from './requester.js'

const baseUrl = 'http://localhost:5000'
//const baseUrl = 'https://test-movies-api.onrender.com'

export async function subscription(data) {
const result = await post(`${baseUrl}/subscribe`,data)
return result
}