const Router = require('express')
const router = new Router()
const cartController = require('../controllers/cartController')
const authMiddleware = require("../midlleware/authMiddleware");
const getSystemSourceMiddleware = require("../midlleware/getSystemSourceMiddleware");

router.post('/addToCart', authMiddleware, cartController.addToCart)
router.post('/removeElement', authMiddleware, cartController.removeElement)
router.post('/makeOrder', authMiddleware, getSystemSourceMiddleware, cartController.makeOrder)
router.get('/', authMiddleware, cartController.getCartItems)

module.exports = router

