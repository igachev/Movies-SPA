const router = require('express').Router()

const userService = require('../services/userService.js')

router.post('/register', async (req,res) => {
    const {email,password} = req.body;

    try {
    const result = await userService.register(email,password)
    res.json(result)
    } catch (err) {
        console.log(err.message);
    }
    
})



module.exports = router