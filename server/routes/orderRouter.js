const Router = require('express');
const router = new Router();
const orderController = require('../controllers/orderController')
const checkRole = require('../midlleware/checkRoleMiddleware')
const getSystemSourceMiddleware = require("../midlleware/getSystemSourceMiddleware");

router.get('/', checkRole, getSystemSourceMiddleware, orderController.getAll)
router.get('/:id', checkRole, getSystemSourceMiddleware, orderController.getOne)

module.exports = router
