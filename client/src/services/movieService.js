import {get,post,del,put} from './requester.js'

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

export async function deleteOne(movieId) {
    const result = await del(`${baseUrl}/movies/${movieId}`)
    return result
}

export async function edit(movieId,data) {
    const result = await put(`${baseUrl}/movies/${movieId}`,data)
    return result
}