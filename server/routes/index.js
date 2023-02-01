const Router = require('express')
const router = new Router()
const itemRouter = require('./itemRouter')
const typeRouter = require('./typeRouter')
const brandRouter = require('./brandRouter')
const userRouter = require('./userRouter')
const adminRouter = require('./adminRouter')
const cartRouter = require('./cartRouter')
const orderRouter = require('./orderRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/item', itemRouter)
router.use('/admin', adminRouter)
router.use('/cart', cartRouter)
router.use('/order', orderRouter)

module.exports = router
