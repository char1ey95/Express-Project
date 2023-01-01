const express = require('express')
const router = express.Router()
const controller = require('../controller/admin.controller')

router.get('/', controller.getLogin)

router.get('/userList', controller.getAdmin)

router.get('/userEdit', controller.getProfile)

router.post('/', controller.postUpdate)
router.post('/userList', controller.postLogin)


module.exports = router