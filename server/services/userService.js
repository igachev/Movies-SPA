const User = require('../models/User.js')

exports.register = async (email,password) => {
    const existingUser = await User.findOne({email})

    if(existingUser) {
        throw new Error('User already exists!')
    }

    const user = new User({email,password})
    await user.save()
    
}