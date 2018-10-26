const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Project2-FullStack_db')

mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected`)
})

module.exports = mongoose