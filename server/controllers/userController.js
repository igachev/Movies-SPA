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

router.post('/login', async (req,res) => {
    const {email,password} = req.body;

    try {
        const result = await userService.login(email,password)
        res.json(result)
    } catch (err) {
        console.log(err.message);
    }
})

router.get('/logout', (req,res) => {
    res.json({ok:true})
})

module.exports = router