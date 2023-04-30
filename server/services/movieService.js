const Movie = require('../models/Movie.js')

exports.create = async (userId,movieData) => {
    const existingMovie = await Movie.findOne({title:movieData.title})

    if(existingMovie) {
        throw new Error('Movie already exists!')
    }

const movie = await Movie.create({...movieData, owner: userId})
return movie;
}