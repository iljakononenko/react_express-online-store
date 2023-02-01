const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userController')
const authMiddleware = require('../midlleware/authMiddleware')

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', authMiddleware, UserController.check)
router.get('/data', authMiddleware, UserController.getUserData)
router.post('/changePassword', authMiddleware, UserController.changePassword)
router.post('/changeUserData', authMiddleware, UserController.changeUserData)

module.exports = router
