const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const getSystemSourceMiddleware = require("../midlleware/getSystemSourceMiddleware");
const checkRole = require("../midlleware/checkRoleMiddleware");

router.post('/', checkRole, getSystemSourceMiddleware, brandController.create)
router.post('/edit', checkRole, getSystemSourceMiddleware, brandController.edit)
router.post('/remove', checkRole, getSystemSourceMiddleware, brandController.remove)
router.get('/', getSystemSourceMiddleware, brandController.getAll)

module.exports = router
