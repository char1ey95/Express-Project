const express = require("express")
const { mainController } = require("./main.module")
const router = express.Router()


router.get('/', (req, res, next) => mainController.getMain(req, res, next))

module.exports = router