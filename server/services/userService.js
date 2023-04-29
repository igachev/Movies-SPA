const User = require('../models/User.js')

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

    
}