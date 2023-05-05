const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type:String,
        required: [true,'title is required']
    },
    year: {
        type:Number,
        required: [true,'year is required']
    },
    runtime: {
        type: Number,
        required: [true,'runtime is required']
    },
    genre: {
        type:String,
        required: [true,'genre is required']
    },
    description: {
        type: String,
        required:[true,'description is required']
    },
    imageUrl: {
        type:String,
        required:[true,'imageUrl is required']
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref:'User'
    },
    likes: [
        {
            type: mongoose.Types.ObjectId,
            ref:'User'
        }
    ],
    comments: [
        {
            comment: {type: String},
            createdAt: {type: Date, default: Date.now }
        }
    ]
})

const Movie = mongoose.model('Movie',movieSchema)

module.exports = Movie