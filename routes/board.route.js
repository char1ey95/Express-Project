const express = require('express')
const router = express.Router()
const controller = require('../controller/board.controller')

router.get('/list', controller.getList)

router.get('/write', controller.getWrite)
// router.post('/write', controller.postWrite)

router.get('/view', controller.getView)

router.get('/modify', controller.getModify)
// router.post('/modify', controller.postModify)

module.exports = router