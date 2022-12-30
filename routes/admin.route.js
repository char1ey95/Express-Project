const express = require('express')
const router = express.Router()
const controller = require('../controller/admin.controller')

router.get('/', controller.getAdmin)
router.post('/login', controller.postLogin)
router.get('/login', controller.getLogin)


module.exports = router