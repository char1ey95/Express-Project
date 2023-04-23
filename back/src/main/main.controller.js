class MainController {
    constructor({ mainService }){
        this.mainService = mainService
    }

    getMain = (req, res, next) => {
        try {
            const { token, level } = req.cookies
            res.render('index.html', { token, level })
        } catch (e) {
            next(e)
        }
    }
}

module.exports = MainController