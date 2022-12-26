const service = require('../services/board.service')

exports.getList = (req, res) => {
    res.render('board/list.html')
}

exports.getWrite = (req, res) => {
    res.render('board/write.html')
}

// exports.postWrite = (req, res) => {
//    res.redirect()
// }

exports.getView = (req, res) => {
    res.render('board/view.html')
}

exports.getModify = (req, res) => {
    res.render('board/modify.html')
}

// exports.postModify = (req, res) => {
//    res.redirect()
// }