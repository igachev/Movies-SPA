import {get,post} from './requester.js'

const baseUrl = 'http://localhost:5000'

export async function create(movieData) {
    const result = await post(`${baseUrl}/movies/create`,movieData)
    return result;
}

export async function getAll() {
    const result = await get(`${baseUrl}/movies`)
    return result
}

export async function getOne(movieId) {
    const result = await get(`${baseUrl}/movies/${movieId}`)
    return result
}