const mongoose = require('mongoose')
require('dotenv').config()

async function initDatabase() {
    mongoose.set('strictQuery',false)
    await mongoose.connect(process.env.DATABASE_URL)
  // await mongoose.connect('mongodb://127.0.0.1:27017/movies')
    console.log('db connected');
}

module.exports = initDatabase