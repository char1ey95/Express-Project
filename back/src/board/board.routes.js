const express = require("express")
const { boardController } = require("./board.module")
const router = express.Router()

// list
router.get('/list', (req, res, next) => boardController.getList(req, res, next))

// view
router.get('/view', (req, res, next) => boardController.getView(req, res, next))

// write
router.get('/write', (req, res, next) => boardController.getWrite(req, res, next))
router.post('/write', (req, res, next) => boardController.postWrite(req, res, next))

// modify
router.get('/modify', (req, res, next) => boardController.getModify(req, res, next))
router.post('/modify', (req, res, next) => boardController.postModify(req, res, next))

// delete
router.post('/view', (req, res, next) => boardController.postDelete(req, res, next))

module.exports = router