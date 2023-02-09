const Router = require('express')
const router = new Router()
const adminController = require('../controllers/adminController')
const checkRole = require("../midlleware/checkRoleMiddleware");
const getSystemSourceMiddleware = require("../midlleware/getSystemSourceMiddleware");

router.get('/isBaseInit', adminController.isBaseInit)
router.get('/galleryCount', adminController.getGalleryCount)
router.post('/initBase', adminController.initBase)
router.post('/login', adminController.login)
router.post('/create', checkRole, adminController.createSite)
router.post('/', checkRole, adminController.updateSite)
router.post('/addImage', checkRole, adminController.addImage)
router.get('/users/', checkRole, getSystemSourceMiddleware, adminController.getAllUsers)
router.get('/users/:id', checkRole, getSystemSourceMiddleware, adminController.getOneUser)
router.get('/', checkRole, adminController.getAllWebsites)
router.get('/:id', checkRole, adminController.getOneWebsite)
router.post('/changeUserData', checkRole, adminController.changeUserData)
router.post('/removeUser', checkRole, adminController.removeUser)

module.exports = router
