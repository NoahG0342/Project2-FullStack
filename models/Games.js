const Schema = mongoose.Schema

const Games = new Schema({
    name: String,
    genre: String,
    rating: Number,
   
})

module.exports = mongoose.model('Games', Games)
