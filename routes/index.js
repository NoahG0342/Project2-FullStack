const express = require('express')
const router = express.Router()
const appController = require('../controllers/application')
const platformsController = require('../controllers/platforms')


///home page
router.get('/', appController.index)

///home page for stores
//  router.get('/platforms', platformsController.index)


module.exports = router