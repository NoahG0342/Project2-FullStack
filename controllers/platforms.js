const Platform = require('../models/Platform')

const platformsController = {
    index: (req, res) => {
        Platform.find({}).populate('products')
            .then((platforms) => {
                res.

            })
    }
}