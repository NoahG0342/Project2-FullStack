const Platform = require('../models/Platform')
const Games = require('../models/Games')

const gamesController = {
    index: (req, res) => {
        const platformId = req.params.platformsId
        Platform.findById(platformId).populate(`game`)
            .then(platform => {
                console.log("STORE", platform)
                const games = platform.games
                res.send(games)
            })
    },
    show: (req, res) =>{
        const gameId = req.params.gameId
        Games.findById(gameId)
        .then(games => {
            res.render('games', show)
        })
    }

}

module.exports = gamesController