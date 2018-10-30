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

const bo4 = new Games({
    name: "Black Ops 4",
    genre: "first person shooter",
    rating: 9,
})

const counterS = new Games({
    name: "Counter Strick Source",
    genre: "first person shooter",
    rating: 7,
})

const csgo = new Games({
    name: "Counter Stick Global Offence",
    genre: "first person shooter",
    rating: 8,
})

const tf = new Games({
    name: "Team Fortress",
    genre: "first person shooter",
    rating: 6,
})

const fn = new Games({
    name: "FortNite",
    genre: "battle royale",
    rating: 8,
})

const ut = new Games({
    name: "Unreal Tournament",
    genre: "first person shooter",
    rating: 4,
})

const rr = new Games({
    name: "Robo Recall",
    genre: "first person shooter",
    rating: 6,
})

const steam = new Platform({
    name: "Steam",
    rating: 9,
    dateC: "September 12, 2003",
    Games: [counterS, csgo, tf]
})

const battleNet = new Platform({
    name: "Battle.net",
    rating: 8,
    dateC: " October 24, 2017",
    Games: [overWatch, wow, bo4]
})

const epic = new Platform({
    name: "Epic Games",
    rating: 8,
    dateC: "1991",
    Games: [fn, ut, rr]
})

User.create()

Platform.remove({})
    .then(() => Games.insertMany([overWatch, wow, bo4, counterS, csgo, tf, fn, ut, rr]))
    .then(() => steam.save())
    .then(() => battleNet.save())
    .then(() => epic.save())
    .then(() => billy.save())
    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close())