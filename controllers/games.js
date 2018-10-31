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
        console.log(req.params)
        Games.findById(req.params.gamesId).populate(`games`)
            .then((games) => {
                res.render(
                    'games/show',
                    {games: games}
                )
            })
    },

    update: (req, res) => {
        Games.findByIdAndUpdate(req.params.id, req.body).then((update) => {
            res.redirect(`/games/${update._id}`)
        })
    },
    
    delete: (req, res) => {
        Games.findByIdAndRemove(req.params.gamesId).then(() => {
            res.redirect(`/platforms/${req.params.platformsId}`)
        })
    },

    create: (req, res) => {
        Games.create(req.body).then((newGame) => {
            newGame.save()
            console.log(req.body)
            res.redirect(`/platforms/${req.params.platformsId}`)
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