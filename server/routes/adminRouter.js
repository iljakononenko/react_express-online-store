const Router = require('express')
const router = new Router()
const adminController = require('../controllers/adminController')

router.post('/create', adminController.create)
router.post('/', adminController.update)
router.get('/', adminController.getAll)
router.get('/:id', adminController.get)

module.exports = router
