const express = require("express")
const router = express.Router()
const main = require("../src/main/main.routes")

router.use('/', main)

module.exports = router