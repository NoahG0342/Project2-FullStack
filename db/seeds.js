const Platform = require('../models/Platform.js')
const Games = require('../models/Games.js')
const User = require('../models/User.js')
const mongoose = require('./connections')

const billy = new User({
    name: "billy",
    email: "billy@BILLY.Billy",
    password: "billy"
})

