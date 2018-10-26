const Schema = mongoose.Schema

const Platform = new Schema({
    name: String,
    rating: Number,
    dateC: String,
    games: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Games'
        }
    ]
})

module.exports = mongoose.model('Platform', Platform)