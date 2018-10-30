const express = require('express')
const router = express.Router()
const appController = require('../controllers/application')
const platformsController = require('../controllers/platforms')
const productsController = require('../controllers/products')

///home page
router.get('/', appController.index)

///home page for stores
router.get('/platforms', platformsController.index)

///
router.get('/platforms/new', platformsController.new)

////individual stores
router.get('/platforms/:platformsId', platformsController.show)




module.exports = router