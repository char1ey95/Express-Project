const service = require('../services/board.service')

exports.getList = async(req, res) => {
    const itemList = await service.serviceList()
    
    res.render('board/list.html', {itemList})

}

// exports.getWrite = (req, res) => {
//     // res.send('hi')
//     res.render('board/write.html')
// }

// exports.postWrite = (req, res) => {
//     res.redirect('/board/view')
// }

exports.getView = async(req, res) => {
    const itemView = await service.serviceView(req.query.index)

    res.render('board/view.html', {itemView})
}

// exports.getModify = (req, res) => {
//     res.render('board/modify.html')
// }

// exports.postModify = (req, res) => {
//    res.redirect()
// }