const router = require('express').Router()

const userController = require('./controllers/userController.js')
const movieController = require('./controllers/movieController.js')
const commentController = require('./controllers/commentController.js')
const subscribeController = require('./controllers/subscribeController.js')

router.use('/users', userController)
router.use('/movies',movieController)
router.use('/comments',commentController)
router.use('/subscribe',subscribeController)

module.exports = router