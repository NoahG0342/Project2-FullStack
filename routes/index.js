const express = require('express')
const router = express.Router()
const appController = require('../controllers/application')
const platformsController = require('../controllers/platforms')
const gamesController = require('../controllers/games')

///home page
router.get('/', appController.index)

router.get('/platforms', platformsController.index)


router.get('/platforms/new', platformsController.new)

router.get('/platforms/:platformsId', platformsController.show)

router.get('/platforms/:platformsId/games', gamesController.index)

router.get('/platforms/:platformsId/games/:gamesId', gamesController.show)

router.delete('/platforms/:platformsId/games/:gamesId', gamesController.delete)

router.post('/platforms/:platformsId/games', gamesController.create)

module.exports = router


