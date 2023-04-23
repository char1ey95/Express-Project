const express = require("express")
const router = express.Router()
const { main, user, board, admin } = require("../src/index")

router.use('/', main)
router.use('/user', user)
router.use('/board', board)
router.use('/admin', admin)

module.exports = router