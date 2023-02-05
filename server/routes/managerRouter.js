const Router = require('express');
const router = new Router();
const managerController = require('../controllers/managerController')
const getSystemSourceMiddleware = require("../midlleware/getSystemSourceMiddleware");

router.get('/pages', getSystemSourceMiddleware, managerController.getSiteBySystemSource)

module.exports = router
