const mongoose = require('mongoose')
require('dotenv').config()

async function initDatabase() {
    mongoose.set('strictQuery',false)
    await mongoose.connect(process.env.DATABASE_URL)
    console.log('db connected');
}

module.exports = initDatabase