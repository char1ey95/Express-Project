const express = require("express")
const { userController } = require("./user.module")
const router = express.Router()


router.get('/join', (req, res, next) => userController.getJoin(req, res, next))
router.post('/join', (req, res, next) => userController.postJoin(req, res, next))

router.get('/welcome', (req, res, next) => userController.getWelcome(req, res, next))

router.get('/login', (req, res, next) => userController.getLogin(req, res, next))
router.post('/login', (req, res, next) => userController.postLogin(req, res, next))

router.get('/logout', (req, res, next) => userController.getLogout(req, res, next))

router.get('/profile', (req, res, next) => userController.getProfile(req, res, next))

module.exports = router