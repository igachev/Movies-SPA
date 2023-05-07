import {post} from './requester.js'

const baseUrl = 'http://localhost:5000'

export async function subscription(data) {
const result = await post(`${baseUrl}/subscribe`,data)
return result
}