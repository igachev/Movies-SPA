const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true,'email is required'],
        minLength:[5,'email is too short!'],
       // validate: /^[a-zA-Z0-9]+$/
       validate: {
        validator: function(value) {
            return /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/.test(value)
        },
       }
    },
    
    password: {
        type: String,
        required: [true,'password is required'],
        minLength:[4,'Password is too short!'],
        maxLength:[10,'Password is too long!'],
        validate: /^[a-zA-Z0-9]+$/
    }
})

const User = mongoose.model('User',userSchema)

module.exports = User;