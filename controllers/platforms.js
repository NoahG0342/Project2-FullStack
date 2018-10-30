const Platform = require('../models/Platform')

const platformsController = {
    index: (req, res) => {
        Platform.find({}).populate('games')
            .then((platforms) => {
                res.render('platforms/index', {platforms: platforms})

            })
        // res.render('platforms/index')
    },

    new: (req, res) => {
        res.send("hey")
    },
    show: (req, res) =>{

        const platformId = req.params.platformsId
        console.log("platformid", platformId)

        Platform.findById(platformId).populate('games')
        .then((platform) => {

            res.render('platforms/show', {platform: platform})
        })
    }
}

module.exports = platformsController