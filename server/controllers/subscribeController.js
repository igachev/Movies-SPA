
const router = require('express').Router()
const subscribeService = require('../services/subscribeService.js')

router.post('/', async (req,res) => {
const {email} = req.body;

try {
    const emailSent = await subscribeService.sendEmail(email)
    res.json({message: 'email sent'})
} catch (err) {
    res.status(400).json({message: err.message})
}
})

module.exports = router