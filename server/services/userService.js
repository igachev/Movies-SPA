const User = require('../models/User.js')
const jwt = require('../jwtPromise/jsonwebtoken.js')
const SECRET = process.env.JWT_SECRET

exports.register = async (email,password) => {
    const existingUser = await User.findOne({email})

    if(existingUser) {
        throw new Error('User already exists!')
    }

    const user = new User({email,password})
    await user.save()
    
}

exports.login = async (email,password) => {
    const user = await User.findOne({email})

    if(!user) {
        throw new Error('Invalid email or password')
    }

    const checkPassword = await User.validatePassword(password)

    if(!checkPassword) {
        throw new Error('Invalid email or password')
    }

    // I have to create authentication middleware to verify login
    const payload = {_id: user._id, email: user.email}
    const token = jwt.sign(payload,SECRET,{ expiresIn: '1h' })
    return token
}