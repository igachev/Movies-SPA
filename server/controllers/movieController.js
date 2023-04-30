
const router = require('express').Router()
const movieService = require('../services/movieService.js')

router.post('/create', async (req,res) => {
    const {title,year,runtime,genre,description,imageUrl} = req.body;
    const movieData = {title,year,runtime,genre,description,imageUrl}
    const userId = req.user._id

    try {
        const movie = await movieService.create(userId,movieData)
        res.json({_id: movie._id})
    } catch (err) {
       res.status(400).json({message: err.message})
    }
})



module.exports = router