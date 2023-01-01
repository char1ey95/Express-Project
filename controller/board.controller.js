const service = require('../services/board.service')


// list
exports.getList = async(req, res) => {
    const itemList = await service.serviceList()
    res.render('board/list.html', {itemList})
}

// write
exports.getWrite = (req, res) => {
    const user_id = req.cookies.token
    res.render('board/write.html', {user_id})
}

exports.postWrite = async(req, res) => {
    const user_id = req.cookies.token
    await service.serviceWrite(req.body, user_id)
    res.redirect('/board/list')
}

// view
exports.getView = async(req, res) => {
    const itemView = await service.serviceView(req.query.index)
    res.render('board/view.html',{itemView})
}

// modify
exports.getModify = async(req, res) => {
    const itemModify = await service.serviceView(req.query.index) 
    res.render('board/modify.html', {itemModify})
}

exports.postModify = async(req, res) => {
    await service.serviceModify(req.body, req.query.index)
    res.redirect(`/board/view?index=${req.query.index}`)
}

// delete
exports.postDelete = async(req,res) => {
    await service.serviceDelete(req.query.index)
    res.redirect('/board/list')
}