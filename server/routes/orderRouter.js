const Router = require('express');
const router = new Router();
const orderController = require('../controllers/orderController')
const checkRole = require('../midlleware/checkRoleMiddleware')
const authMiddleware = require("../midlleware/authMiddleware");

router.post('/',authMiddleware, orderController.create)
router.get('/', authMiddleware, orderController.getAll)

module.exports = router
