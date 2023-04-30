import {post} from './requester.js'

const baseUrl = 'http://localhost:5000'

export async function create(movieData) {
    const result = await post(`${baseUrl}/movies/create`,movieData)
    return result;
}