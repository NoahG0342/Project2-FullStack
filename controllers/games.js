const Platform = require('../models/Platform')
const Games = require('../models/Games')

const gamesController = {
    index: (req, res) => {
        const platformId = req.params.platformsId
        Platform.findById(platformId).populate(`games`)
            .then(platform => {
                console.log("platform", platform)
                const games = platform.games
                res.send(games)
            })
    },
    show: (req, res) => {
        Games.findById(req.params.id).populate(`games`)
            .then((games) => {
                res.render(
                    'games/show',
                    {games: games}
                )
            })
    }
    // show: (req, res) =>{
    //     const gameId = req.params.gamesId
    //     Games.findById(gameId)
    //     .then(games => {
    //         res.render('games/ show', {game: game})
    //     })
    // }
    

}

module.exports = gamesController