import {get,post,del,put} from './requester.js'

const baseUrl = 'http://localhost:5000'

const moviesPerPage = 5;

export async function create(movieData) {
    const result = await post(`${baseUrl}/movies/create`,movieData)
    return result;
}

export async function getAll(currentPage) {
    let result = await get(`${baseUrl}/movies`)
    const trimStart = (currentPage - 1) * moviesPerPage
    const trimEnd = trimStart + moviesPerPage
    result = result.slice(trimStart,trimEnd)
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

export async function addLike(movieId,userId) {
    let movie = await getOne(movieId)

    if(movie.likes.includes(userId)) {
        alert('User already liked this movie')
        return
    }
    
    movie.likes.push(userId)
    const result = await put(`${baseUrl}/movies/${movieId}`,movie)
    return result
}

export async function isLiked(movieId,userId) {
    let movie = await getOne(movieId)

    if(movie.likes.includes(userId)) {
        return true
    }
    return false;
}