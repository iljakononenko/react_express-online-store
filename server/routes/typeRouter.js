const Router = require('express')
const router = new Router();
const typeController = require('../controllers/typeController')
const checkRole = require('../midlleware/checkRoleMiddleware')
const getSystemSourceMiddleware = require("../midlleware/getSystemSourceMiddleware");

router.post('/', checkRole, getSystemSourceMiddleware, typeController.create)
router.post('/edit', checkRole, getSystemSourceMiddleware, typeController.edit)
router.post('/remove', checkRole, getSystemSourceMiddleware, typeController.remove)
router.get('/', getSystemSourceMiddleware, typeController.getAll)

module.exports = router
