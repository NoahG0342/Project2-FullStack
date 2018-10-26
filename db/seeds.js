const Platform = require('../models/Platform.js')
const Games = require('../models/Games.js')
const User = require('../models/User.js')
const mongoose = require('./connections')

const billy = new User({
    name: "billy",
    email: "billy@BILLY.Billy",
    password: "billy"
})

const overWatch = new Games({
    name: "Overwatch",
    genre: "first person shooter",
    rating: 8,
})

const wow = new Games({
    name: "World Of Warcraft",
    genre: "MMORPG",
    rating: 7,

})

