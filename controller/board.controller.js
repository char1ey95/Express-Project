const service = require('../services/board.service')

exports.getList = async(req, res) => {
    const itemList = await service.serviceList()
    
    res.render('board/list.html', {itemList})
}

exports.getWrite = (req, res) => {

    res.render('board/write.html')
}

// this.getList()
exports.getView = async(req, res) => {
    const itemView = await service.serviceView(req.query.index)

    res.render('board/view.html',{itemView})
}

exports.getModify = async(req, res) => {
    const itemModify = await service.serviceView(req.query.index) 

    res.render('board/modify.html', {itemModify})
}

// post
exports.postWrite = async(req, res) => {
    await service.serviceWrite(req.body)

    res.redirect('/board/list')
}

exports.postModify = async(req, res) => {
    await service.serviceModify(req.body, req.query.index)
    res.redirect(`/board/view?index=${req.query.index}`)
}

exports.postDelete = async(req,res) => {
    await service.serviceDelete(req.query.index)
    res.redirect('/board/list')
}