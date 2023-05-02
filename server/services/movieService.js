const Movie = require('../models/Movie.js')

exports.create = async (userId,movieData) => {
    const existingMovie = await Movie.findOne({title:movieData.title})

    if(existingMovie) {
        throw new Error('Movie already exists!')
    }

const movie = await Movie.create({...movieData, owner: userId})
return movie;
}

exports.getAll = async () => {
    const movies = await Movie.find({})
    return movies
}

exports.getOne = async (movieId) => {
    const movie = await Movie.findById(movieId)

    if(!movie) {
        throw new Error('Movie does not exists!')
    }

    return movie;
}

exports.delete = async (movieId) => {
    const movie = await Movie.findByIdAndDelete(movieId)

    if(!movie) {
        throw new Error('Movie does not exists!')
    }

    return movie;
}

exports.edit = async (movieId,data) => {
    const movie = await Movie.findByIdAndUpdate(movieId,data,{runValidators:true})
    return movie
}