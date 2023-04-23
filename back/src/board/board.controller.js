class BoardController {
    constructor({ boardService }){
        this.boardService = boardService
    }

    getList = async(req, res, next) => {
        try {
            const { token } = req.cookies
            const { level } = await this.boardService.serviceLogin(token)
            const itemList = await this.boardService.serviceList()
            res.setHeader('Set-Cookie', `level=${level}; path=/board;`)
            res.render('board/list.html', {itemList})
        } catch (e) {
            next(e)
        }
    }
    
    // write
    getWrite = (req, res, next) => {
        try {
            const user_id = req.cookies.token
            res.render('board/write.html', {user_id})
        } catch (e) {
            next(e)
        }
    }
    
    postWrite = async(req, res, next) => {
        try {
            const user_id = req.cookies.token
            await this.boardService.serviceWrite(req.body, user_id)
            res.redirect('/board/list')
        } catch (e) {
            next(e)
        }
    }
    
    // view
    getView = async(req, res, next) => {
        try {
            const itemView = await this.boardService.serviceView(req.query.index)
            res.render('board/view.html',{itemView})
        } catch (e) {
            next(e)
        }
    }
    
    // modify
    getModify = async(req, res, next) => {
        try {
            const user_id = req.body.user_id
            const logInUser = req.cookies.token
            const logInLevel = req.cookies.level
            if( user_id !== logInUser && logInLevel === '3') return next(new Error('삭제 권한이 없습니다.'))
            const itemModify = await this.boardService.serviceView(req.query.index) 
            res.render('board/modify.html', {itemModify})
        } catch (e) {
            next(e)
        }
    }
    
    postModify = async(req, res, next) => {
        try {
            await this.boardService.serviceModify(req.body, req.query.index)
            res.redirect(`/board/view?index=${req.query.index}`)
        } catch (e) {
            next(e)
        }
    }
    
    // delete
    postDelete = async(req,res,next) => {
        try {
            const user_id = req.body.user_id
            const logInUser = req.cookies.token
            const logInLevel = req.cookies.level
            if( user_id !== logInUser && logInLevel === '3') return next(new Error('삭제 권한이 없습니다.'))
            await this.boardService.serviceDelete(req.query.index)
            res.redirect('/board/list')
        } catch (e) {
            next(e)
        }
    }

}

module.exports = BoardController