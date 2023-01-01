const express = require('express')
const router = express.Router()
const controller = require('../controller/admin.controller')

router.get('/', controller.getAdmin)
router.get('/login', controller.getLogin)
router.get('/userEdit', controller.getProfile)

router.post('/', controller.postUpdate)
router.post('/login', controller.postLogin)


module.exports = router