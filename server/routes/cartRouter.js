const Router = require('express')
const router = new Router()
const cartController = require('../controllers/cartController')
const authMiddleware = require("../midlleware/authMiddleware");

router.post('/addToCart', authMiddleware, cartController.addToCart)
router.post('/removeElement', authMiddleware, cartController.removeElement)
router.post('/makeOrder', authMiddleware, cartController.makeOrder)
router.get('/', authMiddleware, cartController.getCartItems)

module.exports = router

