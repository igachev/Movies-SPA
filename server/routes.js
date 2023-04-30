const router = require('express').Router()

const userController = require('./controllers/userController.js')
const movieController = require('./controllers/movieController.js')

router.use('/users',userController)
router.use('/movies',movieController)

module.exports = router