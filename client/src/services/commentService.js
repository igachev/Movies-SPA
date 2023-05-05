import {get,post,del,put} from './requester.js'

const baseUrl = 'http://localhost:5000'

export async function add(movieId,data) {
    const result = await post(`${baseUrl}/comments/${movieId}`,data)
    return result
}

export async function getMovieComments(movieId) {
    const result = await get(`${baseUrl}/comments/${movieId}`)
    return result
}