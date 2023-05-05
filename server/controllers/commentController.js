const router = require('express').Router()
const commentService = require('../services/commentService.js')

router.post('/:movieId', async (req,res) => {
    const { comment,username } = req.body;
    const movieId = req.params.movieId

    try {
        const addedComment = await commentService.add(movieId,comment,username)
        res.json({_id:addedComment._id})
    } catch (err) {
        res.json({message:err.message})
    }
})

router.get('/:movieId', async (req,res) => {
    const movieId = req.params.movieId

    try {
        const movieComments = await commentService.findComments(movieId)
        res.json(movieComments)
    } catch (err) {
        res.json({message:err.message})
    }
})

module.exports = router