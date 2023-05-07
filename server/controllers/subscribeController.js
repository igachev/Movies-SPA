
const router = require('express').Router()
const subscribeService = require('../services/subscribeService.js')

router.post('/', async (req,res) => {
const {userEmail} = req.body;
console.log(userEmail);
try {
    const emailSent = await subscribeService.sendEmail(userEmail)
    res.json({message: 'email sent'})
} catch (err) {
    res.status(400).json({message: err.message})
}
})

module.exports = router