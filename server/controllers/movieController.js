
const router = require('express').Router()
const movieService = require('../services/movieService.js')
const authMiddleware = require('../middlewares/authMiddleware.js')

router.post('/create', authMiddleware.isAuthorized, async (req,res) => {
    const {title,year,runtime,genre,description,imageUrl,likes} = req.body;
    const movieData = {title,year,runtime,genre,description,imageUrl,likes}
    const userId = req.user._id

    try {
        const movie = await movieService.create(userId,movieData)
        res.json({_id: movie._id})
    } catch (err) {
       res.status(400).json({message: err.message})
    }
})

router.get('/', async (req,res) => {
    try {
        const movies = await movieService.getAll()
        res.json(movies)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.get('/:movieId', async (req,res) => {
    const movieId = req.params.movieId

    try {
        const movie = await movieService.getOne(movieId)
        res.json(movie)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.delete('/:movieId', authMiddleware.isAuthorized, async (req,res) => {
    const movieId = req.params.movieId

    try {
        const movie = await movieService.delete(movieId)
        res.json({_id: movie._id})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.put('/:movieId', authMiddleware.isAuthorized, async (req,res) => {
    const movieId = req.params.movieId
    const {title,year,runtime,genre,description,imageUrl,likes} = req.body

    const data = {title,year,runtime,genre,description,imageUrl,likes}

    try {
        const movie = await movieService.edit(movieId,data)
        res.json(movie)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})



module.exports = router