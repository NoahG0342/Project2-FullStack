equire('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI).then(() => {
   console.log('Connected to mongo');
})

module.exports = mongoose