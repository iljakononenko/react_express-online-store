const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userController')
const authMiddleware = require('../midlleware/authMiddleware')
const getSystemSourceMiddleware = require("../midlleware/getSystemSourceMiddleware");

router.post('/registration', getSystemSourceMiddleware, UserController.registration)
router.post('/login', getSystemSourceMiddleware, UserController.login)
router.post('/forms', getSystemSourceMiddleware, UserController.receiveForm)
router.get('/forms', getSystemSourceMiddleware, UserController.getForms)
router.get('/auth', authMiddleware, UserController.check)
router.get('/data', authMiddleware, UserController.getUserData)
router.get('/orders', authMiddleware, UserController.getAllOrders)
router.post('/changePassword', authMiddleware, UserController.changePassword)
router.post('/changeUserData', authMiddleware, UserController.changeUserData)

module.exports = router
