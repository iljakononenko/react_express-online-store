const Router = require('express')
const router = new Router()
const itemController = require('../controllers/itemController')
const getSystemSourceMiddleware = require('../midlleware/getSystemSourceMiddleware')
const checkRole = require("../midlleware/checkRoleMiddleware");

router.post('/', checkRole, getSystemSourceMiddleware, itemController.create)
router.post('/edit', checkRole, getSystemSourceMiddleware, itemController.edit)
router.post('/remove', checkRole, getSystemSourceMiddleware, itemController.remove)
router.get('/', getSystemSourceMiddleware, itemController.getAll)
router.get('/getAll', getSystemSourceMiddleware, itemController.getAllItems)
router.get('/:id', getSystemSourceMiddleware, itemController.getOne)

module.exports = router
