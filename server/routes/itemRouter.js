const Router = require('express')
const router = new Router()
const itemController = require('../controllers/itemController')
const getSystemSourceMiddleware = require('../midlleware/getSystemSourceMiddleware')

router.post('/', itemController.create)
router.get('/', itemController.getAll)
router.get('/:id', getSystemSourceMiddleware, itemController.getOne)

module.exports = router
