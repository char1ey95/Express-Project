const express = require("express")
const { adminController } = require("./admin.module")
const router = express.Router()

router.get('/', (req, res, next) => adminController.getLogin(req, res, next))
router.post('/', (req, res, next) => adminController.postLogin(req, res, next))

router.get('/userList', (req, res, next) => adminController.getAdmin(req, res, next))
router.post('/userList', (req, res, next) => adminController.postUpdate(req, res, next))

router.get('/userEdit', (req, res, next) => adminController.getProfile(req, res, next))

module.exports = router